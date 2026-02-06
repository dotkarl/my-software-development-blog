---
title: "Entity services en het contextprincipe"
author: "Karl van Heijster"
date: 2026-02-06T08:57:38+01:00
draft: true
comments: true
tags: ["domain-driven design", "filosofie", "microservices", "Wittgenstein, Ludwig"]
summary: "Een domein bestaat uit een aantal entiteiten. Voor een webwinkel zijn dat dingen als *product*, *winkelwagentje* en *bestelling*. Zulke entiteiten verwachten we terug te vinden in onze code: `Product`, `ShoppingCart` en `Order`. In veel codebases vinden we, naast deze entiteiten, corresponderende objecten: services. De logica rondom een *product* wordt afgehandeld in de `ProductService`, die van een *winkelwagentje* in een `ShoppingCartService` -- en waar je de logica voor een *bestelling* kunt vinden, kun je vast wel raden. Het gedachteloos introduceren van dit soort *entity services* is me een doorn in het oog."
---

Een domein bestaat uit een aantal entiteiten. Voor een webwinkel zijn dat dingen als *product*, *winkelwagentje* en *bestelling*. Zulke entiteiten verwachten we, als we aan [Domain-Driven Design](/tags/domain-driven-design/ "Blogs met de tag 'domain-driven design'") (DDD) doen, terug te vinden in onze code: `Product`, `ShoppingCart` en `Order`. Tot dusver niets controversieels.


In veel codebases vinden we, naast deze entiteiten, corresponderende objecten: services. De logica rondom een *product* wordt afgehandeld in de `ProductService`, die van een *winkelwagentje* in een `ShoppingCartService` -- en waar je de logica voor een *bestelling* kunt vinden, kun je vast wel raden. 


## Antipatroon


Het gedachteloos introduceren van dit soort [*entity services*](https://www.michaelnygard.com/blog/2017/12/the-entity-service-antipattern/ "'The Entity Service Antipattern', Michael Nygard") is me een doorn in het oog. Vaak bestaat zo'n service voor een groot deel uit *boiler plate* code, getuige de vele *pass through*-methods, waar [John Ousterhout](https://en.wikipedia.org/wiki/John_Ousterhout "'John Ousterhout', Wikipedia") terecht op afgeeft in [*A Philosophy of Software Design*](https://web.stanford.edu/~ouster/cgi-bin/aposd.php "John Ousterhout, 'A Philosophy of Software Design, 2nd Edition'"). Zulke methods weinig meer dan objecten uit de database rechtstreeks doorspelen naar de bovenliggende laag. Dat is al erg genoeg.


Maar de situatie verbetert nauwelijks wanneer businesslogica zijn weg vindt naar zulke services. Ze zijn een vergaarbak voor verschillende operaties, een excuusbrief voor ontwikkelaars om niet na te hoeven denken over zinvolle abstracties. 


De situatie wordt zo mogelijk nog erger wanneer de services gedachteloos in een [microservicesarchitectuur](/tags/microservices/ "Blogs met de tag 'microservices'") worden gepropt. Elke *entity service* kan dan -- in theorie -- apart worden gedeployd. Maar omdat de vele services gebruik van elkaar (moeten) maken, kan alleen een verzameling services zinvolle functionaliteit ontsluiten. Het gevolg is dat elke service alsnog in combinatie met andere moet worden getest. Het resultaat is een gedistribueerde monoliet.


*Entity services* zijn een antipatroon, dat is een empirische vaststelling. Maar waarom introduceren ontwikkelaars dan keer op keer deze pseudo-abstractie? Waar komt dan de aantrekkingskracht van dit idee vandaan?


## Betekenis


Ik geloof -- maar dat is, vergeef me, natuurlijk omdat ik filosofie heb gestudeerd -- dat de bron van dit idee ligt in de veronderstelling dat een woord op zichzelf een betekenis heeft. Wat, op zich, zou je denken, een heel redelijke veronderstelling is. Ga maar na: als je een woordenboek openslaat, wat vind je daar dan? Een lijst, jawel, woorden, op alfabetische volgorde nog wel, met daarachter hun betekenis. Dus als we het woordenboek mogen geloven, heeft een woord op zichzelf een betekenis.


Dat beeld van betekenis impliceert dat de betekenis van een zin wordt opgebouwd uit de betekenis van woorden. Woorden zijn de atomen, als het ware, die samen een betekenismolecuul vormen, dat is dan de zin. Maar bekijk de volgende zin eens:


> Ik heb het geld op de bank gezet.


'Ik,' dat ben ik; 'het geld', dat is een bepaalde hoeveelheid van een algemeen geaccepteerd ruilmiddel; '[ergens] op gezet' is wat ik met dat geld gedaan heb, ik heb het in zekere zin verplaatst. Maar wat is 'de bank'? Het kan de instantie zijn die mijn rekening beheert, dat is de meest voor de hand liggende interpretatie. Maar het kan ook betekenen: de zitmeubel. Hoe beslis ik of ik het geld naar de instantie heb gebracht die mijn rekening beheert, of dat ik het thuis op mijn zitmeubel heb gelegd?[^1]


Op basis van de woorden *alleen* kan ik die beslissing niet maken. Het woord *op zichzelf* is niet voldoende om de betekenis te bepalen. Dus er is iets anders wat de betekenis van 'de bank' vastlegt. Maar wat? 


Taalfilosoof [Gottlob Frege](https://plato.stanford.edu/entries/frege/ "'Gottlog Frege', Stanford Encyclopedia of Philosophy") meende: het is de zin. Hij zei: een woord heeft alleen betekenis in de context van een zin. Dat is zijn [contextprincipe](https://en.wikipedia.org/wiki/Context_principle "'Context principle', Wikipedia"). Dit idee vinden we ook terug in [Wittgensteins](/tags/wittgenstein-ludwig/ "Blogs met de tag 'Wittgenstein, Ludwig'") [*Tractatus Logico-Philosophicus*](https://www.gutenberg.org/files/5740/5740-pdf.pdf "Ludwig Wittgenstein, 'Tractatus Logico-Philosophicus' (PDF)") (in propositie 3.3, bijvoorbeeld).[^2] Later radicaliseerde Wittgenstein het contextprincipe in de notie van [taalspelen](https://en.wikipedia.org/wiki/Language_game_(philosophy) "'Language game (philosophy)', Wikipedia"). Daarin stelt hij dat de zin alleen niet voldoende is om betekenis te bepalen, maar dat socio-culturele context van de taaluiting mee moet worden genomen in de betekenisbepaling.


## *Bounded context*


Mijn stelling is: *entity services* veronderstellen dat woorden atomaire betekenisdragers zijn. Daarom denkt een programmeur van zo'n service dat het zin heeft om over een *product* of *winkelwagentje* of *bestelling* *an sich* te praten. En waar vindt dat gesprek plaats? In hun respectievelijke services.


Maar de betekenis van die woorden is niet eenduidig. Afhankelijk van de context, verkrijgen bepaalde eigenschappen van een *product* relevantie en worden andere juist betekenisloos. Een afbeelding van het *product* is relevant voor de (potentiële) koper ervan, maar niet voor de instantie die het op de post doet. Andersom kan die instantie zeer geïnteresseerd zijn in het gewicht van het *product*, maar dat zal de koper een zorg zijn. In een centrale `ProductService` worden beide [stakeholders](/tags/stakeholders/ "Blogs met de tag 'stakeholders'") bediend -- dat is hoe zo'n service een vergaarbak van functionaliteit wordt.


Of er een directe lijn kan worden getrokken van Frege naar [Eric Evans](https://www.domainlanguage.com/), durf ik niet te zeggen. Maar het is vanuit filosofisch oogpunt niet vreemd dat hij in [*Domain-Driven Design*](https://www.oreilly.com/library/view/domain-driven-design-tackling/0321125215/ "'Domain-Driven Design: Tackling Complexity in the Heart of Software', Eric Evans") van [*bounded contexts*](https://www.martinfowler.com/bliki/BoundedContext.html) spreekt. Hij heeft het contextprincipe gepopulariseerd in de wereld van softwareontwikkeling, zou je kunnen zeggen -- maar aan het aantal *entity services* te beoordelen, hebben we nog een lange weg te gaan.


[^1]: Natuurlijk, dit voorbeeld maakt gebruik van een toevallige eigenschap van de taal, namelijk dat 'bank' een [homoniem](https://nl.wikipedia.org/wiki/Homoniem "'Homoniem', Wikipedia") is. Die eigenschap maakt ambiguïteit in de taal expliciet. Maar het punt van het contextprincipe blijft staan, ook buiten deze toevalligheid om. De [*Philosophical Investigations*](https://en.wikipedia.org/wiki/Philosophical_Investigations "'Philosophical Investigations', Wikipedia") van [Ludwig Wittgenstein](https://plato.stanford.edu/entries/wittgenstein/ "'Ludwig Wittgenstein', Stanford Encyclopedia op Philosophy") werkt dit punt uit met de metafoor van [familiegelijkenis](https://en.wikipedia.org/wiki/Family_resemblance "'Family resemblance', Wikipedia").

[^2]: Eén van de eerste filosofen die het belang van Freges contextprincipe onderkende voor het werk van Wittgenstein, was [Gilbert Ryle](https://plato.stanford.edu/entries/ryle/ "'Gilbert Ryle', Stanford Encyclopedia of Philosophy") in zijn recensie van de eerste Engelse vertaling van Freges verzameld werk. De recensie is integraal afgedrukte in essaybundel [*Early Analytic Philosophy: Origins and Transformations*](https://www.routledge.com/Early-Analytic-Philosophy-Origins-and-Transformations/Conant-Nir/p/book/9781032378367 "James F. Conant & Gilad Nir (red.), 'Early Analytic Philosophy: Origins and Transformations', Routledge 2025"), die ik [recenseerde](https://boekenkrant.com/recensie/early-analytic-philosophy-origins-and-transformations/ "'Vijftien geschiedenissen van de analytische filosofie', Boekenkrant.com") voor [Boekenkrant](https://boekenkrant.com/). 
