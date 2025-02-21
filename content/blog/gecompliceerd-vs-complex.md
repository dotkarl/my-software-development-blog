---
title: "Gecompliceerd vs. complex"
author: "Karl van Heijster"
date: 2025-02-21T08:51:29+01:00
draft: true
comments: true
tags: ["boeken", "complexiteit", "cynefin", "koppeling", "leermoment", "mentaal model"]
summary: "\"Wat maakt code complex?\" -- Nee: \"Wat maakt code *nodeloos* (of *accidenteel*) complex?\" Dat is de vraag die centraal staat in Vlad Khononovs *Balancing Coupling in Software Design*. Wat de vraag oproept: wat is *complexiteit* precies?"
---

"Wat maakt code complex?" -- Nee: "Wat maakt code *nodeloos* (of *accidenteel*) complex?" Dat is de vraag die centraal staat in [Vlad Khononovs](https://vladikk.com/) [*Balancing Coupling in Software Design*](https://www.pearson.com/en-us/subject-catalog/p/balancing-coupling-in-software-design-successful-software-architecture-in-general-and-distributed-systems/P200000000372/9780137353576 "Vlad Khononov, 'Balancing Coupling in Software Design: Universal Design Principles for Architecting Modular Software Systems', Addison-Wesley Professional 2024").


Wat de vraag oproept: wat is *complexiteit* precies?


## Vouwen en omarmen


Het lijkt een triviale vraag. Want in het dagelijks leven gebruiken we het woord aan de lopende band. "Complex" betekent *moeilijk*, *lastig*, *ingewikkeld* -- *gecompliceerd*.


Maar gooien we hiermee niet twee verschillende dingen op één hoop? Complexe en gecompliceerde dingen zijn beide moeilijk, dat is waar, maar zijn ze op dezelfde manier moeilijk? Khononov merkt op dat beide woorden een verschillende oorsprong hebben in het Latijn hebben: "gecompliceerd" komt van "complicare", wat "vouwen" betekent; "complex" komt van "complectere" en dat betekent "omarmen".


Hun respectievelijke oorsprong suggereert de volgende beelden. Gecompliceerde dingen zijn in essentie één, maar het is moeilijk om te zien hoe het in elkaar zit. Complexe dingen zijn daarentegen in essentie samengesteld, een bijeenkomst van verschillende zaken.


## Cynefin


Khononov werkt de verschillen tussen beide begrippen nog verder uit aan de hand van [Cynefin](https://en.wikipedia.org/wiki/Cynefin_framework "'Cynefin framework', Wikipedia"), een raamwerk om beslissingen te maken. Binnen Cynefin worden situaties ingedeeld in vijf domeinen: *clear*, *complicated*, *complex*, *chaotic* en *disorder* (waarbij de laatste betekent: een onvermogen om deze in één van de vier eerdere domeinen in te kunnen delen). Het gaat ons hier natuurlijk om het verschil tussen *complicated* en *complex*.


Een gecompliceerd domein omvat het "bekende onbekende" (*known unknowns*): we weten wat we niet weten, en we weten dat er een oplossing is voor ons probleem. Het enige probleem is: we weten niet wat die oplossing is. Maar het goede nieuws is dat er een manier is om erachter te komen. Middels zorgvuldige analyse of het raadplegen van een expert, zouden we onszelf uiteindelijk in een positie kunnen brengen waarin het onbekende bekend is geworden (waarmee we ons in het *clear* domein begeven).


Een complex domain omvat daarentegen het "onbekende onbekende" (*unknown unknowns*): we weten niet wat we niet weten, en we weten ook niet zeker of er wel een oplossing is voor ons probleem. Er zijn geen juiste antwoorden voorhanden[^1] en er is dus geen analyse of expert die ons uit deze situatie kan bevrijden. Het enige wat we kunnen doen is: dingen uitproberen en de resultaten van dat experiment onder de loep nemen. 


## Oorzaak en gevolg


Eén van de interessante manieren waarop Khononov het verschil tussen beide domeinen beschrijft, is in termen van oorzaak en gevolg.


In het gecompliceerde domein weten we dat er een relatie tussen oorzaak en gevolg bestaat, we weten alleen niet wat die behelst. Bijvoorbeeld: ik weet dat als ik *deze* regel code aanpas, er tests beginnen te falen. Maar waarom dat het geval is, is me niet helemaal helder. Maar ik weet ook dat als ik de tijd neem om de code te debuggen, ik het antwoord ongetwijfeld zal vinden.


In het complexe domein daarentegen vermoeden we slechts een relatie tussen oorzaak en gevolg. Maar of dat ook daadwerkelijk het geval is, kunnen we pas achteraf vaststellen, als we verschillende experimenten hebben gedaan die bewijzen dat twee fenomenen inderdaad aan elkaar gelinkt zijn.


## Koppeling


Khononovs boek heet *Balancing Coupling in Software Design* en dat geeft ons een nogal sterke hint richting het antwoord op onze vraag. Accidentele complexiteit komt voort uit een ongebalanceerde of ongepaste koppeling (*coupling*) tussen twee softwaremodules. In de praktijk betekent dat meestal: twee (of meer) modules zijn sterker aan elkaar gekoppeld dan nodig is. Als de ene wordt aangepast moet de andere mee, ondanks dat er geen duidelijke (domeininhoudelijke) reden voor is waarom dat het geval zou moeten zijn.[^2]


Dat betekent natuurlijk niet dat alle koppeling verkeerd is. Een *volledig* ontkoppeld systeem bestaat uit modules die eenvoudigweg niet met elkaar kunnen communiceren, en die dus niets voor elkaar kunnen krijgen. Koppeling is één van de voorwaarden voor een succesvol systeem.


Problemen ontstaan wanneer modules aan elkaar gekoppeld zijn op onverwachte manieren. Denk aan het aanpassen van een private variabele in een class, die opeens voor onverwacht gedrag in een andere class zorgt. -- Wat blijkt: de andere class heeft zichzelf middels [*reflection*](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/reflection) toegang gegeven tot informatie die verborgen zou moeten blijven.


## Complexiteit


Een enkele module in isolatie kan gecompliceerd (*moeilijk*, *ingewikkeld*) zijn, maar is niet complex. Want de module is *ex hypothesi* niet samengesteld -- ze is hooguit "samengevouwen". 


Het is in het samenspel met andere modules, dat de potentie voor complexiteit ontstaat. Waar samengewerkt moet worden, moet er gekoppeld worden. Waar gekoppeld moet worden, bestaat het risico op ongepaste koppeling. 


Ongepaste koppeling in software drijft ons richting complexiteit. Dingen zijn op onverwachte wijze met elkaar verbonden maar we weten niet (meer) hoe -- en de enige manier om erachter te komen is door te experimenteren.


[^1]: Wat overigens niet suggereert dat alle antwoorden even onjuist zijn.

[^2]: Maar andersom is ook mogelijk: twee modules die domeininhoudelijk aan elkaar gelinkt zouden moeten zijn, zijn via verschillende tussenlagen zodanig van elkaar ontkoppeld dat het moeilijk te volgen is wat er waarom gebeurt.