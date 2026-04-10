---
title: "Uitrollen, vlak voor de demo"
author: "Karl van Heijster"
date: 2026-04-10T08:05:41+02:00
draft: false
comments: true
tags: ["bugs", "continuous delivery", "feedback", "koppeling", "leermoment", "samenwerking", "software ontwikkelen", "sprint review", "teamcultuur", "verantwoordelijkheid"]
summary: "\"Ik vind dat we niet meer uit moeten rollen vlak voor een demo,\" zei een collega, \"dat vond ik nogal spannend.\" Liever had hij zichzelf nog wat extra tijd gegeven om zekerheid te krijgen dat de wijziging niet onbedoeld dingen stuk had gemaakt. Ik begrijp het sentiment van waaruit deze opmerking ontspringt. Maar het is in mijn beleving de verkeerde diagnose van de situatie."
---

Op maandag [testten](/tags/testen/ "Blogs met de tag 'testen'") we [met het hele team](/tags/samenwerking/ "Blogs met de tag 'samenwerking'") de nieuwe feature die we dinsdag zouden presenteren in de [Sprint Review](/tags/sprint-review/ "Blogs met de tag 'sprint review'"). We kwamen nog een waslijst aan [bugs](/tags/bugs/ "Blogs met de tag 'bugs'") tegen. Dat was wel even spannend. Maar het bleken maar kleine dingetjes te zijn, tegen het eind van de middag hadden we ze allemaal op één na weggewerkt. Ik had er alle vertrouwen in dat de Review wel goed zou komen.


Die dinsdagochtend had ik een workshop over werkvormen. Bijvoorbeeld: brainstorm een oplossing vanuit het perspectief van een bepaalde superheld. Welke eigenschappen heeft diegene zoal? Hoe informeren die eigenschappen een oplossing? Het was hartstikke gezellig!


Eenmaal terug aan mijn bureau, las ik een lichtelijke paniek in de chat van onze [Stand-up](/tags/daily-standup/ "Blogs met de tag 'daily standup'"). Onze nieuwe feature gaf een foutmelding, en mijn collega's konden niet achterhalen waarom. Het bleek uiteindelijk maar een klein issue te zijn: de front-end zette een waarde per default op `0` waar `null` gepast was. De back-end wees `0` resoluut af.


Om half één werd de fix uitgerold. Om één uur presenteerden we de feature. De gebruikers vonden het hartstikke mooi.


## Retro


Het hoeft niet te verbazen, dat deze gang van zaken werd besproken op onze [Sprint Retrospective](/tags/sprint-retrospective/ "Blogs met de tag 'sprint retrospective'"). "Ik vind dat we niet meer uit moeten rollen vlak voor een demo," zei een collega, "dat vond ik nogal spannend." Liever had hij zichzelf nog wat extra tijd gegeven om zekerheid te krijgen dat de wijziging niet onbedoeld dingen stuk had gemaakt.


Ik begrijp het sentiment van waaruit deze opmerking ontspringt. Maar het is in mijn beleving de verkeerde diagnose van de situatie.


De oplossing voor het gevoel van onzekerheid is niet: dan maar niet uitrollen een halfuur vóór de demo. Het meest voor de hand liggende probleem van deze aanpak is natuurlijk dat het de bug in stand zou hebben gehouden, met als gevolg dat onze demo onbedoeld een showcase zou worden van hoe goed we foutmeldingen aan eindgebruikers presenteren. 


Maar een minstens zo groot probleem, is dat het het eigenlijke probleem *verbergt* in plaats van oplost. De feitelijke uitrol is niet de bron van onzekerheid. De onzekerheid zit 'm in het feit dat we -- klaarblijkelijk -- nog niet de omgeving hebben gecreëerd waarin je erop kunt vertrouwen dat een uitrol probleemloos verloopt. Meestal betekent dat: ik heb geen vertrouwen in mijn testsuite, de [dekking](/tags/testcoverage/ "Blogs met de tag 'testcoverage'") daarvan is niet hoog genoeg.


## Altijd presentabel


In plaats van onszelf voor te nemen niets meer te wijzigen, enige tijd voordat we een nieuwe feature tonen, zouden we ons best moeten doen om ervoor te zorgen dat het systeem zich altijd in presentabele toestand bevindt -- *altijd*, of dat nu midden in een Sprint is of vijf minuten vóór een Review.


Dit stelt hoge eisen aan een ontwikkelaar. Het vraagt een ontwikkelaar te werken in [kleine stapjes](/tags/iteratieve-ontwikkeling/ "Blogs met de tag 'iteratieve ontwikkeling'"). Immers: in principe moet er [elke dag -- liefst zelfs elk uur -- een nieuwe versie](/tags/continuous-delivery/ "Blogs met de tag 'continuous delivery'") kunnen worden getoond. En om dat voor elkaar te krijgen moet een ontwikkelaar de lat hoog leggen als het aankomt op de [kwaliteit](/tags/kwaliteit/ "Blogs met de tag 'kwaliteit'") van zijn code. [Alle code dient getest te zijn](/blog/24/07/goede-code-is-geteste-code/ "'Goede code is geteste code'"); hoe zou je anders immers durven zeggen dat de code werkt zoals bedoeld? Hoe weet je überhaupt wat *bedoeld* is, als je geen geautomatiseerde tests hebt die je onmiddellijk vertellen of het systeem voldoet aan de [gedocumenteerde](/blog/22/09/tests-als-documentatie/ "'Tests als documentatie'") werking?


Let wel: dit betekent niet dat de code nooit bugs zal bevatten. Bugs zijn een feit des levens. Maar wie werkt in kleine stapjes met een goed vangnet, is in staat die bugs snel en veilig de wereld uit te helpen (zie ook [deze blog](/blog/26/02/aantekeningen-over-continuous-deployment/ "'Aantekeningen over continuous deployment'")). Dat is hoe we een halfuur van tevoren een probleem kunnen identificeren, de bron achterhalen en kunnen uitrollen, zonder dat een gebruiker daar wat van merkt.


## Kleine stappen


Natuurlijk, je fixt liever niet een halfuur vóór de Review nog bugs, dat is niet onterecht om te stellen. Maar het probleem zit 'm niet in de uitrol, het zit 'm, in ons geval, in het moment van integratie tussen front- en back-end. Het probleem dat wij als team hebben, is dat de front-enders aan de slag gaan tegen een [gemockte](/tags/mocks/ "Blogs met de tag 'mocks'") [API](/tags/web-apis/ "Blogs met de tag 'web api's'"), totdat de front-end helemaal klaar is. En de back-enders gaan aan de slag op basis van het contract dat we hebben afgesproken, totdat de back-end helemaal klaar is. En dan, helemaal op het eind, dan gaan we eens kijken of de puzzelstukjes op elkaar passen, of we elkaar niet verkeerd begrepen hebben en de *edge cases* op dezelfde manier hebben geïnterpreteerd.


We werken in te grote stappen -- misschien niet wat het opbouwen van ons eigen stukje betreft, maar wel wat betreft de integratie van die stukjes. [Onze functietitels hebben ons begrip van onze taak vervormd](/blog/26/02/functietitels-vervormen-de-werkelijkheid/ "'Functietitels vervormen de werkelijkheid'"), tot op het punt dat we denken dat we verantwoordelijk zijn voor slechts één stukje, in plaats van voor de puzzel als geheel. 


Wat we beter zouden kunnen doen, is ervoor zorgen dat we op woensdag de totale feature -- front- én back-end -- in extreem vereenvoudigde vorm kunnen presenteren; op donderdag in iets uitgebreidere vorm, en op vrijdag zo verder. Dat zou ons in staat stellen om altijd te kunnen zeggen: *dit* is wat het systeem nu kan, en *dat* nog niet.


Spannende demo's zouden dan in één klap verleden tijd zijn.