---
title: "De bouwmetafoor"
author: "Karl van Heijster"
date: 2025-01-31T10:42:24+01:00
draft: true
comments: true
tags: ["boeken", "mentaal model", "software architect (rol)", "software ontwikkelaar (rol)"]
summary: "Softwareontwikkeling is geen constructieproces. Het bouwen (lees: "bouwen" -- *bouwen* is een metafoor) van een applicatie is iets fundamenteel anders dan het bouwen van een huis."
---

*(De volgende gedachten ontleen ik aan [Mark Seemanns](https://blog.ploeh.dk/)* [Code That Fits in Your Head](https://www.oreilly.com/library/view/code-that-fits/9780137464302/ "'Code That Fits in Your Head: Heuristics for Software Engineering', Mark Seemann, O'Reilly Media")*.)*


Softwareontwikkeling is geen constructieproces. Het bouwen (lees: "bouwen" -- *bouwen* is een metafoor) van een applicatie is iets fundamenteel anders dan het bouwen van een huis.


{{< asterisk >}}


Een constructieproces heeft een begin- en een eindpunt. Wanneer een huis gebouwd is, gaan mensen erin wonen. Dan komt het in de onderhoudsfase terecht. Het gros van het werk is op dat moment achter de rug, wat rest is slechts lapwerk als de situatie erom vraagt. De kosten van de initiële fase zijn vele malen hoger dan de kosten van de onderhoudsfase.


Het ontwikkelen van een softwaresysteem heeft misschien wel een begin -- maar zeker geen eindpunt. Succesvolle softwareproducten worden tot een onbepaalde tijd doorontwikkeld. 


Het gros van het werk in softwareontwikkeling bevindt zich niet in de initiële fase. Het is niet zo, dat als de software eenmaal live gaat (*viz.* als het huis bewoond wordt), dat er dan nog slechts lapwerk op de backlog staat. Integendeel, vanaf dat moment start het eigenlijke werk pas echt. Een applicatie kan wezenlijk van aard veranderen zodra gebruikers er mee aan de slag gaan.[^1]


[Kent Beck](https://www.kentbeck.com/) merkt in [*Tidy First?*](https://www.oreilly.com/library/view/tidy-first/9781098151232/ "Kent Beck, 'Tidy First?: A Personal Exercise in Empirical Software Design', O'Reilly Media, 2023") op dat de grootste kosten van softwareontwikkeling niet zitten in de korte initiële fase, waarin een feature zijn levenslicht vindt. De kosten van software kunnen praktisch gelijk worden gesteld aan de prijs die het kost de software te veranderen. 


De "onderhoudsfase" (als je het al zo wil noemen) van software verschilt fundamenteel van de onderhoudsfase van een bouwproject.


{{< asterisk >}}


Een constructieproces verloopt aan de hand van fasen. Eerst wordt een huis ontworpen -- dat doet een architect. Daarna wordt het huis gebouwd -- dat doen de bouwvakkers. Het werk van de architect en de bouwvakkers verschilt fundamenteel van aard. De architect is vooral met zijn hoofd bezig, de bouwvakkers vooral met hun handen.


Het feit dat we als softwareontwikkelaars ook [architecten](/tags/software-architect-rol/ "Blogs met de tag 'software architect (rol)'") kennen, toont niet aan dat softwareontwikkeling een constructieproces is. Het toont slechts aan dat we de metafoor van een constructieproces gebruiken om ons eigen werk te duiden.


De metafoor verleidt ons om te zeggen: de softwarearchitect is verantwoordelijk voor het ontwerp van het systeem. Wat betekent dat voor de programmeurs? Die zijn verantwoordelijk voor het bouwen. Dus zij zijn de bouwvakkers in dit mentale model. Hun werk wordt dan: het in de praktijk brengen van het ontwerp van de architect.


Maar de metafoor zet ons op een verkeerd spoor. Softwareontwikkeling is geen handenwerk maar hoofdwerk. Wie programmeren platslaat tot "het ontwerp omzetten in code", loopt onvermijdelijk tegen problemen aan. (Tenzij het ontwerp gedetailleerd genoeg was om automatisch in code te kunnen worden omgezet, en in dat geval is de programmeur überhaupt overbodig.) Programmeren vraagt om analyse, inzicht, creatief vermogen.


Dat wat correspondeert aan de bouwfase, is in de softwareontwikkeling een geautomatiseerde stap. Het is het compileren van de code, de *build* (nota bene!). Software is geen fysiek product: handenwerk kent softwareontwikkeling daarom niet.


{{< asterisk >}}


Software is geen fysiek product, het ontwikkelen ervan hoeft daarom geen rekening te houden met de fysieke werkelijkheid. Wie een huis bouwt, kan pas met het dak beginnen nadat de fundering is gelegd.


Wat is de fundering in softwareontwikkeling? De database. -- En het dak? De *user interface*. -- Moet je beginnen met het ontwerp van de database, voordat je kunt beginnen aan de UI? Nee hoor.


Sterker nog: vaak begint softwareontwikkeling bij het schetsen van schermontwerpen, of het maken van een prototype dat nog geen datapersistentie kent. Dat ontwerp wordt gepresenteerd aan eindgebruikers om feedback te kunnen krijgen op dat mate waarin dat ontwerp een oplossing voor hun probleem vormt. Je kunt in software beginnen met het dak voordat je überhaupt nog maar begint te denken aan de fundering.


{{< asterisk >}}


Het bouwen van een huis *moet* in fasen verlopen, omdat het bouwen van een huis een kostbare aangelegenheid is. Wie zonder helder doel een huis begint te bouwen, halverwege erachter komt dat 'ie een ontwerpfout heeft gemaakt, het huis sloopt en met een nieuw idee begint -- is waanzinnig. Toch is dat precies hoe softwareontwikkeling eruit ziet.


Wie een gefaseerde aanpak van software voorstaat, ziet over het hoofd dat software bouwen *geen* kostbare aangelegenheid is. Software kan gecompileerd worden met een druk op de knop. Dat biedt ruimte voor experiment en iteratie. Er is geen noodzaak voor een gefaseerde aanpak.


Softwareontwikkeling is geen constructieproces, want softwareontwikkeling is geen fysiek proces. De bouwmetafoor vervormt ons zelfbegrip. Wat wij ontwikkelaars doen, is geen bouwen. Het is ontwerpen.


[^1]: [Gojko Adzic](https://gojko.net/) noemt een extreme variant van dat fenomeen "*lizard optimization*", hij schreef er een [boek](https://leanpub.com/lizardoptimization "Gojko Adzic, 'Lizard Optimization: Unlock Product Growth by Engaging Long-Tail Users', LeanPub") over. Hij en [Dave Farley](https://www.continuous-delivery.co.uk/) bespreken het in [deze aflevering](https://open.spotify.com/episode/3c8QzJEPZEhJrmnMEJNYkV?si=91fd37553beb4e83) van de [GOTO Book Club](https://gotopia.tech/bookclub?page=0).
