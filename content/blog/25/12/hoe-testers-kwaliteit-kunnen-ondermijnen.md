---
title: "Hoe testers kwaliteit kunnen ondermijnen"
author: "Karl van Heijster"
date: 2025-12-19T08:22:36+01:00
draft: false
comments: true
tags: ["complexiteit", "testen", "verantwoordelijkheid"]
summary: "Een complex systeem is een systeem waarin het onmogelijk is om te voorspellen wat de relatie is tussen oorzaak en gevolg. Om die reden worden complexe systemen vaak gekenmerkt door tegenintuïtiviteit. Een ontwikkelteam kan worden gezien een complex systeem. Dus het verbeteren van een ontwikkelteam wordt gekenmerkt door tegenintuïtiviteit."
---

Een complex systeem is een systeem waarin het onmogelijk is om te voorspellen wat de relatie is tussen oorzaak en gevolg (zie [deze blog](/blog/25/04/gecompliceerd-vs-complex/ "'Gecompliceerd vs. complex'")). Om die reden worden complexe systemen vaak gekenmerkt door tegenintuïtiviteit.[^1]


Een concreet voorbeeld hiervan is het probleem van de [geïnduceerde vraag](https://en.wikipedia.org/wiki/Induced_demand "'Induced demand', Wikipedia"). Stel, er is een weg en op die weg staan vaak files. Intuïtief zou je zeggen: verbreed de weg, dan neemt het aantal files af. Maar in de praktijk blijkt het effect juist tegenovergesteld. Want doordat de weg breder is gemaakt, nemen mensen die eerst andere routes namen nu deze weg, en mensen die de trein namen om de file te vermijden, nemen plots de auto. Het netto-effect kan zelfs negatief zijn: sinds de weg is verbreed, zijn er meer files dan ooit!


De kortste verbinding tussen *a* en *b* is in een complex systeem, bij wijze van spreken, nooit een rechte lijn. Want het trekken van die lijn verandert het systeem zodanig dat de afstand tussen *a* en *b* groter wordt, groter dan wanneer je een gekromde lijn had getrokken.


## Ontwikkelteam


Een ontwikkelteam kan worden gezien een complex systeem. (Over het algemeen houd ik de volgende vuistregel aan: een systeem met mensen erin is een complex systeem. Want mensen laten zich nooit vangen in eenvoudige modellen van oorzaak en gevolg.) Dus het verbeteren van een ontwikkelteam wordt gekenmerkt door tegenintuïtiviteit.


Stel, dit is je probleem. Je werkt in een organisatie waarin er grote druk op een ontwikkelteam staat om nieuwe features op te leveren. De ontwikkelaars werken zich in de rondte, maar de kwaliteit van het softwaresysteem[^2] dat ze produceren, is ondermaats. Het is traag en bevat een grote hoeveelheid bugs. 


Een intuïtieve oplossing voor dat probleem is: vul het team aan met een (of meerdere) testers. De taak van de tester(s) wordt dan om de output van de ontwikkelaars te testen. Als de ontwikkelaars klaar zijn met hun taak, het schrijven van de code, gaan de testers aan de gang met hun taak, het testen van die code.


## Prikkel


Dit is een uitstekende manier om de kwaliteit van een systeem nog verder te verslechteren. Want: de prikkel voor ontwikkelaars om hun eigen werk te controleren, is weggenomen. De prikkel om snel features te produceren, is daarentegen blijven bestaan. Het systeem is zodanig aangepast dat ontwikkelaars ertoe worden aangezet zo snel mogelijk code te schrijven van zo laag mogelijke kwaliteit.


De kwaliteit van de software daalt als gevolg van het aannemen van een tester. (Of liever: als gevolg van het aannemen van een tester, plus de reactie van het bestaande systeem op die systeemverandering.) 


De oplossing voor dit probleem is niet: het aannemen van nog meer testers. -- Maar wat is die dan wel? Denk tegenintuïtief!


[^1]: Ik ontleen de term, tezamen met de systeemtheoretische benadering, aan [Diana Montalions](https://montalion.com/) [*Learning Systems Thinking*](https://www.oreilly.com/library/view/learning-systems-thinking/9781098151324/ "Diana Montalion, 'Learning Systems Thinking: Essential Nonlinear Skills and Practices for Software Professionals', O'Reilly Media, 2024"), mijn [favoriete boek van 2025](/blog/25/11/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2025-las/ "'De beste boeken over software ontwikkeling die ik in 2025 las'").

[^2]: Dit kan op zichzelf ook weer een complex systeem zijn. Sterker nog, in dit specifieke voorbeeld is het redelijk dit te veronderstellen. Zie [Vlad Khononovs](https://vladikk.com/) [*Balancing Coupling in Software Design*](https://www.pearson.com/en-us/subject-catalog/p/balancing-coupling-in-software-design-successful-software-architecture-in-general-and-distributed-systems/P200000000372/9780137353576 "Vlad Khononov, 'Balancing Coupling in Software Design: Universal Design Principles for Architecting Modular Software Systems', Addison-Wesley Professional 2024"), mijn [op één na favoriete boek van 2025](/blog/25/11/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2025-las/ "'De beste boeken over software ontwikkeling die ik in 2025 las'"), voor een uitgebreide analyse.