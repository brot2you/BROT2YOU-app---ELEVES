// Source of truth: names, descriptions and URLs extracted unchanged from the user's original HTML.
const apps = [
  {
    "name": "Case Files",
    "description": "15 énigmes policières · grilles logiques",
    "url": "https://brot2you.github.io/Brot2you-Case-Files/",
    "category": "jeux",
    "image": "assets/gamebox/01-case-files.webp"
  },
  {
    "name": "Past Masters",
    "description": "Verbes irréguliers en cartes à collectionner",
    "url": "https://brot2you.github.io/Past-Masters/",
    "category": "jeux",
    "image": "assets/gamebox/02-past-masters.webp"
  },
  {
    "name": "Ravensmoor Estate",
    "description": "Enquête policière 1925 · Past Continuous & Perfect",
    "url": "https://brot2you.github.io/Ravensmoor/",
    "category": "jeux",
    "image": "assets/gamebox/03-ravensmoor-estate.webp"
  },
  {
    "name": "VerbDojo",
    "description": "92 verbes irréguliers · familles · mindmap",
    "url": "https://brot2you.github.io/Verb-Dojo/",
    "category": "jeux",
    "image": "assets/gamebox/04-verbdojo.webp"
  },
  {
    "name": "Boost",
    "description": "Confiance & progrès · interface console Switch",
    "url": "https://brot2you.github.io/Boost/",
    "category": "methode",
    "image": "assets/gamebox/05-boost.webp"
  },
  {
    "name": "Mochi Check",
    "description": "Auto-évaluation toutes matières · compagnon kawaii",
    "url": "https://brot2you.github.io/Mochi-Check/",
    "category": "methode",
    "image": "assets/gamebox/06-mochi-check.webp"
  },
  {
    "name": "Swipe ton English",
    "description": "Révisions anglais 6e–3e · style swipe",
    "url": "https://brot2you.github.io/Swipe-Ton-English/",
    "category": "methode",
    "image": "assets/gamebox/07-swipe-ton-english.webp"
  },
  {
    "name": "Swipe ton Brevet",
    "description": "Compagnon DNB · toutes disciplines · style TikTok",
    "url": "https://brot2you.github.io/Swipe-Ton-Brevet/",
    "category": "methode",
    "image": "assets/gamebox/08-swipe-ton-brevet.webp"
  },
  {
    "name": "CogniCoach",
    "description": "Flashcards audio · répétition espacée · dictée",
    "url": "https://brot2you.github.io/Cognicoach/",
    "category": "methode",
    "image": "assets/gamebox/09-cognicoach.webp"
  },
  {
    "name": "L'Arbre des Devoirs",
    "description": "Arbre de décision · toutes compétences CECRL",
    "url": "https://brot2you.github.io/Arbre-des-devoirs/",
    "category": "methode",
    "image": "assets/gamebox/10-l-arbre-des-devoirs.webp"
  },
  {
    "name": "Objectif Devoirs",
    "description": "Agenda · Pomodoro · quiz · MindMap · XP",
    "url": "https://brot2you.github.io/Objectif-Devoirs/",
    "category": "methode",
    "image": "assets/gamebox/11-objectif-devoirs.webp"
  },
  {
    "name": "Books of Heroes",
    "description": "Romans dont tu es le héros · mode dys",
    "url": "https://brot2you.github.io/BOOKS-OF-HEROES/",
    "category": "lecture",
    "image": "assets/gamebox/12-books-of-heroes.webp"
  },
  {
    "name": "Make Me Read",
    "description": "OpenDyslexic · masque de lecture · syllabation",
    "url": "https://brot2you.github.io/Make-Me-Read/",
    "category": "lecture",
    "image": "assets/gamebox/13-make-me-read.webp"
  },
  {
    "name": "My Survival Kit",
    "description": "Vocab de classe · Indiana Jones · 35 badges",
    "url": "https://brot2you.github.io/My-Survival-Kit/",
    "category": "lecture",
    "image": "assets/gamebox/14-my-survival-kit.webp"
  },
  {
    "name": "GrammarArena",
    "description": "15 boss grammaticaux · 120 questions · arcade",
    "url": "https://brot2you.github.io/Grammar-Arena/",
    "category": "grammaire",
    "image": "assets/gamebox/15-grammararena.webp"
  },
  {
    "name": "Mind the Mistake!",
    "description": "22 codes d'erreur · auto-correction",
    "url": "https://brot2you.github.io/mind-the-mistake/",
    "category": "grammaire",
    "image": "assets/gamebox/16-mind-the-mistake.webp"
  },
  {
    "name": "CultureCorner",
    "description": "41 axes BO 2025 · musique · films · podcasts",
    "url": "https://brot2you.github.io/Culture-Corner/",
    "category": "culture",
    "image": "assets/gamebox/17-culturecorner.webp"
  },
  {
    "name": "Phonix",
    "description": "Cartes de mage · grimoire · boosters · duels",
    "url": "https://brot2you.github.io/Phonix/",
    "category": "oral",
    "image": "assets/gamebox/18-phonix.webp"
  }
];
const categories = [
  {id:'all',label:'Tout voir',icon:'all',plural:'applications'},
  {id:'jeux',label:'Jeux',icon:'jeux',plural:'jeux'},
  {id:'methode',label:'Méthode',icon:'methode',plural:'outils'},
  {id:'lecture',label:'Lecture',icon:'lecture',plural:'lectures'},
  {id:'grammaire',label:'Grammaire',icon:'grammaire',plural:'défis'},
  {id:'culture',label:'Culture',icon:'culture',plural:'découvertes'},
  {id:'oral',label:'Oral',icon:'oral',plural:'exercices'}
];
const meta = {
  jeux:{title:'Jeux & aventures',icon:'jeux',description:'Pour apprendre en relevant des défis.',color:'#ff6558',light:'#ffeae4'},
  methode:{title:'Méthode & progrès',icon:'methode',description:'Tes outils pour avancer à ton rythme.',color:'#4277dc',light:'#e8edff'},
  lecture:{title:'Lecture & histoires',icon:'lecture',description:'Des livres et des mondes à découvrir.',color:'#8b6bd6',light:'#f1eaff'},
  grammaire:{title:'Grammaire & défis',icon:'grammaire',description:'Deviens un as de la langue anglaise.',color:'#e38441',light:'#fff1df'},
  culture:{title:'Culture & découverte',icon:'culture',description:'Explore les cultures anglophones.',color:'#26a99b',light:'#e2faf2'},
  oral:{title:'Oral & prononciation',icon:'oral',description:'À toi de faire entendre ta voix !',color:'#cc64a9',light:'#fff0fa'}
};
const state={category:'all',query:''};
const filterList=document.getElementById('filters');
const content=document.getElementById('collections');
const search=document.getElementById('search');
const status=document.getElementById('results-status');
const empty=document.getElementById('empty-state');
const customIcon=(key,extra='')=>{const im=el('img','ui-icon '+extra);im.src='assets/icons/'+key+'.svg';im.alt='';im.loading='lazy';return im;};
const iconKeys=['case-files','past-masters','ravensmoor-estate','verbdojo','boost','mochi-check','swipe-ton-english','swipe-ton-brevet','cognicoach','l-arbre-des-devoirs','objectif-devoirs','books-of-heroes','make-me-read','my-survival-kit','grammararena','mind-the-mistake','culturecorner','phonix'];
const iconSvg='<svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6"/></svg>';
function el(tag,cls,txt){const n=document.createElement(tag);if(cls)n.className=cls;if(txt!=null)n.textContent=txt;return n;}
function normalized(x){return String(x).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();}
function renderTabs(){
 filterList.replaceChildren();
 categories.forEach(c=>{
   const total=c.id==='all'?apps.length:apps.filter(a=>a.category===c.id).length;
   const btn=el('button','filter-btn'+(state.category===c.id?' active':''));
   btn.type='button';btn.dataset.filter=c.id;btn.setAttribute('aria-pressed',String(state.category===c.id));
   const label=el('span','filter-label');label.append(customIcon(c.icon,'tab-icon'),document.createTextNode(c.label));const num=el('span','filter-count',String(total));
   btn.append(label,num);btn.addEventListener('click',()=>{state.category=c.id;renderTabs();renderSections();});filterList.append(btn);
 });
}
function createCard(a,idx){
 const m=meta[a.category]; const link=el('a','game-card reveal');link.href=a.url;link.target='_blank';link.rel='noopener noreferrer';
 link.title='Ouvrir '+a.name+' (nouvel onglet)';link.style.setProperty('--order',idx%5);
 const visual=el('div','game-visual'); const img=el('img','cover');img.src=a.image;img.alt='Illustration de '+a.name;img.loading=idx<5?'eager':'lazy';img.decoding='async';
 const logo=el('img','game-logo');logo.src='assets/brand/brot2you-app-logo.webp';logo.alt='';logo.loading='lazy';
 const kind=el('span','game-kind');kind.setAttribute('aria-hidden','true');kind.append(customIcon(iconKeys[apps.indexOf(a)] || a.category,'cover-icon'));
 visual.append(img,el('span','visual-glaze'),logo,kind);
 const foot=el('div','card-base');const title=el('h4','card-title',a.name);const desc=el('p','card-desc',a.description);
 const bottom=el('div','card-foot');const tag=el('span','card-badge');tag.append(customIcon(m.icon,'badge-icon'),document.createTextNode(m.title.split(' &')[0]));tag.style.setProperty('--light',m.light);
 const go=el('span','play-arrow');go.append(document.createTextNode('OUVRIR '));go.insertAdjacentHTML('beforeend',iconSvg);
 bottom.append(tag,go);foot.append(title,desc,bottom);link.append(visual,foot);return link;
}
function renderSections(){
 content.replaceChildren();
 const q=normalized(state.query);
 const filtered=apps.filter(a=>(state.category==='all'||a.category===state.category)&&(!q||normalized(a.name+' '+a.description+' '+meta[a.category].title).includes(q)));
 status.textContent=filtered.length+' application'+(filtered.length>1?'s':'')+' à explorer';
 empty.hidden=filtered.length>0;
 if(!filtered.length)return;
 categories.filter(c=>c.id!=='all').forEach(cat=>{
  const subset=filtered.filter(a=>a.category===cat.id);if(!subset.length)return;
  const m=meta[cat.id];const section=el('section','section-block');section.id='category-'+cat.id;
  section.style.setProperty('--light',m.light);const h=el('div','section-head');
  const bubble=el('div','section-bubble');bubble.setAttribute('aria-hidden','true');bubble.append(customIcon(m.icon,'section-icon'));
  const copy=el('div','section-copy');const heading=el('h3','',m.title);heading.id='title-'+cat.id;
  section.setAttribute('aria-labelledby',heading.id);copy.append(heading,el('p','',m.description));
  h.append(bubble,copy,el('span','section-total',subset.length+' '+(subset.length>1?'apps':'app')));
  const grid=el('div','games-grid');subset.forEach((a,i)=>grid.append(createCard(a,i)));
  section.append(h,grid);content.append(section);
 });
}
filterList.addEventListener('keydown',e=>{
 if(!['ArrowLeft','ArrowRight'].includes(e.key))return;
 const arr=[...filterList.querySelectorAll('button')];const k=arr.indexOf(document.activeElement);if(k<0)return;
 const n=(k+(e.key==='ArrowRight'?1:-1)+arr.length)%arr.length;arr[n].focus();e.preventDefault();
});
search.addEventListener('input',e=>{state.query=e.target.value;renderSections()});
document.getElementById('reset').addEventListener('click',()=>{state.category='all';state.query='';search.value='';renderTabs();renderSections();search.focus()});
renderTabs();renderSections();
