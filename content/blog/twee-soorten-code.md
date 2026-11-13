---
title: "Twee soorten code"
author: "Karl van Heijster"
date: 2026-11-13T10:28:57+01:00
draft: true
comments: true
tags: ["integratietests", "intentie van code", "unit tests"]
summary: "Wat is een unittest? Of, anders gezegd: wat is de *unit* in een unittest? En, daarmee corresponderend: wat is een integratietest? -- Het hangt er vanaf aan wie je het vraagt. Welke definitie je kiest is in principe om het even. Maar dat betekent niet dat elke definitie in principe even handig of nuttig is. Sommige definities doen bepaalde delen van de werkelijkheid oplichten die ons een bepaald inzicht bijbrengen."
---

Wat is een [unittest](/tags/unit-tests/ "Blogs met de tag 'unit tests'")? Of, anders gezegd: wat is de *unit* in een unittest? En, daarmee corresponderend: wat is een [integratietest](/tags/integratietests/ "Blogs met de tag 'integratietests'")?[^1] -- Als altijd: het hangt er vanaf. In dit geval: aan wie je het vraagt. 


De Londense ("*mockist*") school van unittesten zegt: de *unit* in unittest verwijst naar een eenheid code. De test test *dit* stukje code. Een integratietest test verschillende eenheden code in samenhang. Een integratietest test *deze* en *deze* stukje*s* code. Deze school wordt gerepresenteerd door [Steve Freeman](https://www.linkedin.com/in/stevefreeman/ "Steve Freeman @ LinkedIn") en [Nat Pryce](http://www.natpryce.com/index.html) in [*Growing Object-Oriented Software Guided by Tests*](http://www.growing-object-oriented-software.com/ "Steve Freeman & Nat Pryce, 'Growing Object-Oriented Software Guided by Tests', Addison-Wesley Professional 2009").


De Detroitse ("klassieke") school van unittesten zegt: de *unit* in unittest verwijst naar een eenheid gedrag. De test test dat dit deel van de code zich *zus en zo* gedraagt. Een integratietest test de samenhang van verschillende (sub)systemen code, bijvoorbeeld: *deze* applicatiecode en *die* database. Deze school wordt gerepresenteerd door [Kent Beck](https://www.kentbeck.com/) in [*Test-Driven Development: By Example*](https://www.oreilly.com/library/view/test-driven-development/0321146530/ "Kent Beck, 'Test-Driven Development: By Example', Addison-Wesley Professional 2002").


## Zinvol?


Welke definitie je kiest is in principe om het even. Taal wordt niet gedetermineerd door de werkelijkheid; taal doet bepaalde delen van de werkelijkheid oplichten. Maar dat betekent niet dat elke definitie in principe even handig of nuttig is. Sommige definities doen bepaalde delen van de werkelijkheid oplichten die ons een bepaald inzicht bijbrengen. -- Mijn voorkeur gaat uit naar de Detroitse definitie van unit- en integratietests. 


Laat ik beginnen met mijn bezwaren tegen de Londense definitie. Een consequentie van de Londense definitie is dat een eenvoudige [refactorslag](/tags/refactoren/ "Blogs met de tag 'refactoren'") van mijn unittest een integratietest kan maken. Als ik een stukje code uit class `A` verplaats naar class `B`, dan testte mijn unittest voorheen één eenheid code (`A`) en nu twee (`A` en `B`) in samenhang. Wat vandaag een unittest is kan morgen een integratietest zijn, ondanks dat er aan de tests zelf niets veranderd hoeft te zijn. Gegeven dit gedrag, wat voor zin heeft het dan nog tests als unit- of integratietests te classificeren? 


## Domeinmodellen en controllers 


In de Detroitse school maakt dit onderscheid wel degelijk een verschil. Laat ik het uitwerken aan de hand van een classificatie uit [Vladimir Khorikovs](https://enterprisecraftsmanship.com/) [*Unit Testing: Principles, Practices, and Patterns*](https://www.manning.com/books/unit-testing "Vladimir Khorikov, 'Unit Testing: Principles, Practices, and Patterns', Manning Publications 2020").[^2] Khorikov tekent een diagram met twee assen. Op de verticale as staat complexiteit of domeinsignificantie. Hoe hoger op op de as, hoe complexer de code of hoe relevanter voor (de werking of het begrip van) het probleemdomein. Op de horizontale as staat het aantal (sub)systemen waarmee de code samenwerkt. Hoe meer naar rechts op de as, hoe meer interactie de code heeft met externe (sub)systemen.


|                                              |                                         |                               |
|:--------------------------------------------:|-----------------------------------------|-------------------------------|
|                                              |                                         |                               |
| **Complexiteit / domeinsignficantie&#8593;** |                                         |                               |
|                                              | **Aantal samenwerkingspartners&#8594;** |                               |
<br>


Zoals dat gaat met twee assen, kunnen we dit diagram onderverdelen in vier kwadranten: *(1)* laagcomplex-weinig samenwerking; *(2)* hoogcomplex-weinig samenwerking; *(3)* laagcomplex-veel samenwerking; *(4)* hoogcomplex-veel samenwerking. Khorikov karakteriseert de soorten code in elk kwadrant als volgt:


|                                              |                                         |                               |
|:--------------------------------------------:|-----------------------------------------|-------------------------------|
|                                              | Domeinmodel, algoritmen *(2)*           | Overgecompliceerde code *(4)* |
| **Complexiteit / domeinsignficantie&#8593;** | Triviale code *(1)*                     | Controllers[^3] *(3)*         |
|                                              | **Aantal samenwerkingspartners&#8594;** |                               |
<br>


De vraag is nu: hoe testen we elke soort code? De antwoorden zijn als volgt: *(1)* testen we niet; deze code is zo triviaal dat tests schrijven zich niet loont. *(2)* testen we middels unittests. *(3)* testen we middels integratietests. *(4)* testen we niet -- niet omdat deze code niet getest zou moeten worden, maar omdat deze code *niet zou moeten bestaan*. Deze soort code heeft namelijk twee verantwoordelijkheden: domeinlogica én interactie met externe systemen. Het zou daarom moeten worden uitgefactord naar *(2)* en *(3)*, die op hun beurt weer kunnen worden geünit- en integratietest. 


## Twee soorten code


De unit- en integratietests in de Detroitse school vertellen ons dus iets over de *soort* code die zij testen. Er zijn twee soorten tests, omdat er twee soorten code zijn. De soort test vertelt ons dat de code ofwel verantwoordelijk is voor het afhandelen van de domeinlogica, ofwel verantwoordelijk voor zaken in de infrastructuur. Beide soorten code moeten goed van elkaar gescheiden worden: een vermening leidt tot overgecompliceerde code.


Een goed geschreven unittest valideert het gedrag van het systeem (en vertelt je dus ook, als je aan [Domain-Driven Design](/tags/domain-driven-design/ "Blogs met de tag 'domain-driven design'") (DDD) doet, hoe het probleemdomein eruit ziet). Een goed geschreven integratietest valideert de integratie met één of meerdere externe systemen.


Maar interessant zijn ook de slecht geschreven tests. Een slechte unittest vertelt ons iets over de interactie met een extern systeem. Dat is het soort tests dat louter en alleen test of de [mock](/tags/mocks/ "Blogs met de tag 'mocks'") doet wat het moet doen. Het probleem hier is de test. Een slechte integratietest vertelt ons iets over het gedrag van het systeem, maar heeft allerlei andere (sub)systemen nodig om dat voor elkaar te krijgen. Het probleem hier is de code zelf.


[^1]: Ik schreef eerder over het onderscheid tussen beide in [deze blog](/blog/25/09/unittests-vs-integratietests/ "'Unittests vs. integratietests'").

[^2]: Zie ook [deze blog](/blog/21/08/moet-je-dit-willen-testen/ "'Moet je dit willen testen?'"). *Unit Testing* was overigens [mijn favoriete boek over softwareontwikkeling dat ik in 2021 las](/blog/21/12/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2021-las/ "'De beste boeken over software ontwikkeling die ik in 2021 las'").

[^3]: Niet te verwarren met *controllers* in het [MVC-patroon](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller "'Model–view–controller', Wikipedia"), of de [`Controllers` uit ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-10.0 "'Create web APIs with ASP.NET Core', Microsoft documentatie"). "Controller" wordt hier gebruikt als algemene term om code te karakteriseren wiens taak het is om met externe systemen te integreren; denk aan een [*repository*](https://martinfowler.com/eaaCatalog/repository.html "'Repository', Martin Fowler").