---
title: "TDD en de testpiramide"
author: "Karl van Heijster"
date: 2026-01-23T11:49:05+01:00
draft: true
comments: true
tags: ["clean code", "integratietests", "end to end tests", "test-driven development", "testen", "testpiramide", "unit tests"]
summary: "Ik ruimde een boekenkast in op het werk, toen een collega me vroeg of ik wist hoe je een call naar een *keyed service* uit de `IServiceProvider` mockt. Nee, niet direct, zei ik. Maar waarom zou je dat überhaupt willen? Vanaf daar ontspon er een gesprek over Test-Driven Development, het ontwerp van code en de verschillende delen van de testpiramide."
---

Ik ruimde een boekenkast in op het werk, toen een collega me vroeg of ik wist hoe je een call naar een [*keyed service*](https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection#keyed-services "'Keyed services' in 'Dependency Injection', Microsoft Documentatie") uit de [`IServiceProvider`](https://learn.microsoft.com/en-us/dotnet/api/system.iserviceprovider "'IServiceProvider Interface', Microsoft documentatie") [mockt](/tags/mocks/ "Blogs met de tag 'mocks'"). Nee, niet direct, zei ik. Maar waarom zou je dat überhaupt willen? 


Wat bleek: ze haalde wat data op uit een [Azure Blob Storage](https://azure.microsoft.com/nl-nl/products/storage/blobs/ "'Azure Blob Storage', Microsoft Azure") en liet daar wat domeinlogica op los. Maar om de domeinlogica te kunnen testen, moest ze de halve wereld in haar class [injecteren](/tags/dependency-injection/ "Blogs met de tag 'dependency injection'"). En om niet de halve wereld te hoeven injecteren, had ze de `IServiceProvider` geïnjecteerd en in de class zelf aangegeven welke (al dan niet *keyed*) services ze allemaal nodig had.


Vanaf daar ontspon er een gesprek over [Test-Driven Development](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") (TDD), het [ontwerp van code](/tags/clean-code/ "Blogs met de tag 'clean code'") en de verschillende delen van de [testpiramide](/tags/testpiramide/ "Blogs met de tag 'testpiramide'").


## TDD het (niet)


Ik raad iedereen te pas en te onpas aan om te TDD'en, precies om dit soort situaties te voorkomen. Door de test te schrijven vóórdat je aan de implementatie begint, wordt het praktisch onmogelijk om code te schrijven die moeilijk te testen is, zoals classes die de halve wereld als afhankelijkheid nodig hebben. 


Maar TDD heeft een stijle leercurve. Het is een lastige techniek als je het niet gewend bent om programmeren op die manier aan te vliegen. Wat niet helpt, is dat de meeste voorbeelden van TDD zich op pure domeinlogica richten. Maar in dit geval ging het niet alleen om het uitprogrammeren van *business rules*, maar ook over het ophalen van data. 


"TDD het" was in dit geval niet een productieve tip. Er was meer context nodig. Hoe zou ik deze situatie aanvliegen?


## Hardop nagedacht


"Eerst vraag ik me af," zo dacht ik hardop na, "wat wil ik bereiken? Ik maak een lijst van dingen die de code moet doen wanneer ik klaar ben. Dit zijn mijn acceptatiecriteria, als het ware. (Maar let op: het is niet zo dat ik dit één keer doe, vooraf. Tijdens de implementatie zullen er nieuwe ideeën in me opkomen. De acceptatiecriteria werk ik dus continu bij.)"


"Ik vraag me af: wat voor soort code ben ik hier aan het schrijven? Is het code die interacteert met een extern systeem, die bijvoorbeeld data uit een database ophaalt? Is het domeinlogica? Heeft mijn feature een mix van beide nodig? Dan moet ik in kaart brengen welk deel er onder het ophalen van data valt en welke onder domeinlogica."


"Voor de repositories schrijf ik [integratietests](/tags/integratietests/ "Blogs met de tag 'integratietests'"). In mijn eigen project maak ik daarvoor gebruik van een echte [SQL](/tags/sql/ "Blogs met de tag 'SQL'")-database, dat kan met hulp van [TestContainers](https://testcontainers.com/). Jij haalt data op uit een Blob Storage. Het kan zijn dat daar een mock van bestaat die door de ontwikkelaars van die dienst wordt aangeboden. Of misschien is er een TestContainers-implementatie van, dat zou je uit moeten zoeken. Zou [Azurite](https://testcontainers.com/modules/azurite/?language=dotnet "'Azurite', TestContainers") zijn wat je zoekt? Hoe dan ook, deze tests zijn niet uitputtend, maar voor mij puur om te kijken of ik geen fouten in mijn SQL heb gemaakt."


"Voor domeinlogica schrijf ik [unittests](/tags/unit-tests/ "Blogs met de tag 'unit tests'"). Die maken gebruik van [simpele C#-objecten](https://en.wikipedia.org/wiki/Plain_old_CLR_object "'Plain old CLR object', Wikipedia") die dus veelal uit mijn repositories komen. Ik maak mijn eigen leven het makkelijkst wanneer mijn domeinobjecten geen enkele afhankelijkheid hebben naar repositories of iets dergelijks. Dat is een van de redenen waarom ik over het algemeen af ben gestapt van het gebruik van [services](https://en.wikipedia.org/wiki/Service_layer_pattern "'Service layer pattern', Wikipedia") en liever gebruik maak van [pure functies](/tags/functiepuurheid/ "Blogs met de tag 'functiepuurheid'"). Maar dat is voor een deel ook een kwestie van stijl."


"Om te valideren dat beide soorten code goed aan elkaar zijn geknoopt, schrijf ik meestal ook nog een [end to end-test](/tags/end-to-end-tests/ "Blogs met de tag 'end to end tests'") (of E2E-test), in mijn geval een test die via de [API](/tags/web-apis/ "Blogs met de tag 'web-API's'") gevalideerde data ophaalt die uit een echte (TestContainers-)database komt. Soms is dat de eerste test die ik schrijf, soms komt die achteraf. Deze tests hebben niet als doel om na te gaan dat de logica goed werkt, maar alleen om te zien dat alle systemen met elkaar praten."


## TDD en de testpiramide


Wat zegt dit ons? TDD beperkt zich niet tot het schrijven van domeinlogica. Je kunt integratietests en zelfs E2E-tests mee schrijven.


Maar nog belangrijker dan dat, is dat TDD als hulpmiddel dient om domeinlogica en infrastructurele zaken van elkaar te scheiden. Wanneer je met een test begint, voelt het onlogisch om een repository (laat staan een echte database!) te moeten injecteren om alleen wat logica te valideren. En andersom denk je wel twee keer na voordat je domeinlogica introduceert op het moment dat je een integratietest schrijft. 


Het helpt je dus om scherp zicht te houden op de verschillende soorten code die [Vladimir Khorikov](https://enterprisecraftsmanship.com/) onderscheidt in zijn [*Unit Testing: Principles, Practices, and Patterns*](https://www.manning.com/books/unit-testing) ([het beste boek over softwareontwikkeling dat ik in 2021 las](/blog/21/12/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2021-las/ "'De beste boeken over software ontwikkeling die ik in 2021 las'")). Ik schreef er ook over in [deze blog](/blog/21/08/moet-je-dit-willen-testen/ "'Moet je dit willen testen?'").


Dat is waarom men zegt: [TDD is (ook) een ontwerpdiscipline](/blog/22/08/test-driven-development-is-een-ontwerpdiscipline/ "'Test-driven development is een ontwerpdiscipline'"). Logisch ook, want [tests zijn (of: kunnen fungeren als) een ontwerpmiddel](/blog/22/09/tests-als-ontwerpmiddel/ "'Tests als ontwerpmiddel'"). De tests geven feedback op het ontwerp. Als je ze schrijft terwijl je de code ontwikkelt, geleiden ze je ontwerp naar een zinvolle decompositie. Als je ze achteraf schrijft, vertellen ze je in hoeverre je gekozen decompositie succesvol was.