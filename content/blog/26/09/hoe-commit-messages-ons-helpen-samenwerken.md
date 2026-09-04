---
title: "Hoe commit messages ons helpen samenwerken"
author: "Karl van Heijster"
date: 2026-09-04T07:13:53+02:00
draft: false
comments: true
tags: ["code reviews", "documentatie", "git", "pair programming", "samenwerking", "trunk-based development"]
summary: "Wie met PR's werkt, werkt met elk groen vinkje zijn administratie bij: *die* ontwikkelaar heeft de code geschreven en *deze* ontwikkelaar heeft die code gereviewd. De rolverdeling wordt automatisch in een systeem vastgelegd. Zoiets hadden wij niet -- niet automatisch."
---

De auditor tikte ons op de vingers. Want wij werken niet met [*pull requests*](/tags/pull-requests/ "Blogs met de tag 'pull requests'") (PR's), maar [*trunk-based*](/tags/trunk-based-development/ "Blogs met de tag 'trunk-based development'") met zoveel mogelijk [*pair programming*](/tags/pair-programming/ "Blogs met de tag 'pair programming'"). Het [vier ogen-principe](https://en.wikipedia.org/wiki/Maker-checker "'Maker-checker', Wikipedia") is daarmee in de werkelijke werkelijkheid gedekt. Maar helaas: in de [papieren werkelijkheid](/tags/documentatie/ "Blogs met de tag 'documentatie'") ontbrak elk spoor van onze goede gewoontes.


Wie met PR's werkt, werkt met elk groen vinkje zijn administratie bij: *die* ontwikkelaar heeft de code geschreven en *deze* ontwikkelaar heeft die [code gereviewd](/tags/code-reviews/ "Blogs met de tag 'code reviews'"). De rolverdeling wordt automatisch in een systeem vastgelegd.


Zoiets hadden wij niet -- niet automatisch. Maar teruggaan naar PR's wilden we[^1] niet, om alle redenen die [Andrea Laforgia](https://substack.com/@a4al6a) in [deze blog](https://a4al6a.substack.com/p/stop-using-pull-requests "'Stop Using Pull Requests', Andrea Laforgia") uiteenzet. Ik stuurde hem een berichtje met de vraag wat we dan moesten, en tot mijn grote verbazing reageerde hij binnen een halfuur met de opmerking dat hij toevallig precies hierover een blog over aan het schrijven was. 


Die blog is [*Four Eyes Without Pull Requests*](https://a4al6a.substack.com/p/four-eyes-without-pull-requests "'Four Eyes Without Pull Requests', Andrea Laforgia"). Daarin stelt hij voor om de administratie bij te houden in [commit-trailers](https://git-scm.com/docs/git-interpret-trailers "'git-interpret-trailers Documentation', Git").[^2] Elke *commit message* moet afsluiten met een (of meerdere) trailer(s) die vastleggen wie de co-auteur (in geval van *pairing*) of reviewer (in geval van solo werk) van die specifieke commit was. 


Deze werkwijze heb ik vastgelegd in een [procesbeschrijving voor *pair programming*](/blog/26/08/procesbeschrijving-pair-programming/, "'Procesbeschrijving pair programming'").


## Validatie


Het probleem is alleen: je moet niet vergeten die trailers daadwerkelijk toe te voegen -- en daar schortte het nogal eens aan, ook bij mij. Gelukkig blijkt dat een probleem ook een oplossing te hebben. Je kan een *commit message* namelijk valideren op de aanwezigheid van zo'n trailer. 


Dat kan op verschillende plekken, zelfs. Wij kozen ervoor om in eerste instantie te valideren aan de *client*-side -- op de machine waar de ontwikkelaar zijn commit maakt. Dit gaf ons namelijk de flexibiliteit om de validatie in noodgevallen te omzeilen. Ik zag ons al tegen de administratieve beperkingen van een nog onvolwassen validatie opboksen op het moment dat we een kritieke [bug](/tags/bugs/ "Blogs met de tag 'bugs'") moesten fixen! Zodra de *client*-side validatie zich bewezen had, zouden we kijken of we ook aan de *server* validatie in wilden bouwen.


*Client*-side validatie kan worden toegevoegd via een [Git Hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks "'Customizing Git - Git Hooks', Git"). Deze voeg je toe in een bestand genaamd `commit-msg` in de `.git\hooks`-folder.[^3] Het afdwingen van de juiste trailers zou er als volgt uit kunnen zien:[^4]

```bash
#!/bin/sh
# Commit message validation
# Validates presence of Co-authored-by / Reviewed-by trailer

commit_msg_file=$1
commit_msg=$(cat "$commit_msg_file")

# Check for trailer (Co-authored-by or Reviewed-by)
if ! echo "$commit_msg" | grep -qE '^(Co-authored-by|Reviewed-by): .+ <.+@.+>$'; then
    printf "\033[0;31mERROR: Missing required trailer!\033[0m\n"
    echo ""
    echo "Commit message must include a trailer:"
    echo "  Co-authored-by / Reviewed-by: Name <email>"
    echo ""
    echo "Your message:"
    printf "  \033[38;5;208m%s\033[0m\n" "$commit_msg"
    exit 1
fi

exit 0
```

Ten behoeve van de leesbaarheid kleuren we de foutmelding rood en de incorrecte *commit message* oranje. Zo helpen we de ontwikkelaars zo snel mogelijk met het identificeren van het probleem.


## Reflectief intermezzo


En het probleem -- als je het een probleem wil noemen -- is: de eerste paar dagen vergeet je *constant* die verdomde trailers toe te voegen! Maar gelukkig, al gauw begint de gewoonte een co-auteur of reviewer te specificeren in je vingers te slijten -- en op de momenten dat deze gewoonte weg begint te glippen, helpt het systeem je weer op de goede weg.


Meer nog: de validatie helpt niet alleen bij het op orde houden van de administratie, het helpt je ook, op de momenten dat je alleen werkt, bewust na te denken over de persoon die je als reviewer voor dit stuk code aan zou willen wijzen. Onze informele werkwijze maakte het te makkelijk om, ondanks alle voornemens om intensiever [samen te werken](/tags/samenwerking/ "Blogs met de tag 'samenwerking'"), te lang op je eigen eilandje te blijven zitten. Maar wie elk halfuur eraan herinnerd wordt een ander naar zijn code te laten kijken, verlaagt de drempel voor zichzelf om de ander er actief bij te betrekken.


Wat me in de praktijk daarbij opviel is dat die prikkel zijn werk doet, lang vóórdat een feature "af" is. Daar waar PR's een ontwikkelaar verleiden op het laatst mogelijke moment [feedback](/tags/feedback/ "Blogs met de tag 'feedback'") te vragen, moedigt deze werkwijze juist aan om tussendoor iemand erbij te roepen. Zo riep ik een tweede paar ogen al na de eerste drie stappen van een uitgebreide [databaserefactoring](/tags/datamigratie/ "Blogs met de tag 'datamigratie'") in, om te valideren of ik op de juiste weg was. Op dat moment was nog maar een fractie van de benodigde data gemigreerd. Maar omdat de laatste stap iets groter en risicovoller was dan de eerste twee, leek het me goed even een collega aan te schieten. En hij bevestigde: dit is inderdaad de juiste stap voorwaarts -- en ik kon verder. 


## Een technisch issue


Op het eind van de eerste dag kwam dat we de validatie toevoegden, kwam een collega bij me in de lucht. Hij had de nieuwste versie van *trunk* naar binnen gehaald en kreeg nu een foutmelding. Het was meteen duidelijk waar de fout vandaan kwam: een `git pull` maakt een *merge commit* en de standaard *commit message* daarvan kende natuurlijk geen commit trailer.[^5] Terwijl we het issue bespraken, kwamen we al gauw tot de conclusie dat *reverts* een zelfde probleem op zouden leveren.


Er zijn twee oplossingen voor dit probleem: ofwel je staat uitzonderingen in de validatie toe voor *merges* en *reverts*, of je past de standaard *commit messages* aan om trailers toe te voegen. Wij kozen voor de tweede optie. Dit kan via het `prepare-commit-msg`-bestand, dat op dezelfde plek leeft als de `commit-msg`. Het toevoegen zou er als volgt uit kunnen zien:


```bash
#!/bin/sh
# Prepare commit message for merge & revert commits to comply with validation

commit_msg_file=$1
commit_source=$2
original_msg=$(cat "$commit_msg_file")

# Handle merge commits
if [ "$commit_source" = "merge" ]; then
    # Get the author of the commit being merged (MERGE_HEAD)
    user_name=$(git log -1 --format='%an' MERGE_HEAD)
    user_email=$(git log -1 --format='%ae' MERGE_HEAD)

    # Create a compliant commit message
    {
        echo "$original_msg"
        echo ""
        echo "Reviewed-by: $user_name <$user_email>"
    } > "$commit_msg_file"
fi

# Handle revert commits (commit_source is empty for reverts)
if grep -q "^Revert " "$commit_msg_file"; then
    # Extract the commit hash from the revert message
    # Format: "This reverts commit <hash>."
    reverted_commit_hash=$(echo "$original_msg" | sed -n 's/^This reverts commit \([a-f0-9]*\)\.$/\1/p')
    
    # Get the author of the original commit being reverted
    if [ -n "$reverted_commit_hash" ]; then
        user_name=$(git log -1 --format='%an' "$reverted_commit_hash")
        user_email=$(git log -1 --format='%ae' "$reverted_commit_hash")
    else
        # Fallback to current user if hash extraction fails
        user_name=$(git config user.name)
        user_email=$(git config user.email)
    fi
    
    # Create a compliant revert message
    {
        echo "$original_msg"
        echo ""
        echo "Reviewed-by: $user_name <$user_email>"
    } > "$commit_msg_file"
fi
```

Door de maker van respectievelijk de laatste of de gereverte commit aan te wijzen als reviewer, herinneren we de ontwikkelaar eraan in gesprek te gaan met degene wiens code hij nu aanraakt. De *commit messages* dienen als prikkel om de samenwerking op te zoeken, niet als loutere verslaglegging van een proces van controle. 


[^1]: Lees: ik -- *en in dit team is mijn wil wet, verdorie!!* Overigens is de rest van mijn team, na een initiële leercurve, ook erg tevreden met *trunk based development*. 

[^2]: Daar omheen bouwt hij een proces om te garanderen dat die papieren werkelijkheid niet een papieren werkelijkheid blijft. Hoewel dat de moeite van het bespreken waard is, laat ik het buiten beschouwing voor deze blog.

[^3]: Dit is de standaardmanier om hooks toe voegen aan je Git-flow (niet te verwarren met [Gitflow](/tags/gitflow/ "Blogs met de tag 'gitflow'")). In mijn team gebruiken we hier [Husky](https://typicode.github.io/husky/) voor.

[^4]: Dit voorbeeld is een versimpelde weergave van hoe onze validatie eruit ziet. Naast de aanwezigheid van de juiste trailers, valideren wij ook dat de *commit messages* een bepaalde structuur hebben die is gebaseerd op [*Conventional Commits*](https://www.conventionalcommits.org/en/v1.0.0/). Dat is wellicht iets voor een volgende blog.

[^5]: De kortetermijnoplossing voor zijn probleem was een `git pull --rebase` te doen. Dit voorkwam de creatie van een *merge commit* en dus ook een probleem met de validatie. Maar omdat *merge commits* nu eenmaal ook hun bestaansrecht hebben, kon het natuurlijk niet bij deze oplossing blijven.