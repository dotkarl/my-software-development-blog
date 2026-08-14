---
title: "Bug, hoge prio (een retrospectief)"
author: "Karl van Heijster"
date: 2026-08-14T08:45:37+02:00
draft: true
comments: true
tags: ["bugs", "communicatie", "continuous deployment", "management", "samenwerking", "teamcultuur", "trunk-based development"]
summary: "Ze zeggen, elk probleem is ook een communicatieprobleem. Dit is een communicatieprobleem. De ontwikkelaar communiceert niet. De tester communiceert niet. De ops'er communiceert niet. De enige die communiceert is de ontwikkelaar die, vanuit het bevindingenoverleg, trouw de bugs meldt. -- Maar: hoe communiceert de teamleider?"
---

Elk goed functionerend team lijkt op elkaar; elk slecht functionerend team is slecht op zijn eigen wijze.


{{< asterisk >}}


"Dus," ze gaat ervoor zitten, "we hebben een [bug](/tags/bugs/ "Blogs met de tag 'bugs'"), hoge prio. Ik zet 'm door. Op m'n vrije middag, hè! Ik zet 'm door. Ik vraag, wie pakt 'm op? \*\*\* zegt, ik pak 'm op. Mooi. De volgende dag, ik hoor er niks van. Ik vraag, hoe gaat het met de bug? Hij zegt, welke bug?"


"Hm! Bijzonder." 


"Ja. Ik zeg, die en die bug. Hij zegt, dat heb ik even gemist, ik pak 'm op. Oké. Hij aan de slag. Denk je dat ik iets hoor? Niks. Dus ik vragen, hoe gaat het met die bug? Hij zegt, hij zit in die en die [branch](/tags/branching/ "Blogs met de tag 'branching'"), samen met een paar andere fixes. Ik heb 'm doorgezet naar test. Denk je dat ik iets hoor van \*\*\*? Niks! Ik naar hem toe. Hoe gaat het met die bug? Ja ja, zegt 'ie, ik ben nog even bezig met iets anders, ik pak 'm zo dadelijk op. Nou, dan begint het bij mij te kriebelen, dat snap je wel. Ik zeg, het is een bug, hoge prio, pak 'm op. Hij pakt 'm op. Denk je dat ik wat hoor?" 


"Ik vermoed..." 


"Niks! Dus ik weer, hoe staat het met de bug? Ik heb 'm doorgezet, zegt 'ie, hij wordt nu uitgerold, zegt 'ie. Maar dan, de dag erop, komt \*\*\* in de lucht -- een week later zijn we nu al, hè! --, bevindingenoverleg met de eindgebruikers: waarom is die bug nog steeds niet gefixt? Nou, ik had het niet meer!"


"Je micromanaget. Maar waarom? Je bent teamleier, het is niet jouw verantwoordelijkheid om de bug te tracken. Je doet het omdat je vertrouwen geschaad is. Bij elke stap in het proces ben je teleurgesteld. Maar meer grip forceren is niet de oplossing. Door te micromanagen, trek je de verantwoordelijkheid weg van de plek waar die hoort."


"Ik merk dan ook," ze zucht, "ik ben toe aan vakantie. Hier word ik geen leuker persoon van."


{{< asterisk >}}


Ze zeggen, elk probleem is ook een [communicatieprobleem](/tags/communicatie/ "Blogs met de tag 'communicatie'"). Dit is een communicatieprobleem. De ontwikkelaar communiceert niet. De tester communiceert niet. De ops'er communiceert niet. De enige die communiceert is de ontwikkelaar die, vanuit het bevindingenoverleg, trouw de bugs meldt.


Maar: hoe communiceert de teamleider? Ze [rekent erop](/tags/aannames/ "Blogs met de tag 'aannames'") dat ze op de hoogte wordt gehouden over bugs, hoge prio. Is die verwachting helder gecommuniceerd? Weet iedereen wat te doen, wat zijn of haar rol is? Het team gedraagt zich niet alsof dat het geval is.


Misschien is de verwachting helder gecommuniceerd, misschien niet. Duidelijk is dat de verwachting opnieuw onder woorden moet worden gebracht: "Bij bugs met hoge prioriteit verwacht ik om de *x* uur een update. Maakt niet uit of er een oplossing is gevonden of niet, na zoveel tijd verwacht ik een update. Daarna verwacht ik een update als een fix inderdaad gevonden is. Ik verwacht een update als de tester de fix goed- of afkeurt. Ik verwacht een update als de bug is uitgerold." 


En ook: "Ik verwacht niet alleen dat *ik* daarover geïnformeerd wordt. Ik verwacht dat *de melder van de bug* daarover geïnformeerd wordt." En ook: "Ik verwacht dat er zus en zo gecommuniceerd wordt" -- bijvoorbeeld in een specifieke chatgroep.


Bestaat er een draaiboek voor dergelijke bugs? Wellicht loont het zich dit niet alleen te bespreken, maar ook [vast te leggen](/tags/documentatie/ "Blogs met de tag 'documentatie'").


{{< asterisk >}}


Maar dat is maar één vorm van communicatie. Let ook op de manieren waarop teamleden met elkaar communiceren -- of niet juist. De ontwikkelaar draagt het controleren van de fix over aan de tester. De tester draagt de uitrol over aan de ops'er. Elke overdracht introduceert frictie. De ontwikkelaar is klaar; de fix staat in de wacht tot de tester eraan toekomt. De tester is klaar; de fix staat in de wacht tot de ops'er hem uitrolt. 


En ondertussen wacht de melder van de bug tot hij verder kan.


Iedereen werkt op zijn eigen eilandje, losgesneden van de rest. In naam van efficiëntie, de reductie van ruis, is de onderlinge communicatie teruggebracht naar het minimum. [Verantwoordelijkheden](/tags/verantwoordelijkheid/ "Blogs met de tag 'verantwoordelijkheid'") zijn geformaliseerd, waardoor [samenwerken](/tags/samenwerking/ "Blogs met de tag 'samenwerking'") ontmoedigd wordt. Iedereen optimaliseert voor zijn eigen taak, zonder zicht te hebben op de efficiëntie en effectiviteit van [het geheel](/tags/systeemdenken/ "Blogs met de tag 'systeemdenken'").


Dit is geen team; elk teamlid is een radartje dat zo hard mogelijk draait, maar geen idee heeft of de machine in beweging komt.


{{< asterisk >}}


"Waar denk je dat het aan ligt?"


Ze kijkt naar het plafond, neemt even pauze, op adem komen.


"Ik weet niet. De pijn wordt niet gevoeld. Er zit geen consequentie aan dit gedrag."


"Ik ben blij dat jij het zegt, dan hoef ik het niet te zeggen."


We zijn te lief voor elkaar. Maar dat is niet lief voor elkaar.


{{< asterisk >}}


Het is een [cultureel](/tags/teamcultuur/ "Blogs met de tag 'teamcultuur'") probleem, natuurlijk, en cultuur is mensenwerk. Maar mensen worden gestuurd door systemen, hun context bepaalt hun gedrag.


De ontwikkelaar debugt en fixt op een aparte branch. De branch is het domein van de ontwikkelaar. Eenmaal klaar, rolt hij zijn codewijziging uit naar de testomgeving. De testomgeving is het domein van de tester. Eenmaal klaar, geeft hij een seintje aan de ops'er om de wijziging door te zetten. De productieomgeving is het domein van de ops'er.


In mijn team werken we niet zo. We hebben geen branches. We hebben geen testomgeving. We hebben alleen de productieomgeving. De productieomgeving is *ons* domein, van het hele team.


Omdat er geen branches zijn, moet ik als ontwikkelaar hard werken om de code in werkende staat te houden. Elke wijziging gaat gepaard met geautomatiseerde [tests](/tags/testen/ "Blogs met de tag 'testen'") -- nee, [elke wijziging *moet* gepaard gaan met geautomatiseerde tests](/blog/26/07/het-argument-van-zachtheid/ "'Het argument van zachtheid'"). De tests moeten worden geschreven [*tijdens*](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") de ontwikkeling. Er is geen controle achteraf. Er is alleen controle *nu*.


[We hebben geen tester](/blog/25/09/de-vergeten-tester/ "'De vergeten tester'"), maar als we er een zouden hebben, reken maar dat ik samen zou werken. Maar, nota bene, [niet om mijn werk te controleren](/blog/25/12/hoe-testers-kwaliteit-kunnen-ondermijnen/ "'Hoe testers kwaliteit kunnen ondermijnen'"); de [geautomatiseerde tests](/tags/unit-tests/ "Blogs met de tag 'unit tests'") controleren mijn werk. De samenwerking zou erin bestaan het probleem helder te krijgen. Reproduceert deze test de bug? Hoe zou het systeem moeten functioneren? Wijst deze bug ons op andere scenario's die we ook nog zouden moeten testen?


Daarna rollen we uit -- meteen. Zodra de fix naar onze main branch, [*trunk*](/tags/trunk-based-development/ "Blogs met de tag 'trunk-based development'"), is gepusht, wordt de code naar productie gebracht. Elke codewijziging is binnen een kwartier in handen van de eindgebruiker. Alles is erop ingericht deze [zo snel mogelijk](/blog/26/08/voorkomen-vs-genezen/ "'Voorkomen vs. genezen'") te kunnen helpen.


{{< asterisk >}}


"Zou team \*\*\* ook zo kunnen werken?" vraagt ze.


"Natuurlijk. Elk team kan zo werken. Het is een kwestie van een paar goede gewoontes in je werkwijze inbouwen, daarna is het een eitje. Maar je moet het wel willen."


"Wat is ervoor nodig?"


Een collega van me zegt het heel mooi: branches en test- en acceptatieomgevingen stellen je niet in staat [kwaliteit](/tags/kwaliteit/ "Blogs met de tag 'kwaliteit'") te verhogen; ze stellen je in staat kwaliteitsproblemen langer te *verbergen*. En dat stelt je -- hoera! -- in staat mooi weer te spelen.


Wie direct naar productie uitrolt, kan het zich niet veroorloven mooi weer te spelen. Die moet problemen *nu* aanpakken. En om dat aan te kunnen pakken, moet je elkaar aanspreken -- en durven aanspreken, en kunnen aanspreken.


"Je hebt mensen in het team, die kunnen er morgen mee beginnen. Die hebben het in zich, die vertrouw ik wel. Maar je hebt ook mensen, die vinden het wel prima zoals het nu gaat. En als je verklaart, vanaf nu gaan we naar [*continuous deployment*](/tags/continuous-deployment/ "Blogs met de tag 'continuous deployment'"), dan gaan zij [saboteren](/blog/25/05/sabotage/ "'Sabotage!'")."


"Nou!"


"Dat is niet omdat ze het slecht menen, dat bedoel ik niet. Dat is hoe gewoon hoe mensen zijn. Ze gaan proberen hun oude gewoontes overeind te houden. Omdat ze die gewend zijn, omdat ze dat fijn vinden. Maar de oude gewoontes werken niet in de nieuwe manier van werken. En die slechte gevolgen van die gewoontes kunnen ze dan niet verbergen." 


"Consequenties."


"Maar het systeem alleen is niet voldoende. Het staat of valt bij de mensen, de mensen moeten erin geloven. Je moet geloven, te midden van alle problemen die onvermijdelijk ontstaan in de overgangperiode, je moet geloven dat het *systeem* werkt en dat *wij* nu het probleem vormen. En daarvoor moet je elkaar aanspreken, helpen ook. En dan kom je toch weer uit op cultuur."


"Het is en blijft mensenwerk."
