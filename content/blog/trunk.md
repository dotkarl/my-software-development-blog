---
title: "\"Trunk\""
author: "Karl van Heijster"
date: 2025-10-10T13:12:07+02:00
draft: true
comments: true
tags: ["continuous delivery", "continuous deployment", "sprint retrospective", "trunk-based development"]
summary: "Op het virtuele bord van onze Retrospective verscheen in de kolom <span style=\"font-variant:small-caps;\">kan beter</span> een sticky met maar één woord erop: 'trunk'. Na een aardige tijd *trunk-based* te hebben ontwikkeld, bekende een collega de werkwijze nog altijd niet helemaal onder de knie te hebben."
---

Op het virtuele bord van onze [Retrospective](/tags/sprint-retrospective/ "Blogs met de tag 'sprint retrospective'") verscheen in de kolom <span style="font-variant:small-caps;">kan beter</span> een sticky met maar één woord erop: 'trunk'. Na een aardige tijd [*trunk-based*](/tags/trunk-based-development/ "Blogs met de tag 'trunk-based development") te hebben ontwikkeld, bekende een collega de werkwijze nog altijd niet helemaal onder de knie te hebben.


Hij zag mij meermaals per dag mijn code integreren met *trunk*, onze main branch, en vroeg zich af: maar hoe dan? Want alle code die op die branch terechtkomt, wordt onmiddellijk uitgerold op productie.[^1] Daarom pushte hij zijn code één keer in de twee, drie dagen. Hij wou de productieomgeving immers niet om zeep helpen met halfbakken functionaliteit. Hij kon maar niet begrijpen, hoe kon ik mijn features zo snel afronden? 


(Had het soms iets te maken met het feit dat ik aan de back-end werk, dat het daar makkelijker is? Is *continuous deployment* gewoonweg niet voor je weggelegd als je aan de *user interface* sleutelt?)


## Feature branches


Ho, zei ik, stapje terug. Want er zit een problematische aanname in deze voorstelling van zaken. En dit zit hem in het idee dat ik code pas richting *trunk* push zodra de feature is afgerond. Of, anders gezegd: de problematische overtuiging is het idee dat *alleen afgeronde features op productie mogen worden uitgerold.*


Zo lang je die aanname, die overtuiging niet loslaat, dan is *continuous deployment* onmogelijk.


Begrijp me niet verkeerd, het is een heel begrijpelijke aanname. De meeste ontwikkelaars anno nu -- ik ook -- zijn opgegroeid in een wereld waarin er wordt gewerkt met [*pull requests*](/tags/pull-requests/ "Blogs met de tag 'pull requests'") (PRs). Die manier van werken schrijft voor: trek een nieuwe branch van de main branch, doe daar je wijzigingen op, en zodra je wijzigingen compleet zijn, merge die branch dan terug. 


Binnen die wereld is het idee dat features pas gemergd worden volstrekt gerechtvaardigd. Sterker nog, de hele bestaansreden van [feature branches](/tags/feature-branching/ "Blogs met de tag 'feature branching'") zit 'm in het gescheiden houden van voltooide van onvoltooide code. 


Maar het is belangrijk om te beseffen: die overtuiging komt voort uit een conventie, en zodra je die conventie laat varen, dien je de overtuiging eveneens los te laten. Het probleem van mijn collega, was dat hij met het [mentale model](/tags/mentaal-model/ "Blogs met de tag 'mentaal model'") van feature branches toepaste op de realiteit van *trunk-based development* en *continuous deployment*.


## Conceptueel onderscheid


Ik zei: 'Ik push nooit een complete feature naar productie -- *nooit*. Ik push een stukje code naar productie, een nieuw algoritme bijvoorbeeld, dat door nog helemaal niets gebruikt wordt. En daarna breid ik, [aan de hand van tests](/tags/test-driven-development/ "Blogs met de tag 'test-driven development'"), de functionaliteit uit, [één test per keer](/blog/22/04/een-test-per-keer/ "'Eén test per keer'"). Elke keer als er een nieuwe test is toegevoegd en de complete testsuite slaagt, dan commit ik. En dan refactor ik de boel, en dan commit ik. En dan voeg ik opnieuw een nieuwe test toe, en laat alles slagen, en dan commit ik. En pas helemaal aan het eind van de rit, dan knoop ik die nieuwe code aan het bestaande systeem, bijvoorbeeld door een nieuw [API-endpoint](/tags/web-apis/ "Blogs met de tag 'web API's'") toe te voegen, en dán is de feature pas beschikbaar. Maar voordat we op dat punt aan zijn gekomen heb ik soms wel honderd keer gecommit en wel dertig keer gepusht.'


Je kunt *onmiddellijk* naar productie deployen -- altijd en overal, ook als je feature nog niet af is -- *als je er maar voor zorgt dat die onafgeronde feature geen impact heeft op de huidige werking van het systeem.*


Wat ik hem beschreef was de ontkoppeling van deployments en releases. Want een deployment naar productie is -- conceptueel -- iets anders dan het releasen van een feature. Maar voor wie met PR's werkt zijn deze doorgaans -- praktisch -- hetzelfde. Eén van de belangrijkste bijdragen van [CI](/tags/continuous-integration/ "Blogs met de tag 'continuous integration'")/[CD](/tags/continuous-delivery/ "Blogs met de tag 'continuous delivery'") met *trunk-based development* aan de praktijk van softwareontwikkeling, is dat ze in de praktijk recht doet aan het conceptuele onderscheid tussen deployments en releases. 


Je kunt wel honderd keer per dag naar productie deployen, zo lang je gebruikers daar niets van merken. En pas als alles op de productieomgeving staat en goed getest is, dan maak je de nieuwe functionaliteit beschikbaar voor je gebruikers. Vaak is dat, de feitelijke release dus, niet meer dan het omzetten van een *feature flag*.


'Het klinkt heel eenvoudig, wat je zegt,' zei hij. 'Maar in de praktijk blijft het toch lastig.'


'Dat klopt,' antwoordde ik, 'totdat je het doorhebt.


[^1]: Hoe dat op een veilige manier kan, wordt uitgebreid uiteengezet in [*Continuous Deployment*](https://www.oreilly.com/library/view/continuous-deployment/9781098146719/ "Valentina Servile, 'Continuous Deployment: Enable Faster Feedback, Safer Releases, and More Reliable Software', O'Reilly Media Inc. 2024") van [Valentina Servile](https://www.linkedin.com/in/valentina-servile/), [één van mijn favoriete boeken van 2025](LINK_HERE_PLEASE). Toen hij in het team begon, gaf ik hem mijn exemplaar van het boek, maar hij heeft het, helaas, niet gelezen.