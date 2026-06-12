---
title: "Het argument van zachtheid"
author: "Karl van Heijster"
date: 2026-06-12T10:17:14+02:00
draft: true
comments: true
tags: ["kwaliteit", "test-driven development", "testen"]
summary: "Wat maakt goede software goed? De hint zit in de naam: *soft*ware. Software moet *zacht* zijn, dat wil zeggen: het moet makkelijk te veranderen zijn. -- Goede software is makkelijk te veranderen software."
---

Het argument van zachtheid verloopt als volgt.


Wat maakt goede software goed? De hint zit in de naam: *soft*ware. Software moet *zacht* zijn, dat wil zeggen: het moet makkelijk te veranderen zijn.[^1]


-- *(a)* Goede software is makkelijk te veranderen software.


Wat maakt software makkelijk te veranderen? Het antwoord hier is: inzicht in de gevolgen van een verandering. Als je geen [feedback](/tags/feedback/ "Blogs met de tag 'feedback'") hebt over de gevolgen van een verandering, dan is elke wijziging risicovol. Dan word je terughoudend om software aan te passen. Als er wel feedback is, maar deze laat lang op zich wachten, dan evenzo (maar uiteraard in mindere mate). Als de feedback snel is, onmiddellijk haast, dan is de terughoudendheid verdwenen.


-- *(b)* Hoe sneller je feedback krijgt over de gevolgen van een verandering aan de software, hoe beter de software. 


Wat zijn snelle manieren om feedback te krijgen over de gevolgen van een verandering? [Tests.](/tags/testen/ "Blogs met de tag 'testen'") Een goede [testdekking](/tags/testcoverage/ "Blogs met de tag 'testcoverage'") geeft je met één druk op de knop een overzicht: het systeem functioneert nog als voorheen, of niet.


-- *(c)* Hoe beter een systeem gedekt wordt door tests, hoe sneller je feedback krijgt over de gevolgen van een verandering aan de software.


Hoe zorg je ervoor dat een systeem zo goed mogelijk wordt gedekt door tests? Door voorafgaand aan elke gedragswijziging een geautomatiseerde test te schrijven die het geïntendeerde gedrag specificeert. Het slagen van die test bewijst dat het systeem *dat* kan. (Maar het bewijst niet dat het systeem ook *dat* kan.) Dit vormt de [gouden regel](https://www.sammancoaching.org/learning_hours/small_steps/golden_rule_tdd.html "'Golden Rule of TDD' Learning Hour, Samman Coaching") van [Test-Driven Development](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") (TDD).


-- *(d)* Een systeem wordt zo goed mogelijk gedekt door tests, als deze wordt ontwikkeld met TDD.


Conclusie: goede software is software die is ontwikkeld middels TDD.


## Commentaar


*(a)* Goede software is natuurlijk niet *alleen* software die makkelijk aan te passen is: "goed" is een te losse kwalificatie hier. Software bestaat binnen de context van een breder [systeem](/tags/systeemdenken/ "Blogs met de tag 'systeemdenken'"). Goede software is bijvoorbeeld ook: software die een bestaand probleem oplost binnen dat systeem. Software die een niet-bestaand probleem oplost, is niet goed, in de zin dat ze niet [waardevol](/tags/waarde/ "Blogs met de tag 'waarde'") is.


Als ik spreek over "goede software", dan bedoel ik "goed *als* software". Software die (nu) een bestaand probleem oplost maar die niet makkelijk te veranderen is, is "goed" in de ze van waardevol, maar zij vervult haar potentieel als software niet.


Software bestaat binnen de context van een breder systeem, dat klopt. Maar dat systeem verandert continu, niet in de laatste plaats dankzij de software zelf, en die verandering is een fundamenteel onderdeel van het systeem. ([Barry O'Reilly](https://www.linkedin.com/in/barry-o-reilly-b924657/ "Barry O'Reilly @ LinkedIn")'s fundamentele kritiek op de bestaande praktijk van softwarearchitectuur is dat ze dit gegeven niet onderkent.)


{{< asterisk >}}


*(c)* Tests zijn *een* manier om feedback te krijgen over de gevolgen van een verandering, maar natuurlijk niet de enige. 


Het gebruik van types is een andere manier. Een compileerfout geeft je, sneller dan een test ooit zou kunnen, een signaal dat datgene wat je probeert te bereiken, niet geoorloofd is. Dit is waarom [*primitive obsession*](/tags/primitive-obsession/ "Blogs met de tag 'primitive obsession'") een fout is. Ik zou een `string` *a* zomaar kunnen verwisselen met `string` *b*. Maar een `Name` verwisselen met een `EmailAdress` is, binnen een sterk getypeerde taal, eenvoudigweg onmogelijk. Types beperken de mogelijkheden waarop dingen fout kunnen gaan, en geven feedback wanneer die mogelijkheden worden overschreden.


Encapsulatie van de code -- of, breder geformuleerd: het ontwerp van de code -- is een andere manier. Wanneer een variabele alleen binnen de context van een functie wordt gebruikt, dan is eenvoudig te overzien wat de gevolgen zijn van een verandering van die variabele. Hetzelfde geldt, in mindere mate, voor een veld binnen een class, en in nog mindere mate voor een (interne) class binnen een project.


Goede code gebruikt niet *alleen* tests om feedback te geven over de impact van een wijziging. Het ontwerp van de code is een ander middel om dit doel te bereiken. Goede code is gedekt door tests én goed ontworpen -- om het risico te spreiden, maar ook omdat code pas goed testbaar wordt als deze goed ontworpen is.


{{< asterisk >}}


*(d)* Ben ik dogmatisch in mijn geijver voor TDD? Ondanks mijn inspanningen programmeren de meeste mensen om mij heen op de "ouderwetse" (of vriendelijker: "klassieke") manier. Hebben zij het allemaal fout en heb ik het goed?


Ik geloof niet dat TDD de *enige* manier is om goede software te ontwikkelen. Ik geloof ook best dat er mensen bestaan die er handig in zijn geworden om op andere manieren kwalitatief hoogstaande software op te leveren.


Maar TDD is wel de beste manier die *ik* heb gevonden om software te ontwikkelen. Wie me een betere manier kan tonen, heeft mijn aandacht.


{{< asterisk >}}


Nota bene, is het: goede software is software die is ontwikkeld met TDD, of: software die is ontwikkeld met TDD is goede software? -- Nee, zo kort door de bocht mag je niet gaan!


[^1]: Deze observatie dank ik aan [Robert "*uncle Bob*" Martins](https://en.wikipedia.org/wiki/Robert_C._Martin) [*Clean Craftsmanship*](https://www.pearson.com/en-us/subject-catalog/p/clean-craftsmanship-disciplines-standards-and-ethics/P200000009529/9780136915713 "'Clean Craftsmanship: Disciplines, Standards, and Ethics' Robert C. Martin, Addison Wesley") (mijn [op twee na favoriete boek van 2022](/blog/22/12/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2022-las/ "'De beste boeken over software ontwikkeling die ik in 2022 las'")).