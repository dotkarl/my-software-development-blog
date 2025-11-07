---
title: "Gaan we snel genoeg?"
author: "Karl van Heijster"
date: 2025-08-01T08:06:44+02:00
draft: false
comments: true
tags: ["continuous deployment", "druk", "software ontwikkelaar (rol)", "software ontwikkelen", "vakmanschap", "verantwoordelijkheid"]
summary: "Sinds kort ben ik in van team gewisseld. Sinds die wissel mag ik mezelf met recht *full stack developer* noemen. Ik ben verantwoordelijk voor de back-end, de front-end -- de database, de infrastructuur, security -- de requirementsanalyse, de tests... Je kunt je voorstellen: het kan even duren voordat een (ogenschijnlijk) eenvoudige feature afgerond is. Af en toe maakt een knagend schuldgevoel zich dan ook meester van me: *gaan we snel genoeg?*"
---

Sinds kort ben ik in van team gewisseld. Al voelt het af en toe juister om te zeggen: sinds kort *ben* ik een ander team. Het project is bescheiden in scope en bevindt zich in een vroege fase, op het moment ben ik nog de enige ontwikkelaar.[^1]


Sinds die wissel mag ik mezelf met recht *full stack developer* noemen. Ik ben verantwoordelijk voor de back-end, de front-end -- de [database](/tags/databases/ "Blogs met de tag 'databases'"), de infrastructuur, [security](/tags/security/ "Blogs met de tag 'security'") -- de [requirementsanalyse](/tags/requirements/ "Blogs met de tag 'requirementsanalyse'"), de [tests](/tags/testen/ "Blogs met de tag 'testen'")... 


Je kunt je voorstellen: het kan even duren voordat een (ogenschijnlijk) eenvoudige feature afgerond is. Af en toe maakt een knagend schuldgevoel zich dan ook meester van me: *gaan we snel genoeg?*


{{< asterisk >}}


De vraag is natuurlijk: vergeleken met wat? -- In het licht van de verwachte deadline? Maar: waar is die op gebaseerd? Toch zeker op dat wat we verwachten af te krijgen binnen een redelijke tijd. Maar waar is die verwachting op gebaseerd? Op onze collectieve ervaringen van softwareontwikkeling. Maar die ervaringen zijn gebaseerd op teams van meer dan één persoon.


Meer nog: ze zijn gebaseerd op teams waarin verschillende specialisaties vertegenwoordigd zijn. Ik kan redelijk snel een stuk logica aan de back-end uitcoderen -- dat is mijn specialisatie --, maar aan de front-end loop ik regelmatig met de simpelste taak te hannessen. Ik weet hoe [SQL](/tags/sql/ "Blogs met de tag 'SQL'")-databases werken, maar het is een tijd geleden dat ik er een vanuit het niets uit de grond heb gestampt. Geautomatiseerde buildpipelines heb ik zelfs nog nooit helemaal zelf hoeven opzetten.


Snel ging die eerste feature niet -- maar tjonge, het is lang geleden dat ik zoveel heb geleerd in zo'n korte tijd!


{{< asterisk >}}


Je vergelijkt met een *verwachting*. Je vergelijkt met iets wat zich niet in de werkelijk bevindt, maar in je hoofd. 


In werkelijkheid zal een taak het altijd afleggen tegen haar verloop in je hoofd. Want om een taak af te ronden in je hoofd hoeft er helemaal niets gebeuren. En wat zich al helemaal niet in je hoofd afspeelt, zijn alle tegenslagen die je onderweg tegenkomt waarvan je niet eens wist dat je ze niet wist.


Je wil graag naar de volgende feature -- dat begrijp ik. Dat is omdat je je voor kunt stellen dat de huidige feature al is afgerond. Maar hij is nog niet afgerond. -- Dat hij *werkt* hoeft niet eens te betekenen dat hij is afgerond. 


{{< asterisk >}}


Sommige taken *moeten* gewoon gebeuren, anders heb je niets: het schrijven van de code, het inrichten van een database, het uitrollen van je inspanningen naar een productieomgeving. Andere dingen lijken minder belangrijk: testen, security, logging -- ze worden niet voor niets *non functionals* genoemd. In dat licht verbaast het niet dat sommige ontwikkelaars -- en sommige ontwikkel*teams* -- deze zaken overslaan wanneer ze zich onder druk gezet voelen om snel te leveren. (Zie ook [deze blog](/blog/23/04/tijdreis/ "'Tijdreis'").)


Maar dat ze niet nodig zijn om een systeem te kunnen laten functioneren, betekent niet dat ze niet belangrijk zijn. [Valentina Servile](https://www.linkedin.com/in/valentina-servile/) conceptualiseert deze functionaliteiten in [*Continuous Deployment*](https://www.oreilly.com/library/view/continuous-deployment/9781098146719/ "Valentina Servile, 'Continuous Deployment: Enable Faster Feedback, Safer Releases, and More Reliable Software', O'Reilly Media Inc. 2024") als (horizontale) lagen in een (verticale) functionele *slice*.


Een systeem bestaat niet uit alleen een data-, logica-, en UI-laag -- dat idee representeert een te enggeestige opvatting van wat softwareontwikkeling behelst *van conceptualisatie tot deployment*. Een ontwikkelteam is ook verantwoordelijk voor de test-, security- en logginglaag. (En voor eventuele andere lagen, als de requirements daar om vragen.)


Beknibbelen op het aantal "lagen" waar een feature uit bestaat, is een trucje om het *gevoel van* snelheid te bewerkstelligen. Maar het zorgt er op de langere termijn voor dat de ontwikkeling juist langzamer gaat -- omdat er geen [vangnet](/blog/22/09/tests-als-vangnet/ "'Tests als vangnet'") van tests is dat fouten er snel uitfiltert; omdat er geen logging is die het eenvoudig maakt fouten te reproduceren; omdat de gaten in de security later alsnog gedicht mogen worden, hopelijk vóórdat ze door kwaadwillenden ontdekt worden.


{{< asterisk >}}


Natuurlijk betekent dat niet dat elke laag evenveel aandacht moet krijgen in deze fase van de ontwikkeling. Integendeel, de mate waarin een laag ontwikkeld wordt, moet worden bezien vanuit de mate waarin er waarde opgeleverd wordt. -- In zoverre klopt de veronderstelling dat de functionele lagen belangrijker zijn dan de andere.


Om objecten op te kunnen slaan en op te kunnen vragen, is het niet nodig om eerst gebruikers in te laten loggen. Maar om ervoor te zorgen dat pottenkijkers geen toegang krijgen tot de data, hebben we de toegang tot de applicatie beperkt tot het interne netwerk. De security-laag is daarmee voldoende ontwikkeld voor de huidige versie van het systeem.


{{< asterisk >}}


Wat is het criterium voor succes? -- Het moet werken, uiteraard, en het moet werken zonder ten onder te gaan aan [bugs](/tags/bugs/ "Blogs met de tag 'bugs'"). -- De vraag is: *wat* moet werken, precies? Het systeem met alle features die we bij elkaar gebrainstormd hebben? (Het systeem zoals in je hoofd.) -- Je kunt de vraag ook zo stellen: wat hoeft *niet* te werken, wil dit systeem een succes zijn? 


-- Na de eerste twee features, het opslaan van een object en deze tonen in een lijst, besloten we om niet op de ingeslagen weg voort te gaan. We schoven het tonen van een detailscherm naar achteren, net als het verwijderen van dat object. Want het was belangrijker dat een ander object ook kon worden opgeslagen, en kon worden gekoppeld aan dat eerste object. Als we konden bewijzen dat we dat foutloos konden doen, dan hadden we bewezen dat het systeem meerwaarde zou bieden ten opzichte van het huidige handmatige proces.


{{< asterisk >}}


Je zou je af kunnen vragen: is de vraag die ik mezelf stelde wel de juiste? Het is niet: *Gaan we snel genoeg?* Die vraag nodigt uit te haasten, te beknibbelen op kwaliteit. Het verleidt ons om het aantal lagen waar een systeem uit bestaat ongerechtvaardigd terug te brengen tot het zuiver functionele, en daarmee ons [vakmanschap](/tags/vakmanschap/ "Blogs met de tag 'vakmanschap'") overboord te gooien. 


De vraag is veeleer: *Zijn we met het juiste bezig?* -- waarbij "juiste" betekent: het belangrijkste, dat wat het meeste waarde levert in het licht van het probleem dat we op proberen te lossen. Zo ja, dan hoeven we ons er niet druk om te maken dat de minder belangrijke dingen nog niet af zijn -- ze zijn immers *minder belangrijk*.


De tegenstelling wordt vaak zo gekarakteriseerd: het juiste doen (*doing the right thing*) in plaats van het juist doen (*doing the thing right*). Maar je hebt natuurlijk ook nog: het juiste juist doen (*doing the right thing right*) -- als dat toch eens zou kunnen!


[^1]: Natuurlijk ben ik niet *letterlijk* de enige persoon in het team; een team bestaat uit meer dan alleen ontwikkelaars. Ook aangehaakt zijn: een UX'er, een PO, een [architect](/tags/software-architect-rol/ "Blogs met de tag 'software architect (rol)'") en een manager. -- En op moment van publicatie is er al een tweede ontwikkelaar aangehaakt, joepie!