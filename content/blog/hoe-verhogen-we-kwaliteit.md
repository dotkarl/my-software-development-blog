---
title: "Hoe verhogen we kwaliteit?"
author: "Karl van Heijster"
date: 2025-06-27T09:38:34+02:00
draft: true
comments: true
tags: ["bedrijfscultuur", "druk", "kernwaarden", "kwaliteit", "vakmanschap", "verantwoordelijkheid", "zorg"]
summary: "Er is een werkgroep opgericht voor softwarekwaliteit -- elke twee weken heb ik 'n meeting in mijn agenda staan die *Software kwaliteit werkgroep* heet en de misplaatste overdaad aan spaties is gekmakend maar ik kan het goed van me afzetten. Onlangs kwam onze enterprise architect langs en hij zei allerlei zinnige dingen waar je het onmogelijk mee oneens kunt zijn maar waar ik toch een paar honderd woorden lang over ga emmeren."
---

Er is een werkgroep opgericht voor softwarekwaliteit -- elke twee weken heb ik 'n meeting in mijn agenda staan die *Software kwaliteit werkgroep* heet en de misplaatste overdaad aan spaties is gekmakend maar ik kan het goed van me afzetten. Onlangs kwam onze enterprise architect langs en hij zei allerlei zinnige dingen waar je het onmogelijk mee oneens kunt zijn maar waar ik toch een paar honderd woorden lang over ga emmeren.


Volgens mijn vrouw ben ik een onverbeterlijke *strevelaer*[^1], maar ik herken mezelf totaal niet in dat beeld.


## Onderhoudbaar


Hoe creëer je een onderhoudbaar systeem? Door het [KISS-principe](https://en.wikipedia.org/wiki/KISS_principle "'KISS principle'") te volgen, bijvoorbeeld, of [YAGNI](/tags/yagni/ "Blogs met de tag 'YAGNI'"). Maar: generieke oplossingen zijn niet verboden, en als je behoorlijk zeker bent dat het systeem die en die kant op gaat bewegen, dan is er niets op tegen om de code daarop voor te bereiden. -- Een ander goed idee is kennis nemen van [ontwerppatronen](/tags/ontwerppatronen/ "Blogs met de tag 'ontwerppatronen'") en ze toe te passen waar, eh, toepasselijk. Maar: overdrijf het niet, want een overdaad aan ontwerppatronen maakt je code nodeloos complex. -- Nog een goed idee: streef naar een hoge [testcoverage](/tags/testcoverage/ "Blogs met de tag 'testcoverage'"), want [goede code is geteste code](/blog/24/07/goede-code-is-geteste-code/). Maar: een testcoverage van 100 procent is geen doel op zich, zorg ervoor dat elke test wel een toegevoegde waarde heeft.


De eigenlijke lijst was een stuk langer, maar je begrijpt het idee. 


Met al het bovenstaande ben ik het hartgrondig eens -- zowel met de vuistregels als met de waarschuwing dat je deze ook te ver door kunt voeren. Kwalitatieve software ontwikkelen (maar ook: kwalitatief software ontwikkelen) beslaat het volgen van vuistregels plus de wetenschap wanneer je van die vuistregels af moet wijken. 


## Afwijken


Dat werpt de vraag op: wanneer is het gepast om van de vuistregels af te wijken? Wanneer wordt simpel *stupid*, een ontwerppatroon een last, een test een loze formaliteit? Die vraag valt alleen te beantwoorden binnen de context van een concrete situatie. Het is afhankelijk van een principieel oneindig aantal variabelen: deadlines, de staat van de codebase, de status van het project, de aard van het op te lossen probleem -- om er een paar te noemen. Het is onmogelijk om *in abstracto* te zeggen wanneer de [*sensible default*](https://www.thoughtworks.com/insights/topic/sensible-defaults "'Introducing our sensible defaults', Thoughtworks")[^2] niet langer *sense* maakt.


In het volgen of afwijken van bovenstaande principes, baseren ontwikkelaars zich op hun ervaring. Het idee is dat ontwikkelaars met meer ervaring dat vaker succesvol zullen doen dan ontwikkelaars met minder ervaring. -- De oplossing voor het probleem van softwarekwaliteit lijkt dan te zijn: ervoor zorgen dat ontwikkelaars binnen de kaders van de geschetste vuistregels zo veel mogelijk ervaring opdoen.


## Afwegingen


Maar: ervaring *waarmee* precies? Na afloop van de bijeenkomst bekroop me het ongemakkelijke gevoel dat we de vraag van de verkeerde kant aanvliegen. Het probleem met softwarekwaliteit is in mijn beleving meestal niet de programmeervaardigheid van de ontwikkelaar. De meeste van mijn collega's -- in elk geval de collega's waar ik direct mee samenwerk -- schrijven degelijke code, over het algemeen volgen ze de *sensible defaults*.[^3] 


Het probleem zit niet zozeer in kennis van die *defaults*, het zit 'm meer in de afwegingen die ze maken wanneer deze te volgen -- en vooral natuurlijk: wanneer niet. Wat me opviel tijdens het gesprek dat volgde op de uiteenzetting van de architect, was de afhankelijke opstelling van een deel van de aanwezigen. "We willen wel [refactoren](/tags/refactoren/ "Blogs met de tag 'refactoren'")," hoor je dan bijvoorbeeld, "maar we krijgen daar geen ruimte voor van onze Product Owner (PO)." (Ik herinner me dat een ontwikkelaar van een ander bedrijf op [Nimma Codes](https://www.nimma.codes/) eens tegen me zei: "We mogen van onze stakeholders geen tests schrijven." Ik moest lachen om niet te huilen.)


*Daar* zit het probleem: het idee dat een PO toestemming moet geven om te mogen refactoren.[^4] Maar dat probleem komt niet voort uit een kennisgebrek op het gebied van programmeren. Het komt voort uit een misvatting over wie de verantwoordelijkheid draagt voor de staat van de code.


## Verantwoordelijkheid


Het is, zou je kunnen zeggen, een professioneel-ethisch (of misschien zelfs cultureel) probleem. Want waarom laten ontwikkelaars technische keuzes afhangen van de grillen van een niet-technische manager? Het zou kunnen komen door eerdere slechte ervaringen, of misschien is het angst om tegen een autoriteitsfiguur (of autoritair figuur?) in te gaan. Maar het zou ook de angst kunnen zijn om verantwoordelijkheid te nemen. Want het is makkelijker om de keuze aan iemand anders te laten en er daarna over te klagen, dan zelf verantwoordelijkheid te nemen en de gevolgen van die keuze te dragen.


Want verkeerde keuzes kunnen vervelende gevolgen hebben. Als een refactorslag tegen blijkt te vallen, en de deadline voor een nieuwe feature in gevaar komt, ben *jij* degene die uit mag leggen waarom het niet gelukt is. En dit is een ongemakkelijke waarheid: er zullen *hoe dan ook* verkeerde keuzes worden gemaakt. Het risico op de verkeerde keuze zul je voor lief moeten nemen, altijd en overal waar er keuzes worden gemaakt. En: niet kiezen is ook kiezen, en niet kiezen is meestal de verkeerde keuze.


De truc wordt dan: de potentieel desastreuze gevolgen van keuzes minimaliseren. Dat betekent: je keuzes goed (kunnen) beargumenteren, en vaak peilen of je keuze nog altijd de juiste is. Dit is de kern van [agile ontwikkelen](/tags/agile-ontwikkeling/ "Blogs met de tag 'agile ontwikkeling'"): vergaar zo snel mogelijk feedback en stuur op basis daarvan zo snel mogelijk bij. Soms betekent dat: eerst refactoren voordat je een nieuwe feature oppakt -- en andere keren: nu leveren en straks maar zorgen dat het mooi wordt.

 
## Zorg


Verantwoordelijkheid nemen betekent: [zorg](/tags/zorg/ "Blogs met de tag 'zorg'") dragen voor de integriteit van het systeem naast het leveren van waarde. Beide delen van dat statement zijn even belangrijk.


Kwalitatieve software is het natuurlijk gevolg van een bepaalde [cultuur](/tags/bedrijfscultuur/ "Blogs met de tag 'bedrijfscultuur'") (waar technische kennis een *onderdeel* van is). Dus ik zat te denken: misschien zouden we minder moeten focussen op de technische aspecten van kwalitatieve software, en meer op de *soft skills* die nodig zijn om als ontwikkelaar te staan voor je vak, en daar draagvlak voor te organiseren. 


[^1]: Dat is dialect, maar tot vandaag dacht ik altijd dat "strevelen" en "strevelaar" gewoon Nederlandse woorden waren. Het betekent: twistziek.

[^2]: Dat is Engels voor wat voorheen *best practice* werd genoemd. Ik stuitte op de term via [deze aflevering](https://open.spotify.com/episode/3Rw2eQvwZaBW3KRxYEJwIQ?si=PuXkG044Qp2OGo3c9INX6A "'Sensible defaults: A way to think about our technology practices', Thoughtworks Technology Podcast @ Spotify") van de [*Thoughtworks Technology Podcast*](https://open.spotify.com/show/6RBb4pGRgOFTmtCDSfTWvu).

[^3]: Natuurlijk is dat niet altijd zo geweest, zie bijvoorbeeld [deze blog](/blog/23/04/tijdreis/). Helaas zijn er vandaag de dag nog altijd meer dan genoeg teams waarin de kwaliteit van het programmeren door een kritieke ondergrens zakt, met alle gevolgen van dien.

[^4]: En misschien ligt daar onder nog een tweede probleem, bijvoorbeeld het idee dat refactoren het systeem langere tijd in gebroken staat achterhoudt en daarom niet samen kan gaan met het opleveren van features. Dat zou een totale misvatting van het idee van refactoring inhouden, zie bijvoorbeeld [deze blog](/blog/25/06/wat-is-refactoring-volgens-hannah-arendt/ "'Wat is refactoring (volgens Hannah Arendt)?'").