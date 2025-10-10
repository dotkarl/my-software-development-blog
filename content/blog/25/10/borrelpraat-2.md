---
title: "Borrelpraat #2"
author: "Karl van Heijster"
date: 2025-10-10T08:47:35+02:00
draft: false
comments: true
tags: ["communicatie", "falen", "feedback", "leermoment", "psychologische veiligheid", "samenwerking", "software ontwikkelen", "teamcultuur", "verantwoordelijkheid"]
summary: "Hij dronk cola, ik een biertje -- maar verder zitten we op één lijn. Het duurde niet lang voordat het over de zoekindex ging -- altijd die verdomde zoekindex. \"Dat is al vanaf het begin een pijnpunt,\" bekende ik. \"En ik ben zelf onderdeel van het probleem geweest.\""
---

# Of: De kwestie feedback


Het leuke aan zo'n borrel, nou, dat is de ~~alcohol~~ ~~bitterballen~~ [borrelpraat](/blog/25/05/borrelpraat/ "'Borrelpraat'"). 


Hij dronk cola, ik een biertje -- maar verder zitten we op één lijn. Hij was bezig een waanzinnig complexe [SQL](/tags/sql/ "Blogs met de tag 'SQL'")-query om te schrijven; ik wist over welke hij het had, en ik wist wie 'm geschreven had. Hij glimlachte scheef: "Als ik die naam tegenkom in de [*git history*](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History "'Git Basics - Viewing the Commit History', Git"), dan weet ik dat ik op moet letten."


"Hij was van de school: [*move fast and break things*](https://en.wikipedia.org/wiki/Move_fast_and_break_things "'Move fast and break things', Wikipedia")," herinnerde ik me. Waarde leveren kon 'ie heel goed, maar het leverde niet altijd de eenvoudigste code op. 


Als je snel gaat, is het makkelijk om de zaken moeilijk te maken. Juist om de boel simpel te houden, moet je langzaam durven gaan. Maar een sprinter te laten lopen is geen makkelijke taak.


{{< asterisk >}}


Hij had mijn plek overgenomen [toen ik verhuisde naar een ander team](/blog/25/08/gaan-we-snel-genoeg/ "'Gaan we snel genoeg?'") -- althans, zo zou je het kunnen zeggen. We bezagen de code dus vanuit verschillende perspectieven: ik in retrospectief; hij er middenin.


Het duurde niet lang voordat het over de zoekindex ging -- altijd die verdomde zoekindex.[^1] "Dat is al vanaf het begin een pijnpunt," bekende ik. "En ik ben zelf onderdeel van het probleem geweest."


We hadden het idee opgevat om (delen van) de informatie in onze applicatie in een aparte zoekindex van [Azure Cognitive Search](https://en.wikipedia.org/wiki/Azure_Cognitive_Search "'Azure Cognitive Search', Wikipedia") op te slaan om redenen die destijds heel logisch klonken, maar die we niet helemaal uit hadden gedacht. Een collega had een *proof of concept* gedaan en het zag er veelbelovend uit.


Daarna kwam de implementatie. Hij was een hele Sprint druk in de weer. We vroegen hoe het ging. Hij zei dat hij een heel eind was. Hij was een tweede Sprint druk. Zijn gezicht zag met de dag gefrustreerder. We vroegen hoe het ging. Er volgde een [*pull request*](/tags/pull-requests/ "Blogs met de tag 'pull requests'") (PR) van duizenden regels code, in meer dan honderd bestanden.


Hij had *alle* features van de zoekindex geïmplementeerd, in één keer.


Achteraf is het makkelijk om te zeggen: dat PR hadden we af moeten keuren. Sterker nog, op het moment zelf vond ik eigenlijk al dat we het PR af moesten keuren. Maar ik kon het niet over mijn hart verkrijgen om al dat werk van mijn collega weg te gooien: ik viel ten prooi aan het [Concorde-effect](/tags/concorde-effect/ "Blogs met de tag 'concorde effect'"). Ik maakte mezelf wijs dat het nog wel recht te breien viel, dat we de technische schuld voor nu best konden accepteren in ruil voor de toegevoegde waarde.


Dat was de tweede manier waarop ik onderdeel van het probleem was.


De eerste manier zit 'm in het laten ontstaan van deze situatie überhaupt. Want toen mijn collega na de eerste Sprint nog niets concreets had om op te leveren, hadden de alarmbellen al af moeten gaan -- nee, na de eerste week zelfs al. Maar het was makkelijker om mijn kop in het zand te steken en me op mijn eigen codeertaken te focussen, dan om naast 'm te komen zitten en mee te denken.


Ik denk dat ik op dat moment al wist, dat als ik dat zou doen, ik een flink deel van zijn werk weg zou moeten gooien. Ik zou (moeten) zeggen: de manier waarop we dit nu aanvliegen, is helemaal verkeerd. We moeten opnieuw beginnen. En hij zou het opvatten als: de manier waarop *jij* dit aan hebt gevlogen, is helemaal verkeerd. -- Ik wilde de rol van boeman niet spelen -- of liever: ik wilde zo niet gezien worden.


Ruim een jaar later is het team dus nog steeds bezig de problemen rondom die zoekindex te repareren. -- Ik lachte: "Ben ik even blij dat ik nu in een ander team zit!" en nam grote een slok om de kiespijn te verdoven.


{{< asterisk >}}


Maar ik heb ook op directere manieren bijgedragen aan problemen waar het team nog steeds mee worstelt. Eén daarvan zit 'm in het gebruik van [*LanguageExt*](https://github.com/louthy/language-ext), een *library* die je in staat stelt om [functionele](/tags/functioneel-programmeren/ "Blogs met de tag 'functioneel programmeren'") [C#](https://dotnet.microsoft.com/en-us/languages/csharp) te schrijven.


Ik ben niet degene die deze *library* in de codebase geïntroduceerd heeft, maar ik was er wel een enthousiast gebruiker van. Destijds las ik [*Functional Programming in C#*](https://www.manning.com/books/functional-programming-in-c-sharp-second-edition) van [Enrico Buonanno](https://twitter.com/la_yumba) ([mijn favoriete boek van 2022](/blog/22/12/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2022-las/ "'De beste boeken over software ontwikkeling die ik in 2022 las'")) en bracht maar wat graag de ideeën die ik daarin las in de praktijk.[^2] 


De omslag van [objectgeoriënteerd](/tags/objectgeoriënteerd-programmeren/) naar functioneel programmeren is stimulerend en uitdagend. Ik kan het elke ontwikkelaar aanraden zich beide paradigma's eigen te maken: het zal je vermogen om problemen met code op te lossen aanzienlijk vergroten. Maar je kunt je afvragen of het verstandig is om die denkbeweging te maken in de code die je schrijft in teamverband en in opdracht van je werkgever. 


Het probleem daarvan is niet dat de code op zichzelf er slechter van wordt. Het probleem zit 'm in de onderhoudbaarheid van die code, en dan met name in de mate waarin je teamgenoten -- de teamgenoten die die omslag (nog) niet of niet volledig hebben gemaakt -- jouw code aan kunnen passen wanneer dat nodig is.


Dit is geen nieuwe les. [Toen ik opmerkte](/blog/24/07/imperatieve-options/ "Imperatieve Options?") dat sommige van mijn collega's [declaratieve](/tags/declaratieve-code/ "Blogs met de tag 'declaratieve code'") programmeerconcepten in een [imperatieve](/tags/imperatieve-code/ "Blogs met de tag 'imperatieve code'") mal probeerden te wrotten, mijmerde ik:


> [D]enk goed na over wat het betekent voor een team wanneer je functionele (i.e. declaratieve) programmeertechnieken introduceert in een traditioneel objectgeoriënteerde (i.e. imperatieve) omgeving. (...)
>
> Functioneel programmeren vraagt niet alleen een andere manier van programmeren dan objectgeoriënteerd programmeren, het vraagt om een andere manier van denken. -- Is het team bereid om zich die nieuwe manier van denken eigen te maken? Zijn ze zich überhaupt bewust van het feit dat ze dat zullen moeten doen? En is er ruimte om hen daarin te begeleiden?
> 
> Softwareontwikkeling is een ten diepste sociale aangelegenheid. Hoe plezierig het ook is om mooiere code te schrijven dankzij nieuwe technieken, je mag nooit uit het oog verliezen dat er ook andere mensen voor nodig zijn om die code te kunnen blijven onderhouden.


En eerder, [nadat ik op de *pyramid of doom* bedwong](/blog/24/02/callback-hell/ "'Callback hell'"):


> [H]oe elegant en leesbaar het resultaat ook is, functionele C# is verre van idiomatische C#. Wat gebeurt er wanneer mijn teamgenoten een bug in mijn code lokaliseren? Kunnen ze deze nog zonder hulp (of zonder onnodig lange debugsesies) oplossen? En wat gebeurt er wanneer het team een nieuwe collega mag verwelkomen? Begrijpt deze wat er hier gebeurt? Wat als 'ie vers is afgestudeerd van de hogeschool? En als 'ie een doorgewinterde C#-veteraan is?


Een duiveltje op mijn linkerschouder[^3] bracht me er in dat specifieke geval toe alsnog een PR aan te maken voor deze oplossingsrichting. Mijn redenering was: als het voor mijn teamgenoten onbegrijpelijk is wat ik hier doe, dan neem ik aan dat te zullen horen tijdens de [*code review*](/tags/code-reviews/ "Blogs met de tag 'code reviews'").


Wellicht nam ik niet mijn [verantwoordelijkheid](/tags/verantwoordelijkheid/ "Blogs met de tag 'verantwoordelijkheid'") door mijn C# in functionele stijl te schrijven -- ik ben meer dan bereid dat toe te geven. Maar het is maar de helft van het verhaal. Want de rest van het team nam niet *hun* verantwoordelijkheid toen ze die code accepteerde zonder precies te begrijpen wat het deed.


"Ben ik even blij dat ik nu in een ander team zit!" -- enfin, ik schonk mezelf een glas rosé in.


{{< asterisk >}}


Wat hebben deze verhalen met elkaar te maken? 


"We zijn te zacht geweest," peinsde ik. Ik heb wel gezegd dat ik de code van de zoekindex niet goed genoeg vond -- en geloof me: ik was niet de enige! --, maar ik heb 'm daarna wel geaccepteerd. En ik was niet de enige. 


En ik heb mijn collega's wel zien worstelen met *LanguageExt*, maar ze hebben nooit gezegd: we moeten van deze *library* af, want hij levert meer problemen op dan dat 'ie oplost. -- En, eerlijk, zelf heb ik dat ook nooit voorgesteld. Het is nooit in me opgekomen, ik was te druk bezig me ermee te vermaken.


De ideeën en gevoelens van afkeuring en frustratie leefden wel in het team, maar ze kwamen er op [feedbackmomenten](/tags/feedback/ "Blogs met de tag 'feedback'") niet of onvoldoende uit. Misschien uit angst de ander voor het hoofd te stoten, of om dom over te komen -- wie weet, de redenen kunnen talloos zijn. Maar de conclusie dringt zich helder op: op het gebied van [psychologische veiligheid](https://en.wikipedia.org/wiki/Psychological_safety "'Psychological safety', Wikipedia") heeft het team als geheel [gefaald](/tags/falen/ "Blogs met de tag 'falen'").[^4]


Psychologische veiligheid betekent niet alleen: het is mogelijk om fouten te maken. Het betekent ook: het is mogelijk om elkaar op fouten te wijzen. 


Die les leerde ik pas nadat ik was vertrokken, in retrospectief. We hadden al die tijd maar voortgeraasd, besefte ik, we hebben de ruimte nooit genomen dit onder ogen te zien -- niet echt. Jammer dat ik in een ander team zit.


De kater, zeggen ze, komt later. Het leuke aan zo'n borrel, dat is de borrelpraat.


[^1]: Dit gedeelte van de codebase is al tijden een dankbaar onderwerp voor refactoring. Zie ook [deze](/blog/24/05/functioneel-denken-een-praktijkvoorbeeld/ "'Functioneel denken: een praktijkvoorbeeld'"), [deze](/blog/25/03/het-ontologische-argument/ "'Het ontologische argument'") en [deze blog](/blog/25/04/wie-is-er-bang-voor-adapterfuncties/ "'Wie is er bang voor adapterfuncties?'")

[^2]: Lessen van die praktijkervaringen zijn in bijvoorbeeld [deze](/blog/24/05/functioneel-denken-een-praktijkvoorbeeld/ "'Functioneel denken: een praktijkvoorbeeld'") en [deze blog](/blog/24/09/bind-map-en-match/ "'Bind, Map en Match'") te vinden.

[^3]: Ik vervolgde de bovenstaande passage als volgt: <blockquote><p>Ik zal eerlijk zijn. Hoe mooi ik functionele code ook vind, ik weet niet of het nu per se zo'n goede keus was om mijn code op die manier te schrijven.</p><p>Maar het duiveltje op mijn linkerschouder voegt daaraan toe: maar zo lang niemand me tegenhoudt, zal ik er mee doorgaan. Het engeltje aan de rechterkant brengt hoopvol in dat het team, net als ikzelf, er misschien nog wat van opsteekt.</p></blockquote> Zeg het maar: oprechte verheffingspoging of louter ijdelheid? 

[^4]: Het zullen ongetwijfeld ervaringen als deze zijn geweest die me ertoe brachten [deze blog](/blog/25/08/hoe-verhogen-we-kwaliteit/ "'Hoe verhogen we kwaliteit?'") te schrijven.
