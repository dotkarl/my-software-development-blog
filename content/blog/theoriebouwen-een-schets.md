---
title: "Theoriebouwen (een schets)"
author: "Karl van Heijster"
date: 2026-09-11T08:33:46+02:00
draft: true
comments: true
tags: ["filosofie", "software ontwikkelaar (rol)", "software ontwikkelen"]
summary: "Wat is programmeren? Een voor de hand liggend antwoord is: een programma schrijven. Wie tekst oplevert die door een compiler kan worden omgezet naar machine-instructies, die kunnen worden uitgevoerd om een bepaald doel te bereiken -- die programmeert. Programmeren wordt in deze schets gekenmerkt door het opgeleverde eindproduct: het programma."
---

[Peter Naur](https://en.wikipedia.org/wiki/Peter_Naur "'Peter Naur', Wikipedia") karakteriseert programmeren in [*Programming as Theory Building*](https://algoritmos-iii.github.io/assets/bibliografia/programming-as-theory-building.pdf "Peter Naur, 'Programming as Theory Building', pdf") als, eh, theoriebouwen.


We lazen het in de zomerboekenclub. Dat is de [boekenclub](/tags/boekenclub/ "Blogs met de tag 'boekenclub'"), maar dan tussen de [boeken](/tags/boeken/ "Blogs met de tag 'boeken'") door. We lezen blogs, korte artikelen, kijken af en toe een video.


Ik vond *Programming as Theory Building* fantastisch. Ik was de enige. De rest vond het nogal [filosofisch](/tags/filosofie/ "Blogs met de tag 'filosofie'") en nogal academisch. Ik ook. Daarom vond ik het fantastisch.


{{< asterisk >}}


Ik wilde over *Programming as Theory Building* schrijven, [maar](/tags/writers-block/ "Blogs met de tag 'writer's block'") ik wilde het artikel ook recht doen. Toen besefte ik: ik moet het artikel geen recht doen, ik moet eenvoudigweg schrijven.


(De volgende gedachten zijn niet gestructureerd. Vandaag niet. Volgende keer, misschien.)


{{< asterisk >}}


Wat is [programmeren](/tags/software-ontwikkelen/ "Blogs met de tag 'software ontwikkelen'")? Een voor de hand liggend antwoord is: een programma schrijven. Wie tekst oplevert die door een compiler kan worden omgezet naar machine-instructies, die kunnen worden uitgevoerd om een bepaald doel te bereiken -- die programmeert. Programmeren wordt in deze schets gekenmerkt door het opgeleverde eindproduct: het programma.


Maar: stel dat ik een boek overhandigd krijg met daarin een set instructies. De instructies hebben de volgende vorm: "typ op regel 1 `public class Program;`"; "typ op regel 2 `{`"; "typ op regel 3 `public static void Main(string[] args)`"; "type op regel 4..." -- enfin, je snapt het wel. Als ik alle instructies correct heb uitgevoerd, en aan het eind van de rit blijkt een compiler die woorden naar machine-instructies om te kunnen zetten, heb ik dan geprogrammeerd?


Stel nu dat ik niet in het Engels typ, maar in het Chinees. Ik kan geen Chinees lezen, dus ik heb geen idee wat de karakters betekenen die ik intyp. Een compiler blijkt de Chinese tekens om te kunnen zetten naar machine-instructies. Heb ik dan geprogrammeerd?[^1]


{{< asterisk >}}


Je zou kunnen zeggen: <span style="font-variant:small-caps;">ja</span>, want het eindproduct van die inspanning is een programma. Wie een programma oplevert, programmeert.


Maar je zou ook kunnen zeggen: <span style="font-variant:small-caps;">nee</span>, want je hebt geen idee wat je hebt gedaan of waarom. *Jij* hebt niet geprogrammeerd; degene die de instructies heeft geschreven, *die* heeft geprogrammeerd.


Welk antwoord acht jij het meest plausibel?


{{< asterisk >}}


Naur zit ferm in kamp <span style="font-variant:small-caps;">nee</span>. Programmeren is theoriebouwen. Een *essentieel* onderdeel van programmeren is dat de programmeur een bepaald inzicht opdoet over datgeen waar hij mee bezig is.


De vraag is dan: wat is een theorie? Naur, in navolging van [Gilbert Ryles](https://plato.stanford.edu/entries/ryle/ "'Gilbert Ryle', Stanford Encyclopedia of Philosophy") [*The Concept of Mind*](https://en.wikipedia.org/wiki/The_Concept_of_Mind "'The Concept of Mind', Wikipedia")[^2]:


> *[A] person who has or posesses a theory (...) knows how to do certain things and in addition can support the actual doing with explanations, justifications, and answers to queries, about the activity of concern.*


Een theorie hebben wil zeggen: ik kan niet alleen *x*, maar ik kan ook uitleggen waarom ik *x* zus of zo doe, heb gedaan of in de toekomst zal doen. In nieuwe, onbekende situaties, kan ik beredeneren en uitleggen: *x* verhoudt zich zus en zo tot deze nieuwe, onbekende situatie.


De programmeur (of: "programmeur"?) die louter instructies op heeft gevolgd, heeft (in zekere zin) wel een werkend programma opgeleverd, maar geen theorie opgebouwd.


{{< asterisk >}}


Een collega van me parafraseerde "theorie", niet onterecht, als "domeinkennis". Maar pas op voor een mogelijke equivocatie. "Domeinkennis" kan betekenen: "kennis van het probleemdomein" en "kennis van het oplossingsdomein". De theorie waar Naur het over heeft, verwijst naar beide.


In zijn algemene karakterisatie van de theorie van een programmeur, lijkt Naur vooral de nadruk te leggen op het probleemdomein:


> *[W]hat has to be built by the programmer is a theory of how certain affairs of the world will be handled by, or supported by, a computer program.*


Maar wanneer hij de drie manieren beschrijft waarop de theorie van de programmeur eventuele [documentatie](/tags/documentatie/ "Blogs met de tag 'documentatie'") overstijgt, lijkt het tussen beide te oscileren. De eerste verwijst in mijn beleving naar het probleemdomein; de derde naar het oplossingsdomein; en de tweede zou je in het licht van beide kunnen interpreteren:


> *1) The programmer having the theory of the program can explain how the solution relates to the affairs of the world that it helps handle.* (...)
>
> *2) The programmer having the theory can explain* why *each part of the program is what it is, in other words is able to support the actual program text with a justification of some sort.* (...) 
>
> *3) The programmer having the theory of the program is able to respond constructively to any demand for a modification of the program so as to support the affairs of the world in a new manner.*


{{< asterisk >}}


[Alistair Cockburn](https://en.wikipedia.org/wiki/Alistair_Cockburn "'Alistair Cockburn'") koppelt Naurs theorie aan de notie van [*System Metaphor*](https://wiki.c2.com/?SystemMetaphor "'System Metaphor', C2 Wiki"), zoals deze in de eerste editie van [Kent Becks](https://en.wikipedia.org/wiki/Kent_Beck "'Kent Beck', Wikipedia") [*Extreme Programming Explained*](https://www.oreilly.com/library/view/extreme-programming-explained/0201616416/ "Kent Beck, 'Extreme Programming Explained', O'Reilly 1999") terug te vinden is. (In de tweede editie is deze verdwenen.) In [deze blog](/blog/23/09/pseudofilosofische-onderzoekingen-i-en-ii/ "'Pseudofilosofische onderzoekingen (I & II)'") koppel ik die notie aan de *ubiquitous language* van [Domain-Driven Design](/tags/domain-driven-design/ "Blogs met de tag 'domain-driven design'") (DDD).


{{< asterisk >}}


Leuk, dat theoriebouwen. En vooruit, wellicht bouwen programmeurs inderdaad een theorie op als ze programmeren. Maar waarom zou je theoriebouwen als *essentieel* beschouwen voor de praktijk van het programmeren?


Hier doet Naur iets verstandigs: hij beschouwt programmeren in het licht van "*what actually happens to programs and the teams of programmers dealing with them*". En wat zien we wanneer we naar programmeren in de praktijk kijken? Dat het aanpassen van het programma een constante is:


> *[A]t least with certain kinds of large programs,* the continued adaption, modification, and correction of errors in them, *is essentially dependent on a certain kind of knowledge possessed by a group of programmers who are closely and continuously connected with them.* (Mijn cursivering)


Programma's kennen geen eindpunt waarop ze *klaar* zijn; hooguit een punt waarop ze opgegeven worden. Tot het zo ver is, zal het programma moeten worden aangepast.[^3] Om een programma aan te kunnen passen -- zonder er een enorme puinhoop van te maken -- is het nodig om een theorie ervan op te hebben gebouwd.


Dat is waarom de louter regelvolgende "programmeur" wel een werkend programma kan produceren, maar niet kan *programmeren*. Een programma is fundamenteel in beweging; programmeren is fundamenteel een voort-durende activiteit.


[^1]: Filosofieliefhebbers zullen dit herkennen als een variant op [John Searles](https://en.wikipedia.org/wiki/John_Searle "'John Searle', Wikipedia") [*Chinese room argument*](https://plato.stanford.edu/entries/chinese-room/ "'The Chinese Room Argument', Stanford Encyclopedia of Philosophy").

[^2]: Ryle is een graag geziene gast op dit blog. Hij kwam eerder al voorbij in [deze](/blog/25/09/kunstmatig-intelligent-gedrag/ "'(Kunstmatig) intelligent gedrag'") en [deze blog](/blog/25/10/wat-vertelt-de-turingtest-ons/ "'Wat vertelt de Turingtest ons?'") over [kunstmatige intelligentie](/tags/kunstmatige-intelligentie/ "Blogs met de tag 'kunstmatige intelligentie'"). Af en toe kan ik hem in een [voetnoot](/blog/26/04/entity-services-en-het-contextprincipe/#fn:2) kwijt.

[^3]: Goede software is eenvoudig te veranderen software. Dit is [het argument van zachtheid](/blog/26/07/het-argument-van-zachtheid/ "'Het argument van zachtheid'"). 