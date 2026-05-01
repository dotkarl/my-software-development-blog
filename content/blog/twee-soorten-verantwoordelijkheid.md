---
title: "Twee soorten verantwoordelijkheid"
author: "Karl van Heijster"
date: 2026-05-01T07:50:35+02:00
draft: true
comments: true
tags: ["software ontwikkelaar (rol)", "tester (rol)", "verantwoordelijkheid"]
summary: "Programmeren en testen horen bij elkaar, het zijn twee kanten van dezelfde munt -- en die munt is: productierijpe software opleveren. Daaruit volgt dat de activiteiten van het programmeren en testen, verenigd moeten worden in één persoon -- en die persoon is de ontwikkelaar. Dit wijkt af van de traditionele rolverdeling, waarin programmeurs programmeren en testers testen. Wat is dan nog de verantwoordelijkheid van de tester?"
---

[Programmeren en testen horen bij elkaar](/blog/24/07/goede-code-is-geteste-code/ "'Goede code is geteste code'"), het zijn twee kanten van dezelfde munt -- en die munt is: productierijpe software opleveren. 


Daaruit volgt dat de activiteiten van het programmeren en testen, verenigd moeten worden in één persoon -- en die persoon is de [ontwikkelaar](/tags/software-ontwikkelaar-rol/ "Blogs met de tag 'software ontwikkelaar (rol)'").[^1] Dit wijkt af van de traditionele rolverdeling, waarin programmeurs programmeren en testers testen.


De effectiefste manier beide te verenigen, is middels [Test-Driven Development](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") (TDD). Door elke uitbreiding in functionaliteit vooraf te laten gaan door een test, is al het geïntendeerde gedrag van een softwaresysteem per definitie getest.


Toen ik deze visie op testen uiteenzette in mijn [tip voor testers](/blog/26/05/een-tip-voor-testers/ "'Een tip voor testers'"), kreeg ik een voor de hand liggende vraag: wat is dan nog de [verantwoordelijkheid](/tags/verantwoordelijkheid/ "Blogs met de tag 'verantwoordelijkheid'") van de [tester](/tags/tester-rol/ "Blogs met de tag 'tester (rol)'")?


## Taken


Laat ik hiermee beginnen: [een tester is *niet* verantwoordelijk voor het achteraf controleren van het werk van de ontwikkelaar](/blog/25/12/hoe-testers-kwaliteit-kunnen-ondermijnen/ "'Hoe testers kwaliteit kunnen ondermijnen'"). Het introduceren van een controlestap ondermijnt de verantwoordelijkheid van de ontwikkelaar om te bewijzen dat de software werkt zoals bedoeld. (Dit betekent niet dat er überhaupt geen plek is voor controle, daar kom ik later op terug.)


Het is verleidelijk om na de taak of taken te noemen waar een tester wél voor verantwoordelijk is, maar door dat te doen zou ik over een belangrijke aanname in de vraag heen stappen. Die wordt duidelijk wanneer we deze parafraseren: *voor welke taak is de tester nog verantwoordelijk, als het niet de taak is de ontwikkelaar te controleren?*


De vraag veronderstelt verantwoordelijkheid voor *taken*. In de traditionele rolverdeling is de programmeur verantwoordelijk voor de programmeer*taak* en de tester voor de test*taak*. Maar dit veronderstelt dat het mogelijk en wenselijk is om beide taken uit elkaar te halen. Dat is nu precies een manier van denken die ik bestrijd.


Stel dat ik nu zou zeggen: ontwikkelaars en testers hebben een gedeelde verantwoordelijkheid voor het testen van de applicatie. Als die verantwoordelijkheid wordt opgevat als verantwoordelijkheid-voor-een-taak, dan is het gerechtvaardigd om tegen te werpen: gedeelde verantwoordelijkheid is geen verantwoordelijkheid.


## Resultaat


Maar er is ook een andere opvatting van verantwoordelijkheid mogelijk: verantwoordelijkheid voor het *resultaat*. En die soort verantwoordelijkheid valt wel degelijk te delen. Sterker nog, het lijkt me evident dat zowel dat de ontwikkelaar als tester verantwoordelijk zijn voor het feit dat de software waar zij aan werken, doet wat het moet doen.


Verantwoordelijkheid-voor-het-resultaat gaat niet met een strakke taakverdeling gepaard. Vergelijk het met een sportteam. Als er een gat in de verdediging valt, dan is het aan een aanvaller om dat tijdelijk op te vullen. Andersom geldt dat het niet verboden is voor een verdediger om te scoren -- integendeel juist! Maar dat betekent niet dat alles altijd geoorloofd is. De leden van een sportteam moeten [samenwerken](/tags/samenwerking/ "Blogs met de tag 'samenwerking'") -- soms verdedigen, wanneer nodig, soms aanvallen -- om een optimaal resultaat te bereiken.


Je zou dit kunnen zien als een voorbeeld van [systeemdenken](/tags/systeemdenken/ "Blogs met de tag 'systeemdenken'"). Het slagen van het systeem is afhankelijk van de mate waarin het doel van het systeem wordt bereikt. Of alle taken louter en alleen door de personen worden uitgevoerd die daarvoor verantwoordelijk zijn gemaakt, is geen doel op zichzelf. Het *kan* bijdragen aan het doel van het systeem als geheel, maar dat hoeft niet per se.


Een team waarvan de leden hun verantwoordelijkheid zuiver opvatten als verantwoordelijkheid-voor-een-taak, zal altijd minder goed presteren dan een team waarvan de leden zich verantwoordelijk voelen voor het resultaat. Want het eerste team zal dysfuncties in het systeem in het slechtste geval niet eens opmerken, laat staan aanpakken.


## Waarvoor verantwoordelijk?


Dus wat is de verantwoordelijkheid van de tester? Die is hetzelfde als die van de ontwikkelaar: het oplossen van een probleem met software.


Een ontwikkelaar doet dat met name door code te schrijven en met tests te bewijzen dat deze doet wat het moet doen. Dit is niet de *verantwoordelijkheid* van de ontwikkelaar (de taak waarvoor deze verantwoordelijk is), maar zijn expertise- of focusgebied.


Een tester doet dat, bijvoorbeeld, door testcases op te stellen die het probleemdomein verhelderen en het oplossingsdomein in kaart brengen. Dat kan vooraf, maar ook tijdens de ontwikkeling, samen met de ontwikkelaar. Het is niet de *verantwoordelijkheid* van de tester om testcases op te stellen, hij is niet verantwoordelijk voor de *taak* van het opstellen van de testcases. Immers, als de tester niet beschikbaar is, zullen de testcases nog steeds moeten worden uitgewerkt. Een analist of ontwikkelaar zal dit gat dan op moeten vangen. Maar de tester neemt hierin vaker het voortouw, omdat deze hier een bepaalde expertise in heeft.


## Controle


En controle dan? Welnu, er is een plek voor het achteraf controleren van software. Maar het doel van die controle is *niet* om te kijken of het systeem werkt zoals bedoeld, dat wordt al afgevangen door de geautomatiseerde tests die tijdens de implementatie zijn geschreven. De controle achteraf is nodig om inzicht in *onbekende variabelen* te krijgen, om onverwachte interacties tussen delen van de software in kaart te brengen.


Maar onthoud: een tester is niet verantwoordelijk voor deze *taak*. Het oppakken van deze taak -- door testers of ontwikkelaars -- is een voortvloeisel van het nemen van verantwoordelijkheid voor het *resultaat*!


[^1]: Let op de terminologie: een *ontwikkelaar* is dus meer dan zuiver een *programmeur*. Overigens houden de verantwoordelijkheden van een ontwikkelaar niet op bij programmeren en testen. Een ontwikkelaar is ook verantwoordelijk voor het creëren van een (gedeeld) begrip van het probleemdomein, en denkt dus actief mee over de richting die het systeem op groeit in de loop van de ontwikkeling.