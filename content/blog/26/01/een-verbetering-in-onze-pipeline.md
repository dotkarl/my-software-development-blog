---
title: "Een verbetering (?) in onze pipeline"
author: "Karl van Heijster"
date: 2026-01-16T08:10:01+01:00
draft: false
comments: true
tags: ['build pipelines', 'continuous delivery', 'trunk-based development']
summary: "De verbetering was eenvoudig: rol niet meer altijd alles uit, maar kijk naar de wijziging in de laatste commit. Bevindt die zich in de front-end, rol dan de front-end uit; bevindt die zich in de back-end, dan de back-end. Simpel, duidelijk, efficiënt: iedereen blij. -- Maar wat we over het hoofd hadden gezien: *merges*. Help! Probleem!"
---

In de [popcultuur](/blog/25/02/softwareontwikkeling-is-een-popcultuur-maar-hoeft-dat-niet-te-zijn/ "'Softwareontwikkeling is een popcultuur (maar hoeft dat niet te zijn)'") die ons vakgebied kenmerkt (zie ook [deze blog](/blog/25/02/wat-houdt-ons-tegen-continu-te-leveren/ "'Wat houdt ons tegen continu te leveren?'")), is de rijke set aan ontwikkelpraktijken waar [*continuous delivery*](/tags/continuous-delivery/ "Blogs met de tag 'continuous delivery'") uit bestaat, platgeslagen tot het hebben van een geautomatiseerde [*build & deployment pipeline*](https://martinfowler.com/bliki/DeploymentPipeline.html "'Deployment Pipeline', Martin Fowler"). Maar het gaat er bij *continuous delivery* helemaal niet om dat je een pipeline hebt, het gaat erom dat je je werk op zo'n manier vormgeeft dat je continu in kleine brokjes [waarde](/tags/waarde/ "Blogs met de tag 'waarde'") kunt leveren. *Continuous delivery* is: zorg dat elke [commit](https://git-scm.com/docs/git-commit "'git-commit', Git") een werkende instantie van het systeem vertegenwoordigt én zo klein mogelijk is én meteen naar productie kan worden uitgerold.[^1]


## Onderhoud


Dat gezegd hebbend, natuurlijk is een pipeline een belangrijk onderdeel van deze manier van werken. Immers, een team zal zonder een geautomatiseerde uitrol onmogelijk continu waarde kunnen leveren. Een pipeline is een inmiddels vanzelfsprekend onderdeel van elke codebase. Als zodanig zal deze, net als de rest van de code, regelmatig onderhouden moeten worden.


Zo ook bij ons. De eerste versie van onze pipeline was enorm eenvoudig. Na elke commit op onze *main branch*, [*trunk*](/tags/trunk-based-development/ "Blogs met de tag 'trunk-based development'"), worden de front- en back-end [getest](/tags/testen/ "Blogs met de tag 'testen'") en als die tests slagen, worden beide uitgerold op de productieomgeving. Dit is zo'n beetje de eenvoudigste pipeline die je kunt hebben, en voor de (nu nog) kleine applicatie die mijn team onderhoudt, is het meer dan voldoende.


Maar het is, als ik eerlijk ben, wel een behoorlijk inefficiënte pipeline. Dat komt voort uit onze manier van werken. We hebben in ons team één back-ender (dat ben ik) en twee front-enders. En als wij iets wijzigen, dan doen we dat meestal in onze eigen hoek van de code. Een wijziging op *trunk* raakt maar zelden zowel de front- als de back-end. Met andere woorden: eigenlijk hoeft over het algemeen alleen maar de front- *of* de back-end te worden uitgerold bij een [*push*](https://git-scm.com/docs/git-push "'git-push', Git") naar *trunk*.


## Probleem!


Een collega van me voerde onlangs precies deze pipelineoptimalistie door. De implementatie was simpel: rol niet meer altijd alles uit, maar kijk naar de wijziging in de laatste commit. Bevindt die zich in de front-end, rol dan de front-end uit; bevindt die zich in de back-end, dan de back-end. Simpel, duidelijk, efficiënt: iedereen blij. 


Maar wat we over het hoofd hadden gezien: [*merges*](https://git-scm.com/docs/git-merge "'git-merge', Git"). Stel nu dat je enkele wijzigingen hebt gedaan aan de back-end en je commit(s) wil *pushen* naar *trunk*. Zo lang jouw versie up to date is met de laatste versie op *trunk*, is dat geen probleem. Jouw wijzigingen aan de back-end worden dan uitgerold en de front-end blijft zoals die is. 


Maar als je lokale *branch* achterloopt op *trunk*, dan gebeurt er iets anders. Dan [*pull*](https://git-scm.com/docs/git-pull "'git-pull', Git") je eerst de laatste versie en wordt er een *merge commit* aangemaakt op jouw *branch*.[^2] In die *commit* zitten de laatste wijzigingen van de front-end. Als je deze *commit* nu naar *trunk* *pusht*, dan ziet de pipeline: er is iets gewijzigd aan de front-end *en niet aan de back-end*. En dus gaat deze alleen de front-end opnieuw uitrollen.


Help! Probleem!


Snel kwamen we bijeen om dit issue te bespreken. Hoe konden we het oplossen? Misschien: we gaan na welke commits er in deze nieuwe versie zitten ten opzichte van de uitgerolde versie? Dan leiden de scope van de wijzigingen af uit die reeks commits, zoiets? Maar hoe zou dat eruit zien? Iemand bracht in dat ze bij zijn vorige werkgever werkten met [*tags*](https://git-scm.com/docs/git-tag "'git-tag', Git"), zouden we daar soms iets mee moeten? Of anders de [Git API van Azure Devops](https://learn.microsoft.com/en-us/rest/api/azure/devops/git/?view=azure-devops-rest-7.2 "'Git API', Microsoft documentatie"), daar hadden we geen ervaring mee, maar misschien zou die ons uit de brand kunnen helpen?


## En als...?


We bekeken de opties en opeens hoorde ik mezelf zeggen: *en als we nu niets doen?* Hoe groot is het probleem als je wijziging niet onmiddellijk wordt uitgerold op productie? 


Nu ja, dat ligt eraan hoe je je werk organiseert. Als je twee weken lang op je eigen branch werkt, daar een complete feature op implementeert, en die in één keer *mergt* naar *trunk*, en dan weer twee weken lang op een eigen *branch* aan de volgende feature sleutelt, dan heb je twee weken lang last van deze situatie.


Maar als je, zeg, elke vijftien minuten een nieuwe commit richting *trunk* stuurt, dan heeft dit probleem maar effectief vijftien minuten bestaan. Het is feitelijk een non-issue dat je code niet *nu* wordt uitgerold, omdat je code over een paar minuten toch wel op productie terechtkomt.


"Mijn code wordt niet uitgerold" is alleen een probleem als je in grote, discrete brokken werkt. Maar als je output bestaat uit een continue stroom van codewijzigingen, dan verliest dit probleem zijn urgentie.


## Geen bug


In plaats van deze situatie in onze pipeline te zien als een [bug](/tags/bugs/ "Blogs met de tag 'bugs'"), zouden we haar ook als een *feature* kunnen opvatten. Het is een keuze om deze hobbel in de uitrol te zien als een fout. Je zou het net zo goed kunnen zien als een stimulans om zo vaak mogelijk te integreren met *trunk*.


En dat is een stimulans om de *commits* zo klein mogelijk te houden. En dat stimuleert om je wijzigingen zo vorm te geven, dat ze het systeem niet breken. En dat is *continuous delivery*.


Ik realiseerde me iets, naar aanleiding van deze episode. We zijn, als softwareontwikkelaars en als mensen in het algemeen, geneigd om problemen direct op te willen lossen, om direct in te willen grijpen. Maar dat is niet per se altijd de beste reactie. Want die reactie *veronderstelt dat er een probleem is*, en dat hoeft helemaal niet zo te zijn. 


Het zijn onze verwachtingen die een situatie *als probleem* aan ons presenteren. Maar als we die verwachtingen los kunnen laten, dan blijft er slechts een situatie over, een gebeuren. En als je dat gebeuren ademruimte geeft, dan opent zich de mogelijkheid om het geheel van een andere kant te bezien -- en iets nieuws te leren.


Het je eigen maken van een andere manier van werken, vraagt van je ingesleten gewoonten te herzien, hoe tegenintuïtief of [pijnlijk](/blog/26/01/veranderen-doet-pijn/ "'Veranderen doet pijn'") dat soms ook mag zijn.


[^1]: Het jongere broertje van *continuous delivery*, [*continuous deployment*](/tags/continuous-deployment/ "Blogs met de tag 'continuous deployment'") is: dat alles én rol daadwerkelijk uit naar productie.

[^2]: Althans, als je een `git pull` doet en niet `git pull --rebase`. [Deze video](https://www.youtube.com/watch?v=xN1-2p06Urc "'Never* use git pull', Philomatic @ YouTube") leerde me echter dat je [*rebase*](https://git-scm.com/docs/git-rebase "'git-rebase', Git") prima als standaard integratiemechanisme kan nemen en alleen terug hoeft te vallen op de normale manier bij conflicten. Hiervoor is het wel nodig dat je Git op de commandline gebruikt, want de [IDE](https://nl.wikipedia.org/wiki/Integrated_development_environment "'Integrated development environment', Wikipedia") *rebaset* niet.