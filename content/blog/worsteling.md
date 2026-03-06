---
title: "Worsteling"
author: "Karl van Heijster"
date: 2026-03-06T08:02:47+01:00
draft: true
comments: true
tags: ["continuous deployment", "presenteren", "verandering"]
summary: "We betoogden tegen verschillende omgevingen voor ontwikkel, test, acceptatie en productie: dat is duur en bovendien nodeloos complex. Er is maar één omgeving die ertoe doet: productie. Maar om de wijzigingen naar productie klein en veilig te houden, kunnen we functionaliteit verbergen. -- \"Dat is valsspelen!\" riep iemand in het publiek, de wanhoop nabij. \"Je hebt nu alsnog een testomgeving, alleen dan op productie!\""
---

(Deze blog heeft niets met worst of worst-achtigen te maken. Einde mededeling.)


{{< asterisk >}}


Het moeilijkst zijn de mensen -- altijd de mensen. Niet omdat mensen *moeilijk* zijn, maar omdat ze een eigen wil hebben, hun eigen gedachten en een eigen context van waaruit ze redeneren. 


Je vraagt je af: leg ik mijn standpunt soms niet goed genoeg uit? -- Nee, dat is het niet. (Al kun je en moet je altijd blijven slijpen aan je standpunt en haar presentatie.) Je denkfout zit 'm in de impliciete verwachting dat je iemand *zal* overtuigen. Je weet dat de onredelijk is, maar toch voel je het zo.


Waar komt het vandaan? Je ego? Misschien. Of: een idee heeft jou in zijn greep. Het idee komt je dermate overtuigend voor, dat je je niet meer voor kunt stellen dat de wereld er voor anderen anders uit kan zien. Dat is jouw valkuil. 


Maar daar waar jij al maanden met dat idee worstelt, hoort de ander het voor het eerst. Je moet hen de tijd geven, de tijd om door hetzelfde proces heen te gaan als waar jij doorheen bent gegaan.


En zelfs dan is het nog maar de vraag of ze dezelfde conclusie trekken. Vergeet nooit dat anderen dingen kunnen zien die jij over het hoofd ziet.


{{< asterisk >}}


De reacties zijn even frustrerend als interessant. (-- Maar bedenk: welke van de twee de nadruk krijgt, is een functie van jouw houding, niet van de reactie zelf.) 


We betoogden tegen verschillende omgevingen voor ontwikkel, test, acceptatie en productie: dat is duur en bovendien nodeloos complex. Er is maar één omgeving die ertoe doet: productie. Maar om de wijzigingen naar productie klein en veilig te houden, kunnen we functionaliteit verbergen.


"Dat is valsspelen!" riep iemand in het publiek, de wanhoop nabij. "Je hebt nu alsnog een testomgeving, alleen dan op productie!"


Natuurlijk! Er zijn valide redenen om niet alle functionele wijzigingen onmiddellijk op gebruikers te dumpen! Wie zou in hemelsnaam willen betogen dat je half voltooide features openbaar moet maken? Al die omgevingen komen niet uit de lucht vallen, nogal wiedes! 


Het punt is: om te bereiken wat je wil bereiken heb je niet verschillende *omgevingen* nodig! (Ten grondslag daaraan ligt een [verwarring tussen *release* en *deployment*](/blog/25/12/trunk/ "'Trunk'"), een verknoping die velen maar moeilijk van zich af weten te schudden.) 


{{< asterisk >}}


Je wil uitroepen: hun geest is gesloten! Ze staan niet open voor het idee omdat ze niet in staat zijn buiten de huidige kaders te denken!


Misschien is dat zo. Maar onderschat niet wat ervoor nodig is om de wereld opnieuw te zien vanuit een ander perspectief! Mensen hechten zich aan ideeën, aan overtuigingen. Sommigen definiëren zich zelfs aan de hand daarvan. En hoewel die hechting niet per se rationeel is, is ze ook niet irrationeel.


Natuurlijk, *jij* weet dat je elke overtuiging los moet kunnen laten als deze je niet langer helpt. Maar om dat te kunnen doen, moet je jezelf regelmatig afvragen: helpt deze overtuiging me nog? Dat denkwerk is [wat jou drijft](/blog/26/03/wat-drijft-je/ "Wat drijft je?"); voor anderen is een [Retro](/tags/sprint-retrospective/ "Blogs met de tag 'sprint retrospective'") een hinderlijke onderbreking van wat zij als hun *eigenlijke* werk zien.


{{< asterisk >}}


Bovendien, die overtuigingen komen ergens vandaan. "We doen dit zo, omdat we we het ooit niet deden en toen ging het mis." De oorsprong van de overtuiging is valide, maar dat hoeft niet per se te betekenen dat de overtuiging dat zelf ook is.


Een probleem is maar zelden op één manier op te lossen. Hoe weet je of de huidige oplossing de juist is, als je hem nooit in vraag stelt?


"Onderzoek alles en behoud het goede."[^1] Maar we hebben het druk-druk-druk, dus de praktijk is veelal: "Behoud dat waarvan je veronderstelt dat het goed is."


{{< asterisk >}}


De theorie is mooi, zeggen ze, maar de praktijk is anders. -- "Bij mijn vorige bedrijf werkten we op deze manier, en de mensen vonden het heel stressvol."


Het systeem geeft je een signaal: je hebt je proces niet op orde. Je negeert het signaal en geeft vervolgens de schuld aan het systeem.


Een ander schampert: "de utopie die jij voorschotelt." -- Ik schotel helemaal geen utopie voor! Ik zal nooit beweren dat [*continuous deployment*](/tags/continuous-deployment/ "Blogs met de tag 'continuous deployment'") alle problemen oplost, dat zou onzinnig zijn! Wat ik stel is: *continuous deployment* maakt de problemen *zichtbaar* en geeft daarmee de *prikkel* de problemen op te lossen.


Onze huidige werkwijze -- de eindeloze processen die we introduceren om maar fouten te voorkomen -- *verbergt* de eigenlijke problemen daarentegen, en zorgt er zo voor dat we de dysfunctie in stand houden. Het is erger nog: het verleidt ons te denken dat de dysfunctie een normaal onderdeel van het werk is.


{{< asterisk >}}


Het idee heeft je in zijn greep: zodra je het eenmaal ziet, kun je het niet meer niet-zien.


{{< asterisk >}}


"Om dit te kunnen, moet je een bepaalde mate van volwassenheid hebben. Die hebben we niet, en daarom doen we het niet." -- Maar hoe verwachten we volwassen te worden als we onszelf niet uitdagen buiten de huidige kaders te bewegen?


De snelste manier om volwassen te worden is als je moeder en je vader omkomen en jij voor de hamster moet zorgen. Dat is een ramp als je elf bent -- maar wat als je drieëndertig bent en nog steeds bij je ouders woont en de hele dag alleen maar computerspelletjes speelt?


-- Dat is cru, zeg je. Ik knik. Het leven is cru, de wereld is een poel van ellende waar we ons constructief toe zullen moeten verhouden om niet ten onder te gaan. Wanneer wij onszelf omwikkelen met geruststellende leugens, zullen we dat nooit leren.


{{< asterisk >}}


De sprong is te groot, zeggen ze. Maar zoiets zeg je alleen als je denkt daar in één sprong te moeten komen.


Dat is [ons patroon](/blog/26/01/veranderen-doet-pijn/ "'Veranderen doet pijn'"): we mogen geen fouten maken. Dus als iemand iets voorstelt, dan bedenken we alle mogelijke manieren waarop het fout kan gaan en zeggen we: dat gaan we dus mooi niet doen.


Je springt en mist en springt en mist en springt en mist, en je leert elke keer. Maar het begint met de overtuiging: dat het kan.


En pas later, veel later realiseer je: het gaat erom dat ik er kan komen, niet dat ik dat al springend doe.


[^1]: Een bekentenis: ik heb mijn hele leven aangenomen dat het een citaat van een of andere Verlichtingsdenker moet zijn geweest, maar het blijkt dus uit de Bijbel te komen; 1 Tessalonicenzen 5:21-22.