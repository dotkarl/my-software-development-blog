---
title: "Voorkomen vs. genezen"
author: "Karl van Heijster"
date: 2026-06-20T09:29:47+02:00
draft: true
comments: true
tags: ["bugs", "continuous deployment", "test-driven development", "vertrouwen"]
summary: "Ze zeggen: voorkomen is beter dan genezen. Maar is dat wel zo? -- In mijn vorige team besteedden we veel tijd aan het voorkomen van bugs. Ontwikkelaars rolden hun werk uit op de testomgeving en testers liepen de functionaliteit na op zoek naar bugs. Zodra de tester akkoord was, werd het werk op de acceptatieomgeving uitgerold en liepen acceptanten uit de business de functionaliteit na op bugs. Zodra de acceptanten akkoord waren, werd het op naar de productieomgeving uitgerold -- en klaagden de gebruikers steen en been over alle bugs."
---

Ze zeggen: voorkomen is beter dan genezen. Maar is dat wel zo?


In mijn vorige team besteedden we veel tijd aan het voorkomen van [bugs](/tags/bugs/ "Blogs met de tag 'bugs'"). [Ontwikkelaars](/tags/software-ontwikkelaar-rol/ "Blogs met de tag 'software ontwikkelaar (rol)'") rolden hun werk uit op de testomgeving en [testers](/tags/tester-rol/ "Blogs met de tag 'tester (rol)'") liepen de functionaliteit na op zoek naar bugs. Zodra de tester akkoord was, werd het werk op de acceptatieomgeving uitgerold en liepen acceptanten uit de business de functionaliteit na op bugs. Zodra de acceptanten akkoord waren, werd het op naar de productieomgeving uitgerold -- en klaagden de gebruikers steen en been over alle bugs.


Ondanks drie lagen van controle -- door ontwikkelaars, testers en acceptanten --, bleken we niet in staat bugs te voorkomen.[^1] Bugs horen bij het leven, concludeerde ik, en dat geloof ik nog steeds. Betekent dat dat we geen enkele moeite moeten steken in het voorkomen van bugs? Natuurlijk niet. Maar we moeten erkennen dat we feilbaar zijn en dus zullen [falen](/tags/falen/ "Blogs met de tag 'falen'") in ons streven naar foutloze code.


## Twee soorten fixes


Maar: we mogen ons gerust afvragen of ons proces ter voorkoming van bugs ons helpt of in de weg zit. Want wat gebeurt er wanneer we aan de slag gaan met de door de gebruikers gemelde bugs? Allereerst beslissen we hoe ernstig de bug is. Als deze niet kritiek is, dan doorloopt de fix dezelfde route als hierboven beschreven: eerst naar de testomgeving, waar de tester test, dan naar de acceptatieomgeving, waar de acceptant test, en dan naar de productieomgeving. Al die tijd dat we bezig zijn met testen, zit de gebruiker met het ongemak van de bug.


Als de bug daarentegen wel kritiek is, dan moet er onmiddellijk gehandeld worden. Dan slaan we de gang naar de testomgeving over. We trekken een kopie van productie, rollen die uit op de acceptatieomgeving, fixen de bug daar. De tester kijkt er naar en als deze akkoord is, wordt de boel uitgerold op productie. 


Het voordeel is dat de gebruiker snel geholpen is. Het nadeel is dat deze afwijking van het proces -- waarbij de veiligheidsmaatregelen om fouten te voorkomen zijn afgeschaald -- stress veroorzaakt bij het ontwikkelteam. Om de snelheid van de oplossing op te krikken, leveren we in op zekerheid. De bugfixes die via deze route worden uitgerold, hebben [in het verleden](/blog/22/10/de-fix-die-productie-om-zeep-hielp/ "'De fix die productie om zeep hielp'") wel eens tot veel grotere bugs geleid. Achteraf kun je daar om lachen, maar op het moment is zoiets niet leuk.


Je zou de conclusie kunnen trekken: ook ernstige bugs moeten het geijkte proces volgen. En dat klopt -- helemaal, of juist helemaal niet. Het hangt er vanaf wat je het "geijkte proces" noemt.


## *Continuous deployment*


Het hierboven beschreven proces is geoptimaliseerd voor controle op fouten. In mijn huidige team hanteren we een ander proces, [*continuous deployment*](/tags/continuous-deployment/ "Blogs met de tag 'continuous deployment'"): elke commit wordt onmiddellijk uitgerold op de productieomgeving. 


Om continu te kunnen deployen, moet je zeker weten dat elke commit een werkende versie van het systeem vertegenwoordigd. Elke wijziging in gedrag moet daarom voorafgegaan worden door een geautomatiseerde test die bewijst dat het systeem inderdaad dat gedrag vertoont. Een systeem dat met [Test-Driven Development](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") (TDD) wordt ontwikkeld, hoeft niet per se minder fouten te bevatten dan een systeem dat op de "traditionele" manier wordt ontwikkeld (hoewel het in mijn ervaring wel degelijk minder fouten bevat). Een van de grote voordelen van TDD is dat het vastlegt wat het systeem in elk geval wél doet.


Maar tests bewijzen niet dat een systeem geen bugs bevat -- en kunnen dat ook niet.[^2] Ook met deze manier van werken, zullen er dus bugs doorheen glippen. Zoals ik zei, bugs horen bij het leven. De manier waarop deze worden afgehandeld, verschilt echter fundamenteel van de bovenstaande proces. Er hoeft namelijk geen onderscheid te worden gemaakt tussen kritieke en minder ernstige bugs. Elke bugfix volgt hetzelfde proces: je schrijft een test die de bug reproduceert, je zorgt dat de test slaagt, en je rolt de wijziging uit naar de productieomgeving.


*Continuous deployment* is geoptimaliseerd voor het repareren van fouten. De nadruk ligt op snel kunnen fixen, niet op voorkomen. Dat betekent niet dat voorkomen niet belangrijk is -- niet voor niks leggen we veel nadruk op het schrijven van tests. De wijsheid die in deze werkwijze gecodificeerd is, luidt: een bug is ernstiger naarmate de gebruiker er langer last van heeft. Hoe korter wij de tijd kunnen maken tussen het ontdekken van de bug en het repareren ervan, hoe minder ernstig de bug is. Optimaliseren voor genezen leidt dus tot minder ernstige bugs.


## In productie


Het systeem waar mijn team aan werkt, werd onlangs voor het eerst gebruikt in productie. Natuurlijk vonden de gebruikers onmiddellijk enkele bugs. Ze meldden deze aan ons, wij gaven aan ermee aan de slag te gaan. We reproduceerden de problemen met geautomatiseerde tests, lieten deze slagen, en rolden onze wijzigingen uit op de productieomgeving. Sommige hinderlijke bugs hadden we binnen een uur na melding opgelost. 


De gebruikers waren onder de indruk van hoe snel we hen konden helpen. Ze waren het gewend dat het melden van bugs gepaard ging met een langdurig proces, waarbij eerst moest worden bediscussieerd hoe ernstig de bug was, ja zelfs of het überhaupt wel een bug genoemd mocht worden waar ze hinder van ondervonden.[^3] Daarna zou het nog dagen tot weken kunnen duren voordat de problemen waren opgelost. Tegen die tijd hadden ze meestal al een *work around* gevonden -- hadden ze die *moeten* vinden -- om verder te kunnen. 


Sommigen van hen waren er cynisch van geworden en meldden problemen maar niet meer, tenzij ze onmogelijk waren om omheen te werken. Maar dat cynisme en wantrouwen naar de ontwikkelaars toe, is nergens voor nodig -- *als wij de problemen snel op kunnen lossen*. Als je fouten snel kunt repareren, is een bug niet het eind van de wereld, zelfs de kritieke bugs niet. 


Soms is genezen beter dan voorkomen. 


[^1]: In mijn praatje [*De vergeten tester*](/talks/de-vergeten-tester/) spreek ik uitgebreid over het antipatroon van de tester als controleur.

[^2]: "*Program testing can be used to show the presence of bugs, but never to show their absence!*" aldus [Edgser Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra "'Edgser W. Dijkstra', Wikipedia") in [*Notes on structured programming*](https://www.cs.utexas.edu/~EWD/ewd02xx/EWD249.PDF).

[^3]: In [deze blog](/blog/24/11/bugs-zijn-defecten/ "'Bugs zijn defecten'") schreef ik, enigszins ironisch: <blockquote><p>Of het een defect is of niet is afhankelijk van hoe we de correcte werking definiëren – en daarover kan verschil van mening bestaan. (...) Of iets een bug of een feature is, is ook een politieke vraag.</p></blockquote> <p>Uiteraard voel ik er weinig voor politiek te bedrijven over de rug van eindgebruikers en de problemen die *wij* hen bezorgen. Het is onze [verantwoordelijkheid](/tags/verantwoordelijkheid/ "Blogs met de tag 'verantwoordelijkheid'") hen te helpen, klaar.</p> Waarmee ik overigens niet beweer dat we ook hun voorgestelde *oplossingen* moeten overnemen.