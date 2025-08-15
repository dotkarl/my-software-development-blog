---
title: "Het geünificeerde domeinmodel, revisited"
author: "Karl van Heijster"
date: 2025-08-15T09:17:01+02:00
draft: true
comments: true
tags: []
summary: "Binnen applicatie *a* is het zinvol om van conceptitems te spreken, binnen applicatie *b* niet. Binnen applicatie *b* is het zinvol om van de P-waarde (moeilijkheidsgraad) van een item te spreken, binnen applicatie *a* niet. Heeft het(zelfde) woord \"item\" dan dezelfde betekenis in binnen de context van beide applicaties, of niet? Moet het `Item` in het geünificeerde domeinmodel de property's `IsConcept` of `PValue` bevatten? "
---

Zij hadden een droom: [één domeinmodel](/blog/25/08/de-theorie-van-het-geunificeerde-domeinmodel/ "'De theorie van het geünificeerde domeinmodel'") dat de context van de organisatie eenduidig beschreef. Het model -- of delen ervan -- zou door verschillende applicaties in de organisatie gebruikt kunnen en moeten worden. 


Laten we zeggen dat applicatie *a* verantwoordelijk is voor het construeren van items (toetsvragen), en applicatie *b* is verantwoordelijk voor de analyse ervan. Het is de verantwoordelijkheid van *a* om ervoor te zorgen dat gebruikers zo snel en efficiënt en gebruiksvriendelijk mogelijk items kunnen creëren, reviewen, aanpassen, groeperen en eventueel schrappen. Applicatie *b* is ervoor verantwoordelijk de antwoorden die leerlingen op dat item hebben gegeven, te duiden: was het een makkelijk of moeilijk item?


Als applicatie *a* het over een item *x* heeft, en applicatie *b* heeft het over een item *x*, dan hebben ze het, zou je zeggen, over hetzelfde. En ze zouden dus ook hetzelfde model moeten gebruiken om dat ding te beschrijven.


De vooronderstelling is hier: een woord heeft één betekenis -- misschien niet altijd in de praktijk, maar wel in principe. Het item van applicatie *a* is hetzelfde item van applicatie *b*. 


{{< asterisk >}}


Het beeld dringt zich op: de betekenis van een woord is het ding waar het voor staat. De wortels van deze veronderstelling gaan ver terug -- we vinden haar al bij [Plato](https://plato.stanford.edu/entries/plato/ "'Plato', Stanford Encyclopedia of Philosophy").[^1]


Het beeld suggereert: er is een wereld, en in de wereld bevinden zich dingen, en er is een taal, en de taal beschrijft de dingen in de wereld. Maar de wereld en taal zijn twee wezenlijk andere dingen. Dat roept een probleem op: hoe maken ze contact met elkaar? 


Het woord staat voor, betekent het ding. Als je wil weten wat een woord betekent, dan wijs je naar het ding waar het voor staat. -- "Wat is rood?" -- "*Dat* is rood," en je wijst naar een vlek rode verf en/of een stoplicht en/of een rijpe appel. ("Wat is een item?" -- "*Dat* is een item," en je wijst naar de toetsvraag die een docent heeft opgeschreven en/of de tekst en interactie die een leerling voor zijn neus krijgt en/of een stukje data in een database.)


In dit beeld is de wereld primair en de taal een afgeleide. De primaire functie van de taal is om de wereld te beschrijven. Taal kan de wereld alleen beschrijven voor zover ze de structuur van de wereld spiegelt. Als er geen rode dingen zijn, heeft het woord "rood" dan wel betekenis?[^2] -- Het antwoord op die vraag is afhankelijk van je opvatting of het mogelijk is woorden betekenis te geven zonder aanwijzende definitie.


{{< asterisk >}}


Het valt niet te ontkennen dat applicatie *a* en *b*, elk op hun eigen manier, verwijzen naar hetzelfde object. Maar volgt daar ook bij dat "item" -- het woord, het concept -- dezelfde *betekenis* heeft? 


"Betekenis" is een notoir glibberig concept. Het is de stoplap die onnauwkeurige denkers kunnen gebruiken en gebruiken om alle gaten in hun theorie mee te dichten. ("Bewustzijn" en "God" hebben vaak een soortgelijke functie.)


Vraag je af: wat betekent het (*no pun intended*) om te zeggen dat een woord betekenis heeft? Wat betekent het om te zeggen dat het *dezelfde* betekenis heeft? -- Dezelfde als wat? Dezelfde als een ander woord? Of als hetzelfde woord in een andere context? -- Wat betekent "hetzelfde woord" hier? Een woord dat uit dezelfde letters in dezelfde volgorde bestaat? Is dat wat de identiteit van woorden bepaalt?


{{< asterisk >}}


Binnen applicatie *a* is het zinvol om van conceptitems te spreken, binnen applicatie *b* niet. Binnen applicatie *b* is het zinvol om van de P-waarde (moeilijkheidsgraad) van een item te spreken, binnen applicatie *a* niet. 


Heeft het(zelfde) woord "item" dan dezelfde betekenis in binnen de context van beide applicaties, of niet? -- Moet het `Item` in het geünificeerde domeinmodel de property's `IsConcept` of `PValue` bevatten? 


Laten we aannemen: (1) een item een object is met bepaalde eigenschappen, bijvoorbeeld de eigenschap *concept te zijn* of *P-waarde 0,37 te hebben*, en (2) de betekenis van een woord is het object waar het voor staat. Zou daar dan niet uit moeten volgen dat het in beide contexten -- in alle contexten? -- zinvol is om over de eigenschappen in kwestie te spreken?


{{< asterisk >}}


Natuurlijk hoeft dit niet te betekenen dat het geponeerde oerbeeld van betekenis, het betekenende ding, niet klopt. Je zou kunnen zeggen: "item" binnen applicatie *a* staat voor een ding dat wél de eigenschap *concept te zijn* bevat, en niet de eigenschap *P-waarde 0,37 te hebben*, en "item" in applicatie *b* staat voor een ding dat de omgekeerde eigenschappen heeft.


Wat je daarmee in feite zegt, is dat de theorie van betekenis klopt en dat de fout ligt bij het dagelijks taalgebruik. Dat is een verdedigbaar standpunt, want het dagelijks taalgebruik is inderdaad vaak ambigu, het loopt over van woorden met verschillende betekenissen.


Maar hoewel deze oplossing het betekenende ding redt, geeft het de doodslag aan het geünificeerde domeinmodel. Want daarmee zou je toegeven: applicatie *a* en *b* hebben het niet over hetzelfde ding, en ze hoeven dus ook niet hetzelfde domeinmodel met elkaar te delen.


En het laat de vraag bestaan: maar hoe verhoudt item *x* zich binnen applicatie *a* dan tot item *x* binnen applicatie *b*? Als het niet hetzelfde ding is, waarom zijn we dan toch geneigd om te willen zeggen dat beide applicaties hetzelfde item behandelen?


[^1]: Zie ook [deze](/blog/24/12/de-filosofische-geschiedenis-van-een-ontwerpkeuze/ "'De filosofische geschiedenis van een ontwerpkeuze'") en [deze blog](/blog/24/10/de-allegorie-van-de-grot/ "'De allegorie van de grot'") voor enkele gedachten over Plato en zijn metafysica. [Wittgenstein](/tags/wittgenstein-ludwig/ "Blogs met de tag 'Wittgenstein, Ludwig'") bekritiseert dit idee in de [*Philosophische Untersuchungen*](https://en.wikipedia.org/wiki/Philosophical_Investigations "'Philosophical Investigations', Wittgenstein") overigens niet als de Platoonse maar de Augustijnse opvatting van taal, vernoemd naar de heilige [Augustinus van Hippo](https://plato.stanford.edu/entries/augustine/ "'Augustine of Hippo', Stanford Encyclopedia"). 

[^2]: [P.F. Strawson](https://plato.stanford.edu/entries/strawson/ "'Peter Frederick Strawson', Stanford Encyclopedia of Philosophy") behandelt onder andere die vraag in het tweede -- en eerlijk gezegd: behoorlijk zware -- deel van [*Individuals*](https://www.routledge.com/Individuals-An-Essay-in-Descriptive-Metaphysics/Strawson/p/book/9781032914831 "Peter Strawson, 'Individuals: An Essay in Descriptive Metaphysics', Routledge 2025"). Ik [recenseerde](https://boekenkrant.com/recensie/individuals-an-essay-in-descriptive-metaphysics/ "'Mijlpaal in de analytische metafysica' @ Boekenkrant.com") het boek voor [Boekenkrant.com](https://boekenkrant.com/).
