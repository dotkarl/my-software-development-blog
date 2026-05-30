---
title: "De edele kunst van het pull request, Redux"
author: "Karl van Heijster"
date: 2026-05-29T07:45:19+02:00
draft: true
comments: true
tags: ["code reviews", "presenteren", "pull requests", "samenwerking"]
summary: "Het praatje dat ik in 2024 op T-DOSE gaf, *The art of the pull request*, is onlangs op YouTube verschenen. Gezien mijn houding naar *pull requests* de afgelopen twee jaar is veranderd, leek het me een mooie gelegenheid om die ideeën nog eens te overdenken."
---

Het praatje dat ik in 2024 op [T-DOSE](https://t-dose.org/) gaf, [*The art of the pull request*](/talks/de-edele-kunst-van-het-pull-request/), is onlangs op [YouTube](https://www.youtube.com/) verschenen. Gezien mijn houding naar [*pull requests*](/tags/pull-requests/ "Blogs met de tag 'pull requests'") (PR's) de afgelopen twee jaar is veranderd, leek het me een mooie gelegenheid om die ideeën nog eens te overdenken.


{{<youtube id="f0fi25s5d8M" title="Karl van Heijster - The art of the pull request @ T-DOSE 2024" >}}
<br>


De centrale vraag van het praatje is: wat is ervoor nodig om code[^1] te kunnen [beoordelen](/tags/code-reviews/ "Blogs met de tag 'code reviews'")? Of, anders gezegd, wat moet je als schrijver van code communiceren aan een reviewer om deze zo goed mogelijk in staat te stellen zijn taak te doen? Het antwoord is drieledig. Ten eerste moet duidelijk zijn *waarom* de code überhaupt bestaat. Ten tweede moet duidelijk zijn *wat* de code doet. Ten derde moet duidelijk zijn *hoe* de code dat doet.


## Communiceren


Deze drie aspecten zijn naar hun aard heel verschillend en moeten daarom op verschillende manieren worden gecommuniceerd. Het *waarom* van een stuk code laat zich het best vangen in proza. Dit kan daarom het best worden gecommuniceerd in de metadata van het PR, oftewel in de titel en omschrijving. Het *wat* dient te worden vastgelegd in de bijbehorende [tests](/tags/testen/ "Blogs met de tag 'testen'"). Deze [documenteren](/blog/22/09/tests-als-documentatie/ "'Tests als documentatie'") het gedrag van de code. Het *hoe*, ten slotte, is de code zelf. De delen van de code dienen, door het gebruik van heldere [abstracties](/tags/abstracties/ "Blogs met de tag 'abstracties'"), zo helder mogelijk te communiceren wat hun rol is in het geheel. (Zie ook [deze blog](/blog/24/12/de-filosofische-geschiedenis-van-een-ontwerpkeuze/ "'De filosofische geschiedenis van een ontwerpkeuze'").)


De schrijver van code moet uitleggen waarom de code bestaat, wat deze doet en waarom deze het doet. Dat betekent dat elke codewijziging, vastgelegd in een PR, gepaard moet gaan met een korte uiteenzetting van de bestaansreden van de code en met een set geautomatiseerde tests. Wanneer één van beide aspecten ontbreekt (ik veronderstel dat de daadwerkelijke codewijziging altijd aanwezig is) of ondermaats is, dit onmiddellijk een reden is om het PR tegen te houden. 


De volgorde van de drie aspecten is niet toevallig gekozen. Het *waarom* is belangrijker dan het *wat* en het *wat* is belangrijker dan het *hoe*. Immers, als code geen bestaansrecht heeft, dan is het irrelevant wat het doet. En als het niet doet wat het moet doen, dan is het irrelevant hoe het dat doet. Een reviewer van code werkt dus van het *waarom* naar het *wat* naar het *hoe*: hij bekijkt eerst de titel en metadata, dan de tests en dan pas de implementatie zelf.


Tot dusver sta ik nog steeds achter de ideeën zoals uiteengezet in de presentatie. Deze ideeën zijn behoorlijk fundamenteel van aard -- ze gaan over het beoordelen van code in het algemeen -- en zullen daarom niet gauw wijzigen. (Daarmee is overigens niet gezegd dat ze niet controversieel zijn. Tot de dag van vandaag moet ik collega-ontwikkelaars er regelmatig op wijzen dat *elke* wijziging in het gedrag van een systeem gepaard moet gaan met een set geautomatiseerde tests die communiceren wat die gedragswijziging inhoudt. Zelfs in een wereld waarin [unit tests](/tags/unit-tests/ "Blogs met de tag 'unit tests'") en [*continuous delivery*](/tags/continuous-delivery/ "Blogs met de tag 'continuous delivery'") mainstream zijn, blijkt het moeilijk voor mensen om oude gewoontes af te schudden.)


## Antipatroon


De grootste omslag in mijn denken heeft plaatsgevonden in het *framing device* dat ik gebruik om die fundamentele ideeën te presenteren: het PR. De afgelopen jaren ben ik tot de conclusie gekomen dat het PR -- *in mijn context* -- een antipatroon is. [Eerder](/blog/26/05/conservatieve-verandering/ "'Conservatieve verandering'") verwees ik al naar [deze blog](https://a4al6a.substack.com/p/stop-using-pull-requests "'Stop Using Pull Requests', Andrea's Substack") van [Andrea Laforgia](https://substack.com/@a4al6a "Andrea Laforgia @ Substack"), waarin wat mij betreft de definitieve doodsteek wordt gegeven aan het gebruik van PR's binnen een softwareontwikkelteam. 


PR's vormen een *stage gate* waarin wijzigingen worden tegengehouden totdat ze expliciet zijn goedgekeurd door iemand anders in het team. Ze introduceren daarmee frictie in het ontwikkelproces. Wijzigingen blijven langere tijd in de wachtrij staan totdat ze worden geïntegreerd. Dit nodigt uit tot het *batchen* van kleine wijzigingen. Dit vergroot vervolgens de wachttijd, omdat een reviewer nu eenmaal meer tijd kwijt is aan grotere codewijzigingen dan aan kleine. Het is voor sommige teams niet ongewoon om te allen tijde een stuk of tien PR's open te hebben staan. Zo lang deze wijzigingen in de wachtrij staan, zijn ze een last voor de ontwikkelaars en leveren ze geen waarde voor de eindgebruiker.


De introductie van een *stage gate* introduceert een aanname van wantrouwen in het team. Het communiceert aan de teamleden: jouw codewijziging wordt per definitie *niet* geïntegreerd, totdat we er zeker van zijn dat deze goed is. Je kunt je afvragen: is dit hoe je wil dat teamleden naar hun collega's en hun werk kijken? Dit lijkt misschien een subtiel punt, maar de implicaties ervan zijn verstrekkend. Bijvoorbeeld, de onbewuste aanname dat andermans code geweigerd moet worden, neemt de directe prikkel weg om de kwaliteiten van de ander te verbeteren, bijvoorbeeld door middel van [*pair programming*](/tags/pair-programming/ "Blogs met de tag 'pair programming'").


Dat brengt me bij het laatste punt. PR's stellen in staat om allemaal indvidueel aan hun "eigen" feature te gaan werken, op hun eigen eiland zogezegd. Liefhebbers van parallellisatie zullen dat als een voordeel zien, maar dit is *niet* wenselijk! In een goed functionerend team wordt er juist veel [samengewerkt](/tags/samenwerking/ "Blogs met de tag 'samenwerking'"). Hierdoor versterken de teamleden elkaar met hun unieke kwaliteiten en is iedereen op de hoogte is van wijzigingen in de codebase. PR's komen nauwelijks tegemoet aan dat eerste voordeel, daarvoor komt de codereview te laat. Ze vormen daarnaast een inefficiënte invulling van dat tweede, omdat in het PR de context grotendeels is verdwenen die de ontwerpbeslissingen heeft geïnformeerd.


## Open source


Maar daarmee wil ik niet zeggen dat PR's een antipatroon *an sich*. Er zijn contexten waarin een *stage gate* wenselijk is, omdat de schrijver van de code met recht gewantrouwd mag en moet worden. [Open source](/tags/open-source/ "Blogs met de tag 'open source'") (OS)-ontwikkeling is het paradigmatisch voorbeeld van zulk een context. Anders dan bij teamgefocuste ontwikkeling, kennen de ontwikkelaars die bijdragen aan OS-projecten elkaar niet altijd persoonlijk. Vaak bevinden ze zich niet eens in hetzelfde land of op hetzelfde continent! Bovendien, in principe kan iedereen een bijdrage doen aan een OS-project, niet alleen de cirkel van regelmatige *contributors*. 


Dit gegeven maakte mijn praatje uitermate geschikt voor T-DOSE, dat immers staat voor het Technical Dutch Open Source Event. Maar buiten expliciete OS-conferenties of meet-ups zul je mij het bovenstaande praatje niet meer horen geven, althans niet in deze vorm. Het PR mag dan de geijkte "samenwerkings"-vorm binnen de meeste teams zijn, dat is een status quo waar ik liever niet meer aan bijdraag. Liever pleit ik voor *pair programming*, [*test-driven*](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") en [*trunk-based development*](/tags/trunk-based-development/ "Blogs met de tag 'trunk-based development'").


[^1]: Dat kan zowel betekenen: "een nieuw stuk code" of "een wijziging in een bestaand stuk code". De meeste PR's zullen de laatste categorie betreffen.