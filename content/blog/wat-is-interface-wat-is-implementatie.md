---
title: "Wat is interface? Wat is implementatie?"
author: "Karl van Heijster"
date: 2026-11-27T11:03:56+01:00
draft: true
comments: true
tags: ["domain-driven design", "intentie van code", "test-driven development", "testen"]
summary: "\"Je zegt: test de interface, niet de implementatie. Prima. Maar hoe bepaal je wat interface is en wat implementatie?\" -- Dat is een uitstekende vraag. Je ontwikkelt een intuïtie voor dit onderscheid in de loop van je werk als ontwikkelaar. Maar daar ben je natuurlijk niet mee geholpen."
---

"Je zegt: test de interface, niet de implementatie. Prima. Maar hoe bepaal je wat interface is en wat implementatie?"[^1]


{{< asterisk >}}


Dat is een uitstekende vraag. Je ontwikkelt een intuïtie voor dit onderscheid in de loop van je [werk](/tags/software-ontwikkelen/ "Blogs met de tag 'software ontwikkelen'") als [ontwikkelaar](/tags/software-ontwikkelaar-rol/ "Blogs met de tag 'software ontwikkelaar (rol)'"). Maar daar ben je natuurlijk niet mee geholpen.


{{< asterisk >}}


Ben je bekend met [Domain-Driven Design](/tags/domain-driven-design/ "Blogs met de tag 'domain-driven design'") (DDD)?[^2] In DDD heb je het concept van [*aggregates*](https://martinfowler.com/bliki/DDD_Aggregate.html "'D D D_ Aggregate', Martin Fowler"). Een *aggregate* is een entiteit of set entiteiten die een transactionele grens vormt: binnen de grenzen van een *aggregate* moet consistentie worden afgedwongen. Een *aggregate* kent een *root*: een entiteit die het toegangspunt vormt voor het ontsluiten van bepaalde functionaliteit. De *aggregate root* vormt de interface.


Een stom voorbeeld: mijn gezicht heeft twee ogen. Mijn ogen kunnen naar links en naar rechts kijken. Mijn linkeroog kan naar links kijken en mijn rechteroog kan naar rechts kijken. Maar: mijn linkeroog kan niet naar links kijken *terwijl* mijn rechteroog naar rechts kijkt. Binnen de context van mijn gezicht moeten beide ogen dezelfde kant op kijken. Binnen de context van mijn gezicht moet worden afgedwongen dat beide ogen consistent dezelfde kant op kijken. Het gezicht is dus de *aggregate root* en mijn ogen zijn twee entiteiten die daar onderdeel zijn. Mijn gezicht vormt de interface.


Natuurlijk verplaatst dit antwoord het probleem alleen maar. De vraag "Wat is de interface?" transformeert naar de vraag "Wat is de *aggregate root*?" en we zijn geen stap dichter bij een concreet antwoord. Het punt is: dat concrete antwoord valt moeilijk *in abstracto* te geven, omdat de concrete situatie bepaalt wat een interface is en wat een implementatiedetail.


{{< asterisk >}}


Je krijgt een gevoel voor interface en implementatie door te [luisteren](/blog/23/12/codefluisteren/ "'Codefluisteren'") naar je tests. Als je tests breken bij elke [refactorslag](/tags/refactoren/ "Blogs met de tag 'refactoren'"), dan is dat een goede indicatie dat je implementatiedetails aan het testen bent. Als je tests stabiel blijven, ondanks dat je de structuur van de code regelmatig omgooit, dan is dat een goede indicatie dat je via de interface test.


Maar: interface en implementatie zijn contextafhankelijke begrippen. Vanuit de context van een *aggregate* bekeken, kan bepaalde functionaliteit een implementatiedetail zijn. Maar die functionaliteit kan zijn geïmplementeerd als herbruikbare helperfunctie -- een functie die *bedoeld* is om op verschillende plekken te gebruiken. In dat geval kan de functie vanuit het perspectief van het domein slechts een implementatiedetail zijn, maar vanuit ontwikkelperspectief een interface. In dat geval zou ik die functie wel degelijk in isolatie testen.


Het loont zich niet hier dogmatisch in te zijn. "Test de interface, niet de implementatie" is een vuistregel. Ik poneer deze in de context van een bredere vuistregel: "Test zodanig dat je tests dienend zijn aan je ontwikkelwerkzaamheden."


{{< asterisk >}}


Maar misschien zet de vraag ons op een verkeerd spoor, nu ik erover nadenk. De vraag lijkt te veronderstellen dat er al een interface is en een implementatie, en dat het nu aan ons is om te bepalen wat wat is.


Maar dat hoeft niet het geval te zijn. We kunnen *beginnen* met de interface. Dat doen we wanneer we aan [Test-Driven Development](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") (TDD) doen. TDD is een werkwijze die ons dwingt de vraag te stellen: wat wil ik voor elkaar krijgen, en hoe wil ik dat doen? -- vóórdat er een implementatie is om ons druk over te maken.


Als ik [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz "'Fizz Buzz', Wikipedia") TDD, dan is er nog geen e.g. functie `FizzIfDivisibleByThree` waarvan ik de vraag überhaupt *kan* stellen: is dit een implementatiedetail of niet? Logischerwijs word ik geleid naar het schrijven van een functie `FizzBuzz`. Later, als ik het algoritme geïmplementeerd heb, kan ik ervoor kiezen om de eerder genoemde functie al dan niet te abstraheren. Maar op dat moment heb ik deze al getest via de interface, waardoor de vraag naar het testen van het implementatiedetail niet in me opkomt.


Ik stel uiteraard niet dat TDD een wondermiddel is waardoor je altijd de juiste interface vindt. Wondermiddelen bestaan niet. Maar TDD stimuleert om expliciet na te denken over de interface voordat je je om implementatiedetails bekommert. Precies daarom werkt het zo goed als [ontwerpmiddel](/blog/22/09/tests-als-ontwerpmiddel/ "'Tests als ontwerpmiddel'").


[^1]: Ik kreeg deze vraag naar aanleiding van mijn praatje [*Wat zegt deze test?*](/talks/wat-zegt-deze-test/) op [Tech & Bites](https://www.meetup.com/techandbites/).

[^2]: We lezen op moment van schrijven [*Learning Domain-Driven Design*](https://www.oreilly.com/library/view/learning-domain-driven-design/9781098100124/ "Vlad Khononov, 'Learning Domain-Driven Design: Aligning Software Architecture and Business Strategy', O'Reily Media Inc. 2021") van [Vlad Khononov](https://vladikk.com/) in onze [boekenclub](/tags/boekenclub/ "Blogs met de tag 'boekenclub'"), vandaar dat mijn hoofd deze connectie maakt. Het boek overigens is overigens een aanrader: het kreeg [een eervolle vermelding als één van mijn favoriete boeken van 2022](/blog/22/12/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2022-las/ "'De beste boeken over software ontwikkeling die ik in 2022 las'").