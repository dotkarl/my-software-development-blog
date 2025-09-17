---
title: "Oppervlakkige en diepe modules"
author: "Karl van Heijster"
date: 2025-08-29T09:17:46+02:00
draft: true
comments: true
tags: ['boeken', 'clean code']
summary: "Eén van de interessantste ideeën die John Ousterhout naar voren brengt in *A Philosophy of Software Design*, is de notie van oppervlakkige en diepe modules. Een module is oppervlakkig als deze veel (onnodige) complexiteit aan de gebruiker van de module openbaart. Ze is diep als ze die complexiteit juist verbergt."
---

Eén van de interessantste ideeën die [John Ousterhout](https://en.wikipedia.org/wiki/John_Ousterhout "'John Ousterhout', Wikipedia") naar voren brengt in [*A Philosophy of Software Design*](https://web.stanford.edu/~ouster/cgi-bin/aposd.php "John Ousterhout, 'A Philosophy of Software Design, 2nd Edition'"), is de notie van oppervlakkige en diepe modules. Een module is oppervlakkig als deze veel (onnodige) complexiteit aan de gebruiker van de module openbaart. Ze is diep als ze die complexiteit juist verbergt.

Visueel ziet dat er zo uit, waarbij je je voor moet stellen dat de bovenkant van de rechthoeken hetgeen is waar de gebruiker mee interacteert:


    Oppervlakkig
     _ _ _ _
    |_ _ _ _|

    Diep
     _
    | |
    | |
    | |
    |_|


## Codevoorbeeld: een oppervlakkige module

Stel, je schrijft een interface die een externe bibliotheek wrapt. (Maar let op, deze concepten zijn niet beperkt tot deze *use case*; wat geldt voor externe bibliotheken geldt net zozeer voor je eigen code.) 

Het volgende is een voorbeeld van een oppervlakkige module:

```cs
public ThirdPartyResult DoSomething(
    string arg1, string arg2, string arg3)
{
    return ThirdPartyLibrary
        .DoSomething(arg1, arg2, arg3);
}
```

De method verbergt nauwelijks, misschien zelfs geen enkele complexiteit voor de gebruiker. Implementatiedetails van de externe bibliotheek lekken naar buiten toe. De gebruiker moet weet hebben van de functie van alle parameters van de externe bibliotheek. Bovendien mag de gebruiker zich na een succesvolle aanroep bekommeren om het gebruik van een `ThirdPartyResult`, die waarschijnlijk een heleboel functionaliteit bevat waar hij of zij geen onmiddellijke behoefte aan heeft.


Deze module is oppervlakkig omdat alle implementatiedetails zich "aan de oppervlakte" bevinden.


## Codevoorbeeld: een diepe module


Dit is een dieper variant:


```cs
public MyResult DoSomething(MyEnum e)
{
    var result = ThirdPartyLibrary
        .DoSomething(e.ToString(), 
            "default value", 
            "default value");
    return new MyResult 
    {
        Property1 = result.SomeProperty,
        Property2 = result.CalculateValue()
    }
}
```

De method verbergt complexiteit op verschillende manieren. 


Ten eerste verbergt het bepaalde inputs van de externe bibliotheek. Een gebruiker hoeft zich niet te bekommeren om de waarden van `arg2` en `arg3`, want binnen de context waarin deze wrapper is geschreven weten we dat de opgegeven default waarde altijd de juiste is.


Ten tweede beperkt het de variabiliteit van de geopenbaarde input door er een `enum` van te maken. Een `string` kan een oneindig aantal waarden hebben, maar niet alle waarden zijn (binnen de context waarin de wrapper gebruikt gaat worden) valide. De `enum` communiceert heel duidelijk wat binnen de reikweidte van valide waarden valt.


Ten derde verbergt het de output van de externe bibliotheek. In plaats van het oorspronkelijke object, inclusief alle niet-relevante properties en methods, terug te geven aan de gebruiker, geeft het een maatwerkobject terug dat alle informatie bevat die de gebruiker nodig heeft, en niet meer dan dat. 


Deze module is diep omdat alleen de voor de gebruiker relevante informatie zich aan de oppervlakte bevindt. De overige implementatiedetails bevinden zich "onder de oppervlakte" -- in de method zelf, achter de functiesignatuur.


## Een ander perspectief


Ousterhout contrasteert dit idee met een suggestie van [Robert "*uncle Bob*" Martin](https://en.wikipedia.org/wiki/Robert_C._Martin "'Robert C. Martin', Wikipedia") uit [*Clean Code*](https://www.pearson.com/us/higher-education/program/Martin-Clean-Code-A-Handbook-of-Agile-Software-Craftsmanship/PGM63937.html "Robert C. Martin, 'Clean Code', Pearson Education 2008").[^1] Daarin stelt Martin dat methods klein moeten zijn en één ding moeten doen. (Hetzelfde geldt, *mutatis mutandis*, voor classes en namespaces en systemen als geheel.) Zodra ze meer dan één ding doen, moet er een nieuwe method geïntroduceerd worden die die tweede verantwoordelijkheid op zich neemt. 


In het tweede codevoorbeeld zou je bijvoorbeeld de method kunnen splitsen in een deel dat de externe bibliotheek aanroept en een deel dat het resultaat transformeert. (Maar dat zeg ik puur om het punt te illustreren, ik zou niet willen suggereren dat Martin zou stellen dat per se betere code op zou leveren -- zo'n dogmaticus lijkt het me niet.)


Het resultaat is, in de opvatting van Ousterhout, een explosie van kleine methods die weinig complexiteit verbergen -- oftewel,oppervlakkige modules en dus slecht ontworpen code.


Waarom pleit Martin dan toch voor deze aanpak? Het zal voor een deel, vermoed ik, voortkomen uit ervaringen van softwareontwikkelaars die methods van honderden of zelfs duizenden regels code schrijven. Ik heb wel eens *legacy* software mogen besnuffelen met zulke methods, en ze verleiden inderdaad tot een dogmatische tegenreactie: kort-kort-kort!


Maar er is ook een positief argument voor kleine methods. Er is in dezen een relevante metafoor, maar ik weet niet zeker of deze van Martin afkomstig is of ergens anders. Die vergelijkt een codebase met een koffer vol gereedschap. Wat heb je liever: één grote koffer waarin alle gereedschap door elkaar ligt, of een koffer met tientallen of misschien zelfs honderden kleine vakjes die allemaal het label dragen van het gereedschap dat erin thuishoort?


## Begrip


Is het beter om enkele grote modules -- grote classes met grote methods -- te hebben waarvan de delen impliciet zijn, of veel kleine maar expliciet gelabelde kleine modules?


Het is uiteraard onmogelijk om die vraag *in abstracto* te beantwoorden (zie ook [deze blog](/blog/25/08/hoe-verhogen-we-kwaliteit/ 'Hoe verhogen we kwaliteit?')), en dat ben ik ook niet van plan om te doen. Belangrijker dan antwoord geven op de vraag, is begrijpen waarom beide kampen pleiten voor hun respectievelijke aanpak. Dat stelt ons als ontwikkelaars in staat om elke keer opnieuw de afweging te maken: wil ik deze module in dit geval verdiepen of juist vervlakken?


Softwareontwikkeling is geen mechanistische bezigheid. Coderen heeft soms ook wat weg van kunst.


[^1]: *Clean Code* was [het beste boek over softwareontwikkeling dat ik in 2020 las](/blog/21/05/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2020-las/ "'De beste boeken over software ontwikkeling die ik in 2020 las'"). Ousterhout en Martin hebben hun meningsverschillen overigens bediscussieerd in [deze repo](https://github.com/johnousterhout/aposd-vs-clean-code/blob/main/README.md).