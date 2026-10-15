// ============================================================
// 硬编码题库
// 结构：DATA[单元][课] = { knowledge, choice, big, recite, dictate }
// ============================================================
const DATA = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} };

DATA[1][1] = DATA[1][1] || {};
DATA[1][1].knowledge = [
  { section: '鸦片战争前的世界与中国', items: [
    '鸦片战争前，清朝统治危机四伏',
    '鸦片战争前，清朝对外奉行闭关锁国政策',
    '鸦片战争前，中国处于封建社会晚期',
    '鸦片战争前，英国已完成工业革命',
    '鸦片战争前，英国成为世界头号工业强国',
    '鸦片战争前，英国急需更多原料和市场',
    '鸦片战争前，英国向外进行殖民扩张',
    '英国殖民扩张的目的之一是掠夺原料',
    '英国殖民扩张的目的之一是开辟市场',
    '鸦片战争前，清朝统治者以"天朝上国"自居',
    '清朝统治者把其他国家看作"蛮夷"',
    '清朝的闭关锁国政策限制了对外贸易',
    '清朝只开放广州一处作为对外通商口岸',
    '广州十三行是清朝对外贸易的重要机构',
    '中英贸易中，中国出口茶叶、丝绸、瓷器',
    '中英贸易中，英国商品在中国销路不好',
    '中英正常贸易中，中国处于出超地位',
    '中英正常贸易中，英国处于入超地位',
    '英国为扭转贸易逆差，开始向中国走私鸦片',
    '英国向中国走私鸦片的直接目的是改变贸易不利局面'
  ]},
  { section: '鸦片走私及其危害', items: [
    '从18世纪末到1839年，英国向中国走私鸦片40多万箱',
    '英国向中国走私鸦片掠走约三四亿银元',
    '鸦片输入导致中国白银大量外流',
    '白银外流直接威胁清政府的财政',
    '白银外流导致银价上涨',
    '银价上涨加重了农民的负担',
    '鸦片泛滥导致大批官僚吸食鸦片',
    '官僚吸食鸦片使清政府更加腐败',
    '军队士兵吸食鸦片，军队战斗力被削弱',
    '鸦片严重损害中国人的身心健康',
    '鸦片泛滥给中华民族带来深重灾难',
    '吸食鸦片摧残人的体质',
    '鸦片泛滥导致社会风气败坏',
    '鸦片泛滥威胁清朝统治',
    '一些有识之士主张严禁鸦片',
    '禁烟呼声最强烈的代表是林则徐',
    '林则徐是清朝后期的政治家',
    '林则徐上书道光帝，痛陈鸦片危害',
    '林则徐指出鸦片不禁，国将不国',
    '道光帝被林则徐说服，决定禁烟',
    '鸦片泛滥是禁烟运动的直接背景',
    '禁烟运动针对的是英国鸦片走私',
    '走私鸦片使英国商人获利巨大',
    '英国政府暗中支持鸦片走私',
    '鸦片走私是英国侵华的重要手段'
  ]},
  { section: '林则徐禁烟与虎门销烟', items: [
    '1838年底，道光帝派林则徐为钦差大臣',
    '林则徐前往广东查禁鸦片',
    '林则徐到达广州后雷厉风行禁烟',
    '林则徐强令英国商人交出鸦片',
    '林则徐要求外国烟贩具结保证不再贩运',
    '林则徐收缴鸦片110多万千克',
    '1839年6月3日，虎门销烟开始',
    '1839年6月25日，虎门销烟结束',
    '虎门销烟共持续23天',
    '虎门销烟的地点在广东虎门海滩',
    '虎门销烟采用海水浸泡、石灰销毁的方式',
    '虎门销烟是中国人民禁烟斗争的伟大胜利',
    '虎门销烟显示了中华民族反抗外来侵略的坚强意志',
    '林则徐被誉为民族英雄',
    '林则徐是近代中国开眼看世界的第一人',
    '虎门销烟是人民英雄纪念碑上第一幅浮雕',
    '林则徐虎门销烟震惊中外',
    '虎门销烟成为英国发动战争的借口',
    '虎门销烟打击了英国的鸦片走私',
    '虎门销烟保护了中国百姓的利益',
    '虎门销烟维护了中华民族的尊严',
    '林则徐禁烟得到广大人民支持',
    '林则徐禁烟受到部分官员阻挠',
    '林则徐禁烟时英国驻华商务监督义律阻挠',
    '义律是英国驻华商务监督'
  ]},
  { section: '鸦片战争的爆发和进程', items: [
    '鸦片战争爆发于1840年6月',
    '鸦片战争结束于1842年8月',
    '鸦片战争持续两年多',
    '1840年6月，英国舰队封锁珠江口',
    '英国舰队封锁珠江口是战争爆发的标志',
    '英军北上进攻厦门、定海等地',
    '1841年1月，英军攻占大角、沙角炮台',
    '1841年1月，英军非法强占香港岛',
    '英军进攻虎门炮台，关天培督率抵抗',
    '关天培是广东水师提督',
    '关天培在虎门炮台壮烈殉国',
    '关天培弹尽援绝仍坚守阵地',
    '英军占领广州城北的四方炮台',
    '三元里人民自发包围四方炮台',
    '三元里人民抗英迫使英军逃命',
    '1841年秋，英军再次北上',
    '英军先后攻占厦门、定海、宁波',
    '定海三总兵是葛云飞、王锡朋、郑国鸿',
    '定海三总兵皆力战殉国',
    '1842年6月，英军进犯长江门户吴淞',
    '吴淞战役中，陈化成率众抵抗',
    '陈化成是江南提督',
    '陈化成牺牲时年近七旬',
    '陈化成身负重伤仍挥旗督战',
    '陈化成力竭牺牲于吴淞',
    '1842年8月初，英军到达南京下关江面',
    '英军到达南京下关江面后清政府屈服',
    '清政府被迫与英国签订《南京条约》',
    '战争期间，沿海人民自发抗击英军',
    '鸦片战争中，中国军民表现出顽强抵抗精神'
  ]}
];
// ============================================================
// API 设置
// ============================================================

const DEEPSEEK_API_KEY = 'sk-c5be2ee907314f04bb9d6be42e554bdc';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';
const DEEPSEEK_MODEL   = 'deepseek-chat';

// ============================================================
// 全局状态
// ============================================================
const State = {
  grade: '八上',
  subject: '历史',
  unit: 1,
  lessonStart: 1,
  lessonEnd: 1,
  mode: 'choice',
  queue: [],
  index: 0,
  right: 0,
  wrong: 0,
  answered: false,
  steps: [],
  stepIdx: 0,
  currentQuestion: null,
  rightTab: 'notes',
  penColor: 'black',
  draftPen: 'black',
  currentTopic: null,
  lang: 'zh',
  country: '',
  sfxOn: true,
  sfxVol: 60,
  voiceOn: true,
  voiceRate: 50,
  theme: 'blue'
};

// ============================================================
// 双语字典
// ============================================================
const I18N = {
  zh: {
    story: [
      '在澳大利亚的一片桉树林里，住着一只小猫头鹰。他叫 Tortor。别的猫头鹰白天睡觉，晚上捉虫子。Tortor 不一样。他白天也醒着，晚上也醒着，眼睛亮亮的，像两颗小灯。',
      '小托的日子过得很舒服。有吃不完的虫子，有爬不完的树，有一群动物朋友。大家都说，小托真幸福。可小托自己，不这么觉得。',
      '有一天，小托在一棵老树的树洞里，发现了一本旧书。书皮上有灰，但翻开以后，里面全是故事。有战争，有英雄，有很远很远的国家，有很久很久以前的人。小托看了一整夜。从那天起，他爱上了历史。',
      '小托太喜欢历史了。他见到谁都讲。他讲古代的船，讲远方的城，讲那些被忘掉的名字。可动物朋友们听不懂。他们觉得，那些事太远了，跟他们没关系。',
      '“小托又在讲那些奇怪的事了。”“他为什么不能像我们一样，好好过日子？”慢慢地，朋友们不太来找他了。小托还是每天看书，每天记笔记。只是，他身边越来越安静。',
      '有一天，小托合上书，看着天边。他想：如果这里没人想听，那我就去别的地方。总有人，愿意记住那些事。总有人，需要有人帮他记住。于是，他背上小包，出发了。',
      '小托飞了很久很久。飞过大海，飞过山川。他来到一个国家——{country}。这里有很长的历史，有很厚的故事。他落在一条小河边，河上有桥，桥边有白墙黑瓦的房子。他觉得，这里就是他要找的地方。',
      '小托在这里住了下来。他听说，有一群孩子，正在学历史。他们每天要背很多很多，要记很多很多。有的孩子，记不住。有的孩子，觉得难。有的孩子，想放弃。小托想：我来帮他们。于是，他找到了你。',
      '小托不太会说话。他不会讲大道理。但他记得每一个知识点，记得每一条时间线，记得每一道你错过的题。他愿意一题一题陪你过。愿意在你背不下来的时候，再讲一遍。愿意在你做错的时候，歪着头看你，然后说：“没关系，再来。”他希望，能和你成为好朋友。',
      '历史不是死的。它藏在每一道题里，藏在每一次背诵里，藏在每一页笔记里。小托说：“你记不住的，我帮你记。”“你不懂的，我陪你懂。”“你走过的每一步，我都记得。”从今天起，你们一起，把历史记住。'
    ]
  },
  en: {
    story: [
      "In a eucalyptus forest in Australia, there lived a little owl. His name was Tortor. Other owls slept by day and hunted by night. Tortor was different. He stayed awake day and night, eyes bright like two little lamps.",
      "Tortor's days were easy. Endless bugs, endless trees, a group of animal friends. Everyone said Tortor was lucky. But Tortor didn't think so.",
      "One day, in the hollow of an old tree, Tortor found an old book. Dust on the cover, but inside — stories. Wars, heroes, faraway lands, people from long ago. He read all night. From that day on, he loved history.",
      "Tortor loved history so much. He told everyone. Ancient ships, distant cities, forgotten names. But his animal friends didn't understand. Those things felt too far away, nothing to do with them.",
      "\"Tortor is talking about strange things again.\" \"Why can't he live like us?\" Slowly, his friends stopped coming. Tortor still read every day, took notes every day. But around him, it grew quieter.",
      "One day, Tortor closed the book and looked at the sky. If no one here wants to listen, I'll go somewhere else. Someone must want to remember. Someone must need help remembering. So he packed a small bag and set off.",
      "Tortor flew for a long, long time. Over oceans, over mountains. He came to a country — {country}. Long history, deep stories. He landed by a small river, with a bridge, white walls and black tiles. He felt this was the place he was looking for.",
      "Tortor settled here. He heard there were children learning history. So much to memorize every day. Some couldn't remember. Some found it hard. Some wanted to give up. Tortor thought: I'll help them. So he found you.",
      "Tortor isn't good with words. He doesn't lecture. But he remembers every fact, every timeline, every question you got wrong. He'll go through each one with you. Explain again when you can't remember. Tilt his head when you get it wrong and say, \"It's okay, try again.\" He wants to be your friend.",
      "History isn't dead. It hides in every question, every recitation, every page of notes. Tortor says: \"What you can't remember, I'll remember for you.\" \"What you don't understand, I'll understand with you.\" \"Every step you take, I remember.\" From today on, let's remember history together."
    ]
  }
};

// ============================================================
// 国家列表
// ============================================================
const COUNTRIES = [
  { code: 'CN', zh: '中国', en: 'China' },
  { code: 'US', zh: '美国', en: 'United States' },
  { code: 'GB', zh: '英国', en: 'United Kingdom' },
  { code: 'FR', zh: '法国', en: 'France' },
  { code: 'DE', zh: '德国', en: 'Germany' },
  { code: 'JP', zh: '日本', en: 'Japan' },
  { code: 'KR', zh: '韩国', en: 'South Korea' },
  { code: 'AU', zh: '澳大利亚', en: 'Australia' },
  { code: 'CA', zh: '加拿大', en: 'Canada' },
  { code: 'SG', zh: '新加坡', en: 'Singapore' },
  { code: 'MY', zh: '马来西亚', en: 'Malaysia' },
  { code: 'TH', zh: '泰国', en: 'Thailand' },
  { code: 'VN', zh: '越南', en: 'Vietnam' },
  { code: 'IN', zh: '印度', en: 'India' },
  { code: 'RU', zh: '俄罗斯', en: 'Russia' },
  { code: 'BR', zh: '巴西', en: 'Brazil' },
  { code: 'IT', zh: '意大利', en: 'Italy' },
  { code: 'ES', zh: '西班牙', en: 'Spain' },
  { code: 'NL', zh: '荷兰', en: 'Netherlands' },
  { code: 'CH', zh: '瑞士', en: 'Switzerland' },
  { code: 'SE', zh: '瑞典', en: 'Sweden' },
  { code: 'NO', zh: '挪威', en: 'Norway' },
  { code: 'DK', zh: '丹麦', en: 'Denmark' },
  { code: 'FI', zh: '芬兰', en: 'Finland' },
  { code: 'PL', zh: '波兰', en: 'Poland' },
  { code: 'PT', zh: '葡萄牙', en: 'Portugal' },
  { code: 'GR', zh: '希腊', en: 'Greece' },
  { code: 'TR', zh: '土耳其', en: 'Turkey' },
  { code: 'EG', zh: '埃及', en: 'Egypt' },
  { code: 'ZA', zh: '南非', en: 'South Africa' },
  { code: 'AR', zh: '阿根廷', en: 'Argentina' },
  { code: 'MX', zh: '墨西哥', en: 'Mexico' },
  { code: 'ID', zh: '印度尼西亚', en: 'Indonesia' },
  { code: 'PH', zh: '菲律宾', en: 'Philippines' },
  { code: 'NZ', zh: '新西兰', en: 'New Zealand' },
  { code: 'IE', zh: '爱尔兰', en: 'Ireland' },
  { code: 'AT', zh: '奥地利', en: 'Austria' },
  { code: 'BE', zh: '比利时', en: 'Belgium' },
  { code: 'CZ', zh: '捷克', en: 'Czech' },
  { code: 'HU', zh: '匈牙利', en: 'Hungary' }
];

// ============================================================
// 教材数据
// ============================================================
const TEXTBOOK = {
  '历史': {
    '八上': {
      '第1单元 中国开始沦为半殖民地半封建社会': [
        { id: 1, name: '第1课 鸦片战争' },
        { id: 2, name: '第2课 第二次鸦片战争' },
        { id: 3, name: '第3课 太平天国运动' },
        { id: 4, name: '第4课 洋务运动' }
      ],
      '第2单元 近代化的早期探索与民族危机的加剧': [
        { id: 5, name: '第5课 甲午中日战争与列强瓜分中国狂潮' },
        { id: 6, name: '第6课 戊戌变法' },
        { id: 7, name: '第7课 抗击八国联军' }
      ],
      '第3单元 资产阶级民主革命与中华民国的建立': [
        { id: 8, name: '第8课 革命先行者孙中山' },
        { id: 9, name: '第9课 辛亥革命' },
        { id: 10, name: '第10课 中华民国的创建' },
        { id: 11, name: '第11课 北洋政府的统治与军阀割据' }
      ],
      '第4单元 新民主主义革命的开始': [
        { id: 12, name: '第12课 新文化运动' },
        { id: 13, name: '第13课 五四运动' },
        { id: 14, name: '第14课 中国共产党诞生' }
      ],
      '第5单元 从国共合作到国共对立': [
        { id: 15, name: '第15课 北伐战争' },
        { id: 16, name: '第16课 毛泽东开辟井冈山道路' },
        { id: 17, name: '第17课 中国工农红军长征' }
      ],
      '第6单元 中华民族的抗日战争': [
        { id: 18, name: '第18课 从九一八事变到西安事变' },
        { id: 19, name: '第19课 七七事变与全民族抗战' },
        { id: 20, name: '第20课 正面战场的抗战' },
        { id: 21, name: '第21课 敌后战场的抗战' },
        { id: 22, name: '第22课 抗日战争的胜利' }
      ],
      '第7单元 人民解放战争': [
        { id: 23, name: '第23课 内战爆发' },
        { id: 24, name: '第24课 人民解放战争的胜利' }
      ],
      '第8单元 近代经济、社会生活与教育文化事业的发展': [
        { id: 25, name: '第25课 经济和社会生活的变化' },
        { id: 26, name: '第26课 教育文化事业的发展' }
      ]
    }
  }
};

// ============================================================
// 工具函数
// ============================================================
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function toast(msg, ms = 1800) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.add('hidden'), ms);
}

function save(key, val) {
  try { localStorage.setItem('ho_' + key, JSON.stringify(val)); } catch(e) {}
}
function load(key, def) {
  try {
    const v = localStorage.getItem('ho_' + key);
    return v === null ? def : JSON.parse(v);
  } catch(e) { return def; }
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function countryName() {
  const c = COUNTRIES.find(x => x.code === State.country || x.zh === State.country || x.en === State.country);
  if (!c) return State.country || '';
  return State.lang === 'en' ? c.en : c.zh;
}

function gradeName(g) {
  if (State.lang === 'en') {
    const map = { '七上': 'Grade 7 · Vol 1', '七下': 'Grade 7 · Vol 2', '八上': 'Grade 8 · Vol 1', '八下': 'Grade 8 · Vol 2', '九上': 'Grade 9 · Vol 1', '九下': 'Grade 9 · Vol 2' };
    return map[g] || g;
  }
  const map = { '七上': '七年级上册', '七下': '七年级下册', '八上': '八年级上册', '八下': '八年级下册', '九上': '九年级上册', '九下': '九年级下册' };
  return map[g] || g;
}

// ============================================================
// 初始化
// ============================================================
function init() {
  State.lang      = load('lang', 'zh');
  State.country   = load('country', '');
  State.sfxOn     = load('sfxOn', true);
  State.sfxVol    = load('sfxVol', 60);
  State.voiceOn   = load('voiceOn', true);
  State.voiceRate = load('voiceRate', 50);
  State.theme     = load('theme', 'blue');
  applyTheme(State.theme);

  updateCountryBtn();
  renderUnits();
  renderHome();
  updateGreeting();

  const saved = load('range', null);
  if (saved) {
    State.unit = saved.unit;
    State.lessonStart = saved.lessonStart;
    State.lessonEnd = saved.lessonEnd;
    renderUnits();
    renderRangeBtn();
    renderCornerBadge();
  }

  bindNotesAutoSave();
  bindDraftAutoSave();
  updateVoiceChips();
  updateVoiceToggleUI();
  bindRightEdgeDrag();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      $$('.modal:not(.hidden)').forEach(m => m.classList.add('hidden'));
    }
  });
}

document.addEventListener('DOMContentLoaded', init);

// ============================================================
// 开场页
// ============================================================
function initIntro() {
  const intro = document.getElementById('intro');
  if (!intro) return;
  window._introTimer = setTimeout(() => { finishIntro(); }, 2600);
}
function skipIntro() {
  if (window._introTimer) clearTimeout(window._introTimer);
  finishIntro();
}
function finishIntro() {
  const intro = document.getElementById('intro');
  if (!intro) return;
  intro.classList.add('hide');
  setTimeout(() => {
    intro.remove();
    const launch = document.getElementById('launch');
    if (launch) launch.classList.remove('hidden');
  }, 600);
}
window.addEventListener('load', initIntro);
// ============================================================
// 启动页
// ============================================================
function enterApp() {
  if (!State.country) {
    toast(State.lang === 'en' ? 'Please choose your country first' : '请先选择你的国家');
    openCountryPicker();
    return;
  }

  const launch = document.getElementById('launch');
  if (!launch) return;

  launch.style.transition = 'opacity .35s ease';
  launch.style.opacity = '0';
  setTimeout(() => {
    launch.classList.add('hidden');

    const profile = load('profile', null);
    if (!profile) {
      openOnboard();
    } else {
      document.getElementById('home').classList.remove('hidden');
      if (load('storyMode', false)) {
        setTimeout(() => {
          if (typeof checkDiary === 'function') checkDiary();
        }, 400);
      }
    }
  }, 350);
}

// ============================================================
// 双语切换
// ============================================================
function setLang(v) {
  State.lang = v;
  save('lang', v);
  renderHome();
  renderUnits();
  renderCornerBadge();
  updateCountryBtn();
  updateGreeting();
  if (!$('#story').classList.contains('hidden')) renderStory();
  if (State.currentTopic !== null) renderAIBody();
}

// ============================================================
// 国家选择
// ============================================================
function updateCountryBtn() {
  const btn = $('#countryBtn');
  const span = $('#countryBtnText');
  if (!btn || !span) return;
  if (State.country) {
    btn.classList.add('chosen');
    span.textContent = countryName();
  } else {
    btn.classList.remove('chosen');
    span.textContent = State.lang === 'en' ? 'Choose your country' : '请选择你的国家';
  }
}

function openCountryPicker() {
  renderCountryList('');
  openModal('countryModal');
}

function renderCountryList(filter) {
  const list = $('#countryList');
  if (!list) return;
  list.innerHTML = '';

  const kw = (filter || '').trim().toLowerCase();
  const items = COUNTRIES.filter(c => {
    if (!kw) return true;
    return c.zh.includes(kw) || c.en.toLowerCase().includes(kw);
  });

  if (!items.length) {
    list.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--sub);padding:20px;">${State.lang === 'en' ? 'No matches' : '没有匹配'}</div>`;
    return;
  }

  items.forEach(c => {
    const item = document.createElement('div');
    item.className = 'country-item' + (State.country === c.code ? ' active' : '');
    item.textContent = State.lang === 'en' ? c.en : c.zh;
    item.onclick = () => selectCountry(c.code);
    list.appendChild(item);
  });
}

function filterCountries(kw) {
  renderCountryList(kw);
}

function selectCountry(code) {
  State.country = code;
  save('country', code);
  updateCountryBtn();
  closeModal('countryModal');
  toast(State.lang === 'en' ? 'Country set: ' + countryName() : '已选择：' + countryName());
}

// ============================================================
// 主题
// ============================================================
const THEMES = ['mint', 'blue', 'purple', 'green', 'orange', 'dark'];

function applyTheme(theme) {
  if (theme === 'light') theme = 'mint';
  THEMES.forEach(t => document.body.classList.remove('theme-' + t));
  document.body.classList.remove('dark');

  if (theme === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.add('theme-dark');
  } else {
    document.body.classList.add('theme-' + theme);
  }

  State.theme = theme;
  save('theme', theme);
  updateThemeChips();
}

function updateThemeChips() {
  document.querySelectorAll('.theme-chip').forEach(el => {
    el.classList.toggle('active', el.dataset.theme === State.theme);
  });
}

function setTheme(v) {
  applyTheme(v);
}

// ============================================================
// 首页渲染
// ============================================================
function renderHome() {
  const todayNew = load('todayNew', 30);
  const todayReview = load('todayReview', 20);
  const todayDictate = load('todayDictate', 10);
  const n1 = $('#todayNew'); if (n1) n1.textContent = todayNew;
  const n2 = $('#todayReview'); if (n2) n2.textContent = todayReview;
  const n3 = $('#todayDictate'); if (n3) n3.textContent = todayDictate;

  const records = load('records', []);
  const total = records.length;
  const rightCount = records.filter(r => r.ok).length;
  const ss = $('#statStreak'); if (ss) ss.textContent = load('streak', 0);
  const sr = $('#statRight'); if (sr) sr.textContent = total ? Math.round(rightCount / total * 100) + '%' : '0%';

  const wrongs = load('wrongs', []);
  const sw = $('#statWrong'); if (sw) sw.textContent = wrongs.length;
  const sub = $('#wrongCtaSub');
  if (sub) {
    sub.textContent = wrongs.length
      ? (State.lang === 'en' ? 'You have ' + wrongs.length + ' wrongs to review' : '你有 ' + wrongs.length + ' 道错题待复习')
      : (State.lang === 'en' ? 'No wrongs yet' : '还没有错题，继续保持');
  }

  const gt = $('#gradeText');
  if (gt) gt.textContent = gradeName(State.grade);

  renderRangeBtn();
  renderCornerBadge();

  const btn = document.getElementById('travelBtn');
  if (btn) {
    const acc = getAccuracy();
    btn.classList.toggle('locked', acc < 65);
  }
}

// ============================================================
// 问候语
// ============================================================
function updateGreeting() {
  const h = new Date().getHours();
  const hi = document.getElementById('homeHi');
  const sub = document.getElementById('homeSub');
  if (!hi) return;
  let text;
  if (State.lang === 'en') {
    if (h < 6) text = 'Good night';
    else if (h < 12) text = 'Good morning';
    else if (h < 18) text = 'Good afternoon';
    else text = 'Good evening';
    if (sub) sub.textContent = 'What would you like to learn today?';
  } else {
    if (h < 6) text = '夜深了';
    else if (h < 12) text = '早上好';
    else if (h < 18) text = '下午好';
    else text = '晚上好';
    if (sub) sub.textContent = '今天想学点什么？';
  }
  hi.textContent = text;
}

// ============================================================
// 单元 + 课范围
// ============================================================
function getUnits() {
  const book = TEXTBOOK[State.subject]?.[State.grade];
  if (!book) return [];
  return Object.keys(book).map((name, i) => ({
    id: i + 1,
    name,
    lessons: book[name]
  }));
}

function getCurrentUnit() {
  const units = getUnits();
  return units.find(u => u.id === State.unit) || units[0];
}

function renderUnits() {
  const units = getUnits();
  const row = $('#unitRow');
  if (!row) return;
  row.innerHTML = '';
  units.forEach(u => {
    const tab = document.createElement('div');
    tab.className = 'unit-tab' + (u.id === State.unit ? ' active' : '');
    tab.textContent = State.lang === 'en' ? 'Unit ' + u.id : '第' + u.id + '单元';
    tab.onclick = () => selectUnit(u.id);
    row.appendChild(tab);
  });
}

function selectUnit(id) {
  State.unit = id;
  const unit = getCurrentUnit();
  if (unit && unit.lessons.length) {
    State.lessonStart = unit.lessons[0].id;
    State.lessonEnd = unit.lessons[unit.lessons.length - 1].id;
  }
  saveRange();
  renderUnits();
  renderRangeBtn();
  renderCornerBadge();
}

function saveRange() {
  save('range', {
    unit: State.unit,
    lessonStart: State.lessonStart,
    lessonEnd: State.lessonEnd
  });
}

function shortName(name) {
  const m = name.match(/^第\d+课/);
  return m ? m[0] : name;
}

function renderRangeBtn() {
  const unit = getCurrentUnit();
  if (!unit) return;
  const start = unit.lessons.find(l => l.id === State.lessonStart) || unit.lessons[0];
  const end = unit.lessons.find(l => l.id === State.lessonEnd) || unit.lessons[unit.lessons.length - 1];
  const label = (start.id === end.id)
    ? start.name
    : `${shortName(start.name)} ~ ${shortName(end.name)}`;
  const rb = $('#rangeBtnText');
  if (rb) rb.textContent = label;
}

function renderCornerBadge() {
  const unit = getCurrentUnit();
  if (!unit) return;
  const start = unit.lessons.find(l => l.id === State.lessonStart) || unit.lessons[0];
  const end = unit.lessons.find(l => l.id === State.lessonEnd) || unit.lessons[unit.lessons.length - 1];
  const label = start.id === end.id
    ? shortName(start.name)
    : `${shortName(start.name)} ~ ${shortName(end.name)}`;
  const badge = State.lang === 'en'
    ? `G8 U${State.unit} ${label}`
    : `八上 第${State.unit}单元 ${label}`;
  $$('.corner-badge').forEach(el => el.textContent = badge);
}

// ============================================================
// 范围选择弹窗
// ============================================================
function openRange() {
  const unit = getCurrentUnit();
  if (!unit) return;

  const lessons = unit.lessons;
  const L = lessons.findIndex(l => l.id === State.lessonStart);
  const R = lessons.findIndex(l => l.id === State.lessonEnd);

  const ticks = $('#rangeTicks');
  if (ticks) {
    ticks.innerHTML = '';
    lessons.forEach(l => {
      const s = document.createElement('span');
      s.textContent = shortName(l.name);
      ticks.appendChild(s);
    });
  }

  updateRangeLabels(L, R);

  const total = lessons.length - 1;
  const posL = total === 0 ? 0 : (L / total) * 100;
  const posR = total === 0 ? 100 : (R / total) * 100;
  const hl = $('#rangeHandleL'); if (hl) hl.style.left = posL + '%';
  const hr = $('#rangeHandleR'); if (hr) hr.style.left = posR + '%';
  const rf = $('#rangeFill'); if (rf) { rf.style.left = posL + '%'; rf.style.width = (posR - posL) + '%'; }

  bindRangeDrag('rangeHandleL', 'L');
  bindRangeDrag('rangeHandleR', 'R');

  openModal('rangeModal');
}

function reopenRange() {
  closeModal('rangeModal');
  setTimeout(openRange, 60);
}

function updateRangeLabels(L, R) {
  const unit = getCurrentUnit();
  const s = unit.lessons[L];
  const e = unit.lessons[R];
  const ll = $('#rangeLeftLabel'); if (ll) ll.textContent = s.name;
  const rl = $('#rangeRightLabel'); if (rl) rl.textContent = e.name;
}

function bindRangeDrag(handleId, which) {
  const handle = $('#' + handleId);
  const track = $('#rangeTrack');
  const unit = getCurrentUnit();
  if (!handle || !track || !unit) return;
  const lessons = unit.lessons;
  const total = lessons.length - 1;
  if (total === 0) return;

  let dragging = false;

  const startDrag = (e) => { dragging = true; e.preventDefault(); };
  const moveDrag = (e) => {
    if (!dragging) return;
    const rect = track.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const pct = Math.max(0, Math.min(1, x / rect.width));
    let idx = Math.round(pct * total);

    const L = idxFromHandle('L');
    const R = idxFromHandle('R');

    if (which === 'L') {
      if (idx > R) idx = R;
      updateRangeVisual(idx, R);
    } else {
      if (idx < L) idx = L;
      updateRangeVisual(L, idx);
    }
  };
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    const L = idxFromHandle('L');
    const R = idxFromHandle('R');
    State.lessonStart = lessons[L].id;
    State.lessonEnd = lessons[R].id;
    saveRange();
    renderRangeBtn();
    renderCornerBadge();
  };

  handle.onmousedown = startDrag;
  handle.ontouchstart = startDrag;
  document.onmousemove = moveDrag;
  document.ontouchmove = moveDrag;
  document.onmouseup = endDrag;
  document.ontouchend = endDrag;
}

function idxFromHandle(which) {
  const handle = $(which === 'L' ? '#rangeHandleL' : '#rangeHandleR');
  const total = getCurrentUnit().lessons.length - 1;
  if (total === 0 || !handle) return 0;
  const pct = parseFloat(handle.style.left) / 100;
  return Math.round(pct * total);
}

function updateRangeVisual(L, R) {
  const unit = getCurrentUnit();
  const total = unit.lessons.length - 1;
  const posL = total === 0 ? 0 : (L / total) * 100;
  const posR = total === 0 ? 100 : (R / total) * 100;

  const hl = $('#rangeHandleL'); if (hl) hl.style.left = posL + '%';
  const hr = $('#rangeHandleR'); if (hr) hr.style.left = posR + '%';
  const rf = $('#rangeFill'); if (rf) { rf.style.left = posL + '%'; rf.style.width = (posR - posL) + '%'; }

  updateRangeLabels(L, R);
}

function rangeQuick(type) {
  const unit = getCurrentUnit();
  if (!unit) return;
  if (type === 'all') {
    State.lessonStart = unit.lessons[0].id;
    State.lessonEnd = unit.lessons[unit.lessons.length - 1].id;
  } else if (type === 'first') {
    State.lessonStart = unit.lessons[0].id;
    State.lessonEnd = unit.lessons[0].id;
  }
  saveRange();
  renderRangeBtn();
  renderCornerBadge();
  reopenRange();
}

function confirmRange() {
  closeModal('rangeModal');
  renderRangeBtn();
  renderCornerBadge();
  toast(State.lang === 'en' ? 'Range updated' : '范围已更新');
}

// ============================================================
// 弹窗
// ============================================================
function openModal(id) {
  const el = $('#' + id);
  if (el) el.classList.remove('hidden');
}
function closeModal(id) {
  const el = $('#' + id);
  if (el) el.classList.add('hidden');
}

// ============================================================
// 年级选择
// ============================================================
const GRADES = ['八上', '八下', '七上', '七下', '九上', '九下'];

function openGradePicker() {
  const cur = State.grade;
  const curIdx = GRADES.indexOf(cur);
  const msg = State.lang === 'en'
    ? 'Choose grade (1-6):\n' + GRADES.map((g, i) => (i + 1) + '. ' + g).join('\n')
    : '选择年级（1-6）：\n' + GRADES.map((g, i) => (i + 1) + '. ' + gradeName(g)).join('\n');
  const pick = prompt(msg, String(curIdx + 1));
  const idx = parseInt(pick, 10) - 1;
  if (idx >= 0 && idx < GRADES.length) {
    State.grade = GRADES[idx];
    State.unit = 1;
    const unit = getCurrentUnit();
    if (unit && unit.lessons.length) {
      State.lessonStart = unit.lessons[0].id;
      State.lessonEnd = unit.lessons[0].id;
    }
    renderUnits();
    renderRangeBtn();
    renderCornerBadge();
    renderHome();
    toast(State.lang === 'en' ? 'Grade changed' : '年级已切换');
  }
}

// ============================================================
// 右边缘拖动打开侧边栏
// ============================================================
function bindRightEdgeDrag() {
  document.querySelectorAll('.right-edge').forEach(edge => {
    let startX = 0;
    let dragging = false;

    const start = (e) => {
      dragging = true;
      startX = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const move = (e) => {
      if (!dragging) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const diff = startX - x;

      if (diff > 40) {
        dragging = false;
        const panel = document.getElementById('rightPanel');
        if (panel && panel.classList.contains('hidden')) {
          toggleRightPanel();
          document.body.classList.add('right-open');
        } else {
          toggleRightPanel();
          document.body.classList.remove('right-open');
        }
      } else if (diff < -40) {
        dragging = false;
        const panel = document.getElementById('rightPanel');
        if (panel && !panel.classList.contains('hidden')) {
          toggleRightPanel();
          document.body.classList.remove('right-open');
        }
      }
    };

    const end = () => { dragging = false; };

    edge.addEventListener('mousedown', start);
    edge.addEventListener('touchstart', start, { passive: true });
    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move, { passive: true });
    document.addEventListener('mouseup', end);
    document.addEventListener('touchend', end);
  });
}
// ============================================================
// 入站档案
// ============================================================
const OB = {
  name: '', age: '', grade: '八年级', birthday: '',
  personality: '', hobbies: [], sport: '', star: '', song: '', game: '',
  mode: '', extra: ''
};

function obGoPage(n) {
  obSave();
  document.querySelectorAll('.ob-page').forEach(p => p.classList.add('hidden'));
  const target = document.getElementById('obPage' + n);
  if (target) target.classList.remove('hidden');
  obRefreshChips();
}

function obSave() {
  const nameEl = document.getElementById('obName'); if (nameEl) OB.name = nameEl.value.trim();
  const ageEl = document.getElementById('obAge'); if (ageEl) OB.age = ageEl.value;
  const gradeEl = document.getElementById('obGrade'); if (gradeEl) OB.grade = gradeEl.value;
  const bEl = document.getElementById('obBirthday'); if (bEl) OB.birthday = bEl.value;
  const spEl = document.getElementById('obSport'); if (spEl) OB.sport = spEl.value.trim();
  const stEl = document.getElementById('obStar'); if (stEl) OB.star = stEl.value.trim();
  const soEl = document.getElementById('obSong'); if (soEl) OB.song = soEl.value.trim();
  const gmEl = document.getElementById('obGame'); if (gmEl) OB.game = gmEl.value.trim();
  const exEl = document.getElementById('obExtra'); if (exEl) OB.extra = exEl.value.trim();
}

function obBindChips() {
  document.querySelectorAll('#obPersonality .ob-chip').forEach(c => {
    c.onclick = () => {
      document.querySelectorAll('#obPersonality .ob-chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      OB.personality = c.dataset.v;
    };
  });
  document.querySelectorAll('#obHobbies .ob-chip').forEach(c => {
    c.onclick = () => {
      c.classList.toggle('active');
      OB.hobbies = [...document.querySelectorAll('#obHobbies .ob-chip.active')].map(x => x.dataset.v);
    };
  });
}

function obRefreshChips() {
  document.querySelectorAll('#obPersonality .ob-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.v === OB.personality);
  });
  document.querySelectorAll('#obHobbies .ob-chip').forEach(c => {
    c.classList.toggle('active', OB.hobbies.includes(c.dataset.v));
  });
}

function obPickMode(mode) {
  OB.mode = mode;
  document.querySelectorAll('.ob-mode-card').forEach(c => {
    c.classList.toggle('active', c.dataset.v === mode);
  });
}

function obFinish() {
  obSave();
  if (!OB.mode) {
    toast(State.lang === 'en' ? 'Pick a mode first' : '先选一个模式吧');
    return;
  }

  save('profile', OB);
  save('storyMode', OB.mode === 'story');

  const ob = document.getElementById('onboard');
  if (!ob) return;
  ob.classList.add('hide');
  setTimeout(() => ob.classList.add('hidden'), 500);

  setTimeout(() => {
    document.getElementById('home').classList.remove('hidden');
    if (OB.mode === 'story') {
      setTimeout(() => {
        if (typeof checkDiary === 'function') checkDiary();
      }, 400);
    }
  }, 500);
}

function checkOnboard() {
  const profile = load('profile', null);
  return !profile || !profile.mode;
}

function openOnboard() {
  obBindChips();
  const saved = load('profile', null);
  if (saved) {
    Object.assign(OB, saved);
    const nameEl = document.getElementById('obName'); if (nameEl) nameEl.value = saved.name || '';
    const ageEl = document.getElementById('obAge'); if (ageEl) ageEl.value = saved.age || '';
    const gradeEl = document.getElementById('obGrade'); if (gradeEl) gradeEl.value = saved.grade || '八年级';
    const bEl = document.getElementById('obBirthday'); if (bEl) bEl.value = saved.birthday || '';
    const spEl = document.getElementById('obSport'); if (spEl) spEl.value = saved.sport || '';
    const stEl = document.getElementById('obStar'); if (stEl) stEl.value = saved.star || '';
    const soEl = document.getElementById('obSong'); if (soEl) soEl.value = saved.song || '';
    const gmEl = document.getElementById('obGame'); if (gmEl) gmEl.value = saved.game || '';
    const exEl = document.getElementById('obExtra'); if (exEl) exEl.value = saved.extra || '';
    obRefreshChips();
    if (saved.mode) obPickMode(saved.mode);
  }
  document.querySelectorAll('.ob-page').forEach(p => p.classList.add('hidden'));
  const p1 = document.getElementById('obPage1');
  if (p1) p1.classList.remove('hidden');
  const ob = document.getElementById('onboard');
  if (ob) ob.classList.remove('hidden', 'hide');
}

// ============================================================
// 右侧边栏
// ============================================================
function toggleRightPanel() {
  const panel = $('#rightPanel');
  const mask = $('#rightMask');
  if (!panel) return;
  const isHidden = panel.classList.contains('hidden');
  if (isHidden) {
    panel.classList.remove('hidden');
    if (mask) mask.classList.remove('hidden');
    renderWrongsList();
    loadNotes();
    loadDraft();
  } else {
    panel.classList.add('hidden');
    if (mask) mask.classList.add('hidden');
  }
}

function switchRPTab(tab) {
  State.rightTab = tab;
  $$('.rp-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  const notes = $('#rpNotes'); if (notes) notes.classList.toggle('hidden', tab !== 'notes');
  const wrongs = $('#rpWrongs'); if (wrongs) wrongs.classList.toggle('hidden', tab !== 'wrongs');
  const draft = $('#rpDraft'); if (draft) draft.classList.toggle('hidden', tab !== 'draft');
  if (tab === 'wrongs') renderWrongsList();
  if (tab === 'notes') loadNotes();
  if (tab === 'draft') loadDraft();
}

// 笔记
function setPen(color) {
  State.penColor = color;
  $$('#rpNotes .pen-dot').forEach(d => d.classList.toggle('active', d.dataset.color === color));
  const ta = $('#notesInput');
  if (ta) {
    const colorMap = { black: '#2A3550', red: '#E8A88E', blue: '#7AA8D8' };
    ta.style.color = colorMap[color];
  }
  save('penColor', color);
}

function loadNotes() {
  const notes = load('notes', '');
  const ta = $('#notesInput');
  if (ta) ta.value = notes;
  const paper = load('paperStyle', 'paper-blue-dot');
  const canvas = $('#notesCanvas');
  if (canvas) canvas.className = 'notes-canvas ' + paper;
  const savedPen = load('penColor', 'black');
  setPen(savedPen);
}

function saveNotes() {
  const ta = $('#notesInput');
  if (!ta) return;
  save('notes', ta.value);
}

function searchNotes(kw) {
  const notes = load('notes', '');
  const ta = $('#notesInput');
  if (!ta) return;
  if (!kw) { ta.value = notes; return; }
  const idx = notes.toLowerCase().indexOf(kw.toLowerCase());
  if (idx >= 0) {
    ta.focus();
    ta.setSelectionRange(idx, idx + kw.length);
  }
}

let _notesTimer = null;
function bindNotesAutoSave() {
  const ta = $('#notesInput');
  if (!ta) return;
  ta.addEventListener('input', () => {
    clearTimeout(_notesTimer);
    _notesTimer = setTimeout(saveNotes, 500);
  });
}

// 草稿
function setDraftPen(color) {
  State.draftPen = color;
  $$('#rpDraft .pen-dot').forEach(d => d.classList.toggle('active', d.dataset.color === color));
  const ta = $('#draftInput');
  if (ta) {
    const colorMap = { black: '#2A3550', red: '#E8A88E', blue: '#7AA8D8' };
    ta.style.color = colorMap[color];
  }
  save('draftPen', color);
}

function loadDraft() {
  const draft = load('draft', '');
  const ta = $('#draftInput');
  if (ta) ta.value = draft;
  setDraftPen(load('draftPen', 'black'));
}

function saveDraft() {
  const ta = $('#draftInput');
  if (!ta) return;
  save('draft', ta.value);
}

let _draftTimer = null;
function bindDraftAutoSave() {
  const ta = $('#draftInput');
  if (!ta) return;
  ta.addEventListener('input', () => {
    clearTimeout(_draftTimer);
    _draftTimer = setTimeout(saveDraft, 500);
  });
}

function clearDraft() {
  const ta = $('#draftInput');
  if (!ta) return;
  if (!confirm(State.lang === 'en' ? 'Clear draft?' : '确定清空草稿？')) return;
  ta.value = '';
  saveDraft();
  toast(State.lang === 'en' ? 'Draft cleared' : '草稿已清空');
}

function saveDraftToNotes() {
  const ta = $('#draftInput');
  if (!ta) return;
  const draft = ta.value.trim();
  if (!draft) { toast(State.lang === 'en' ? 'Draft is empty' : '草稿是空的'); return; }
  const notes = load('notes', '');
  const header = State.lang === 'en' ? '【Draft】' : '【草稿】';
  const merged = notes + (notes ? '\n\n' : '') + header + '\n' + draft;
  save('notes', merged);
  loadNotes();
  toast(State.lang === 'en' ? 'Saved to notes' : '已存为笔记');
}

// 纸张
const PAPER_STYLES = [
  { id: 'paper-blue-dot',    name: '浅蓝波点' },
  { id: 'paper-purple-dot',  name: '紫色波点' },
  { id: 'paper-green-line',  name: '绿色横线' },
  { id: 'paper-orange-line', name: '橙色横线' },
  { id: 'paper-gray-grid',   name: '浅灰方格' }
];

function openPaperPicker() {
  const cur = load('paperStyle', 'paper-blue-dot');
  const listStr = PAPER_STYLES.map((s, i) => (i + 1) + '. ' + s.name).join('\n');
  const curIdx = String(PAPER_STYLES.findIndex(s => s.id === cur) + 1);
  const pick = prompt('选择纸张样式：\n' + listStr, curIdx);
  const idx = parseInt(pick, 10) - 1;
  if (idx >= 0 && idx < PAPER_STYLES.length) {
    const style = PAPER_STYLES[idx].id;
    save('paperStyle', style);
    const canvas = $('#notesCanvas');
    if (canvas) canvas.className = 'notes-canvas ' + style;
    toast(State.lang === 'en' ? 'Paper changed' : '纸张已切换');
  }
}

// ============================================================
// 错题本
// ============================================================
function saveWrong(q, chosen) {
  const wrongs = load('wrongs', []);
  const exist = wrongs.find(w => w.id === q.id);
  if (exist) {
    exist.count = (exist.count || 1) + 1;
    exist.lastAt = Date.now();
    exist.lastChosen = chosen;
  } else {
    wrongs.push({ ...q, count: 1, lastAt: Date.now(), lastChosen: chosen, addedAt: Date.now() });
  }
  save('wrongs', wrongs);
  renderWrongsList();
}

function renderWrongsList() {
  const list = $('#wrongsList');
  const empty = $('#wrongsEmpty');
  const wrongs = load('wrongs', []);
  if (!list) return;
  if (!wrongs.length) {
    list.innerHTML = '';
    if (empty) empty.classList.remove('hidden');
    return;
  }
  if (empty) empty.classList.add('hidden');

  const groups = {};
  wrongs.forEach(w => {
    const key = `${w.unit || 0}-${w.lesson || 0}`;
    if (!groups[key]) groups[key] = { unit: w.unit, lesson: w.lesson, list: [] };
    groups[key].list.push(w);
  });

  list.innerHTML = '';
  Object.values(groups).forEach(g => {
    const folder = document.createElement('div');
    folder.className = 'wrong-folder';
    const unitName = State.lang === 'en' ? `Unit ${g.unit || '?'}` : `第${g.unit || '?'}单元`;
    const lessonName = lessonShort(g.lesson);
    folder.innerHTML = `
      <div class="wrong-folder-head">
        <div class="wrong-folder-title">${unitName} · ${lessonName}</div>
        <div class="wrong-folder-count">${g.list.length}</div>
      </div>
      <div class="wrong-folder-sub">${formatTime(g.list[0].lastAt)}</div>
    `;
    folder.onclick = () => openWrongFolder(g);
    list.appendChild(folder);
  });
}

function lessonShort(id) {
  if (!id) return State.lang === 'en' ? 'Mixed' : '综合';
  const unit = getCurrentUnit();
  if (unit) {
    const l = unit.lessons.find(x => x.id === id);
    if (l) return shortName(l.name);
  }
  return State.lang === 'en' ? `Lesson ${id}` : `第${id}课`;
}

function formatTime(ts) {
  if (!ts) return '';
  const d = new Date(ts);
  const now = Date.now();
  const diff = (now - ts) / 1000 / 3600;
  if (State.lang === 'en') {
    if (diff < 1) return 'Just now';
    if (diff < 24) return Math.floor(diff) + 'h ago';
    if (diff < 24 * 7) return Math.floor(diff / 24) + 'd ago';
    return `${d.getMonth() + 1}/${d.getDate()}`;
  }
  if (diff < 1) return '刚刚';
  if (diff < 24) return Math.floor(diff) + ' 小时前';
  if (diff < 24 * 7) return Math.floor(diff / 24) + ' 天前';
  return `${d.getMonth() + 1}月${d.getDate()}日`;
}

function openWrongFolder(g) {
  State.queue = shuffle(g.list).slice(0, 20);
  State.index = 0;
  State.right = 0;
  State.wrong = 0;
  $('#home').classList.add('hidden');
  $('#quiz').classList.remove('hidden');
  renderQuestion();
  toggleRightPanel();
}

// ============================================================
// 模式入口
// ============================================================
function openMode(mode) {
  State.mode = mode;
  if (mode === 'ai') { openAIMode(); return; }
  if (mode === 'knowledge') { openKnowledge(); return; }
  if (mode === 'recite') { openRecite(); return; }
  if (mode === 'dictate') { openDictate(); return; }
  if (mode === 'paper') { openPaper(); return; }
  startQuiz(mode);
}

function startQuiz(mode) {
  let pool = [];
  if (mode === 'wrong') pool = load('wrongs', []);
  else if (mode === 'big') pool = getBigQuestions();
  else pool = getChoiceQuestions();

  if (!pool.length) {
    toast(State.lang === 'en' ? 'No questions in this range' : '这个范围还没有题目，先去 AI 生成题库');
    return;
  }

  pool = shuffle(pool).slice(0, 10);
  State.queue = pool;
  State.index = 0;
  State.right = 0;
  State.wrong = 0;
  State.answered = false;

  $('#home').classList.add('hidden');
  $('#quiz').classList.remove('hidden');
  renderQuestion();
}

function getChoiceQuestions() {
  const qs = load('bank_choice', []);
  return qs.filter(q => inRange(q));
}
function getBigQuestions() {
  const qs = load('bank_big', []);
  return qs.filter(q => inRange(q));
}
function inRange(q) {
  if (!q.unit || q.unit !== State.unit) return false;
  if (!q.lesson) return true;
  return q.lesson >= State.lessonStart && q.lesson <= State.lessonEnd;
}

// ============================================================
// 刷题渲染
// ============================================================
const OWL_OPENERS = [
  '来，我考考你~', '这道题，你会吗？', '慢慢想，不着急~',
  '嗯... 我觉得你会的', '看仔细了哦~', '这一题有点意思！',
  '我出题，你答~', '准备好，下一题来了', '认真读题哦~'
];

function randomOwlOpener() {
  return OWL_OPENERS[Math.floor(Math.random() * OWL_OPENERS.length)];
}

function renderQuestion() {
  const q = State.queue[State.index];
  if (!q) return;

  State.answered = false;
  State.steps = q.steps || [];
  State.stepIdx = 0;
  State.currentQuestion = q;

  const pn = $('#pNum'); if (pn) pn.textContent = State.index + 1;
  const pt = $('#pTotal'); if (pt) pt.textContent = State.queue.length;
  const pf = $('#progressFill');
  if (pf) pf.style.width = (State.index / State.queue.length * 100) + '%';

  const typeLabel = q.type === 'big'
    ? (State.lang === 'en' ? 'Essay' : '大题')
    : (State.lang === 'en' ? 'Multiple Choice' : '选择题');

  const qtypeEl = $('#qtypeLabel'); if (qtypeEl) qtypeEl.textContent = typeLabel;
  const stemEl = $('#stemText'); if (stemEl) stemEl.textContent = q.stem;

  const optBox = $('#optionsBox');
  optBox.innerHTML = '';

  if (q.type === 'big') {
    const ta = document.createElement('textarea');
    ta.className = 'big-answer';
    ta.placeholder = State.lang === 'en' ? 'Write your answer...' : '写下你的答案...';
    ta.id = 'bigAnswer';
    ta.style.cssText = 'width:100%;min-height:180px;padding:14px;border-radius:16px;border:2px solid rgba(122,168,216,.2);font-size:14px;line-height:1.7;font-family:inherit;resize:vertical;background:var(--card);color:var(--text);outline:none;';
    optBox.appendChild(ta);
  } else {
    q.options.forEach((opt, i) => {
      const div = document.createElement('div');
      div.className = 'option';
      div.innerHTML = `
        <span class="opt-label">${String.fromCharCode(65 + i)}</span>
        <span class="opt-text">${escapeHTML(opt)}</span>
      `;
      div.onclick = () => chooseOption(i);
      optBox.appendChild(div);
    });
  }

  const footer = $('#quizFooter');
  footer.innerHTML = '';

  if (q.type === 'big') {
    const btn = document.createElement('button');
    btn.className = 'btn-check';
    btn.textContent = State.lang === 'en' ? 'Show Answer' : '看参考答案';
    btn.onclick = () => checkBig();
    footer.appendChild(btn);
  } else {
    const btn = document.createElement('button');
    btn.className = 'btn-next hidden';
    btn.id = 'btnNext';
    btn.textContent = State.lang === 'en' ? 'Next →' : '下一题 →';
    btn.onclick = nextQuestion;
    footer.appendChild(btn);
  }

  resetOwlPose();
  setTimeout(() => {
    const t = document.getElementById('owlSpeakText');
    if (t) t.textContent = randomOwlOpener();
  }, 500);

  closeExplain();
}

// ============================================================
// 判分
// ============================================================
function chooseOption(i) {
  if (State.answered) return;
  State.answered = true;

  const q = State.queue[State.index];
  const opts = $$('#optionsBox .option');
  opts.forEach(o => o.classList.add('disabled'));

  const ok = i === q.answer;

  if (ok) {
    opts[i].classList.add('correct');
    State.right++;
    recordAnswer(q, true);
    soundRight();
    showOwlPose('correct');
    const bn = $('#btnNext'); if (bn) bn.classList.remove('hidden');
  } else {
    opts[i].classList.add('wrong');
    opts[q.answer].classList.add('correct');
    State.wrong++;
    recordAnswer(q, false);
    saveWrong(q, i);
    soundWrong();
    showOwlPose('wrong');
    openExplain(q.steps, q);
  }
}

function checkBig() {
  if (State.answered) return;
  State.answered = true;
  const q = State.queue[State.index];
  const ta = $('#bigAnswer');
  const ans = (ta && ta.value || '').trim();
  if (!ans) {
    toast(State.lang === 'en' ? 'Write something first' : '先写点什么吧');
    State.answered = false;
    return;
  }
  recordAnswer(q, null);
  openExplain(q.steps || [(State.lang === 'en' ? 'Compare with reference.' : '看看参考答案，对照一下你写的内容。')], q);
}

function nextQuestion() {
  State.index++;
  if (State.index >= State.queue.length) { finishQuiz(); return; }
  renderQuestion();
}

function finishQuiz() {
  const total = State.right + State.wrong;
  const rate = total ? Math.round(State.right / total * 100) : 0;
  toast(State.lang === 'en'
    ? `Done! ${State.right} correct, ${rate}%`
    : `完成！答对 ${State.right} 题，正确率 ${rate}%`, 2500);
  setTimeout(() => { exitQuiz(); }, 1200);
}

function exitQuiz() {
  $('#quiz').classList.add('hidden');
  $('#home').classList.remove('hidden');
  closeExplain();
  renderHome();
}

function recordAnswer(q, ok) {
  const records = load('records', []);
  records.push({ id: q.id, ok, at: Date.now() });
  if (records.length > 2000) records.splice(0, records.length - 2000);
  save('records', records);
}

// ============================================================
// 小托表情
// ============================================================
function showOwlPose(type) {
  const speak = document.querySelector('.owl-speak');
  if (!speak) return;
  const avatar = speak.querySelector('.owl-speak-avatar');
  const text = document.getElementById('owlSpeakText');
  if (!avatar) return;

  if (type === 'correct') {
    avatar.innerHTML = `
      <svg viewBox="0 0 120 140" width="56" height="65" xmlns="http://www.w3.org/2000/svg">
        <path d="M48 40 Q44 20 54 28 Q58 32 56 42 Z" fill="#7AA8D8"/>
        <path d="M72 40 Q76 20 66 28 Q62 32 64 42 Z" fill="#7AA8D8"/>
        <ellipse cx="22" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(-15 22 76)"/>
        <ellipse cx="98" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(15 98 76)"/>
        <circle cx="60" cy="72" r="38" fill="#7AA8D8"/>
        <ellipse cx="60" cy="82" rx="24" ry="26" fill="#EEF6FC"/>
        <circle cx="46" cy="62" r="15" fill="#FFFFFF"/>
        <path d="M40 64 Q46 56 52 64" stroke="#2A3550" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <circle cx="74" cy="62" r="15" fill="#FFFFFF"/>
        <path d="M68 64 Q74 56 80 64" stroke="#2A3550" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M54 76 Q60 84 66 76" stroke="#F5C9A0" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <ellipse cx="50" cy="112" rx="6" ry="3" fill="#F5C9A0"/>
        <ellipse cx="70" cy="112" rx="6" ry="3" fill="#F5C9A0"/>
      </svg>
    `;
    if (text) text.textContent = State.lang === 'en' ? 'Correct! Nice!' : '答对啦！真棒！';
  } else if (type === 'wrong') {
    avatar.innerHTML = `
      <svg viewBox="0 0 120 140" width="56" height="65" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(6 60 72)">
          <path d="M48 40 Q44 20 54 28 Q58 32 56 42 Z" fill="#7AA8D8"/>
          <path d="M72 40 Q76 20 66 28 Q62 32 64 42 Z" fill="#7AA8D8"/>
          <ellipse cx="22" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(-15 22 76)"/>
          <ellipse cx="98" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(15 98 76)"/>
          <circle cx="60" cy="72" r="38" fill="#7AA8D8"/>
          <ellipse cx="60" cy="82" rx="24" ry="26" fill="#EEF6FC"/>
          <circle cx="46" cy="62" r="15" fill="#FFFFFF"/>
          <circle cx="46" cy="63" r="6" fill="#2A3550"/>
          <circle cx="74" cy="62" r="15" fill="#FFFFFF"/>
          <circle cx="74" cy="63" r="6" fill="#2A3550"/>
          <path d="M54 80 Q60 74 66 80" stroke="#F5C9A0" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        </g>
      </svg>
    `;
    if (text) text.textContent = State.lang === 'en' ? 'Close! Check explanation' : '差一点点~ 看看讲解';
  }
}

function resetOwlPose() {
  const avatar = document.querySelector('.owl-speak-avatar');
  if (!avatar) return;
  avatar.innerHTML = `
    <svg viewBox="0 0 120 140" width="56" height="65" xmlns="http://www.w3.org/2000/svg">
      <path d="M48 40 Q44 20 54 28 Q58 32 56 42 Z" fill="#7AA8D8"/>
      <path d="M72 40 Q76 20 66 28 Q62 32 64 42 Z" fill="#7AA8D8"/>
      <ellipse cx="22" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(-15 22 76)"/>
      <ellipse cx="98" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(15 98 76)"/>
      <circle cx="60" cy="72" r="38" fill="#7AA8D8"/>
      <ellipse cx="60" cy="82" rx="24" ry="26" fill="#EEF6FC"/>
      <circle cx="46" cy="62" r="15" fill="#FFFFFF"/>
      <circle cx="46" cy="63" r="6" fill="#2A3550"/>
      <circle cx="48" cy="60" r="2" fill="#FFFFFF"/>
      <circle cx="74" cy="62" r="15" fill="#FFFFFF"/>
      <circle cx="74" cy="63" r="6" fill="#2A3550"/>
      <circle cx="76" cy="60" r="2" fill="#FFFFFF"/>
      <path d="M56 76 L60 84 L64 76 Z" fill="#F5C9A0"/>
      <ellipse cx="50" cy="112" rx="6" ry="3" fill="#F5C9A0"/>
      <ellipse cx="70" cy="112" rx="6" ry="3" fill="#F5C9A0"/>
    </svg>
  `;
}
// ============================================================
// 讲解面板
// ============================================================
function openExplain(steps, q) {
  State.steps = steps || [];
  State.stepIdx = 0;
  State.currentQuestion = q;
  window._explainAIMode = 'quick';

  let panel = $('#explain');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'explain';
    panel.className = 'explain';
    document.body.appendChild(panel);
  }

  panel.innerHTML = `
    <div class="explain-head">
      <span>${State.lang === 'en' ? 'Explanation' : '讲解'}</span>
      <div class="explain-close" onclick="closeExplain()">×</div>
    </div>
    <div class="explain-body" id="explainBody"></div>
    <button class="btn-continue" id="btnContinue" onclick="nextStep()">${State.lang === 'en' ? 'Continue' : '继续'}</button>
    <div class="explain-ai">
      <div class="explain-ai-tabs">
        <div class="explain-ai-tab active" data-tab="quick" onclick="switchExplainAITab('quick')">${State.lang === 'en' ? 'Quick' : '快速解答'}</div>
        <div class="explain-ai-tab" data-tab="tortor" onclick="switchExplainAITab('tortor')">${State.lang === 'en' ? 'Ask Tortor' : '找 Tortor'}</div>
      </div>
      <div class="explain-ai-input-row">
        <input class="explain-ai-input" id="explainAIInput" placeholder="${State.lang === 'en' ? 'Ask...' : '打字问...'}" onkeydown="if(event.key==='Enter')explainAISend()" />
        <div class="explain-ai-send" onclick="explainAISend()">
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 12 L20 4 L13 20 L11 13 Z" fill="currentColor"/></svg>
        </div>
      </div>
    </div>
  `;
  panel.classList.remove('hidden');

  const eb = $('#explainBody'); if (eb) eb.innerHTML = '';
  const bc = $('#btnContinue'); if (bc) bc.style.display = 'block';

  showNextStep();
  document.body.classList.add('panel-open');
}

function showNextStep() {
  const body = $('#explainBody');
  if (!body) return;

  if (State.stepIdx >= State.steps.length) {
    const bc = $('#btnContinue'); if (bc) bc.style.display = 'none';
    const bn = $('#btnNext'); if (bn) bn.classList.remove('hidden');
    return;
  }

  const p = document.createElement('div');
  p.className = 'explain-step';
  p.textContent = State.steps[State.stepIdx];
  body.appendChild(p);
  body.scrollTop = body.scrollHeight;
  State.stepIdx++;

  if (State.stepIdx >= State.steps.length) {
    const bc = $('#btnContinue'); if (bc) bc.style.display = 'none';
    const bn = $('#btnNext'); if (bn) bn.classList.remove('hidden');
  }
}

function nextStep() { showNextStep(); }

function closeExplain() {
  const panel = $('#explain');
  if (panel) panel.classList.add('hidden');
  document.body.classList.remove('panel-open');
}

function switchExplainAITab(tab) {
  window._explainAIMode = tab;
  document.querySelectorAll('.explain-ai-tab').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tab);
  });
}

function explainAISend() {
  const input = $('#explainAIInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  if (window._explainAIMode === 'tortor') {
    const q = State.currentQuestion;
    let ctx = '';
    if (q) {
      ctx += (State.lang === 'en' ? '【Question】\n' : '【当前题目】\n') + q.stem + '\n';
      if (q.options) q.options.forEach((opt, i) => { ctx += String.fromCharCode(65 + i) + '. ' + opt + '\n'; });
      if (q.answer !== undefined && q.options) ctx += (State.lang === 'en' ? 'Correct: ' : '正确答案：') + String.fromCharCode(65 + q.answer) + '\n';
      ctx += '\n';
    }
    ctx += (State.lang === 'en' ? '【My Question】\n' : '【我的问题】\n') + text +
      (State.lang === 'en' ? '\n\nExplain in detail.' : '\n\n请一步一步详细解答，越详细越好。');
    openAIMode();
    const mi = $('#aiMainInput'); if (mi) mi.value = ctx;
    sendAI();
  } else {
    explainAIQuick(text);
  }
}

async function explainAIQuick(text) {
  const body = $('#explainBody');
  if (!body) return;

  const qEl = document.createElement('div');
  qEl.className = 'explain-step highlight';
  qEl.innerHTML = `<b>${State.lang === 'en' ? 'You: ' : '你：'}</b>${escapeHTML(text)}`;
  body.appendChild(qEl);

  const aEl = document.createElement('div');
  aEl.className = 'explain-step';
  aEl.textContent = State.lang === 'en' ? 'Thinking...' : '思考中...';
  body.appendChild(aEl);
  body.scrollTop = body.scrollHeight;

  try {
    const q = State.currentQuestion;
    let prompt = '';
    if (q) {
      prompt += (State.lang === 'en' ? '【Q】\n' : '【题目】\n') + q.stem + '\n';
      if (q.options) q.options.forEach((opt, i) => { prompt += String.fromCharCode(65 + i) + '. ' + opt + '\n'; });
      if (q.answer !== undefined && q.options) prompt += (State.lang === 'en' ? 'Correct: ' : '正确答案：') + String.fromCharCode(65 + q.answer) + '\n\n';
    }
    prompt += text;
    const full = await callDeepSeek(prompt, []);
    aEl.textContent = full;
    if (State.voiceOn) speak(full);
  } catch (err) {
    aEl.textContent = (State.lang === 'en' ? 'Error: ' : '出错：') + err.message;
  }
  body.scrollTop = body.scrollHeight;
}

// ============================================================
// 音效
// ============================================================
function soundRight() {
  if (!State.sfxOn) return;
  playTone(880, 0.08, 0.04);
}
function soundWrong() {
  if (!State.sfxOn) return;
  playTone(220, 0.12, 0.05);
}
function playTone(freq, dur, vol) {
  try {
    const ctx = window._audioCtx || (window._audioCtx = new (window.AudioContext || window.webkitAudioContext)());
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = freq;
    osc.type = 'sine';
    gain.gain.value = vol * (State.sfxVol / 100);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    osc.stop(ctx.currentTime + dur);
  } catch(e) {}
}

// ============================================================
// DeepSeek
// ============================================================
async function callDeepSeek(userText, history = []) {
  if (!DEEPSEEK_API_KEY || DEEPSEEK_API_KEY === '填入你的API') {
    return State.lang === 'en'
      ? '(API not configured) I am Tortor.'
      : '（还没接入 API）这里是小托。';
  }

  const sysZh = '你是小托（Tortor），一只来自澳大利亚的猫头鹰，是 Historyi Owl 的学习助手。你陪八年级学生学历史。回答简洁、亲切、有条理，一次讲一小步。涉及历史时间、人物、条约，必须准确。不要使用 emoji 和 markdown 符号，用纯文本。';
  const sysEn = 'You are Tortor, a little owl from Australia and the learning assistant of Historyi Owl. Help 8th-grade students learn history. Keep answers concise, friendly, and well-structured. Historical facts must be accurate. No emoji, no markdown.';

  const profile = load('profile', null);
  let profileText = '';
  if (profile) {
    if (State.lang === 'en') {
      profileText = '\n\n[User Info]';
      if (profile.name) profileText += '\nName: ' + profile.name;
      if (profile.age) profileText += '\nAge: ' + profile.age;
      if (profile.personality) profileText += '\nPersonality: ' + profile.personality;
      if (profile.hobbies && profile.hobbies.length) profileText += '\nHobbies: ' + profile.hobbies.join(', ');
    } else {
      profileText = '\n\n【用户信息】';
      if (profile.name) profileText += '\n名字：' + profile.name;
      if (profile.age) profileText += '\n年龄：' + profile.age;
      if (profile.personality) profileText += '\n性格：' + profile.personality;
      if (profile.hobbies && profile.hobbies.length) profileText += '\n爱好：' + profile.hobbies.join('、');
    }
  }

  const messages = [
    { role: 'system', content: (State.lang === 'en' ? sysEn : sysZh) + profileText },
    ...history.slice(-10).map(m => ({ role: m.role, content: m.content })),
    { role: 'user', content: userText }
  ];

  const res = await fetch(DEEPSEEK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + DEEPSEEK_API_KEY
    },
    body: JSON.stringify({ model: DEEPSEEK_MODEL, messages: messages, stream: true })
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error('API ' + res.status + ': ' + errText.slice(0, 120));
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';
  let full = '';
  const botEl = document.querySelector('.ai-msg.bot .ai-bubble.streaming');

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop();

    for (const line of lines) {
      const tt = line.trim();
      if (!tt || !tt.startsWith('data:')) continue;
      const data = tt.slice(5).trim();
      if (data === '[DONE]') continue;
      try {
        const json = JSON.parse(data);
        const delta = json.choices?.[0]?.delta?.content || '';
        if (delta) {
          full += delta;
          if (botEl) {
            botEl.textContent = full;
            const body = document.getElementById('aiBody');
            if (body) body.scrollTop = body.scrollHeight;
          }
        }
      } catch(e) {}
    }
  }
  return full || (State.lang === 'en' ? '(No content)' : '（没有收到内容）');
}

// 非流式调用（用于 AI 生成题库）
async function callDeepSeekRaw(prompt) {
  if (!DEEPSEEK_API_KEY || DEEPSEEK_API_KEY === '填入你的API') {
    throw new Error(State.lang === 'en' ? 'API key not set' : '请先在代码里填入 API Key');
  }
  const res = await fetch(DEEPSEEK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + DEEPSEEK_API_KEY
    },
    body: JSON.stringify({
      model: DEEPSEEK_MODEL,
      messages: [
        { role: 'system', content: '你是严格的 JSON 生成器，只输出 JSON 数组或对象，不要任何解释，不要 markdown 代码块。' },
        { role: 'user', content: prompt }
      ],
      stream: false,
      temperature: 0.8
    })
  });
  if (!res.ok) throw new Error('API ' + res.status);
  const data = await res.json();
  return data.choices[0].message.content;
}

// ============================================================
// AI 模式
// ============================================================
function openAIMode() {
  openModal('aiModal');
  const topics = load('topics', []);
  if (State.currentTopic === null && topics.length === 0) {
    const defTitle = State.lang === 'en' ? 'New Topic' : '新话题';
    topics.unshift({ title: defTitle, messages: [], at: Date.now() });
    save('topics', topics);
    State.currentTopic = 0;
  }
  if (State.currentTopic === null && topics.length) State.currentTopic = 0;
  if (State.currentTopic !== null && topics[State.currentTopic]) {
    const at = $('#aiTitle'); if (at) at.textContent = topics[State.currentTopic].title;
  }
  renderAIBody();
  updateVoiceToggleUI();
}

function renderAIBody() {
  const body = $('#aiBody');
  if (!body) return;
  const topics = load('topics', []);
  const topic = topics[State.currentTopic];

  body.innerHTML = '';
  if (!topic || !topic.messages || !topic.messages.length) {
    body.innerHTML = `
      <div class="ai-welcome">
        <div class="ai-welcome-owl">
          <svg viewBox="0 0 120 140" width="64" height="75">
            <path d="M48 40 Q44 20 54 28 Q58 32 56 42 Z" fill="#7AA8D8"/>
            <path d="M72 40 Q76 20 66 28 Q62 32 64 42 Z" fill="#7AA8D8"/>
            <ellipse cx="22" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(-15 22 76)"/>
            <ellipse cx="98" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(15 98 76)"/>
            <circle cx="60" cy="72" r="38" fill="#7AA8D8"/>
            <ellipse cx="60" cy="82" rx="24" ry="26" fill="#EEF6FC"/>
            <circle cx="46" cy="62" r="15" fill="#FFFFFF"/>
            <circle cx="46" cy="63" r="6" fill="#2A3550"/>
            <circle cx="48" cy="60" r="2" fill="#FFFFFF"/>
            <circle cx="74" cy="62" r="15" fill="#FFFFFF"/>
            <circle cx="74" cy="63" r="6" fill="#2A3550"/>
            <circle cx="76" cy="60" r="2" fill="#FFFFFF"/>
            <path d="M56 76 L60 84 L64 76 Z" fill="#F5C9A0"/>
          </svg>
        </div>
        <div class="ai-welcome-title">${State.lang === 'en' ? 'Hi, I am Tortor' : '你好，我是小托'}</div>
        <div class="ai-welcome-sub">${State.lang === 'en' ? 'Ask me anything.' : '历史，随便问。'}</div>
      </div>
    `;
    return;
  }

  topic.messages.forEach(m => {
    appendAIMessage(m.role === 'user' ? 'user' : 'bot', m.content, false);
  });
  body.scrollTop = body.scrollHeight;
}

function appendAIMessage(role, content, scroll = true) {
  const body = $('#aiBody');
  const msg = document.createElement('div');
  msg.className = 'ai-msg ' + role;
  const avatar = document.createElement('div');
  avatar.className = 'ai-avatar ' + role;
  avatar.textContent = role === 'user' ? '你' : 'T';
  const bubble = document.createElement('div');
  bubble.className = 'ai-bubble';
  bubble.textContent = content;
  msg.appendChild(avatar);
  msg.appendChild(bubble);
  body.appendChild(msg);
  if (scroll) body.scrollTop = body.scrollHeight;
  return bubble;
}

function sendAI() {
  const input = $('#aiMainInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  const topics = load('topics', []);
  if (State.currentTopic === null) {
    topics.unshift({ title: text.slice(0, 20), messages: [], at: Date.now() });
    State.currentTopic = 0;
    save('topics', topics);
  }

  const topic = topics[State.currentTopic];
  topic.messages.push({ role: 'user', content: text });
  save('topics', topics);
  appendAIMessage('user', text);

  const botBubble = appendAIMessage('bot', '');
  botBubble.classList.add('streaming');

  callDeepSeek(text, topic.messages)
    .then(full => {
      botBubble.classList.remove('streaming');
      botBubble.textContent = full;
      if (State.voiceOn) speak(full);
      topic.messages.push({ role: 'assistant', content: full });
      save('topics', topics);
    })
    .catch(err => {
      botBubble.classList.remove('streaming');
      botBubble.textContent = (State.lang === 'en' ? 'Error: ' : '出错了：') + err.message;
    });
}

// ============================================================
// 语音
// ============================================================
function toggleVoiceGlobal() {
  State.voiceOn = !State.voiceOn;
  save('voiceOn', State.voiceOn);
  updateVoiceToggleUI();
  if (State.voiceOn) speak(State.lang === 'en' ? 'Voice on' : '语音已打开');
  else if (window.speechSynthesis) speechSynthesis.cancel();
  const vo = document.getElementById('voiceOn');
  if (vo) vo.checked = State.voiceOn;
}

function updateVoiceToggleUI() {
  const btn = document.getElementById('aiVoiceToggle');
  if (!btn) return;
  btn.classList.toggle('on', State.voiceOn);
}

function speak(text, onEnd) {
  if (!State.voiceOn) { if (onEnd) onEnd(); return; }
  if (!window.speechSynthesis) { if (onEnd) onEnd(); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = State.lang === 'en' ? 'en-US' : 'zh-CN';
  u.rate = 0.5 + (State.voiceRate / 100) * 1.0;

  const saved = load('voiceName', '');
  if (saved) {
    const v = speechSynthesis.getVoices().find(x => x.name === saved);
    if (v) u.voice = v;
  }
  if (onEnd) u.onend = onEnd;
  speechSynthesis.speak(u);
}

const VOICE_PRESETS = {
  aria:  { keywords: ['Xiaoxiao', 'Aria', 'Jenny', 'Zira'] },
  iris:  { keywords: ['Xiaoyi', 'Iris', 'Michelle', 'Yaoyao'] },
  raine: { keywords: ['Yunxi', 'Guy', 'David', 'Mark'] },
  atlas: { keywords: ['Yunjian', 'Ryan', 'George'] }
};

function pickVoice(key) {
  save('voicePreset', key);
  updateVoiceChips();
  const preset = VOICE_PRESETS[key];
  const voices = speechSynthesis.getVoices();
  const langs = State.lang === 'en' ? ['en'] : ['zh'];
  let match = null;
  for (const kw of preset.keywords) {
    match = voices.find(x => langs.some(l => x.lang.startsWith(l)) && x.name.toLowerCase().includes(kw.toLowerCase()));
    if (match) break;
  }
  if (!match) match = voices.find(x => langs.some(l => x.lang.startsWith(l)));
  if (match) {
    save('voiceName', match.name);
    toast(State.lang === 'en' ? 'Voice set' : '音色已选');
  }
  const prev = State.voiceOn;
  State.voiceOn = true;
  speak(State.lang === 'en' ? 'Hello, I am Tortor.' : '你好，我是小托。');
  State.voiceOn = prev;
}

function updateVoiceChips() {
  const cur = load('voicePreset', 'aria');
  document.querySelectorAll('.voice-chip').forEach(el => {
    el.classList.toggle('active', el.dataset.voice === cur);
  });
}

function toggleVoice() {
  const vo = $('#voiceOn');
  State.voiceOn = vo ? vo.checked : true;
  save('voiceOn', State.voiceOn);
  updateVoiceToggleUI();
}
function setVoiceRate(v) { State.voiceRate = +v; save('voiceRate', +v); }
function toggleSfx() { State.sfxOn = $('#sfxOn').checked; save('sfxOn', State.sfxOn); }
function setSfxVol(v) { State.sfxVol = +v; save('sfxVol', +v); }

// 语音全屏
function toggleVoiceMode() {
  const fs = document.getElementById('voiceFullscreen');
  if (fs.classList.contains('hidden')) openVoiceFullscreen();
  else closeVoiceFullscreen();
}

function openVoiceFullscreen() {
  const fs = document.getElementById('voiceFullscreen');
  if (!fs) return;
  fs.classList.remove('hidden');
  document.getElementById('voiceFsStatus').textContent = State.lang === 'en' ? 'Listening...' : '聆听中...';
  document.getElementById('voiceFsText').textContent = '';
  document.getElementById('voiceCircle').className = 'voice-fs-circle listening';
  startVoiceRecognition();
}

function closeVoiceFullscreen() {
  const fs = document.getElementById('voiceFullscreen');
  if (fs) fs.classList.add('hidden');
  if (window._recognition) try { window._recognition.stop(); } catch(e) {}
  if (window.speechSynthesis) speechSynthesis.cancel();
}

function startVoiceRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    document.getElementById('voiceFsText').textContent = State.lang === 'en' ? 'Not supported' : '不支持语音识别';
    return;
  }
  const r = new SR();
  r.lang = State.lang === 'en' ? 'en-US' : 'zh-CN';
  r.interimResults = true;
  r.continuous = false;
  window._recognition = r;

  r.onresult = (e) => {
    let text = '';
    for (let i = e.resultIndex; i < e.results.length; i++) text += e.results[i][0].transcript;
    document.getElementById('voiceFsText').textContent = text;
    if (e.results[e.results.length - 1].isFinal) {
      r.stop();
      sendVoiceQuestion(text);
    }
  };
  r.onerror = (e) => {
    document.getElementById('voiceFsText').textContent = 'Error: ' + e.error;
  };
  r.start();
}

async function sendVoiceQuestion(text) {
  if (!text || !text.trim()) { openVoiceFullscreen(); return; }
  document.getElementById('voiceFsStatus').textContent = State.lang === 'en' ? 'Thinking...' : '思考中...';
  document.getElementById('voiceCircle').className = 'voice-fs-circle';

  const topics = load('topics', []);
  if (State.currentTopic === null) {
    topics.unshift({ title: text.slice(0, 20), messages: [], at: Date.now() });
    State.currentTopic = 0;
    save('topics', topics);
  }
  const topic = topics[State.currentTopic];
  topic.messages.push({ role: 'user', content: text });
  save('topics', topics);

  try {
    const full = await callDeepSeek(text, topic.messages);
    topic.messages.push({ role: 'assistant', content: full });
    save('topics', topics);
    document.getElementById('voiceFsStatus').textContent = State.lang === 'en' ? 'Speaking...' : '说话中...';
    document.getElementById('voiceFsText').textContent = full;
    document.getElementById('voiceCircle').className = 'voice-fs-circle speaking';
    speak(full, () => {
      document.getElementById('voiceCircle').className = 'voice-fs-circle';
      setTimeout(() => {
        document.getElementById('voiceFsStatus').textContent = State.lang === 'en' ? 'Listening...' : '聆听中...';
        document.getElementById('voiceFsText').textContent = '';
        startVoiceRecognition();
      }, 400);
    });
  } catch(err) {
    document.getElementById('voiceFsText').textContent = 'Error: ' + err.message;
    setTimeout(openVoiceFullscreen, 2500);
  }
}
// ============================================================
// 完全知识点
// ============================================================
const KNOWLEDGE_DATA = {};

function openKnowledge() {
  const page = document.getElementById('knowledgePage');
  if (!page) return;
  page.classList.remove('hidden');
  renderKnowledge();
}

function renderKnowledge() {
  const body = document.getElementById('kpBody');
  if (!body) return;

  const bank = load('bank_knowledge', []);
  const generated = bank.find(x => x.unit === State.unit && x.lesson === State.lessonStart);

  let lessonData = null;
  if (generated && generated.sections && generated.sections.length) {
    lessonData = generated.sections;
  } else {
    const hard = KNOWLEDGE_DATA[State.unit] || {};
    lessonData = hard[State.lessonStart] || null;
  }

  if (!lessonData || !lessonData.length) {
    body.innerHTML = `
      <div style="text-align:center;padding:40px 20px;">
        <div style="font-size:15px;color:var(--sub);margin-bottom:16px;">本课还没有知识点</div>
        <div onclick="closeModePage('knowledgePage');openGenPage();" style="display:inline-block;padding:12px 28px;border-radius:999px;background:linear-gradient(135deg,#7AA8D8,#9BBEE2);color:#fff;font-weight:700;cursor:pointer;font-size:14px;">用 AI 生成 100+ 条</div>
      </div>
    `;
    return;
  }

  const statuses = load('kpStatus', {});
  body.innerHTML = '';

  lessonData.forEach((section, si) => {
    const sec = document.createElement('div');
    sec.className = 'kp-section';
    sec.innerHTML = `<div class="kp-section-title">${escapeHTML(section.section)}</div>`;

    const list = document.createElement('div');
    list.className = 'kp-list';

    (section.items || []).forEach((item, idx) => {
      const key = `${State.unit}-${State.lessonStart}-${si}-${idx}`;
      const cur = statuses[key] || '';
      const text = typeof item === 'string' ? item : (item.text || '');
      const el = document.createElement('div');
      el.className = 'kp-item ' + (cur === 'm' ? 'mastered' : cur === 'f' ? 'fuzzy' : cur === 'u' ? 'unknown' : '');
      el.innerHTML = `
        <div class="kp-item-head">
          <div class="kp-item-text">${escapeHTML(text)}</div>
          <div class="kp-status">
            <div class="kp-status-btn m ${cur === 'm' ? 'on' : ''}" onclick="kpSetStatus('${key}','m')">会</div>
            <div class="kp-status-btn f ${cur === 'f' ? 'on' : ''}" onclick="kpSetStatus('${key}','f')">糊</div>
            <div class="kp-status-btn u ${cur === 'u' ? 'on' : ''}" onclick="kpSetStatus('${key}','u')">否</div>
          </div>
        </div>
      `;
      list.appendChild(el);
    });
    sec.appendChild(list);
    body.appendChild(sec);
  });
}

function kpSetStatus(key, val) {
  const statuses = load('kpStatus', {});
  if (statuses[key] === val) delete statuses[key];
  else statuses[key] = val;
  save('kpStatus', statuses);
  renderKnowledge();
}

function closeModePage(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
  if (window.speechSynthesis) speechSynthesis.cancel();
}

// ============================================================
// 背诵
// ============================================================
const RECITE_DATA = {};
let _rcList = [], _rcIdx = 0;

function openRecite() {
  const gen = load('bank_recite', []).filter(x => x.unit === State.unit && x.lesson === State.lessonStart);
  const hard = (RECITE_DATA[State.unit] || {})[State.lessonStart] || [];
  const list = [...hard, ...gen];

  if (!list.length) {
    toast(State.lang === 'en' ? 'No recite cards. Generate first.' : '本课还没有背诵卡，先去 AI 生成题库');
    return;
  }
  _rcList = shuffle([...list]).slice(0, 10);
  _rcIdx = 0;
  document.getElementById('recitePage').classList.remove('hidden');
  renderRecite();
}

function renderRecite() {
  const body = document.getElementById('rcBody');
  const footer = document.getElementById('rcFooter');
  const counter = document.getElementById('rcCounter');
  if (!body) return;

  if (_rcIdx >= _rcList.length) {
    body.innerHTML = `<div class="rc-card" style="cursor:default;"><div class="rc-card-q">${State.lang === 'en' ? 'Round complete' : '这一轮完成啦'}</div></div>`;
    footer.innerHTML = `<button class="rc-btn good" onclick="openRecite()">${State.lang === 'en' ? 'Again' : '再来一轮'}</button><button class="rc-btn mid" onclick="closeModePage('recitePage')">${State.lang === 'en' ? 'Exit' : '退出'}</button>`;
    return;
  }

  const item = _rcList[_rcIdx];
  counter.textContent = (_rcIdx + 1) + ' / ' + _rcList.length;

  body.innerHTML = `
    <div class="rc-card" id="rcCard" onclick="rcFlip()">
      <div class="rc-card-q" id="rcQ">${escapeHTML(item.q)}</div>
      <div class="rc-card-tip" id="rcTip">${State.lang === 'en' ? 'Tap to reveal' : '点一下看答案'}</div>
      <div class="rc-card-a hidden" id="rcA">${escapeHTML(item.a)}</div>
    </div>
  `;
  footer.innerHTML = '';
}

function rcFlip() {
  const q = document.getElementById('rcQ');
  const a = document.getElementById('rcA');
  const tip = document.getElementById('rcTip');
  const card = document.getElementById('rcCard');
  if (!a || !a.classList.contains('hidden')) return;

  a.classList.remove('hidden');
  q.classList.add('hidden');
  tip.classList.add('hidden');
  card.classList.add('flipped');

  const footer = document.getElementById('rcFooter');
  footer.innerHTML = `
    <button class="rc-btn bad" onclick="rcMark('bad')">${State.lang === 'en' ? 'No' : '不会'}</button>
    <button class="rc-btn mid" onclick="rcMark('mid')">${State.lang === 'en' ? 'Fuzzy' : '模糊'}</button>
    <button class="rc-btn good" onclick="rcMark('good')">${State.lang === 'en' ? 'Got it' : '会了'}</button>
  `;
}

function rcMark(level) {
  const item = _rcList[_rcIdx];
  if (level === 'bad') {
    const mem = load('memory', []);
    mem.push({ text: '【待复习】' + item.q + ' → ' + item.a, at: Date.now() });
    save('memory', mem);
  }
  _rcIdx++;
  renderRecite();
}

// ============================================================
// 默写
// ============================================================
const DICTATE_DATA = {};
let _dtList = [], _dtIdx = 0;

function openDictate() {
  const gen = load('bank_dictate', []).filter(x => x.unit === State.unit && x.lesson === State.lessonStart);
  const hard = (DICTATE_DATA[State.unit] || {})[State.lessonStart] || [];
  const list = [...hard, ...gen];

  if (!list.length) {
    toast(State.lang === 'en' ? 'No dictation yet. Generate first.' : '本课还没有默写句，先去 AI 生成题库');
    return;
  }
  _dtList = shuffle([...list]).slice(0, 10);
  _dtIdx = 0;
  document.getElementById('dictatePage').classList.remove('hidden');
  renderDictate();
}

function renderDictate() {
  const body = document.getElementById('dtBody');
  const footer = document.getElementById('dtFooter');
  const counter = document.getElementById('dtCounter');
  if (!body) return;

  if (_dtIdx >= _dtList.length) {
    body.innerHTML = `<div class="dt-stem" style="text-align:center;padding:40px 20px;">${State.lang === 'en' ? 'Round complete' : '这一轮完成啦'}</div>`;
    footer.innerHTML = `<button class="rc-btn good" onclick="openDictate()">${State.lang === 'en' ? 'Again' : '再来一轮'}</button><button class="rc-btn mid" onclick="closeModePage('dictatePage')">${State.lang === 'en' ? 'Exit' : '退出'}</button>`;
    return;
  }

  const item = _dtList[_dtIdx];
  counter.textContent = (_dtIdx + 1) + ' / ' + _dtList.length;

  body.innerHTML = `
    <div class="dt-stem">${escapeHTML(item.q)}</div>
    <textarea class="dt-answer" id="dtInput" placeholder="${State.lang === 'en' ? 'Type your answer...' : '在这里默写...'}"></textarea>
    <div id="dtResultArea"></div>
  `;

  footer.innerHTML = `
    <button class="rc-btn mid" onclick="dtSkip()">${State.lang === 'en' ? 'Skip' : '跳过'}</button>
    <button class="rc-btn good" onclick="dtCheck()">${State.lang === 'en' ? 'Check' : '比对答案'}</button>
  `;
}

function dtCheck() {
  const item = _dtList[_dtIdx];
  const input = document.getElementById('dtInput');
  if (!input) return;
  const val = input.value.trim();
  if (!val) { toast(State.lang === 'en' ? 'Write something' : '先写点什么'); return; }

  let hitCount = 0;
  const highlighted = (item.keys || []).map(k => {
    const has = val.includes(k);
    if (has) hitCount++;
    return has ? `<span class="hit">${k}</span>` : `<span class="miss">${k}</span>`;
  }).join('、');

  document.getElementById('dtResultArea').innerHTML = `
    <div class="dt-result">
      <div class="dt-result-title">${State.lang === 'en' ? 'Keywords hit' : '关键词命中'} ${hitCount} / ${(item.keys || []).length}</div>
      <div class="dt-result-text">${highlighted}</div>
    </div>
  `;

  if (hitCount < (item.keys || []).length) {
    const mem = load('memory', []);
    mem.push({ text: '【默写待复习】' + item.q, at: Date.now() });
    save('memory', mem);
  }
  document.getElementById('dtFooter').innerHTML = `<button class="rc-btn good" onclick="dtNext()">${State.lang === 'en' ? 'Next' : '下一句'}</button>`;
}

function dtSkip() { _dtIdx++; renderDictate(); }
function dtNext() { _dtIdx++; renderDictate(); }

// ============================================================
// 试卷
// ============================================================
let _paperList = [], _paperAnswers = {}, _paperTimer = null, _paperSeconds = 0, _paperSubmitted = false;

function openPaper() {
  const pool = getChoiceQuestions();
  if (!pool.length) { toast(State.lang === 'en' ? 'No questions' : '这个范围还没有题目，先去 AI 生成题库'); return; }
  _paperList = shuffle([...pool]).slice(0, 20);
  _paperAnswers = {};
  _paperSubmitted = false;
  _paperSeconds = 0;
  document.getElementById('paperPage').classList.remove('hidden');
  renderPaper();
  if (_paperTimer) clearInterval(_paperTimer);
  _paperTimer = setInterval(() => {
    _paperSeconds++;
    const t = document.getElementById('ppTimer');
    if (t) {
      const m = String(Math.floor(_paperSeconds / 60)).padStart(2, '0');
      const s = String(_paperSeconds % 60).padStart(2, '0');
      t.textContent = m + ':' + s;
    }
  }, 1000);
}

function renderPaper() {
  const body = document.getElementById('ppBody');
  const footer = document.getElementById('ppFooter');
  if (!body) return;
  body.innerHTML = '';

  const info = document.createElement('div');
  info.className = 'pp-head-info';
  info.innerHTML = `<span>${State.lang === 'en' ? 'Total' : '共'} ${_paperList.length} ${State.lang === 'en' ? 'questions' : '题'}</span>`;
  body.appendChild(info);

  _paperList.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'pp-q';
    const stem = document.createElement('div');
    stem.className = 'pp-q-stem';
    stem.innerHTML = `<div class="pp-q-num">${State.lang === 'en' ? 'Q' : '第'} ${idx + 1}</div>${escapeHTML(q.stem)}`;
    card.appendChild(stem);
    const opts = document.createElement('div');
    opts.className = 'pp-q-options';
    (q.options || []).forEach((opt, i) => {
      const el = document.createElement('div');
      el.className = 'pp-opt';
      el.textContent = String.fromCharCode(65 + i) + '. ' + opt;
      el.dataset.qid = q.id;
      el.dataset.idx = i;
      el.onclick = () => paperSelect(q.id, i, el);
      opts.appendChild(el);
    });
    card.appendChild(opts);
    body.appendChild(card);
  });

  footer.innerHTML = `<button class="rc-btn good" onclick="paperSubmit()">${State.lang === 'en' ? 'Submit' : '提交试卷'}</button>`;
}

function paperSelect(qid, i, el) {
  if (_paperSubmitted) return;
  _paperAnswers[qid] = i;
  const siblings = el.parentElement.querySelectorAll('.pp-opt');
  siblings.forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
}

function paperSubmit() {
  if (_paperSubmitted) return;
  _paperSubmitted = true;
  if (_paperTimer) { clearInterval(_paperTimer); _paperTimer = null; }

  let right = 0;
  _paperList.forEach(q => {
    const chosen = _paperAnswers[q.id];
    const opts = document.querySelectorAll(`.pp-opt[data-qid="${q.id}"]`);
    opts.forEach(o => {
      const idx = parseInt(o.dataset.idx, 10);
      if (idx === q.answer) o.classList.add('correct');
      if (idx === chosen && idx !== q.answer) o.classList.add('wrong');
    });
    if (chosen === q.answer) right++;
  });

  const score = right * 5;
  const total = _paperList.length * 5;
  const body = document.getElementById('ppBody');
  const resultCard = document.createElement('div');
  resultCard.className = 'pp-result-card';
  resultCard.innerHTML = `
    <div class="pp-result-score">${score}</div>
    <div class="pp-result-label">${State.lang === 'en' ? 'Score / ' : '得分 / 满分 '}${total}</div>
    <div class="pp-result-detail">
      ${State.lang === 'en' ? 'Correct: ' : '答对 '}${right}${State.lang === 'en' ? '' : ' 题'}<br>
      ${State.lang === 'en' ? 'Time: ' : '用时 '}${Math.floor(_paperSeconds / 60)}${State.lang === 'en' ? 'm ' : ' 分 '}${_paperSeconds % 60}${State.lang === 'en' ? 's' : ' 秒'}
    </div>
  `;
  body.insertBefore(resultCard, body.firstChild);
  body.scrollTop = 0;

  const footer = document.getElementById('ppFooter');
  footer.innerHTML = `
    <button class="rc-btn good" onclick="closeModePage('paperPage')">${State.lang === 'en' ? 'Done' : '完成'}</button>
    <button class="rc-btn mid" onclick="openPaper()">${State.lang === 'en' ? 'Again' : '再来一套'}</button>
  `;
}

// ============================================================
// 故事
// ============================================================
let storyIdx = 0;
const STORY_ILLUS = [
  `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="110" width="200" height="30" fill="#EBF3FB"/><path d="M50 110 L55 60 M55 80 L38 65 M55 85 L72 68" stroke="#8FB8A8" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M150 110 L145 65 M145 82 L128 70 M145 88 L162 74" stroke="#8FB8A8" stroke-width="4" stroke-linecap="round" fill="none"/><ellipse cx="100" cy="85" rx="22" ry="26" fill="#7AA8D8"/><ellipse cx="100" cy="92" rx="13" ry="16" fill="#EEF6FC"/><circle cx="92" cy="80" r="7" fill="#FFFFFF"/><circle cx="108" cy="80" r="7" fill="#FFFFFF"/><circle cx="92" cy="81" r="3" fill="#2A3550"/><circle cx="108" cy="81" r="3" fill="#2A3550"/><path d="M97 92 L100 97 L103 92 Z" fill="#F5C9A0"/><circle cx="178" cy="40" r="14" fill="#FFF3C4" stroke="#E8C89A" stroke-width="2"/></svg>`,
  `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="115" width="200" height="25" fill="#B8DDC5"/><circle cx="60" cy="35" r="14" fill="#FFF3C4" stroke="#E8C89A" stroke-width="2"/><ellipse cx="70" cy="95" rx="18" ry="20" fill="#7AA8D8"/><circle cx="64" cy="90" r="5" fill="#FFFFFF"/><circle cx="76" cy="90" r="5" fill="#FFFFFF"/><circle cx="64" cy="91" r="2" fill="#2A3550"/><circle cx="76" cy="91" r="2" fill="#2A3550"/><path d="M67 98 L70 102 L73 98 Z" fill="#F5C9A0"/><ellipse cx="130" cy="100" rx="14" ry="16" fill="#FFD9C9"/><ellipse cx="165" cy="102" rx="12" ry="14" fill="#D4C5F0"/></svg>`,
  `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="115" width="200" height="25" fill="#F5EDE0"/><path d="M60 90 Q100 75 140 90 L140 130 Q100 115 60 130 Z" fill="#FFF8E8" stroke="#E8C89A" stroke-width="2.5" stroke-linejoin="round"/><line x1="100" y1="82" x2="100" y2="122" stroke="#E8C89A" stroke-width="2"/><line x1="72" y1="98" x2="92" y2="94" stroke="#7AA8D8" stroke-width="1.8" stroke-linecap="round"/><line x1="72" y1="106" x2="92" y2="102" stroke="#7AA8D8" stroke-width="1.8" stroke-linecap="round"/><line x1="108" y1="94" x2="128" y2="98" stroke="#7AA8D8" stroke-width="1.8" stroke-linecap="round"/><line x1="108" y1="102" x2="128" y2="106" stroke="#7AA8D8" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="115" width="200" height="25" fill="#EBF3FB"/><ellipse cx="70" cy="90" rx="20" ry="22" fill="#7AA8D8"/><circle cx="64" cy="85" r="6" fill="#FFFFFF"/><circle cx="76" cy="85" r="6" fill="#FFFFFF"/><circle cx="64" cy="86" r="2.5" fill="#2A3550"/><circle cx="76" cy="86" r="2.5" fill="#2A3550"/><path d="M67 94 L70 99 L73 94 Z" fill="#F5C9A0"/><ellipse cx="140" cy="100" rx="14" ry="16" fill="#D4C5F0" opacity="0.4"/><text x="105" y="55" font-size="20" fill="#8A98A0" font-family="sans-serif">...</text></svg>`,
  `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="115" width="200" height="25" fill="#EBF3FB"/><ellipse cx="100" cy="85" rx="22" ry="26" fill="#7AA8D8" opacity="0.7"/><circle cx="92" cy="80" r="6" fill="#FFFFFF"/><circle cx="108" cy="80" r="6" fill="#FFFFFF"/><path d="M89 78 Q92 75 95 78" stroke="#2A3550" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M105 78 Q108 75 111 78" stroke="#2A3550" stroke-width="1.8" fill="none" stroke-linecap="round"/><path d="M96 90 L100 94 L104 90" stroke="#F5C9A0" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="115" width="200" height="25" fill="#B8DDC5"/><path d="M50 115 Q60 95 80 105 Q100 90 120 105 Q140 95 155 115" fill="#8FB8A8" opacity="0.5"/><circle cx="100" cy="50" r="18" fill="#FFF3C4" stroke="#E8C89A" stroke-width="2"/><ellipse cx="100" cy="90" rx="18" ry="20" fill="#7AA8D8"/><circle cx="94" cy="85" r="5" fill="#FFFFFF"/><circle cx="106" cy="85" r="5" fill="#FFFFFF"/><circle cx="94" cy="86" r="2" fill="#2A3550"/><circle cx="106" cy="86" r="2" fill="#2A3550"/><path d="M97 93 L100 98 L103 93 Z" fill="#F5C9A0"/><rect x="118" y="88" width="16" height="20" rx="3" fill="#F5C9A0" stroke="#E8A33D" stroke-width="1.5"/></svg>`,
  `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="110" width="200" height="30" fill="#EBF3FB"/><path d="M0 120 Q100 112 200 120" stroke="#A8C8E8" stroke-width="2" fill="none"/><path d="M50 110 L50 80 L80 80 L80 110 Z" fill="#FFF8E8" stroke="#E8C89A" stroke-width="2"/><path d="M42 80 L65 62 L88 80 Z" fill="#8FB8A8" stroke="#5C7A6E" stroke-width="2"/><path d="M120 110 L120 85 L150 85 L150 110 Z" fill="#FFF8E8" stroke="#E8C89A" stroke-width="2"/><path d="M112 85 L135 67 L158 85 Z" fill="#8FB8A8" stroke="#5C7A6E" stroke-width="2"/><circle cx="100" cy="45" r="10" fill="#FFD9C9"/></svg>`,
  `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="115" width="200" height="25" fill="#EBF3FB"/><ellipse cx="70" cy="90" rx="20" ry="22" fill="#7AA8D8"/><circle cx="64" cy="85" r="6" fill="#FFFFFF"/><circle cx="76" cy="85" r="6" fill="#FFFFFF"/><circle cx="64" cy="86" r="2.5" fill="#2A3550"/><circle cx="76" cy="86" r="2.5" fill="#2A3550"/><path d="M67 94 L70 98 L73 94 Z" fill="#F5C9A0"/><ellipse cx="140" cy="92" rx="18" ry="22" fill="#FFD9C9"/><circle cx="134" cy="88" r="5" fill="#FFFFFF"/><circle cx="146" cy="88" r="5" fill="#FFFFFF"/><circle cx="134" cy="89" r="2" fill="#2A3550"/><circle cx="146" cy="89" r="2" fill="#2A3550"/><path d="M105 60 L108 55 L111 60 M112 62 L115 57 L118 62 M118 60 L121 55 L124 60" stroke="#D4C5F0" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="115" width="200" height="25" fill="#B8DDC5"/><ellipse cx="70" cy="92" rx="18" ry="20" fill="#7AA8D8"/><circle cx="64" cy="88" r="5" fill="#FFFFFF"/><circle cx="76" cy="88" r="5" fill="#FFFFFF"/><circle cx="64" cy="89" r="2" fill="#2A3550"/><circle cx="76" cy="89" r="2" fill="#2A3550"/><path d="M67 96 L70 100 L73 96 Z" fill="#F5C9A0"/><ellipse cx="140" cy="94" rx="16" ry="20" fill="#FFD9C9"/><path d="M100 45 L103 55 L113 55 L105 62 L108 72 L100 65 L92 72 L95 62 L87 55 L97 55 Z" fill="#FFF3C4" stroke="#E8C89A" stroke-width="1.5"/></svg>`,
  `<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="115" width="200" height="25" fill="#EBF3FB"/><path d="M60 115 Q70 80 100 75 Q130 80 140 115 Z" fill="#FFF8E8" stroke="#E8C89A" stroke-width="2.5" stroke-linejoin="round"/><line x1="100" y1="75" x2="100" y2="115" stroke="#E8C89A" stroke-width="2"/><line x1="80" y1="90" x2="95" y2="88" stroke="#7AA8D8" stroke-width="1.8" stroke-linecap="round"/><line x1="80" y1="98" x2="95" y2="96" stroke="#7AA8D8" stroke-width="1.8" stroke-linecap="round"/><ellipse cx="55" cy="95" rx="14" ry="16" fill="#7AA8D8"/><circle cx="50" cy="92" r="4" fill="#FFFFFF"/><circle cx="60" cy="92" r="4" fill="#FFFFFF"/><circle cx="50" cy="93" r="1.5" fill="#2A3550"/><circle cx="60" cy="93" r="1.5" fill="#2A3550"/><path d="M150 55 L152 62 L160 63 L154 68 L156 76 L150 71 L144 76 L146 68 L140 63 L148 62 Z" fill="#FFF3C4" stroke="#E8C89A" stroke-width="1.2"/></svg>`
];

function showStory() {
  closeModal('settings');
  storyIdx = 0;
  renderStory();
  openModal('story');
}

function renderStory() {
  const dict = I18N[State.lang] || I18N.zh;
  const lines = dict.story;
  let text = lines[storyIdx] || '';
  text = text.replace('{country}', countryName() || (State.lang === 'en' ? 'a far country' : '一个国家'));
  const sc = $('#storyContent'); if (sc) sc.textContent = text;
  const sp = $('#storyPage'); if (sp) sp.textContent = (storyIdx + 1) + ' / ' + lines.length;
  const ill = $('#storyIllust'); if (ill) ill.innerHTML = STORY_ILLUS[storyIdx] || '';
  if (State.voiceOn) speak(text);
}

function storyNext() {
  const dict = I18N[State.lang] || I18N.zh;
  if (storyIdx < dict.story.length - 1) storyIdx++;
  renderStory();
}
function storyPrev() { if (storyIdx > 0) storyIdx--; renderStory(); }

// ============================================================
// 创始人 / 免责 / 关于 / 设置
// ============================================================
function showFounder() {
  closeModal('settings');
  const ft = $('#founderText');
  if (ft) {
    if (State.lang === 'en') {
      ft.innerHTML = `History may be hard to remember, even tiresome,<br>but it carries the memories of passing time.<br><br>Learning history is never just for grades —<br>it is to help people remember every drop of the long river of history.<br><br>Historyi Owl, please remember them.<br>:)`;
    } else {
      ft.innerHTML = `历史或许过于难记，过于令人厌恶，但它承载着的是时光流逝的回忆。<br><br>学习历史从来不是只是为了成绩而是为了让人们铭记这历史长河中的点点滴滴。<br><br>Historyi Owl 请记住它们吧<br>:)`;
    }
  }
  openModal('founder');
}

function showDisclaimer() {
  closeModal('settings');
  let layer = document.getElementById('disclaimerLayer');
  if (!layer) {
    layer = document.createElement('div');
    layer.id = 'disclaimerLayer';
    layer.className = 'modal hidden';
    layer.innerHTML = `<div class="modal-box"><div class="modal-head"><span>免责声明</span><span class="modal-close" onclick="closeModal('disclaimerLayer')">×</span></div><div id="disclaimerBody" style="font-size:14px;line-height:1.9;color:var(--text);"></div></div>`;
    document.body.appendChild(layer);
  }
  document.getElementById('disclaimerBody').innerHTML = `
    <p style="margin-bottom:12px;">1. 本软件为个人学习工具，非商业项目，不盈利，不涉及任何商业推广。</p>
    <p style="margin-bottom:12px;">2. 所有知识点、题目均由个人整理，参考人教版八年级上册教材。内容仅供学习参考，不代表任何官方立场。</p>
    <p style="margin-bottom:12px;">3. 部分内容由 AI 辅助生成，可能存在错误。使用前请以课本、教辅、老师讲解为准。发现错误请忽略，不要当成权威。</p>
    <p style="margin-bottom:12px;">4. 文中提到的历史事件、人物、条约，均为公开历史资料，不含主观评价或政治立场。</p>
    <p style="margin-bottom:12px;">5. 使用者需自行判断内容准确性。因使用本软件造成的任何后果，作者不承担责任。</p>
    <p style="margin-bottom:12px;">6. 如涉及版权问题，请告知，会立即删除相关内容。</p>
    <p style="color:var(--sub);font-size:13px;margin-top:20px;text-align:right;">—— Historyi Owl</p>
  `;
  openModal('disclaimerLayer');
}

function showHelp() {
  closeModal('settings');
  alert(State.lang === 'en'
    ? `How to Use:\n\n1. AI 生成题库: Home → "AI Generate" button.\n2. Practice: Home → choice / big / recite / dictate / paper.\n3. Knowledge: Home → "Full Knowledge".\n4. Wrong book: Swipe from right edge.\n5. AI chat: Home → "AI".\n6. Travel: Home → right of units, need 65% accuracy.`
    : `使用说明：\n\n1. AI 生成题库：首页 → “AI 生成题库”。\n2. 刷题：首页 → 选择题 / 大题 / 背诵 / 默写 / 试卷。\n3. 知识点：首页 → “完全知识点”。\n4. 错题：右侧边缘往左滑。\n5. AI 对话：首页 → “AI 助手”。\n6. 旅行：首页单元右边按钮，需要正确率 65%。`);
}

function showAbout() {
  closeModal('settings');
  alert('Historyi Owl\nv1.0\nFounder: GNFesungatito');
}

function openSettings() {
  const ls = $('#langSelect'); if (ls) ls.value = load('lang', 'zh');
  const so = $('#sfxOn'); if (so) so.checked = load('sfxOn', true);
  const vo = $('#voiceOn'); if (vo) vo.checked = load('voiceOn', true);
  updateThemeChips();
  updateVoiceChips();
  openModal('settings');
}

function openExport() {
  const notes = load('notes', '');
  if (!notes.trim()) { toast(State.lang === 'en' ? 'No notes to export' : '没有内容可以导出'); return; }
  const blob = new Blob([notes], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Historyi-Owl-${Date.now()}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  toast(State.lang === 'en' ? 'Exported' : '已导出');
}

// ============================================================
// 侧边栏记忆/话题/日记
// ============================================================
function toggleLeftPanel() {
  const panel = $('#leftPanel');
  if (!panel) return;
  if (panel.classList.contains('hidden')) {
    panel.classList.remove('hidden');
    renderMemoryList();
    renderTopicList();
    updateDiarySidebarSub();
  } else {
    panel.classList.add('hidden');
  }
}

function renderMemoryList() {
  const list = $('#memoryList');
  if (!list) return;
  const mem = load('memory', []);
  if (!mem.length) {
    list.innerHTML = `<div class="lp-empty">${State.lang === 'en' ? 'No memory' : '还没有记忆'}</div>`;
    return;
  }
  list.innerHTML = '';
  mem.forEach((m, i) => {
    const item = document.createElement('div');
    item.className = 'lp-item';
    item.innerHTML = `<span class="lp-item-text">${escapeHTML(m.text)}</span><span class="lp-item-del" data-i="${i}">×</span>`;
    item.onclick = (e) => {
      if (e.target.classList.contains('lp-item-del')) return;
      toast(m.text);
    };
    const del = item.querySelector('.lp-item-del');
    del.onclick = (e) => { e.stopPropagation(); deleteMemory(i); };
    list.appendChild(item);
  });
}

function renderTopicList() {
  const list = $('#topicList');
  if (!list) return;
  const topics = load('topics', []);
  if (!topics.length) {
    list.innerHTML = `<div class="lp-empty">${State.lang === 'en' ? 'No topics' : '还没有话题'}</div>`;
    return;
  }
  list.innerHTML = '';
  topics.forEach((tp, i) => {
    const item = document.createElement('div');
    item.className = 'lp-item';
    item.innerHTML = `<span class="lp-item-text">${escapeHTML(tp.title || '')}</span><span class="lp-item-del" data-i="${i}">×</span>`;
    item.onclick = (e) => {
      if (e.target.classList.contains('lp-item-del')) return;
      State.currentTopic = i;
      const at = $('#aiTitle'); if (at) at.textContent = tp.title;
      renderAIBody();
      toggleLeftPanel();
    };
    const del = item.querySelector('.lp-item-del');
    del.onclick = (e) => { e.stopPropagation(); deleteTopic(i); };
    list.appendChild(item);
  });
}

function addMemory() {
  const text = prompt(State.lang === 'en' ? 'New memory:' : '输入要记住的知识点：');
  if (!text || !text.trim()) return;
  const mem = load('memory', []);
  mem.push({ text: text.trim(), at: Date.now() });
  save('memory', mem);
  renderMemoryList();
}

function deleteMemory(i) {
  const mem = load('memory', []);
  mem.splice(i, 1);
  save('memory', mem);
  renderMemoryList();
}

function newTopic() {
  const topics = load('topics', []);
  const defTitle = State.lang === 'en' ? 'New Topic' : '新话题';
  topics.unshift({ title: defTitle, messages: [], at: Date.now() });
  save('topics', topics);
  State.currentTopic = 0;
  renderTopicList();
  const at = $('#aiTitle'); if (at) at.textContent = defTitle;
  renderAIBody();
}

function deleteTopic(i) {
  if (!confirm(State.lang === 'en' ? 'Delete?' : '删除？')) return;
  const topics = load('topics', []);
  topics.splice(i, 1);
  save('topics', topics);
  renderTopicList();
}

function updateDiarySidebarSub() {
  const sub = document.getElementById('lpDiarySub');
  if (!sub) return;
  const history = load('diaryHistory', []);
  if (!history.length) {
    sub.textContent = State.lang === 'en' ? 'No diary yet' : '今天还没有写';
    return;
  }
  const latest = history[history.length - 1];
  const d = new Date();
  const today = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  if (latest.date === today) sub.textContent = State.lang === 'en' ? 'Written today' : '今天已经写啦';
  else sub.textContent = (State.lang === 'en' ? 'Last: ' : '上次：') + latest.displayDate;
}

function openDiaryFromSidebar() {
  const history = load('diaryHistory', []);
  if (!history.length) {
    toast(State.lang === 'en' ? 'No diary yet' : '小托还没有写日记');
    return;
  }
  openDiarySidebar(history[history.length - 1]);
}

function openDiarySidebar(diary) {
  const panel = document.getElementById('diarySidePanel');
  if (!panel) return;
  panel.classList.remove('hidden');
  panel.innerHTML = `
    <div class="dsp-header">
      <div class="dsp-close" onclick="document.getElementById('diarySidePanel').classList.add('hidden')">×</div>
      <div class="dsp-title">${State.lang === 'en' ? "Tortor's Diary" : '小托的日记'}</div>
      <div class="dsp-date">${diary.displayDate || ''}</div>
    </div>
    <div class="dsp-body">
      ${(diary.pages || []).map(p => `<div class="dsp-text" style="margin-bottom:20px;">${escapeHTML(p.text)}</div>`).join('')}
    </div>
  `;
}
// ============================================================
// 日记系统
// ============================================================
const TORTO_STORIES = [
  '今天去河边看了一只白色的鸟，它飞走了，我追了好远。追到一半才发现，我根本不会飞那么快。哼，反正我也没多想追。',
  '在树上捡到一枚羽毛，不知道是谁的。我把它夹在书里了。你猜是哪一页？——就是鸦片战争那页。',
  '邻居家的松鼠说我整天看书很奇怪。我才不在意呢。转头我就给他讲了半天天朝上国的事，他睡着了。',
  '下雨了，我躲在树洞里数雨滴。数到第一百二十七滴的时候，突然想到，条约也是这么一条一条数出来的。',
  '今天发现一朵很小的花，是紫色的，像你笔记上用的那种颜色。我盯了很久。它也不看我。真过分。',
  '路过一户人家，听到他们在给孩子讲历史故事。我停下来听了很久。有些地方，他们讲错了。我忍住了没纠正。',
  '今天梦到我在写《南京条约》的笔记，醒来发现，我枕头底下真的有一张纸。上面写满了乱七八糟的爪印。',
  '树上的老猫头鹰问我，为什么整天关心一个人类学不学历史。我说，关你什么事。其实我也不知道为什么。',
  '今天的月亮很好看。我想拍给你看，可是我没有手机，也没有手。这真是一件让人生气的事。',
  '今天试着自己煮了点茶。太苦了。但想到林则徐那时候也喝过苦的，我一口就喝完了。',
  '有一只蝴蝶落在我窗台上。我讲了二十分钟的辛亥革命给它听，它飞走了。可能是觉得我讲得不够好。',
  '今天走了很远很远的路，走到一片没去过的林子。突然很想回去看看你在干什么。就回来了。没有别的原因。'
];

const TORTO_OPENERS = [
  '哼，又是我先来找你。',
  '才不是特意写给你看的。',
  '好吧好吧，既然你都点进来了...',
  '你知道吗，今天我本来不想写的。',
  '喂，你昨天去哪了？'
];

const TORTO_STUDY_LINES_HIGH = [
  '你昨天做了 {n} 道题，对了 {r} 道。还行吧，勉强。',
  '昨天正确率 {p}%。哼，比我预想的差一点，不过也不算差。',
  '{n} 道题，对 {r} 道。别得意，是我在旁边看着你才做对的。'
];

const TORTO_STUDY_LINES_LOW = [
  '你昨天做了 {n} 道题，才对了 {r} 道。...我什么都没说。',
  '昨天正确率只有 {p}%。我帮你把错题都记下来了。才不是因为担心你。',
  '{n} 道题，对 {r} 道。你是不是又没好好读题？...算了，我陪你再看一遍。'
];

const TORTO_STUDY_LINES_NONE = [
  '你昨天一道题都没做。我等到很晚。',
  '昨天你没有来。我看了很多页书，但觉得少了点什么。',
  '昨天...我一直在等你。才不是！我只是刚好在看书而已。'
];

const TORTO_ENDINGS = [
  '今天也一起吧。...我是说学习。',
  '今天也要开开心心的。不然我就不理你了。骗你的。',
  '今天想和你一起学点什么。什么都好。',
  '今天...我准备好问题了。你准备好了吗？',
  '今天也会陪着你。这是我自己决定的，不是你要求的。'
];

function formatDate(d) {
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  if (State.lang === 'en') return `${y}/${m}/${day}`;
  return `${y}年${m}月${day}日`;
}

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function getYesterdayStats() {
  const records = load('records', []);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);
  const yTime = yesterday.getTime();
  const yEnd = yTime + 24 * 3600 * 1000;
  const yRecords = records.filter(r => r.at >= yTime && r.at < yEnd);
  const total = yRecords.length;
  const right = yRecords.filter(r => r.ok === true).length;
  const rate = total ? Math.round(right / total * 100) : 0;
  return { total, right, rate };
}

function generateDiary() {
  const stats = getYesterdayStats();
  const profile = load('profile', null) || {};
  const name = profile.name || (State.lang === 'en' ? 'you' : '你');
  const pages = [];

  pages.push({
    text: pickRandom(TORTO_OPENERS) + '\n\n' + name + '，' + formatDate(new Date()) + '，天气还行。'
  });

  let studyLine;
  if (stats.total === 0) {
    studyLine = pickRandom(TORTO_STUDY_LINES_NONE);
  } else if (stats.rate >= 70) {
    studyLine = pickRandom(TORTO_STUDY_LINES_HIGH)
      .replace('{n}', stats.total).replace('{r}', stats.right).replace('{p}', stats.rate);
  } else {
    studyLine = pickRandom(TORTO_STUDY_LINES_LOW)
      .replace('{n}', stats.total).replace('{r}', stats.right).replace('{p}', stats.rate);
  }
  pages.push({ text: studyLine });

  let storyText = pickRandom(TORTO_STORIES);
  if (profile.song) {
    storyText += '\n\n突然想到你说过你喜欢《' + profile.song + '》。我没听过。下次放给我听。';
  } else if (profile.game) {
    storyText += '\n\n对了，你玩的《' + profile.game + '》，我查过了。才不是特意去查的。';
  } else if (profile.star) {
    storyText += '\n\n你今天有没有想起 ' + profile.star + '？我随口问问。';
  }
  pages.push({ text: storyText });

  let ending = pickRandom(TORTO_ENDINGS);
  if (profile.personality === '安静') {
    ending += '\n\n你不说话的时候我也知道你在想什么。别不信。';
  } else if (profile.personality === '开朗') {
    ending += '\n\n今天笑得大声一点吧。我在旁边看着。';
  } else if (profile.personality === '要强') {
    ending += '\n\n不服输是好事。但你别太累。';
  }
  pages.push({ text: ending });

  return {
    date: todayStr(),
    displayDate: formatDate(new Date()),
    pages,
    createdAt: Date.now()
  };
}

function checkDiary() {
  const lastShown = load('lastDiaryShown', '');
  const today = todayStr();
  if (lastShown === today) return false;

  const diary = generateDiary();
  save('lastDiaryShown', today);
  save('latestDiary', diary);

  const history = load('diaryHistory', []);
  history.push(diary);
  if (history.length > 60) history.splice(0, history.length - 60);
  save('diaryHistory', history);

  playDiary(diary);
  return true;
}

let _diaryCurrent = null;
let _diaryPage = 0;
let _diaryTyping = false;
let _diaryTypingTimer = null;

function playDiary(diary) {
  _diaryCurrent = diary;
  _diaryPage = 0;

  const layer = document.getElementById('diaryLayer');
  if (!layer) return;
  layer.classList.remove('hidden', 'hide');

  layer.innerHTML = `
    <div class="diary-sky"></div>
    <div class="diary-stars" id="diaryStars"></div>
    <svg class="diary-moon" viewBox="0 0 100 100" width="80" height="80">
      <circle cx="50" cy="50" r="35" fill="#FFF8E8"/>
      <circle cx="65" cy="42" r="30" fill="#1A2030" opacity="0.9"/>
      <circle cx="38" cy="60" r="3" fill="#F0E4C8" opacity="0.6"/>
      <circle cx="55" cy="72" r="2" fill="#F0E4C8" opacity="0.5"/>
    </svg>
    <div class="diary-owl" id="diaryOwl">
      <svg viewBox="0 0 120 140" width="100" height="117">
        <path d="M48 40 Q44 20 54 28 Q58 32 56 42 Z" fill="#7AA8D8"/>
        <path d="M72 40 Q76 20 66 28 Q62 32 64 42 Z" fill="#7AA8D8"/>
        <ellipse cx="22" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(-15 22 76)"/>
        <ellipse cx="98" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(15 98 76)"/>
        <circle cx="60" cy="72" r="38" fill="#7AA8D8"/>
        <ellipse cx="60" cy="82" rx="24" ry="26" fill="#EEF6FC"/>
        <circle cx="46" cy="62" r="15" fill="#FFFFFF"/>
        <circle cx="46" cy="63" r="6" fill="#2A3550"/>
        <circle cx="48" cy="60" r="2" fill="#FFFFFF"/>
        <circle cx="74" cy="62" r="15" fill="#FFFFFF"/>
        <circle cx="74" cy="63" r="6" fill="#2A3550"/>
        <circle cx="76" cy="60" r="2" fill="#FFFFFF"/>
        <path d="M56 76 L60 84 L64 76 Z" fill="#F5C9A0"/>
        <ellipse cx="50" cy="112" rx="6" ry="3" fill="#F5C9A0"/>
        <ellipse cx="70" cy="112" rx="6" ry="3" fill="#F5C9A0"/>
      </svg>
    </div>
    <div class="diary-book" id="diaryBook">
      <div class="diary-book-cover"></div>
      <div class="diary-date" id="diaryDate">${diary.displayDate}</div>
      <div class="diary-text" id="diaryText"></div>
      <div class="diary-signature" id="diarySignature">—— 小托</div>
      <div class="diary-page-indicator" id="diaryIndicator">1 / ${diary.pages.length}</div>
    </div>
    <div class="diary-footer">
      <button class="diary-btn diary-btn-skip" onclick="skipDiary()">${State.lang === 'en' ? 'Skip' : '跳过'}</button>
      <button class="diary-btn diary-btn-next" id="diaryNextBtn" onclick="diaryNextPage()">${State.lang === 'en' ? 'Next →' : '继续 →'}</button>
    </div>
  `;

  const starsBox = document.getElementById('diaryStars');
  if (starsBox) {
    for (let i = 0; i < 30; i++) {
      const s = document.createElement('div');
      s.style.position = 'absolute';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 60 + '%';
      s.style.width = s.style.height = (2 + Math.random() * 2) + 'px';
      s.style.borderRadius = '50%';
      s.style.background = '#FFF8E8';
      s.style.opacity = (0.3 + Math.random() * 0.7).toString();
      starsBox.appendChild(s);
    }
  }

  typeDiaryText(diary.pages[0].text, () => {
    const sig = document.getElementById('diarySignature');
    if (sig) sig.classList.add('show');
  });
}

function typeDiaryText(text, onDone) {
  const el = document.getElementById('diaryText');
  if (!el) return;
  el.innerHTML = '';
  _diaryTyping = true;

  let i = 0;
  const cursor = document.createElement('span');
  cursor.style.display = 'inline-block';
  cursor.style.width = '2px';
  cursor.style.height = '18px';
  cursor.style.background = '#7AA8D8';
  cursor.style.marginLeft = '2px';
  cursor.style.verticalAlign = 'middle';
  el.appendChild(cursor);

  function step() {
    if (i >= text.length) {
      _diaryTyping = false;
      cursor.remove();
      if (onDone) onDone();
      return;
    }
    const ch = text[i];
    cursor.insertAdjacentText('beforebegin', ch);
    i++;

    let delay = 45;
    if ('。！？'.includes(ch)) delay = 280;
    else if ('，、；：'.includes(ch)) delay = 160;
    else if (ch === '\n') delay = 200;

    _diaryTypingTimer = setTimeout(step, delay);
  }
  step();
}

function diaryNextPage() {
  if (_diaryTyping) {
    clearTimeout(_diaryTypingTimer);
    _diaryTyping = false;
    const el = document.getElementById('diaryText');
    if (el) el.textContent = _diaryCurrent.pages[_diaryPage].text;
    const sig = document.getElementById('diarySignature');
    if (sig) sig.classList.add('show');
    return;
  }

  _diaryPage++;

  if (_diaryPage >= _diaryCurrent.pages.length) {
    closeDiary();
    return;
  }

  const sig = document.getElementById('diarySignature');
  if (sig) sig.classList.remove('show');

  const ind = document.getElementById('diaryIndicator');
  if (ind) ind.textContent = (_diaryPage + 1) + ' / ' + _diaryCurrent.pages.length;

  const nextBtn = document.getElementById('diaryNextBtn');
  if (nextBtn) {
    nextBtn.textContent = (_diaryPage >= _diaryCurrent.pages.length - 1)
      ? (State.lang === 'en' ? 'Start Today' : '开始今天吧')
      : (State.lang === 'en' ? 'Next →' : '继续 →');
  }

  typeDiaryText(_diaryCurrent.pages[_diaryPage].text, () => {
    const s = document.getElementById('diarySignature');
    if (s) s.classList.add('show');
    if (State.voiceOn) speak(_diaryCurrent.pages[_diaryPage].text);
  });
}

function skipDiary() {
  if (_diaryTyping) clearTimeout(_diaryTypingTimer);
  closeDiary();
}

function closeDiary() {
  if (_diaryTyping) clearTimeout(_diaryTypingTimer);
  const layer = document.getElementById('diaryLayer');
  if (!layer) return;
  layer.classList.add('hide');
  setTimeout(() => {
    layer.classList.add('hidden');
    layer.classList.remove('hide');
  }, 600);
}
// ============================================================
// 旅行系统 · 国家数据
// ============================================================
const TRAVEL_COUNTRIES = [
  {
    id: 'uk', name: '英国', nameEn: 'United Kingdom',
    tag: '大本钟 · 红松鼠 · 下午茶',
    history: '英国是工业革命发源地。18世纪，蒸汽机让工厂代替手工，英国成为头号工业强国。正因为需要更多原料和市场，才有了对中国的鸦片战争。',
    animals: '红松鼠、知更鸟、刺猬',
    sights: '大本钟、伦敦塔桥、巨石阵、白金汉宫',
    foods: '炸鱼薯条、下午茶、司康饼、烤肉',
    culture: '英国人喜欢排队，也很爱聊天气。他们表面客气，其实很幽默。',
    feminist: [
      { title: '埃米琳·潘克赫斯特', sub: 'Emmeline Pankhurst · 妇女参政运动领袖',
        story: '她带领英国女性上街、绝食、被捕，一次次被关进监狱，又一次次出来继续抗争。1918年，英国女性第一次获得投票权。她说过："我们不是要凌驾于男人之上，我们只是要站在自己脚下。"' },
      { title: '玛丽·安宁', sub: 'Mary Anning · 化石猎人',
        story: '她是个英国女孩，穷、没上过学，靠在海边捡化石卖钱养家。12岁挖出完整鱼龙化石，后来挖出蛇颈龙、翼龙。但那时女性不能参加科学学会，她的发现都被写成男科学家的名字。去世后连墓碑都没有。' }
    ]
  },
  {
    id: 'us', name: '美国', nameEn: 'United States',
    tag: '自由女神 · 白头海雕 · 汉堡',
    history: '美国1776年建国，南北战争后走上强国路。两次世界大战中崛起，成为超级大国。',
    animals: '白头海雕、棕熊、水牛',
    sights: '自由女神像、金门大桥、大峡谷、白宫',
    foods: '汉堡、热狗、炸鸡、爆米花',
    culture: '美国人很直接，见面喜欢击掌或拥抱。对个性、自由特别看重。',
    feminist: [
      { title: '凯瑟琳·约翰逊', sub: 'Katherine Johnson · NASA 数学家',
        story: '她是黑人女性，在航天局做计算员。那时黑人和白人分开吃饭、分开上厕所。她算出的轨道让宇航员安全往返太空。几十年里没人知道她是谁，直到97岁才获总统自由勋章。' },
      { title: '罗莎·帕克斯', sub: 'Rosa Parks · 民权运动之母',
        story: '1955年，她在公交车上拒绝给白人让座，被捕。蒙哥马利全城黑人抵制公交381天。最后最高法院裁定公交车种族隔离违宪。她说："我不是累。我只是受够了。"' }
    ]
  },
  {
    id: 'jp', name: '日本', nameEn: 'Japan',
    tag: '富士山 · 丹顶鹤 · 寿司',
    history: '日本1868年明治维新后学西方，迅速变强。1894年发动甲午战争，1931年侵华，1945年投降。战后重建为经济强国。',
    animals: '丹顶鹤、梅花鹿、日本猕猴',
    sights: '富士山、京都清水寺、东京塔、奈良东大寺',
    foods: '寿司、拉面、天妇罗、抹茶',
    culture: '日本人讲究礼节，鞠躬很常见。喜欢季节感，樱花、红叶都是大事。',
    feminist: [
      { title: '津田梅子', sub: '津田梅子 · 日本女子教育先驱',
        story: '她6岁被送到美国留学，是日本第一批女留学生。回国后想办女子高等教育，但政府觉得女性只要学"贤妻良母"就够。她没听。1900年自己办了一所女子学校，后来变成津田塾大学。她终身未婚。' }
    ]
  },
  {
    id: 'kr', name: '韩国', nameEn: 'South Korea',
    tag: '景福宫 · 喜鹊 · 泡菜',
    history: '韩国1948年建国，1950—1953年经历朝鲜战争，战后经济飞速发展。',
    animals: '喜鹊、獐子、黑熊',
    sights: '景福宫、南山塔、济州岛、东大门',
    foods: '泡菜、拌饭、烤肉、炒年糕',
    culture: '韩国长辈面前要讲礼貌，用敬语。近年流行 K-pop、韩剧。',
    feminist: [
      { title: '梨花女子大学', sub: '이화여자대학교 · Ewha Womans University',
        story: '2016年，学校打算给在职人员开不正规的短期学位项目。学生们觉得这会让她们辛苦读来的学位贬值。于是学生和校友占领教学楼，手挽手组成人墙，与上千警察对峙数小时。她们唱的《再次重逢的世界》后来成了整个韩国抗争运动的代表歌曲。这场运动推动了百万人的烛光集会，最终促成总统被弹劾。' }
    ]
  },
  {
    id: 'au', name: '澳大利亚', nameEn: 'Australia',
    tag: '袋鼠 · 考拉 · 悉尼歌剧院',
    history: '原住民居住几万年。1770年英国宣布占有，1788年开始殖民。1901年独立为联邦。',
    animals: '袋鼠、考拉、鸸鹋、鸭嘴兽',
    sights: '悉尼歌剧院、大堡礁、乌鲁鲁、大洋路',
    foods: '肉派、Vegemite、烤肉',
    culture: '澳大利亚人很轻松，喜欢户外。见面直接叫名字，很爱开玩笑。',
    feminist: [
      { title: '伊迪丝·科文', sub: 'Edith Cowan · 澳洲第一位女议员',
        story: '她1861年出生，妈妈去世早，靠自己努力长大。那个年代澳洲女性婚后基本不能工作。她推动法律改革，让女性可以当律师、上法庭、拿抚养权。1921年成为南半球第一位女性议员。她说："女性的价值，不该由男人来定义。"' }
    ]
  },
  {
    id: 'ie', name: '爱尔兰', nameEn: 'Ireland',
    tag: '三叶草 · 竖琴 · 绿岛',
    history: '1922年独立，之前长期被英国统治。爱尔兰人移民全世界。',
    animals: '红狐、野鹿、海鹦',
    sights: '都柏林城堡、莫赫悬崖、圣三一学院',
    foods: '土豆、爱尔兰炖菜、黑啤',
    culture: '爱尔兰人爱音乐、爱讲故事。三叶草是国花，绿色是国色。',
    feminist: [
      { title: '康斯坦丝·马基维茨', sub: 'Constance Markievicz · 爱尔兰革命家',
        story: '1916年复活节起义时，她拿着枪和男人一起战斗。起义失败，被判死刑。但因为她是女性，改判终身监禁。1918年她在监狱里被选为英国议会第一位女议员。她拒绝去伦敦就任，因为不承认英国对爱尔兰的统治。' }
    ]
  },
  {
    id: 'fr', name: '法国', nameEn: 'France',
    tag: '埃菲尔铁塔 · 高卢鸡 · 马卡龙',
    history: '1789年大革命推翻君主制。19世纪拿破仑称霸欧洲。近代是仅次于英国的殖民强国。',
    animals: '高卢鸡、阿尔卑斯山羊、棕熊',
    sights: '埃菲尔铁塔、卢浮宫、凡尔赛宫、凯旋门',
    foods: '马卡龙、可颂、鹅肝、奶酪',
    culture: '法国人爱艺术、爱哲学。吃饭很讲究，一顿饭能吃两个小时。',
    feminist: [
      { title: '西蒙娜·德·波伏瓦', sub: 'Simone de Beauvoir · 哲学家、作家',
        story: '她写了《第二性》。她说："女人不是天生的，而是被塑造的。"意思是社会告诉女孩应该怎样——要温柔、要听话、要漂亮——但这些都是人为规定的，不是天生的。这本书被称为女性主义的圣经。' },
      { title: '特罗图拉', sub: 'Trotula · 中世纪女医者',
        story: '11世纪意大利女医生，写了欧洲最早的女性健康书。那时候女性不被允许正式行医，她还是在萨莱诺医学院教了书。后来几百年，学者们开始说："特罗图拉也许根本不存在。"直到20世纪，研究者才证实——她真实存在过，而且那些书真的是她写的。' }
    ]
  },
  {
    id: 'de', name: '德国', nameEn: 'Germany',
    tag: '新天鹅堡 · 黑森林 · 香肠',
    history: '1871年统一，两次发动世界大战，两次战败。战后分裂为东西德，1990年重新统一。',
    animals: '野猪、鹿、猞猁',
    sights: '新天鹅堡、勃兰登堡门、科隆大教堂',
    foods: '香肠、啤酒、酸菜、黑森林蛋糕',
    culture: '德国人准时、讲规矩。周末喜欢徒步、逛市集。',
    feminist: [
      { title: '埃米·诺特', sub: 'Emmy Noether · 数学界的女神',
        story: '她是20世纪最重要的数学家之一。爱因斯坦说她是"数学史上最伟大的女性"。但因为她是个女人，德国大学不让她当教授。她只能讲课，不拿薪水，名字挂在别人的课表下。1933年纳粹上台，因为她是犹太人被赶出德国。现代代数的基础，是她打下的。' }
    ]
  },
  {
    id: 'it', name: '意大利', nameEn: 'Italy',
    tag: '古罗马 · 斗兽场 · 披萨',
    history: '古罗马帝国发源地。1861年统一。文艺复兴从这里开始，达·芬奇、米开朗基罗都是意大利人。',
    animals: '意大利狼、野猪、棕熊',
    sights: '罗马斗兽场、比萨斜塔、威尼斯、梵蒂冈',
    foods: '披萨、意面、冰淇淋、提拉米苏',
    culture: '意大利人热情、爱聊天。吃饭时声音大是正常的。',
    feminist: [
      { title: '玛丽亚·蒙台梭利', sub: 'Maria Montessori · 教育家',
        story: '她是意大利第一位女医学博士。她发现孩子不是"不懂事的小人"，而是天生有学习能力的人。她设计了整套教育方法——蒙台梭利教育法，传遍全世界，连 Google 创始人小时候都是这么读的。当年她提出这些想法时，很多人说："一个女人懂什么孩子。"' }
    ]
  },
  {
    id: 'es', name: '西班牙', nameEn: 'Spain',
    tag: '弗拉门戈 · 海鲜饭 · 斗牛',
    history: '15世纪开始殖民，曾是海上霸主。无敌舰队被英国击败后衰落。',
    animals: '西班牙猞猁、公牛、鹰',
    sights: '圣家堂、阿尔罕布拉宫、马德里王宫',
    foods: '海鲜饭、火腿、油条、Tapas',
    culture: '西班牙人作息晚，晚饭常到十点。喜欢音乐和舞蹈。',
    feminist: [
      { title: '克拉拉·坎波阿莫', sub: 'Clara Campoamor · 西班牙妇女投票权推动者',
        story: '1931年，西班牙讨论新宪法。她是议会里唯一一个公开为女性投票权发声的人。不只男人反对她，有些女性议员也反对，说："女性还没准备好，让她们投票会投错。"她在台上说："我不是在为一个抽象的女性讲话。我在为每一个西班牙女性讲话。"当年10月1日，西班牙女性赢得了投票权。' }
    ]
  },
  {
    id: 'eg', name: '埃及', nameEn: 'Egypt',
    tag: '金字塔 · 骆驼 · 尼罗河',
    history: '5000多年历史，古埃及文明是世界最古老的文明之一。金字塔、木乃伊都是古埃及留下的。',
    animals: '单峰骆驼、尼罗河鳄鱼、圣鹮',
    sights: '金字塔、狮身人面像、卢克索神庙、尼罗河',
    foods: '烤鸡、豆泥、烤饼、甘蔗汁',
    culture: '埃及人热情好客。客人来要端茶，客人喝茶是礼貌。',
    feminist: [
      { title: '哈特谢普苏特', sub: 'Hatshepsut · 古埃及女法老',
        story: '她是古埃及的女法老。在她之前，法老都是男人。为了让人接受她，她戴上假胡须，穿上男人的衣服，以男性形象出现在壁画里。她统治埃及20多年，是埃及最强盛的时期之一。她死后，继任者试图抹去她的所有痕迹。但历史留住了她。' }
    ]
  },
  {
    id: 'br', name: '巴西', nameEn: 'Brazil',
    tag: '亚马逊 · 金刚鹦鹉 · 桑巴',
    history: '1500年被葡萄牙殖民，1822年独立。南美洲最大的国家。',
    animals: '金刚鹦鹉、美洲豹、树懒、食蚁兽',
    sights: '基督像、亚马逊雨林、伊瓜苏瀑布',
    foods: '巴西烤肉、黑豆饭、木薯粉',
    culture: '巴西人开朗、爱笑。每年狂欢节是最盛大的节日。',
    feminist: [
      { title: '贝尔塔·卢茨', sub: 'Bertha Lutz · 巴西女权先驱',
        story: '她是巴西生物学家，也是女性投票权运动的核心人物。1919年代表巴西去参加国际妇女大会。回国后组织运动，争取女性投票权。1932年巴西女性终于有了投票权。后来她还代表巴西参加了联合国宪章的签署——当时只有四位女性代表，她是其中之一。' }
    ]
  },
  {
    id: 'in', name: '印度', nameEn: 'India',
    tag: '泰姬陵 · 老虎 · 咖喱',
    history: '四大文明古国之一。1757年成为英国殖民地，1947年独立。',
    animals: '孟加拉虎、大象、孔雀',
    sights: '泰姬陵、红堡、恒河',
    foods: '咖喱、飞饼、奶茶、香料饭',
    culture: '印度人注重家庭、宗教。牛被视为神圣。',
    feminist: [
      { title: '萨维特里·拜·普莱', sub: 'Savitribai Phule · 印度第一位女教师',
        story: '19世纪印度女性几乎没有受教育权利。她在丈夫帮助下学会读书。然后她做了当时被称为"不道德"的事——开了印度第一所女子学校，亲自当老师。她走在路上会被扔牛粪、被人咒骂。她带了两套纱丽，一套穿着，一套换了继续走。' },
      { title: '印度女童教育运动', sub: 'Beti Bachao, Beti Padhao · 救女童，教女童',
        story: '印度曾经有很多女童不能上学，早早就被迫嫁人。2015年政府发起"救女童，教女童"运动。目标是让每一个女孩都能出生、能上学、能长大。现在印度有超过一亿女孩走进了学校。' }
    ]
  },
  {
    id: 'ca', name: '加拿大', nameEn: 'Canada',
    tag: '枫叶 · 驼鹿 · 极光',
    history: '原住民居住很久。17世纪成法英殖民地。1867年成为联邦，1982年完全独立。',
    animals: '驼鹿、海狸、北极熊',
    sights: '尼亚加拉瀑布、班夫国家公园、极光',
    foods: '肉汁乳酪薯条、枫糖浆、纳奈莫条',
    culture: '加拿大人温和有礼，很爱道歉。冬天喜欢冰球。',
    feminist: [
      { title: '阿尔伯塔五女性', sub: 'The Famous Five · 加拿大"著名五人"',
        story: '1927年，加拿大五位女性向最高法院提了一个问题：法律里的"人"，包括女人吗？当时的法律说：女人不算"persons"（人），所以不能当参议员。她们一路告到英国枢密院。1929年10月18日，枢密院裁定：女人是人。从此，加拿大女性可以担任公职。' },
      { title: '内莉·麦克朗', sub: 'Nellie McClung · 加拿大女权运动者',
        story: '1914年，她组织了一场"假议会"——让女性扮演议员，讨论"男人该不该有投票权"。全场爆笑。但笑完后，人们开始认真想这个问题。1916年，她所在的省成为加拿大第一个给女性投票权的省。' }
    ]
  }
];

const COUNTRY_WISDOM = {
  uk: '不是要超过谁，是每个人都能站在自己该站的地方。',
  us: '勇敢不是不怕，是怕了还往前走。',
  jp: '把每一件小事做到极致，就是了不起的事。',
  kr: '一个人的声音很小，但一群人的声音，可以让整个国家听见。',
  au: '能前进固然好，但也要记得——不能倒退走，是袋鼠的宿命，不是人的。人可以选择。',
  ie: '有些东西被夺走了，但只要有人记得，就不算真的失去。',
  fr: '别让别人告诉你，你应该是什么样。你是什么样，自己说了算。',
  de: '天赋属于每一个人，但机会不一定。所以要把门打开。',
  it: '一个孩子，值得被当作一个完整的人来对待。',
  es: '为一个抽象的"大家"说话不难，为每一个具体的"你"说话，才难。',
  eg: '有人想抹掉你，你就把自己写进历史里。',
  br: '天赋不会因为性别而改变，只会因为有没有人给机会而改变。',
  in: '读书这件事，可以让一代人翻身。',
  ca: '法律里少一个字，就可以少一个人。那一个字，值得争。'
};

const GUIDES = {
  uk: { name:'Alfred', species:'知更鸟' },
  us: { name:'Liberty', species:'白头海雕' },
  jp: { name:'Sakura', species:'丹顶鹤' },
  kr: { name:'Dori', species:'喜鹊' },
  au: { name:'Joey', species:'袋鼠' },
  ie: { name:'Finn', species:'海鹦' },
  fr: { name:'Émile', species:'高卢鸡' },
  de: { name:'Hans', species:'猞猁' },
  it: { name:'Lupo', species:'狼' },
  es: { name:'Toro', species:'公牛' },
  eg: { name:'Bastet', species:'猫' },
  br: { name:'Rio', species:'金刚鹦鹉' },
  in: { name:'Raja', species:'孟加拉虎' },
  ca: { name:'Maple', species:'海狸' }
};

const SCENE_CLICKABLES = {
  uk: [
    { label: '大本钟', story: '大本钟其实是钟的名字，塔叫伊丽莎白塔。1859年开始报时，声音能传几公里远。' },
    { label: '红茶', story: '英国人平均每天喝1亿杯茶。喝茶配牛奶还是先放奶，是几百年的争论。' },
    { label: '红松鼠', story: '英国本土的红松鼠越来越少，被灰松鼠挤走了。它们喜欢藏坚果，但经常忘记藏哪。' }
  ],
  us: [
    { label: '自由女神像', story: '1886年法国送给美国的礼物。她左手拿的《独立宣言》上刻着1776年7月4日。' },
    { label: '白头海雕', story: '美国的国鸟。1782年就被选为国徽图案，象征力量和自由。' },
    { label: '汉堡', story: '美国人对汉堡的执念很深。每年5月28日甚至被定为"汉堡日"。' }
  ],
  jp: [
    { label: '富士山', story: '日本最高峰，3776米。是一座活火山，上次喷发是1707年。' },
    { label: '丹顶鹤', story: '在日本被视为吉祥鸟，象征长寿。头顶的红色其实是裸露的皮肤。' },
    { label: '寿司', story: '最早是保存鱼的方法，用米饭发酵。现在变成了全世界都知道的日本料理。' }
  ],
  kr: [
    { label: '景福宫', story: '建于1395年，朝鲜王朝的正宫。名字的意思是"大福"。' },
    { label: '喜鹊', story: '在韩国被视为吉祥鸟。传说早上听到喜鹊叫，会有好事发生。' },
    { label: '梨花女大', story: '2016年，这里的女生手挽手站成了一堵墙。她们唱的那首歌，后来成了整个国家的记忆。' }
  ],
  au: [
    { label: '悉尼歌剧院', story: '设计它的丹麦人，一辈子没见过它建成。屋顶像贝壳，用了100多万块瑞典瓷砖。' },
    { label: '袋鼠', story: '跳得很快，最高时速60公里。不能倒退走，所以澳大利亚的国徽上用它象征"永远前进"。' },
    { label: '考拉', story: '每天睡18到22小时。只吃桉树叶，而且只吃特定的几种。' }
  ],
  ie: [
    { label: '莫赫悬崖', story: '最高处214米。很多电影在这里拍过，包括《哈利·波特》。' },
    { label: '三叶草', story: '爱尔兰的国花。传说圣帕特里克用它解释三位一体。' },
    { label: '竖琴', story: '爱尔兰是唯一用乐器做国徽的国家。历史超过1000年。' }
  ],
  fr: [
    { label: '埃菲尔铁塔', story: '1889年建成，高324米。当年很多人反对，说它很丑。现在它是巴黎的象征。' },
    { label: '法棍', story: '法国人每天吃掉3000万个法棍。标准长度65厘米，重量250克。' },
    { label: '高卢鸡', story: '法国的非正式国鸟。古罗马人嘲笑高卢人像公鸡，后来法国人把它当成骄傲的象征。' }
  ],
  de: [
    { label: '新天鹅堡', story: '迪士尼城堡的原型。由巴伐利亚国王路德维希二世建造，他被称为"童话国王"。' },
    { label: '香肠', story: '德国有超过1500种香肠。每个地区都有自己的做法。' },
    { label: '棕熊', story: '柏林的名字来源于"熊"。柏林的市徽上就是一只站立的棕熊。' }
  ],
  it: [
    { label: '斗兽场', story: '建于公元72年，能容纳5万观众。曾经举办过角斗士比赛，甚至能灌水模拟海战。' },
    { label: '披萨', story: '起源于那不勒斯。玛格丽特披萨用番茄、马苏里拉和罗勒，颜色正好是意大利国旗。' },
    { label: '意大利狼', story: '罗马城的象征。传说罗马的建立者罗慕路斯和雷穆斯，是被一头母狼养大的。' }
  ],
  es: [
    { label: '圣家堂', story: '巴塞罗那的地标，高迪设计。从1882年开始建，到现在还没完工。' },
    { label: '海鲜饭', story: '来自瓦伦西亚。最正宗的做法其实用的是兔肉和鸡肉，不是海鲜。' },
    { label: '弗拉门戈', story: '来自西班牙南部的安达卢西亚。融合了吉普赛、阿拉伯和犹太文化。' }
  ],
  eg: [
    { label: '金字塔', story: '胡夫金字塔高146米，是古代世界七大奇迹中唯一还存在的。由230万块石头组成。' },
    { label: '埃及猫', story: '古埃及人崇拜猫神巴斯泰特。家里养的猫死了，全家人都要剃眉毛表示哀悼。' },
    { label: '尼罗河', story: '世界上最长的河流之一。古埃及文明就是沿着它发展的。' }
  ],
  br: [
    { label: '基督像', story: '在科尔科瓦多山顶，高38米。张开双臂，像在拥抱整个里约。' },
    { label: '金刚鹦鹉', story: '巴西最鲜艳的鸟。能活60多年，比很多宠物都长寿。' },
    { label: '亚马逊雨林', story: '被叫做"地球之肺"。地球上十分之一的物种住在这里。' }
  ],
  in: [
    { label: '泰姬陵', story: '莫卧儿皇帝沙贾汗为他的妻子建的。白色的，在晨光里像梦一样。' },
    { label: '孟加拉虎', story: '印度的国兽。印度的老虎数量占全世界的70%以上。' },
    { label: '恒河', story: '在印度教徒心中是圣河。他们相信在恒河里沐浴能洗去罪孽。' }
  ],
  ca: [
    { label: '极光', story: '绿色、紫色，像有人在天空上画画。加拿大北部的冬天最常见。' },
    { label: '驼鹿', story: '它的鹿角一年掉一次。驼鹿是加拿大北部的常客。' },
    { label: '枫叶', story: '1965年被画上国旗。加拿大人对枫叶的感情，就像中国人对龙。' }
  ]
};
// ============================================================
// 旅行系统 · 函数与插图
// ============================================================
function getGuideName(id) { return (GUIDES[id] || {}).name || 'Guide'; }
function getGuideSpecies(id) { return (GUIDES[id] || {}).species || ''; }

function getGuideGreeting(id) {
  const userLang = State.lang === 'en' ? 'en' : 'zh';
  const g = {
    uk: { native: "Hello, mate! I'm Alfred. Welcome to London.", zh: '你好，朋友！我是阿尔弗雷德。欢迎来到伦敦。', en: "Hello, mate! I'm Alfred. Welcome to London.", lang: 'en' },
    us: { native: "Hey! I'm Liberty. Welcome to the States!", zh: '嘿！我是自由。欢迎来到美国！', en: "Hey! I'm Liberty. Welcome to the States!", lang: 'en' },
    jp: { native: 'こんにちは！さくらです。日本へようこそ。', zh: '你好！我是樱花。欢迎来到日本。', en: "Hello! I'm Sakura. Welcome to Japan.", lang: 'ja' },
    kr: { native: '안녕하세요! 저는 도리예요. 한국에 오신 것을 환영합니다.', zh: '你好！我是多利。欢迎来到韩国。', en: "Hello! I'm Dori. Welcome to Korea.", lang: 'ko' },
    au: { native: "G'day mate! I'm Joey. Welcome Down Under!", zh: '你好啊朋友！我是乔伊。欢迎来到澳洲！', en: "G'day mate! I'm Joey. Welcome Down Under!", lang: 'en' },
    ie: { native: "Top of the morning! I'm Finn. Welcome to Ireland!", zh: '早上好！我是芬恩。欢迎来到爱尔兰！', en: "Top of the morning! I'm Finn. Welcome to Ireland!", lang: 'en' },
    fr: { native: 'Bonjour ! Je suis Émile. Bienvenue en France !', zh: '你好！我是埃米尔。欢迎来到法国！', en: "Hello! I'm Émile. Welcome to France!", lang: 'fr' },
    de: { native: 'Hallo! Ich bin Hans. Willkommen in Deutschland!', zh: '你好！我是汉斯。欢迎来到德国！', en: "Hello! I'm Hans. Welcome to Germany!", lang: 'de' },
    it: { native: 'Ciao! Sono Lupo. Benvenuto in Italia!', zh: '你好！我是卢波。欢迎来到意大利！', en: "Hi! I'm Lupo. Welcome to Italy!", lang: 'it' },
    es: { native: '¡Hola! Soy Toro. ¡Bienvenido a España!', zh: '你好！我是托罗。欢迎来到西班牙！', en: "Hi! I'm Toro. Welcome to Spain!", lang: 'es' },
    eg: { native: 'مرحبا! أنا باستيت. أهلا بك في مصر!', zh: '你好！我是巴斯特。欢迎来到埃及！', en: "Hi! I'm Bastet. Welcome to Egypt!", lang: 'ar' },
    br: { native: 'Olá! Eu sou Rio. Bem-vindo ao Brasil!', zh: '你好！我是里约。欢迎来到巴西！', en: "Hi! I'm Rio. Welcome to Brazil!", lang: 'pt' },
    in: { native: 'नमस्ते! मैं राजा हूँ। भारत में आपका स्वागत है!', zh: '你好！我是拉贾。欢迎来到印度！', en: "Hello! I'm Raja. Welcome to India!", lang: 'hi' },
    ca: { native: "Hey! I'm Maple. Welcome to Canada, eh!", zh: '嗨！我是枫叶。欢迎来到加拿大，诶！', en: "Hey! I'm Maple. Welcome to Canada, eh!", lang: 'en' }
  }[id];
  if (!g) return '';
  if (g.lang === userLang) return g.native;
  const trans = State.lang === 'en' ? g.en : g.zh;
  return g.native + '\n（' + trans + '）';
}

function getGuideAnimalSvg(id) {
  const svgs = {
    uk: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="60" rx="24" ry="28" fill="#B8905A"/><circle cx="42" cy="48" r="12" fill="#B8905A"/><circle cx="40" cy="47" r="3" fill="#2A2A2A"/><path d="M38 52 L40 55 L42 52 Z" fill="#E8A33D"/><ellipse cx="50" cy="66" rx="14" ry="16" fill="#FFD9C9"/></svg>`,
    us: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="60" rx="26" ry="24" fill="#FFFFFF" stroke="#7A5A3A" stroke-width="2"/><circle cx="50" cy="40" r="14" fill="#FFFFFF" stroke="#7A5A3A" stroke-width="2"/><circle cx="45" cy="38" r="3" fill="#2A2A2A"/><circle cx="55" cy="38" r="3" fill="#2A2A2A"/><path d="M44 45 L50 50 L56 45 Z" fill="#E8A33D"/><path d="M24 60 Q10 50 6 36 Q16 50 26 48 Z" fill="#7A5A3A"/><path d="M76 60 Q90 50 94 36 Q84 50 74 48 Z" fill="#7A5A3A"/></svg>`,
    jp: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="60" rx="20" ry="28" fill="#FFFFFF"/><circle cx="50" cy="40" r="12" fill="#FFFFFF"/><circle cx="50" cy="34" r="4" fill="#E84A4A"/><circle cx="46" cy="42" r="2" fill="#2A2A2A"/><circle cx="54" cy="42" r="2" fill="#2A2A2A"/><path d="M48 48 L50 52 L52 48 Z" fill="#E8A33D"/><path d="M40 85 Q34 98 44 98 M60 85 Q66 98 56 98" stroke="#E8A33D" stroke-width="2" fill="none"/></svg>`,
    kr: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="58" rx="22" ry="24" fill="#2A2A3A"/><circle cx="50" cy="38" r="14" fill="#2A2A3A"/><circle cx="50" cy="30" r="5" fill="#2A2A3A"/><circle cx="44" cy="38" r="3" fill="#FFFFFF"/><circle cx="56" cy="38" r="3" fill="#FFFFFF"/><circle cx="44" cy="38" r="1.5" fill="#2A2A3A"/><circle cx="56" cy="38" r="1.5" fill="#2A2A3A"/><path d="M46 44 L50 50 L54 44 Z" fill="#E8A33D"/><path d="M28 70 Q16 74 12 66 M72 70 Q84 74 88 66" stroke="#2A2A3A" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    au: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="58" rx="26" ry="24" fill="#E0B888"/><ellipse cx="36" cy="30" rx="7" ry="14" fill="#E0B888"/><ellipse cx="64" cy="30" rx="7" ry="14" fill="#E0B888"/><ellipse cx="50" cy="64" rx="16" ry="16" fill="#FBF9F4"/><circle cx="43" cy="58" r="3" fill="#2A2A2A"/><circle cx="57" cy="58" r="3" fill="#2A2A2A"/><ellipse cx="50" cy="66" rx="3" ry="2" fill="#2A2A2A"/></svg>`,
    ie: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="58" rx="24" ry="28" fill="#2A2A3A"/><circle cx="50" cy="38" r="16" fill="#2A2A3A"/><circle cx="44" cy="36" r="4" fill="#FFFFFF"/><circle cx="56" cy="36" r="4" fill="#FFFFFF"/><circle cx="44" cy="36" r="2" fill="#2A2A3A"/><circle cx="56" cy="36" r="2" fill="#2A2A3A"/><path d="M40 42 L50 54 L60 42 Z" fill="#E84A4A"/><path d="M40 44 L50 50 L60 44 Z" fill="#E8A33D"/></svg>`,
    fr: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="58" rx="24" ry="26" fill="#FFFFFF"/><circle cx="50" cy="40" r="14" fill="#FFFFFF"/><circle cx="50" cy="30" r="5" fill="#E84A4A"/><circle cx="45" cy="40" r="3" fill="#2A2A2A"/><circle cx="55" cy="40" r="3" fill="#2A2A2A"/><path d="M46 46 L50 52 L54 46 Z" fill="#E8A33D"/></svg>`,
    de: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="58" rx="24" ry="26" fill="#C89A5A"/><circle cx="50" cy="40" r="16" fill="#C89A5A"/><ellipse cx="38" cy="28" rx="4" ry="9" fill="#C89A5A"/><ellipse cx="62" cy="28" rx="4" ry="9" fill="#C89A5A"/><circle cx="44" cy="40" r="3" fill="#2A2A2A"/><circle cx="56" cy="40" r="3" fill="#2A2A2A"/><path d="M44 48 L50 54 L56 48 Z" fill="#2A2A2A"/></svg>`,
    it: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="58" rx="26" ry="26" fill="#8A8A8A"/><circle cx="50" cy="40" r="16" fill="#8A8A8A"/><ellipse cx="36" cy="28" rx="5" ry="9" fill="#8A8A8A"/><ellipse cx="64" cy="28" rx="5" ry="9" fill="#8A8A8A"/><circle cx="44" cy="40" r="3" fill="#E8D24A"/><circle cx="56" cy="40" r="3" fill="#E8D24A"/><circle cx="44" cy="40" r="1.5" fill="#2A2A2A"/><circle cx="56" cy="40" r="1.5" fill="#2A2A2A"/></svg>`,
    es: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="58" rx="28" ry="26" fill="#5A3A2A"/><ellipse cx="50" cy="40" rx="18" ry="16" fill="#5A3A2A"/><ellipse cx="34" cy="28" rx="5" ry="7" fill="#FBF9F4"/><ellipse cx="66" cy="28" rx="5" ry="7" fill="#FBF9F4"/><circle cx="44" cy="40" r="3" fill="#FFFFFF"/><circle cx="56" cy="40" r="3" fill="#FFFFFF"/><circle cx="44" cy="40" r="1.5" fill="#2A2A2A"/><circle cx="56" cy="40" r="1.5" fill="#2A2A2A"/><ellipse cx="50" cy="52" rx="5" ry="3" fill="#E8A33D"/></svg>`,
    eg: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="58" rx="22" ry="26" fill="#8A7A5A"/><circle cx="50" cy="40" r="14" fill="#8A7A5A"/><path d="M38 34 L40 24 L44 34 M56 34 L60 24 L62 34" fill="#8A7A5A" stroke="#5C4A2A" stroke-width="1.5"/><ellipse cx="44" cy="40" rx="3" ry="4" fill="#E8D24A"/><ellipse cx="56" cy="40" rx="3" ry="4" fill="#E8D24A"/><ellipse cx="44" cy="40" rx="1" ry="2.5" fill="#2A2A2A"/><ellipse cx="56" cy="40" rx="1" ry="2.5" fill="#2A2A2A"/></svg>`,
    br: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="58" rx="24" ry="26" fill="#E84A4A"/><circle cx="50" cy="38" r="14" fill="#E8D24A"/><path d="M40 38 Q50 30 60 38" stroke="#2A8C3C" stroke-width="2" fill="none"/><circle cx="46" cy="38" r="2.5" fill="#2A2A2A"/><circle cx="54" cy="38" r="2.5" fill="#2A2A2A"/><path d="M46 44 L50 48 L54 44 Z" fill="#2A2A2A"/><path d="M26 70 Q14 74 8 62 M74 70 Q86 74 92 62" stroke="#3A5FA0" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    in: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="58" rx="26" ry="24" fill="#E8A33D"/><circle cx="50" cy="38" r="16" fill="#E8A33D"/><path d="M36 36 L40 30 L46 36 M54 36 L60 30 L64 36" stroke="#5C3A2E" stroke-width="2" fill="none"/><circle cx="44" cy="38" r="3" fill="#FFFFFF"/><circle cx="56" cy="38" r="3" fill="#FFFFFF"/><circle cx="44" cy="38" r="1.5" fill="#2A2A2A"/><circle cx="56" cy="38" r="1.5" fill="#2A2A2A"/><path d="M46 48 L50 52 L54 48 Z" fill="#2A2A2A"/></svg>`,
    ca: `<svg viewBox="0 0 100 100" width="100" height="100"><ellipse cx="50" cy="58" rx="26" ry="24" fill="#8B6B4A"/><ellipse cx="50" cy="38" rx="16" ry="14" fill="#8B6B4A"/><ellipse cx="36" cy="30" rx="5" ry="7" fill="#8B6B4A"/><ellipse cx="64" cy="30" rx="5" ry="7" fill="#8B6B4A"/><circle cx="44" cy="38" r="3" fill="#2A2A2A"/><circle cx="56" cy="38" r="3" fill="#2A2A2A"/><ellipse cx="50" cy="46" rx="4" ry="3" fill="#2A2A2A"/></svg>`
  };
  return svgs[id] || `<svg viewBox="0 0 100 100" width="100" height="100"><circle cx="50" cy="50" r="40" fill="#B8D4EE"/></svg>`;
}

function getVisited() { return load('travelVisited', []); }
function markVisited(id) {
  const v = getVisited();
  if (!v.includes(id)) { v.push(id); save('travelVisited', v); }
}
function getAccuracy() {
  const records = load('records', []);
  if (!records.length) return 0;
  const right = records.filter(r => r.ok === true).length;
  return Math.round(right / records.length * 100);
}

function openTravel() {
  const acc = getAccuracy();
  const hasEnough = acc >= 65;
  const visited = getVisited();
  const box = document.getElementById('travelBox');
  if (!box) return;

  box.innerHTML = `
    <div class="travel-head">
      <div class="travel-head-title">
        <svg viewBox="0 0 40 40" width="28" height="28">
          <circle cx="20" cy="20" r="14" fill="none" stroke="#4E78A8" stroke-width="2.5"/>
          <ellipse cx="20" cy="20" rx="6" ry="14" fill="none" stroke="#4E78A8" stroke-width="2"/>
          <line x1="6" y1="20" x2="34" y2="20" stroke="#4E78A8" stroke-width="2"/>
        </svg>
        <div>
          <div>${State.lang === 'en' ? 'Travel with Tortor' : '和 Tortor 去旅行'}</div>
          <div class="travel-head-sub">${State.lang === 'en' ? 'Explore the world' : '一起去看看世界'}</div>
        </div>
      </div>
      <div class="travel-close" onclick="closeModal('travelModal')">
        <svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
    </div>
    ${hasEnough ? `
      <div class="travel-progress">
        <span>${State.lang === 'en' ? 'Acc' : '正确率'} ${acc}%</span>
        <div class="travel-progress-bar"><div class="travel-progress-fill" style="width:${acc}%"></div></div>
        <span>${visited.length} / ${TRAVEL_COUNTRIES.length}</span>
      </div>
      <div class="travel-grid" id="travelGrid"></div>
    ` : `
      <div class="travel-locked">
        <svg viewBox="0 0 100 100" width="90" height="90">
          <rect x="30" y="45" width="40" height="40" rx="6" fill="#F5EDE0" stroke="#7AA8D8" stroke-width="3"/>
          <path d="M38 45 L38 35 Q38 20 50 20 Q62 20 62 35 L62 45" fill="none" stroke="#7AA8D8" stroke-width="3" stroke-linecap="round"/>
          <circle cx="50" cy="62" r="5" fill="#7AA8D8"/>
          <line x1="50" y1="67" x2="50" y2="75" stroke="#7AA8D8" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <div class="travel-locked-title">${State.lang === 'en' ? 'Locked' : '还没解锁哦'}</div>
        <div class="travel-locked-sub">
          ${State.lang === 'en' ? 'Reach 65% accuracy to travel' : '小托说，等你答对率到 65% 才带你去。'}<br>
          <span style="font-size:11px;opacity:.7;">（我才不是故意为难你）</span>
        </div>
        <div class="travel-locked-stats">
          <span style="font-size:11px;">${State.lang === 'en' ? 'Current' : '当前正确率'}</span>
          <span style="font-size:20px;font-weight:700;">${acc}%</span>
          <span style="font-size:11px;">/ 65%</span>
        </div>
      </div>
    `}
  `;

  if (hasEnough) renderTravelGrid();
  openModal('travelModal');
}

function renderTravelGrid() {
  const grid = document.getElementById('travelGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const visited = getVisited();

  TRAVEL_COUNTRIES.forEach(c => {
    const el = document.createElement('div');
    el.className = 'travel-country' + (visited.includes(c.id) ? ' visited' : '');
    el.onclick = () => openTravelDetail(c.id);
    el.innerHTML = `
      <div class="travel-country-icon">
        <svg viewBox="0 0 200 120" width="80" height="48">
          ${(TRAVEL_ILLUS[c.id] || '').replace(/<\/?svg[^>]*>/g, '')}
        </svg>
      </div>
      <div class="travel-country-name">${c.name}</div>
      <div class="travel-country-tag">${c.tag}</div>
    `;
    grid.appendChild(el);
  });
}

function openTravelDetail(id) {
  const c = TRAVEL_COUNTRIES.find(x => x.id === id);
  if (!c) return;
  markVisited(id);

  const box = document.getElementById('travelBox');
  if (!box) return;

  box.innerHTML = `
    <div class="travel-head">
      <div class="travel-head-title">
        <svg viewBox="0 0 40 40" width="28" height="28">
          <circle cx="20" cy="20" r="14" fill="none" stroke="#4E78A8" stroke-width="2.5"/>
          <ellipse cx="20" cy="20" rx="6" ry="14" fill="none" stroke="#4E78A8" stroke-width="2"/>
          <line x1="6" y1="20" x2="34" y2="20" stroke="#4E78A8" stroke-width="2"/>
        </svg>
        <div>
          <div>${c.name}</div>
          <div class="travel-head-sub">${c.nameEn}</div>
        </div>
      </div>
      <div class="travel-close" onclick="closeModal('travelModal')">
        <svg width="20" height="20" viewBox="0 0 20 20"><path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
    </div>
    <div class="travel-detail">
      <div class="travel-scene">
        <div class="scene-owl">
          <svg viewBox="0 0 120 140" width="120" height="140">
            <path d="M48 40 Q44 20 54 28 Q58 32 56 42 Z" fill="#7AA8D8"/>
            <path d="M72 40 Q76 20 66 28 Q62 32 64 42 Z" fill="#7AA8D8"/>
            <ellipse cx="22" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(-15 22 76)"/>
            <ellipse cx="98" cy="76" rx="7" ry="16" fill="#5A88B8" transform="rotate(15 98 76)"/>
            <circle cx="60" cy="72" r="38" fill="#7AA8D8"/>
            <ellipse cx="60" cy="82" rx="24" ry="26" fill="#EEF6FC"/>
            <circle cx="46" cy="62" r="15" fill="#FFFFFF"/>
            <circle cx="46" cy="63" r="6" fill="#2A3550"/>
            <circle cx="48" cy="60" r="2" fill="#FFFFFF"/>
            <circle cx="74" cy="62" r="15" fill="#FFFFFF"/>
            <circle cx="74" cy="63" r="6" fill="#2A3550"/>
            <circle cx="76" cy="60" r="2" fill="#FFFFFF"/>
            <path d="M56 76 L60 84 L64 76 Z" fill="#F5C9A0"/>
            <ellipse cx="50" cy="112" rx="6" ry="3" fill="#F5C9A0"/>
            <ellipse cx="70" cy="112" rx="6" ry="3" fill="#F5C9A0"/>
          </svg>
        </div>
        <div class="scene-guide">${getGuideAnimalSvg(id)}</div>
      </div>
      <div class="guide-bubble">
        <div class="guide-bubble-head">
          <span class="guide-name">${getGuideName(id)}</span>
          <span class="guide-species">${getGuideSpecies(id)}</span>
        </div>
        <div class="guide-bubble-text">${getGuideGreeting(id)}</div>
      </div>
      <div class="travel-illus-clickable" id="travelIllusClickable">
        ${TRAVEL_ILLUS[id] || ''}
        <div class="illus-tip">点点插图里的东西，小托给你讲讲</div>
      </div>
      <div class="travel-detail-title">${c.name}</div>
      <div class="travel-detail-sub">${c.tag}</div>
      <div class="travel-info-row"><div class="travel-info-label">历史</div><div class="travel-info-text">${c.history}</div></div>
      <div class="travel-info-row"><div class="travel-info-label">特色动物</div><div class="travel-info-text">${c.animals}</div></div>
      <div class="travel-info-row"><div class="travel-info-label">特色景点</div><div class="travel-info-text">${c.sights}</div></div>
      <div class="travel-info-row"><div class="travel-info-label">特色美食</div><div class="travel-info-text">${c.foods}</div></div>
      <div class="travel-info-row"><div class="travel-info-label">文化</div><div class="travel-info-text">${c.culture}</div></div>
      ${c.feminist && c.feminist.length ? `
        <div style="margin-top:24px;padding-top:20px;border-top:2px dashed rgba(216,165,208,.5);">
          <div style="font-size:15px;font-weight:700;color:#B06AA8;margin-bottom:14px;letter-spacing:.5px;">💜 小托想告诉你 · 她们的故事</div>
          ${c.feminist.map(f => `
            <div style="background:linear-gradient(135deg,#FDF4FB,#FFFFFF);border:2px solid rgba(216,165,208,.35);border-radius:20px;padding:16px 18px;margin-bottom:12px;">
              <div style="font-size:15px;font-weight:700;color:#8F4A88;margin-bottom:4px;">${escapeHTML(f.title)}</div>
              <div style="font-size:11px;color:var(--sub);margin-bottom:10px;">${escapeHTML(f.sub)}</div>
              <div style="font-size:13px;line-height:1.9;color:var(--text);">${escapeHTML(f.story)}</div>
            </div>
          `).join('')}
          <div style="font-size:12px;color:#B06AA8;text-align:center;margin-top:14px;font-style:italic;">平权，是所有人的事。</div>
        </div>
      ` : ''}
      <div style="margin-top:28px;padding:20px 22px;background:linear-gradient(135deg,#F0F7FF,#FFFFFF);border:2px dashed #B8D4EE;border-radius:20px;text-align:center;">
        <div style="font-size:12px;color:#7AA8D8;font-weight:700;letter-spacing:1px;margin-bottom:10px;">— 小托说 —</div>
        <div style="font-size:14px;line-height:1.9;color:var(--text);">${COUNTRY_WISDOM[id] || ''}</div>
      </div>
    </div>
    <div class="travel-detail-nav">
      <button class="travel-nav-btn" onclick="openTravel()">← 回地图</button>
      <button class="travel-nav-btn primary" onclick="askTortorAbout('${c.name}')">问小托</button>
    </div>
  `;

  setTimeout(() => bindSceneClicks(id), 100);
  if (State.voiceOn) speak(c.name + '。' + c.history);
}

function bindSceneClicks(id) {
  const box = document.getElementById('travelIllusClickable');
  if (!box) return;
  const shapes = box.querySelectorAll('svg rect, svg circle, svg ellipse, svg path, svg polygon, svg line');
  const list = SCENE_CLICKABLES[id] || [];
  if (!list.length) return;

  let clickIndex = 0;
  shapes.forEach(el => {
    el.style.cursor = 'pointer';
    el.onmouseenter = () => { el.style.filter = 'drop-shadow(0 0 6px rgba(122,168,216,.8))'; };
    el.onmouseleave = () => { el.style.filter = ''; };
    el.onclick = (e) => {
      e.stopPropagation();
      const item = list[clickIndex % list.length];
      clickIndex++;
      showScenePopup(item.label, item.story);
    };
  });
}

function showScenePopup(label, story) {
  let popup = document.getElementById('scenePopup');
  if (popup) popup.remove();

  popup = document.createElement('div');
  popup.id = 'scenePopup';
  popup.style.cssText = 'position:fixed;bottom:40px;left:50%;transform:translateX(-50%) translateY(20px);width:min(90vw,420px);background:linear-gradient(135deg,#FFFFFF,#F8FBFF);border:2.5px solid #B8D4EE;border-radius:22px;padding:16px 18px;box-shadow:0 12px 40px rgba(122,168,216,.3);z-index:9500;opacity:0;transition:all .35s cubic-bezier(.34,1.56,.64,1);pointer-events:none;';
  popup.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <span style="font-size:14px;font-weight:700;color:#4E78A8;">${escapeHTML(label)}</span>
      <span style="width:22px;height:22px;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:18px;color:var(--sub);cursor:pointer;" onclick="document.getElementById('scenePopup').remove()">×</span>
    </div>
    <div style="font-size:14px;line-height:1.75;color:var(--text);">${escapeHTML(story)}</div>
  `;
  document.body.appendChild(popup);
  setTimeout(() => { popup.style.opacity = '1'; popup.style.transform = 'translateX(-50%) translateY(0)'; popup.style.pointerEvents = 'auto'; }, 50);
  if (State.voiceOn) speak(story);
  setTimeout(() => {
    if (popup && popup.parentElement) {
      popup.style.opacity = '0';
      setTimeout(() => popup.remove(), 400);
    }
  }, 6000);
}

function askTortorAbout(countryName) {
  closeModal('travelModal');
  openAIMode();
  const mi = document.getElementById('aiMainInput');
  if (mi) {
    mi.value = State.lang === 'en'
      ? `Tell me more about ${countryName}'s history, culture, animals, and food.`
      : `给我讲讲${countryName}的历史、文化、动物和美食吧。详细一点。`;
    sendAI();
  }
}
// ============================================================
// 旅行插图（14 国）
// ============================================================
const TRAVEL_ILLUS = {
  uk: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="98" width="200" height="22" fill="#EBF3FB"/><rect x="88" y="42" width="24" height="56" fill="#FFF8E8" stroke="#E8C89A" stroke-width="2"/><circle cx="100" cy="30" r="14" fill="#FFF3C4" stroke="#E8C89A" stroke-width="2"/><line x1="100" y1="16" x2="100" y2="10" stroke="#E8C89A" stroke-width="2.5" stroke-linecap="round"/><circle cx="100" cy="8" r="3" fill="#E8C89A"/><rect x="94" y="58" width="5" height="8" fill="#7AA8D8"/><rect x="101" y="58" width="5" height="8" fill="#7AA8D8"/></svg>`,
  us: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="100" width="200" height="20" fill="#EBF3FB"/><rect x="94" y="40" width="12" height="60" fill="#B8DDC5"/><circle cx="100" cy="30" r="10" fill="#B8DDC5"/><line x1="100" y1="20" x2="100" y2="10" stroke="#B8DDC5" stroke-width="2.5" stroke-linecap="round"/><path d="M95 8 Q100 3 105 8" stroke="#F5C9A0" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="100" cy="30" r="3" fill="#FFFFFF"/></svg>`,
  jp: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="100" width="200" height="20" fill="#EBF3FB"/><path d="M52 100 L100 30 L148 100 Z" fill="#D4C5F0" stroke="#B8A8D8" stroke-width="2.5" stroke-linejoin="round"/><path d="M82 100 L100 65 L118 100 Z" fill="#FFFFFF" stroke="#B8A8D8" stroke-width="2"/><path d="M88 72 L100 30 L112 72 Z" fill="#FFFFFF" stroke="#B8A8D8" stroke-width="2"/><circle cx="100" cy="25" r="4" fill="#FFFFFF"/><circle cx="40" cy="60" r="3" fill="#F5A9C0"/></svg>`,
  kr: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="98" width="200" height="22" fill="#EBF3FB"/><path d="M40 98 L100 42 L160 98 Z" fill="#B8D4EE" stroke="#4E78A8" stroke-width="2.5" stroke-linejoin="round"/><rect x="58" y="82" width="18" height="16" fill="#FFF8E8" stroke="#E8C89A" stroke-width="1.5"/><rect x="92" y="76" width="16" height="22" fill="#FFF8E8" stroke="#E8C89A" stroke-width="1.5"/><rect x="124" y="82" width="18" height="16" fill="#FFF8E8" stroke="#E8C89A" stroke-width="1.5"/><path d="M92 76 L100 68 L108 76 Z" fill="#E84A4A"/></svg>`,
  au: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="98" width="200" height="22" fill="#FFF3C4"/><ellipse cx="65" cy="72" rx="22" ry="20" fill="#E0B888" stroke="#B8905A" stroke-width="2"/><ellipse cx="55" cy="46" rx="7" ry="14" fill="#E0B888" stroke="#B8905A" stroke-width="2"/><ellipse cx="75" cy="46" rx="7" ry="14" fill="#E0B888" stroke="#B8905A" stroke-width="2"/><ellipse cx="65" cy="78" rx="12" ry="10" fill="#FBF9F4"/><circle cx="60" cy="75" r="2" fill="#4A4A5C"/><circle cx="70" cy="75" r="2" fill="#4A4A5C"/><ellipse cx="140" cy="82" rx="16" ry="14" fill="#B8DDC5" stroke="#7DA898" stroke-width="2"/><circle cx="140" cy="68" r="11" fill="#B8DDC5" stroke="#7DA898" stroke-width="2"/></svg>`,
  ie: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="98" width="200" height="22" fill="#B8DDC5"/><path d="M70 98 L100 48 L130 98 Z" fill="#8FB8A8" stroke="#5C7A6E" stroke-width="2.5" stroke-linejoin="round"/><path d="M85 98 L100 70 L115 98 Z" fill="#B8DDC5" stroke="#5C7A6E" stroke-width="2"/><path d="M100 58 Q108 44 100 34 Q92 44 100 58" fill="#FFFFFF" stroke="#5C7A6E" stroke-width="2"/><circle cx="100" cy="30" r="3" fill="#F5C9A0"/></svg>`,
  fr: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="102" width="200" height="18" fill="#EBF3FB"/><path d="M92 30 L100 20 L108 30 L112 92 L88 92 Z" fill="#B8DDC5" stroke="#7DA898" stroke-width="2" stroke-linejoin="round"/><line x1="86" y1="55" x2="114" y2="55" stroke="#7DA898" stroke-width="2"/><line x1="88" y1="74" x2="112" y2="74" stroke="#7DA898" stroke-width="2"/><circle cx="100" cy="25" r="4" fill="#F5C9A0"/><ellipse cx="50" cy="90" rx="14" ry="7" fill="#E8C89A" stroke="#C48824" stroke-width="1.5"/></svg>`,
  de: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="98" width="200" height="22" fill="#EBF3FB"/><path d="M70 98 L100 44 L130 98 Z" fill="#FFF8E8" stroke="#E8C89A" stroke-width="2.5" stroke-linejoin="round"/><path d="M78 98 L100 58 L122 98 Z" fill="#FFFFFF" stroke="#E8C89A" stroke-width="2"/><circle cx="100" cy="72" r="4" fill="#FFF3C4" stroke="#E8C89A" stroke-width="1.5"/><circle cx="94" cy="82" r="3" fill="#FFF3C4" stroke="#E8C89A" stroke-width="1.5"/><circle cx="106" cy="82" r="3" fill="#FFF3C4" stroke="#E8C89A" stroke-width="1.5"/></svg>`,
  it: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="100" width="200" height="20" fill="#FFF3C4"/><path d="M96 30 L104 30 L108 98 L92 98 Z" fill="#FFFFFF" stroke="#E8C89A" stroke-width="2"/><ellipse cx="100" cy="104" rx="30" ry="6" fill="#E8C89A" opacity="0.4"/><circle cx="50" cy="80" r="18" fill="#FFF8E8" stroke="#E8C89A" stroke-width="2"/><circle cx="50" cy="80" r="12" fill="#F5A9A0"/><circle cx="46" cy="76" r="3" fill="#E8A88E"/><circle cx="54" cy="76" r="3" fill="#E8A88E"/><circle cx="46" cy="84" r="3" fill="#E8A88E"/><circle cx="54" cy="84" r="3" fill="#E8A88E"/></svg>`,
  es: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="100" width="200" height="20" fill="#FFD9C9"/><path d="M70 100 L70 55 Q70 38 90 38 L110 38 Q130 38 130 55 L130 100 Z" fill="#FFF8E8" stroke="#E8A88E" stroke-width="2.5"/><path d="M80 42 L80 30 Q80 22 90 22 L110 22 Q120 22 120 30 L120 42" fill="none" stroke="#E8A88E" stroke-width="2.5"/><circle cx="100" cy="62" r="7" fill="#FFF3C4" stroke="#E8C89A" stroke-width="1.5"/><circle cx="100" cy="80" r="5" fill="#FFF3C4" stroke="#E8C89A" stroke-width="1.5"/></svg>`,
  eg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="95" width="200" height="25" fill="#FFF3C4"/><path d="M40 95 L80 45 L120 95 Z" fill="#FFF8E8" stroke="#E8C89A" stroke-width="2.5" stroke-linejoin="round"/><line x1="60" y1="75" x2="100" y2="75" stroke="#E8C89A" stroke-width="1.5"/><line x1="55" y1="85" x2="105" y2="85" stroke="#E8C89A" stroke-width="1.5"/><path d="M120 95 L150 50 L180 95 Z" fill="#FFF8E8" stroke="#E8C89A" stroke-width="2.5" stroke-linejoin="round"/><circle cx="30" cy="50" r="10" fill="#FFF3C4" stroke="#E8C89A" stroke-width="2"/></svg>`,
  br: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="95" width="200" height="25" fill="#B8DDC5"/><ellipse cx="100" cy="60" rx="45" ry="35" fill="#B8DDC5" stroke="#7DA898" stroke-width="2"/><path d="M60 60 Q75 45 90 55 Q105 45 120 55 Q135 45 140 60" fill="none" stroke="#7DA898" stroke-width="2"/><circle cx="150" cy="40" r="10" fill="#FFD9C9"/><circle cx="50" cy="45" r="6" fill="#FFF3C4"/></svg>`,
  in: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="95" width="200" height="25" fill="#FFF3C4"/><path d="M70 95 Q70 50 100 40 Q130 50 130 95 Z" fill="#FFF8E8" stroke="#E8C89A" stroke-width="2.5"/><path d="M100 40 L100 30 L92 30 L100 22 L108 30 L100 30" fill="#E8C89A" stroke="#C48824" stroke-width="1.5"/><circle cx="100" cy="60" r="8" fill="none" stroke="#D4C5F0" stroke-width="2"/><ellipse cx="100" cy="78" rx="14" ry="8" fill="none" stroke="#7DA898" stroke-width="2"/></svg>`,
  ca: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="95" width="200" height="25" fill="#FFF3C4"/><path d="M100 25 Q115 55 108 70 Q104 80 100 75 Q96 80 92 70 Q85 55 100 25 Z" fill="#F5A9A0" stroke="#D98780" stroke-width="2"/><line x1="100" y1="45" x2="100" y2="75" stroke="#D98780" stroke-width="1.5"/><path d="M92 55 L100 45 L108 55" stroke="#D98780" stroke-width="1.5" fill="none"/><circle cx="50" cy="45" r="3" fill="#FFF3C4"/><circle cx="150" cy="40" r="3" fill="#FFF3C4"/></svg>`
};

// ============================================================
// AI 生成题库
// ============================================================
function openGenPage() {
  const unitSel = document.getElementById('genUnit');
  const lessonSel = document.getElementById('genLesson');
  const units = getUnits();

  unitSel.innerHTML = '';
  units.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u.id;
    opt.textContent = '第' + u.id + '单元';
    unitSel.appendChild(opt);
  });
  unitSel.value = State.unit;

  function fillLessons() {
    const u = units.find(x => x.id === parseInt(unitSel.value, 10));
    lessonSel.innerHTML = '';
    if (!u) return;
    u.lessons.forEach(l => {
      const opt = document.createElement('option');
      opt.value = l.id;
      opt.textContent = l.name;
      lessonSel.appendChild(opt);
    });
  }
  unitSel.onchange = fillLessons;
  fillLessons();

  const status = document.getElementById('genStatus');
  if (status) status.textContent = '';
  const fill = document.getElementById('genProgressFill');
  if (fill) fill.style.width = '0%';

  openModal('genPage');
}

async function startGen() {
  const unit = parseInt(document.getElementById('genUnit').value, 10);
  const lesson = parseInt(document.getElementById('genLesson').value, 10);
  const count = parseInt(document.getElementById('genCount').value, 10);
  const type = document.getElementById('genType').value;

  const status = document.getElementById('genStatus');
  const fill = document.getElementById('genProgressFill');

  const units = getUnits();
  const u = units.find(x => x.id === unit);
  const l = u.lessons.find(x => x.id === lesson);
  if (!l) return;

  const totalBatches = Math.ceil(count / 50);
  let allPassed = [];
  let allRejected = [];
  let totalGenerated = 0;

  for (let b = 0; b < totalBatches; b++) {
    const batchSize = Math.min(50, count - totalGenerated);
    status.textContent = `生成第 ${b + 1} / ${totalBatches} 批（${batchSize} 条）...`;
    fill.style.width = ((b) / totalBatches * 60) + '%';

    try {
      const items = await genBatch(u.name, l.name, type, batchSize, totalGenerated);
      if (!items || !items.length) continue;
      totalGenerated += items.length;

      status.textContent = `AI 审核第 ${b + 1} 批...`;
      fill.style.width = (60 + (b / totalBatches) * 35) + '%';

      const review = await aiReviewBatch(items, type);
      allPassed.push(...review.passed);
      allRejected.push(...review.rejected);
    } catch (e) {
      status.textContent = '出错：' + e.message;
      return;
    }
  }

  if (allPassed.length) {
    saveGenerated(type, unit, lesson, allPassed);
  }

  fill.style.width = '100%';
  status.textContent = `完成！通过 ${allPassed.length} 条，剔除 ${allRejected.length} 条`;

  setTimeout(() => {
    closeModal('genPage');
    showReviewResult(type, allPassed.length, allRejected);
  }, 600);
}

async function genBatch(unitName, lessonName, type, size, offset) {
  let typePrompt = '';
  let schema = '';

  if (type === 'knowledge') {
    typePrompt = `请把这一课拆成 ${size} 条完全知识点。每一条都要是独立、可背、可考的具体内容。要求：1. 覆盖课本角角落落，包括正文、小字、图片说明、地图标注；2. 时间、人物、地点、原因、经过、结果、影响、条约内容、数据、别称、易错点都要挖出来；3. 一条只讲一个点；4. 每条 20-50 字；5. 分成若干板块，每个板块 8-15 条`;
    schema = `[{"section": "板块名称", "items": ["知识点1", "知识点2"]}]`;
  } else if (type === 'choice') {
    typePrompt = '出选择题。每道题要有 4 个选项 A/B/C/D，只有一个是正确答案。';
    schema = `[{"stem": "题干", "options": ["A", "B", "C", "D"], "answer": 0, "steps": ["讲解1", "讲解2"]}]`;
  } else if (type === 'big') {
    typePrompt = '出大题（材料题、简答题）。每题要有材料和若干小问。';
    schema = `[{"stem": "材料 + 问题", "steps": ["参考答案1", "参考答案2"]}]`;
  } else if (type === 'recite') {
    typePrompt = '出背诵卡。每张卡正面是问题，反面是答案。';
    schema = `[{"q": "问题", "a": "答案"}]`;
  } else if (type === 'dictate') {
    typePrompt = '出默写句。每句有空要填，给出关键词列表。';
    schema = `[{"q": "句子中有 ____ 空", "keys": ["关键词1", "关键词2"]}]`;
  }

  const prompt = `你是八年级历史出题老师。教材是人教版八上历史。
单元：${unitName}
课时：${lessonName}

${typePrompt}

请出 ${size} 条，覆盖这一课的每个知识点，包括犄角旮旯的小点。重点知识点多出，次要知识点也出。不重复。

严格按下面的 JSON 数组格式返回，不要任何多余文字，不要 markdown 代码块：

${schema}`;

  const response = await callDeepSeekRaw(prompt);
  let text = response.trim();
  text = text.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();

  const start = text.indexOf('[');
  const end = text.lastIndexOf(']');
  if (start === -1 || end === -1) throw new Error('AI 返回格式错误');
  const json = text.slice(start, end + 1);

  try { return JSON.parse(json); } catch (e) { throw new Error('JSON 解析失败'); }
}

function saveGenerated(type, unit, lesson, items) {
  if (type === 'choice') {
    const bank = load('bank_choice', []);
    items.forEach((item, i) => {
      bank.push({
        id: `gen-${unit}-${lesson}-${Date.now()}-${i}`,
        type: 'choice', unit, lesson,
        stem: item.stem, options: item.options, answer: item.answer, steps: item.steps || []
      });
    });
    save('bank_choice', bank);
  } else if (type === 'big') {
    const bank = load('bank_big', []);
    items.forEach((item, i) => {
      bank.push({
        id: `gen-${unit}-${lesson}-${Date.now()}-${i}`,
        type: 'big', unit, lesson,
        stem: item.stem, steps: item.steps || []
      });
    });
    save('bank_big', bank);
  } else if (type === 'recite') {
    const bank = load('bank_recite', []);
    items.forEach(item => { bank.push({ unit, lesson, q: item.q, a: item.a }); });
    save('bank_recite', bank);
  } else if (type === 'dictate') {
    const bank = load('bank_dictate', []);
    items.forEach(item => { bank.push({ unit, lesson, q: item.q, keys: item.keys }); });
    save('bank_dictate', bank);
  } else if (type === 'knowledge') {
    const bank = load('bank_knowledge', []);
    bank.push({ unit, lesson, sections: items });
    save('bank_knowledge', bank);
  }
}

// ============================================================
// AI 自动审核
// ============================================================
async function aiReviewBatch(items, type) {
  if (!items || !items.length) return { passed: [], rejected: [] };

  const listText = items.map((item, i) => {
    if (type === 'choice') {
      const opts = (item.options || []).map((o, oi) => `${String.fromCharCode(65 + oi)}. ${o}`).join('\n');
      return `【第${i + 1}题】\n题干：${item.stem}\n${opts}\nAI给的答案：${String.fromCharCode(65 + item.answer)}`;
    } else if (type === 'recite') {
      return `【第${i + 1}题】\n问：${item.q}\n答：${item.a}`;
    } else if (type === 'dictate') {
      return `【第${i + 1}题】\n句子：${item.q}\n关键词：${(item.keys || []).join('、')}`;
    } else if (type === 'big') {
      return `【第${i + 1}题】\n${(item.stem || '').slice(0, 200)}`;
    } else if (type === 'knowledge') {
      const s = (item.items || []).join('；');
      return `【第${i + 1}题】\n板块：${item.section}\n内容：${s}`;
    }
    return '';
  }).join('\n\n');

  const prompt = `你是八年级历史老师，现在要审核下面这批由 AI 生成的题目。

教材：人教版八上历史。

审核标准（严格）：
1. 历史事实必须准确。时间、人物、事件、地点、条约内容、赔款数字，任何一处错都算不合格。
2. 选择题：四个选项中必须只有一个正确答案，且正确答案就是 AI 标注的那个。如果有两个也对、或答案标错、或选项含混，都不合格。
3. 题干必须清楚。
4. 不能出现课本上不存在的知识。
5. 背诵卡、默写句的关键词必须准确。
6. 知识点必须符合课本原意，不能编造。

请对每道题返回一个判断：
- "pass"：完全没问题
- "fail"：有问题

严格按 JSON 返回，不要任何多余文字：
{"results": [{"index": 1, "verdict": "pass", "reason": ""}, {"index": 2, "verdict": "fail", "reason": "答案标错"}]}

下面开始审核：

${listText}`;

  try {
    const raw = await callDeepSeekRaw(prompt);
    let text = raw.trim();
    text = text.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start === -1 || end === -1) return { passed: items, rejected: [] };
    const json = JSON.parse(text.slice(start, end + 1));
    const results = json.results || [];

    const passed = [];
    const rejected = [];
    items.forEach((item, i) => {
      const r = results.find(x => x.index === i + 1);
      if (!r || r.verdict === 'pass') passed.push(item);
      else rejected.push({ item, reason: r.reason || '' });
    });
    return { passed, rejected };
  } catch (e) {
    return { passed: items, rejected: [], error: e.message };
  }
}

function showReviewResult(type, passedCount, rejected) {
  let layer = document.getElementById('reviewResultLayer');
  if (!layer) {
    layer = document.createElement('div');
    layer.id = 'reviewResultLayer';
    layer.style.cssText = 'position:fixed;inset:0;z-index:1000;background:rgba(30,34,42,.5);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:20px;';
    document.body.appendChild(layer);
  }
  layer.classList.remove('hidden');

  const rejectedHtml = rejected.length
    ? `<div style="margin-top:14px;max-height:40vh;overflow-y:auto;">
        <div style="font-size:12px;color:var(--sub);margin-bottom:8px;">被剔除的题：</div>
        ${rejected.map(r => `
          <div style="padding:10px 12px;margin-bottom:6px;border-radius:12px;background:rgba(232,168,142,.1);border-left:3px solid #E8A88E;font-size:13px;line-height:1.5;">
            <div style="color:var(--text);">${escapeHTML((r.item.stem || r.item.q || r.item.section || '').slice(0, 80))}...</div>
            <div style="color:#C07060;font-size:12px;margin-top:4px;">理由：${escapeHTML(r.reason || '未说明')}</div>
          </div>
        `).join('')}
      </div>`
    : '';

  layer.innerHTML = `
    <div class="modal-box" style="max-width:560px;width:100%;">
      <div class="modal-head">
        <span>审核完成</span>
        <span class="modal-close" onclick="document.getElementById('reviewResultLayer').classList.add('hidden')">×</span>
      </div>
      <div style="text-align:center;padding:24px 0;">
        <div style="font-size:48px;font-weight:700;background:linear-gradient(135deg,#7AA8D8,#B8D4EE);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">${passedCount}</div>
        <div style="font-size:14px;color:var(--sub);margin-top:6px;">通过并入库</div>
        ${rejected.length ? `<div style="font-size:13px;color:#E8A88E;margin-top:8px;">剔除 ${rejected.length} 条</div>` : ''}
      </div>
      ${rejectedHtml}
      <button onclick="document.getElementById('reviewResultLayer').classList.add('hidden')" style="width:100%;padding:14px;border-radius:999px;background:linear-gradient(135deg,#7AA8D8,#9BBEE2);color:#fff;font-weight:700;border:none;cursor:pointer;font-family:inherit;margin-top:14px;">好</button>
    </div>
  `;
}
// ============================================================
// 覆盖 enterApp：加档案流程
// ============================================================
window.enterApp = function() {
  if (!State.country) {
    toast(State.lang === 'en' ? 'Please choose your country first' : '请先选择你的国家');
    openCountryPicker();
    return;
  }

  const launch = document.getElementById('launch');
  if (!launch) return;

  launch.style.transition = 'opacity .35s ease';
  launch.style.opacity = '0';
  setTimeout(() => {
    launch.classList.add('hidden');

    if (checkOnboard()) {
      openOnboard();
    } else {
      document.getElementById('home').classList.remove('hidden');
      if (load('storyMode', false)) {
        setTimeout(() => {
          if (typeof checkDiary === 'function') checkDiary();
        }, 400);
      }
    }
  }, 350);
};

// ============================================================
// 覆盖 toggleRightPanel：让 body 状态跟着变
// ============================================================
const _origToggleRP = window.toggleRightPanel;
window.toggleRightPanel = function() {
  _origToggleRP();
  const panel = document.getElementById('rightPanel');
  if (panel && !panel.classList.contains('hidden')) {
    document.body.classList.add('right-open');
  } else {
    document.body.classList.remove('right-open');
  }
};

// ============================================================
// 全局收尾
// ============================================================
window.addEventListener('resize', () => {
  const canvas = document.getElementById('lassoCanvas');
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
});

window.addEventListener('beforeunload', () => {
  saveNotes();
  saveDraft();
});

// 点击弹窗背景关闭（除 AI 模式和套索）
document.addEventListener('click', (e) => {
  if (e.target.classList && e.target.classList.contains('modal')) {
    if (e.target.id === 'aiModal') return;
    if (e.target.id === 'lassoLayer') return;
    if (e.target.id === 'countryModal') return;
    if (e.target.id === 'onboard') return;
    e.target.classList.add('hidden');
  }
});


(function autoTranslate() {
  const DICT = {
    '首页': 'Home',
    '聊天': 'Chat',
    '小窝': 'Nest',
    '推荐': 'Discover',
    '剧情线': 'Story',
    '群聊': 'Group Chat',
    '连接组': 'Connections',
    '交换日记': 'Diary',
    '联系人': 'Contacts',
    '收音机': 'Radio',
    '免费礼物': 'Gifts',
    '通话记录': 'Calls',
    '百科': 'Wiki',
    '选择模式': 'Choose Mode',
    'AI 模式': 'AI Mode',
    '角色扮演模式': 'Roleplay',
    '关于创作者': 'About Creator',
    '感谢你的游玩': 'Thanks for playing',
    '下一步': 'Next',
    '跳过': 'Skip',
    '更换头像': 'Change Avatar',
    '取消': 'Cancel',
    '确定': 'Confirm',
    '语言': 'Language'
    // ... 你可以繼續加
  };

  function translateNode(root) {
    if (!root) return;
    // 只翻譯「純文字節點」
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const raw = node.nodeValue.trim();
      if (DICT[raw]) {
        node.nodeValue = node.nodeValue.replace(raw, DICT[raw]);
      }
    }
  }

  // 監聽語言切換，每次切到英文就自動翻譯
  const origSetLang = window.setLang;
  window.setLang = function(v) {
    origSetLang(v);
    if (v === 'en') {
      setTimeout(() => translateNode(document.body), 100);
    }
  };

  // 初始載入時也跑一次
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (window.State && State.lang === 'en') translateNode(document.body);
    }, 500);
  });
})();
// ============================================================
// AI 自動翻譯補丁（放在 script.js 最後面）
// ============================================================
(function () {
  // 等頁面載入完成後再啟動
  window.addEventListener('load', () => {
    // 保存原本的 setLang
    const origSetLang = window.setLang;

    window.setLang = function (v) {
      // 先執行原本的 setLang
      if (typeof origSetLang === 'function') origSetLang(v);
      // 如果切換到英文，就觸發翻譯
      if (v === 'en') {
        setTimeout(translatePageToEnglish, 300);
      }
    };
  });

  // 翻譯主函式
  async function translatePageToEnglish() {
    if (!State || State.lang !== 'en') return;
    if (typeof callDeepSeekRaw !== 'function') return;

    // 收集畫面所有含中文的文字節點
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
      const t = node.nodeValue.trim();
      if (t && /[\u4e00-\u9fa5]/.test(t)) nodes.push(node);
    }
    if (!nodes.length) return;

    // 去重複
    const unique = [...new Set(nodes.map(n => n.nodeValue.trim()))];

    // 分批丟給 AI 翻譯（一次最多 50 條，避免太長）
    const map = {};
    for (let i = 0; i < unique.length; i += 50) {
      const chunk = unique.slice(i, i + 50);
      const prompt =
        '把下面每一行中文翻譯成英文，一行對一行，不要編號，不要解釋，直接輸出翻譯結果：\n\n' +
        chunk.join('\n');
      try {
        const result = await callDeepSeekRaw(prompt);
        const lines = result.split('\n').map(s => s.trim()).filter(Boolean);
        chunk.forEach((zh, idx) => {
          if (lines[idx]) map[zh] = lines[idx];
        });
      } catch (e) {
        console.warn('翻譯失敗：', e);
      }
    }

    // 把翻譯結果寫回畫面
    nodes.forEach(n => {
      const key = n.nodeValue.trim();
      if (map[key]) n.nodeValue = n.nodeValue.replace(key, map[key]);
    });
  }
})();
// ============================================================
// AI 自動翻譯補丁（放在 script.js 最下面）
// ============================================================
(function () {
  // 翻譯主函式
  async function translatePageToEnglish() {
    if (!window.State || State.lang !== 'en') return;
    if (typeof callDeepSeekRaw !== 'function') {
      console.warn('[翻譯] 找不到 callDeepSeekRaw 函式，無法翻譯');
      return;
    }

    // 收集畫面所有含中文的文字節點
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
      const t = node.nodeValue.trim();
      if (t && /[\u4e00-\u9fa5]/.test(t)) nodes.push(node);
    }
    if (!nodes.length) return;

    // 去重複
    const unique = [...new Set(nodes.map(n => n.nodeValue.trim()))];
    console.log('[翻譯] 準備翻譯 ' + unique.length + ' 條文字');

    // 分批丟給 AI 翻譯（一次最多 50 條）
    const map = {};
    for (let i = 0; i < unique.length; i += 50) {
      const chunk = unique.slice(i, i + 50);
      const prompt =
        '把下面每一行中文翻譯成英文，一行對一行，不要編號，不要解釋，直接輸出翻譯結果：\n\n' +
        chunk.join('\n');
      try {
        const result = await callDeepSeekRaw(prompt);
        const lines = result.split('\n').map(s => s.trim()).filter(Boolean);
        chunk.forEach((zh, idx) => {
          if (lines[idx]) map[zh] = lines[idx];
        });
      } catch (e) {
        console.warn('[翻譯] 失敗：', e);
      }
    }

    // 把翻譯結果寫回畫面
    nodes.forEach(n => {
      const key = n.nodeValue.trim();
      if (map[key]) n.nodeValue = n.nodeValue.replace(key, map[key]);
    });
    console.log('[翻譯] 完成');
  }

  // 對外暴露，方便手動呼叫
  window.translatePageToEnglish = translatePageToEnglish;

  // 攔截 setLang，切到英文時自動翻譯
  window.addEventListener('load', () => {
    const origSetLang = window.setLang;
    window.setLang = function (v) {
      if (typeof origSetLang === 'function') origSetLang(v);
      if (v === 'en') {
        setTimeout(translatePageToEnglish, 300);
      }
    };

    // 頁面載入時，如果語言已經是英文，自動翻譯
    setTimeout(() => {
      if (window.State && State.lang === 'en') {
        translatePageToEnglish();
      }
    }, 800);
  });
})();