const phases = [
  {
    title: 'As cidades gregas', kicker: 'FASE 1 · AS PÓLIS', guide: 'Cada pólis tinha seu próprio jeito de viver. Vamos descobrir essas diferenças.', character:'🦉', name:'ATENA · SABEDORIA', tip:'Atena é ligada à sabedoria e à estratégia. Siga as pistas! ',
    questions: [
      {q:'O que eram as pólis na Grécia Antiga?',a:['Grandes impérios governados por um único rei.','Cidades-Estado com organização política própria.','Templos dedicados exclusivamente aos deuses.','Exércitos formados por comerciantes.'],correct:1,scene:'polis',why:'As pólis eram comunidades políticas independentes, com instituições, leis e formas de governo próprias.'},
      {q:'Qual cidade-Estado desenvolveu uma forma de democracia antiga?',a:['Atenas.','Esparta.','Troia.','Cartago.'],correct:0,scene:'athens',why:'Atenas desenvolveu uma forma de democracia direta. A participação era restrita a homens adultos considerados cidadãos; mulheres, pessoas escravizadas e estrangeiros não tinham os mesmos direitos políticos.'},
      {q:'Qual característica ficou especialmente associada a Esparta?',a:['O comércio de automóveis.','A preparação militar dos cidadãos.','A invenção da democracia moderna.','A proibição da agricultura.'],correct:1,scene:'sparta',why:'Esparta ficou conhecida por sua organização militar e por uma educação voltada à disciplina e à preparação para a guerra.'}
    ]
  },
  {
    title: 'Os deuses do Olimpo', kicker: 'FASE 2 · MITOLOGIA', guide: 'Os mitos faziam parte das crenças e tradições gregas. Pronto para conhecer alguns deuses?', character:'⚡', name:'ZEUS · SENHOR DOS CÉUS', tip:'Os gregos antigos acreditavam em muitos deuses. Cada mito tem uma história!',
    questions: [
      {q:'Na mitologia grega, qual divindade era associada ao mar?',a:['Atena.','Poseidon.','Afrodite.','Hermes.'],correct:1,scene:'poseidon',why:'Poseidon era associado ao mar, aos terremotos e aos cavalos na mitologia grega.'},
      {q:'Qual era uma das funções dos mitos para os antigos gregos?',a:['Substituir todas as atividades comerciais.','Explicar aspectos do mundo e transmitir crenças e tradições.','Organizar os Jogos Olímpicos modernos.','Criar as leis de todos os povos antigos.'],correct:1,scene:'myths',why:'Os mitos ajudavam a expressar crenças, valores e explicações sobre o mundo. Eles são narrativas religiosas e culturais, não relatos históricos comprovados.'},
      {q:'Na tradição religiosa grega, onde viviam importantes divindades?',a:['No Monte Olimpo.','Na cidade de Cartago.','No fundo do rio Nilo.','Na ilha da Bretanha.'],correct:0,scene:'olympus',why:'O Monte Olimpo era considerado, na tradição religiosa grega, a morada de importantes deuses.'}
    ]
  },
  {
    title: 'O desafio de Olímpia', kicker: 'FASE 3 · OS JOGOS', guide: 'Atletas de várias comunidades se reuniam em Olímpia. Mostre que você conhece essa tradição!', character:'🔱', name:'POSEIDON · DEUS DO MAR', tip:'O mar conectava muitas comunidades gregas. Vamos a Olímpia!',
    questions: [
      {q:'Em qual local eram realizados os Jogos Olímpicos da Antiguidade?',a:['Atenas.','Esparta.','Olímpia.','Alexandria.'],correct:2,scene:'olympia',why:'Os Jogos Olímpicos antigos eram realizados em Olímpia e estavam associados ao culto de Zeus.'},
      {q:'A quem eram dedicadas as competições de Olímpia?',a:['A Zeus.','A Poseidon.','A Afrodite.','A Hermes.'],correct:0,scene:'zeus',why:'Os jogos tinham importância esportiva e religiosa e eram realizados em homenagem a Zeus.'},
      {q:'Qual destas atividades fazia parte das competições antigas?',a:['Corridas e lutas.','Corridas de automóveis.','Patinação no gelo.','Esqui na neve.'],correct:0,scene:'race',why:'As competições incluíam corridas, lutas e provas atléticas, como lançamentos. Os jogos antigos tinham regras e significados próprios.'}
    ]
  },
  {
    title: 'O legado grego', kicker: 'FASE 4 · CULTURA E IDEIAS', guide: 'Filosofia, teatro e arquitetura: o legado grego chegou até os nossos dias. Última etapa!', character:'💪', name:'KRATOS · FORÇA', tip:'Kratos é a personificação da força na mitologia grega. Não é o herói dos videogames!',
    questions: [
      {q:'Quem foi Platão?',a:['Um filósofo grego.','Um imperador romano.','Um deus do Olimpo.','Um atleta olímpico moderno.'],correct:0,scene:'plato',why:'Platão foi um filósofo grego que refletiu sobre conhecimento, política, educação e justiça.'},
      {q:'Quais eram dois gêneros importantes do teatro grego?',a:['Tragédia e comédia.','Ópera e cinema.','Novela e documentário.','Ficção científica e musical.'],correct:0,scene:'theatre',why:'O teatro grego incluía tragédias e comédias, formas de espetáculo que seguem presentes na cultura até hoje.'},
      {q:'Qual atividade econômica era importante para muitas comunidades gregas?',a:['O comércio marítimo.','A fabricação de aviões.','A exploração de petróleo em plataformas.','O comércio de automóveis.'],correct:0,scene:'sea',why:'O mar Mediterrâneo e as muitas ilhas favoreceram a navegação e o comércio marítimo em diversas comunidades gregas.'}
    ]
  }
];

const letters = ['A','B','C','D'];
const intro = document.querySelector('#intro');
const game = document.querySelector('#game');
const ending = document.querySelector('#ending');
const answersEl = document.querySelector('#answers');
const feedbackEl = document.querySelector('#feedback');
const nextBtn = document.querySelector('#next-btn');
let phaseIndex = 0, questionIndex = 0, score = 0, answered = false;
let answerHistory = Array(12).fill(null);
let playerGender = 'menino';
let selectedAvatar = 0;
const avatarOptions = {
  menino:[
    {title:'Aventureiro',skin:'#f3c49f',hair:'#503426',cloth:'#3684ac',accent:'#f5c65e',style:'short'},
    {title:'Inventor',skin:'#b97850',hair:'#31241f',cloth:'#bd684a',accent:'#f2ce78',style:'curly'},
    {title:'Explorador',skin:'#e1a675',hair:'#d19a48',cloth:'#6874b4',accent:'#f5d278',style:'waves'}
  ],
  menina:[
    {title:'Aventureira',skin:'#f3c49f',hair:'#70402d',cloth:'#d16d79',accent:'#ffcf66',style:'long'},
    {title:'Inventora',skin:'#b97850',hair:'#2c211e',cloth:'#38a29a',accent:'#f4d06f',style:'curls'},
    {title:'Exploradora',skin:'#e1a675',hair:'#d09243',cloth:'#966ab1',accent:'#ffcf66',style:'braids'}
  ]
};
const playerNameInput = document.querySelector('#player-name');

function getPlayerName(){return playerNameInput.value.trim().slice(0,18)||'Explorador';}
function makeAvatarSvg(options){
  const hairShape=options.style==='short'
    ? '<path d="M39 48 Q36 24 59 23 Q83 23 82 49 L77 43 Q66 47 58 39 Q50 48 40 50Z" fill="'+options.hair+'"/>'
    : options.style==='curly'||options.style==='curls'
      ? '<path d="M38 48 Q34 23 50 25 Q56 15 66 24 Q83 21 83 44 L80 51 Q72 44 68 41 Q56 48 48 42 Q44 48 38 51Z" fill="'+options.hair+'"/><circle cx="43" cy="31" r="7" fill="'+options.hair+'"/><circle cx="76" cy="31" r="7" fill="'+options.hair+'"/>'
      : options.style==='waves'
        ? '<path d="M37 48 Q36 25 58 23 Q82 23 83 47 Q75 37 68 42 Q58 47 50 40 Q44 49 37 48Z" fill="'+options.hair+'"/>'
        : '<path d="M37 49 Q35 23 59 23 Q83 23 82 49 L85 82 Q77 85 77 70 L76 49 Q62 55 48 47 L43 76 Q39 86 34 81Z" fill="'+options.hair+'"/>';
  const extraHair=options.style==='braids'
    ? '<path d="M39 49 Q32 59 38 87 L44 92 L46 71Z M80 49 Q88 62 81 87 L75 92 L74 71Z" fill="'+options.hair+'" stroke="#65412f" stroke-width="1.5"/><circle cx="40" cy="91" r="4" fill="'+options.accent+'"/><circle cx="79" cy="91" r="4" fill="'+options.accent+'"/>'
    : '';
  return `<svg viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Avatar ${options.title}">
    <ellipse cx="60" cy="190" rx="31" ry="6" fill="#1d31521f"/>
    <path d="M47 139 L44 176 M73 139 L77 176" fill="none" stroke="#344261" stroke-width="11" stroke-linecap="round"/>
    <path d="M35 174 Q43 170 49 177 L50 182 L32 182Z M70 177 Q77 170 84 176 L87 182 L68 182Z" fill="#b86f4d"/>
    <path d="M44 68 L76 68 Q82 72 84 84 L91 139 Q60 154 29 139 L36 83Q38 72 44 68Z" fill="${options.cloth}" stroke="#334467" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M47 70 L60 83 L73 70" fill="none" stroke="${options.accent}" stroke-width="4" stroke-linecap="round"/>
    <path d="M35 83 L25 111 L32 119 M84 83 L95 108 L88 117" fill="none" stroke="${options.skin}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M31 119 L35 123 M89 117 L94 121" fill="none" stroke="${options.skin}" stroke-width="8" stroke-linecap="round"/>
    <path d="M32 135 Q60 141 88 135 L89 143 Q60 151 30 143Z" fill="${options.accent}"/>
    <path d="M52 83 L60 91 L68 83 L64 129 L56 129Z" fill="#ffffff25"/>
    <path d="M51 54 L51 69 Q60 77 69 69 L69 54" fill="${options.skin}"/>
    <circle cx="43" cy="47" r="6" fill="${options.skin}"/><circle cx="77" cy="47" r="6" fill="${options.skin}"/>
    <ellipse cx="60" cy="46" rx="19" ry="23" fill="${options.skin}" stroke="#704936" stroke-width="1.4"/>
    ${hairShape}${extraHair}
    <ellipse cx="53" cy="48" rx="2" ry="2.7" fill="#26364c"/><ellipse cx="67" cy="48" rx="2" ry="2.7" fill="#26364c"/>
    <path d="M57 59 Q60 62 64 59" fill="none" stroke="#9b5147" stroke-width="1.7" stroke-linecap="round"/>
    <path d="M43 37 Q60 32 77 37" fill="none" stroke="${options.accent}" stroke-width="3" stroke-linecap="round"/>
  </svg>`;
}
function makeSceneSvg(scene){
  const art={
    polis:`<path d="M0 172 Q140 149 280 171 T570 164 T960 169 V220 H0Z" fill="#7aab79"/><path d="M0 189 Q190 170 380 190 T760 186 T960 188" fill="none" stroke="#5ca9ba" stroke-width="30"/><g fill="#f7e6bd" stroke="#b58959" stroke-width="3"><path d="M162 126h95v53h-95z M150 126l60-42 61 42z"/><path d="M273 140h70v39h-70z M264 140l44-31 45 31z"/><path d="M376 121h99v58h-99z M366 121l59-43 59 43z"/></g><g fill="#4d7084"><rect x="187" y="142" width="18" height="37"/><rect x="217" y="142" width="18" height="37"/><rect x="407" y="139" width="17" height="40"/><rect x="437" y="139" width="17" height="40"/></g><path d="M564 148h85l-13 17h-68z" fill="#ad674a"/><path d="M594 99v50h36z" fill="#fff0ce" stroke="#ad674a" stroke-width="3"/>`,
    athens:`<path d="M0 177 Q150 151 315 174 T630 171 T960 176 V220 H0Z" fill="#85ad80"/><g transform="translate(210 46)" fill="#f5e1b6" stroke="#ad895e" stroke-width="3"><path d="M0 58L154 0l154 58z"/><path d="M17 61h274v13H17z M28 138h252v13H28z"/><path d="M36 77h21v59H36z M87 77h21v59H87z M138 77h21v59h-21z M189 77h21v59h-21z M240 77h21v59h-21z"/></g><g fill="#bd7952"><circle cx="594" cy="146" r="9"/><circle cx="636" cy="140" r="9"/><circle cx="678" cy="146" r="9"/><path d="M581 157h26v32h-26z M623 151h26v38h-26z M665 157h26v32h-26z"/></g><path d="M565 191h141" stroke="#c68b55" stroke-width="5"/>`,
    sparta:`<path d="M0 178 Q160 153 310 175 T620 170 T960 178 V220 H0Z" fill="#91a86c"/><path d="M120 169 Q150 80 210 169" fill="#d9bd80" stroke="#9a7448" stroke-width="4"/><path d="M690 169 Q730 69 790 169" fill="#d9bd80" stroke="#9a7448" stroke-width="4"/><path d="M438 84 Q490 101 544 84 L537 145 Q490 185 445 145Z" fill="#b95142" stroke="#7c3c38" stroke-width="5"/><path d="M456 109q34-24 69 0M456 125q34 24 69 0" fill="none" stroke="#f2cf7a" stroke-width="5"/><path d="M476 94v50m26-50v50" stroke="#f2cf7a" stroke-width="4"/><circle cx="290" cy="143" r="10" fill="#d99f73"/><path d="M289 154l-12 25m13-23 16 17m-24-10-16 12m28-5 16 10" fill="none" stroke="#416982" stroke-width="7" stroke-linecap="round"/><circle cx="357" cy="145" r="10" fill="#c68761"/><path d="M357 156l-8 24m7-23 18 13m-25-7-14 14m28-5 13 11" fill="none" stroke="#e1c366" stroke-width="7" stroke-linecap="round"/>`,
    poseidon:`<path d="M0 135Q70 111 140 135T280 135T420 135T560 135T700 135T840 135T980 135V220H0Z" fill="#53a9bc"/><path d="M0 163Q70 139 140 163T280 163T420 163T560 163T700 163T840 163T980 163" fill="none" stroke="#d7f3ed" stroke-width="9"/><path d="M0 191Q70 167 140 191T280 191T420 191T560 191T700 191T840 191T980 191" fill="none" stroke="#287e9d" stroke-width="8"/><g transform="translate(448 35)" fill="none" stroke="#f6d071" stroke-width="9" stroke-linecap="round"><path d="M31 132V15 M31 61L5 13v65 M31 61L57 13v65"/></g><path d="M189 157h100l-16 22h-67z" fill="#a65e48"/><path d="M230 109v47h45z" fill="#fff0cc" stroke="#a65e48" stroke-width="3"/>`,
    myths:`<path d="M0 174 Q150 153 300 174 T600 169 T960 175 V220 H0Z" fill="#728c78"/><path d="M336 87 Q480 60 624 87 L606 165 Q480 184 354 165Z" fill="#efd49e" stroke="#a87548" stroke-width="5"/><path d="M360 91Q480 113 600 91M354 165Q480 143 606 165" fill="none" stroke="#bb8c58" stroke-width="4"/><g fill="#fff0ae" font-family="serif" font-size="30"><text x="397" y="121">✦</text><text x="476" y="146">✧</text><text x="541" y="119">✦</text></g><path d="M115 124 Q137 100 158 124 L152 179 H121Z" fill="#46849a"/><circle cx="137" cy="108" r="14" fill="#d7a17c"/><path d="M123 105q10-24 29-1" fill="#58392b"/><path d="M166 135q50-30 89 0v27h-89z" fill="#fff3d8" stroke="#bd945d" stroke-width="3"/>`,
    olympus:`<path d="M0 188L178 66l91 69L406 37l179 147z" fill="#8496ab"/><path d="M252 143L406 37l117 122-70-35-43 27-39-28-47 35z" fill="#f8f0dc"/><path d="M0 191 Q150 174 300 191 T600 187 T960 190 V220 H0Z" fill="#719b78"/><g transform="translate(397 98)" fill="#f2dba9"><path d="M0 29l51-26 51 26z"/><rect x="8" y="31" width="86" height="8"/><rect x="14" y="40" width="9" height="30"/><rect x="39" y="40" width="9" height="30"/><rect x="64" y="40" width="9" height="30"/><rect x="88" y="40" width="9" height="30"/><rect x="1" y="71" width="100" height="8"/></g><path d="M107 51q13-22 36-7 20-24 39 3 20-1 19 18H99q-3-11 8-14" fill="#fffaf0"/>`,
    olympia:`<path d="M0 177 Q150 156 310 178 T630 174 T960 179 V220 H0Z" fill="#84a66f"/><path d="M126 170V89q0-58 65-58t65 58v81M278 170V79q0-56 64-56t64 56v91M430 170V87q0-58 64-58t64 58v83M582 170V97q0-50 58-50t58 50v73" fill="#e9d5ad" stroke="#ad8857" stroke-width="8"/><path d="M126 171h578" stroke="#f5e7c4" stroke-width="12"/><path d="M750 133V68" stroke="#925940" stroke-width="10"/><path d="M750 67q-33-22 0-46 33 24 0 46" fill="#f8a747" stroke="#d16d3e" stroke-width="4"/>`,
    zeus:`<path d="M0 178 Q160 151 320 175 T640 171 T960 179 V220 H0Z" fill="#8fa57d"/><path d="M120 93q14-31 49-20 20-34 55-8 35-3 35 35H113zM695 74q12-27 43-18 19-28 49-7 29-2 30 29h-126z" fill="#73849c"/><path d="M492 48l-30 62h31l-18 61 66-84h-34l24-39z" fill="#ffd454" stroke="#e0a53d" stroke-width="4"/><g transform="translate(274 123)" fill="#f5e2bd"><path d="M0 25l65-35 65 35z"/><rect x="8" y="27" width="114" height="8"/><rect x="16" y="37" width="12" height="42"/><rect x="46" y="37" width="12" height="42"/><rect x="76" y="37" width="12" height="42"/><rect x="106" y="37" width="12" height="42"/><rect x="1" y="80" width="128" height="9"/></g>`,
    race:`<path d="M0 172 Q150 151 300 173 T600 171 T960 175 V220 H0Z" fill="#84a66f"/><path d="M80 182Q450 90 880 180" fill="none" stroke="#d89b58" stroke-width="35"/><path d="M80 182Q450 90 880 180" fill="none" stroke="#f5dcab" stroke-width="4" stroke-dasharray="13 11"/><g fill="none" stroke-linecap="round" stroke-width="9"><g stroke="#3e82a1"><circle cx="398" cy="88" r="13" fill="#dba67e" stroke="#3e82a1"/><path d="M398 102l-9 36 29 16m-29-16-26 18m27-33 27-16m-30 48-13 25m28-24 18 23"/></g><g stroke="#c8664e"><circle cx="533" cy="108" r="13" fill="#b97850" stroke="#c8664e"/><path d="M533 122l-8 34 30 13m-30-13-24 19m25-33 29-13m-31 47-15 23m29-23 18 20"/></g></g>`,
    plato:`<path d="M0 177 Q150 151 310 175 T630 172 T960 177 V220 H0Z" fill="#829a70"/><g transform="translate(102 30)" fill="#ebd6ae" stroke="#ad895e" stroke-width="4"><path d="M0 36L86 0l86 36z"/><rect x="8" y="40" width="156" height="11"/><path d="M18 55h18v75H18z M58 55h18v75H58z M98 55h18v75H98z M138 55h18v75h-18z"/><path d="M0 134h174v12H0z"/></g><path d="M284 171V72l17-14 15 14v99M315 171V91l15-12 14 12v80" fill="#c1ad89" stroke="#9a8063" stroke-width="4"/><circle cx="548" cy="103" r="20" fill="#d9a17a"/><path d="M529 103q2-27 24-24 19 6 17 22l-10-4-12 4z" fill="#d2d1cc"/><path d="M528 126Q548 116 568 126l12 53h-65z" fill="#5793a5" stroke="#395c70" stroke-width="3"/><path d="M532 133l-28 18m61-18 27-22m-53 48 20 21" fill="none" stroke="#d9a17a" stroke-width="9" stroke-linecap="round"/><circle cx="690" cy="139" r="15" fill="#b97850"/><path d="M678 157h25l8 25h-40z" fill="#d9bd73" stroke="#866d49" stroke-width="3"/><path d="M689 160l21-22" stroke="#b97850" stroke-width="8" stroke-linecap="round"/><path d="M614 67q70-35 137 0v37H614z" fill="#fff8e6" stroke="#a78157" stroke-width="3"/><text x="628" y="93" font-family="sans-serif" font-size="19" font-weight="700" fill="#425978">O que é justiça?</text>`,
    theatre:`<path d="M0 179 Q150 154 310 177 T630 173 T960 180 V220 H0Z" fill="#8aa271"/><path d="M175 169q280-239 560 0" fill="none" stroke="#d9c397" stroke-width="15"/><path d="M212 166q243-191 486 0M257 164q198-145 396 0M302 163q152-100 306 0" fill="none" stroke="#af885b" stroke-width="7"/><g transform="translate(430 58)"><path d="M0 0q38-23 70 0v60q-37 26-70 0z" fill="#e4b65d" stroke="#8e6245" stroke-width="4"/><path d="M88 0q38-23 70 0v60q-37 26-70 0z" fill="#c86d60" stroke="#8e6245" stroke-width="4"/><path d="M17 27h10m19 0h10M19 47q15 14 30 0" stroke="#624c44" stroke-width="4" stroke-linecap="round"/><path d="M105 28h10m18 0h10m-27 18q14-14 28 0" stroke="#624c44" stroke-width="4" stroke-linecap="round"/></g>`,
    sea:`<path d="M0 130Q90 110 180 130T360 130T540 130T720 130T900 130T1080 130V220H0Z" fill="#4b9eb3"/><path d="M0 165Q90 145 180 165T360 165T540 165T720 165T900 165" fill="none" stroke="#daf1e8" stroke-width="8"/><path d="M0 195Q90 175 180 195T360 195T540 195T720 195T900 195" fill="none" stroke="#2c7899" stroke-width="8"/><path d="M294 125h383l-42 52H345z" fill="#a95842" stroke="#743e39" stroke-width="5"/><path d="M452 45v80h121z" fill="#fff2d2" stroke="#ac744c" stroke-width="4"/><path d="M444 43h-8v85h8" stroke="#784f40" stroke-width="6"/><path d="M439 55q-31 6-47 25 20-3 47 3" fill="#d56e57"/><circle cx="755" cy="65" r="27" fill="#ffe08a"/>`
  }[scene]||'';
  const skies={poseidon:'#85d6e0',sea:'#a1e0e0',olympus:'#9fc4e2',sparta:'#f2c68d',zeus:'#99acd0',plato:'#e6cc92',theatre:'#d8a6a2',myths:'#b9a9dc'};
  const sky=skies[scene]||'#9bd2e1';
  return `<svg viewBox="0 0 960 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><defs><linearGradient id="scene-sky" x2="0" y2="1"><stop stop-color="${sky}"/><stop offset="1" stop-color="#f3dfb3"/></linearGradient></defs><rect width="960" height="220" fill="url(#scene-sky)"/><circle cx="790" cy="44" r="25" fill="#ffdc81"/><path d="M0 143L150 62l83 72 124-96 135 107 125-68 137 75 91-57 115 58v45H0z" fill="#77939a" opacity=".57"/><path d="M0 169Q175 143 350 169T700 166T1050 168V220H0Z" fill="#d2bd8c"/>${art}<path d="M0 207H960" stroke="#fff2d1" stroke-width="4" opacity=".75"/></svg>`;
}
function renderAvatarGallery(){
  const gallery=document.querySelector('#avatar-gallery');
  gallery.innerHTML='';
  avatarOptions[playerGender].forEach((avatar,index)=>{
    const button=document.createElement('button');
    button.type='button';button.className=`avatar-card ${index===selectedAvatar?'selected':''}`;
    button.setAttribute('aria-pressed',String(index===selectedAvatar));
    button.setAttribute('aria-label',`${avatar.title}, avatar ${index+1} de 3`);
    button.innerHTML=`<span class="avatar-card-art">${makeAvatarSvg(avatar)}</span><span class="avatar-card-name">${avatar.title}</span><span class="avatar-card-check" aria-hidden="true">✓</span>`;
    button.addEventListener('click',()=>{
      selectedAvatar=index;
      playSound('select');
      gallery.querySelectorAll('.avatar-card').forEach((card,i)=>{
        card.classList.toggle('selected',i===index);
        card.setAttribute('aria-pressed',String(i===index));
      });
      updateAvatarPreview();
      document.querySelector('#avatar-status').textContent=`Avatar ${avatar.title} selecionado.`;
    });
    gallery.append(button);
  });
}
function updateAvatarPreview(){
  const name=getPlayerName(), avatar=avatarOptions[playerGender][selectedAvatar];
  document.querySelector('#preview-name').textContent=name;
  document.querySelector('#preview-hero').innerHTML=makeAvatarSvg(avatar);
  document.querySelector('#game-player-name').textContent=name;
  document.querySelector('#game-player-avatar').innerHTML=makeAvatarSvg(avatar);
  document.querySelector('#guide-avatar').innerHTML=makeAvatarSvg(avatar);
  document.querySelector('#guide-name').textContent=`${name.toUpperCase()} · SUA PERSONAGEM`;
}

function showScreen(screen){
  [intro,game,ending].forEach(el=>{el.classList.toggle('active',el===screen);el.hidden=el!==screen;});
  window.scrollTo({top:0,behavior:document.body.classList.contains('reduce-motion')?'auto':'smooth'});
  screen.querySelector('h1, h2')?.focus({preventScroll:true});
}
function buildTrack(){
  const track=document.querySelector('#phase-track');
  track.innerHTML=phases.map((phase,i)=>`<div role="listitem" aria-label="Fase ${i+1}: ${phase.title}${i===phaseIndex?', em andamento':i<phaseIndex?', concluída':', bloqueada'}" ${i===phaseIndex?'aria-current="step"':''} class="phase-stop ${i===phaseIndex?'current':i<phaseIndex?'done':''}"><span class="phase-dot" aria-hidden="true">${i<phaseIndex?'✓':String(i+1).padStart(2,'0')}</span><span aria-hidden="true">${['CIDADES','MITOLOGIA','OLÍMPIA','LEGADO'][i]}</span></div>`).join('');
}
function renderQuestion(){
  const phase=phases[phaseIndex], item=phase.questions[questionIndex];
  playSound('question');
  [...document.body.classList].forEach(className=>{if(className.startsWith('scene-'))document.body.classList.remove(className);});
  document.body.classList.add(`scene-${item.scene}`);
  answered=false; buildTrack();
  document.querySelector('#phase-title').textContent=phase.title;
  document.querySelector('#phase-kicker').textContent=phase.kicker;
  document.querySelector('#question-count').textContent=`DESAFIO ${phaseIndex*3+questionIndex+1} DE 12`;
  document.querySelector('#question-text').textContent=item.q;
  document.querySelector('#question-scene').innerHTML=makeSceneSvg(item.scene);
  const currentNumber=phaseIndex*3+questionIndex;
  const backBtn=document.querySelector('#back-btn');
  backBtn.setAttribute('aria-label',currentNumber===0?'Voltar à criação do jogador':'Voltar à pergunta anterior');
  backBtn.querySelector('span:last-child').textContent=currentNumber===0?'INÍCIO':'VOLTAR';
  document.querySelector('#guide-message').textContent=`${getPlayerName()}, ${phase.guide.charAt(0).toLowerCase()}${phase.guide.slice(1)}`;
  document.querySelector('#guide-tip').textContent=phase.tip;
  answersEl.innerHTML='';
  item.a.forEach((answer,i)=>{
    const button=document.createElement('button'); button.type='button'; button.className='answer';
    button.innerHTML=`<span class="answer-letter">${letters[i]}</span><span>${answer}</span>`;
    button.addEventListener('click',()=>chooseAnswer(i)); answersEl.append(button);
  });
  feedbackEl.hidden=true; feedbackEl.innerHTML=''; nextBtn.hidden=true;
  const saved=answerHistory[currentNumber];
  if(saved){showAnswerFeedback(item,saved.selected,saved.correct,false);}
  document.querySelector('#score').textContent=score;
  document.querySelector('#question-text').focus({preventScroll:true});
}
function showAnswerFeedback(item,selected,correct,lock=true){
  [...answersEl.children].forEach((button,i)=>{
    button.disabled=lock;
    button.classList.remove('correct','wrong','muted');
    if(i===item.correct)button.classList.add('correct');
    else if(i===selected)button.classList.add('wrong');
    else if(lock)button.classList.add('muted');
  });
  feedbackEl.innerHTML=`<strong>${correct?'✦ Muito bem! +10 pontos':'✧ Quase! A resposta certa está destacada.'}</strong>${item.why}`;
  feedbackEl.hidden=false;nextBtn.hidden=false;
  nextBtn.querySelector('span:first-child').textContent=(phaseIndex===3&&questionIndex===2)?'VER RESULTADO':(questionIndex===2?'AVANÇAR DE FASE':'PRÓXIMO DESAFIO');
}
function chooseAnswer(index){
  if(answered)return; answered=true;
  const item=phases[phaseIndex].questions[questionIndex], buttons=[...answersEl.children], correct=index===item.correct;
  answerHistory[phaseIndex*3+questionIndex]={selected:index,correct};
  score=answerHistory.reduce((total,answer)=>total+(answer?.correct?10:0),0);
  if(correct){document.querySelector('#streak-label').textContent='Boa! Você avançou na jornada.';}
  else document.querySelector('#streak-label').textContent='Uma resposta errada também ensina.';
  playSound(correct?'correct':'incorrect');
  document.querySelector('#score').textContent=score;
  showAnswerFeedback(item,index,correct,true);
  nextBtn.focus({preventScroll:true});
}
function goBack(){
  playSound('back');
  if(questionIndex>0)questionIndex--;
  else if(phaseIndex>0){phaseIndex--;questionIndex=2;}
  else{
    [...document.body.classList].forEach(className=>{if(className.startsWith('scene-'))document.body.classList.remove(className);});
    showScreen(intro);return;
  }
  renderQuestion();
}
function advance(){
  if(questionIndex<2)questionIndex++;
  else if(phaseIndex<3){phaseIndex++;questionIndex=0;playSound('phase');}
  else {showEnding();return;}
  renderQuestion();
}
function showEnding(){
  playSound('complete');
  showScreen(ending);document.querySelector('#final-score').textContent=score;
  document.querySelector('#end-title-role').textContent=playerGender==='menina'?'Heroína':'Herói';
  document.querySelector('#score-fill').style.width=`${(score/120)*100}%`;
  let copy='Você completou toda a jornada e explorou diferentes aspectos da Grécia Antiga. Continue curioso: a História está cheia de descobertas!';
  if(score===120)copy='Doze acertos! Você dominou a jornada e conquistou o título de Herói do Conhecimento.';
  else if(score>=80)copy='Uma grande jornada! Você reuniu muitos conhecimentos sobre as cidades, os mitos e a cultura gregos.';
  else if(score<40)copy='Você chegou ao Olimpo! Refaça a jornada para rever as explicações e descobrir ainda mais sobre a Grécia Antiga.';
  document.querySelector('#end-copy').textContent=copy;
  const stages=[['EXPLORADOR','CIDADES'],['ATLETA','OLÍMPIA'],['SÁBIO','LEGADO']];
  document.querySelector('#medals').innerHTML=stages.map(([name,area],i)=>`<span class="medal ${score>=[30,70,100][i]?'earned':''}">✦ ${name} · ${area}</span>`).join('');
  document.querySelector('#end-title').focus({preventScroll:true});
}
function start(){phaseIndex=0;questionIndex=0;score=0;answerHistory=Array(12).fill(null);document.querySelector('#streak-label').textContent='A jornada é sua. Boa sorte!';showScreen(game);renderQuestion();playSound('start');}
document.querySelector('#start-btn').addEventListener('click',start);
document.querySelector('#replay-btn').addEventListener('click',start);
nextBtn.addEventListener('click',advance);
document.querySelector('#back-btn').addEventListener('click',goBack);
playerNameInput.addEventListener('input',updateAvatarPreview);
document.querySelectorAll('.avatar-choice').forEach(button=>button.addEventListener('click',()=>{
  playSound('select');
  playerGender=button.dataset.gender;
  selectedAvatar=0;
  document.querySelectorAll('.avatar-choice').forEach(choice=>{
    const selected=choice===button;
    choice.classList.toggle('selected',selected);
    choice.setAttribute('aria-pressed',String(selected));
  });
  renderAvatarGallery();updateAvatarPreview();
}));
renderAvatarGallery();
updateAvatarPreview();

const accessToggle=document.querySelector('#access-toggle');
const accessPanel=document.querySelector('#access-panel');
function setAccessPanel(open){accessPanel.hidden=!open;accessToggle.setAttribute('aria-expanded',String(open));if(open)document.querySelector('#text-smaller').focus();}
accessToggle.addEventListener('click',()=>{setAccessPanel(accessPanel.hidden);playSound('menu');});
document.querySelector('#access-close').addEventListener('click',()=>{setAccessPanel(false);accessToggle.focus();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!accessPanel.hidden){setAccessPanel(false);accessToggle.focus();}});
let textScale=1;
function setTextScale(value){textScale=Math.max(.9,Math.min(1.35,value));document.documentElement.style.setProperty('--access-scale',textScale);document.querySelector('#text-reset').setAttribute('aria-label',`Tamanho do texto padrão${textScale===1?' selecionado':''}`);}
document.querySelector('#text-smaller').addEventListener('click',()=>setTextScale(textScale-.1));
document.querySelector('#text-larger').addEventListener('click',()=>setTextScale(textScale+.1));
document.querySelector('#text-reset').addEventListener('click',()=>setTextScale(1));
function bindToggle(buttonId,className){
  const button=document.querySelector(buttonId);
  button.addEventListener('click',()=>{
    const enabled=button.getAttribute('aria-pressed')!=='true';
    button.setAttribute('aria-pressed',String(enabled));
    document.body.classList.toggle(className,enabled);
  });
}
bindToggle('#contrast-toggle','high-contrast');
if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches){
  document.body.classList.add('reduce-motion');
  document.querySelector('#motion-toggle').setAttribute('aria-pressed','true');
}
bindToggle('#motion-toggle','reduce-motion');
let soundEnabled=true;
let audioContext=null;
function playSound(type){
  if(!soundEnabled)return;
  const AudioContextClass=window.AudioContext||window.webkitAudioContext;
  if(!AudioContextClass)return;
  try{
    audioContext=audioContext||new AudioContextClass();
    if(audioContext.state==='suspended')audioContext.resume();
    const patterns={start:{notes:[523,659,784,1047],wave:'sine',step:.105,length:.24,volume:.075},select:{notes:[660,880],wave:'sine',step:.055,length:.095,volume:.045},question:{notes:[392,587],wave:'triangle',step:.065,length:.12,volume:.045},back:{notes:[587,440],wave:'sine',step:.07,length:.13,volume:.045},correct:{notes:[659,784,988],wave:'triangle',step:.075,length:.17,volume:.065},incorrect:{notes:[330,262],wave:'sawtooth',step:.09,length:.18,volume:.035},phase:{notes:[523,659,784,988,1175],wave:'triangle',step:.09,length:.21,volume:.07},complete:{notes:[523,659,784,1047,1319],wave:'sine',step:.12,length:.3,volume:.08},theme:{notes:[440,554,659],wave:'sine',step:.06,length:.12,volume:.04},menu:{notes:[587,740],wave:'sine',step:.07,length:.12,volume:.04}}[type];
    if(!patterns)return;
    const {notes,wave,step,length,volume}=patterns;
    const now=audioContext.currentTime;
    notes.forEach((frequency,index)=>{
      const oscillator=audioContext.createOscillator();
      const gain=audioContext.createGain();
      const at=now+index*step;
      oscillator.type=wave;oscillator.frequency.setValueAtTime(frequency,at);
      gain.gain.setValueAtTime(.0001,at);gain.gain.exponentialRampToValueAtTime(volume,at+.018);gain.gain.exponentialRampToValueAtTime(.0001,at+length);
      oscillator.connect(gain);gain.connect(audioContext.destination);oscillator.start(at);oscillator.stop(at+length+.01);
    });
  }catch{}
}
document.querySelector('#sound-toggle').addEventListener('click',event=>{
  soundEnabled=event.currentTarget.getAttribute('aria-pressed')!=='true';
  event.currentTarget.setAttribute('aria-pressed',String(soundEnabled));
  if(soundEnabled)playSound('correct');
});
document.querySelector('#theme-select').addEventListener('change',event=>{
  document.body.dataset.theme=event.currentTarget.value;
  playSound('theme');
});
