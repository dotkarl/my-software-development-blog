---
title: "Over de samenwerking"
author: "Karl van Heijster"
date: 2026-11-06T09:07:24+01:00
draft: true
comments: true
tags: ["politiek", "professionaliteit", "samenwerking", "software ontwikkelen", "verantwoordelijkheid"]
summary: "Wij doen ons werk, en ineens zijn jullie daar: je moet component *a* voor deze functionaliteit gebruiken. -- Nee, jullie formuleerden het voorzichtiger: wat is ervoor nodig om component *a* voor deze functionaliteit te gebruiken? Dat geef ik jullie. -- Hoe het ook zij, duidelijk is dat jullie wilden dat we component *a* zouden gebruiken. Dat was besloten en zo zou het gaan."
---

Mij is gevraagd iets te zeggen over de samenwerking. Daar kan ik kort over zijn: er is geen samenwerking.


Ik kan je zeggen hoe ik het beleefd heb. Wij doen ons werk, en ineens zijn jullie daar: je moet component *a* voor deze functionaliteit gebruiken. -- Nee, jullie formuleerden het voorzichtiger: wat is ervoor nodig om component *a* voor deze functionaliteit te gebruiken? Dat geef ik jullie. -- Hoe het ook zij, duidelijk is dat jullie wilden dat we component *a* zouden gebruiken. Dat was besloten en zo zou het gaan.


## I.


Er kleven nadelen aan het gebruik van component *a*. De bezwaren zijn van tactische en van strategische aard. 


Kort gezegd, ben ik van mening dat component *a* niet het volwassenheidsniveau heeft dat je van een generieke component zou mogen verwachten. Allereerst is het qua infrastructuur een, sorry dat ik het zeg, een zooitje. Daarnaast is de API op dit moment toegesneden op de ondersteuning van de huidige *use cases*, hij is niet generiek opgezet. Er moet een hoop gebeuren, wil component *a* klaar zijn voor het gebruik dat jullie voorstaan. Dat zijn de tactische bezwaren.


De strategische bezwaren luiden als volgt. Allereerst introduceert deze oplossingsrichting [koppeling](/tags/koppeling/ "Blogs met de tag 'koppeling'") tussen twee teams, waarvan één extern nota bene, zonder toegevoegde waarde. Die koppeling vormt een risico voor de snelheid waarmee we kunnen ontwikkelen en de snelheid waarmee we [bugs](/tags/bugs/ "Blogs met de tag 'bugs'") kunnen fixen. Ten tweede kan de functie van component *a* worden ingevuld door kant-en-klare componenten in het cloudlandschap. De functionaliteit die wij vragen is een *commodity*; het is nonsens om hier een externe partij voor in te schakelen en *custom* code voor te laten schrijven.[^1]


De reden die jullie keer op keer aandragen voor jullie keuze is: we hanteren het principe bestaande componenten zoveel mogelijk te hergebruiken in plaats van nieuwe te introduceren. Maar ik vraag: waarom? Om kosten te besparen, nietwaar? Welnu, het gebruik van component *a* komt tegemoet aan de wens van hergebruik, maar niet aan de achterliggende wens van kostenbesparing. De kosten van koppeling en het opnieuw uitvinden van het wiel, wegen volgens mij nooit op tegen de kosten van het gebruiken van een *commodity* -- zelfs niet wanneer verschillende teams allemaal hun eigen cloudcomponent daarvoor gebruiken. (Mochten jullie cijfers hebben waaruit mijn ongelijk blijkt, dan hoor ik het graag.)


Dit zijn de inhoudelijke bezwaren, die heb ik bij jullie aangegeven. Ik weet dat onze architect zijn eigen bezwaren bij jullie heeft neergelegd. Zijn argumentatie is verfijnder dan die van mij, maar ik geloof dat we in essentie hetzelfde proberen te zeggen. Onze conclusies zijn in elk geval dezelfde: component *a* is niet geschikt voor onze *use case*.


## II.


Dit is allemaal inhoud, dat is niet waar het hier om gaat -- daar ben ik me bewust van. Ik zet mijn standpunt uiteen in de hoop duidelijk te maken dat het geen *onwil* van mijn kant is. Als ik niet meewerk, dan is dat omdat ik inhoudelijke vraagtekens heb, niet omdat ik me niks laat zeggen. En die vraagtekens kunnen in principe weg worden genomen.


Mijn bezwaren heb ik bij jullie aangegeven. Ik heb geen inhoudelijke reactie op deze bezwaren ontvangen. Sterker nog, ik heb überhaupt geen reactie op deze bezwaren ontvangen. Hetzelfde geldt voor onze architect. 


Wat betekent dat? Dat de bezwaren standhouden en jullie geen weerlegging *kunnen* aandragen? Waarom wordt mij vervolgens gevraagd om requirements op te stellen voor component *a*, opdat wij deze kunnen gaan gebruiken? En als jullie mijn bezwaren wel degelijk kunnen weerleggen, waarom krijgen wij die weerlegging dan niet te horen? 


Eén van jullie zei: deze discussies hebben we maanden geleden al gevoerd. In dat geval zijn mijn bezwaren al eerder ter tafel gekomen en weerlegd, of de bezwaren zijn nieuw en dan moet de discussie opnieuw worden geopend om de nieuwe inzichten mee te wegen. Welke van de twee is het? 


Mijn team zal moeten leven met de keuze die we hier maken -- en jullie niet. Als we voor component *a* gaan, dan moet ik dat mijn team uit kunnen leggen. Als ik mijn team niet uit kan leggen waarom we voor component *a* kiezen (maar wel allerlei bezwaren kan formuleren), dan gaan we dat niet doen. Dit is geen onwil -- ik zie dit als het nemen van professionele verantwoordelijkheid.


En ik wijs jullie op *jullie* professionele verantwoordelijkheid de keuze voor component *a* inhoudelijk te rechtvaardigen aan het team dat je ermee opzadelt. Dat is geen optioneel extraatje, naast het uitdenken van oplossingsrichtingen -- dat is, sorry dat ik het zeg, jullie werk. 


## III.


Ik vat samen -- tussentijds, want in zekere zin is dit alleen nog maar context voor wat ik nu wil inbrengen. Jullie stellen voor dat we component *a* gebruiken. Wij brengen daar bezwaren tegenin. Wij horen vervolgens niets meer (afgezien van, nota bene, een verzoek om extra requirements voor component *a* op te stellen). 


Dit wekt de indruk van een afdeling die niet openstaat voor een inhoudelijk gesprek. Het wekt de indruk van een afdeling die een, in mijn ogen, slecht idee door probeert te drukken. Deze praktijk heeft mijn vertrouwen in de afdeling geschaad.


Ik zeg het maar: ik vertrouw, op basis van mijn ervaringen met jullie, jullie oordeel niet. Ik durf er niet van uit te gaan dat als jullie zeggen dat *dit* een goede oplossing is, dat het dan ook een goede oplossing is. Ik heb geen aanleiding te denken dat alle argumenten en perspectieven in jullie beslissing zijn meegenomen.


Vervolgens, als we een gesprek aangaan over de samenwerking, dan is het: wij voeren regie en je hebt te doen wat wij zeggen. Je mag om *toestemming* (jullie woorden!) vragen om af te wijken, maar *wij* beslissen.[^2] -- Kun je je, in het licht van het voorgaande, voorstellen hoe zo'n opmerking overkomt? Zou jij samen willen werken met iemand die geen inhoudelijk gesprek voert en vervolgens *dat* zegt?


Dat was de lange versie (ik kan er ook, blijkt, lang over zijn). Dat is waarom er geen samenwerking is. -- Welnu, de vraag is: hoe nu verder?


[^1]: We lezen in de boekenclub [*Learning Domain-Driven Design*](https://www.oreilly.com/library/view/learning-domain-driven-design/9781098100124/ "Vlad Khononov, 'Learning Domain-Driven Design: Aligning Software Architecture and Business Strategy', O'Reily Media Inc. 2021") van [Vlad Khononov](https://vladikk.com/). In [DDD](/tags/domain-driven-design/ "Blogs met de tag 'domain-driven design'")-termen: de functionaliteit bevindt zich in een generiek [subdomein](/tags/strategische-subdomeinen/ "Blogs met de tag 'strategische subdomeinen'"); wat jij voorstelt is dit te bombarderen tot een ondersteunend subdomein. Zie ook [deze blog](/blog/22/06/de-ontdekking-van-strategische-subdomeinen/ "'De ontdekking van strategische subdomeinen'"). Het boek kreeg overigens [een eervolle vermelding als één van mijn favoriete boeken van 2022](/blog/22/12/de-beste-boeken-over-software-ontwikkeling-die-ik-in-2022-las/ "'De beste boeken over software ontwikkeling die ik in 2022 las'").

[^2]: Ik schreef eerder over dit moment in [deze blog](WIE_KADERT_DE_KADERS "'Wie kadert de kaders?'")