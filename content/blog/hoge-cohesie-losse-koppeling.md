---
title: "Hoge cohesie, losse koppeling"
author: "Karl van Heijster"
date: 2025-02-28T09:30:05+01:00
draft: true
comments: true
tags: ["boeken", "cohesie", "complexiteit", "koppeling", "leermoment", "mentaal model", "modulariteit"]
summary: "Het mag gerust een cliché heten: bij het ontwerpen van software streven we naar hoge cohesie (*high cohesion*) en losse koppeling (*loose coupling*). Met andere woorden: de modules die we ontwerpen moeten inhoudelijk één geheel vormen, en niet onlosmakelijk verbonden zijn met andere modules; wijzigingen in de ene hoek zouden minimale gevolgen moeten hebben voor andere hoeken van het systeem. Systemen met hoge cohesie en losse koppeling worden ook wel *modulair* genoemd."
---

Het mag gerust een cliché heten: bij het ontwerpen van software streven we naar hoge cohesie (*high cohesion*) en losse koppeling (*loose coupling*). Met andere woorden: de modules die we ontwerpen moeten inhoudelijk één geheel vormen, en niet onlosmakelijk verbonden zijn met andere modules; wijzigingen in de ene hoek zouden minimale gevolgen moeten hebben voor andere hoeken van het systeem. Systemen met hoge cohesie en losse koppeling worden ook wel *modulair* genoemd.


Waarom streven we naar modulariteit? Omdat niet-modulaire systemen complex zijn.[^1] Ze bevatten ofwel modules die op zichzelf bezien moeilijk te begrijpen zijn (als gevolg van lage cohesie), ofwel modules breken die bij elke ogenschijnlijk ongerelateerde wijziging elders (als gevolg van hoge koppeling). Oftewel: lage cohesie leidt tot lokale complexiteit -- binnen modules --, hoge koppeling tot globale complexiteit -- over verschillende modules heen.


## Frisse blik


Eén van de vele leuke dingen aan [Vlad Khononovs](https://vladikk.com/) [*Balancing Coupling in Software Design*](https://www.pearson.com/en-us/subject-catalog/p/balancing-coupling-in-software-design-successful-software-architecture-in-general-and-distributed-systems/P200000000372/9780137353576 "Vlad Khononov, 'Balancing Coupling in Software Design: Universal Design Principles for Architecting Modular Software Systems', Addison-Wesley Professional 2024") is dat hij dat aloude idee op nieuwe en interessante manieren weet te verpakken. Hij biedt de lezer de conceptuele middelen om cohesie en koppeling met een frisse blik te bekijken, en alleen al daarom is het boek een aanrader voor iedereen die zich serieus met softwareontwikkeling bezighoudt.


Het hart van zijn boek bestaat uit een genuanceerde ontleding van het begrip *koppeling* vanuit verschillende dimensies. Die dimensies zijn: de integratiesterkte (*integration strength*) van twee (of meer) modules, de afstand (*distance*) waarover ze met elkaar gekoppeld zijn en de grilligheid (*volatility*) van de modules in kwestie.[^2] 


Uiteraard kunnen -- en worden -- die dimensies op hun beurt verder ontleed. Integratiesterkte beslaat bijvoorbeeld alles tussen twee modules een bepaald contract delen dat specifiek is ontworpen voor gegevensuitwisseling (contractkoppeling; lage sterkte) tot de modules die vrijelijk gebruik maken van implementatiedetails die nooit bedoeld zijn geweest voor iets anders dan privégebruik (intrusieve koppeling; hoge sterkte). En afstand beslaat alles tussen koppeling binnen één methode tot koppeling over systemen heen.


## Herdefinitie


Het interessante is: cohesie en koppeling kunnen worden gedefinieerd in termen van integratiesterkte en afstand. Wanneer je de begrippen op twee assen zet, ontstaat de volgende matrix:


|                  | **Lage afstand**    | **Hoge afstand**     |
| ---------------- | ------------------- | -------------------- |
| **Lage sterkte** | Lokale complexiteit | Losse koppeling      |
| **Hoge sterkte** | Hoge cohesie        | Globale complexiteit |

<br>


Denk aan een concrete instantie van hoge cohesie: een class waarvan alle publieke methods gebruik maken van hetzelfde private veld. De integratiesterkte tussen de methods is sterk, want ze maken allemaal gebruik van hetzelfde veld. Tegelijkertijd geldt dat de afstand laag is: het veld en de publieke methods zitten bij elkaar in dezelfde class. Een wijziging aan het veld zal onmiddellijk gevolgen hebben voor de publieke methods, maar omdat onmiddellijk duidelijk is wat de impact van die wijziging is, zal dat weinig problemen met zich meebrengen.


Hetzelfde geldt voor los gekoppelde modules, denk aan twee microservices die met een integratiespecifiek contract met elkaar communiceren. De implementatiedetails van beide services bevinden zich op grote afstand van elkaar. Maar omdat beide services niet direct met elkaar praten, maar via een stabiel contract met lage integratiesterkte, heeft een wijziging in de ene service geen onmiddellijke invloed op de andere.


## Modulariteit & complexiteit, revisited


Wat betekent dit voor de begrippen *modulariteit* en *complexiteit*? Eerder definieerden we die in termen koppeling en cohesie. En omdat we die termen konden definiëren in termen van integratiesterkte en afstand, kunnen we hier hetzelfde doen. In Khononovs semi-logische notatie:


|                     |     |                                 |
| ------------------- | --- | ------------------------------- |
| `MODULARITY`        | `=` | `STRENGTH XOR DISTANCE`         |
| `COMPLEXITY`        | `=` | `NOT MODULARITY`                |
|                     | `=` | `NOT (STRENGTH XOR DISTANCE)`   |
| `LOCAL COMPLEXITY`  | `=` | `NOT STRENGTH AND NOT DISTANCE` |
| `GLOBAL COMPLEXITY` | `=` | `STRENGTH AND DISTANCE`         |

<br>


Zo geeft *Balancing Coupling in Software Design* ons de conceptuele middelen om onze kennis van goede software op een preciezer manier te beschrijven. Dat stelt ons in staat om beter te duiden waar het probleem nu eigenlijk in zit als we een complex systeem proberen te ontrafelen -- en helpt ons concreter uit te leggen wat we moeten doen om die complexiteit te neutraliseren.


[^1]: Voor een bespreking van complexiteit in de context van Khononovs boek, zie [deze blog](GECOMPLICEERD_VS_COMPLEX).

[^2]: In deze blog zal ik me op de eerste twee dimensies richten. De grilligheid van een module -- de mate waarin deze verandert -- is geen relevante factor voor modulariteit of complexiteit, maar wel voor stabiliteit en onderhoudbaarheid.
