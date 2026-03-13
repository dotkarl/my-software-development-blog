---
title: "Postmoderne code"
author: "Karl van Heijster"
date: 2026-03-13T11:45:14+01:00
draft: true
comments: true
tags: ["clean code", "immutability", "intentie van code", "null"]
summary: "Een collega stuurde me een code-snippet door met de vraag: Karl, hoe zit het met de *nullability* van deze property? Ik moest er enorm om lachen, want het antwoord op die vraag verschoof al naar gelang mijn ogen over die ene regel gleden. Alsof ik naar een postmodern kunstwerk keek, bedoeld om op interessante manieren te verwarren."
---

Een collega stuurde me een code-snippet door met de vraag: Karl, hoe zit het met de *nullability* van deze property?


```cs
public string SomeProperty { get; set; } = null!;
```


Ik moest er enorm om lachen, want het antwoord op die vraag verschuift al naar gelang je ogen over die ene regel glijden. Alsof je naar een postmodern kunstwerk kijkt, bedoeld om je op interessante manieren te verwarren.


## Van links naar rechts


Als ik code lees, begin ik van links naar rechts. Het eerste wat ik tegenkom, is de declaratie van het type. Dat is een `string`:


```cs
public string SomeProperty { get; set; } = null!;
       ------
```


De `string` is niet met een `?` geannoteerd als *nullable* (`string?`), dus mijn eerste antwoord zou zijn: deze property is <span style="font-variant:small-caps;">niet nullable</span>.


Maar dan lees je verder en kom je uit bij de default waarde van de property:


```cs
public string SomeProperty { get; set; } = null!;
                                           ----
```


Die waarde *is* null! Dus de property is <span style="font-variant:small-caps;">wel nullable</span>.


Maar dan kijk je één karakter verder en zie je:


```cs
public string SomeProperty { get; set; } = null!;
                                               -
```


Een *bang-operator* (`!`)! Die syntax is geïntroduceerd zodat ontwikkelaars aan kunnen geven dat ze zeker weten dat een construct in de praktijk nooit null zal zijn, ondanks dat de compiler de theoretische mogelijkheid ervan onderkent. Dus: <span style="font-variant:small-caps;">niet nullable</span>!


Op het eerste gezicht is het vreemd om de default-waarde van een property op null te zetten om vervolgens onmiddellijk te zeggen: dit zal nooit null zijn. Maar dit soort scenario's komen in de praktijk af en toe voor, bijvoorbeeld bij testcode waarbij de waarde van een field in de `InitAsync`-methode wordt geset.


Van zo'n scenario is hier echter geen sprake, want:


```cs
public string SomeProperty { get; set; } = null!;
                                  ---
```


De property is vrijelijk te setten vanuit elke plek in de code! Als ontwikkelaar heb je dus geen enkele garantie dat de code niet op een gegeven moment aangeroepen zal worden op een plek waar deze nooit voor bedoeld was, en dat de waarde daar per ongeluk null komt te staan.


Eindoordeel: <span style="font-variant:small-caps;">wel nullable</span>.


## Dus


Dit is niet de bedoeling, natuurlijk. Code moet op zo'n manier geschreven zijn dat je het leest en onmiddellijk denkt: ja, logisch. 


Dat is hier, eh, niet het geval.


Wat is er dan gebeurd? Ik denk dat iemand gedachteloos waarschuwingen weg heeft lopen werken. 


"Deze property is niet nullable, dus moet een default waarde krijgen." -- Eh, null dan maar. -- "Maar de waarde mag niet null zijn." -- Nee, dat hoort ook niet inderdaad. Vertrouw me maar, het is niet null. -- Geen commentaar meer? Mooi, door naar het volgende dingetje!


## Schrijven


Maar goede code schrijven is meer dan waarschuwingen wegwerken, zo blijkt. Er is te weinig aandacht geschonken aan de vraag: wat wil ik hier nu eigenlijk overbrengen? Hoe kan ik de lezer en gebruiker van deze code duidelijk maken hoe dit object gebruikt dient te worden?


Coderen *is* schrijven. Schrijven is een boodschap overbrengen.


Ik zal iets stelligs zeggen wat volgens mij inmiddels niet (meer?) controversieel is: vermijd *vanilla* setters -- voor domeinobjecten überhaupt. Als je een property hebt die van buitenaf te setten valt, dan is er van encapsulatie geen sprake: je houdt dan effectief op objectgeoriënteerd te programmeren. Maak het object *immutable* of encapsuleer de data achter een methode die een duidelijke domeinhandeling uitdrukt.


Toegegeven, het levert een minder grappig resultaat op -- maar in dit geval is dat juist een positief iets!