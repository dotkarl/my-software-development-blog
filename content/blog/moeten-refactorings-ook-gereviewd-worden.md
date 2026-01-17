---
title: "Moeten refactorings ook gereviewd worden?"
author: "Karl van Heijster"
date: 2026-01-16T15:53:12+01:00
draft: true
comments: true
tags: ["boeken", "code reviews", "refactoren"]
summary: "Niet elke codewijziging is gelijk. Sommige wijzigingen veranderen het gedrag van een systeem. Andere wijzigingen, refactorings, veranderen alleen de structuur en laten het gedrag gelijk. Zoals de meeste teams hun werk inrichten, met *pull requests* en formele code reviews, wordt elke wijziging door twee paar ogen bekeken. Maar is dat wel nodig?"
---

Niet elke codewijziging is gelijk. Sommige wijzigingen veranderen het gedrag van een systeem. Andere wijzigingen, [refactorings](/tags/refactoren/ "Blogs met de tag 'refactoren'"), veranderen alleen de structuur en laten het gedrag gelijk. (Zie ook [deze blog](/blog/24/09/gedrag-versus-structuur/ "'Gedrag versus structuur'").)


Zoals de meeste teams hun werk inrichten, met [*pull requests*](/tags/pull-requests/ "Blogs met de tag 'pull requests'") (PR's) en formele [code reviews](/tags/code-reviews/ "Blogs met de tag 'code reviews'"), wordt elke wijziging door twee paar ogen bekeken. Maar is dat wel nodig? Die vraag werpt [Kent Beck](https://www.kentbeck.com/) op in [*Tidy First?*](https://www.oreilly.com/library/view/tidy-first/9781098151232/ "Kent Beck, 'Tidy First?: A Personal Exercise in Empirical Software Design', O'Reilly Media, 2023") ([mijn favoriete boek van 2024](/blog/24/12/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2024-las/ "'De beste boeken over software ontwikkeling die ik in 2024 las'")).


## Gedragswijziging


Dat werpt de vraag op: *waarom* willen we eigenlijk dat een tweede paar ogen naar onze code kijkt?


Wanneer je gedrag wijzigt, wil je dat iemand met je meekijkt, zodat diegene na kan gaan of je de functionaliteit geïmplementeerd hebt zoals bedoeld. Het zou ook kunnen dat diegene aan bepaalde *edge cases* denkt waar je tijdens de implementatie niet aan gedacht hebt. Dit is één van de redenen [waarom testers prima code reviewers zijn](/blog/23/07/de-tester-als-code-reviewer/ "'De tester als code reviewer'").


Waarom wil je dat een tweede paar ogen een gedragswijziging inspecteert? Omdat deze wijziging impact heeft op de gebruikers van het systeem. Een gemiste *edge case* resulteert in [bugs](/tags/bugs/ "Blogs met de tag 'bugs'") en frustratie. Of, wat ook kan gebeuren: gebruikers ontdekken onbedoelde neveneffecten van het geïmplementeerde gedrag en gaan daarop rekenen ([de wet van Hyrum](https://www.hyrumslaw.com/ "Hyrum's Law")). Het is dan niet meer mogelijk de feature terug te draaien zonder gebruikers tot last te zijn.


## Structuurwijziging


Maar wanneer je de structuur wijzigt, is het dan net zo belangrijk dat er iemand meekijkt? Zuivere structuurwijzigingen zullen per definitie nooit tot nieuwe bugs leiden. En in principe kun je dit soort wijzigingen ongedaan maken, zonder dat het enige impact heeft op de gebruikers. (Daarbij veronderstel ik uiteraard een robuuste [testsuite](/tags/testen/ "Blogs met de tag 'testen'") die bij elke wijziging [*bewijst*](/blog/24/05/waarom-testen-testers/ "'Waarom testen testers?'") dat er geen onbedoelde gedragswijziging in de refactoring is geslopen.)


Wie zijn code regelmatig refactort, houdt de codebase gezond, niet omdat elke refactoring per se een verbetering is, maar omdat regelmatige refactoring de code soepel houdt. Het zorgt ervoor dat de code -- en ons begrip ervan -- niet vastroest. En dat stelt een team in staat om nieuwe gedragswijzigingen door te voeren zonder dat de structuur van het systeem daar onder hoeft te lijden. 


## Grootte


Natuurlijk is dat geen vrijbrief om op eigen houtje je hele codebase morgen om te gooien. Want een gedeeld begrip van de codebase is belangrijk. Dit zou, zou je denken, een reden kunnen zijn om refactorings *wel* door je collega's te laten reviewen. 


Maar welke [opvatting van *refactoring*](/blog/22/08/twee-stijlen-van-refactoren/ "'Twee stijlen van refactoren'") is er bij dit tegenargument in het spel? Het argument lijkt grootscheepse codewijzigingen te veronderstellen. Maar wie *Tidy First?* leest (of [*Refactoring*](https://martinfowler.com/books/refactoring.html "'Refactoring: Improving the Design of Existing Code (Second Edition)', Martin Fowler (with Kent Beck), Addison Wesley 2019") van [Martin Fowler](https://martinfowler.com/); zie ook [deze blog](/blog/24/02/een-herwaardering-van-fowlers-refactoring/ "'Een herwaardering van Fowlers Refactoring'")) weet dat individuele refactorings maar miniem zijn. Zelfs een reeks van die refactorings laat de code niet gauw in onherkenbare staat achter.


Dat leidt ons naar de vraag: in wat voor orde van grootte denken wij, wanneer we het over codewijzigingen hebben? Want ik vermoed dat daar een fundamenteel verschil van opvatting zit tussen een Beck aan de ene kant en *all time* code reviewers aan de andere.