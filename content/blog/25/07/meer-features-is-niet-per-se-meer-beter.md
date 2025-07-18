---
title: "Meer features is niet (per se) meer beter"
author: "Karl van Heijster"
date: 2025-07-18T07:59:07+02:00
draft: false
comments: true
tags: ["beroepsdeformatie", "evolutie", "technische schuld"]
summary: "Een tijd terug las ik *The Selfish Gene* van bioloog Richard Dawkins. Omdat ik een beroepsdeformatie heb, deed het me aan softwareontwikkeling denken."
---

Een tijd terug las ik [*The Selfish Gene*](https://en.wikipedia.org/wiki/The_Selfish_Gene "'The Selfish Gene', Wikipedia") van bioloog [Richard Dawkins](https://richarddawkins.net/). Omdat ik een [beroepsdeformatie](/tags/beroepsdeformatie/ "Blogs met de tag 'beroepsdeformatie'") heb, deed het me aan softwareontwikkeling denken.[^1]


De centrale these van Dawkins' boek is dat evolutie draait om het voortbestaan van *genen* -- niet om individuen of groepen of soorten. Onze lichamen, met hun organen en ledematen en hersenen, zijn slechts complexe machines die genen hebben ontwikkeld om zichzelf te kunnen repliceren. Alleen als we de zaak vanuit genetisch perspectief bezien, wordt ogenschijnlijk evolutionair onverklaarbaar gedrag begrijpelijk -- en zelfs voor de hand liggend.


## Altruïsme


Volgens de klassieke darwinistische logica worden organismen geselecteerd op basis van hoe goed ze hun genen doorgeven aan de volgende generatie. Alles wat de kans op voortplanting verhoogt, zal dus worden bevoordeeld door natuurlijke selectie -- zou je denken.


Maar er bestaat ook (geëvolueerd) gedrag dat deze regel lijkt te weerspreken. Een goed voorbeeld daarvan is [altruïsme](https://en.wikipedia.org/wiki/Altruism "'Altruism', Wikipedia"), het helpen van anderen ten koste van jezelf.[^2] Sommige dieren planten zich bijvoorbeeld minder voort in tijden van schaarste. Dit gedrag is evolutionair tegenintuïtief. Dieren die zich in tijden van schaarste minder voortplanten dan hen die dat wel doen, lijken anderen te helpen (door minder nakomelingen voort te brengen die de schaarse voedselbronnen opeten) ten koste van zichzelf.


Sommige biologen hebben geprobeerd dit gedrag te verklaren vanuit het perspectief van [groepsselectie](https://en.wikipedia.org/wiki/Group_selection "'Group selection', Wikipedia"). Zij stellen dat altruïstisch gedrag ontstaat doordat dit voordelig is voor de groep (of soort) als geheel. Door minder nakomelingen te krijgne, wordt de druk op de voedselbronnen verminderd, wat de overleving van de groep ten goede komt. Hoewel nadelig voor het individu, blijkt de strategie voordelig ten opzichte van de soort.


Deze kijk op de zaken veronderstelt een harmonieus beeld van de natuur. Individuen offeren zich op omdat ze "begrijpen"[^3] dat dit in het voordeel is van hun groep, en wat in het voordeel is van de groep is ook op langere termijn in hun eigen voordeel.


## Egoïsme


Maar de groepsselectiehypothese is wankel, zegt Dawkins. Het evenwicht in zo'n groep altruïsten zou al snel verstoord worden wanneer een "egoïstische" mutatie zijn intrede zou doen. Deze mutant zou genadeloos misbruik maken van het altruïstisch gedrag van zijn groepsgenoten ten faveure van zijn eigen genen. Het gevolg is dat er binnen de kortste keren geen altruïsten meer overblijven om van te profiteren.


Dawkins biedt een alternatieve verklaring: het is *in het belang van het gen* om zich in tijden van schaarste niet voort te planten. Genen die dit gedrag vertonen, kunnen op de langere termijn beter overleven. 


In tijden van schaarste is de kans groot dat de nakomelingen zullen sterven, en dat de moeder verzwakt of overlijdt tijdens het opvoeden van de jongen. In zulke gevallen kan het verstandig zijn te wachten op beter tijden, zodat het individu op een later moment gezonder nageslacht kan produceren. Het gedrag dat we zien is geen vorm van altruïsme, maar een strategisch uitstel van de voortplanting. Soms is het verstandig je (nog) niet voort te planten. 


## Features


Wat heeft dit met softwareontwikkeling te maken? -- Vergelijk het eens met het bouwen van nieuwe features.


Het lijkt voor de hand liggend voor een team om zoveel mogelijk features op te willen leveren. Hun Product Owner (PO) houdt de backlog nauwlettend in de gaten en probeert zoveel mogelijk [Product Backlog Items (PBI's)](/tags/product-backlog-items/ "Blogs met de tag 'product backlog item'") de [Sprint in te slepen](/tags/sprint-planning/ "Blogs met de tag 'sprint planning'"). En dat doet de PO natuurlijk niet voor niets. [Stakeholders](/tags/stakeholders/ "Blogs met de tag 'stakeholders'") en eindgebruikers zitten hem (of haar) achter de broek om die nieuwe functionaliteit op te leveren waar ze zo dringend op zitten te wachten. Bovendien, de meeste ontwikkelaars willen graag helpen, ze zijn gemotiveerd om hun klanten zo goed mogelijk te bedienen. 


Maar *rücksichtlos* nieuwe functionaliteit bouwen is een antipatroon dat we de [*feature factory*](https://www.scrum.org/resources/blog/escaping-feature-factory "'Escaping the Feature Factory', Stefan Wolpers @ Scrum.org") noemen. Teams die als featurefabriek opereren *lijken* productief -- gemeten naar het aantal PBI's dat ze aftikken. Maar hebben vaak weinig oog voor de onderliggende wensen van hun klanten. Sterker nog, een overdaad aan features kan zelfs negatief uitpakken voor de beleving van het systeem. Het systeem doet zo veel dat het onduidelijk is welk probleem het nu precies oplost. Bovendien brengt hun eenzijdige focus op het gedrag van de code ten koste van de structuur, de kwaliteit van de software in gevaar. 


Deze problemen verergeren naarmate het team in zwaarder weer komt. Als de omstandigheden verslechteren en de deadlines hetzelfde blijven, zal het op hetzelfde tempo blijven produceren van nieuwe features uiteindelijk leiden tot een onbetaalbare [technische schuld](/tags/technische-schuld/ "Blogs met de tag 'technische schuld'"). De featurefabriek put het team uit. De schuld wordt zo zwaar dat het instort: mensen raken overspannen of gaan op zoek naar een nieuwe baan, en de mensen die blijven worstelen zich door ononderhoudbare code heen. En dan kan het überhaupt geen features meer produceren.


Dezelfde logica op het voortplanten in tijden van schaarste is van toepassing op het bouwen van nieuwe features. Af en toe is het verstandiger een stap terug te doen en te wachten op betere tijden.


[^1]: Het is niet de eerste keer dat evolutionaire bespiegelingen me tot nadenken stemden. Het lezen van [*Darwin's Dangerous Idea*](https://en.wikipedia.org/wiki/Darwin%27s_Dangerous_Idea "'Darwin's Dangerous Idea', Wikipedia") van [Daniel Dennett](https://en.wikipedia.org/wiki/Daniel_Dennett "'Daniel Dennett', Wikipedia") dreef me er al eerder toe [deze](/blog/23/09/coderen-met-luchthaken-en-hijskranen/ "'Coderen met luchthaken en hijskranen'") en [deze blog](/blog/23/10/evolutionair-programmeren/ "'Evolutionair programmeren'") te schrijven. Evolutie en softwareontwikkeling kennen paralellen die het waard zijn te onderzoeken.

[^2]: De definitie van altruïsme die Dawkins in zijn hanteert is -- uiteraard -- gekaderd in het licht van de evolutietheorie, en zuiver functioneel bovendien. Elk gedrag dat de voortplantingskansen van een individu negatief beïnvloedt ten faveure van de voortplantingskansen van anderen, is altruïstisch. Het veronderstelt niet dat dat gedrag voortkomt uit goede bedoelingen van de altruïst.

[^3]: Waarmee uiteraard niet bedoeld wordt dat ze *individueel* een begrip hebben van de situatie. Dawkins wijst er regelmatig op dat we ons in gevallen als deze bedienen van metaforisch taalgebruik -- metaforisch maar niettemin *correct*; [Dennett](https://en.wikipedia.org/wiki/Daniel_Dennett "'Daniel Dennett', Wikipedia") geeft in [*From Bacteria to Bach and Back*](https://en.wikipedia.org/wiki/From_Bacteria_to_Bach_and_Back "'From Bacteria to Bach and Back', Wikipedia") een lucide uiteenzetting over het bestaan van redenen zonder redeneerder.
