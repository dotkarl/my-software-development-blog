---
title: "Pairing en theoriebouwen"
author: "Karl van Heijster"
date: 2026-09-11T11:23:38+02:00
draft: true
comments: true
tags: ["efficiëntie", "pair programming", "samenwerking", "software ontwikkelaar (rol)", "software ontwikkelen"]
summary: "Waarom zou je aan *pair programming* doen? Dan doen twee mensen het werk van één, dat is toch vreselijk inefficiënt! -- Die zienswijze veronderstelt dat het doel van programmeren is om een werkend programma te produceren. Maar een werkend programma maakt nog geen goede software. Goede software is *soft*: eenvoudig aan te passen naar veranderende eisen en wensen."
---

Waarom zou je aan [*pair programming*](/tags/pair-programming/ "Blogs met de tag 'pair programming'") doen? Dan doen twee mensen het werk van één, dat is toch vreselijk [inefficiënt](/tags/efficiëntie/ "Blogs met de tag 'efficiëntie'")![^1] -- Die zienswijze veronderstelt dat het doel van programmeren is om een werkend programma te produceren. Maar een werkend programma maakt nog geen goede software. [Goede software is *soft*](/blog/26/07/het-argument-van-zachtheid/ "'Het argument van zachtheid'"): eenvoudig aan te passen naar veranderende eisen en wensen.


[Peter Naur](https://en.wikipedia.org/wiki/Peter_Naur "'Peter Naur', Wikipedia") stelt in [*Programming as Theory Building*](https://algoritmos-iii.github.io/assets/bibliografia/programming-as-theory-building.pdf "Peter Naur, 'Programming as Theory Building', pdf") dat een theorie[^2] essentieel is om software te kunnen ontwikkelen. Ontwikkelaars hebben kennis nodig van het probleem- en oplossingsdomein, opdat zij nieuwe wensen correct kunnen interpreteren en implementeren in het programma -- liefst op zo'n manier dat ook de volgende ontwikkelaar de volgende wens kan duiden en op natuurlijke wijze in de codebase kan integreren.


*Pairing* is een oefening een theoriebouwen. 


Een ontwikkelaar die ervaring heeft met het systeem, leert een nieuweling de wens te begrijpen (het probleemdomein) en hoe deze zich vertaalt naar code (het oplossingsdomein). Pas als de nieuweling voldoende theorie heeft opgebouwd van beide, kan deze productief bijdragen aan de codebase. Zonder de juiste theorie, zullen diens wijzigingen waarschijnlijk meer schade berokkenen dan bijdragen.


Maar *pairing* is niet alleen wenselijk bij nieuwe teamleden. Ook wanneer ervaren ontwikkelaars samen code schrijven, onderhouden zij hun respectievelijke theorieën. Hun [samenwerking](/tags/samenwerking/ "Blogs met de tag 'samenwerking'") dwingt hen hardop hun interpretatie van de wens en de oplossing te formuleren. Zo gaan ze na of hun theorieën met elkaar in overeenstemming zijn, en zo nee, dan kunnen ze de verschillen bediscussiëren. Ze ontdekken al coderend gaten in de theorie van de ander en van zichzelf, en onderlinge discrepanties. 


*Pairing* is een veiligheidsmechanisme dat ervoor zorgt dat incomplete en inconsistente theorieën een zo kort mogelijk leven beschoren zijn. Zo kunnen deze niet onopgemerkt gaan etteren en de codebase degraderen. Wie veel samenwerkt met collega's, zorgt ervoor dat iedereens kennis van het probleem- en de oplossing altijd *up to date* is -- met tot gevolgd niet alleen werkende, maar zowaar *goede* software.


[^1]: Ik vroeg me in 2023 al af: [*Is pair programming minder efficiënt?*](/blog/23/01/is-pair-programming-minder-efficient/) In die blog richt ik mijn pijlen op de onuitgesproken premisse dat de code die door een *pair* wordt opgeleverd niet wezenlijk anders is dan van die van een solist.

[^2]: Naur ontleent de term aan [Gilbert Ryles](https://plato.stanford.edu/entries/ryle/ "'Gilbert Ryle', Stanford Encyclopedia of Philosophy") [*The Concept of Mind*](https://en.wikipedia.org/wiki/The_Concept_of_Mind "'The Concept of Mind', Wikipedia"). Een theorie betekent, kort gezegd, het vermogen (intelligent) gedrag te verklaren, rechtvaardigen en te duiden in een bredere context.