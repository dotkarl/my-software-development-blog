---
title: "Genericiteit, specificiteit, complexiteit"
author: "Karl van Heijster"
date: 2026-04-17T10:22:32+02:00
draft: true
comments: true
tags: ["complexiteit", "eenvoud", "filosofie", "intentie van code"]
summary: "Je zegt, alsof instinctief: een generieke component is beter dan een specifieke component, want een generieke component is herbruikbaar. Maar dat veronderstelt dat je weet welk deel van de verantwoordelijkheden generiek is en welke specifiek, en dat je deze netjes van elkaar kunt scheiden. Een specifieke component is eenvoudiger dan een generieke component, want een specifieke component hoeft alleen maar in specifieke omstandigheden te werken. Over het algemeen geldt: eenvoudig is beter dan complex. Dus is een specifieke component dan niet beter dan een generieke?"
---

Waarom is deze component zo complex? -- 'Omdat hij groot is. Hoe groter de component, hoe meer gelegenheid voor complexiteit.'


Waarom is deze component zo groot? -- 'Omdat hij heel veel doet. Hij heeft veel verantwoordelijkheden. Te veel, eigenlijk.'


Wat zijn de verantwoordelijkheden? -- 'Het is een generieke component. Hij toont de voortgang in situaties *x*, *y* en *z*.'


Maar ik zie code die checkt: is *x* of *y* of *z*? Is de code dan wel echt generiek? -- Wat is de verantwoordelijkheid van een generieke component?


Wat zijn de verantwoordelijkheden van deze component? Welke van die verantwoordelijkheden zijn specifiek, en welke generiek?


{{< asterisk >}}


Je zegt, alsof instinctief: een generieke component is beter dan een specifieke component, want een generieke component is herbruikbaar. Maar dat veronderstelt dat je weet welk deel van de verantwoordelijkheden generiek is en welke specifiek, en dat je deze netjes van elkaar kunt scheiden.


Een specifieke component is eenvoudiger dan een generieke component, want een specifieke component hoeft alleen maar in specifieke omstandigheden te werken. Over het algemeen geldt: eenvoudig is beter dan complex. Dus is een specifieke component dan niet beter dan een generieke?


Een generieke component is beter *als* de abstractie die deze component biedt, een ware abstractie is, dat wil zeggen: als deze in niet-specifieke taal helder communiceert wat er gebeurt in het specifieke geval.


Een generieke component veronderstelt een ander begrip, een diepgaander begrip van het probleem dan een specifieke component. Het kunnen maken van een generieke component veronderstelt dat jij het essentiële van het accidentele kunt scheiden.


Is het essentiële gescheiden van het accidentele in deze component? -- Beide zitten door elkaar. *Dat* is wat de component zo complex maakt.


{{< asterisk >}}


'Het systeem geeft aan dat de complexiteit van deze component te hoog is. Dus moeten we de complexiteit verminderen.' -- Maar wat betekent dat, de complexiteit verminderen?


We zouden de complexiteit van deze component uit kunnen smeren over vijf componenten. Hebben we daarmee wat gewonnen? Zo ja, wat dan?


Het reduceren van complexiteit is niet een kwestie van: het aantal `if`-statements in deze hoek terugdringen. Het is: je afvragen of hier überhaupt `if`-statements nodig zijn. Of liever: je afvagen of ze nodig zouden *moeten* zijn hier.


De `if`-statements zijn een symptoom, niet de oorzaak.


De complexiteit ontstaat doordat ons denken, nu nog, verward is. Als wij ons denken gezuiverd hebben, als we onszelf in staat hebben gebracht onszelf duidelijk uit te drukken en ons duidelijk uitdrukken, dan is de complexiteit verminderd. Dat wil zeggen: de complexiteit is gereduceerd tot de complexiteit van het probleem, niet die van het probleem plus ons verwarde begrip.


{{< asterisk >}}


Softwareontwikkeling is, voor mij, altijd een kwestie geweest van het vastleggen van begrip in code. Dat het systeem vervolgens ook blijkt te werken, is, zou ik soms willen zeggen, mooi meegenomen. Het werkt *omdat* ik het probleem begrepen heb.


'Het werkt, maar vraag me niet waarom.' -- Het werkt *in dit geval*, maar vraag me niet waarom. Als het *altijd* zou werken, maar vraag me niet waarom, dan zou dat niet minder dan een wonder zijn.


Maar soms gebeuren er wonderen, of wat wij als een wonder ervaren.


'Het werkt, maar vraag me *nog* niet waarom.' -- Natuurlijk, soms werkt het ook zo: we stuiten op een oplossing, intuïtief of per ongeluk, en pas achteraf zijn we in staat te reconstrueren waarom de oplossing werkt. 


{{< asterisk >}}


Het werkt nu *nog*, maar vraag me niet waarom, want: de aard van het probleem verandert voor je neus. Je huidige oplossing van het probleem, opent de weg naar nieuwe oplossingen. De nieuwe oplossingen openen de weg naar nieuwe problemen.


'Software is nooit af, zeggen ze. Maar dat is niet waar. Er is software die uitgefaseerd wordt, die niet meer onderhouden wordt. Die is af.' -- 'Die software is af omdat wij hebben *besloten* dat deze af is. Dat is een eufemistische manier om te zeggen: we hebben het opgegeven deze software nog te onderhouden. De accidentele complexiteit van deze oplossing is dusdanig dat het niet meer loont er nog meer van onze tijd in te investeren.'


De prijs van een tekort aan begrip is het herschrijven van een systeem. Soms is dat de realiteit van de situatie. Maar: wat doen we deze keer anders om ervoor te zorgen dat we niet in dezelfde situatie terechtkomen?