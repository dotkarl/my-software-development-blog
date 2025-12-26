---
title: "Een ontwikkelaar is verantwoordelijk voor drie systemen"
author: "Karl van Heijster"
date: 2025-12-26T07:24:41+01:00
draft: false
comments: true
tags: ["agile ontwikkeling", "communicatie", "continuous delivery", "feedback", "refactoren", "samenwerking", "software ontwikkelaar (rol)", "sprint retrospective", "sprint review", "systeemdenken", "verantwoordelijkheid"]
summary: "Ik weet niet meer waar ik de inval had, onder de douche of op de wc of tijdens het tanden poetsen (duidelijk is in elk geval dat het op de badkamer was): *een ontwikkelaar is verantwoordelijk voor (ten minste) drie systemen.*"
---

Ik weet niet meer waar ik de inval had, onder de douche of op de wc of tijdens het tanden poetsen (duidelijk is in elk geval dat het op de badkamer was): *een ontwikkelaar is verantwoordelijk voor (ten minste) drie systemen.*


## Systeem<sub>1</sub>


Het eerste systeem is, eh, het systeem. Dat ding, je weet wel, waar je aan werkt. De applicatie, bedoel ik: de back-end, de front-end, de microservices, als je althans een microservicesarchitectuur hebt. Het is, kortom, de code. Laten we dat systeem<sub>1</sub> noemen. 


Een ontwikkelaar is verantwoordelijk voor [het gedrag en de structuur](/blog/24/09/gedrag-versus-structuur/ "'Gedrag versus structuur'") van dat systeem. Het gedrag laat zich omschrijven als "de correcte werking", "het voldoen aan de gestelde requirements" of, breder geformuleerd, "het leveren van business waarde". De structuur laat zich omschrijven als "de opzet van de code" of "de codekwaliteit", of "de mate waarin het systeem aanpasbaar is". 


Systeem<sub>1</sub> is het meest in het oog springende systeem. Het is het systeem waar de gemiddelde ontwikkelaar het gros van zijn tijd aan besteedt. Je hoeft geen uitzonderlijke ontwikkelaar te zijn om snel in de gaten te hebben wanneer het gedrag van het systeem te wensen over laat (i.e. wanneer het [bugs](/tags/bugs/ "Blogs met de tag 'bugs'") bevat). Maar om oog te hebben voor onvolkomenheden in de vorm, daar komt meer bij kijken. Je moet aanvoelen dat de huidige opzet van de code je remt bij het toevoegen van nieuwe functionaliteiten, en je moet een idee kunnen formuleren van welke opzet daar beter bij zou kunnen helpen. Belangrijker nog, je moet een plan opzetten om van de huidige naar de gewenste situatie te gaan. Zorgdragen voor de structuur van de code, betekent: [refactoren](/tags/refactoren/ "Blogs met de tag 'refactoren'") -- niet eens in de zoveel tijd, maar continu. 


Wie geen verantwoordelijkheid neemt voor het gedrag van de code, produceert een door bugs geteisterde bende. Wie geen verantwoordelijkheid voor de structuur neemt, verwijst het systeem binnen de kortste keren naar de almaar groeiende stapel ononderhoudbare [*legacy*](/tags/legacy-code/ "Blogs met de tag 'legacy code'"). Dat ontwikkelaars verantwoordelijkheid dragen voor de gezondheid van systeem<sub>1</sub>, hoef je hen over het algemeen dan ook niet uit te leggen. 


## Systeem<sub>2</sub>


Er is een tweede systeem, systeem<sub>2</sub>, waar de ontwikkelaar zorg voor draagt. Dat is *het team dat de code onderhoudt*. -- Huh?


In [*Learning Systems Thinking*](https://www.oreilly.com/library/view/learning-systems-thinking/9781098151324/ "Diana Montalion, 'Learning Systems Thinking: Essential Nonlinear Skills and Practices for Software Professionals', O'Reilly Media, 2024") ([mijn favoriete boek van afgelopen jaar](/blog/25/11/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2025-las/ "'De beste boeken over software ontwikkeling die ik in 2025 las'")) definieert [Diana Montalion](https://montalion.com/) "*system*"  als volgt:


> *A group of interrelated hardware, software, people, organization(s), and other elements that interact and/or interdepend to serve a shared purpose.*


Systemen beperken zich in deze definitie dus expliciet niet tot hard- of softwaresystemen. Ook een ontwikkelteam is een groep onderling verbonden mensen die met elkaar interacteren en van elkaar afhankelijk zijn om een gezamenlijk doel te bereiken. Hun doel is: software produceren (die op zijn beurt weer een ander doel dient). En omdat de technieken -- de computers, de software, de programmeertaal, etc. -- waarmee deze groep hun doel probeert te bereiken, ook onderdeel is van dat geheel, spreekt men vaak van een team als een [sociotechnisch systeem](https://en.wikipedia.org/wiki/Sociotechnical_system "'Sociotechnical system', Wikipedia").


De kwaliteit van de opgeleverde applicatie is afhankelijk van de kwaliteit van het ontwikkelteam. Als systeem<sub>1</sub> onvolkomenheden bevat, als deze bijvoorbeeld stikt van de bugs, dan is dat een teken dat er een probleem is met systeem<sub>2</sub>. Het zou bijvoorbeeld kunnen dat er onderling te weinig wordt [gecommuniceerd](/tags/communicatie/ "Blogs met de tag 'commuicatie'"), waardoor de front- en back-end van interpretatie verschillen over wat een bepaalde feature behelst. Of het zou kunnen dat de ontwikkelaars de tester overspoelen met werk, waardoor deze fouten over het hoofd ziet.[^1] Of het zou kunnen dat een gebrek aan [psychologische veiligheid](/tags/psychologische-veiligheid/ "Blogs met de tag 'psychologische'") ervoor zorgt dat collega's niet worden aangesproken op onbegrijpelijke of ondermaatse code (zie ook [deze blog](/blog/25/10/borrelpraat-2/ "'Borrelpraat #2'")).


Net zoals dat je code dient te onderhouden, dien je je team te onderhouden. Dit is waar [Sprint Retrospectives](/tags/sprint-retrospective/ "Blogs met de tag 'sprint retrospective'") voor zijn. Tijdens een Retrospective benader je het team als een systeem en zoek je welke elementen in haar huidige configuratie ervoor zorgen dat doelen wel of niet gehaald worden. 


Maar let op: net zoals het onderhoud van systeem<sub>1</sub> niet beperkt blijft tot één terugkerend uurtje refactoren in de week, dien je het onderhoud van systeem<sub>2</sub> niet te beperken tot de Retrospective alleen. Het voelt soms alsof het onderhoud in slecht functionerende systemen het gros van het werk behelst, en daardoor lijkt het alsof goed functionerende systemen geen onderhoud behoeven. Maar dat is gezichtsbedrog: goed functionerende systemen worden *continu* onderhouden, dat is waarom ze zo goed functioneren. 


## Systeem<sub>3</sub>


Maar we hebben het eind van het verhaal nog niet bereikt. Een applicatie en het team dat haar ontwikkelt, bestaan niet in een vacuüm. Systeem<sub>2</sub> maakt systeem<sub>1</sub> voor *iemand* (of vaker: iemanden). Dat zijn de [stakeholders](/tags/stakeholders/ "Blogs met de tag 'stakeholders'") en (eind)gebruikers van systeem<sub>1</sub>.[^2] En die leveren op hun beurt (hoop je!) weer feedback op de huidige staat van systeem<sub>1</sub>, op wat voor hen werkt en wat niet.


De applicatie, het team, en stakeholders die het team van feedback voorziet voor de volgende iteratie(s) van de applicatie, vormen het derde systeem, systeem<sub>3</sub>.


Er zijn verschillende manieren waarop je de verhouding tot je stakeholders kunt vormgeven. In de context van [Waterval](/tags/waterval/ "Blogs met de tag 'waterval'"), speelt de communicatie tussen team en stakeholders zich voornamelijk op papier af. En de richting van die communicatie gaat één kant op: de stakeholders specificeren hun wensen en de teams vertalen dat naar software. In de praktijk blijkt dat niet te werken. 


In een [agile](/tags/agile-ontwikkeling/ "Blogs met de tag 'agile ontwikkeling'") setting is de communicatie tweerichtingsverkeer: het team toont de huidige staat van het systeem, en de stakeholders reageren daarop, en het team stuurt bij op basis van die feedback. Dit is waar [Sprint Reviews](/tags/sprint-review/ "Blogs met de tag 'Sprint Review'") voor zijn uitgevonden. 


Maar ook hier geldt: het is niet zo dat het vergaren van feedback beperkt mag of moet blijven tot formele Review-momenten. Er zijn ook andere manieren om feedback op te halen. Je zou monitoring in kunnen bouwen op het gebruik van je applicatie. Als je een feature vervolgens [A/B-test](https://en.wikipedia.org/wiki/A/B_testing "'A/B testing', Wikipedia"), dan vormt het gebruik door de eindgebruikers van de applicatie *zelf* het feedbackmoment.


Een ander communicatiemiddel binnen systeem<sub>3</sub> is de frequentie waarmee je codewijzigingen deployt en beschikbaar maakt. Laat ik uit mijn eigen ervaring putten. In mijn vorige team was dit een stroperig proces. Een stakeholder meldde bijvoorbeeld een bug, die kwam op een lijst terecht; die lijst werd wekelijks doorgeploegd en geprioriteerd; dan kwam deze op de backlog terecht; als er een fix werd gevonden, ging die naar de testomgeving; daar keek de tester er naar; wanneer die de fix goed bevonden had, ging deze naar de acceptatieomgeving; daar mocht een stakeholder er naar kijken, en pas als die zijn oké had gegeven, werd de fix op productie uitgerold. 


[Sindsdien ben ik van team gewisseld.](/blog/25/08/gaan-we-snel-genoeg/ "'Gaan we snel genoeg?'") Dit is hoe we het nu doen: als er een bug binnenkomt, dan laten we vallen waar we mee bezig zijn en reproduceren we de bug met een test. Zodra die (aanvankelijk falende) test laten we slaagt, rollen we de fix meteen uit op de productieomgeving.


*Continuous deployment* is niet een praktijk die je introduceert omdat het zo leuk is (hoewel het ook leuk is). Je introduceert het om systeem<sub>3</sub> te optimaliseren. Hoe sneller je uit kunt rollen, hoe eerder je feedback kunt omzetten in nieuwe functionaliteit. De technische innovaties die je als team door moet voeren om continu te kunnen deployen, komen alle systemen ten goede -- en zeker niet alleen de softwaresystemen.


[^1]: Toen ik [mijn filosofisch retrospectief over de rol van testen in mijn team](/talks/testen-een-filosofisch-retrospectief/ "Testen: Een filosofisch retrospectief") voorbereidde, grotendeels gebaseerd op [deze blog](/blog/24/03/testen-een-retrospectief-in-vijf-fasen/ "'Testen: een retrospectief in vijf fasen'"), benaderde ik het team al als systeem, zonder dat ik het op dat moment doorhad. Toen we als team concludeerden dat we inderdaad de tester overspoelden met een onhoudbare hoeveelheid testautomatiseringswerk, deden we een radicale ingreep in het systeem: we maakten de ontwikkelaars verantwoordelijk voor testautomatisering.

[^2]: In het vervolg zal ik, om niet de hele tijd "en (eind)gebruikers" te hoeven zeggen, slechts over "stakeholders" spreken.