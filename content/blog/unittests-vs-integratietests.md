---
title: "Unittests vs. integratietests"
author: "Karl van Heijster"
date: 2025-07-18T09:12:02+02:00
draft: true
comments: true
tags: ["integratietests", "testpiramide", "unit tests"]
summary: "Integratietests worden veelal gedefinieerd in contrast met unittests. Als we unittests beschouwen we als tests die (een eenheid van) gedrag testen, dan volgt daaruit dat integratietests *niet* het testen van gedrag als doel hebben. Integratietests verifiëren niet de *inhoud van* subsystemen, maar de *interactie tussen* subsystemen."
---

*Deze twee artikelen schreef ik voor een interne wiki over* [sensible defaults](https://www.thoughtworks.com/insights/topic/sensible-defaults "'Introducing our sensible defaults', ThoughtWorks") *in softwareontwikkeling. Ik had er veel plezier in mijn visie op [unit](/tags/unit-tests/ "Blogs met de tag 'unit tests'")- en [integratietests](/tags/integratietests/ "Blogs met de tag 'integratietests'") in een wat aangezette, apodictische stijl te formuleren. Maar mijn opvattingen zijn niet in steen gehouwen: constructieve tegenspraak wordt meer dan gewaardeerd.*


{{< asterisk >}}


# Wat is een unittest?


De "unit" in unittest kan naar twee zaken verwijzen: (1) een unit code, of (2) een unit gedrag.[^1]


**(1) Unit van code.** Opgevat als (1), is een unittest een test die één functie of method (en eventueel door hun aangroepen private methods/functies) test. 


Een test die een stuk code aanroept dat gebruik maakt van andere classes, is binnen deze opvatting een integratietest.


Deze opvatting van unittests zorgt voor tests die sterk gekoppeld zijn aan implementatiedetails, en kunnen daarom een belemmering vormen voor refactoring.


**(2) Unit van gedrag.** Opgevat als (2), is een unittest een test die één stuk gedrag test, onafhankelijk van de implementatie. Binnen deze opvatting kan en mag de method/functie die in de test wordt aangeroepen, onder water gebruik maken van een code in andere classes. 


De term "integratietest" verwijst binnen deze opvatting naar tests die de integratie tussen verschillende *systemen* test, bijvoorbeeld tussen een applicatie en een database, of tussen twee microservices.


Deze opvatting van unittests zorgt voor tests die minder gekoppeld zijn aan implementatiedetails, en kunnen daarom beter omgaan met refactoring. Om deze reden heeft opvatting (2) de voorkeur.


## Test interfaces


Test altijd (via) publieke interfaces, nooit (via) implementatiedetails. Dat betekent: test geen private methods,[^2] maar ook: test geen classes in isolatie (nota bene!) die een implementatiedetail vormen voor een bepaald gedrag. Zulke functionaliteit test je alleen direct als er teveel *set up* bij komt kijken om dit via de interface te testen.


Wanneer je een stuk code wil unittesten, vraag je dan af: is dit een interface of is dit een implementatiedetail?[^3] Dit is een *domeininhoudelijke*, geen technische vraag.


Uitzondering op deze regel is code die *bedoeld* is om op verschillende plekken in de codebase hergebruikt te worden. Dit is op domeininhoudelijk niveau misschien een implementatiedetail, maar vanuit het perspectief van de rest van de codebase is het een interface.


{{< asterisk >}}


# Wat is een integratietest?


Integratietests testen de relatie tussen twee of meer subsystemen. Ze testen dat de subsystemen correct samenwerken.


Integratietests testen bijvoorbeeld dat een databasequery, gedefinieerd in subsysteem *a*, de juiste data ophaalt uit de database, subsysteem *b*.


## Integratietests vs. unittests


Integratietests worden veelal gedefinieerd in contrast met unittests. Als we unittests beschouwen we als tests die (een eenheid van) gedrag testen, dan volgt daaruit dat integratietests *niet* het testen van gedrag als doel hebben. Integratietests verifiëren niet de *inhoud van* subsystemen, maar de *interactie tussen* subsystemen.


Er zijn in een goed ontworpen systeem minder manieren waarop verschillende subsystemen met elkaar interacteren, dan dat er mogelijke toestanden van een systeem zijn. Dat is waarom een systeem over het algemeen meer unittests dan integratietests kent.[^4]


Een databasequery die een `id` als parameter accepteert, kan bijvoorbeeld talloze waarden voor dat `id` accepteren. Maar in de interactie tussen de query (i.e. het subsysteem waarin deze is gedefinieerd) en de database kent hooguit twee (of drie) interacties: het gequery'de object wordt wel gevonden of niet (of er wordt een foutmelding opgegooid).


## Ontwerpfeedback


Als een bepaald gedrag van een systeem alleen kan worden getest door middel van integratietests, dan wijst dat doorgaans op een onvolkomenheid in het ontwerp van het systeem. Het betekent dat de businesslogica van het systeem niet goed is gescheiden van de infrastructuur.[^5]


Het bestaan van integratietests die domeinlogica verifiëren kan worden geaccepteerd als tijdelijk vangnet[^6] terwijl de code gerefactord wordt om de domeinlogica en infrastructuur van elkaar te scheiden. Daarna moet een deel van de integratietests worden vervangen door unittests. 


[^1]: Ik baseer me op inzichten uit [Vladimir Khorikovs](https://enterprisecraftsmanship.com/) uitstekende [*Unit Testing: Principles, Practices, and Patterns*](https://www.manning.com/books/unit-testing) ([het beste boek over softwareontwikkeling dat ik in 2021 las](/blog/21/12/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2021-las/ "'De beste boeken over software ontwikkeling die ik in 2021 las'")). Zie ook [deze blog](/blog/22/11/wat-is-een-unit/ "'Wat is een unit?'"). <br> De opvattingen komen voort uit twee verschillende stijlen van [Test-Driven Development](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'"). (1) is gebaseerd op de Londense ("*mockist*") opvatting, vertegenwoordigd door [*Growing Object-Oriented Software Guided by Tests*](http://www.growing-object-oriented-software.com/). (2) is gebaseerd op de Detroitse ("klassieke") opvatting, vertegenwoordigd door [*Test Driven Development: By Example*](https://www.oreilly.com/library/view/test-driven-development/0321146530/).

[^2]: Zie ook [deze blog](/blog/25/01/testen-jullie-private-methods/ "'Testen jullie private methods?'").

[^3]: Ik leerde deze les uit [*Software Engineering at Google: Lessons Learned from Programming Over Time*](https://www.oreilly.com/library/view/software-engineering-at/9781492082781/) ([het op één na beste boek over softwareontwikkeling dat ik in 2021 las](/blog/21/12/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2021-las/ "'De beste boeken over software ontwikkeling die ik in 2021 las'")). Zie ook [deze blog](/blog/22/06/testen-via-de-voordeur/ "'Testen via de voordeur'").

[^4]: Maar de verhouding tussen unit- en integratietests is ook afhankelijk van de gekozen architectuur. Zie [deze blog](/blog/22/07/zelfs-de-testpiramide-is-niet-meer-heilig/ "'Zelfs de testpiramide is niet meer heilig!'") voor een nuancering een dogmatische opvatting van de testpiramide.

[^5]: Ook hier baseer ik me op inzichten uit Khorikovs *Unit Testing*. Ik werk het idee uit in [dit praatje](/talks/wat-zegt-deze-test/ "'Wat zegt deze test?'"). Zie ook [deze](/blog/22/09/tests-als-ontwerpmiddel/ "'Tests als ontwerpmiddel'"), [deze](/blog/21/08/moet-je-dit-willen-testen/ "'Moet je dit willen testen?'") en [deze blog](/blog/24/08/wat-zegt-deze-test/ "'Wat zegt deze test?'").

[^6]: Zie ook [deze blog](/blog/22/09/tests-als-vangnet/ "'Tests als vangnet'").
