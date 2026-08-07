---
title: "Duplicatie en veranderlijkheid"
author: "Karl van Heijster"
date: 2026-08-07T10:13:56+02:00
draft: true
comments: true
tags: ["DRY", "infrastructuur", "onderhoudbaarheid", "tijd"]
summary: "Toen ik met vakantie ging, kreeg onze junior, met hulp van een externe partij, de taak onze infrastructuur te herstructureren naar gestandaardiseerde componenten. Hij deed dat eerst voor onze acceptatieomgeving. Daarna was het tijd voor de productieomgeving. De vraag was nu: dupliceren we de Bicep-bestanden van onze acceptatieomgeving, of parameteriseren we die bestanden zodat ze voor beide omgevingen werken?"
---

Het liefst zou ik één omgeving hebben, want dat maakt het leven, [mits je de juiste gewoonten erop nahoudt](https://a4al6a.substack.com/p/what-makes-a-high-performing-team "'What Makes a High-Performing Team?', Andrea Laforgia"), een stuk eenvoudiger. Maar de strijd om een acceptatieomgeving heb ik verloren, en nu *pushen* we onze code met elke commit naar twee omgevingen.


Toen ik met vakantie ging, kreeg onze junior, met hulp van een externe partij, de taak onze infrastructuur te herstructureren naar gestandaardiseerde componenten. Hij deed dat eerst voor onze acceptatieomgeving. (Dat wil zeggen: hij creëerde een tweede acceptatieomgeving naast onze oorspronkelijke; een instantie van het [*strangler fig*-patroon](https://martinfowler.com/bliki/StranglerFigApplication.html "'Strangler Fig', Martin Fowler").)


Daarna was het tijd voor productie. De vraag was nu: dupliceren we de [Bicep](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/ "'Bicep documentation', Microsoft documentatie")-bestanden van onze acceptatieomgeving, of parameteriseren we die bestanden zodat ze voor beide omgevingen werken?


## Complexiteit


Ik ben een ontwikkelaar, ik ben opgegroeid met [DRY](/tags/dry/ "Blogs met de tag 'DRY'") -- *Don't Repeat Yourself* --, dus mijn eerste omgeving was: parameteriseren natuurlijk! Maar tot mijn verbazing pleitte onze contactpersoon van de externe partij voor duplicatie. Parameteriseren zou de complexiteit van de code te zeer richting ononderhoudbaarheid stuwen.


Maar in het ideale geval, wierp ik tegen, verschillen de onderdelen van onze infrastructuur alleen in hun *postfixes*: `acc` versus `prod`. In het ideale geval wel, gaf hij toe, maar de praktijk wijst uit dat het nooit zo eenvoudig is. En de trucjes die ervoor nodig zijn één bron van waarheid te houden, hoewel individueel misschien insignifant, stapelen zich snel op.


Duplicatie betekent: *what you see is what you get.* Geen mentale gymnastiek benodigd: je hoeft maar naar de Bicep van `prod` te kijken om te zien wat er op productie staat.


## Verandering


Maar, verdedigde ik, als ik iets aan moet passen aan de infrastructuur, dan moet ik het op twee plekken doen. Als ik het op één van beide vergeet, heb ik een probleem. Dat klopt, knikte hij, maar als de infrastructuur eenmaal staat, dan zul je er over het algemeen niet veel meer aan hoeven doen.


Op dat moment realiseerde ik me dat de Dev- en Ops-wereld twee heel verschillende opvattingen van tijd kennen. Code verandert continu. Wij rollen [wel tien keer per dag](/tags/continuous-deployment/ "Blogs met de tag 'continuous deployment'") een nieuwe versie van onze codebase uit. Het is dit gegeven dat duplicatie van informatie een obstakel maakt voor de onderhoudbaarheid van de code.


Maar hoe vaak verandert de infrastructuur? Maandelijks? Wekelijks? Niet tien keer per dag, dat in elk geval niet. En vanwege dat lagere tempo, kun je je veroorloven informatie te dupliceren. Wanneer de tijdschaal langer wordt, verschuift het zwaartepunt van de notie van onderhoudbaarheid van *het introduceren van complexiteit ter voorkoming van inconsistenties* naar *het eenvoudig kunnen controleren op inconsistenties*.


Daar komt nog bovenop dat we in code relatief vrij zijn te kiezen waar we onze informatie (al dan niet gedupliceerd) onderbrengen. Het feit dat op *deze* plek in de code *die* informatie te vinden is, impliceert op geen enkele manier dat op *die* plek niet dezelfde of soortgelijke informatie bestaat. Maar wanneer het om omgevingen gaat, is de context veel eenvoudiger: wat voor `acc` geldt, geldt *mutatis mutandis* ook voor `prod`. Het is te allen tijde duidelijk waar welke informatie zich bevindt en zou moeten bevinden.


## Praktijk


Ik zal je bekennen: helemaal overtuigd was ik nog niet. Maar ik ben niet zo ijdel te denken dat ik als eenvoudige ontwikkelaar meer weet over het onderhoudbaar houden van infrastructuur dan een doorgewinterde Ops'er.


Bovendien, dit argument dient niet beslecht te worden in een uitwisseling van theoretische argumenten. De praktijk zal uitwijzen of de codeduplicatie in onze infrastructuur een probleem vormt of niet. Zo ja, dan kunnen we nog altijd kijken naar consolidatie en parameterisatie. 


Zo niet, dan blijkt DRY een contextgevoeliger advies dan ik op voorhand dacht -- en ben ik een inzicht rijker en een illusie armer.