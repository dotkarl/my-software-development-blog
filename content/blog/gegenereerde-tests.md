---
title: "Gegenereerde tests"
author: "Karl van Heijster"
date: 2025-10-17T10:36:44+02:00
draft: true
comments: true
tags: ["kunstmatige intelligentie", "testen", "test-driven development"]
summary: "Als ik collega's spreek over de voordelen van LLMs, dan is meestal één van de eerste toepassingen die ze voor zich zien: achteraf tests laten genereren door AI. Ik begrijp waar die behoefte vandaan komt. Want tests achteraf schrijven is een rotklusje. Op dat moment denk je als ontwikkelaar namelijk al te weten dat je code doet wat 'ie moet doen. Zulke tests fungeren als een soort administratie van de handmatige tests die je tot die conclusie leidden. En wie houdt er nu van zijn administratie bijwerken? -- En toch geloof ik niet dat het een goed idee is om AI in te zetten om tests te genereren. "
---

Wie me kent, weet dat ik een voorstander ben van [Test-Driven Development](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'") (TDD) (tot vervelens toe). En toch, zal ik bekennen, heb ik het wel eens gedaan: achteraf tests laten genereren door [AI](/tags/kunstmatige-intelligentie/ "Blogs met de tag 'kunstmatige intelligentie'").


En ik ben niet de enige. Als ik collega's spreek over de voordelen van [*large language models*](https://en.wikipedia.org/wiki/Large_language_model "'Large language model', Wikipedia") (LLMs), dan is meestal één van de eerste toepassingen die ze voor zich zien: achteraf tests laten genereren door AI.


Ik begrijp waar die behoefte vandaan komt. Want tests achteraf schrijven is een rotklusje. (Ik sprak erover in [dit praatje](/talks/testen-een-filosofisch-retrospectief/ "'Testen: Een filosofisch retrospectief'").) Op dat moment denk je als ontwikkelaar namelijk al te weten dat je code doet wat 'ie moet doen. Zulke tests fungeren als een soort administratie van de handmatige tests die je tot die conclusie leidden. 


En wie houdt er nu van zijn administratie bijwerken? Waarom zou je zo'n werk in hemelsnaam *niet* uitbesteden aan een machine?


## Te veel


-- En toch geloof ik niet dat het een goed idee is om AI in te zetten om tests te genereren. 


De eerste en meest in het oog springende reden daarvoor, is een pragmatische. Wanneer je een LLM vraagt om een (dekkende) testsuite te genereren voor een bepaald stukje code, dan zal dat resulteren in misschien wel tientallen tests. Dat is een hoop code. Eigenlijk zou je al die code moeten inspecteren om te zien of de specificaties die je LLM uit de code heeft gedestilleerd, wel overeenkomen met het door jou bedoelde gedrag.


Maar heb je dat wel eens in de praktijk gedaan? Het is makkelijk om na drie tests je geduld (en het overzicht) te verliezen en aan te nemen dat de rest wel zal kloppen. De tests geven je in dat geval een vals gevoel van veiligheid. Alles is groen, maar daar volgt niet uit dat de code doet wat het moet doen.


Administratie bijwerken is een rotklusje, maar administratie controleren net zozeer. Maar er is nog een veel dieper probleem met het achteraf genereren van tests. 


## FizzBuzz


Het is geen goed idee om tests achteraf te genereren, omdat achteraf geschreven tests (te?) laat feedback op het ontwerp van de code. Als de code slecht opgezet is, dan zal de test moeilijk zijn om te schrijven. Moeilijk te schrijven tests zijn een signaal: neem de opzet van je code opnieuw onder de loep. Wie het schrijven uitbesteedt aan een LLM, loopt de kans dat signaal te missen.


Laten we de problemen met deze aanpak illustreren aan de hand van een eenvoudig voorbeeld: de [FizzBuzz](https://codingdojo.org/kata/FizzBuzz/ "'FizzBuzz', Coding Dojo") [kata](https://nl.wikipedia.org/wiki/Kata "'Kata', Wikipedia"). In deze kata word je gevraagd om een systeem te implementeren met eenvoudige requirements. Het systeem accepteert een `integer` als input, en retourneert een `string` als output. In de meeste gevallen zal de output de `string`-representatie van de input zijn: `1` staat tot `"1"`, `2` tot `"2"`, enzovoort. Er zijn drie afwijkingen van deze regel. Een getal dat deelbaar is door 3, retourneert `"Fizz"`, een getal dat deelbaar is door 5 retourneert `"Buzz"`, en een getal dat deelbaar is door 3 én 5 retourneert `"FizzBuzz"`.


Een klassieke implementatie van dit algoritme ziet er als volgt uit:


```cs
public static string FizzBuzz(int input)
{
    if (IsDivisibleBy3(input) && IsDivisibleBy5(input))
        return "FizzBuzz";
    if (IsDivisibleBy3(input))
        return "Fizz";
    if (IsDivisibleBy5(input))
        return "Buzz";
    return input.ToString();
}

```

De test voor deze implementatie zou er als volgt uit kunnen zien:


```cs
[Theory]
[InlineData(1, "1")]
[InlineData(2, "2")]
[InlineData(3, "Fizz")] // Divisible by 3
[InlineData(6, "Fizz")]
[InlineData(5, "Buzz")] // Divisible by 5
[InlineData(10, "Buzz")]
[InlineData(15, "FizzBuzz")] // Divisible by 3 AND 5
[InlineData(30, "FizzBuzz")]
public void FizzBuzzTest(int input, string expected)
{
    var result = FizzBuzz(input);
    Assert.Equal(expected, result);
}
```


## Variant


Stel dat we de bovenstaande een beetje aanpassen:


```cs
public static void FizzBuzz(int input)
{
    var result = string.Empty;
    if (IsDivisibleBy3(input) && IsDivisibleBy5(input))
        result = "FizzBuzz";
    else if (IsDivisibleBy3(input))
        result = "Fizz";
    else if (IsDivisibleBy5(input))
        result = "Buzz";
    else
        result = input.ToString();
    Console.Write(result);
}
```


(Vraag jezelf, voordat je doorleest, af: wat is het probleem van deze implemenatie? Waarom is het een probleem?)


Het algoritme is hetzelfde. Het enige verschil met de oorspronkelijke implementatie, is dat het resultaat van de berekening rechtstreeks wordt geschreven naar de console, in plaats van teruggegeven te worden door de method. 


Een naïeve programmeur zou deze wijziging als een verbetering kunnen zien. Laten we aannemen dat we inderdaad in ons concrete geval het resultaat van het algoritme naar de console willen schrijven, waarom zouden we dat dan niet meteen doen?


## Een (complexe) test


Het antwoord wordt duidelijk, wanneer we de test voor deze implementatie bekijken:


```cs
[Theory]
[InlineData(1, "1")]
[InlineData(2, "2")]
[InlineData(3, "Fizz")] // Divisible by 3
[InlineData(6, "Fizz")]
[InlineData(5, "Buzz")] // Divisible by 5
[InlineData(10, "Buzz")]
[InlineData(15, "FizzBuzz")] // Divisible by 3 AND 5
[InlineData(30, "FizzBuzz")]
public void FizzBuzzTest(int input, string expected)
{
    using var consoleOutput = new StringWriter();
    Console.SetOut(consoleOutput);
    FizzBuzz(input);
    Assert.Equal(expected, result);
}
```


De method body van deze test is twee keer zo lang als die van de oorspronkelijke test. In plaats van de functie aan te roepen en het resultaat te inspecteren, zijn er nu ook twee regels nodig om een `StringWriter` te initialiseren en deze te koppelen aan de output van de `Console`.


Er is extra *set-up* in de test nodig om het FizzBuzz-algoritme te kunnen testen. Maar die extra *set-up* heeft niets met het algoritme zelf te maken. Hij heeft wat te maken met wat we doen met het resultaat van het algoritme. 


De test valt uiteen in twee delen: het opzetten van de infrastructuur om het resultaat van het algoritme te kunnen inspecteren (regel 1 en 2), en het aanroepen van de businesslogica (regel 3). Dat is een signaal: de code bevat twee verantwoordelijkheden, een infrastructurele en een domeininhoudelijke. (Ik werk de architecturele implicaties van deze observatie uit in [dit praatje](/talks/wat-zegt-deze-test/ "'Wat zegt deze test?'").)


## Pijn


Wanneer je de test met de hand schrijft, voel je de pijn van die ontwerpbeslissing. Je moet nadenken over allerlei zaken die niets met de inhoud van het algoritme te maken hebben, om het algoritme te kunnen testen. Om je eigen leven makkelijker te maken, om het schrijven van de test te vergemakkelijken, zou je de code moeten refactoren om de verantwoordelijkheden uit elkaar te trekken. Dat zou resulteren in de eerstgenoemde test-plus-implementatie (en wellicht een integratietest die valideert dat het resultaat correct naar de console wordt geschreven). 


Maar als je de test laat genereren? Misschien valt het je op dat de test er wat vreemd uitziet, maar misschien ook niet. Hoe het ook zij, de prikkel die het schrijven van de complexe test je gaf om de code te refactoren, is zorgvuldig weggemasseerd. Het resultaat is dat de code in zijn huidige, suboptimale vorm gehandhaafd blijft.


Wie voorstelt om tests achteraf te genereren, doet testcode op twee manieren geen recht: door het achteraf te schrijven én door het niet zelf te schrijven. De tests zijn derderangs burgers geworden in de code base. Ze leveren daarom niet de waarde die ze zouden kunnen (en moeten) hebben als feedbackmechanisme op het ontwerp van de code.


De oplossing voor de pijn van tests achteraf schrijven, is niet om ze te genereren, maar om ze tegelijkertijd met de geteste code te ontwikkelen.