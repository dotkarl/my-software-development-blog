---
title: "Conservatieve verandering"
author: "Karl van Heijster"
date: 2026-03-27T08:45:34+01:00
draft: true
comments: true
tags: ["continuous deployment", "pull requests", "testen", "verandering"]
summary: "Hoe weet je of je het goed doet? Dat het niet beter kan? Ik ben van mening dat het onze professionele plicht is om van tijd tot tijd onze manieren van werken om te gooien. Omdat ik denk dat er betere manieren zijn, maar ook en vooral omdat we niet weten of de huidige manier van werken de beste is, als we deze niet regelmatig in vraag stellen. -- Maar dan: *de anderen*."
---

Hoe weet je of je het goed doet? Dat het niet beter kan? Ik ben van mening dat het onze professionele plicht is om van tijd tot tijd onze manieren van werken om te gooien. Omdat ik denk dat er betere manieren zijn, maar ook en vooral omdat we niet weten of de huidige manier van werken de beste is, als we deze niet regelmatig in vraag stellen.


Dat wekt misschien de indruk dat ik een progressief karakter heb, dat ik iemand ben die alles helemaal anders wil, die een drang heeft naar constante [verandering](/tags/verandering/ "Blogs met de tag 'verandering'"). Dat is helemaal niet het geval. Verandering maakt me onrustig. Maar ik weet dat verandering nodig is om niet vast te roesten.


Maar dan: *de anderen* -- en ook: mijn ongeduld, mijn eigen onrealistische, op lucht gebaseerde verwachting dat *de anderen* mijn denkproces kunnen en willen volgen, als ik het maar zo nauwgezet mogelijk uitleg. Het enige waar ik nog slechter mee om kan gaan dan verandering is weerstand tegen de nodige verandering. Soms [worstel](WORSTELING "'Worsteling'") ik daarmee.


## Vertaling


Begrijp me niet verkeerd, ik geloof niet *de anderen* dom zijn. Integendeel, ik weet dat ze het niet zijn. Wat ze doen, is een voorstel voor iets nieuws vertalen naar iets bekends -- en dan gaat het mis.


Ik pleit tegen het idee dat een tester mijn werk controleert (bijvoorbeeld in [dit praatje](DE_VERGETEN_TESTER "'De vergeten tester'")). Dat vinden *de anderen* waanzin. Dan glippen er toch allemaal bugs doorheen! roepen ze. Je hebt toch een tweede set ogen nodig! -- Maar ik bestrijd niet de waarde van een tweede set ogen, ik onderschrijf die juist. Ik pleit ertegen dat die tweede set ogen *achteraf* komt kijken of ik mijn werk wel heb gedaan. Dat is, als je het mij vraagt, veel te laat. Zou ik de tester niet veel beter vooraf kunnen vragen me te helpen de testcases op te stellen die ik moet automatiseren? 


Ik pleit voor het afschaffen van [*pull requests*](/tags/pull-requests/ "Blogs met de tag 'pull requests'") (PR's).[^1] Dat vinden *de anderen* waanzin. Dat is een schending van het vier ogen-principe! We moeten toch kennis delen! -- Maar je hebt toch geen PR's nodig om kennis te delen? Je kunt ook naast elkaar zitten en de review doen terwijl je de code schrijft. Dan deel je de kennis onmiddellijk én je voorkomt regelmatig dat de ander een doodlopend pad in slaat. En het komt de kwaliteit van de oplossing ook nog eens ten goede.


Ik pleit voor [*continuous deployment*](/tags/continuous-deployment/ "Blogs met de tag 'continuous deployment'"): elke commit gaat rechtstreeks naar productie. Waanzin! vinden *de anderen*. Want je kunt helemaal niet alles zomaar op productie plempen, dan zien de gebruikers continu features die nog maar half af zijn! -- Maar [een deployment is geen release](/blog/25/12/trunk/ "'Trunk'"), en ik pleit niet voor *continuous releasing*. Je kunt dingen uitrollen zonder ze zichtbaar te maken voor eindgebruikers.


## Web


Een manier van werken bestaat uit een web van handelingen, gewoonten, manieren van interactie. Je kunt niet één handeling aanpassen en de rest van de werkwijze ongewijzigd laten. Als je aan één draadje trekt, ontrafel je het hele systeem.


Als een tester ophoudt je werk te controleren, dan zul je een andere manier moeten vinden om te garanderen dat je wijziging geen regressies introduceert. Als je geen kennis meer deelt via PR's, dan zul je een andere manier moeten vinden om dat te doen. Wanneer je continu uitrolt naar productie, dan zul je andere manieren moeten vinden om *work in progress* te verbergen dan het op een andere omgeving te houden.


Wanneer *de anderen* met een (voor hun) nieuw idee in hun werkwijze worden geconfronteerd, dan is hun instinctieve reactie: dat kan nooit werken! Dat is omdat ze het nieuwe idee in hun oude manier van werken proberen te passen. Maar dat is een weinig productieve manier om het nieuwe idee te benaderen. De vraag die je jezelf moet stellen is: welke dingen zouden er allemaal moeten veranderen, om dit nieuwe idee te laten werken?


Ik heb sympathie voor *de anderen*, want verandering maakt ook mij nerveus. Ik ben conservatief van aard. Ik geloof niet in grootscheepse veranderingen, in revolutie. Want de gevolgen van zulke veranderingen zijn niet te overzien en zullen daarom meer dan eens tot vervelende uitkomsten leiden. Maar dat betekent niet dat ik tegen verandering *an sich* ben. Integendeel, ik ben vóór verandering -- in kleine stapjes, waarbij we ons elke keer opnieuw afvragen: gegeven deze nieuwe situatie, wat moet er allemaal meebewegen, wil deze (ogenschijnlijk?) kleine verandering tot succes leiden? 


[^1]: [Andrea Laforgia](https://substack.com/@a4al6a "Andrea Laforgia @ Substack") zet de redenen hiervoor uiteen in [deze blog](https://a4al6a.substack.com/p/stop-using-pull-requests "'Stop Using Pull Requests', Andrea's Substack"), en beter dan ik ooit zou kunnen bovendien. 