---
title: "Geen requirements, geen tests?"
author: "Karl van Heijster"
date: 2025-01-10T08:55:35+01:00
draft: true
comments: true
tags: ["mentaal model", "requirements", "testen"]
summary: "Ontwikkelaars zeggen soms dingen als: \"Ik heb geen tests geschreven want de requirements zijn nog onduidelijk.\" Of: \"Het heeft geen zin om tests te schrijven want de requirements veranderen toch nog.\" Dit is, denk ik, een redenering die grenst aan de waanzin -- met potentieel desastreuze gevolgen bovendien. Maar het loont zich om erover te filosoferen wat ontwikkelaars ertoe drijft dit soort uitspraken te doen."
---

Ontwikkelaars zeggen soms dingen als: "Ik heb geen tests geschreven want de requirements zijn nog onduidelijk." Of: "Het heeft geen zin om tests te schrijven want de requirements veranderen toch nog." 


Dit is, denk ik, een redenering die grenst aan de waanzin -- met potentieel desastreuze gevolgen bovendien (zie bijvoorbeeld [deze blog](/blog/23/04/tijdreis/ "'Tijdreis'")). Maar het loont zich om erover te filosoferen wat ontwikkelaars ertoe drijft dit soort uitspraken te doen.


## Een cirkel tekenen


Eén. Je kunt je afvragen: wat voor [mentaal model](/tags/mentaal-model/ "Blogs met de tag 'mentaal model'") hanteert een aldus redenerende ontwikkelaar? Misschien iets als dit: *programmeren tegen vage of ontbrekende requirements is als het tekenen van een nog ongespecificeerde cirkelvorm.*


Wat doe je als je een cirkelvorm moet tekenen, maar je weet niet of het een cirkel of ovaal of onregelmatig moet zijn? Je zou dit kunnen doen: je tekent met een dikke kwast een cirkel, het liefst met vage randen, en je zegt tegen jezelf: dit geeft de bandbreedte aan waarbinnen de uiteindelijke vorm zich moet bevinden. 


Je geeft *bij benadering* een juist antwoord, maar je reserveert de mogelijkheid om dat antwoord later te preciseren. Je zou kunnen zeggen: Is de opdracht vaag? Dan laat ik mijn oplossingsrichting ook nog vaag. Voor het tekenen van een cirkel is dat een uitstekende manier om voort te gaan.


Maar werkt deze metafoor ook voor het schrijven van code? "Zijn de requirements vaag? Dan laat ik de werking van mijn code ook vaag." Iemand die met dit idee code begint te schrijven, ziet de test als het middel dat precies vastlegt wat de code doet, terwijl op dit moment alleen nog maar een oplossing mogelijk is die bij benadering klopt. 


Het probleem is: de werking van code is *nooit* vaag. Je kunt geen "dikke, vage lijn" trekken in code. De lijn die je in code trekt is altijd precies: flinterdun en retestrak. De output van code wordt *volledig* gedefinieerd door haar input.[^1]


Het idee om code net zo ongedefinieerd te laten als (op dit moment) ongedenieerde requirements, is innerlijk inconsistent.


## *First time right*


Twee. Wat probeert de ontwikkelaar te voorkomen door nu geen tests te schrijven? Waarschijnlijk: dat die tests straks allemaal herschreven moeten worden, zodra de requirements duidelijk worden.


De ontwikkelaar probeert zichzelf dubbel werk te besparen. Hij schrijft de tests liever in één keer goed. En dat kan pas wanneer duidelijk is hoe die tests eruit moeten komen te zien -- wanneer de requirements duidelijk zijn.


Het is een interessante observatie dat de ontwikkelaar er minder problemen mee heeft te itereren op de productiecode. Ik denk dat dat onderscheid voortkomt uit een diepgewortelde overtuiging van veel ontwikkelaars dat testcode minder waarde heeft dan productiecode. Of dat hun werk primair bestaat uit het schrijven van productiecode en slechts secundair uit het schrijven van testcode. 


[Ik ben een andere mening toegedaan.](/blog/24/07/goede-code-is-geteste-code/ "'Goede code is geteste code'") Als we bereid zijn te itereren op productiecode, dan moeten we ook bereid zijn te itereren op testcode. Want beide zijn twee kanten van dezelfde munt. Je kunt niet de ene achterwege laten zonder de kwaliteit van de andere in gevaar te brengen.


Er is niets mis mee om nieuwe dingen te leren en je code aan die nieuwe inzichten aan te passen -- ook je testcode niet. Sterker nog, dat is alleen maar aan te moedigen. De uitdaging is om tests op zo'n manier te schrijven dat dit *rework* alleen of vooral nodig is wanneer er nieuwe inzichten zijn *over de requirements*, en niet elke keer wanneer je de code aanpast. (Zie ook [deze](/blog/22/11/test-het-systeem-niet-de-class/ "'Test het systeem, niet de class'") en [deze blog](/blog/22/12/tests-zijn-specs/ "'Tests zijn specs'").)


## Inzicht


Drie. Wat meent de ontwikkelaar dat de tests beogen te doen? Vast: de requirements van het systeem vastleggen. En daarin heeft hij gelijk.


Maar dat is niet de enige reden waarom we tests hebben. Tests zijn ook een middel om ons inzicht te geven in de impact van een wijziging in de code. Tests [vertellen](/blog/24/08/wat-zegt-deze-test/ "'Wat zegt deze test?'") ons: als je *die* wijziging doorvoert, verandert het gedrag in *deze* delen van het systeem. 


Het is vervolgens aan jou om je af te vragen: is dat wenselijk? Tests stellen je in staat om de keuze weloverwogen te maken. En het is een keuze die je maar beter overwogen kunt maken, en niet één keer aan het eind van je wijziging (als het daadwerkelijk het eind blijkt) maar doorlopend.


Tests geven je de mogelijkheid het mis te hebben en daarna veilig bij te sturen. [Tests zijn een vangnet.](/blog/22/09/tests-als-vangnet/ "'Tests als vangnet'"). Zonder tests stuur je blind. Je wijzigt gedrag en *hoopt* dat je de gevolgen daarvan overziet. Maar als je valt, heb je geen idee waar je terecht zal komen.


Je kunt maar beter weten waar die scherpe lijn ligt, voordat je 'm gaat verleggen.


[^1]: Maar: code kan wel vaag zijn in die zin dat de in- en outputs in ons hoofd moeilijk te verenigen zijn in een coherent model. De code *lijkt* dan ondeterministisch, maar dat is omdat we niet in staat zijn om een compleet beeld te vormen van alle relevante variabelen.
