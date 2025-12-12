---
title: "Aantekeningen over continuous deployment"
author: "Karl van Heijster"
date: 2025-12-12T08:38:45+01:00
draft: true
comments: true
tags: ['continuous integration', 'continuous delivery', 'continuous deployment', 'procesverbetering', 'software ontwikkelaar (rol)']
summary: "De grootste uitdaging in het omarmen van *continuous deployment* ligt niet in het technische aspect. *Deployment pipelines* zijn anno 2026 alomtegenwoordig, unittesting is (bij de meeste teams) niet meer optioneel, en *feature flags* zijn in hun simpelste vorm niet meer dan eenvoudige *booleans*. Om *continuous deployment* een succes te kunnen maken, zullen de mensen hun vertrouwde manieren van werken moeten herzien. "
---

*(Het onderstaande schreef ik ter voorbereiding op een praatje waarin reflecteerde ik op mijn ervaringen met* [continuous deployment](/tags/continuous-deployment/ "Blogs met de tag 'continuous deployment'")*.)*


{{< asterisk >}}


## Hoe ontwikkelen wij eigenlijk software?


(1) Ontwikkelaar *a* pakt een taak op. In de taak staat een feature gespecificeerd. De ontwikkelaar schrijft code totdat de feature is geïmplementeerd zoals gespecificeerd. (2) Ontwikkelaar *a* maakt een [*pull request*](/tags/pull-requests/ "Blogs met de tag 'pull requests'") (PR) aan. Ontwikkelaar *b* inspecteert het PR en geeft commentaar. (3) Ontwikkelaar *a* is ondertussen begonnen met een andere taak, maar ziet nu dat er commentaar is op zijn PR. De ontwikkelaar laat zijn huidige werk vallen en lost het commentaar op. Afhankelijk van de kwaliteit van ontwikkelaar *a*'s oorspronkelijke opzet, kijkt ontwikkelaar *b* nogmaals naar het PR. (4) Het PR wordt goedgekeurd en wordt uitgerold op de testomgeving.


(5) De tester test de code. (5a) Als deze bugs vindt, dan maakt hij een taak aan voor ontwikkelaar *a*. Of deze taak snel wordt opgepakt, is afhankelijk van de vraag of ontwikkelaar *a* opnieuw zijn huidige werk wil laten vallen. Tot die tijd blijft de buggy feature op de testomgeving staan. Dit kan blokkerend zijn voor het doorzetten van deze en andere op test uitgerolde features naar de acceptatieomgeving. *[Nog uitzoeken: waarom doen we dit in hemelsnaam zo?!]* (5b) Als de tester niets vindt, wordt de feature doorgezet naar de acceptatieomgeving. (6) De feature blijft een week stof vangen op de acceptatieomgeving. Eigenlijk zou een acceptant uit de business er naar moeten kijken, maar die heeft er geen tijd voor, dus na verloop van tijd wordt de feature alsnog doorgezet. 


(7) Een acceptant test de feature op de acceptatieomgeving *(optioneel)*. (8) De feature wordt uitgerold op productie. (9) Er blijken alsnog bugs in te zitten die we gemist hebben. (10) We moeten nu alsnog wijzigingen doorvoeren, maar nu kunnen we niet via de testomgeving gaan, want die is instabiel, dus doen we het trucje opnieuw in de acceptatieomgeving, maar daar staat ook al iets anders en dat dreigt nu ook mee te gaan ondanks dat het nog niet geaccepteerd is maar dat accepteren we als het ongemak van de eindgebruikers groot genoeg is. (11) De bug wordt gefixt. (12) De eindgebruiker is tevreden *(optioneel)*. 


## Welk idee zit daar achter?


Het proces van softwareontwikkeling dient te worden geoptimaliseerd voor het minimaliseren van het aantal fouten. 


Je zou het beeld dat onder deze opvatting lijkt te liggen, als volgt kunnen omschrijven: de onaffe feature mag niet de huidige versie van de codebase "besmetten" voordat deze grondig is geïnspecteerd op "ziekteverwekkers". In de huidige versie hebben we vertrouwen, in de onaffe feature nog niet. De onaffe feature vormt een risico voor de rest van de codebase, zij kan de bestaande werking breken. 


Dit is waarom we werken met: (a) branches, (b) PR's en (c) veelal handmatige tests op een aparte omgeving. (a) Branches hebben als doel features die nog niet afgerond zijn geïsoleerd te houden van de rest van de codebase, zodat ze niet onbedoeld iets kunnen breken. (b) PR's werpen een formele drempel op om de bestaande code te wijzigen. Een tweede set ogen moet voorkomen dat vergissingen door het net glippen van de schrijver van de code. (c) De controle op de testomgeving moet voorkomen dat fouten op het bordje van de acceptant komen. De controle op de acceptatieomgeving moet voorkomen dat fouten op het bordje van de eindgebruiker komen.


Dit leidt tot (a) het ophopen van wijzigingen, wat (b) risicovol is omdat de impact er moeilijker van is in te schatten en (c) het proces van regel code naar productie vertraagt. Het trage proces nodigt op zijn beurt weer uit tot het verder ophopen van wijzigingen, om het niet continu te hoeven doorlopen, wat weer meer risico's met zich meebrengt, wat het proces verder vertraagt.


En ondanks dat alles komen in de praktijk toch features met bugs terecht op de test-, acceptatie én productieomgeving. 


{{< asterisk >}}
 

## Hoe zouden we ook software kunnen ontwikkelen?


(1) Ontwikkelaar *a* schrijft, samen met ontwikkelaar *b* een test en schrijft direct daarna precies genoeg code om de test te laten slagen. (2) De ontwikkelaars pushen die code naar de productieomgeving. Features die nog onbruikbaar zijn worden verborgen voor de eindgebruikers. Features die onaf zijn maar wel al bruikbaar worden eventueel zichtbaar gemaakt door middel van feature flags. (3) De ontwikkelaars houden met metrics in de gaten of hun wijziging een negatieve impact heeft op de eindgebruikers: treden er foutmeldingen op of niet? Zo nee, doe dan niks. Zo ja, rol dan terug. (4) Terug naar (1). 

 
## Welk idee zit daar achter?


Het proces van softwareontwikkeling dient te worden geoptimaliseerd voor het zo snel mogelijk kunnen repareren van fouten. 


Fouten hoeven geen enorm probleem te zijn in een context die snel het effect van die fouten ongedaan kan maken. Dit is uiteraard geen vrijbrief om maar zoveel mogelijk fouten te introduceren. Je vangt de meest voor de hand liggende fouten af door lichtgewicht veiligheidsmaatregelen zo vroeg, zoals [unit-](/tags/unit-tests/ "Blogs met de tag 'unit tests'") en [integratietests](/tags/integratietests/ "Blogs met de tag 'integratietests'"), mogelijk in het proces te introduceren. Maar je erkent ook dat fouten onvermijdelijk zijn en dat je je op een productieve manier hiertoe zal moeten verhouden. Dat doe je door de mogelijke fouten klein te maken. Zo lang een fout klein is, is het makkelijk om ervan te herstellen.


Dit doen we door (a) zo snel mogelijk wijzigingen te integreren, (b) [*pair programming*](/tags/pair-programming/ "Blogs met de tag 'pair programming'"), (c) [Test-Driven Development](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") (TDD). (a) Hoe integreer je zo snel mogelijk? Door integratie niet meer afhankelijk te maken van de vraag of een feature af is of niet. Met [*trunk-based development*](/tags/trunk-based-development/ "Blogs met de tag 'trunk-based development'") [integreer je continu](/tags/continuous-integration/ "Blogs met de tag 'continuous integration'"). Geijkte methoden om dit voor elkaar te krijgen zijn het [*strangler fig*-patroon](https://martinfowler.com/bliki/StranglerFigApplication.html "'Strangler Fig', Martin Fowler") voor [refactorings](/tags/refactoren/ "Blogs met de tag 'refactoren'") en [*feature flags*](https://martinfowler.com/articles/feature-toggles.html "'Feature Toggles (aka Feature Flags)', Pete Hodgsen @ Martin Fowler") voor nieuwe functionaliteit. (b) Door samen code te schrijven, [review](/tags/code-reviews/ "Blogs met de tag 'code review'") je de code [tijdens het schrijven](/blog/23/01/wel-code-reviews-geen-pull-requests/ "'Wel code reviews, geen pull requests'") al op een informele manier. (c) De noodzaak van een controle achteraf verdwijnt wanneer de correcte werking van de code bewezen is met een uitputtende geautomatiseerde testsuite. TDD is de beste manier om dit voor elkaar te krijgen.


Dit leidt tot (a) het opknippen van grote wijzigingen in heel veel heel kleine stapjes, die (b) individueel weinig risicovol zijn en (c) daardoor snel van de tekentafel naar productie kunnen gaan. De snelheid van het proces is verslavend. Het geeft een goed gevoel te weten dat eindgebruikers baat zullen hebben bij je wijziging met maar twee drukken op de knop: één om de code te pushen en deployen, en één om de feature zichtbaar te maken.


Er zullen features met bugs terechtkomen op productie. Maar dat is geen probleem, want de feature kan teruggerold worden of verborgen of snel genoeg geupdatet om de negatieve effecten ervan te minimaliseren.


{{< asterisk >}}


De grootste uitdaging in het omarmen van *continuous deployment* ligt niet in het technische aspect. [*Deployment pipelines*](https://martinfowler.com/bliki/DeploymentPipeline.html "'Deployment Pipeline', Martin Fowler") zijn anno 2026 alomtegenwoordig, unittesting is (bij de meeste teams) niet meer optioneel, en *feature flags* zijn in hun simpelste vorm niet meer dan eenvoudige *booleans*.


Om *continuous deployment* een succes te kunnen maken, zullen de mensen hun vertrouwde manieren van werken moeten herzien. (a) De tijden dat je als ontwikkelaar dagen of weken kon vertoeven op je geïsoleerde afge*branch*te eilandje zijn voorbij, net als de mogelijkheid om de code lang in gebroken staat te houden. Ontwikkelaars zullen moeten leren hun wijzigingen klein en *backwards compatible* te houden. (b) [Samenwerken](/tags/samenwerking/ "Blogs met de tag 'samenwerking'") wordt de norm, niet meer een laatste redmiddel als je jezelf in een hoek hebt geprogrammeerd. Continue [communicatie](/tags/communicatie/ "Blogs met de tag 'communicatie'") is essentieel en wenselijk om snel succesvol nieuwe features te ontsluiten. (c) Het wordt de verantwoordelijkheid van de ontwikkelaar om te bewijzen dat zijn code werkt, in plaats van erop te vertrouwen dat een tester dat voor hem controleert. Het alternatief is de eindgebruiker continu en onmiddellijk overvallen met bugs: een betere motivator is nauwelijks denkbaar.


De vraag is: zijn jij en je team bereid om door [de pijn van die verandering](VERANDEREN_DOET_PIJN "'Veranderen doet pijn'") te gaan, om er straks de vruchten van te kunnen plukken?