---
title: "De twee doelen van een ontwikkelteam"
author: "Karl van Heijster"
date: 2026-04-04T10:00:45+02:00
draft: true
comments: true
tags: ["filosofie", "software ontwikkelaar (rol)", "samenwerking", "systeemdenken", "teamcultuur", "tester (rol)"]
summary: "Een softwareontwikkelteam heeft, *in abstracto*, twee doelen: vernieuwing en veiligheid. Een team bestaat daarom, zou je kunnen stellen, uit twee delen: ontwikkelaars en testers. Deze conceptualisatie van een ontwikkelteam is het gevolg van een vorm van reductionisme. Maar een team valt niet te reduceren tot haar samenstellende delen. Ze bestaat uit haar samenstellende delen *plus hun vormen van interactie*."
---

1.0 Een softwareontwikkelteam heeft, *in abstracto*, twee doelen: vernieuwing en veiligheid.[^1]


1.1. Vernieuwing wil zeggen: de software moet nieuwe problemen oplossen of bestaande problemen beter oplossen dan voorgaande implementaties. Dit doel wordt bereikt door nieuwe features toe te voegen of bestaande features te veranderen.


1.2. Veiligheid wil zeggen: de software moet wat het doet goed doen. Bestaande features mogen geen [bugs](/tags/bugs/ "Blogs met de tag 'bugs'") bevatten, en nieuwe features mogen de werking van bestaande features niet op onverwachte manieren omverwerpen.


1.3. Deze doelen staan op gespannen voet met elkaar. Maximaal inzetten op vernieuwing brengt de veiligheid in gevaar: er worden zoveel mogelijk nieuwe features toegevoegd zonder acht te slaan op de effecten daarvan op bestaande features. Maximaal inzetten op veiligheid brengt vernieuwing in gevaar: de eenvoudigste manier om veiligheid te garanderen is niets aan de software te veranderen.[^2]


{{< asterisk >}}


2.0 Een softwareontwikkelteam bestaat daarom, zou je kunnen stellen, uit twee delen: [ontwikkelaars](/tags/software-ontwikkelaar-rol/ "Blogs met de tag 'software ontwikkelaar (rol)'") en [testers](/tags/tester-rol/ "Blogs met de tag 'tester (rol)'").


2.1. De ontwikkelaars hebben als doel voor vernieuwing te zorgen. Zij hebben de taak nieuwe features toe te voegen.


2.2. De testers hebben als doel veiligheid te garanderen. Hun taak is te controleren dat de ontwikkelaars, in hun poging hun doel te bereiken, niet het doel van de testers in gevaar hebben gebracht.[^3]


2.3. Wanneer je een ontwikkelteam op deze manier conceptualiseert, stel je de ontwikkelaars tegenover de testers. Beide proberen hun eigen doel zo goed mogelijk te bereiken, en de ander vormt zo een belemmering voor hun succes.


{{< asterisk >}}


3.0 Deze conceptualisatie van een ontwikkelteam is het gevolg van een vorm van [reductionisme](https://en.wikipedia.org/wiki/Reductionism "'Reductionism', Wikipedia").


3.1. De aanname die ten grondslag ligt aan deze conceptualisatie, is: een team valt te reduceren tot haar samenstellende delen. Als een team twee doelen heeft, dan moet dat betekenen dat het team bestaat uit twee onderdelen die elk één doel hebben.


3.2. Reductionisme is een veronderstelling, geen empirisch feit. 


{{< asterisk >}}


4.0 Een team valt niet te reduceren tot haar samenstellende delen.


4.1. Als de aanname van reductionisme zou kloppen, dan zouden teams waarin ontwikkelaars en testers zich zoveel mogelijk op hun doel zouden concentreren, optimaal presteren. Maar dit is niet het geval. Precies om deze reden is het bestaan van een apart testteam algemeen erkend als een antipatroon. 


4.2 Reductionisme is een axioma of dogma dat leidt tot suboptimaal presterende teams.


{{< asterisk >}}


5.0. Een team bestaat uit haar samenstellende delen *plus hun vormen van interactie*. 


5.1. Het zijn de vormen van interactie die een team [*een team*](/blog/26/02/qu-est-ce-que-c-est-un-team/ "'Qu'est-ce que c'est un team?'") maken.


5.2. Bij elke wijziging aan de software moeten beide doelen gerespecteerd worden. Ontwikkelaars en testers moeten [samenwerken](/tags/samenwerking/ "Blogs met de tag 'samenwerking'") om veilig vernieuwing (vernieuwing-met-veiligheid) te bewerkstelligen.


{{< asterisk >}}


6.0 De twee doelen van het team hebben hun rechtmatige plek op het niveau van het gehele team, niet op een lager niveau. 


[^1]: Dit inzicht ontleen ik aan [*The DevOps Handbook*](https://itrevolution.com/product/the-devops-handbook-second-edition/ "Gene Kim, Jez Humble, Patrick Debois, John Willis, Nicole Forsgren, 'The DevOps Handbook (Second Edition)', IT Revolution, 2021"). Vernieuwing wordt daar gekoppeld aan het *dev*-gedeelte; veiligheid aan *ops*.

[^2]: Deze karakterisatie laat voor het gemak het bestaan van afhankelijkheden naar externe software buiten beschouwing. Als software met zulke afhankelijkheden niet geupdated wordt, dan brengt het niet-veranderen van de software *juist* de veiligheid in gevaar.

[^3]: Nota bene, ik onderschrijf deze karakterisatie van de rol van een tester absoluut <span style="font-variant:small-caps;">niet</span>. Mijn redenen daarvoor heb ik op verschillende plekken uiteengezet, meest recentelijk in mijn praatje [*De vergeten tester*](/talks/de-vergeten-tester/).