---
title: "Zoek en gij zult vinden"
author: "Karl van Heijster"
date: 2025-09-05T07:37:40+02:00
draft: false
comments: true
tags: ["dotkarl", "kunstmatige intelligentie", "luie programmeur", "software ontwikkelen"]
summary: "Soms duurt het ruim vier jaar voordat je eraan toekomt -- maar: *dotkarl* kent nu eindelijk de mogelijkheid om blogs te doorzoeken. *Woohoo!*"
---

Soms duurt het ruim vier jaar voordat je eraan toekomt -- maar: *dotkarl* kent nu eindelijk de mogelijkheid om blogs te doorzoeken.


<br>
<img class="center" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWpwbmE5NnpkcGUyMTVidGh2cmtweDBtNGE1MTRtbm55bDN2dHdqNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L0O3TQpp0WnSXmxV8p/giphy.gif" alt="'Woohoo!'" />
<br>


## Aanvliegroute


Waarom heeft dit me zoveel tijd gekost? Eerlijk gezegd wist ik heel lang niet hoe ik deze functionaliteit aan moest vliegen. Normaliter zou ik een query schrijven die de achterliggende database doorzoekt -- maar dat is nu juist het dingetje: er is geen achterliggende database. Deze blog is een met [Hugo](https://gohugo.io/) [gegenereerde statische website](https://en.wikipedia.org/wiki/Static_site_generator "'Static site generator'"), en bestaat aan de "achterkant" dus uit louter [markdown](https://www.markdownguide.org/ "Markdown Guide")-bestandjes. 


In [*Hugo in Action*](https://www.manning.com/books/hugo-in-action "Atishay Jain, 'Hugo in Action', Manning 2022") leek ik een oplossing te hebben gevonden. In het voorbeeld van dat boek wordt een library gebruikt die je website indexeert en het resultaat daarvan meestuurt naar de browser. Het doorzoeken van de website zou dan gebruik maken van die lokale index. -- Maar de luie ontwikkelaar in me nam het over, en ik redeneerde: maar daarmee zou ik een afhankelijkheid introduceren van een *third party*, en die afhankelijkheid zou ik dan weer bij moeten houden, en ik heb helemaal geen zin om regelmatig onderhoud te (moeten) plegen aan mijn blog. 


Trouwens, zó nodig hoef *ik* nu ook weer niet een zoekfunctionaliteit te hebben, zei ik tegen mezelf. De enige momenten dat ik mijn blog wil doorzoeken, is als ik onder het schrijven wil linken naar een [eerdere blog](/blog/25/05/borrelpraat/ "'Borrelpraat'"). Maar om dat voor elkaar te krijgen kan ik ook de markdown doorzoeken in [Visual Studio Code](https://code.visualstudio.com/). Dus de feature belandde op een todo-lijstje en verdween uiteindelijk uit mijn zicht.


## Martin Fowler


Daar kwam verandering in toen ik op een dag wat informatie zocht op [de website van Martin Fowler](https://martinfowler.com/). De zoekbalk op zijn homepagina leidde me naar -- Google, waar de zoekterm vergezeld ging met een eenvoudige kwalificatie: `site:martinfowler.com`.


Aanvankelijk schoot ik in de lach, als ik me het goed herinner. Het verbaasde me dat zo'n grote naam als Martin Fowler zo -- wat is het woord? -- *achteloos* met deze functionaliteit op zijn website om was gegaan. Zou juist hij de gelegenheid niet aangegrepen moeten hebben om een mooie (want ongetwijfeld veelvuldig [gerefactorde](/blog/24/02/een-herwaardering-van-fowlers-refactoring/ "'Een herwaardering van Fowlers Refactoring'")) oplossing uit te programmeren? Het gaf me haast een gevoel van plaatsvervangende schaamte.


Maar dat gevoel verdween al gauw. Want je kunt zeggen wat je wil: het deed wat het moest doen. Sterker nog, het deed dat op een ~~schaamteloos~~ bewonderenswaardig eenvoudige manier. Ga maar na: waarom zou je de moeite nemen om je website zelf te indexeren? Google doet het toch al voor je -- en beter dan jij ooit zou kunnen, waarschijnlijk. Waarom zou je in hemelsnaam *geen* gebruik maken van die al bestaande indexering?


Fowler is een [luie programmeur](/tags/luie-programmeur/ "Blogs met de tag 'luie programmeur'"): iemand die met zo min mogelijk werk (en dus zo goedkoop mogelijk) een maximaal resultaat behaalt. Zijn uitgekookte oplossing is allesbehalve beschamend -- het is een toonbeeld van de simpelst mogelijke oplossing van het probleem waar hij zich voor gesteld zag.


## Implementatie


De uiteindelijke code die nodig was om de zoekfunctionaliteit op *dotkarl* mogelijk te maken, ontwikkelde ik met hulp van [GitHub CoPilot](https://github.com/features/copilot). Ik beschreef de AI wat ik wilde hebben, en hij genereerde een voorstel. Ik [testte](/tags/testen/ "Blogs met de tag 'testen'") de functionaliteit handmatig, en beschreef wat me eraan beviel en wat niet. We doorliepen samen enkele iteraties van de oplossing, tot ik een resultaat had dat ik goed genoeg vond.


De HTML en CSS vormden geen enorme uitdaging:


```html
<li>
  <span title ="Zoeken">
    <svg id="search-icon" 
      tabindex="0"
      role="button"
      aria-label="Zoeken"
      aria-expanded="false"
      viewBox="0 0 24 24">
        <circle cx="11" 
          cy="11" 
          r="7"
          stroke="currentColor" 
          stroke-width="2.5" 
          fill="none"/>
        <line x1="16.5" 
          y1="16.5" 
          x2="21" 
          y2="21" 
          stroke="currentColor" 
          stroke-width="2.5" 
          stroke-linecap="round"/>
    </svg>
  </span>
  <input id="search-input" 
    class="search-overlay-input" 
    type="text" 
    placeholder="Zoeken..." />
</li>
```

```css
.search-overlay-input {
  display: none;
  position: fixed;
  left: 50%;
  top: 1rem;
  transform: translateX(-50%);
  width: 320px;
  max-width: 90vw;
  padding: 10px 16px;
  font-size: 1.1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  z-index: 9999;
}

.search-overlay-input.active {
  display: block;
}
```

De bijbehorende JavaScript had wat meer voeten (en iteraties) in de aarde. In de oorspronkelijke versie kon ik de input niet wegklikken, bijvoorbeeld. Ook was het niet mogelijk om de zoekfunctionaliteit zonder muis te kunnen gebruiken.


```js
document.addEventListener('DOMContentLoaded', () => {
  const icon = document.getElementById('search-icon');
  const input = document.getElementById('search-input');

  function showSearchInput() {
    input.classList.add('active');
    icon.setAttribute('aria-expanded', 'true');
    input.focus();
  }

  function hideSearchInput() {
    input.classList.remove('active');
    icon.setAttribute('aria-expanded', 'false');
  }

  function toggleSearchInput() {
    if (input.classList.contains('active')) {
      hideSearchInput();
    } else {
      showSearchInput();
    }
  }

  // Toggle on icon click or keyboard activation
  icon.addEventListener('click', (event) => {
    toggleSearchInput();
    event.stopPropagation();
  });
  icon.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleSearchInput();
      event.preventDefault();
      event.stopPropagation();
    }
  });

  // Prevent input click from closing it
  input.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  // Handle search and tab-out
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      window.open(
        'https://www.google.com/search?q=site:www.karlvanheijster.com+' + encodeURIComponent(input.value),
        '_blank'
      );
    } else if (e.key === 'Tab') {
      hideSearchInput();
    }
  });

  // Hide input when clicking elsewhere
  document.addEventListener('click', () => {
    if (input.classList.contains('active')) {
      hideSearchInput();
    }
  });
});
```


De bovenstaande code is niet enorm geavanceerd of complex, maar zelfs wanneer de reikwijdte van het probleem terug is gebracht tot het gebruik van Google, komt er toch ongemerkt meer bij kijken dan je op voorhand denkt.


Het is de vraag of ik zonder CoPilot het geduld zou hebben gehad om de boel helemaal uit te zoeken. -- Ik heb het dan niet alleen over het voor elkaar krijgen een zoekopdracht naar Google te versturen, maar ook over de vormgeving van het zoek-icoon, de styling van de componenten, het verbergen van de zoekbalk als je ergens anders klikt, et cetera. 


## Zoekopdracht


Dit is een uitstekende illustratie van de drempelverlagende werking van [kunstmatige intelligentie](/tags/kunstmatige-intelligentie/ "Blogs met de tag 'kunstmatige intelligentie'"). Wat de vraag opwerpt: welke drempel heeft CoPilot voor me verlaagd? Je zou kunnen zeggen: CoPilot heeft de code voor me geschreven. Maar je zou net zo goed de situatie als volgt kunnen duiden: CoPilot heeft me alle informatie gegeven die ik nodig had om de feature te implementeren.


[Barry O'Reilly](https://www.linkedin.com/in/barry-o-reilly-b924657/ "Barry O'Reilly @ LinkedIn") had laatst een interessante [observatie op LinkedIn](https://www.linkedin.com/posts/barry-o-reilly-b924657_whenever-we-all-calm-down-a-bit-we-can-start-activity-7346306622492717056-qtWU) die zeer relevant is voor het huidige onderwerp. [LLM](https://en.wikipedia.org/wiki/Large_language_model "'Large language model', Wikipedia")'s zijn volgens hem een nieuw soort zoekindex: ze stellen ons op interessante manieren in staat om bepaalde data tot ons te nemen. 


De prompts waarmee ik de bovenstaande code heb gegenereerd, zijn zo bekeken niet een vorm van intelligentie, maar een zeer geavanceerde (en personaliseerbare) zoekopdracht: "Hoe implementeer ik een zoekbalk op mijn website die Google gebruikt als index?"


-- Maar eer ik kunstmatig intelligente zoekfunctionaliteit op deze blog ingebouwd heb, zijn we waarschijnlijk twintig jaar verder. 
