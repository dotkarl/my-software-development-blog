---
title: "PR's vs. pairs"
author: "Karl van Heijster"
date: 2026-08-28T07:49:26+02:00
draft: false
comments: true
tags: ["code reviews", "pair programming", "pull requests", "samenwerking"]
summary: "Je maakt een branch, je wijzigt de code. Je maakt een *pull request* (PR) aan om deze te integreren in de *main* branch. Voordat die code toegestaan wordt, moet deze eerst door een collega worden bekeken. Pas als deze zijn zegening heeft gegeven, mag de code worden geïntegreerd. -- Vanwaar deze opzet?"
---

Je maakt een branch, je wijzigt de code. Je maakt een [*pull request*](/tags/pull-requests/ "Blogs met de tag 'pull requests'") (PR) aan om deze te integreren in de *main* branch. Voordat die code toegestaan wordt, moet deze eerst door een collega worden bekeken. Pas als deze zijn zegening heeft gegeven, mag de code worden geïntegreerd.


Vanwaar deze opzet? -- 'Omdat je niet *zomaar elke* codewijziging toe wil staan.' -- Natuurlijk, dat is redelijk.


{{< asterisk >}}


Maar is dat wat je hier doet? De huidige opzet gaat verder: 'Ik wil *geen enkele* codewijziging zomaar toestaan.' Is dat redelijk?


Stel dat ik een typfout ontdek, zou ik die dan niet door mogen voeren? Of stel dat ik wat verdwaalde regels witruimte weg wil halen. Of stel dat ik wat witregels toe wil voegen om de code wat overzichtelijker te maken. Zijn dat wijzigingen die ik expliciet wil hebben goedgekeurd, voordat ze mogen worden geïntegreerd?


{{< asterisk >}}


'Dat soort wijzigingen zouden in principe zonder problemen door kunnen. Maar we weten nu eenmaal op voorhand niet wanneer een ontwikkelaar zo'n triviale wijziging doorvoert en wanneer een substantiële. Dus moeten we, voor de zekerheid, uitgaan van het ergste.'


Ook dat klinkt niet onredelijk. -- Of wel soms? In een context waarin je in een team zit met collega-ontwikkelaars waar je regelmatig mee samenwerkt, is het dan redelijk om van het ergste uit te gaan?[^1] Of mag je je collega's vertrouwen dat ze die afweging zelf kunnen maken?


{{< asterisk >}}


Ik zoek niet naar een principieel antwoord op die vraag. Het zou per team kunnen verschillen. Het ene team is volwassen genoeg om ontwikkelaars die afweging te laten maken. In het andere team zou het tot wanorde leiden.


De vraag wordt dan: hoe creëren we het ene team en niet het andere? -- Iemand die opereert in een context van wantrouwen, heeft geen prikkel om het onderscheid te leren maken of zelfs maar te herkennen. Die doet zijn wijzigingen en laat de ander beslissen of het triviaal is of substantieel. 


Diegene traint zijn spier niet. Diegene ontwikkelt geen intuïtie om triviaal van substantieel te kunnen onderscheiden.


{{< asterisk >}}


'Je voorbeelden zijn misleidend en eenzijdig. Er is een grijs gebied tussen een typfout en een gedragswijziging. De impact van een [refactoring](/tags/refactoren/ "Blogs met de tag 'refactoren'") is niet altijd op voorhand in te schatten.' -- Dat is waar. Maar leidt die observatie automatisch tot een systeem van wantrouwen en controle? 


Een review is een perspectiefwisseling. *Ik* kan van perspectief wisselen en mijn eigen werk beoordelen. Maar ik heb blinde vlekken. Ik kan het niet alleen. 


{{< asterisk >}}


'Maar diegene treedt zelf ook op als reviewer. Hij zou wat hij in die rol leert, kunnen toepassen op de manier waarop hij het schrijven van zijn code structureert.' -- Je denkt aan het scheiden van refactorings en functionele wijzigingen, bijvoorbeeld.[^2]


Dat is waar, dat kan. Maar waarom ben ik dat in de praktijk nog zo weinig tegengekomen? -- Een ontwikkelaar werkt [in zijn eentje](/blog/24/11/waarom-wil-carl-niet-pairen/ "'Waarom wil Carl niet pairen?'"), hij ploetert tot het werkt. Welke prikkel heeft hij om te reflecteren op zijn manier van werken?


{{< asterisk >}}


'We hebben een proces. Het proces is: jij stelt een wijziging voor en ik beoordeel de wijziging.' -- Prima. -- 'We hebben dat proces gecodificeerd in een systeem dat ons in staat stelt los van elkaar te kunnen werken.' -- O jee.


Het is één ding als we naast elkaar zitten en jij stelt iets voor en ik zeg: 'Heb je hier aan gedacht?' Het is iets anders als we elkaar niet zien en jij stelt iets voor, en je maakt het, en je bent er twee, drie dagen aan kwijt, en dan kom ik, en dan constateer ik: 'Je hebt hier niet aan gedacht.'


{{< asterisk >}}


'Dat klopt, daarom moeten we onze PR's klein houden.' -- Wat is de kleinst mogelijke PR? Een wijziging van één regel. Maar wat wil je, die ene regel door dat systeem loodsen dat ons in staat stelt los van elkaar te werken? Dan zou het eenvoudiger zijn om naast elkaar te zitten.


Het systeem is gebouwd op grotere wijzigingen dan dat. Maar dat verlangt van ons tegen het systeem in te werken, want hoe groter de wijziging, hoe groter de kans dat ongewenste aannames de code in zijn geslopen.


{{< asterisk >}}


'Dus [samenwerken](/tags/samenwerking/ "Blogs met de tag 'samenwerking'") valt te verkiezen boven alleen werken.' Maar waarom? Alleen om de [fouten](/tags/falen/ "Blogs met de tag 'falen'") eerder te ontdekken? 


In samenwerking leer je van elkaar. Samenwerking je dwingt je eigen patronen te zien -- en eventueel herzien. Als je samenwerkt, moet je je verantwoorden: 'Waarom doe je het zo?'


De vraag die bij PR's wordt gesteld is een heel andere: 'Waarom heb je het zo gedaan?' De vraag waar een PR je toe verleidt, gaat over het eindresultaat. -- De vraag van een [*pairing*](/tags/pair-programming/ "Blogs met de tag 'pair programming'")-partner, gaat over het proces.


{{< asterisk >}}


Een PR beperkt de schade aan een codebase. Een *pair* verbetert de ontwikkelaar -- beide ontwikkelaars.


Hoe ver kom je op basis van een aanname van wantrouwen? Verder of minder ver dan op basis van vertrouwen?


{{< asterisk >}}


Maar vertrouwen moet niet blind zijn, natuurlijk. Je stopt niet met PR's -- en dan ben je klaar. Je stopt met PR's en stelt er iets anders voor in de plek.


*Pairing* is niet louter een vervanging voor PR's. Het samenwerken verruimt de blik van de code review van het eindproduct naar de manier waarop het eindproduct tot stand is gekomen.


{{< asterisk >}}


Ons werk is niet *alleen* het resultaat. Ons werk is *ook* de weg naar het resultaat. 


Het werk is niet alleen het werk verbeteren, het werk is ook [het *werken* verbeteren](/tags/procesverbetering/ "Blogs met de tag 'procesverbetering'").


{{< asterisk >}}


Wat houdt je tegen? -- ['Dan ziet diegene me klungelen.'](/blog/24/11/waarom-wil-carl-niet-pairen/ "'Waarom wil Carl niet pairen?'") -- Dat is: je ego. Denk je dat je de enige bent die klungelt?


Door samen te werken, zie je dat iedereen klungelt. Het hele leven hangt van geklungel aan elkaar.


{{< asterisk >}}


'Het kost me moeite, energie.' -- Mij ook. Ik zeg niet dat het makkelijk is. Dat is het niet.


Het zou een wonder zijn als de uitkomst van deze hele excercitie zou zijn: softwareontwikkelen blijkt makkelijk. Dat zou tegen elke ervaring indruisen. De enige keren dat ik het gevoel heb dat softwareontwikkeling makkelijk is, is als ik niet weet wat ik niet weet. 


Maar: moet softwareontwikkelen *zo* moeilijk zijn?


[^1]: Denk hier ook aan het verschil tussen [de woestijn en het bos](/blog/26/06/de-woestijn-en-het-bos/ "'De woestijn en het bos'").

[^2]: Het scheiden van refactorings en gedragswijzigingen komt ook het reviewproces ten goed, zie bijvoorbeeld [deze blog](/blog/26/03/moeten-refactorings-ook-gereviewd-worden/ "'Moeten refactorings ook gereviewd worden?'").