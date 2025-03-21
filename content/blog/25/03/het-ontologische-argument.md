---
title: "Het ontologische argument"
author: "Karl van Heijster"
date: 2025-03-21T08:15:52+01:00
draft: false
comments: true
tags: ["intentie van code", "filosofie", "refactoren", "software ontwikkelen"]
summary: "Onlangs pairde ik met een nieuwe collega. We hadden een refactortaak opgepakt om wat ondoorgrondelijke code rondom onze zoekindex te versimpelen. Ergens halverwege die refactorslag zei hij iets wat mijn aandacht trok."
---

Onlangs [pairde](/tags/pair-programming/ "Blogs met de tag 'pair programming'") ik met een nieuwe collega. We hadden een refactortaak opgepakt om wat ondoorgrondelijke code rondom onze zoekindex te versimpelen. Ergens halverwege die refactorslag zei hij iets wat mijn aandacht trok.


## Context


Maar eerst: wat context. Mijn team ontwikkelt een [REST](/tags/representational-state-transfer-rest/ "Blogs met de tag 'representational state transfer (REST)'")-API voor de entiteiten in het toetsconstructiedomein, zoals `AssessmentTest` (toets) en `Item` (toetsvraag). Vanuit de front-end ontstond er een behoefte om over diverse entiteiten heen te kunnen zoeken. De REST-standaard is daar niet heel erg voor geschikt, dus introduceerden we een nieuw endpoint waar een zoekopdracht naartoe kan worden gestuurd. 


Onder de motorkap van dat endpoint zit een zoekindex waarin verschillende entiteiten zijn verenigd in één generiek model. Bijvoorbeeld: `AssessmentTest` kent een property `Title` en `Item` een `Name`. In het zoekmodel worden de titel en naam ondergebracht in het veld `HumanReadableIdentifier`. Op die manier houden we (1) het zoekmodel behapbaar, want het hoeft niet een aparte property te hebben voor elke property in onze domeinmodellen; en (2) isoleren we het voor wijzigingen in het model van onze entiteiten.


Een gebruiker van onze API heeft wel weet van ons domeinmodel, maar natuurlijk niet van het onderliggende zoekmodel -- dat is "maar" een implementatiedetail. Als deze dus een `AssessmentTest` zoekt met een bepaalde `Title`, dan moet dat verzoek om worden gezet naar een verzoek om te zoeken op een bepaalde `HumanReadableIdentifier`.


De gebruiker kan meegeven op welke property en op welke waarde hij wil zoeken middels een [JSON](https://www.json.org/json-en.html "json.org")-object dat wordt omgezet naar een `SearchFilter`:


```cs
public class SearchFilter
{
    public string PropertyName { get; init; }
    public string[] Values { get; init; }
}
```


De `SearchFilter` met de `PropertyName` uit het domeinmodel wordt in de code vervangen door een `SearchFilter` met de equivalente `PropertyName` uit het zoekmodel. De gebruiker zal aan `PropertyName` bijvoorbeeld de waarde `"Title"` meegeven. De code zet die waarde om naar de equivalente waarde in het zoekmodel, `"HumanReadableIdentifier"`. 


## Refactoring


De oorspronkelijke implementatie van de code kende weinig encapsulatie van informatie. Zo bevatte de code die de zoekindex aanriep, een [switch statement](/tags/switch-statements/ "Blogs met de tag 'switch statements'") op de waarde van elke ondersteunde property, gevolgd door een hard coded query.


Na een tijd lang naar de code te hebben gestaard, was het me opgevallen dat de query meestal kon worden afgeleid van de `PropertyName`. Want deze had meestal de vorm: `$"search.in({PropertyName}, {Values}, ',')"`. (Op de uitzonderingen kom ik zo.) De code die de zoekindex aanriep hoefde dus helemaal geen weet te hebben van elke ondersteunde property: in principe zou je elke `SearchFilter` algoritmisch de juiste query kunnen laten genereren.


```cs
public class SearchFilter
{
    public string PropertyName { get; init; }
    public string[] Values { get; init; }

    public string ToQuery() => 
        $"search.in({PropertyName}, {Values}, ',')";
}
```


Maar deze oplossing was iets te kort door de bocht. Sommige query's varieerden op dit thema omdat de verzochte property in het zoekmodel als lijst was uitgemodelleerd. In dat geval zou de query er als volgt uit moeten komen te zien: `$"{PropertyName}/any(x: search.in(x, '{Values}', ','))"`.


Ik introduceerde een `IQueryStrategy` met twee implementaties: één om met de "normale" property's om te kunnen gaan, en één voor lijsten. Die [*strategy*](https://refactoring.guru/design-patterns/strategy/csharp/example "'Strategy in C#', Refactoring.guru") zou mee moeten worden gegeven aan de `SearchFilter`.


```cs
public interface IQueryStrategy 
{
    string ToQuery(SearchFilter filter);
}

public class PropertyQuery : IQueryStrategy
{
    public string ToQuery(SearchFilter filter) =>
        $"search.in({filter.PropertyName}, {filter.Values}, ',')";
}

public class ListQuery : IQueryStrategy
{
    public string ToQuery(SearchFilter filter) =>
        $"{filter.PropertyName}/any(x: search.in(x, '{filter.Values}', ','))";
}

public class SearchFilter(IQueryStrategy query)
{
    public string PropertyName { get; init; }
    public string[] Values { get; init; }

    public string ToQuery() => query.ToQuery(this);
}
```


Deze refactoring zorgde ervoor dat we afscheid konden nemen van het switch statement. Het was nu niet meer de verantwoordeljkheid van de code die de zoekindex aanriep om de juiste query bij de juiste `SearchFilter` te zoeken, maar de verantwoordelijkheid van de `SearchFilter` zelf.


## Ontwerpintuïtie


Maar iets zat me nog niet helemaal lekker aan deze oplossing. Dat zat 'm hierin. Een gebruiker van ons endpoint, kan zijn zoekfilters meegeven via JSON in de querystring. Dit wordt bij binnenkomst gedeserialiseerd naar een `SearchFilter`. 


In de oorspronkelijke implementatie was dat zonder problemen: `SearchFilter` was immers slechts een eenvoudige DTO met niet meer dan wat publieke properties. Maar in de nieuwe implementatie heeft het object ook een `query`-field, die na deserialisatie `null` zal zijn. 


Ik zei tegen mijn collega (nu komen we ein-de-lijk bij het punt dat ik wilde bespreken!): "Mijn [ontwerpintuïtie](/blog/23/12/codefluisteren/ "'Codefluisteren'") zegt me: splits die twee objecten. Ik ben geneigd om een `SearchFilterDto` of iets dergelijks te willen definiëren. Die heeft geen weet van het feit dat 'ie naar een query moet worden omgezet. En die DTO moeten we dan transformeren naar een `SearchFilter` die daar wel weet van heeft."


Het idee ontleende ik aan [Mark Seemann](https://blog.ploeh.dk/). In hoofdstuk 7 van [*Code That Fits in Your Head*](https://www.oreilly.com/library/view/code-that-fits/9780137464302/ "'Code That Fits in Your Head: Heuristics for Software Engineering', Mark Seemann, O'Reilly Media") introduceert hij een apart object om gebruikersinput in te vangen, dat hij vervolgens omzet naar een object in het domeinmodel. Als de omzetting mislukt, dan voldeed de input van de gebruiker niet aan de voorwaarden om ermee te kunnen werken in het domein. (Zie ook [deze blog](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/ "'Parse, Don't Validate', Alexis King").)


## Ontologie


Maar mijn collega was het daar niet mee eens. Een extra class introduceerde in zijn beleving meer complexiteit dan dat het oploste. Hij haalde herinneringen op aan codebases die uit hun voegen barstten van objecten die subtiel van elkaar verschilden maar waarvan de programmeurs de *raison d'etre* zelf ook niet heel goed meer konden uitleggen. 


En toen bracht hij een argument in dat me mijn oren deed spitsen: "[Ontologisch](https://en.wikipedia.org/wiki/Ontology "'Ontology', Wikipedia") zijn de twee objecten die je voorstelt volgens mij hetzelfde." -- Hoe fijn is het, om na al die jaren, eindelijk een [medefilosoof](/tags/filosofie/ "Blogs met de tag 'filosofie'") te vinden! De synapsen in mijn hersenen maakten onmiddellijk overuren om te duiden wat hij zei -- maar de programmeur in mij won het (voorlopig!) van de wijsgeer, en om de refactorslag tot een goed einde te brengen besloot ik die discussie te parkeren.


Gelukkig is er nu geen ondoorgrondelijk stuk code dat mijn aandacht vraagt. Volgens mij bedoelde mijn collega dit: beide representaties, `SearchFilter` en `SearchFilterDto`, verwijzen naar hetzelfde *ding*, hetzelfde *zijnde* ligt aan hen ten grondslag. -- En daar ben ik het mee eens. Beide classes representeren datgene waar een gebruiker op wil kunnen filteren (wat dat dan ook voor iets moge zijn).


Maar in wat daaruit volgt, verschilden we en ik van mening. Zoals mijn collega het argument inzette, lijkt hij de volgende veronderstelling te onderschrijven: dat één ding (of zijnde) één representatie moet hebben in een systeem -- een op software toegesneden toepassing van [Ockhams scheermes](https://en.wikipedia.org/wiki/Occam%27s_razor "'Occam's razor', Wikipedia"), zou je kunnen zeggen. Het is een interessante en belangwekkende gedachte. En inderdaad: waarom zou je twee of meer classes introduceren om één en hetzelfde ding te beschrijven? 


## Perspectieven


Mijn antwoord op die vraag zou zijn: omdat je één en hetzelfde ding vanuit meerdere perspectieven kunt beschrijven. Een voorbeeld. Naast mijn kledingkast staat een eenvoudig klapstoeltje, waar ik 's avonds de trui of het vest overheen gooi dat ik de dag erop nog wil dragen. Welnu, ik kan die stoel op twee verschillende manieren beschrijven: als zitmeubel of als kledingrek. 


Afhankelijk van hoe ik de stoel benader, heeft deze verschillende -- voor het perspectief relevante -- eigenschappen. (Zie ook [deze blog](/blog/24/12/de-filosofische-geschiedenis-van-een-ontwerpkeuze/ "'De filosofische geschiedenis van een ontwerpkeuze'").) Als zitmeubel is het van belang dat de stoel lekker zit. Maar als kledingrek vind ik het veel belangrijker dat de vorm van de rugleuning zodanig is dat mijn kleren er niet vanaf glijden. Als de vorm van die rugleuning ervoor zorgt dat je er nauwelijks op kunt zitten, dan is de stoel mislukt *als zitmeubel* maar niet per se *als kledingrek*.


Als ik die stoel in code zou moeten vangen, dan zou ik daarom twee verschillende representaties, twee verschillende classes van de stoel uitschrijven. Welke van de twee ik kies, is afhankelijk van de context. -- Maar daaruit volgt niet dat ik meen dat er twee stoelen zijn. Op ontologisch niveau is er één stoel, en beide representaties beschrijven deze vanuit een andere invalshoek.[^1]


## Beslissingsfactor


Mijn stelling zou zijn: een `SearchFilterDto` beschrijft *datgene waar een gebruiker op wil filteren* vanuit het perspectief van een gebruiker (*viz.* de externe API), en een `SearchFilter` *datgene waar een gebruiker op wil filteren* vanuit het perspectief van het systeem (het interne model). Ontologisch bezien zijn ze één en hetzelfde, maar het verschil in context zou een verschil in representatie kunnen rechtvaardigen. 


(Of dat hier ook het geval is, laat ik voor nu even in het midden. Dat zal pas blijken als ik een begin zou maken met die refactoring, en constateer dat dit eenvoudiger hanteerbare code oplevert. Denk aan de woorden van [George Box](https://en.wikipedia.org/wiki/George_E._P._Box "'George E. P. Box', Wikipedia"): ["*All models are wrong, but some are useful.*"](https://en.wikipedia.org/wiki/All_models_are_wrong "'All models are wrong', Wikipedia"))


Ontologie op zichzelf bepaalt niet hoe we de code vorm dienen te geven. En -- hoe pijnlijk ik het als filosoof ook vind om het te moeten concluderen -- het is daarom geen doorslaggevende beslissingsfactor in de manier waarop we code vormgeven. Desalniettemin, de volgende keer wil ik er best met mijn collega over filosoferen!


[^1]: De discussie is in zekere zin semantisch, want je zou in principe een ontologie kunnen aannemen die impliceert dat er wel twee stoelen bestaan. Maar laten we in dit geval uitgaan van een op *common sense* gebaseerde ontologie. 
