---
title: "Bezwaren tegen continuous deployment"
author: "Karl van Heijster"
date: 2026-02-20T10:17:56+01:00
draft: true
comments: true
tags: ["continuous deployment", "continuous integration", "procesverbetering"]
summary: "*Continuous deployment* is: elke commit gaat meteen naar productie. Er is geen testomgeving, er is geen acceptatieomgeving; er zijn geen lang levende branches behalve de *main* branch, en die is gelijk met productie. -- Waanzin! wil je roepen, dat kan nooit werken! -- Oké. Waarom niet?"
---

*(Het onderstaande schreef ik ter voorbereiding op een praatje waarin reflecteer ik op mijn ervaringen met* [continuous deployment](/tags/continuous-deployment/ "Blogs met de tag 'continuous deployment'")*. Zie ook [deze blog](/blog/26/02/aantekeningen-over-continuous-deployment/ "'Aantekeningen over continuous deployment'"))*


{{< asterisk >}}


*Continuous deployment* is: elke commit gaat meteen naar productie. Er is geen testomgeving, er is geen acceptatieomgeving; er zijn geen [lang levende branches](/tags/feature-branching/ "Blogs met de tag 'feature branching'") behalve de *main* branch, en die is gelijk met productie.


-- Waanzin! wil je roepen, dat kan nooit werken!


Oké. Waarom niet?


{{< asterisk >}}


## Maar dan breekt productie constant!


Dit is een interessante tegenwerping, niet omdat deze iets zegt over *continuous deployment*, maar omdat deze iets zegt over de manier waarop je nu werkt. Blijkbaar werk je nu op zo'n manier dat de testomgeving zich constant in een gebroken staat bevindt. Om de haverklap introduceren jullie regressies en nieuwe functionaliteit werkt uitsluitend binnen de nauwe kaders van het *happy path*.


*Continuous deployment* maakt die dysfunctionaliteit zichtbaar. De maatregelen die je hebt geïntroduceerd tegen de dysfunctie, heeft haar alleen verborgen, maar de bron ervan in stand gehouden. De verschillende omgevingen en testers en businessacceptanten hebben de [kwaliteit](/tags/kwaliteit/ "Blogs met de tag 'kwaliteit'") van de geschreven software niet verhoogd.


*Continuous deployment* zal nooit een succes worden als je zo blijft werken zoals je nu werkt. De opdracht is dus: hoe kunnen we onze manier van werken zodanig aanpassen dat we onmiddellijk naar productie uit kunnen rollen zonder dat de boel breekt?


Dat kan: je werkt in minieme stapjes; bij elke stap onderhoud en breid je je geautomatiseerde testsuite uit; je [*pairt*](/tags/pair-programming/ "Blogs met de tag 'pair programming'") met collega's; je monitort je productieomgeving, en zorgt dat je altijd snel terug kunt rollen.


{{< asterisk >}}


## Maar dan komen onaffe features op productie te staan!


Inderdaad. Is dat erg?


Je denkt van wel, maar dat komt omdat je een *deployment* verwart met een *release* (zie ook [deze blog](/blog/25/12/trunk/ "'Trunk'")). Je kunt een feature deployen op productie, zonder deze beschikbaar te maken voor gebruikers. Het beschikbaar maken doe je pas als de feature voltooid is.


Er zijn verschillende manieren om dit te doen. [*Feature flags*](https://martinfowler.com/articles/feature-toggles.html "'Feature Toggles (aka Feature Flags)', Pete Hodgson @ MartinFowler.com") zijn waarschijnlijk de bekendste. Maar het kan nog eenvoudiger: roep de nieuwe code nog nergens aan (behalve in je tests), totdat de feature een zekere mate van voltooidheid heeft. Zodra dat het geval is, sluit je de nieuwe code aan op de rest van het systeem. Die laatste commit maakt dat je de feature releaset.


{{< asterisk >}}


## Maar PR's dan? Denk aan de codekwaliteit!


Er is een mooie quote van [Kief Morris](https://kief.com/), die luidt als volgt[^1]:


> *Using pull requests for code changes by your own team members is like having your family members go through an airport security checkpoint to enter your home. It’s a costly solution to a different problem.*


[Pull requests](/tags/pull-requests/ "Blogs met de tag 'pull requests'") (PR's) komen uit de wereld van [open source](/tags/open-source/ "Blogs met de tag 'open source'")-softwareontwikkeling en hebben daar hun rechtmatige plek. In de context van open source kunnen vreemden je code aan proberen te passen. Het is goed om veiligheidsmaatregelen in te bouwen tegen deze wijzigingen, omdat je de mensen die ze introduceren, niet kent.


In een team is het anders. Je kent de mensen waarmee je samenwerkt, jullie hebben ruwweg dezelfde context in jullie hoofd wat het probleem- en oplossingsdomein betreft. Als je erop staat met PR's te werken in deze context, dan is dat een teken dat je je collega's niet vertrouwt. *Dat* is een probleem dat je aan moet pakken.


Natuurlijk hoef je je collega's niet blind te vertrouwen. *Pair programming* is een uitstekend substituut voor PR's. In zekere zin is het zelfs een efficiëntere manier van code reviewen, omdat het doorlopend gebeurt en de reviewer niet uit zijn eigen context hoeft te breken en de jouwe van de grond af aan op moet bouwen.


Een tweede manier om de codekwaliteit hoog te houden is door continu te [refactoren](/tags/refactoren/ "Blogs met de tag 'refactoren'"), het liefst in *pairs*. Code vergaart geen kwaliteit doordat we er elkaar constant op bekritiseren, maar door haar constant aan te passen naar de nieuwste inzichten.


Bovendien, de kwaliteit heeft minder te lijden als er wordt gewerkt in kleine stapjes. Elk stapje biedt een rustpunt waarop de keuze kan worden gemaakt om op te ruimen voordat er een nieuw stapje wordt gezet.


{{< asterisk >}}


## Maar dan krijgen we mergeconflicten!


Ja. Er zullen altijd mergeconflicten zijn, in situaties waarin mensen los van elkaar aan een stuk code werken.


De vraag is: hoe ernstig is het mergeconflict? Als je lange tijd los van elkaar werkt op verschillende branches, dan zullen de mergeconflicten groot zijn en moeilijk op te lossen. Maar wanneer je op dezelfde branch werkt en continu integreert, dan zullen de mergeconflicten klein zijn: nooit groter dan je laatste commit. Zulke mergeconflicten zijn eenvoudig op te lossen en vormen dus niet echt een probleem.


{{< asterisk >}}


## Maar eerst moet de tester ernaar kijken!


Dit is interessant. Waarom moet de [tester](/tags/tester-rol/ "Blogs met de tag 'tester (rol)'") er eerst naar kijken? Blijkbaar omdat je niet zeker genoeg bent over de kwaliteit van je werk om dit te durven deployen. 


Erger nog, blijkbaar is de onzekerheid structureel. Hij is ingbakken in jullie werkwijze: als jij klaar bent, moet er iemand komen die gaat controleren of je je werk wel hebt gedaan. Zo te merken ben jij niet de enige die onzeker is over de kwaliteit van je werk!


Ook hier geldt: *continuous deployment* maakt dysfunctionaliteit zichtbaar. De zekerheid dat een tester je werk controleert, ontneemt je van de prikkel de kwaliteit van je werk te verhogen opdat deze controleslag niet meer nodig is.


Waarom ben je onzeker over je werk? Waarschijnlijk omdat je in te grote stappen werkt. Het is je vergeven als je de complete feature, die je in één klap probeert te mergen, niet meer kan overzien. Werken in heel veel, veel kleinere stappen brengt focus aan in je werk: deze commit beoogt alleen *dit* te bereiken, en ik weet zeker dat het werkt, want *daar* is een test voor geschreven.


Een andere reden om onzeker te zijn over je werk is dat je überhaupt te weinig aan testautomatisering doet (of aan monitoring achteraf). Breng die lacunes op orde, doe dat samen met je tester, en de noodzaak voor de controle achteraf wordt gestaag minder groot.


Dat gezegd hebbend, met meer geavanceerde implementaties van *feature flags* kun je de feature in kwestie ook alleen voor de tester beschikbaar maken.


{{< asterisk >}}


## Maar datamigraties dan?


Je vindt [datamigraties](/tags/datamigratie/ "Blogs met de tag 'datamigratie'") spannend, omdat je ze groot maakt. Maar ook datamigraties kun je opknippen in kleine stappen. Hiervoor kun je het [*strangler fig*-patroon](https://martinfowler.com/bliki/StranglerFigApplication.html "'Strangler Fig', Martin Fowler @ MartinFowler.com") gebruiken (net zoals bij eigenlijk elke grotere refactoring).


Dat ziet er ongeveer zo uit. Stel, je wil het type van een kolom wijzigen. Allereerst, voeg een nieuwe kolom toe van het beoogde type, maak deze nullable (en commit)​. Schrijf data naar oude én nieuwe kolom (en commit). Lees data uit nieuwe kolom; gebruik oude als fallback bij null-waarden (commit)​. Migreer oude data naar nieuwe kolom (commit)​. Valideer dat, al dan niet *run time*, dat de data die je uit de nieuwe kolom leest, de juiste waarden hebben. Zo niet, val dan terug op de oude waarden (commit). Maak de nieuwe kolom niet-nullable (commit)​. Lees alleen uit nieuwe kolom (commit)​. Schrijf alleen naar nieuwe kolom (commit)​. Verwijder oude kolom (commit).


Dat is niet complexer dan de grote datamigraties die je gewend bent, het is slechts explicieter. Elk klein stapje is veilig, en het geheel daarom ook.


{{< asterisk >}}


## *Continuous deployment* is onverantwoord!


Dit is niet echt een argument, het is een uitroep van zorg. Maar het is waar: je kunt *continuous deployment* op een onverantwoorde en een verantwoorde manier doen. De onverantwoorde manier laat de geijkte manier van werken ongewijzigd en gooit daar continue deployments overheen. De verantwoorde past de manier van werken aan op de nieuwe situatie. Ik zou pleiten voor de verantwoorde manier.


{{< asterisk >}}


## Het risico is te groot!


Nee klopt: het zou ook waanzin zijn om in één keer van de oude manier van werken over te gaan naar *continuous deployment*. Dat conflicteert ook met de filosofie van veilige kleine stapjes.


Er is een kleiner stapje dat je kunt nemen: stap over naar [*continuous integration*](/tags/continuous-integration/ "Blogs met de tag 'continuous integration'") met [*trunk-based development*](/tags/trunk-based-development/ "Blogs met de tag 'trunk-based development'"). Dat stelt je in staat om te oefenen met het nemen van kleine stappen die de testomgeving niet breken. Als je dat als team in de vingers hebt, kun je de testomgeving weghalen: de noodzaak daarvan is dan in de loop der tijd verdwenen.


{{< asterisk >}}


## We zijn nog niet klaar voor *continuous deployment*!


Dat klopt.


Maar je zult er ook nooit klaar voor worden, als je het niet probeert.


Gedrag volgt structuur, niet andersom.


Als je claimt dat je eerst je gedrag moet veranderen, voordat je *continuous deployment* kan implementeren, dan stel je voor om: een heel team tegen de huidige manier van werken in te laten werken, om, als ze hebben bewezen dat ze systematische prikkels kunnen negeren, systematische prikkels te introduceren die hun belonen voor het gedrag dat ze nu al vertonen.


Ja. Dat is ook een manier om het te doen.


Maar, als ik een suggestie zou mogen doen, zou ik beginnen met het systeem zo inrichten dat de prikkels het gedrag belonen dat je wil zien. Je zou het kunnen overwegen.


[^1]: Ik hoorde het citaat voor het eerst in een praatje van [Clare Sudberry](https://www.linkedin.com/in/clare-sudbery-she-her-35939540/) op [GOTO Amsterdam](https://gotoams.nl/), zie [deze blog](/blog/23/09/doe-je-wel-echt-aan-continuous-integration/ "'Doe je wel écht aan continuous integration?'").