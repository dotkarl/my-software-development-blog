---
title: "De vergeten tester"
author: "Karl van Heijster"
date: 2025-07-11T08:35:38+02:00
draft: true
comments: true
tags: ["samenwerking", "software ontwikkelaar (rol)", "testen", "tester (rol)", "verantwoordelijkheid"]
summary: "Twee dingen kunnen tegelijkertijd waar zijn. (1) Ik vind de tester de belangrijkste rol hebben in het team. (2) Ik wil geen tester in het team. -- Ik wil haast zeggen: de rol van de tester is te belangrijk om bij een tester neer te leggen, maar die uitspraak is makkelijk te misinterpreteren en nodeloos provocerend. En toch..."
---

Ken je de grap van de vergeten tester? -- *Die werd niet vergeten!*


{{< asterisk >}}


Ik zit in een ruimte tegenover mijn manager, ons maandelijkse een-tweetje. We bespreken lopende zaken, klein grut. Maar ik dans om een onderwerp heen. Vijf minuten voor het eind van het gesprek -- een hijgerige groep ontwikkelaars staat al bij de ingang te wachten tot ze de vergaderruimte voor zichzelf kunnen claimen --, komt het hoge woord er toch uit: ik zit al zus en zoveel jaar in dit team, het kriebelt en ik ben om me heen aan het kijken.


Ze zegt: daar ga ik over nadenken. Twee uur later hoor ik dat ik een nieuw team mag samenstellen om een [*legacy*](/tags/legacy-code/ "Blogs met de tag 'legacy code'") applicatie uit te faseren. Zo simpel kan het soms zijn.


{{< asterisk >}}


We maakten een [*proof of concept*](/tags/proof-of-concept/ "Blogs met de tag 'proof of concept'") -- dat wil zeggen: -- eh... nou ja, *ik* maakte een *proof of concept*, want ik was de enige ontwikkelaar in dit nu nog embryonale team. (Zie ook [deze blog](GAAN_WE_SNEL_GENOEG "'Gaan we snel genoeg?'").) Ik zit opnieuw tegenover mijn manager, en tegenover een provisoir Product Owner, en naast een softwarearchitect. We gaan de *proof of concept* aan de hogere echelons van het management presenteren, zij zullen beslissen of het project van de grond gaat komen of niet.


En zo ja, met wat voor team gaan we dat doen? -- "Een architect," zegt de architect. -- "En een Product Owner," zegt de Product Owner. -- "En een ontwikkelaar," stem ik in. "Misschien twee." "Een back-ender en een front-ender," knikt de rest. "Of twee full-stackers, wat je wil." 


"En een tester?" -- Nee, het was eerder: "En een tester." -- Het was: "We vergeten nog iets: een tester."


"Nee," zeg ik, "die ben ik niet vergeten. Ik wil geen tester in het team -- nu nog niet."


{{< asterisk >}}


Twee dingen kunnen tegelijkertijd waar zijn. (1) Ik vind de tester de belangrijkste rol hebben in het team. (2) Ik wil geen tester in het team. -- Ik wil haast zeggen: de rol van de tester is te belangrijk om bij een tester neer te leggen, maar die uitspraak is makkelijk te misinterpreteren en nodeloos provocerend.


Ik zeg het -- sorry! -- toch maar: *de rol van de tester is te belangrijk om bij een tester neer te leggen.*


{{< asterisk >}}


Drie vragen dringen zich op: *(a)* wat is de rol van de tester?; *(b)* waarom is deze belangrijk?; *(c)* waar moet deze neer worden gelegd?


Het is de rol van de tester om te waarborgen dat het systeem werkt zoals bedoeld. -- "Waarborgen" is het sleutelwoord hier. De tester waarborgt het correcte gedrag door een reeks tests voor het systeem te ontwerpen. Deze [documenteren](/blog/22/09/tests-als-documentatie/ "'Tests als documentatie'") het [gedrag](/blog/22/12/tests-zijn-specs/ "'Tests zijn specs'") en geven onmiddellijk een signaal wanneer het feitelijke gedrag van het systeem afwijkt van het geïntendeerde gedrag.


Traditioneel werden deze tests handmatig uitgevoerd, aan het eind van het project. Het idee was: je creëert een systeem en wanneer het af is, valideer je met een reeks handmatige tests dat het daadwerkelijk af is. Maar tegenwoordig heeft het de voorkeur geautomatiseerd te testen gedurende de ontwikkeling van het product. Want: het systeem is nooit helemáál af, en daardoor is het belangrijk -- *noodzakelijk* geworden de tests na elke wijziging uit te voeren om regressies te voorkomen.


Het is de verantwoordelijkheid van de *ontwikkelaars*, niet van de testers, om de geautomatiseerde testsuite te onderhouden en uit te breiden. Geautomatiseerde tests zijn code, en code is het domein van de ontwikkelaars. Ontwikkelaars dragen de verantwoordelijkheid voor het correcte gedrag van de code, en dus dragen ze de verantwoordelijkheid voor de code de dat gedrag valideert. (Zie ook [deze blog](/blog/24/07/goede-code-is-geteste-code/ "'Goede code is geteste code'").)


{{< asterisk >}}


Niet elke ontwikkelaar voelt zich geroepen om tests te schrijven. Zulke ontwikkelaars zijn *onverantwoordelijke* ontwikkelaars. 


[Kent Beck](https://www.kentbeck.com/) klaagt erover tegen [Daniel Terhorst-North](https://dannorth.net/) in [deze aflevering van *GOTO Unscripted*](https://open.spotify.com/episode/2A36amsFrgPNQ9zRIfDzSo?si=fbd74eaaeeaa4672 "'From XP to TCR & Limbo · Kent Beck & Daniel Terhorst-North', GOTO - The Brightest Minds in Tech @ Spotify"). Beck gaf eerder al toe dat zijn grootste strategische fout was om [Test-Driven Development](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") (TDD) *Test*-Driven Development te noemen. Terhorst-North probeerde die fout te herstellen door Becks idee opnieuw te verkopen als [Behaviour-Driven Development](https://en.wikipedia.org/wiki/Behavior-driven_development "'Behavior-driven development', Wikipedia") (BDD).


Beck zegt: "*Come on.*" Een test is een test. En hij heeft gelijk -- maar tegelijkertijd is het ook zo dat mensen soms verleid (of misleid?) moeten worden goede ideeën te accepteren.


{{< asterisk >}}


Uit het voorgaande volgt *niet* dat testers overbodig zijn -- dat is niet de reden waarom ik ervoor pleitte om geen tester in het team te hebben.


De manier waarop de testers (in elk geval de testers waar ik mee heb gewerkt) hun rol invullen is inefficiënt. Ze nemen een taak op zich van het schrijven van geautomatiseerde tests. Maar die taak is eigenlijk de verantwoordelijkheid van de ontwikkelaar. Programmeren en testen zijn twee kanten van dezelfde munt. Door die innerlijk verweven taken uit elkaar te trekken, introduceren ze overdrachtsmomenten met onnodig lange [feedbackloops](/blog/23/11/drie-feedbackloops-die-verbeteren-met-unit-tests/ "'Drie feedbackloops die verbeteren met unit tests'"). Dit is een [erfenis van waterval](/blog/23/11/erfenissen-van-waterval/ "'Erfenissen van waterval'")


Maar inefficiëntie is niet eens het grootste probleem van deze opzet. Door de testtaak van de ontwikkelaar over te nemen, ontnemen ze de ontwikkelaar zijn verantwoordelijkheid. Deze taakverdeling communiceert (bedoeld of onbedoeld?) het volgende: "Jij ontwikkelaar bent niet te vertrouwen met de verantwoordelijkheid werkende code op te leveren. We betalen een andere persoon grof geld om jouw werk te controleren, zo weinig vertrouwen hebben we in je."


Testers *qua* controleurs zijn instituten van wantrouwen. En binnen een socio-technisch systeem waarin wantrouwen jegens ontwikkelaars geïnstitutionaliseerd is, worden ontwikkelaars ontmoedigd om hun verantwoordelijkheid te *nemen*. Deze taakverdeling is daarom (onbedoeld -- overduidelijk) schadelijk.


{{< asterisk >}}


Een ideaal van softwareontwikkeling is [*continuous deployment*](https://en.wikipedia.org/wiki/Continuous_deployment "'Continuous deployment', Wikipedia"): elke commit gaat onmiddellijk naar de productieomgeving. Dit is alleen mogelijk als de tester geen obstakel vormt op weg naar de productie.


{{< asterisk >}}


De tester heeft één van de belangrijkste rollen in een team. De rol van een tester is niet (zou niet moeten zijn): de ontwikkelaar controleren. De rol van de tester is (zou moeten zijn): het verhelderen van de requirements *door deze te formuleren als tests*. De tester speelt een essentiële rol in het concreet maken van vage of abstracte wensen -- concreet genoeg om door ontwikkelaars te kunnen worden geautomatiseerd.


Een tester *qua* [informatieanalist](/tags/informatieanalyse/ "Blogs met de tag 'informatieanalyse'"), zou je kunnen zeggen.


De tester denkt mee met de ontwikkelaar over de testcases die diegene zou moeten implementeren om te kunnen concluderen dat een feature afgerond is. De tester is een sparringpartner bij het opstellen van die testcases. De tester ontdekt gaten in de testcases die de ontwikkelaar zelf heeft opgesteld (en het liefst ook andersom).


{{< asterisk >}}


Ik ben niet tegen testers -- integendeel. Maar ik pleitte tegen een tester in het team, omdat diens aanwezigheid het verleidelijk zou maken om terug te vallen in oude patronen. Zodra ontwikkelaars de verantwoordelijkheid van het schrijven van geautomatiseerde tests op zich hebben genomen, voeg ik met alle liefde een tester aan het team toe -- dan is het team er rijp voor.


{{< asterisk >}}


Ik zit in een belhokje, tegenover een sollicitant, een tweede ontwikkelaar in het team. Ik leg hem uit dat we geen tester hebben, en dat dat *by design* is. 


Hij vraagt: "Maar wie schrijft de scenario’s dan?" (-- Scenario's: dat is het woord. Maar de term is ambigu: bedoelt hij *de scenario's die wij automatiseren*, of *de geautomatiseerde tests*? Zie ook [deze blog](/blog/25/01/wat-betekent-het-tests-te-schrijven/ "'Wat betekent het tests te schrijven?'").) 


"Wij," zeg ik. "Jij en ik."


"Oké." Hij denkt even na. "Dat kunnen we proberen."


Meer vraag ik niet.
