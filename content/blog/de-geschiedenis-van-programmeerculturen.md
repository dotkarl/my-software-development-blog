---
title: "De geschiedenis van programme(ercultur)en"
author: "Karl van Heijster"
date: 2026-05-06T07:36:00+02:00
draft: true
comments: true
tags: ["boeken", "debuggen", "filosofie", "recensies", "testen"]
summary: "Vraag tien programmeurs naar de beste manier om een probleem op te lossen, en je krijgt tien verschillende antwoorden. Conclusie: '*It depends*.' Maar stel tien programmeurs de vraag wat programmeren precies inhoudt, en je krijgt waarschijnlijk ook tien verschillende antwoorden. Bij de geboorte van softwareontwikkeling, in de jaren '50, kon het gebrek aan consensus nog worden geweten aan de onvolwassenheid van het vakgebied. Maar anno 2026 liggen de visies op de aard van programmeren nog steeds even ver uit elkaar. *It depends*, blijkbaar -- maar waarvan dan?"
---

Vraag tien programmeurs naar de beste manier om een probleem op te lossen, en je krijgt tien verschillende antwoorden. Conclusie: '*It depends*.' Maar stel tien programmeurs de vraag wat programmeren precies inhoudt, en je krijgt waarschijnlijk ook tien verschillende antwoorden. Bij de geboorte van softwareontwikkeling, in de jaren '50, kon het gebrek aan consensus nog worden geweten aan de onvolwassenheid van het vakgebied. Maar anno 2026 liggen de visies op de aard van programmeren nog steeds even ver uit elkaar. *It depends*, blijkbaar -- maar waarvan dan?


Computerwetenschapper [Tomas Petricek](https://tomasp.net/) stelt in [*Cultures of Programming*](https://tomasp.net/cultures/ "Tomas Petricek, 'Cultures of Programming: The Development of Programming Concepts and Methodologies', Cambridge University Press, 2025") dat programmeren een inherent multicultureel vak is. Zijn goed leesbare geschiedenis van het vakgebied poneert een vijftal culturen die elk bij hebben gedragen aan haar ontwikkeling: de cultuur van wiskundigen, die van de hackers, ingenieurs, managers en humanisten. Je antwoord op de vraag naar de aard van programmeren, hangt af van de cultuur waarin je bent grootgebracht. Geen enkele cultuur heeft het definitieve antwoord: ze belichten elk, op hun eigen kenmerkende manier, andere facetten.


## Vijf culturen


De wiskundige cultuur ziet programma's als mathematische entiteiten, waarvan de correctheid in principe bewezen kan worden. Vertegenwoordigers van deze cultuur hebben veel interesse in de formele eigenschappen van software en communiceren hun inzichten met name via academische papers. Diametraal daartegenover staat de hackercultuur. Voor wiskundigen zijn de formele eigenschappen van een programmeertaal bijvoorbeeld essentieel, hun concrete implementatie is bijzaak. Voor hackers is de verhouding precies omgekeerd. Zij zien programmeren als een inherent praktische vaardigheid, het *is* de concrete interactie met een computer. Ze wisselen geen kennis uit via geschreven documenten, maar door elkaar op te zoeken en van elkaar te leren. 


Tussen deze twee uitersten bevinden zich de culturen van de ingenieurs en managers. Ingenieurs (*software engineers*) erkennen dat software een in essentie praktische aangelegenheid is. Maar ze waarderen de cultuur van wiskundigen om hun rationele aanpak, en passen die wetenschappelijke manier van denken toe op de praktijk. Managers bezien software projectmatig: het zijn ondernemingen die in goede banen moeten worden geleid om op tijd de juiste resultaten op te leveren. Managers en ingenieurs communiceren hun ideeën over het vakgebied vooral via boeken en conferenties.


De vreemde eend in de bijt is de humanistische cultuur. Deze beziet software niet zuiver abstract of praktisch, en gruwt van het idee dat software louter de doelen van bedrijven dient. Humanisten stellen zich de vraag naar de invloed van software op de menselijke conditie, en wat de politieke gevolgen kunnen zijn van het gebruik ervan. [Felienne Hermans](https://www.felienne.nl/), hoogleraar informatica aan de VU, is een voor de hand liggend voorbeeld met haar kritische beschouwingen over kunstmatige intelligentie. Maar in deze groep valt ook [Sam Aaron](https://sam.aaron.name/), die met [Sonic Pi](https://sonic-pi.net/) een programma ontwikkelde waarmee coderen, via muziek, een kunstvorm op zichzelf wordt.[^1] Anders dan wiskundigen, hackers, ingenieurs of managers, vormt deze groep geen coherente gemeenschap met vaste communicatiekanalen.


## Interactie


Het is niet zo dat programmeurs ofwel bij de ene, ofwel bij de andere cultuur horen. Integendeel, veel van de grote namen in de geschiedenis van softwareontwikkeling kunnen logischerwijs bij meerdere culturen worden ondergebracht. Nederlander [Edsger Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra "'Edsger Dijkstra', Wikipedia") (1930–2002) past met zijn visie over de bewijsbaarheid van het correcte gedrag van programma's overduidelijk in de wiskundige cultuur. Maar zijn ideeën over gestructureerd programmeren hebben ook een belangrijke bijdrage geleverd aan de ingenieurs- en managerscultuur. [Alan Kay](https://en.wikipedia.org/wiki/Alan_Kay "'Alan Kay', Wikipedia") is een ander voorbeeld. Als bedenker van de term 'object-georiënteerd programmeren' heeft hij een enorme stempel gedrukt op de culturen van ingenieurs en managers, maar kenmerkend aan Kays werk is zijn humanistische inslag.


Petricek merkt op dat de interessantste ontwikkelingen in de geschiedenis van softwareontwikkeling vrijwel altijd het product zijn van de interacties tussen verschillende culturen. De ontwikkeling van [testen](/tags/testen/ "Blogs met de tag 'testen'") is een goed voorbeeld hiervan. Door hackers werd dit begrip aanvankelijk nauwelijks onderscheiden van [*debugging*](/tags/debuggen/ "Blogs met de tag 'debuggen'"): het vinden en oplossen van fouten in het systeem. De praktijk van het schrijven van tests werd vervolgens door de managementcultuur opgepakt en gedefinieerd als een aparte stap in het ontwikkelproces. De tests werden een manier om voortgang mee te kunnen meten. De cultuur van de ingenieurs nam testen over als ontwerpmiddel in de vorm van [Test-Driven Development](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") en herkaderde de [tests als een vorm van documentatie](/blog/22/09/tests-als-documentatie/ "'Tests als documentatie'"). De ene cultuur ontwikkelt een techniek, die de volgende cultuur oppakt en inpast in zijn eigen kaders. Een dergelijke ontwikkeling zien we ook met het idee van programmeertalen, dat ontstond in de wiskundige cultuur maar tegenwoordig door het hele vakgebied is omarmd als vanzelfsprekend.


Een dergelijke kruisbestuiving werkt alleen als de cultuur een idee in openbare, concrete entiteiten weet te vatten. *Debugging* is sinds haar oorspronkelijke introductie in de hackercultuur bijvoorbeeld niet op onverwachte manieren doorontwikkeld. *Debugging* in de jaren '60 verschilt niet fundamenteel van *debugging* in 2026. Petricek wijdt dit aan het feit dat het een praktische vaardigheid is. Er is, buiten de handelingen van ontwikkelaars, geen concreet object dat de volgende cultuur op kan pakken en kan transformeren tot iets nieuws. Dat gezegd hebbend, hebben hackers en ingenieurs in de loop der jaren natuurlijk wel hulpmiddelen ontwikkeld om het eenvoudiger en gebruiksvriendelijker te maken om fouten in programma's op te sporen.


## Geschiedenis


*Cultures of Programming* presenteert een geschiedenis van programmeren aan de hand van de vijf culturen, die je moet zien als behulpzame abstracties. Petricek zet in vijf hoofdstukken ruwweg vijf ontwikkelingen uiteen. Deze zijn: de introductie van programmeertalen (hoofdstuk 2), de ontwikkeling van interactief programmeren (hoofdstuk 3), de opkomst van het ingenieursperspectief (hoofdstuk 4), de introductie van types (hoofdstuk 5), en de uiteindelijke dominantie van object-georiënteerd programmeren (hoofdstuk 6). Deze geschiedenis leidt de lezer van de ontwikkeling van [lambdacalculus](https://en.wikipedia.org/wiki/Lambda_calculus "'Lambda calculus', Wikipedia") in de jaren '30 – nota bene: nog geen computer in zicht hier! – via [IBM](https://nl.wikipedia.org/wiki/IBM "'IBM', Wikipedia") en [Xerox PARC](https://en.wikipedia.org/wiki/PARC_(company) "'PARC (Company)', Wikipedia") naar de alomtegenwoordigheid van software vandaag de dag.


Elk hoofdstuk wordt voorafgegaan door een dialoog, waarin (geïdealiseerde) vertegenwoordigers van elke cultuur met elkaar in discussie gaan. De vertegenwoordigers, die elk de naam van een oude Griekse filosoof dragen, ruziën over vragen als: 'Wat is nu eigenlijk programmeren?', 'Hoe weten we zeker dat een programma werkt?' of 'Wat is het beste proces dat we kunnen volgen om software te ontwikkelen?' Het toont dat *Cultures of Programming* niet een zuiver geschiedkundig werk is, maar ook een [filosofische](/tags/filosofie/ "Blogs met de tag 'filosofie'") inslag heeft. De ondertitel, *The Development of Programming Concepts and Methodologies*, verwijst niet alleen naar de feitelijke ontwikkeling, maar ook naar het conceptuele kader -- de culturen -- die deze mogelijk maakte.


Het boek slaagt niet alleen als leesbaar verhaal waar vakidioten hun hart aan kunnen ophalen, het reikt ook het gereedschap aan om ingesleten meningsverschillen tussen collega's mee te beslechten. Want het zou zomaar kunnen dat je manager niet hopeloos vastzit in het verleden als hij testen als fase karakteriseert; hij vertrekt wellicht vanuit een andere aanname over de rol van testen in het proces. En misschien is je collega die vroeger wiskunde studeerde niet een hopeloze theoreticus, maar is zijn opvatting van hoe goede code eruit ziet, gevormd door noties van elegantie in plaats van leesbaarheid. Dat we allemaal [Java](https://en.wikipedia.org/wiki/Java_(programming_language) "'Java (programming language)', Wikipedia") of [C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language) "'C Sharp (programming language)', Wikipedia") schrijven, blijkt geen garantie te zijn dat we dezelfde taal spreken.


*Deze recensie verscheen ook op [Boekenkrant.com](https://boekenkrant.com/).*


[^1]: De conferentiepraatjes van Aaron, steevast vergezeld met een livedemo van zijn live geprogrammeerde muziek, zijn altijd een genot om te kijken. Klik [hier](https://www.youtube.com/watch?v=TXvaa26UUZU "'Sonic Pi: How to Live Code an Orchestra • Sam Aaron • GOTO 2023', YouTube") of [hier](https://www.youtube.com/watch?v=RAd5RkuZPb4&t=2s "'Beyond Sonic Pi: Tau5 & the Art of Coding with AI • Sam Aaron • GOTO 2025', YouTube") voor twee goede voorbeelden.