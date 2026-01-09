---
title: "TDD is een vraaggesprek"
author: "Karl van Heijster"
date: 2026-01-09T10:18:15+01:00
draft: true
comments: true
tags: ["beroepsdeformatie", "filosofie", "test-driven development"]
summary: "Plato's dialogen zijn toegankelijk, inzichtelijk en vaak ook ontzettend grappig. Eén van de redenen waarom ze vandaag de dag nog zo goed leesbaar zijn, zit 'm in die dialoogvorm. Het spel van vraag en antwoord geeft leven aan Plato's filosofische onderzoekingen, het voorkomt dat het een droge uiteenzetting wordt van argumenten en conclusies. Omdat ik nu eenmaal een beroepsdeformatie heb, kon ik het onder het lezen niet nalaten aan Test-Driven Development te denken. Want ook TDD is een soort van vraaggesprek, en ook TDD geeft leven aan het oplossen van een programmeertaak."
---

Jaren geleden kocht ik een uitgave van [Plato](https://plato.stanford.edu/entries/plato/ "'Plato', Stanford Encyclopedia of Philsophy")'s verzameld werk in drie delen. Die boeken hebben jaren in de kast staan verstoffen, omdat, ik weet niet, ik denk omdat de status van Plato als filosoof me intimideerde. Daarnaast, elk deel telt bijna duizend pagina's en ik vertelde mezelf keer op keer dat ik daar later aan zou beginnen, als ik meer tijd en ruimte had. (Een onzinnig argument, natuurlijk, want het is niet zo dat ik elk deel in een kort tijdsbestek uit zou moeten lezen. Bovendien, elk deel bestaat uit meerdere dialogen, en die zijn op zichzelf helemaal niet zo lang.)


Op een dag hakte ik de knoop door -- en het viel me honderd procent mee. Plato's dialogen zijn toegankelijk, inzichtelijk en vaak ook ontzettend grappig. Eén van de redenen waarom ze vandaag de dag nog zo goed leesbaar zijn, zit 'm in die dialoogvorm. Het spel van vraag en antwoord geeft leven aan Plato's filosofische onderzoekingen, het voorkomt dat het een droge uiteenzetting wordt van argumenten en conclusies.


## Beroepsdeformatie


Omdat ik nu eenmaal een [beroepsdeformatie](/tags/beroepsdeformatie/ "Blogs met de tag 'beroepsdeformatie'") heb, kon ik het onder het lezen niet nalaten aan [Test-Driven Development](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") (TDD) te denken. Want ook TDD is een soort van vraaggesprek, en ook TDD geeft leven aan het oplossen van een programmeertaak.


TDD is een spel van vraag en antwoord. De vraag wordt gesteld in de vorm van een test. De test vraag: "Hé systeem, kun jij, ik zeg maar wat, een `3` omzetten naar `"Fizz"`?" -- "En een `5` omzetten naar `"Buzz"`, kun je dat?"[^1] 


En het systeem antwoordt, zodra de test wordt gerund -- aanvankelijk "Nee", uiteindelijk "Jazeker!", en soms, als er een regressie optreedt: "Niet meer." TDD verlevendigt het oplossen van een programmeertaak, omdat het de programmeur laat wisselen tussen het perspectief van de ondervrager en ondervraagde. 


## Monoloog


Programmeren op de "ouderwetse" stijl ziet er daarentegen meer zo uit: de ondervraagde houdt een lange monoloog, en de ondervrager mag helemaal op het eind enkele verhelderingsvragen stellen. Die zullen voor een groot deel uit vragen naar de bekende weg bestaan, en slechts hier en daar tot een ontkennend, verrassend antwoord leiden. Saai!


Meer nog, de monoloogvorm stelt de ondervraagde in staat de framing van het gesprek volledig te bepalen. De ondervraagde benadert het gesprek vanuit zijn eigen perspectief, in ons geval: die van de technische implementatie. Dat is waarom abstracties die op deze manier worden ontwikkeld, implementatiedetails naar buiten lekken. De implementatiedetails vormen een van de uitgangspunten van het onderzoek, en dat uit zich in de oplossing. 


En het wordt nog erger. Omdat de ondervrager niet tijdig kan interrumperen, wordt de feedbackloop lang en hebben problematische aannames alle tijd om de oplossing een verkeerde richting in te sturen.  


## Problemen verhelderen


Bij TDD is het precies andersom: daar bepaalt de ondervrager de framing. De implementatiedetails zijn bijzaak en veranderen tijdens de ondervraging continu. Elke vraag (c.q. test) vermindert de bewegingsvrijheid van de ondervraagde, en brengt daarmee eventuele aannames aan het licht. Het probleem is leidend, niet de oplossing.


Beter gezegd: het *verhelderen* van het probleem is leidend, en niet de oplossing. Elke vraag die je stelt, brengt een nieuw aspect van het probleem in kaart. De vragen naar `"Fizz"` en `"Buzz"` brengen twee facetten van het FizzBuzz-algoritme in kaart; "Kun je een `1` omzetten naar een `"1"`?" en "Kun je `15` omzetten naar `"FizzBuzz"`?" weer andere. 


Tot die vraag is gesteld, heeft de implementatie geen weet van dit probleem. Pas als de ondervrager heeft gesteld *dat* het een onderdeel van het probleem vormt, moet de ondervraagde in actie komen om een oplossing te bedenken.


## De kracht van vragen


Vraag en antwoord zijn twee kanten van dezelfde munt. Test en implementatie net zozeer. Je kunt pas beoordelen of een antwoord goed of fout of inzichtelijk of stompzinnig is, als je weet welke vraag hij beantwoordt. Net zo, kun je de correctheid van code pas beoordelen als je weet wat ervan verlangd wordt. -- En *weten* is hier het toverwoord: *vermoeden* is niet goed genoeg.


Filosofen hebben door de eeuwen heen de meest onzinnige dingen beweerd, Plato niet uitgezonderd. Dat ze vandaag de dag desondanks gelezen wordt, ligt niet zozeer aan de geloofwaardigheid van hun antwoorden, maar aan de aantrekkingskracht van hun vragen. Softwareontwikkelen is net als filosoferen in deze zin: wie de vraag verontachtzaamt, doet zijn huidige én toekomstige zelf daarmee ernstig tekort.


[^1]: [FizzBuzz](https://codingdojo.org/kata/FizzBuzz/ "'FizzBuzz', Coding Dojo") is een bekende [kata](https://nl.wikipedia.org/wiki/Kata "'Kata', Wikipedia") uit de wereld van TDD; zie ook [deze blog](/blog/24/04/test-driven-development-en-yagni/ "'Test-Driven Development en YAGNI'"). In mijn praatje [*Wat zegt deze test?*](/talks/wat-zegt-deze-test/) behandel ik de requirements, code, architectuur en het team aan de hand van enkele tests die dit algoritme verifiëren.