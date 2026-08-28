---
title: "Voorbeeldarchitectuur"
author: "Karl van Heijster"
date: 2026-08-28T08:46:38+02:00
draft: true
comments: true
tags: ["code reviews", "eenvoud", "leercultuur", "procesverbetering", "samenwerking", "software architect (rol)", "teamcultuur"]
summary: "Een collega in een ander team is bezig een oude applicatie te vernieuwen. Hij een andere senior en ik om zijn opzetje voor een nieuwe structuur te reviewen. Zelf had ik, merkte ik, geen sterke meningen over de code -- of liever: de implementatie. Zit er een goed vangnet omheen? Dan geloof ik het wel. Ik had tegen het eind van de sessie één vraag: \"Is de complexiteit van de code in verhouding met de complexiteit van het probleem?\""
---

Een collega in een ander team is bezig een [oude applicatie](/tags/legacy-code/ "Blogs met de tag 'legacy code'") te vernieuwen. Hij een andere senior en ik om zijn opzetje voor een nieuwe structuur te [reviewen](/tags/code-reviews/ "Blogs met de tag 'code reviews'"). Mijn collega nam de muis en grasduinde in de code. "Waarom een apart project voor de interfaces? Waarom niet de interfaces in het project zelf?" "[*Vertical slices*](https://www.jimmybogard.com/vertical-slice-architecture/ "'Vertical Slice Architecture', Jimmy Bogard"), zie ik. Mooi." "Hier gebruiken jullie een [*result*-patroon](https://en.wikipedia.org/wiki/Result_type "'Result type', Wikipedia")? Daar zijn wij juist vanaf gestapt." Dat soort dingen.


Zelf had ik, merkte ik, geen sterke meningen over de code -- of liever: de implementatie. Zit er een goed [vangnet](/blog/22/09/tests-als-vangnet/ "'Tests als vangnet'") omheen? Dan geloof ik het wel. Wie zijn code opbouwt gesteund door een goede [test](/tags/testen/ "Blogs met de tag 'testen'") suite, kan met de structuur nog alle kanten op. Ik had tegen het eind van de sessie één vraag: "Is de [complexiteit](/tags/complexiteit/ "Blogs met de tag 'complexiteit'") van de code in verhouding met de complexiteit van het probleem?"


## Beste simpele systeem voor nu


Niet toevallig hadden we twee weken eerder [Dan Norths](https://dannorth.net/) [*Best Simple System for Now*](https://dannorth.net/blog/best-simple-system-for-now/ "'Best Simple System for Now', Dan North")[^1] gelezen bij de [boekenclub](/tags/boekenclub/ "Blogs met de tag 'boekenclub'"). Zijn these is eenvoudig: bouw een zo eenvoudig mogelijk maar kwalitatief voldoende systeem precies doet wat het nu moet doen. Op het moment dat je het uit moet breiden, zal duidelijk worden wat je waar moet aanpassen om die uitbreiding te kunnen ondersteunen. Je bouwt dan een nieuw zo goed mogelijk simpel systeem voor nu -- tot je uiteindelijk een zo goed mogelijk systeem hebt dat precies complex genoeg is om het probleem op te kunnen lossen.


Mijn collega gaf toe, sommige dingen waren *over-engineerd* voor wat het nu moest doen. Maar, verdedigde hij (en niet helemaal onterecht): we hebben de oude applicatie als voorbeeld, we weten dat zus en zo er aan zal komen! Bovendien, het doel van zijn opzet was niet louter de feature implementeren; het was een voorbeeld presenteren van hoe de code kon worden opgezet om de problemen van het oude systeem te voorkomen.


De zorgen die schuilgaan achter het willen opstellen van zo'n voorbeeldarchitectuur zijn valide. Een team dat het -- sluimerend -- niet eens is over de inrichting van een codebase, zal een chaotische rommel produceren. De ene ontwikkelaar stopt logica in *services*, de andere in [domeinobjecten](/tags/domeinmodel/ "Blogs met de tag 'domeinmodel'"), en de volgende propt alles in één lange [procedurele](/tags/procedureel-programmeren/ "Blogs met de tag 'procedureel programmeren'") [functie](/tags/functies/ "Blogs met de tag 'functies'"). Je wil vangrails introduceren om die situatie te voorkomen.


## Knellen


Het probleem met dit soort vangrails is dat ze op termijn altijd gaan knellen -- dat is althans mijn ervaring. Aan de start van ons eigen moderniseringstraject besloten wij een eenvoudige gelaagde applicatie op te zetten. Maar na verloop van tijd merkten we dat [we allerlei services geïntroduceerd hadden](/blog/26/04/entity-services-en-het-contextprincipe/ "'Entity services en het contextprincipe'") die de overstap naar *vertical slices* bemoeilijkten.


Het probleem was: voor we het wisten hadden we *enorm* veel code in de ene opzet, en zou een migratie op basis van voortschreidend inzicht veel tijd kosten. En de ontwikkelaars vroegen zich af waar het nu mis was gegaan: ze hadden toch immers netjes de voorbeeldarchitectuur gevolgd? Waarom was de complexiteit hen dan toch weer boven het hoofd gegroeid?


## Eindresultaat


Een voorbeeldarchitectuur presenteert een beeld: dit is hoe het moet worden. Het presenteert een visie van een eindproduct, van hoe de code eruit ziet. En het zegt dat dit een goede manier is. En dat is het waarschijnlijk ook, voor een bepaalde klasse van (deel)problemen. 


Maar er is een punt waarop vangrails veranderen in zijwieltjes. Een nieuwe feature implementeren wordt een invuloefening: volg het bestaande patroon en klaar. De zijwieltjes verhinderen het team te leren [luisteren naar de code](/blog/23/12/codefluisteren/ "'Codefluisteren'") en een oordeel te vormen wanneer de gekozen opzet niet (meer) dienend is. Je loopt het risico je oplossing te forceren tot een bepaalde structuur, in plaats van deze te laten suggereren door de vorm van het (deel)probleem.


Nota bene, dit is geen inherent probleem van voorbeeldarchitecturen; dit zegt iets over de [teamcontext](/tags/teamcultuur/ "Blogs met de tag 'teamcultuur'"), over de rol die het voorbeeld wordt toegediend en wordt gebruikt door het team.


## Evolutie


Het beeld van code dat hieraan ten grondslag ligt is statisch. Maar code is niet statisch, code [verandert](/tags/verandering/ "Blogs met de tag 'verandering'") constant. De vorm die de code vandaag heeft -- of waarvan we vandaag denken dat die het moet hebben --, het eindresultaat, is wat mij betreft niet bijster interessant. Waar het om gaat is de weg die je aflegt naar het eindresultaat.


Is het opstellen van een voorbeeldarchitectuur het juiste middel? Het suggereert dat er een senior ontwikkelaar in het team is die knopen doorhakt en verkondigt: kijk team, als je de boel zo opzet zit je altijd goed. Maar dat is nonsens, want je zal *nooit* altijd goed zitten. 


Wat je volgens mij wil bereiken, is dat het team, ook bij afwezigheid van de senior, zelf knopen door kan hakken en de boel op zo'n manier kan vormgeven dat het goed genoeg is voor nu. De senior die ik voor me zie, hakt geen knopen door, maar vraagt aan het team: op basis waarvan zouden we deze knoop weloverwogen door kunnen hakken? 


Hij of zij toont: we hoeven niet van tevoren te beslissen alles *zo* vorm te geven. We implementeren het eerst zo simpel mogelijk. En als we dat vervolgens *zo* [refactoren](/tags/refactoren/ "Blogs met de tag 'refactoren'"), dan openen we de weg naar die feature. 


## Proces


Anders gezegd: het doel zou moeten zijn het team te leren naar de code te luisteren, in plaats van vangrails aan te bieden die hen ertoe verleid te denken dat ze die vaardigheid niet te hoeven ontwikkelen.


Erop reflecterend, denk ik dat het mijn standpunt aardig samenvat: het gaat niet om de code, maar om het proces dat de code produceert. Daarom ben ik meer geneigd in te zetten op dingen als [continu testen](/tags/teststrategie/ "Blogs met de tag 'teststrategie'"), [*pair programming*](/tags/pair-programming/ "Blogs met de tag 'pair programming'") en kennisdeling, om ervoor te zorgen dat teamleden de juiste intuïties ontwikkelen om aan te voelen wanneer ze de code moeten refactoren, dan om me druk te maken om hoe de code nu feitelijk in elkaar steekt.


Het doel is voor mij niet (of niet meer?): [mooie code](/tags/clean-code/ "Blogs met de tag 'clean code'") produceren, maar een team produceren dat in staat is mooie code te produceren. Maar daarvoor moeten ze zelf leren nadenken over het probleem en de vorm van de code die dat probleem suggereert.


[^1]: Zijn [praatje met dezelfde titel op GOTO 2025](https://www.youtube.com/watch?v=u4Cv65F9DcY "'Best Simple System for Now • Daniel Terhorst-North • GOTO 2025', YouTube") is, zoals altijd bij North, ook erg de moeite waard.