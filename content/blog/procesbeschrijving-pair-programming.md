---
title: "Procesbeschrijving pair programming"
author: "Karl van Heijster"
date: 2026-07-24T09:03:13+02:00
draft: true
comments: true
tags: ["code reviews", "documentatie", "pair programming", "pull requests"]
summary: "In mijn team werken we niet met *pull requests*. Maar hoe werken we dan? Onze security officer vroeg me een procesbeschrijving op te stellen, deels om de auditers mee tevreden te stellen en deels om kennis te delen. "
---

In mijn team werken we niet met [*pull requests*](/tags/pull-requests/ "Blogs met de tag 'pull requests'") (PR's). Maar hoe werken we dan? Onze security officer vroeg me een procesbeschrijving op te stellen, deels om de auditers mee tevreden te stellen en deels om kennis te delen. 


Ik baseer me hiervoor met name op het werk van [Andrea Laforgia](https://substack.com/@a4al6a). Hij zet in [*Stop Using Pull Requests*](https://a4al6a.substack.com/p/stop-using-pull-requests "'Stop Using Pull Requests', Andrea Laforgia") uitstekend alle redenen uiteen om niet aan PR's te willen doen. Voor de verslaglegging van het reviewproces baseer ik me op zijn [*Four Eyes Without Pull Requests*](https://a4al6a.substack.com/p/four-eyes-without-pull-requests "'Four Eyes Without Pull Requests', Andrea Laforgia").


{{< asterisk >}}


### Uitgangspunten


(1) Code dient door een collega gereviewd te worden ten behoeve van kwaliteit en kennisdeling (het [vier ogen-principe](https://en.wikipedia.org/wiki/Maker-checker "'Maker-checker', Wikipedia")).

(2) De naam van de reviewer dient te worden vastgelegd ten behoeve van traceerbaarheid.


### Happy path


Ontwikkelaars ontwikkelen software in [*pairs*](/tags/pair-programming/ "Blogs met de tag 'pair programming'") (tweetallen) of *ensembles* (groepen van meer dan twee personen).[^1] Dit dekt het vier ogen-principe.


Vastlegging van de namen van co-auteur(s) gaat middels de [`Co-authored-by`-trailer](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-highlighting-commits/about-co-authored-by), e.g.:


```bash
$ git commit -m "feat(feature): <longer description of work done>
>
> Co-authored-by: John Doe <john.doe@company.com>
> Co-authored-by: Jane Doe <jane.doe@company.com>"
```


### Alternate path


Als *pairing* niet mogelijk is, bijvoorbeeld omdat alle collega's momenteel niet beschikbaar zijn, dan is het mogelijk om alleen te werken. In dit geval wijst de ontwikkelaar (in overleg) een collega aan die de code zal reviewen.[^2] De code wordt dan gepusht naar *trunk* en achteraf door de aangewezen collega samen met de oorspronkelijke ontwikkelaar gereviewd.[^3]


Vastlegging van de namen van de reviewer(s) gaat middels de `Reviewed-by`-trailer, e.g.:


```bash
$ git commit -m "refactor(feature): <longer description of work done>
>
> Reviewed-by: John Doe <john.doe@company.com>"
```


### Toelichting


Veel ontwikkelteams maken gebruik van *pull requests* om code te reviewen. In dit project wordt daar bewust van afgeweken. De reden hiervoor is dat PR's frictie introduceren in het ontwikkelproces in de vorm van hand-overs, vertraging, context switching, en uitstel van integratie. 


De grootste toegevoegde waarde van PR's ligt in kennisdeling. Dit doel wordt echter effectiever bereikt middels *pairing*.


[^1]: Dit maakt van [samenwerking](/tags/samenwerking/ "Blogs met de tag 'samenwerking'") het uitgangspunt. Programmeren is binnen deze visie niet langer een paradigmatisch solistische activiteit. Deze zienswijze dient meegenomen te worden naar het *alternate path*: ook wanneer er achteraf gereviewd wordt, is het uitgangspunt samenwerking en niet het controleren van elkaars werk. Dat betekent: we verkiezen een *face to face* gesprek over de code boven het documenteren van kritiekpunten.

[^2]: We hebben (vooralsnog?) geen strikte regels over hoe het selecteren van reviewers in zijn werk gaat. Tot de mogelijkheden behoren: van tevoren, bijvoorbeeld tijdens een [Daily Standup](/tags/daily-standup/ "Blogs met de tag 'daily standup'"), afspreken dat een bepaalde collega de feature zal reviewen; een collega achteraf vragen een commit (of reeks commits) te bekijken, en alles daar tussenin.

[^3]: Merk op dat een review dus geen belemmering vormt om code naar *trunk* te pushen (en merk op dat [*trunk* automatisch uitgerold wordt naar productie](/tags/continuous-deployment/ "Blogs met de tag 'continuous deployment'")). Dit vraagt wat van het inschattingsvermogen en verantwoordelijkheidsgevoel van ontwikkelaars. Kleine, weinig risicovolle wijzigingen als typefouten of eenvoudige [refactorings](/tags/refactoren/ "Blogs met de tag 'refactoren'") kunnen zonder problemen doorgezet worden en achteraf gereviewd. Bij grotere, meer risicovolle wijzigingen of wijzigingen aan bestaand gedrag, is het raadzaam om te *pairen* of op zijn minst de review te doen vóórdat de code gepusht wordt.