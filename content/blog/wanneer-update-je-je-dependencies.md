---
title: "Wanneer update je je dependencies?"
author: "Karl van Heijster"
date: 2026-08-07T08:51:57+02:00
draft: true
comments: true
tags: ["third party code", "onderhoud", "software ontwikkelaar (rol)", "werkplezier", "zorg"]
summary: "Jouw code is niet jouw code. Jouw code is een onderdeel van een compleet ecosysteem aan code. Jouw code is afhankelijk van een onbezonnen hoeveelheid *third party libraries*. Jouw code is waarschijnlijk het kleinste deel van je eigenlijke codebase. Al die andere code moet je ook onderhouden. Niet door er zelf wijzigingen aan door te voeren, maar door deze afhankelijkheden regelmatig te updaten. Wanneer is het beste moment om dat te doen?"
---

Jouw code is niet jouw code. Jouw code is een onderdeel van een compleet ecosysteem aan code. Jouw code is afhankelijk van een onbezonnen hoeveelheid [*third party libraries*](/tags/third-party-code/ "Blogs met de tag 'third party code'"). Jouw code is waarschijnlijk het kleinste (maar daarom niet insignificant!) deel van je eigenlijke codebase.


Al die andere code moet je ook onderhouden. Niet door er zelf wijzigingen aan door te voeren -- hoewel dat, in het geval van *[open source](/tags/open-source/ "Blogs met de tag 'open source'") libraries*, absoluut niet verboden is --, maar door deze afhankelijkheden regelmatig te updaten.


Wanneer is het beste moment om dat te doen?


Nu. Deze ochtend. Doe het voordat je vandaag iets anders doet.


Dat is hoe ik het doe, althans. Ik begin elke ochtend met de vraag: zijn er nog [NuGet](https://www.nuget.org/) packages die een nieuwe update hebben? Zo ja, dan installeer ik de nieuwe versie. Dan draai ik mijn [tests](/tags/testen/ "Blogs met de tag 'testen'"), en als er iets breekt, dan moet ik aan de slag. Als er niets breekt, dan *push* ik de configuratiewijziging -- en kan ik aan mijn dag beginnen.


## Vroeger


Zo ging het niet altijd, natuurlijk. Er was een tijd dat ik helemaal niet omkeek naar de afhankelijkheden van mijn codebase. Dat was een luxe die ik me kon veroorloven omdat anderen dat deden. 


Althans, ik meende dat anderen dat deden. Toen kwamen we erachter dat zus of zo niet mogelijk was, omdat we dit en dat package gebruikten dat nog drie *majors* achterliep. Dan voerden we de update door, brak er van alles, scholden we erop los, pasten de code aan, zaten met de handen in het haar -- en dan werd het vrijdag en als we dat probleem opgelost hadden, waren we heel tevreden met onszelf.


En dan konden we eindelijk beginnen het ons *eigenlijke* werk.


We spraken natuurlijk wel af: laat het alsjeblieft niet meer zo uit de hand lopen. Iemand kwam op het lumineuze idee om een afspraak in te schieten, elke maandag om de twee weken, om elf uur 's ochtends, om de afhankelijkheden te updaten. Top.


Niemand updatete de afhankelijkheden. Deels omdat de afspraak naar het hele team ging, en iedereen hoopte dat iemand anders dat klusje op zich zou nemen, en deels omdat je om elf uur net lekker bezig was met het fixen van die [bug](/tags/bugs/ "Blogs met de tag 'bugs'") of het [refactoren](/tags/refactoren/ "Blogs met de tag 'refactoren'") van die [class](/tags/classes/ "Blogs met de tag 'classes'").


Soms vond iemand wel de tijd en motivatie om een stuk of wat wijzigingen door te voeren. Maar het klusje was saai en repetitief. Voer een update door, draai de tests, klik door de applicatie, commit de code. Voer een update door, draai de tests, klik door de applicatie, commit de code. Voer een update door, draai de tests, deze geloof ik wel, volgens mij is dit geen risicovolle wijziging. O jee, de boel is stuk. Klik door de code. Vind de fout, fix de bug, commit de code.


Voor je het wist was het drie uur en kon je met je *eigenlijke* werk beginnen. En dan hoopte je dat over twee weken een ander het op zou pakken.


## Neiging


De neiging bestaat vervelende klusjes voor je uit te schuiven. Want hoe minder je je met vervelende klusjes bezig hoeft te houden, hoe beter. Maar die neiging is de verkeerde neiging.


Beter is het het vervelend klusje naar voren te halen. Doe dat eerst, want dan heb je het gehad. En doe dat niet eerst, eens in de zoveel tijd, maar *elke dag*.


Elke dag als ik begin met werken, kijk ik of er updates zijn. Zo ja, dan zijn het er hooguit één of twee. Het is niet zoveel moeite om één of twee packages te updaten. Het klusje is saai, dat is waar, maar het is ook zo voorbij. En het is niet repetitief. *Achttien* packages updaten is repetitief. Eén of twee, dat is een zucht en een scheet.


En die ene keer dat een update inderdaad *breaking* blijkt te zijn, hoef je je maar om één probleem te bekommeren. Langer dan een kwartiertje ben je er over het algemeen niet mee bezig.


En genoeg ochtenden dat er geen vuiltje aan de lucht is.


## Kleine stappen


Softwareontwikkeling werkt het best in heel veel, heel kleine stappen.[^1] Dat geldt voor de code die je zelf schrijft, maar ook voor het onderhoud aan de code die je alleen maar gebruikt. 


Want kleine stappen kennen een laag risico. Heel veel kleine stappen kennen, alles bij elkaar opgeteld, dus ook een laag risico. Grote stappen kennen een hoog risico. Eén à twee grote stappen kennen dus ook een groot risico.


[Als softwareontwikkelaar](/tags/software-ontwikkelaar-rol/ "Blogs met de tag 'software ontwikkelaar (rol)'") is het niet alleen je taak om code te schrijven. Het is ook je taak code te onderhouden. En ja, nieuwe code bouwen is leuk, leuker dan onderhoud, meestal. Maar er valt wat te zeggen voor het vinden van plezier in onderhoud -- of op zijn minst: de wil omstandigheden te creëren waarin onderhoud niet onnodig pijnlijk is.


Het geeft mij voldoening zo eenvoudig mijn code -- het ecosysteem waar mijn code onderdeel van is -- te kunnen onderhouden.


[^1]: Ik leerde deze les van [Clare Sudbery](https://www.linkedin.com/in/clare-sudbery-she-her-35939540/); zie [deze blog](/blog/23/09/doe-je-wel-echt-aan-continuous-integration/ "'Doe je wel écht aan continuous integration?'")