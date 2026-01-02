---
title: "De increment, het cadeautje"
author: "Karl van Heijster"
date: 2026-01-02T07:44:25+01:00
draft: false
comments: true
tags: ["continuous deployment", "mentaal model", "scrum", "product increment", "waarde"]
summary: "Scrum is, als ik het meningencircus op LinkedIn mag geloven, al een tijdje uit de mode. Dat is onterecht en terecht. Het is onterecht in zoverre dat veel interpretaties en implementaties van Scrum de geest van het framework niet gevat hebben. Maar het is terecht in zoverre dat Scrum wel degelijk tekenen van ouderdom vertoont, littekens van de tijd waarin het is ontstaan. Beide soorten problemen komen bijeen in de notie van het *increment*."
---

[Scrum](https://www.scrum.org/ "Scrum.org") is, als ik het meningencircus op [LinkedIn](https://www.linkedin.com/) mag geloven, al een tijdje uit de mode. Dat is onterecht en terecht. Het is onterecht in zoverre dat veel interpretaties en implementaties van Scrum de geest van het framework niet gevat hebben.[^1] Maar het is terecht in zoverre dat Scrum wel degelijk tekenen van ouderdom vertoont, littekens van de tijd waarin het is ontstaan. Beide soorten problemen komen bijeen in de notie van het [*increment*](https://www.scrum.org/resources/what-is-an-increment "'What is an Increment?', Scrum.org").


## Het increment


Wat is een increment? Het is de werkende versie van de software die waarde heeft toegevoegd ten opzichte van de vorige versie. Er kunnen meerdere increments worden opgeleverd per [Sprint](https://www.scrum.org/resources/what-is-a-sprint-in-scrum "'What is a Sprint?', Scrum.org"), die aan het eind van de Sprint worden gepresenteerd door het team. Toen ik, helemaal aan het begin van mijn [ontwikkelcarrière](/tags/carrièrepad/ "Blogs met de tag 'carrièrepad'"), een cursus Scrum in mijn mik geduwd kreeg, werd het increment beschreven als "het cadeautje", het cadeau van het team aan de stakeholders. Het is datgene wat de eindgebruikers plezier bezorgt: een nieuwe versie van het systeem met nieuwe features en/of bugfixes en/of performanceverbeteringen. Een increment voegt nieuwe waarde toe aan het systeem.


In het systeem waar ik nu aan werk worden toetsontwerpen en toetsresultaten aan elkaar gekoppeld, zodat die door een ander systeem kunnen worden geanalyseerd. Laten we uit gaan van het volgende scenario: op het moment kunnen er toetsontwerpen kunnen worden geupload, maar het kunnen uploaden van toetsresultaten ontbreekt nog. 


De toetsresultaten worden aangeleverd in Excel-bestanden[^2], de zogenaamde "scoreformulieren". Het systeem importeert deze en zet ze om naar een intern datamodel. Die data moet worden gevalideerd tegen het toetsontwerp, zodat we zeker weten dat het scoreformulier klopt met de definitie van de toets. Scoreformulieren bestaan in verschillende varianten: voor de meeste vakken volstaat het om aan te geven wat de score was van elke leerling op elke vraag, maar in sommige varianten kan ook worden aangegeven welk antwoord de leerling op een bepaalde vraag heeft gegeven, waarna de score automatisch berekend wordt.


## *Vertical slice*


Wat is het volgende increment van het systeem?


Het is verleidelijk om te zeggen: het kunnen uploaden van scoreformulieren. Maar wat betekent dat? Je zou de feature op kunnen vatten als: het kunnen importeren van alle varianten van scoreformulieren voor alle vakken, inclusief validatie tegen het toetsontwerp en de foutafhandeling van scoreformulieren die verkeerd zijn ingevuld.


Maar dat is een feature die te groot is om in één Sprint af te kunnen ronden. Dus in plaats daarvan is het beter om de feature in enkele [*vertical slices*](https://en.wikipedia.org/wiki/Vertical_slice "'Vertical slice', Wikipedia") op te knippen. Bijvoorbeeld: (1) het kunnen importeren van een scoreformulier waarin alleen de scores staan; (2) het kunnen importeren van scoreformulieren waarin de antwoorden staan; (3) het kunnen importeren van scoreformulieren waarin beide vormen voorkomen; (4) het bij binnenkomst valideren van het scoreformulier tegen het toetsontwerp; (5) het kunnen importeren van scoreformulieren die niet juist zijn ingevuld. Je zou (voor de eenvoud even aangenomen dat elke *vertical slice* even veel werk is) elke Sprint één zo'n deelfunctionaliteit op kunnen leveren.


## Een tegenwerping


Een veelgehoorde tegenwerping is dan: maar de gebruikers hebben pas wat aan deze functionaliteit in zijn geheel! Maar dat zou ik willen weerspreken. De vakken die geen gebruik maken van de antwoordvariant van scoreformulieren, hebben iets aan (1). Als we alléén die deelfeature zouden releasen, dan zouden ze het systeem al kunnen gebruiken. Maar dan moeten ze zelf wel nog enkele handmatige controles doen om na te gaan dat het scoreformulier geen fouten bevat en consistent is met het toetsontwerp. Een ideale gebruikerservaring levert dat natuurlijk niet op, maar er is wel al waarde geleverd voor de eindgebruikers.


Stakeholders kunnen ervoor kiezen om te zeggen: (1) op zichzelf is nog niet voldoende. Het kan bijvoorbeeld teveel handwerk blijken te zijn om handmatig de scoreformulieren na te lopen op consistentie met het toetsontwerp. In dat geval kan ervoor gekozen worden om in de volgende Sprint (4) te implementeren. Na afloop van die Sprint kan de vraag opnieuw gesteld worden: is dit voldoende om te releasen? En nu zou dat zomaar wel het geval kunnen zijn. Een deel van de gebruikers kan dan al met de feature aan de slag. Dat de foutafhandeling bij verkeerd ingevulde formulieren wat cru is, neemt men op de koop toe.


Waar komt de tegenwerping vandaan? [Dave Farley](https://www.davefarley.net/) verwoordt het in [deze video](https://www.youtube.com/watch?v=-bZJ_xiTyIU "'Why Do Developers Struggle With Small, Simple Changes?', Modern Software Engineering @ YouTube") heel mooi: het berust op een verwarring tussen "van waarde" en "waardevol". Vijf cent is van waarde, maar op zichzelf nog niet waardevol. Het increment dient aan het eind van de Sprint waarde toe te voegen; de increment hoeft op zichzelf nog niet waardevol te zijn.


De Sprint is een hulpmiddel om een grote, waardevolle feature in kleine deelfeatures van waarde op te splitsen. Het doet dat door je te dwingen om increments te definiëren, kleine wijzigingen die waarde toevoegen. Het is bovendien een stok achter de deur om ervoor te zorgen dat er ten minste één keer per Sprint een increment naar productie gedeployd wordt.


## Een ouderdomsteken


En precies op dat laatste punt vertoont Scrum tekenen van ouderdom. Want Scrum kwam op in de jaren '90, toen het, heb ik me laten vertellen, niet ongewoon was om maanden of zelfs jaren te moeten wachten op de release van een volgende versies van een systeem. Het increment (of, juister geformuleerd: het increment-aan-het-eind-van-de-Sprint) is een reactie op die situatie.


Maar sindsdien zijn de tijden veranderd, en is het helemaal niet ongewoon meer om veel vaker dan eens per Sprint naar productie te deployen. Sterker nog, in mijn huidige team maken we gebruik van [*continuous deployment*](/tags/continuous-deployment "Blogs met de tag 'continuous deployment'"): wij rollen meermaals per dag uit naar productie. Wij leveren elke dag meerdere increments van het systeem op.


Sommige increments bevatten alleen codewijzigingen onder de motorkap, die het voor ons makkelijker maken om de volgende feature te releasen. Andere increments bevatten een *vertical slice* die nog veel dunner is dan de deelfeatures die ik hierboven heb beschreven. Bijvoorbeeld: (1.1) het kunnen importeren van scoreformulieren met daarin één leerling die één antwoord heeft gegeven; gevolgd door (1.2) meerdere leerlingen die één antwoord gaven en (1.3) een leerling met meerdere antwoorden en (1.4) meerdere leerlingen met meerdere antwoorden -- om maar iets te noemen.


De metafoor van "het cadeautje" is daarom misleidend geworden. Want het suggereert een afgerond geheel (zelfs al is het geheel kleiner dan de volledige feature). Je zou het zo kunnen zien: toen Scrum werd ontwikkeld, kregen gebruikers elke Sprint een cadeaubon van twintig euro. Vandaag de dag krijgen ze elke dag drie of vier cadeaubonnen van vijftig cent. Aan het eind van een Sprint anno nu ben je rijker dan in de oude situatie. Maar of je nu blij wordt van zo'n constante stroom cadeaubonnen...? 


[^1]: Zie [deze blog](/blog/25/02/softwareontwikkeling-is-een-popcultuur-maar-hoeft-dat-niet-te-zijn/ "'Softwareontwikkeling is een popcultuur (maar hoeft dat niet te zijn)'"), maar kijk vooral [het daarin opgenomen praatje](https://www.youtube.com/watch?v=eZKVxtbmtMI "'Agile and Architecture: a meeting of the undead - Einar Høst - NDC Oslo 2024', YouTube") van [Einar Høst](https://einarwh.wordpress.com/). Het is een uitstekende uiteenzetting van hoe die Scrum op de werkvloer de ideeën achter [agile](/tags/agile-ontwikkeling/ "Blogs met de tag 'agile ontwikkeling'") volledig heeft gemist.

[^2]: Nee, dit is geen wenselijke situatie. We zijn, als team en als organisatie, bezig om deze Excel-bestanden uit te faseren. Maar om toch waarde te kunnen leveren tot het zo ver is, maken we gebruik van wat we hebben.