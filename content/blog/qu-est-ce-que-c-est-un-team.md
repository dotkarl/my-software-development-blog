---
title: "Qu'est-ce que c'est un team?"
author: "Karl van Heijster"
date: 2025-12-19T08:28:41+01:00
draft: true
comments: true
tags: ["boekenclub", "lean", "samenwerking", "teamcultuur", "trunk-based development"]
summary: "Hij reflecteert: \"Het nadeel van *trunk-based development* is dat een probleem als dit nu jullie allemaal ophoudt. Omdat mijn wijziging de build blijkt te breken, kan niets van jullie er nog door.\" -- \"Nee,\" proef ik, een intuïtie najagend. \"Het *voordeel* van TBD is dat dit probleem ons allemaal ophoudt. Dat betekent dat we nu met elkaar *moeten* praten. Het voorkomt dat we op ons eigen eilandje blijven zitten, het focust ons op het allerbelangrijkste: ervoor zorgen dat we nieuwe features en verbeteringen in de code door kunnen zetten naar de productieomgeving.\""
---

# Of: dinsdag, donderdag en een vallend kwartje


Dinsdag. Een collega hoogt de versie van ons interne [*design system*](https://www.figma.com/blog/design-systems-101-what-is-a-design-system/ "'What is a design system?', Chad Bergman @ Figma") op in de `package.json`. Plots falen er tests in de [*pipeline*](https://martinfowler.com/bliki/DeploymentPipeline.html "'Deployment Pipeline', Martin Fowler"). Hij stuurt een berichtje: "Heren, de build is stuk. Ik ben er naar aan het kijken."


Ik vraag, een minuut of tien, vijftien later: "Heb je hulp nodig?" Hij antwoordt: "Ik moet nodig even naar de wc, daarna bel ik je!"


Ik volg zijn voorbeeld.


Hij deelt zijn scherm. Kijk, zegt hij, lokaal werkte het allemaal prima. Hij had deze [*peer dependency*](https://nodejs.org/en/blog/npm/peer-dependencies "'Peer Dependencies', Domenic Denicola @ NodeJS") toegevoegd en die andere juist weer weggehaald. Maar het was allemaal speculatie zolang hij het issue niet kon reproduceren.


"En als we nu eens *niet* de bug proberen te fixen?" -- We draaien de laatste wijziging terug en de build wordt weer groen. Een rust daalt op ons neer. Nu kunnen we in alle rust het issue reproduceren in een aparte pipeline.


Hij reflecteert: "Het nadeel van [*trunk-based development*](/tags/trunk-based-development/ "Blogs met de tag 'trunk-based development'") is dat een probleem als dit nu jullie allemaal ophoudt. Omdat mijn wijziging de build blijkt te breken, kan niets van jullie er nog door."


"Nee," proef ik, een intuïtie najagend. "Het *voordeel* van *trunk-based development* is dat dit probleem ons allemaal ophoudt. Dat betekent dat we nu met elkaar *moeten* praten. Anders komen we hier niet doorheen. Het voorkomt dat we op ons eigen eilandje blijven zitten, het focust ons op het allerbelangrijkste: ervoor zorgen dat we nieuwe features en verbeteringen in de code door kunnen zetten naar de productieomgeving."


Hij denkt even na en lacht. Zo had hij er nog niet naar gekeken.


{{< asterisk >}}


Donderdag. In de [boekenclub](/tags/boekenclub/ "Blogs met de tag 'boekenclub'") lezen we [*The Phoenix Project*](https://itrevolution.com/product/the-phoenix-project/ "Gene Kim, Kevin Behr & George Spafford, 'The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win', IT Revolution 2013") (een aanrader!). Er ontstaat een discussie over de vraag: wat is het voordeel van een multidisciplinair team?


"Het zorgt ervoor dat de lijntjes kort blijven," overweegt een collega. "Als we iets van een Ops'er nodig hebben, dan kunnen we 'm zó aanschieten, en dan weet 'ie waar we mee bezig zijn. In plaats van dat we een ticket aan moeten maken in een systeem dat dan twee dagen blijft liggen omdat diegene nog met twintig andere dingen bezig is. Het voorkomt dat we dingen over de schutting gooien."


"En dat de Devs een succesvolle release gaan vieren, terwijl de Ops'ers zich nog in de rondte werken om de boel uitgerold te krijgen."


"Dat is waar, maar dat is het niet... helemaal. Toch? We organiseren ons in een multidisciplinair team zodat we alle kennis en vaardigheden bij elkaar hebben om een feature zo snel mogelijk kunnen loodsen van idee naar werkzaam in productie. Iedereen zit bij elkaar zodat ze *dit ding* met zo min mogelijk wrijving af kunnen ronden. En dan door naar het volgende."


"Bij ons in het team," een ironische lach, "stelde de Scrum Master laatst de vraag: ligt er nog genoeg werk voor onze front-ender?"


"Of: ik als ontwikkelaar ben klaar met mijn codeertaakje. Gefeliciteerd, tester, nu is het aan jou om te kijken of ik fouten heb gemaakt. In zulke gevallen zie je het bestaan van silo's *binnen een team*. De disciplines zijn bij elkaar gezet, maar ze functioneren niet als team."


"Ik begrijp waar het vandaan komt. Het voelt ineffeciënt om als ontwikkelaar te wachten tot de tester klaar is. Is het niet slimmer om alvast met het volgende taakje te beginnen?"


"Precies. Maar dat is het dus niet, want dan creëer je meer *work in progress*. En hoe meer werk er *in progress* is, hoe minder er afgerond wordt. Het mooist zou zijn: iedereen werkt samen om dit *ene ding* naar productie te krijgen. En pas als dat af is, gaan we met z'n allen naar het volgende ding."


"Wat we doen, hoe wij ons organiseren, is als een stel vakspecialisten elk op hun eigen stukje grond. Maar dat is geen team. Een team heeft een, eh, een gedeelde grond, zeg maar. En een gedeeld doel. En iedereen werkt aan dat ene doel."


{{< asterisk >}}


Maar werkten wij als team dan niet aan hetzelfde doel? 


Later realiseer ik me hoe lang we onszelf hierover voor de gek hebben gehouden. We zeiden tegen onszelf: natuurlijk werken we aan hetzelfde doel, we willen allemaal *dit systeem tot een succes maken* -- en daarom doe ik dit programmeertaakje en jij deze testtaak en jij deze deploymenttaak. 


Maar dat doel is te abstract. En die verwijdering van de dagelijkse praktijk, stelde ons in staat ons disfunctioneel te organiseren. Het kan veel simpeler: ons doel is *deze feature naar productie te krijgen*, punt.


Een team dat aan één ding werkt, [werkt *samen*](/tags/samenwerking/ "Blogs met de tag 'samenwerking'"). Een team dat aan tien dingen tegelijk werkt, is geen team maar een verzameling mensen. En een verzameling mensen krijgt nooit voor elkaar wat een team voor elkaar krijgt -- niet qua [kwaliteit](/tags/kwaliteit/ "Blogs met de tag 'kwaliteit'") én niet qua snelheid.


Je moet je voorstellen: je kunt dit werk jarenlang doen voordat dat kwartje valt.