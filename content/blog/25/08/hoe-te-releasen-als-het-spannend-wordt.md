---
title: "(Hoe te) releasen als het spannend wordt?"
author: "Karl van Heijster"
date: 2025-08-15T08:52:19+02:00
draft: false
comments: true
tags: ["continuous delivery", "contracttesten", "end to end testen", "program increment planning", "testen"]
summary: "De laatste PI-planning stond er een interessante sessie op de agenda: 'Releasen als het spannend wordt'. De titel intrigeerde ons. Met de boekenclub lazen we op dat moment *Continuous Deployment* van Valentina Servile, dus de hele notie van een *spannende release* deed de wenkbrauwen fronsen. Waar kwam dit gevoel vandaan?"
---

De laatste [PI-planning](/tags/program-increment-planning/ "Blogs met de tag 'program incement planning'") stond er een interessante sessie op de agenda: *Releasen als het spannend wordt*. De titel intrigeerde ons. Met de [boekenclub](/tags/boekenclub/ "Blogs met de tag 'boekenclub'") lazen we op dat moment [*Continuous Deployment*](https://www.oreilly.com/library/view/continuous-deployment/9781098146719/ "Valentina Servile, 'Continuous Deployment: Enable Faster Feedback, Safer Releases, and More Reliable Software', O'Reilly Media Inc. 2024") van [Valentina Servile](https://www.linkedin.com/in/valentina-servile/), dus de hele notie van een *spannende release* deed de wenkbrauwen fronsen. Waar kwam dit gevoel vandaan?


## Piekmomenten


Het ligt in de aard van ons domein -- toetsconstructie en -afname -- dat er piekmomenten zijn, afgewisseld met rustiger perioden. In examentijd wordt het systeem zwaar belast, buiten examentijd valt het mee. "Releasen als het spannend wordt" betekent: releasen gedurende piekmomenten. Als er op dat moment iets om blijkt te vallen, dan merkt *iedereen* dat *onmiddellijk*. Als er in een rustiger periode iets omvalt, dan is er daarentegen geen man over boord.


Er zijn verschillende manieren om met deze situatie om te gaan. De meest draconische -- en meest dysfunctionele -- is ervoor te kiezen helemaal niets te deployen tijdens piekmomenten.[^1] (Uitzonderingen kunnen worden gemaakt voor bugfixes.) Dit is een oplossing die het symptoom bestrijdt maar het onderliggende probleem in stand houdt. Het zorgt ervoor dat er geen [bugs](/tags/bugs/ "Blogs met de tag 'bugs'") meer worden geïntroduceerd tijdens piekmomenten, maar het laat de ontwikkelcultuur die zulke bugs produceert in stand.


De oplossing die Servile in haar boek bepleit, is juist de tegenovergestelde: deploy continu. Continue deployment maakt de problemen in het team zichtbaar. Het dwingt een team om de ontwikkelcultuur zodanig te veranderen dat er überhaupt veilig gedeployd kan worden. Een wijsheid uit [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming "'Extreme programming', Wikipedia") is: als het pijn doet, doe het dan vaker. Want hoe vaker je het doet, hoe minder pijnlijk het wordt. Doe het tot het je tweede natuur is -- en de pijn is weg.


## Dekking


Van de zijlijn is dat natuurlijk makkelijk praten. De vraag is: wat houdt teams tegen om continu te deployen? Een terugkerend antwoord is: [testen](/tags/testen/ "Blogs met de tag 'testen'"). Meer specifiek: een te beperkte dekking van geautomatiseerde tests. -- Dit is een strijd die ik al tijden voer. Elke regel productiecode die je schrijft moet gedekt zijn door geautomatiseerde tests. [Goede code is geteste code.](/blog/24/07/goede-code-is-geteste-code/) Maar dat is een les die veel ontwikkelaars, helaas, alleen uit eigen ervaring willen leren.


Maar zelfs wanneer al *jouw* code is gedekt door tests, ben je er nog niet. Code integreert ook met externe partijen, en de problemen waar sommige teams tegenaan lopen, blijken in die hoek te zitten. Hun applicaties roepen API's aan die niet altijd even stabiel blijken te zijn. Ze bevatten bugs of nieuwe releases blijken onverwacht *breaking changes* te bevatten. 


[Ook *third party* code dien je te testen.](/blog/22/12/test-third-party-code/ "'Test third party code'") Wanneer je een afhankelijkheid hebt naar een externe partij, dan wordt het goed functioneren van *hun* code onderdeel van *jouw* verantwoordelijkheid. (Zie ook [deze blog](/blog/22/11/zes-dingen-die-ik-leerde-op-techorama/ "'Zes dingen die ik leerde op Techorama'").) Het is dus jouw taak om na te gaan dat die code werkt en blijft werken zoals bedoeld. Voor je gebruiker is het om het even waar de bug vandaan komt: zij zien een bug in externe code als een fout in *jouw* systeem -- en terecht.


## E2E


De vraag is: *hoe* test je die externe code? En daar ging het gedurende de sessie helaas de verkeerde kant op. Er werd veel gesproken over het opschalen van acceptatieomgevingen, ze laten kijken naar bèta-versies van de externe code -- maar ook naar hun productieversies -- dus eigenlijk zouden er meer acceptatieomgevingen moeten zijn -- die allemaal (natuurlijk!) zoveel mogelijk op de productieomgeving moeten lijken -- en voor je het weet zit je in een peperduur moeras van testomgevingen die in alle mogelijke combinaties van versies met elkaar aan het praten zijn.


Het idee klinkt intuïtief: de externe code is deel van de volledige keten, dus dient getest te worden in de volledige keten. [Unit](/tags/unit-tests/ "Blogs met de tag 'unit tests'")- en [integratietests](/tags/integratietests/ "Blogs met de tag 'integratietests'") dekken onze code; [end-to-end-tests](/tags/end-to-end-tests/ "Blogs met de tag 'end to end tests'") (E2E-tests) dekken de externe code.


Maar er zitten risico's aan deze aanpak. E2E-tests zijn, vanwege de vele variabelen die van invloed kunnen zijn op het resultaat, notoir instabiel. Een falende test wijst niet per se op een bug in de code; het zou bijvoorbeeld ook het gevolg van een hapering in het netwerk kunnen zijn. Bovendien, als zo'n test al wijst op een bug, dan geeft deze weinig informatie over de bron van de bug. Zit deze in je eigen code? Of in die van de externe partij? En wáár dan? Daar valt alleen achter te komen door de code te debuggen -- een tijdrovend proces.


Deze aanpak gaat uit van een verkeerd idee van het doel van E2E-tests. Het is, om de redenen die ik hierboven schetste, *niet* hun doel te valideren of een systeem geen bugs bevat. Hun doel is te valideren dat de verschillende deelsystemen op de juiste manier met elkaar interacteren. Een geslaagde E2E-test vertelt je: de relevante subsystemen communiceren in dit scenario op de juiste manier met elkaar. Ze stellen vast *dat* er gepraat; *wat* ze precies zeggen is voor tests op lager niveau.


## Contract


Hoe test je externe code dan? -- Nou, precies zoals je je eigen code zou testen: met unit- of integratietests.[^2] Je schrijft geautomatiseerde tests tegen de publieke interface van de externe code aan, en valideert dat het antwoord dat je terugkrijgt inderdaad is wat je verwacht.


Maar let op: dit betekent niet dat deze tests dezelfde rol hebben als de unit- en integratietests die je eigen code testen. Die tests zijn bedoeld om regressies te voorkomen wanneer je de code wijzigt. De tests voor de externe code zijn bedoeld om het gedrag van de externe code vast te leggen. Ze vertellen je wat de code doet onder welke omstandigheden, ze specificeren het contract dat je met de externe code aangaat. Ze worden daarom [contracttests](/tags/contracttesten/ "Blogs met de tag 'contracttesten'") genoemd.


Je kunt contracttests gebruiken om zekerheid te krijgen over de manier waarop jouw eigen code interacteert met de externe partij. Je eigen tests roepen niet direct de externe API aan, maar een [mock](/tags/mocks/ "Blogs met de tag 'mocks'"). Vraag: hoe weet je dat die mock hetzelfde gedrag vertoont als de echte API? Antwoord: je contracttests. Deze dienen, in deze context, als naslagwerk voor hoe je de mock dient te implementeren. Je zou beide zelfs aan dezelfde tests kunnen onderwerpen, waarmee je een geautomatiseerde check op de validiteit van je mock hebt bewerkstelligd.  


Contracttests maken het ook makkelijk om te upgraden naar een nieuwe versie. Je tests wijzen naar de oude versie; ze slagen allemaal. Upgrade nu naar de nieuwe versie. Zodra er tests beginnen te falen, weet je dat er sprake is van *breaking changes*. En het mooie is: de tests vertellen je precies waar die wijzigingen zitten, en wat het nieuwe gedrag is. Dat maakt het een stuk eenvoudiger je eigen code aan te passen naar de nieuwe situatie.


## Teststrategie


Deze overwegingen tonen aan: de oplossing is niet zo simpel als *meer testen*. Testen is onderdeel van de oplossing, zeker, maar belangrijker dan de vraag *hoeveel* er getest wordt, is de vraag *wat* er getest wordt en *hoe* dat wordt gedaan. 


Om goed antwoord te kunnen geven op die vraag, moet je onderscheid (kunnen) maken tussen de verschillende onderdelen van je systeem. Je moet inzicht hebben in de naden van het systeem: wat is een interface en wat is een implementatiedetail? (Zie ook [deze talk](/talks/altijd-up-to-date-documentatie-met-maximaal-descriptieve-tests/ "'Altijd up to date documentatie met maximaal descriptieve tests'").) Dit is één van de redenen waarom testen niet een taak is die louter is toebehouden aan testers. 


Ontwikkelaars kunnen en moeten hier een mening over hebben. Een goede teststrategie vraagt inzicht in de architectuur van een systeem. (Zie ook [deze talk](/talks/wat-zegt-deze-test/ "'Wat zegt deze test?'").) Alleen dan kan er worden gereleased zonder dat het spannend wordt.


[^1]: Er is een verschil tussen *releasen* en *deployen* -- dat klinkt vanzelfsprekend maar dat is het niet. Een release maakt nieuwe functionaliteit beschikbaar voor eindgebruikers. Een deployment plaatst nieuwe code op de productieomgeving. Een deployment *kan* een release zijn, maar dat hoeft niet, bijvoorbeeld wanneer je nieuwe functionaliteit uitrolt achter een [*feature flag*](https://martinfowler.com/articles/feature-toggles.html "'Feature Toggles (aka Feature Flags)', Pete Hodgsen @ Martin Fowler"). Voor veel teams, ook de teams waar het hier over gaat, betekent een deployment echter ook een release.

[^2]: Welke van de twee hangt af van de vorm van de externe code. Libraries kun je makkelijker met unittests testen, web-API's lenen zich meer voor integratietests. 
