---
title: "Wie is er bang voor adapterfuncties?"
author: "Karl van Heijster"
date: 2025-02-07T08:58:01+01:00
draft: true
comments: true
tags: ["code lezen", "intentie van code", "functioneel programmeren", "ontwerppatronen", "pipeline-oriented programming", "primitive obsession", "refactoren", "software ontwikkelen", "waarde"]
summary: "Adapters zijn een bekend ontwerppatroon in de softwareontwikkeling. Toch kwam deze oplossingsrichting niet onmiddellijk bij me op toen ik een stuk code in onze zoekindex begon te refactoren (om van de oorspronkelijke schrijver nog maar te zwijgen!). In plaats daarvan gaven onze eerste pogingen er blijk van koste wat kost te willen blijven werken met de \"standaard\"-functies. -- Waarom?"
---

Eén van de belangrijkste eigenschappen van goede code is leesbaarheid.[^1] Leesbare code communiceert duidelijk zijn [intentie](/tags/intentie-van-code/ "Blogs met de tag 'intentie van code'") en is eenvoudig te begrijpen. Leesbare code is onderhoudbare code, onderhoudbare code is eenvoudig aanpasbare code, eenvoudig aanpasbare code is kwalitatief hoogstaande code. (Zie ook [deze blog](/blog/24/07/goede-code-is-geteste-code/ "'Goede code is geteste code'").)


Code structureren als een [*pipeline*](https://en.wikipedia.org/wiki/Pipeline_(software) "'Pipeline (software)', Wikipedia") is een van mijn favoriete manieren om de leesbaarheid van code te bevorderen. (Zie bijvoorbeeld [deze blog](/blog/24/09/bind-map-en-match/ "'Bind, Map en Match'"). Voor een uitgebreide inleiding, zie [dit praatje](https://www.youtube.com/watch?v=ipceTuJlw-M "'Pipeline-oriented programming - Scott Wlaschin - NDC Porto 2023'") van [Scott Wlaschin](https://scottwlaschin.com/).) In een *pipeline* wordt een stuk logica uitgeprogrammeerd als een reeks opeenvolgende datatransformaties, waarbij de output van de ene transformatie dient als input voor de volgende. Wie wil begrijpen wat de code doet, hoeft alleen maar de code van boven naar beneden te lezen.


## Zoekopdracht


Laatst deed zich een mooie gelegenheid voor om een *pipeline* te introduceren. Onze code moest een zoekopdracht die een gebruiker invoerde, omzetten naar iets wat onze zoekindex zou kunnen interpreteren. (Zie ook [deze blog](... "'Het ontologische argument'").) De code verving een aantal karakters op basis van verschillende [*regular expressions*](https://en.wikipedia.org/wiki/Regular_expression "'Regular expression', Wikipedia") (RegEx), zette spaties om naar `+`'jes, moest sommige combinaties van zoekwoorden met haakjes (`"`) omarmen.


De code deed wat het moest doen, maar verdiende geen schoonheidsprijs.[^2]


```cs
static string ToSearchIndexKeyWords(string input)
{
    var cleanedKeyWords = 
        RegExC().Replace(
            RegExB().Replace(
                RegExA().Replace(input, "-"),
            "|"), 
        "|")
        .Replace(' ', '+');
    var cleaned = string.Join("|", cleanedKeyWords
        .Split("|")
        .Select(keyword => RegExD().IsMatch(keyword) 
            ? $"\"{keyword}\"" 
            : keyword));
    return cleaned;
}
```


## *Pyramid of doom*


Het eerste wat me opviel waren de geneste aanroepen naar de verschillende RegEx-methodes, die bovendien, geheel tegen je gebruikelijke intuïtie in, binnen naar buiten dienden te worden gelezen. Het is een klassiek voorbeeld van een [*pyramid of doom*](/blog/24/02/callback-hell/ "'/blog/24/02/callback-hell/'"). Zulke structuren bieden over het algemeen een goede gelegenheid om *pipelines* te introduceren. 


Hoe zouden we dit aan moeten vliegen? Het eerste wat ik deed, was de geneste structuur uit elkaar halen om een beter overzicht van de code te verkrijgen.


```cs
var tempA = RegExA().Replace(input, "-");
var tempB = RegExB().Replace(tempA, "|");
var tempC = RegExC().Replace(tempB, "|");
var cleanedKeyWords = tempC.Replace(' ', '+');
var cleaned = string.Join("|", cleanedKeyWords
    .Split("|")
    .Select(keyword => RegExD().IsMatch(keyword) 
        ? $"\"{keyword}\"" 
        : keyword));
return cleaned;
```


Zo onder elkaar gezet, ziet de code er al een stuk netter uit, vind je niet?


## Opschonen


Laten we, nu we toch bezig zijn met het uit elkaar halen van zaken, het opsplitsen en tussen haakjes zetten van de `cleanedKeyWords` op een logischer plek zetten -- weg uit de aanroep naar `string.Join`.


```cs
var tempA = RegExA().Replace(input, "-");
var tempB = RegExB().Replace(tempA, "|");
var tempC = RegExC().Replace(tempB, "|");
var cleanedKeyWords = tempC
    .Replace(' ', '+')
    .Split("|")
    .Select(keyword => RegExD().IsMatch(keyword) 
        ? $"\"{keyword}\"" 
        : keyword);
var cleaned = string.Join("|", cleanedKeyWords);
return cleaned;
```


We beginnen al duidelijk de contouren van een *pipeline* te zien. Maar laten we eerst ten behoeve van de leesbaarheid de logica in de `Select` naar een aparte methode verhuizen. Dat stelt ons in staat om ons zonder afleiding te focussen op die drie transformaties bovenaan de methode.


```cs
var tempA = RegExA().Replace(input, "-");
var tempB = RegExB().Replace(tempA, "|");
var tempC = RegExC().Replace(tempB, "|");
var cleanedKeyWords = tempC
    .Replace(' ', '+')
    .Split("|")
    .Select(QuoteIfD);
var cleaned = string.Join("|", cleanedKeyWords);
return cleaned;

static string QuoteIfD(string keyword) =>
    RegExD().IsMatch(keyword) 
        ? $"\"{keyword}\"" 
        : keyword;
```


## Adapter


We zouden graag van de tijdelijke variabelen af willen. We zouden graag de input van de ene aanroep naar `Replace` direct door willen geven aan de volgende aanroep naar `Replace`. Maar dat is op dit moment onmogelijk. Om een *pipeline* te kunnen vormen, moeten we een methode `Replace` aan kunnen roepen op een [`string`](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/strings/ "'Strings and string literals', Microsoft documentatie") (zoals ook op `tempC` gebeurt). Maar de `Replace` die we in de eerste drie regels tegenkomen, is een methode op de [`Regex`-class](https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex?view=net-9.0 "'Regex Class', Microsoft documentatie") en verwacht een `string` als input parameter. De in- en outputs van de functies sluiten niet op elkaar aan, waardoor een pipeline uitgesloten is.


Maar dat betekent niet dat we op hoeven te geven. *We hebben als programmeurs de macht om de in- en outputs van functies op elkaar aan te sluiten.* We kunnen een functie definiëren die de signatuur van de huidige functie omzet naar de signatuur van de gewenste functie: een [adapter](https://refactoring.guru/design-patterns/adapter "'Adapter', refactoring.guru").


```cs
static string Replace(
    this string input, 
    Regex regex, 
    string replacement) =>
    regex.Replace(input, replacement);
```


Dat stelt ons in staat de code zo te herschrijven:


```cs
var cleanedKeyWords = input
    .Replace(RegExA(), "-")
    .Replace(RegExB(), "|")
    .Replace(RegExC(), "|")
    .Replace(' ', '+')
    .Split("|")
    .Select(QuoteIfD);
var cleaned = string.Join("|", cleanedKeyWords);
return cleaned;
```


## Resultaat


En wat we met RegEx kunnen doen, kunnen we ook met `string.Join`.

```cs
static string Join(
    this IEnumerable<string> input, 
    string separator) =>
    string.Join(separator, input);
```


Wat ons uiteindelijk een hartstikke mooie *pipeline* oplevert, die van boven naar beneden precies vertelt wat 'ie bij elke stap doet:


```cs
static string ToSearchIndexKeyWords(string input) =>
    input.Replace(RegExA(), "-")
        .Replace(RegExB(), "|")
        .Replace(RegExC(), "|")
        .Replace(' ', '+')
        .Split("|")
        .Select(QuoteIfD)
        .Join("|");
```


Ik ben geneigd dit een vooruitgang te noemen ten opzichte van de oorspronkelijke implementatie, wat jij?


## Wie is er bang voor adapters?


Adapters zijn een bekend [ontwerppatroon](/tags/ontwerppatronen/ "Blogs met de tag 'ontwerppatronen'") in de softwareontwikkeling. Toch kwam deze oplossingsrichting niet onmiddellijk bij me op toen ik de code begon te refactoren (om van de oorspronkelijke schrijver nog maar te zwijgen!). In plaats daarvan gaven onze eerste pogingen er blijk van koste wat kost te willen blijven werken met de "standaard"-functies.[^3] -- Waarom?


Ik denk dat het antwoord in de volgende richting moet worden gezocht: adapters voegen geen functionaliteit toe. Het is mogelijk om de code werkend te krijgen met gebruik van de bouwblokken die de standaardclasses in je ecosysteem je bieden. En *de code werkend krijgen* is eerst en vooral onze taak als ontwikkelaar. Zonder werkende code heeft ons werk immers geen bestaansrecht.


Die focus op functionaliteit werpt een schaduw over andere verantwoordelijkheden die we hebben, zoals het *leesbaar* (en dus onderhoudbaar) maken van de werkende code. Wie een te sterke focus heeft op functionaliteit, ziet alle code die "slechts" ten behoeve van leesbaarheid wordt geïntroduceerd als *overhead* -- het introduceren van code omwille van de code.


Maar de nadruk op werkende code is te eenzijdig. De waarde die je toevoegt als ontwikkelaar is niet alleen *directe* waarde voor de gebruikers van je applicatie, maar ook *indirecte* waarde door het systeem op zo'n manier te ontwikkelen dat deze eenvoudig aan te passen is als gebruikers om nieuwe functionaliteit vragen.


[^1]: [*Clean Code*](https://www.pearson.com/us/higher-education/program/Martin-Clean-Code-A-Handbook-of-Agile-Software-Craftsmanship/PGM63937.html) van [Robert C. Martin](http://cleancoder.com/products) was het eerste boek dat me daarop wees; het was [mijn favoriete boek van 2020](/blog/21/05/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2020-las/ "'De beste boeken over software ontwikkeling die ik in 2020 las'"). [*The Art of Readable Code*](https://www.oreilly.com/library/view/the-art-of/9781449318482/) van [Dustin Boswell](https://www.linkedin.com/in/dustin-boswell-57406626/) en [Trevor Foucher](https://www.linkedin.com/in/trevor-foucher-628b79/) las ik niet lang daarna en werd nogal ondergesneeuwd door die eerste kennismaking, maar is ook een aanrader.

[^2]: De daadwerkelijke inhoud van de operaties is voor deze blog minder van belang. De verschillende soorten RegEx heb ik daarom `RegExA`, `RegExB` etc. genoemd. Deze namen verwijzen naar methods die zijn [gedecoreerd met het `GeneratedRegexAttribute`](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-source-generators "'.NET regular expression source generators', Microsoft documentatie"). Ik heb de code hier en daar uit elkaar getrokken en versimpeld voor de leesbaarheid.

[^3]: Je zou het kunnen omschrijven als een soort [*primitive obsession*](/tags/primitive-obsession/ "Blogs met de tag 'primitive obsession'"), maar dan buiten de gebruikelijke context van domeinmodellen en functie-argumenten.
