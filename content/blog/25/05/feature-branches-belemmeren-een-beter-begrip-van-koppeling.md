---
title: "Feature branches belemmeren een beter begrip van koppeling"
author: "Karl van Heijster"
date: 2025-05-09T07:51:17+02:00
draft: false
comments: true
tags: ["boeken", "branching", "feature branching", "gitflow", "koppeling", "leermoment", "software ontwikkelen"]
summary: "Laatst brak een kleine wijziging aan de back-end -- die we zo snel mogelijk richting de testomgeving hadden gebracht -- functionaliteit aan de front-end. Voor mijn collega was het een ideale gelegenheid om zijn *bias* voor Gitflow bevestigd te zien. \"Dit zou nooit gebeurd zijn als we van *feature branches* gebruik hadden gemaakt!\" concludeerde hij. -- En niet onterecht, want het apart houden van de wijziging in kwestie zou de functionaliteit op testomgeving inderdaad intact hebben gehouden."
---

Onze lead front-endontwikkelaar is een verdediger van [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow "'Gitflow workflow', Atlassian"), een [branchingstratgie](https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance "'Adopt a Git branching strategy', Microsoft documentatie") die leunt op het gebruik van [*feature branches*](https://martinfowler.com/bliki/FeatureBranch.html "'Feature branch', Martin Fowler") om nieuwe functionaliteit op te ontwikkelen. 


Het idee is: er is een `develop`-branch, en de code die daar op staat is uitgerold op de testomgeving. Wanneer je een nieuwe functionaliteit *x* wil ontwikkelen, maak je een *feature branch* `x` aan vanaf `develop`, waar je wijzigingen op doorvoert. Pas wanneer die functionaliteit voltooid is, wordt deze teruggemergd naar de `develop`-branch, waardoor de feature automatisch wordt uitgerold op de testomgeving.


Het voordeel van Gitflow is dat het inzichtelijk maakt welke code waar staat. De code op de testomgeving staat op `develop`, en de code voor *x* op `x`.[^1] Een gedisciplineerd gebruik van Gitflow zorgt ervoor dat er nooit halve features op de testomgeving terechtkomen die de boel zouden kunnen breken.


## Nadelen


Toch ben ik geen groot voorstander van deze werkwijze. Een branchingstrategie als deze leidt namelijk tot grote [*pull requests*](/tags/pull-requests/ "Blogs met de tag 'pull requests'"). Dat werpt een drempel op voor ontwikkelaars om de code grondig te [reviewen](/tags/code-reviews/ "Blogs met de tag 'code reviews'"). Bovendien leidt het tot pijnlijke [mergeconflicten](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts "'About merge conflicts', GitHub"), omdat het ontwikkelaars stimuleert om langdurig geïsoleerd van elkaar te werken. 


Een van de gevolgen van ons gebruik van Gitflow is dat we als team met elkaar afspreken niet met meerdere mensen [PBI's](/tags/product-backlog-items/ "Blogs met de tag 'product backlog items'") op te pakken die dezelfde delen van de code raken. Deze praktijk is zo ingeburgerd in het team, dat het gros van de teamleden de inefficiëntie daarvan niet eens opmerkt.[^2]


De huidige wijsheid in softwareontwikkelland is die van [*continuous delivery*](https://continuousdelivery.com/): maak je wijzigingen zo klein mogelijk en breng ze zo snel mogelijk naar productie.[^3] Gitflow staat haaks op die wijsheid -- haar uitgangspunts is nota bene juist discontinuïteit.


## Breek


Laatst brak een kleine wijziging aan de back-end -- die we zo snel mogelijk richting de testomgeving hadden gebracht -- functionaliteit aan de front-end. Voor mijn collega was het een ideale gelegenheid om zijn [*bias*](https://nl.wikipedia.org/wiki/Bias_(fout) "'Bias (fout)', Wikipedia") voor Gitflow bevestigd te zien. "Dit zou nooit gebeurd zijn als we van *feature branches* gebruik hadden gemaakt!" concludeerde hij. 


-- En niet onterecht, want het apart houden van de wijziging in kwestie zou de functionaliteit op testomgeving inderdaad intact hebben gehouden.


De kleine wijziging was onderdeel van een reeks wijzigingen die normaliter apart zouden zijn gehouden op *feature branch*, waaronder een aantal modelwijzigingen. Het gros daarvan bleek goedaardig. Een extra *property* hier en daar op onze domeinobjecten werd door de front-end genegeerd, zoals je zou verwachten. Maar zodra een specifiek endpoint een extra waarde toevoegde aan een lijst met statische data, begon de front-end zich onverwacht te gedragen.


## Uitbreidingen


Toch was de redenering aan de back-end voor beide wijzigingen hetzelfde geweest: *uitbreidingen* van data zijn in principe niet brekend. (Van *wijzigingen* in de data mag je dat uiteraard wel verwachten.) Maar wat bleek nu: deze *specifieke* uitbreiding was dat wél. Dat was een inzicht dat we nooit zouden hebben opgedaan als we op een *feature branch* waren blijven werken.


De vraag die we ons nu konden stellen, was: is het terecht dat een wijziging in die lijst met statische data, *dit* gevolg heeft aan de front-end? Horen deze inderdaad op die manier aan elkaar gekoppeld te zijn? -- En daaruit vloeit logischerwijs de vraag voort: moeten en kunnen we onze code zodanig opzetten dat ze niet aan elkaar gekoppeld *hoeven* te zijn?


Een gewetensvraag: gaat het overeind houden van de testomgeving boven het opdoen van nieuw inzicht in de manier waarop het systeem is opgezet? 


## Koppeling


Dit is een andere manier om ernaar te kijken: door de testomgeving om zeep te helpen, heeft die kleine wijziging ons iets geleerd over de manier waarop back-end en front-end aan elkaar gekoppeld zijn.


In [*Balancing Coupling in Software Design*](https://www.pearson.com/en-us/subject-catalog/p/balancing-coupling-in-software-design-successful-software-architecture-in-general-and-distributed-systems/P200000000372/9780137353576 "Vlad Khononov, 'Balancing Coupling in Software Design: Universal Design Principles for Architecting Modular Software Systems', Addison-Wesley Professional 2024") betoogt [Vlad Khononov](https://vladikk.com/) dat [complexiteit](/blog/25/04/gecompliceerd-vs-complex/ "'Gecompliceerd vs. complex'") in software voortkomt uit dit soort onverwachte koppelingen tussen code. Wie pleit voor het gebruik van *feature branches*, accepteert het bestaan van zulke koppelingen (*viz.* van complexiteit) als onvermijdelijk. En daarmee ontmoedigt diegene om te onderzoeken waar de koppeling precies in zit. 


Maar als *feature branches* ons in staat stellen functionaliteit overeind te houden door een beter begrip van koppeling onder het tapijt te vegen, dan is dan in mijn beleving eerder een argument *tegen* het gebruik ervan dan een ervóór.


Inderdaad: “Dit zou nooit gebeurd zijn als we van *feature branches* gebruik hadden gemaakt!” -- maar deze keer is het míjn *bias* aan het woord.


[^1]: Binnen Gitflow staat de code voor de acceptatieomgeving op `release` en die van de productieomgeving op `main` of `master`, maar dat is voor de rest van het verhaal niet zo relevant.

[^2]: Het boek dat mij de ogen opende voor deze inefficiëntie, is [*Lean Software Development: An Agile Toolkit*](https://www.oreilly.com/library/view/lean-software-development/0321150783/ "Mary Poppendieck & Tom Poppendieck, 'Lean Software Development: An Agile Toolkit', O'Reilly Inc. 2003") van [Mary en Tom Poppendieck](https://www.leanessays.com/).

[^3]: [Nicole Forsgren](https://nicolefv.com/), [Jez Humble](https://www.linkedin.com/in/jez-humble/) en [Gene Kim](http://www.realgenekim.me/) onderbouwden deze stelling empirisch in [*Accelerate*](https://itrevolution.com/product/accelerate/ "Nicole Forsgren, Jez Humble & Gene Kim, 'Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations', IT Revolution 2018"), [een van de beste boeken die ik vorig jaar over softwareontwikkeling las](/blog/24/12/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2024-las/). De volgende stap in de evolutie van *continuous delivery* is *continuous deployment*: het direct uitrollen van elke commit naar de productieomgeving. We lezen er nu [dit boek](https://www.oreilly.com/library/view/continuous-deployment/9781098146719/ "Valentina Servile, 'Continuous Deployment: Enable Faster Feedback, Safer Releases, and More Reliable Software', 'O'Reilly Inc. 2024") over in de [boekenclub](/tags/boekenclub/ "Blogs met de tag 'boekenclub'").
