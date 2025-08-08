---
title: "De theorie van het geünificeerde domeinmodel"
author: "Karl van Heijster"
date: 2025-08-08T08:01:26+02:00
draft: false
comments: true
tags: ["domain-driven design", "domeinmodel", "filosofie"]
summary: "Als je de toepassingsgebied van het model groot genoeg maakt, wordt bijna elke waarde optioneel. Hoe groter de reikwijdte, hoe minder uitgesproken het model mag zijn. Hoe minder uitgesproken mag zijn, hoe groter de kans wordt op de introductie van bugs. -- Het geünificeerde model gaat dan, *precies omdat het geünificeerd is*, aan zijn eigen bestaansrecht voorbij."
---

Er is een werkgroep opgericht met ontwikkelaars uit verschillende teams. Het idee is: één domeinmodel voor het hele toetsconstructieproces, van het bedenken van de toetsvragen (*items* in vakjargon; uitgesproken als "ie-tum") tot aan hun afname en de analyse van de resultaten. (-- Ik werk bij [Cito](https://cito.nl/), we maken toetsen; dat is ons bestaansrecht.) Zou ik niet aan moeten sluiten?


Ik mijmerde: "Ik hoop van harte dat het hen lukt, maar ik vrees dat het een luchtkasteel zal blijken te zijn." Mijn collega, een architect, glimlachte en zei: "Ik denk het, jij zegt het." 


We sloten allebei niet aan, besloten we.


{{< asterisk >}}


Het is niet zo dat het idee geen aantrekkingskracht heeft -- integendeel, het zou een reëel probleem oplossen. We werken met verschillende interne systemen die met elkaar moeten communiceren. Elk systeem heeft zijn eigen idee van wat een *item* of een *toets* of *toetsdesign* is (of *score* of *P-waarde* of *leerlingresultaten*, al naar gelang ze zich met deze zaken bezig hoeven te houden). 


Regelmatig praten de systemen langs elkaar heen: een veld -- een deeltje informatie -- dat systeem A nodig heeft ontbreekt bij systeem B. Of erger nog: een veld dat bij systeem B de ene betekenis heeft, heeft bij systeem C een andere (maar subtiel verwante) betekenis. In dat geval *lijken* de systemen met elkaar te communiceren -- de ergste vorm van miscommunicatie.


Een geünificeerd model, een [Theorie van Alles](https://nl.wikipedia.org/wiki/Theorie_van_alles "'Theorie van alles', Wikipedia"), zou zulke moeilijk te achterhalen -- want systeemoverstijgende -- [bugs](/tags/bugs/ "Blogs met de tag 'bugs'") de kop in drukken. Dit is de droom: hadden we maar dezelfde woorden! -- dan zouden we nooit meer elkaar verkeerd begrijpen!


{{< asterisk >}}


Het idee is niet nieuw, natuurlijk. [Gottfried Wilhelm Leibniz](https://plato.stanford.edu/entries/leibniz/ "'Gottfried Wilhelm Leibniz', Stanford Encyclopedia of Philosophy") stelde zich in de zeventiende eeuw al een logisch volmaakte taal voor, waarmee meningsverschillen op een mechanistische manier konden worden opgelost. De [logisch-positivisten](https://plato.stanford.edu/entries/logical-empiricism/ "'Logical Empiricism', Stanford Encyclopedia of Philosophy") van de [Wiener Kreis](https://plato.stanford.edu/entries/vienna-circle/ "'Vienna Circle', Stanford Encyclopedia of Philosophy")[^1] namen de taak van het uitwerken van zo'n taal in het begin van de twintigste eeuw zelfs expliciet op; onder andere de doorbraken in logica van [Gottlob Frege](https://plato.stanford.edu/entries/frege/ "'Gottlob Frege', Stanford Encyclopedia of Philosophy") had hen het vertrouwen gegeven dat het eindelijk mogelijk was.[^2]


Maar ondanks al hun inspanningen bestaat er nog altijd geen logisch volmaakte taal die onze wereld spiegelt op [metafysisch](https://plato.stanford.edu/entries/metaphysics/ "'Metaphysics', Stanford Encyclopedia of Philosophy") niveau. (-- Een deel van het probleem zit 'm ongetwijfeld in het feit dat we niet goed weten wat dat betekent, de wereld op metafyisisch niveau spiegelen.)


{{< asterisk >}}


Vergeleken met de ideeën van Leibniz en de Wiener Kreis is het idee van een geünificeerd domeinmodel natuurlijk enorm bescheiden. Maar nu ook weer niet zó enorm bescheiden. Het is niet per se duidelijk welke objecten in dat model thuishoren, en nog minder welke velden ze zouden moeten hebben.


Natuurlijk zijn er wel voor de hand liggende en minder voor de hand liggende kandidaten. `Item` is een voor de hand liggende kandidaat. Maar welke velden zou `Item` moeten hebben? Een `Id`, vooruit, en een `Version` is vast ook wel handig. 


Maar ook de inhoud van het item (zeg: `ItemContent`)? Die is bij de constructie essentieel, maar bij de analyse overbodig. Is het erg dat er wat data uit een eerdere stap in het proces zijn weg vindt naar een latere stap? Misschien niet. 


En hoe zit het met iets als de moeilijkheid van een item (`PValue`)? Dat is vroeg in het proces nog onbekend en speelt pas later een rol. Hoe erg is het als ontwikkelaars vroeg in het proces met een veld geconfronteerd worden dat pas later een rol gaat spelen? Je zou `PValue` optioneel kunnen maken, omdat die vroeg in het process nog `null` mag zijn. Maar later in het proces is de waarde niet meer optioneel, en op dat moment is er niets in je domeinmodel wat je ervan weerhoudt 'm `null` te maken.


{{< asterisk >}}


Als je de toepassingsgebied van het model groot genoeg maakt, wordt bijna elke waarde optioneel. Hoe groter de reikwijdte, hoe minder uitgesproken het model mag zijn. Hoe minder uitgesproken mag zijn, hoe groter de kans wordt op de introductie van bugs. -- Het geünificeerde model gaat dan, *precies omdat het geünificeerd is*, aan zijn eigen bestaansrecht voorbij.


{{< asterisk >}}


[*Legacy*](/tags/legacy-code/ "Blogs met de tag 'legacy code'") monolieten zijn vaak moeilijk hanteerbaar, precies omdat ze de verschillende betekenissen die een woord kan hebben, in één class onder proberen te brengen.


Die modelschuld komt voort een onvolledig begrip van [Domain-Driven Design](/tags/domain-driven-design/ "Blogs met de tag 'domain-driven design'") (DDD). DDD zegt inderdaad: spiegel de woorden van het domein in je code. Maar DDD zegt óók: heb oog voor het feit dat woorden verschillende betekenissen kunnen hebben in verschillende delen van je domein.[^3]


Het idee van het geünificeerde model ziet die laatste observatie over het hoofd, en doet daarmee effectief een stap terug in de tijd. Het is een onbedoelde stap van een gedistribueerde systeemlandschap richting een [gedistribueerde monoliet](https://www.techtarget.com/searchapparchitecture/tip/The-distributed-monolith-What-it-is-and-how-to-escape-it "'The distributed monolith: What it is and how to escape it', Tom Nolle @ TechTarget").


{{< asterisk >}}


Maar -- waar komt die behoefte aan een geünificeerd domeinmodel vandaan? Wat veronderstelt zij over taal en over de wereld? -- uit welke [filosofische vooronderstellingen](/blog/24/12/de-filosofische-geschiedenis-van-een-ontwerpkeuze/ "'De filosofische geschiedenis van een ontwerpkeuze'") ontspruit zij? 

[^1]: [*The Vienna Circle: The Story of Logical Empiricism*](https://www.routledge.com/The-Vienna-Circle-The-Story-of-Logical-Empiricism/Sarkar/p/book/9781032627304 "Sahotra Sarkar, 'The Vienna Circle: The Story of Logical Empiricism', Routledge 2024") van [Sahotra Sarkar](https://sahotra-sarkar.org/) biedt een uitstekende inleiding in de materie. Ik [recenseerde](https://boekenkrant.com/recensie/the-vienna-circle/ "'Het wetenschappelijk wereldbeeld uit Wenen' @ Boekenkrant.com") het boek voor [Boekenkrant.com](https://boekenkrant.com/).

[^2]: Frege had ook een zeer grote invloed op het vroege werk van mijn favoriete filosoof [Ludwig Wittgenstein](https://plato.stanford.edu/entries/wittgenstein/ "'Ludwig Wittgenstein', Stanford Encyclopedia of Philosophy"). Zie ook [deze](/blog/23/09/pseudofilosofische-onderzoekingen-i-en-ii/ "Pseudofilosofische onderzoekingen (I & II)"), [deze](/blog/23/12/logisch-filosofische-verhandeling/ "'Logisch-filosofische verhandeling'") en [deze blog](/blog/21/08/domain-driven-design-en-ludwig-wittgenstein/ "'Domain-Driven Design en Ludwig Wittgenstein'").

[^3]: Zie [deze blog](/blog/22/11/zes-dingen-die-ik-leerde-op-techorama/ "'Zes dingen die ik leerde op Techorama'") (met dank aan [Kenny Baas-Schwegler](https://weave-it.org/)): <blockquote><p>*Legacy* systemen zijn vaak monolieten wier model meerdere *bounded contexts* omvat -- dat is precies één van de redenen waarom ze zo ononderhoudbaar zijn geworden. Elke *bounded context* moet in zijn eigen model worden ondergebracht, en mag niet direct interacteren met de modellen uit andere *bounded contexts*.</p></blockquote>Een [*bounded context*](https://martinfowler.com/bliki/BoundedContext.html "'Bounded Context', Martin Fowler") is een linguïstische grens in het domein. Het is vergelijkbaar met Wittgensteins notie van [*taalspel*](https://en.wikipedia.org/wiki/Language_game_(philosophy) "'Language game (philosophy)', Wittgenstein"); zie ook [deze blog](/blog/21/08/domain-driven-design-en-ludwig-wittgenstein/ "'Domain-Driven Design en Ludwig Wittgenstein'").
