---
title: "Koppeling buiten code om"
author: "Karl van Heijster"
date: 2025-05-30T08:02:33+02:00
draft: false
comments: true
tags: ["aannames", "boeken", "communicatie", "koppeling", "microservices", "software ontwikkelaar (rol)"]
summary: "Koppeling is: wanneer een wijziging in het ene (sub)systeem een wijziging in het andere (sub)systeem noodzakelijk maakt. Wanneer softwareontwikkelaars het over koppeling hebben, dan bedoelen we meestal: *in code* aan elkaar gekoppelde (sub)systemen. Maar twee (sub)systemen kunnen ook *zuiver functioneel* aan elkaar gekoppeld zijn, zonder ook maar één regel code te hoeven delen."
---

[Koppeling](/tags/koppeling/ "Blogs met de tag 'koppeling'") is: wanneer een wijziging in het ene (sub)systeem een wijziging in het andere (sub)systeem noodzakelijk maakt.[^1] Wanneer softwareontwikkelaars het over koppeling hebben, dan bedoelen we meestal: *in code* aan elkaar gekoppelde (sub)systemen. 


[Vlad Khononov](https://vladikk.com/) beschrijft in [*Balancing Coupling in Software Design*](https://www.pearson.com/en-us/subject-catalog/p/balancing-coupling-in-software-design-successful-software-architecture-in-general-and-distributed-systems/P200000000372/9780137353576 "Vlad Khononov, 'Balancing Coupling in Software Design: Universal Design Principles for Architecting Modular Software Systems', Addison-Wesley Professional 2024") verschillende manieren waarop systemen aan elkaar gekoppeld kunnen zijn. Met name zijn taxonomie van integratiesterkte (zie ook [deze blog](/blog/25/04/hoge-cohesie-losse-koppeling/ "'Hoge cohesie, losse koppeling'")) is de moeite van het bestuderen waard. Koppeling is geen kwestie van alles of niets. Systemen kunnen in sterke en minder sterke mate van elkaar afhankelijk zijn. 


Systeem A en B kunnen aan elkaar gekoppeld zijn omdat B gebruik maakt van implementatiedetails van A waar de buitenwereld nooit weet van had mogen hebben. Maar B kan ook gebruik maken van het interne model van A, of van een naar de buitenwereld toe afgesproken integratiecontract. De eerste soort koppeling is sterker dan de tweede, en de tweede is sterker dan de derde. Koppeling beslaat een spectrum van intrusief naar functioneel naar contractmatig.


## Functioneel


Wat impliciet blijft in deze bespreking is het gegeven dat al deze voorbeelden uitgaan van aan elkaar gekoppelde *code*. Maar Khononov wijst erop -- en dat is wat in de discussie rondom koppeling vaak over het hoofd wordt gezien -- dat twee (sub)systemen ook *zuiver functioneel* aan elkaar gekoppeld kunnen zijn, zonder ook maar één regel code te hoeven delen.


Als systemen, onafhankelijk van elkaar, dezelfde businesslogica implementeren, dan zijn ze aan elkaar gekoppeld. Immers, wil het systeem *als geheel* -- de totaliteit van met elkaar communicerende systemen -- blijven werken, dan moeten alle relevante (sub)systemen dezelfde regels hanteren. 


Laten we als voorbeeld twee [microservices](/tags/microservices/ "Blogs met de tag 'microservices'") nemen, `OrderService` en `BillingService`. Als de `OrderService` meent dat een klant korting krijgt bij besteding van €50,-, maar de `BillingService` meent dat dat pas vanaf €75,- geldt, dan is de logica van het systeem geheel inconsistent. Beide systemen werken individueel "correct", maar in hun samenwerking manifesteert zich een bug. De gebruiker van de microservices weet niet waar deze aan toe is.


## Communicatiesystemen


Die observatie vertelt ons iets over de aard van koppeling. Koppeling is geen codeprobleem maar een communicatieprobleem. Problemen in communicatie kunnen niet alleen ontstaan in de inhoud van de berichten die systemen over en weer sturen, maar ook in de context waarin die berichten begrepen worden. De `Order`- en de `BillingService` zijn het er beide over eens dat er een bestelling is geplaatst voor €50,- -- maar de eerste begrijpt dat in een context waarbinnen dat bedrag korting impliceert, en de tweede niet.


En dat vertelt op zijn beurt weer iets over de aard van het werk van een softwareontwikkelaar. Het is niet de taak van een ontwikkelaar om code te schrijven en te begrijpen, maar om *systemen* te ontwikkelen en te begrijpen. Natuurlijk, die systemen worden door ons gecodeerd -- maar wie de code aanziet voor het systeem, [ziet de kaart aan voor het landschap](https://en.wikipedia.org/wiki/Map%E2%80%93territory_relation "'Map-terroritory relation', Wikipedia"). 


Bovendien, de systemen die we coderen zijn slechts een onderdeel van de bredere (organisatorische) systemen waarbinnen ze functioneren. Het feit dat software door mensen gebruikt worden om bepaalde doelen te bereiken is net zo belangrijk om haar te kunnen duiden als het begrip van de systemen (c.q. code) zelf. -- En zo loopt koppeling naadloos over in [systeemdenken](https://en.wikipedia.org/wiki/Systems_thinking "'Systems thinking', Wikipedia").[^2]  


[^1]: Deze definitie, ontleend aan [Kent Becks](https://www.kentbeck.com/) [*Tidy First?*](https://www.oreilly.com/library/view/tidy-first/9781098151232/ "Kent Beck, 'Tidy First?: A Personal Exercise in Empirical Software Design', O'Reilly Media, 2023"), legt nadruk op de *veranderlijke* aard van software, en beziet het fenomeen vanuit dat gegeven. Er zijn ook "statische" definities mogelijk, waarbij de nadruk veel meer komt te liggen op het feit dat systemen met elkaar communiceren. Wat mij bevalt aan Becks definitie is dat het onderkent dat softwaresystemen dynamische, veranderende entiteiten zijn (zie ook [deze blog](/blog/24/07/goede-code-is-geteste-code/ "'Goede code is geteste code'")).

[^2]: Op het moment van schrijven lees ik [Diana Montalions](https://montalion.com/) [*Learning Systems Thinking*](https://www.oreilly.com/library/view/learning-systems-thinking/9781098151324/ "Diana Montalion, 'Learning Systems Thinking: Essential Nonlinear Skills and Practices for Software Professionals', O'Reilly Media, 2024") -- ook al een aanrader!
