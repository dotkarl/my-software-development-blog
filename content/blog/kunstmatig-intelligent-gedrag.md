---
title: "(Kunstmatig) intelligent gedrag"
author: "Karl van Heijster"
date: 2025-07-11T01:21:03+02:00
draft: true
comments: true
tags: ["boeken", "filosofie", "kunstmatige intelligentie"]
summary: "Het immitatiespel van Alan Turing, ook wel bekend als de Turingtest, werd gedurende zijn eerste receptie als een behavioristisch argument geïnterpreteerd. Het gedachte-experiment werd opgevat als een voorstel om intelligentie te definiëren als het kunnen voeren van een gesprek."
---

*(Gedachten naar aanleiding van de eerste twee hoofdstukken van [Bernardo Gonçalves](https://bgoncalves.github.io/)'* [The Turing Test Argument](https://www.routledge.com/The-Turing-Test-Argument/Goncalves/p/book/9781032291581 "Bernardo Gonçalves, 'The Turing Test Argument', Routledge 2025")*.)*


Het immitatiespel van [Alan Turing](https://plato.stanford.edu/entries/turing/ "'Alan Turing', Stanford Encyclopedia of Philosophy"), ook wel bekend als de [Turingtest](https://en.wikipedia.org/wiki/Turing_test "'Turing test', Wikipedia"), werd gedurende zijn eerste receptie als een behavioristisch argument geïnterpreteerd. Het gedachte-experiment werd opgevat als een voorstel om intelligentie te definiëren als het kunnen voeren van een gesprek.


{{< asterisk >}}


Dit valt daarvoor te zeggen: om een geanimeerd, om een *menselijk* gepsrek te kunnen voeren, heb je enige intelligentie nodig. -- Waarom? -- Omdat een gesprek alle kanten op kan gaan. Om een gesprek te kunnen voeren, moet je kunnen luisteren naar wat de ander zegt en daar op kunnen reageren. Het vraagt van je te improviseren, want je weet op voorhand niet wat de ander gaat zeggen.


-- Maar dat geldt natuurlijk niet voor elk gesprek. Veel gesprekken worden gevoerd aan de hand van een vaststaand script:


> "Hoe gaat het?" 
> <br>
> "Goed. Druk. En met jou?" 
> <br>
> "Ja. Ook. Druk."


Als ik iemand vraag hoe het gaat, en diegene zegt: "Wel oké", dan ga ik ervan uit dat het vreselijk slecht gaat met diegene. Zo rigide is het script.


{{< asterisk >}}


Ik denk dat de meeste mensen zouden zeggen dat de huidige generatie van [*large language models*](https://en.wikipedia.org/wiki/Large_language_model "'Large language model', Wikipedia") (LLMs) voor de Turingtest zouden slagen. Maar ze slagen in zekere zin ook niet. [ChatGPT](https://chatgpt.com/) blijft netjes antwoord geven op mijn prompts, ook wanneer ik de domste vragen blijf stellen. Een echt mens zou op een gegeven moment zeggen: "Karl, nou is het wel even genoeg geweest." Dat geeft weg dat de LLM niet menselijk is.


Mensen raken vermoeid, machines niet. Mensen vinden elkaar vermoeiend, machines niet. -- Maar dat bewijst alleen dat een machine niet menselijk is. Het bewijst niet dat een machine niet intelligent is.


{{< asterisk >}}


Er zijn -- grofweg -- twee soorten [behaviorisme](https://plato.stanford.edu/entries/behaviorism/ "'Behaviorism', Stanford Encylopedia of Philosophy"): [psychologisch behaviorisme](https://en.wikipedia.org/wiki/Psychological_behaviorism "'Psychological behaviorism', Wikipedia") en [filosofisch behaviorisme](https://nl.wikipedia.org/wiki/Filosofisch_behaviorisme "'Filosofisch behaviorisme', Wikipedia"). 


De eerste baseert zich op het werk van [B.F. Skinner](https://en.wikipedia.org/wiki/B._F._Skinner "'B. F. Skinner', Wikipedia") en zegt: bij het (wetenschappelijk) bestuderen van psychologische verschijnselen, dienen we ons te beperken tot observeerbaar gedrag. Dus als iemand pijn heeft, dan is de data waar we mee werken: dat diegene een bepaalde uitdrukking op zijn of haar gezicht heeft, dat diegene "Au!" roept, dat diegene zich terugtrekt als je de pijnlijke plek aanraakt, etc..


De bekendste vertegenwoordiger van de tweede soort behaviorisme is [Gilbert Ryle](https://plato.stanford.edu/entries/ryle/ "'Gilbert Ryle', Stanford Encyclopedia of Philosophy"), met name zijn [*The Concept of Mind*](https://en.wikipedia.org/wiki/The_Concept_of_Mind "'The Concept of Mind', Wikipedia").[^1] Het filosofisch behaviorisme zegt: de woorden waarmee we psychologische verschijnselen beschrijven, verwijzen naar het observeerbaar gedrag. Dus "pijn" *is" het hebben van een bepaalde uitdrukking, "Au!" roepen, je terugtrekken als iemand de pijnlijke plek aanraakt, etc..


Als de Turingtest een behavioristisch argument is, is het dan een psychologisch of een filosofisch behavioristisch argument?


{{< asterisk >}}


Het is mogelijk om bepaald gedrag te vertonen dat we met psychologische verschijnselen associëren, zonder die psychologische verschijnselen te hebben. Je kunt een pijnlijk gezicht opzetten en "Au!" roepen, zonder dat je *echt* pijn hebt. Het is deze observatie die het beeld suggereert dat pijn iets innerlijks is, en het gedrag slechts de uiterlijke manifestatie ervan.


Pijn is pas *echt* als er "binnenin" iets gebeurt. Anders is het slechts een simulatie van pijn.


Het is dat beeld dat verleidt om te zeggen dat een machine die een levendig gesprek voert, niet *echt* intelligent is. Immers, er gebeurt niets "binnenin" -- niets, afgezien van het uitvoeren van een gigantische hoeveelheid berekeningen. -- Is het uitvoeren van berekeningen hetzelfde als *denken*? Niet? Waarom?


{{< asterisk >}}


De volgende functie berekent of een getal even is of niet.


```cs
public static bool IsEven(uint i) =>
    i % 2 == 0;
```


Wat doet deze functie?


```cs
public static bool IsEven(uint i) =>
    i switch 
    {
        0 => true,
        1 => false,
        2 => true,
        3 => false,
        4 => true,
        // etc.
    }
```


Berekent de tweede functie *echt* of een getal even is, of *simuleert* deze slechts een berekening?


{{< asterisk >}}


Een machine doet niet hetzelfde als het een gesprek voert als wat wij doen. Maar betekent dat ook dat een machine iets anders doet dan een gesprek voeren? Voert de machine niet *echt* een gesprek?


"De machine *lijkt* wel intelligent, maar is niet *echt* intelligent." -- Waarom? -- "Omdat ze alleen maar een enorm aantal berekeningen tegelijkertijd uitvoert. Maar ze denkt niet na." Ze gebruikt, zou je willen zeggen, niet haar (equivalent van onze) hersens tijdens het praten.


{{< asterisk >}}


Als mensen een gesprek voeren, dan zijn er concepten van een hoog abstractieniveau in het spel -- in de gesproken woorden zelf, of in hun hoofd, of allebei. Het wordt verondersteld dat die abstracte concepten op de een of andere manier vertegenwoordigd zijn in de neuronen in onze hersenen. Maar wanneer we spreken, spreken we niet over neuronen.


Als een machine concepten op een hoog abstractieniveau hanteert, dan weten we niet hoe dat eruit ziet. -- Maar als we de hersenen van een mens monitoren wanneer deze spreekt, dan zien we ook geen abstracte concepten. Het enige wat we zien, is een storm van electrische signalen.


Maar: wat er in de hersenen gebeurt is helemaal niet leidend wanneer we een gesprek voeren met een mens. Als deze op een bepaalde manier op mijn woorden reageert, als deze een bepaalde blik in zijn ogen heeft, als deze mijn woorden op een inzichtelijke manier samenvat, er het hoofdpunt uit weet te halen -- dan weet ik dat ik met een intelligente gesprekspartner te maken heb.


{{< asterisk >}}


Er is relatief weinig intelligentie voor nodig om je aan een script te houden. Dat is waarom gescripte gesprekken niet aanvoelen als *echte* gesprekken.


Gescripte gesprekken zou je met een machine kunnen voeren, bij wijze van spreken.


{{< asterisk >}}


Ook de [*Philosophische Untersuchungen*](https://en.wikipedia.org/wiki/Philosophical_Investigations "'Philosophical Investigations', Wikipedia") van [Ludwig Wittgenstein](https://plato.stanford.edu/entries/wittgenstein/ "'Ludwig Wittgenstein', Stanford Encyclopedia of Philosophy") werden aanvankelijk als behavioristisch werd geïnterpreteerd. Men las zijn [*private language*-argument](https://en.wikipedia.org/wiki/Private_language_argument "'Private language argument', Wikipedia") (*the beetle-in-a-box*) en concludeerde: volgens Wittgenstein verwijzen psychologische concepten niet naar wat er "binnenin" gebeurt -- en *dus* verwijzen ze naar gedrag.


Maar dat mist het punt: niet elk woord functioneert op een verwijzende manier.


Die interpretatie veronderstelt een beeld van de manier waarop taal werkt -- waarop *alle* taal werkt. Het idee dat taal op een heleboel verschillende manieren werkt en kan werken, is nu juist hetgeen waar Wittgenstein ons in het hele boek op probeert te wijzen -- vanaf nota bene de eerste paragraaf.


{{< asterisk >}}


Doet de Turingtest een voorstel voor een *definitie* van intelligentie? Zegt de Turingtest: intelligentie *is* het kunnen voeren van een goed gesprek?


Of is het: wanneer we willen beoordelen of een machine intelligent is, hebben we niets anders om op af te gaan dan het "gedrag" van de machine, dus is het voeren van een goed gesprek de beste *proxy* die we hebben om te kunnen beoordelen of het intelligent is?


Of missen beide interpretaties het eigenlijke punt van de test?


[^1]: Maar let op: het boek werd door [Marc Slors](https://www.ru.nl/personen/slors-m), mijn docent cognitiefilosofie [toen ik nog filosofie studeerde](/blog/24/05/over-filosofie-en-software-ontwikkelen/ "'Over filosofie en software ontwikkelen'") (zie ook [deze blog](/blog/21/07/mijn-loopbaanwending/ "'Mijn loopbaanwending'")), geprezen als veel subtieler dan de karikatuur die van filosofisch behaviorisme wordt geschetst in de gemiddelde inleiding in het vakgebied. Ik kan dat bevestigen, ik las het boek destijds met veel plezier, maar mijn exemplaar werd geruïneerd door een opengesprongen flesje in mijn rugzak en daar baal ik nog steeds van.
