
import { TranslationContent, Language, GithubConfig } from './types';

// =============================================================================
// GITHUB CMS CONFIGURATION
// =============================================================================
// To enable dynamic content loading from GitHub Issues:
// 1. Create a public GitHub repository.
// 2. Create issues with labels: 'project', 'movie', 'book', 'series', 'podcast', 'blog'.
// 3. Fill in your username and repo name below.
// 4. Content Format in Issue Body:
//    - First, a JSON block ```json { ... } ``` for metadata.
//    - Then, normal Markdown for the main description/comment/reflection.
//
// Leave empty to use the static content defined below.
export const GITHUB_CONFIG: GithubConfig = {
  username: 'ianzhu13', // e.g., 'yourname'
  repo: 'Pixel-Psyche'      // e.g., 'my-website-content'
};

export const TOOLKIT = [
  'Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'C++', 'VTK/ITK', 'TensorRT', 'Matlab', 'Docker'
];

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  en: {
    tagline: "The Logic of Code, The Poetry of Being",
    subTagline: "An engineer exploring logic through code, and existence through perception.",
    nav: {
      portal: "Portal",
      lab: "The Lab",
      intersection: "Intersection",
      sanctuary: "Sanctuary",
      about: "About Me"
    },
    portal: {
      labTitle: "The Lab",
      labDesc: "Rational Creation & Insights",
      labCta: "Explore Logic",
      sanctuaryTitle: "The Sanctuary",
      sanctuaryDesc: "Emotional Wandering & Reflection",
      sanctuaryCta: "Wander Freely",
      intersectionBtn: "Enter The Intersection"
    },
    lab: {
      title: "The Lab",
      subtitle: "// where algorithms meet reality\nSystem.init(logic, data, rigorous_testing);",
      coreSystems: "Core Systems",
      arsenal: "Arsenal",
      searchLabTitle: "Neural Concept Lab",
      searchLabDesc: "Experiment with Google Search Grounding to find up-to-date inspiration.",
      searchPlaceholder: "Ask a question (e.g., domain name ideas)...",
      searchBtn: "Run Experiment",
      searching: "Processing Logic...",
      sources: "Data Sources",
      domainPrompt: "Find creative domain names for a portfolio website about 'Logic' and 'Poetry', check if they sound modern.",
      impactLabel: "Human Impact",
      architectureLabel: "Architecture",
      authorNoteLabel: "Author's Note:",
      toolkitQuote: "Tools are ephemeral. Logic is eternal. The syntax changes, but the underlying patterns of problem-solving remain strictly ordered."
    },
    sanctuary: {
      title: "The Sanctuary",
      subtitle: "Where logic dissolves into feeling.\nA collection of lingering echoes.",
      cinemaLog: "Cinema Log",
      readingCosmos: "Reading Cosmos",
      seriesLabel: "Episodic Narratives",
      podcastLabel: "Audio Frequencies",
      languageQuote: "\"To have another language is to possess a second soul.\" — Charlemagne"
    },
    intersection: {
      title: "The Intersection",
      subtitle: "The bridge between the lab and the sanctuary.\nSynthesis of binary logic and analog feeling.",
      readThought: "Read Thought"
    },
    about: {
      title: "Clues to Who I Am",
      email: "Email Me",
      linkedin: "LinkedIn",
      invite: "\"If these frequencies resonate with you, I invite you to connect.\""
    },
    projects: [
      {
        id: 'p1',
        title: 'Intelligent Ophthalmic Diagnosis',
        description: 'AI solution for retinal imaging. Implemented GAN-based super-resolution, nnUNet for cup/disc segmentation, and ONH quantitative analysis.',
        impact: 'Built the FDA/CE compliant normal eye database. Every pixel clarified brings a patient closer to a precise diagnosis.',
        techStack: ['Python', 'GAN', 'nnUNet', 'VTK', 'LabelMe'],
        highlights: ['FDA/CE Compliance', 'Super-Resolution'],
        reflection: 'I realized that under the strict standards of medical device registration, an algorithm is not just a model, but a commitment to life.'
      },
      {
        id: 'p2',
        title: 'BCI Implant Robot Navigation',
        description: 'Vision system for Neural Interface Robot. Achieved 10-micron precision in stereo microscopic vision for safe electrode implantation.',
        impact: 'Bridging the biological and the mechanical. Ensuring that the interface with the brain is handled with absolute precision.',
        techStack: ['C++', 'TensorRT', 'PyTorch', 'Stereo Vision', 'LibTorch'],
        highlights: ['10μm Precision', 'Brain-Computer Interface'],
        reflection: 'Working on the boundary of human and machine made me question: where does the hardware end and the "self" begin?'
      },
      {
        id: 'p3',
        title: 'Dental Surgery Robotics',
        description: '3D navigation software for dental implants. Developed algorithms for maxillary sinus and mandibular nerve segmentation using VTK/ITK.',
        impact: 'Digitizing the surgeon\'s intuition. Two patents were awarded for these innovations in surgical planning.',
        techStack: ['C++', 'VTK', 'ITK', 'Visual Studio'],
        highlights: ['2 Patents Awarded', 'Surgical Navigation'],
        reflection: 'Transforming abstract CT data into a navigable 3D map taught me the responsibility of translating spatial logic into physical safety.'
      },
      {
        id: 'p4',
        title: 'Quantum Dot Fingerprint System',
        description: 'Undergraduate Thesis. Simulation of quantum dot optical characteristics for unique identification systems.',
        impact: 'The Genesis. A system written entirely in English and Matlab that marked the beginning of my journey.',
        techStack: ['Matlab', 'English Academic Writing', 'Simulation'],
        highlights: ['The Origin', 'Undergraduate Thesis'],
        reflection: 'My starting point. It was here I first realized that code could simulate the intricate textures of the physical world.'
      }
    ],
    movies: [
      {
        id: 'm1',
        title: 'La La Land',
        type: 'movie',
        quote: "Here's to the ones who dream, foolish as they may seem.",
        comment: "A visual symphony of balancing ambition and love. It reminds me that sometimes, the most logical choice demands the most heartbreaking sacrifice.",
        link: "https://www.imdb.com/title/tt3783958/"
      },
      {
        id: 'm2',
        title: 'Portrait of a Lady on Fire',
        type: 'movie',
        quote: "Do all lovers feel they’re inventing something?",
        comment: "The gaze, the silence, the painting. It captures the fleeting nature of connection better than any line of code could capture state.",
        link: "https://www.imdb.com/title/tt8613070/"
      },
      {
        id: 'm3',
        title: 'Blade Runner 2049',
        type: 'movie',
        quote: "All the best memories are hers.",
        comment: "I am obsessed with the myth of 'consciousness' and 'memory'. Do we define our memories, or do they define us?",
        link: "https://www.imdb.com/title/tt1856101/"
      }
    ],
    books: [
      {
        id: 'b1',
        title: 'West with the Night',
        subtitle: 'Beryl Markham',
        type: 'book',
        quote: "I have learned that if you must leave a place... leave it any way except slowly.",
        comment: "Markham's prose flies as high as her plane. A testament to a life lived without the safety net of convention.",
        link: "https://www.goodreads.com/book/show/1624.West_with_the_Night"
      },
      {
        id: 'b2',
        title: 'The Razor\'s Edge',
        subtitle: 'W. Somerset Maugham',
        type: 'book',
        quote: "The sharp edge of a razor is difficult to pass over; thus the wise say the path to Salvation is hard.",
        comment: "Larry's search for meaning amidst the mundane echoes my own search for the 'why' behind the 'how' of engineering.",
        link: "https://www.goodreads.com/book/show/31196.The_Razor_s_Edge"
      },
      {
        id: 'b3',
        title: 'Bright Night',
        subtitle: 'Choi Eun-young',
        type: 'book',
        quote: "Even if we don't meet again, I will never forget you.",
        comment: "A generational dialogue. It shows how the past is not data to be archived, but a living thread woven into the present.",
        link: "https://www.goodreads.com/book/show/60097434-bright-night"
      }
    ],
    series: [
      {
        id: 's1',
        title: 'Fleabag',
        type: 'series',
        quote: "It'll pass.",
        comment: "Raw, breaking the fourth wall like a debug log of the soul. It validates the messy, unoptimized reality of being human.",
        link: "https://www.imdb.com/title/tt5687612/"
      }
    ],
    podcasts: [
      {
        id: 'pc1',
        title: 'Stories of Flowers in the Rock',
        type: 'podcast',
        subtitle: 'Yan Zhong Hua Shu',
        quote: "Bloom in the cracks.",
        comment: "Conversations that explore the resilience of women. Listening to this is like debugging the societal code that constrains us.",
        link: "https://podcasts.apple.com/cn/podcast/%E5%B2%A9%E4%B8%AD%E8%8A%B1%E8%BF%B0/id1617260565"
      },
      {
        id: 'pc2',
        title: 'Valley of Echoes',
        type: 'podcast',
        subtitle: 'Hui Yin Gu',
        quote: "Echoes of the soul.",
        comment: "Soundscapes that allow thoughts to drift. A necessary analog break from the digital noise.",
        link: "https://www.xiaoyuzhoufm.com/podcast/6130c25a83a059d91f16386c"
      }
    ],
    blogPosts: [
      {
        id: 'blog1',
        title: 'Algorithmic Bias & Human Blind Spots',
        summary: 'Exploring the ethical implications of AI in healthcare and how our own prejudices seep into the weights of neural networks.',
        tags: ['AI Ethics', 'Philosophy']
      },
      {
        id: 'blog2',
        title: 'When Medical Imaging Meets the Philosophy of Death',
        summary: 'Staring at the boundary of existence through data. A personal reflection on mortality derived from professional diagnosis.',
        tags: ['Medical Imaging', 'Life & Death']
      },
      {
        id: 'blog3',
        title: 'Does the "Beauty" of Code Exist?',
        summary: 'An engineer\'s aesthetic notes. Comparing the elegance of a recursive function to the structure of a sonnet.',
        tags: ['Aesthetics', 'Code']
      }
    ],
    timeline: [
      {
        year: '2015',
        title: 'Hello, World',
        description: 'Wrote my first line of Python. Felt the thrill of controlling a small universe with logic.'
      },
      {
        year: '2018',
        title: 'First Cinema Experience Alone',
        description: 'Watched "2001: A Space Odyssey" in an empty theater. Realized silence speaks louder than noise.'
      },
      {
        year: '2020',
        title: 'The Medical Imaging Project',
        description: 'First time my code directly influenced a patient\'s diagnosis. The weight of responsibility settled in.'
      }
    ]
  },
  'zh-CN': {
    tagline: "代码的逻辑，感受的诗意",
    subTagline: "一个用代码探索逻辑，用感知触碰存在的工程师。",
    nav: {
      portal: "入口",
      lab: "理性的创造",
      intersection: "交汇处",
      sanctuary: "感性的漫游",
      about: "关于我"
    },
    portal: {
      labTitle: "理性的创造",
      labDesc: "理性创造 & 深度洞察",
      labCta: "探索逻辑",
      sanctuaryTitle: "感性的漫游",
      sanctuaryDesc: "情感漫游 & 内心反思",
      sanctuaryCta: "自由漫步",
      intersectionBtn: "进入交汇处"
    },
    lab: {
      title: "理性的创造",
      subtitle: "// 当算法遇见现实\nSystem.init(logic, data, rigorous_testing);",
      coreSystems: "核心系统",
      arsenal: "技术武库",
      searchLabTitle: "AI 概念实验室",
      searchLabDesc: "利用 Google Search Grounding 探索实时灵感。",
      searchPlaceholder: "输入问题 (例如：为我推荐一个网站域名)...",
      searchBtn: "运行实验",
      searching: "逻辑演算中...",
      sources: "数据来源",
      domainPrompt: "为关于“代码逻辑”与“生命诗意”的个人网站推荐富有创意的域名，并检查其现代感。",
      impactLabel: "人文影响",
      architectureLabel: "架构技术",
      authorNoteLabel: "作者手记:",
      toolkitQuote: "工具是短暂的，逻辑是永恒的。语法在变，但解决问题的底层模式依然严谨有序。"
    },
    sanctuary: {
      title: "感性的漫游",
      subtitle: "逻辑在此消融于感受。\n那些回响不绝的记忆片段。",
      cinemaLog: "光影笔记",
      readingCosmos: "文字宇宙",
      seriesLabel: "剧集叙事",
      podcastLabel: "声音频率",
      languageQuote: "“拥有第二门语言，就像拥有了第二个灵魂。” —— 查理曼大帝"
    },
    intersection: {
      title: "交汇处",
      subtitle: "连接实验室与精神花园的桥梁。\n二进制逻辑与模拟情感的综合体。",
      readThought: "阅读随笔"
    },
    about: {
      title: "我是谁的一些线索",
      email: "发送邮件",
      linkedin: "领英链接",
      invite: "“如果这些频率与你产生了共鸣，期待与你交流。”"
    },
    projects: [
      {
        id: 'p1',
        title: '眼科影像智能分析',
        description: '负责全流程算法研发。开发了基于GAN的超分辨率模型，视杯视盘分割（nnUNet），以及ONH量化分析算法。',
        impact: '构建了用于FDA/CE注册的正常眼数据库。算法每精准一分，患者离正确的诊断就更近一步。',
        techStack: ['Python', 'GAN', 'nnUNet', 'VTK', 'LabelMe'],
        highlights: ['FDA/CE 认证支持', '超分辨率重建'],
        reflection: '在医疗器械注册的严苛标准下，我深刻意识到，算法不仅仅是模型，更是对生命的沉重承诺。'
      },
      {
        id: 'p2',
        title: '脑机接口植入导航',
        description: '负责BCI植入机器人的视觉系统。在显微双目视觉中实现了10微米级别的精度，确保电极安全植入。',
        impact: '连接生物体与机械的边界。用极致的精度守护大脑这一人类最精密的器官。',
        techStack: ['C++', 'TensorRT', 'PyTorch', '双目视觉', 'LibTorch'],
        highlights: ['10微米级精度', '脑机接口'],
        reflection: '在人与机器的边缘工作，让我不禁思考：硬件的终点在哪里，“自我”的起点又在哪里？'
      },
      {
        id: 'p3',
        title: '牙科手术机器人',
        description: '牙科种植导航软件开发。基于VTK/ITK实现了上颌窦腔与下颌神经管的3D分割与路径规划。',
        impact: '将医生的直觉转化为数字化的精确。在此期间获得了2项发明专利，推动了手术规划的数字化。',
        techStack: ['C++', 'VTK', 'ITK', 'Visual Studio'],
        highlights: ['拥有2项专利', '手术导航'],
        reflection: '将抽象的CT数据转化为可导航的三维地图，教会了我如何将空间逻辑转化为物理世界的安全屏障。'
      },
      {
        id: 'p4',
        title: '量子点指纹识别系统',
        description: '本科毕业论文。基于Matlab全英文撰写，模拟了量子点的光学特性以用于唯一身份识别。',
        impact: '原点。这是我第一次用全英文完成的系统性研究，也是我逻辑之旅的开端。',
        techStack: ['Matlab', '英语学术写作', '系统模拟'],
        highlights: ['起源', '本科毕业论文'],
        reflection: '这是我的起点。那时候我第一次意识到，代码可以模拟物理世界那些错综复杂的纹理。'
      }
    ],
    movies: [
      {
        id: 'm1',
        title: '爱乐之城 (La La Land)',
        type: 'movie',
        quote: "献给那些做梦的人，哪怕他们看起来有点傻。",
        comment: "一部关于平衡野心与爱情的视觉交响曲。它提醒我，有时最符合逻辑的选择，往往需要付出最令人心碎的代价。",
        link: "https://movie.douban.com/subject/25934014/"
      },
      {
        id: 'm2',
        title: '燃烧女子的肖像',
        type: 'movie',
        quote: "所有的恋人都觉得自己是在发明些什么吗？",
        comment: "凝视、沉默、绘画。它捕捉到了人与人之间连接的转瞬即逝，这种微妙感是任何代码都无法捕捉的状态。",
        link: "https://movie.douban.com/subject/30327842/"
      },
      {
        id: 'm3',
        title: '银翼杀手 2049',
        type: 'movie',
        quote: "所有最好的记忆都是她的。",
        comment: "从《攻壳机动队》到《银翼杀手》，我痴迷于“意识”与“记忆”的迷思。是我们定义了记忆，还是记忆定义了我们？",
        link: "https://movie.douban.com/subject/10512661/"
      }
    ],
    books: [
      {
        id: 'b1',
        title: '夜航西飞',
        subtitle: '柏瑞尔·马卡姆',
        type: 'book',
        quote: "我学会了如果你必须离开一个地方……那就不要慢吞吞地离开。",
        comment: "马卡姆的文字像她的飞机一样高飞。这见证了一种没有被世俗约定俗成所束缚的人生。",
        link: "https://book.douban.com/subject/4843567/"
      },
      {
        id: 'b2',
        title: '刀锋',
        subtitle: '毛姆',
        type: 'book',
        quote: "一把刀的锋刃很不容易越过；因此智者说得救之道是困难的。",
        comment: "拉里在世俗中寻找意义的旅程，回响著我自己对工程“如何做”背后的“为什么”的追问。",
        link: "https://book.douban.com/subject/2035179/"
      },
      {
        id: 'b3',
        title: '明亮的夜晚',
        subtitle: '崔恩荣',
        type: 'book',
        quote: "即使不再相见，我也不会忘记你。",
        comment: "一场跨越代际的对话。它展示了过去不是等待归档的数据，而是编织进现在的鲜活丝线。",
        link: "https://book.douban.com/subject/36423984/"
      }
    ],
    series: [
      {
        id: 's1',
        title: '伦敦生活 (Fleabag)',
        type: 'series',
        quote: "It'll pass. (一切都会过去的)",
        comment: "生猛，打破第四面牆，就像灵魂的调试日志。它验证了身为人类那混乱、未经优化的现实。",
        link: "https://movie.douban.com/subject/26761328/"
      }
    ],
    podcasts: [
      {
        id: 'pc1',
        title: '岩中花述',
        type: 'podcast',
        subtitle: '播客',
        quote: "在裂缝中绽放。",
        comment: "探索女性韧性的对话。听这个节目就像在调试那些限制我们的社会代码。",
        link: "https://www.xiaoyuzhoufm.com/podcast/62457c1a2f6460980f7636e0"
      },
      {
        id: 'pc2',
        title: '回音谷',
        type: 'podcast',
        subtitle: '播客',
        quote: "灵魂的回响。",
        comment: "让思緒漂流的声音景观。在这个数字噪音时代必要的模拟信号休息。",
        link: "https://www.xiaoyuzhoufm.com/podcast/6130c25a83a059d91f16386c"
      }
    ],
    blogPosts: [
      {
        id: 'blog1',
        title: '算法偏见与人性的盲点',
        summary: '探讨AI在医疗领域的伦理影响，以及我们自身的偏见如何渗透进神经网络的权重之中。',
        tags: ['AI 伦理', '哲学']
      },
      {
        id: 'blog2',
        title: '当医疗影像遇见死亡哲学',
        summary: '从数据中凝视存在的边界。源于专业诊断经历的关于生死的个人反思。',
        tags: ['医疗影像', '生死']
      },
      {
        id: 'blog3',
        title: '代码的“美”存在吗？',
        summary: '一个工程师的审美笔记。将递归函数的优雅与十四行诗的结构进行类比。',
        tags: ['美学', '代码']
      }
    ],
    timeline: [
      {
        year: '2015',
        title: 'Hello, World',
        description: '写下了第一行 Python 代码。感受到了用逻辑掌控一个小宇宙的快感。'
      },
      {
        year: '2018',
        title: '第一次独自看电影',
        description: '在空蕩的影院看了《2001太空漫游》。意识到沉默比喧嚣更有力量。'
      },
      {
        year: '2020',
        title: '医疗影像项目',
        description: '我的代码第一次直接影响了病人的诊断。责任的重量沉淀下来。'
      }
    ]
  },
  'zh-TW': {
    tagline: "代碼的邏輯，感受的詩意",
    subTagline: "一個用代碼探索邏輯，用感知觸碰存在的工程師。",
    nav: {
      portal: "入口",
      lab: "理性的創造",
      intersection: "交匯處",
      sanctuary: "感性的漫遊",
      about: "關於我"
    },
    portal: {
      labTitle: "理性的創造",
      labDesc: "理性創造 & 深度洞察",
      labCta: "探索邏輯",
      sanctuaryTitle: "感性的漫遊",
      sanctuaryDesc: "情感漫遊 & 內心反思",
      sanctuaryCta: "自由漫步",
      intersectionBtn: "進入交匯處"
    },
    lab: {
      title: "理性的創造",
      subtitle: "// 當算法遇見現實\nSystem.init(logic, data, rigorous_testing);",
      coreSystems: "核心系統",
      arsenal: "技術武庫",
      searchLabTitle: "AI 概念實驗室",
      searchLabDesc: "利用 Google Search Grounding 探索實時靈感。",
      searchPlaceholder: "輸入問題 (例如：為我推薦一個網站域名)...",
      searchBtn: "運行實驗",
      searching: "邏輯演算中...",
      sources: "數據來源",
      domainPrompt: "為關於「代碼邏輯」與「生命詩意」的個人網站推薦富有創意的域名，並檢查其現代感。",
      impactLabel: "人文影響",
      architectureLabel: "架構技術",
      authorNoteLabel: "作者手記:",
      toolkitQuote: "工具是短暫的，邏輯是永恆的。語法在變，但解決問題的底層模式依然嚴謹有序。"
    },
    sanctuary: {
      title: "感性的漫遊",
      subtitle: "邏輯在此消融於感受。\n那些回響不絕的記憶片段。",
      cinemaLog: "光影筆記",
      readingCosmos: "文字宇宙",
      seriesLabel: "劇集敘事",
      podcastLabel: "聲音頻率",
      languageQuote: "「擁有第二門語言，就像擁有了第二個靈魂。」 —— 查理曼大帝"
    },
    intersection: {
      title: "交匯處",
      subtitle: "連接實驗室與精神花園的橋樑。\n二進制邏輯與模擬情感的綜合體。",
      readThought: "閱讀隨筆"
    },
    about: {
      title: "我是誰的一些線索",
      email: "發送郵件",
      linkedin: "領英鏈接",
      invite: "「如果這些頻率與你產生了共鳴，期待與你交流。」"
    },
    projects: [
      {
        id: 'p1',
        title: '眼科影像智能分析',
        description: '負責全流程算法研發。開發了基於GAN的超分辨率模型，視杯視盤分割（nnUNet），以及ONH量化分析算法。',
        impact: '構建了用於FDA/CE註冊的正常眼數據庫。算法每精準一分，患者離正確的診斷就更近一步。',
        techStack: ['Python', 'GAN', 'nnUNet', 'VTK', 'LabelMe'],
        highlights: ['FDA/CE 認證支持', '超分辨率重建'],
        reflection: '在醫療器械註冊的嚴苛標準下，我深刻意識到，算法不僅僅是模型，更是對生命的沉重承諾。'
      },
      {
        id: 'p2',
        title: '腦機接口植入導航',
        description: '負責BCI植入機器人的視覺系統。在顯微雙目視覺中實現了10微米級別的精度，確保電極安全植入。',
        impact: '連接生物體與機械的邊界。用極致的精度守護大腦這一人類最精密的器官。',
        techStack: ['C++', 'TensorRT', 'PyTorch', '雙目視覺', 'LibTorch'],
        highlights: ['10微米級精度', '腦機接口'],
        reflection: '在人與機器的邊緣工作，讓我不禁思考：硬件的終點在哪里，「自我」的起點又在哪里？'
      },
      {
        id: 'p3',
        title: '牙科手術機器人',
        description: '牙科種植導航軟件開發。基於VTK/ITK實現了上頜竇腔與下頜神經管的3D分割與路徑規劃。',
        impact: '將醫生的直覺轉化為數字化的精確。在此期間獲得了2項發明專利，推動了手術規劃的數字化。',
        techStack: ['C++', 'VTK', 'ITK', 'Visual Studio'],
        highlights: ['擁有2項專利', '手術導航'],
        reflection: '將抽象的CT數據轉化為可導航的三維地圖，教會了我如何將空間邏輯轉化為物理世界的安全屏障。'
      },
      {
        id: 'p4',
        title: '量子點指紋識別系統',
        description: '本科畢業論文。基於Matlab全英文撰寫，模擬了量子點的光學特性以用於唯一身份識別。',
        impact: '原點。這是我第一次用全英文完成的系統性研究，也是我邏輯之旅的開端。',
        techStack: ['Matlab', '英語學術寫作', '系統模擬'],
        highlights: ['起源', '本科畢業論文'],
        reflection: '這是我的起點。那時候我第一次意識到，代碼可以模擬物理世界那些錯綜複雜的紋理。'
      }
    ],
    movies: [
      {
        id: 'm1',
        title: '樂來越愛你 (La La Land)',
        type: 'movie',
        quote: "獻給那些做夢的人，哪怕他們看起來有點傻。",
        comment: "一部關於平衡野心與愛情的視覺交響曲。它提醒我，有時最符合邏輯的選擇，往往需要付出最令人心碎的代價。",
        link: "https://movie.douban.com/subject/25934014/"
      },
      {
        id: 'm2',
        title: '燃燒女子的畫像',
        type: 'movie',
        quote: "所有的戀人都覺得自己是在發明些什麼嗎？",
        comment: "凝視、沉默、繪畫。它捕捉到了人與人之間連接的轉瞬即逝，這種微妙感是任何代碼都無法捕捉的狀態。",
        link: "https://movie.douban.com/subject/30327842/"
      },
      {
        id: 'm3',
        title: '銀翼殺手 2049',
        type: 'movie',
        quote: "所有最好的記憶都是她的。",
        comment: "從《攻殼機動隊》到《銀翼殺手》，我痴迷於「意識」與「記憶」的迷思。是我們定義了記憶，還是記憶定義了我們？",
        link: "https://movie.douban.com/subject/10512661/"
      }
    ],
    books: [
      {
        id: 'b1',
        title: '夜航西飛',
        subtitle: '柏瑞爾·馬卡姆',
        type: 'book',
        quote: "我學會了如果你必須離開一個地方……那就不要慢吞吞地離開。",
        comment: "馬卡姆的文字像她的飛機一樣高飛。這見證了一種沒有被世俗約定俗成所束縛的人生。",
        link: "https://book.douban.com/subject/4843567/"
      },
      {
        id: 'b2',
        title: '刀鋒',
        subtitle: '毛姆',
        type: 'book',
        quote: "一把刀的鋒刃很不容易越過；因此智者說得救之道是困難的。",
        comment: "拉里在世俗中尋找意義的旅程，回響著我自己對工程「如何做」背後的「為什麼」的追問。",
        link: "https://book.douban.com/subject/2035179/"
      },
      {
        id: 'b3',
        title: '明亮的夜晚',
        subtitle: '崔恩榮',
        type: 'book',
        quote: "即使不再相見，我也不會忘記你。",
        comment: "一場跨越代際的對話。它展示了過去不是等待歸檔的數據，而是編織進現在的鮮活絲線。",
        link: "https://book.douban.com/subject/36423984/"
      }
    ],
    series: [
      {
        id: 's1',
        title: '倫敦生活 (Fleabag)',
        type: 'series',
        quote: "It'll pass. (一切都會過去的)",
        comment: "生猛，打破第四面牆，就像靈魂的調試日誌。它驗證了身為人類那混亂、未經優化的現實。",
        link: "https://movie.douban.com/subject/26761328/"
      }
    ],
    podcasts: [
      {
        id: 'pc1',
        title: '岩中花述',
        type: 'podcast',
        subtitle: '播客',
        quote: "在裂縫中綻放。",
        comment: "探索女性韌性的對話。聽這個節目就像在調試那些限制我們的社會代碼。",
        link: "https://www.xiaoyuzhoufm.com/podcast/62457c1a2f6460980f7636e0"
      },
      {
        id: 'pc2',
        title: '回音谷',
        type: 'podcast',
        subtitle: '播客',
        quote: "靈魂的回響。",
        comment: "讓思緒漂流的聲音景觀。在這個數字噪音時代必要的模擬信號休息。",
        link: "https://www.xiaoyuzhoufm.com/podcast/6130c25a83a059d91f16386c"
      }
    ],
    blogPosts: [
      {
        id: 'blog1',
        title: '算法偏見與人性的盲點',
        summary: '探討AI在醫療領域的倫理影響，以及我們自身的偏見如何滲透進神經網絡的權重之中。',
        tags: ['AI 倫理', '哲學']
      },
      {
        id: 'blog2',
        title: '當醫療影像遇見死亡哲學',
        summary: '從數據中凝視存在的邊界。源於專業診斷經歷的關於生死的個人反思。',
        tags: ['醫療影像', '生死']
      },
      {
        id: 'blog3',
        title: '代碼的「美」存在嗎？',
        summary: '一個工程師的審美筆記。將遞歸函數的優雅與十四行詩的結構進行類比。',
        tags: ['美學', '代碼']
      }
    ],
    timeline: [
      {
        year: '2015',
        title: 'Hello, World',
        description: '寫下了第一行 Python 代碼。感受到了用邏輯掌控一個小宇宙的快感。'
      },
      {
        year: '2018',
        title: '第一次獨自看電影',
        description: '在空蕩的影院看了《2001太空漫遊》。意識到沉默比喧囂更有力量。'
      },
      {
        year: '2020',
        title: '醫療影像項目',
        description: '我的代碼第一次直接影響了病人的診斷。責任的重量沉澱下來。'
      }
    ]
  },
  ja: {
    tagline: "コードの論理、存在の詩情",
    subTagline: "コードで論理を探求し、感性で存在に触れるエンジニア。",
    nav: {
      portal: "ポータル",
      lab: "理性の創造",
      intersection: "交差点",
      sanctuary: "感性の回遊",
      about: "私について"
    },
    portal: {
      labTitle: "理性の創造",
      labDesc: "論理的な創造と洞察",
      labCta: "論理を探求",
      sanctuaryTitle: "感性の回遊",
      sanctuaryDesc: "感情の彷徨と内省",
      sanctuaryCta: "自由に彷徨う",
      intersectionBtn: "交差点へ"
    },
    lab: {
      title: "理性の創造",
      subtitle: "// アルゴリズムが現実に巡り会う場所\nSystem.init(logic, data, rigorous_testing);",
      coreSystems: "コアシステム",
      arsenal: "技術の宝庫",
      searchLabTitle: "AI コンセプト・ラボ",
      searchLabDesc: "Google Search Groundingを使って、リアルタイムのインスピレーションを探る実験。",
      searchPlaceholder: "質問を入力 (例: おすすめのドメイン名を教えて)...",
      searchBtn: "実験開始",
      searching: "論理演算中...",
      sources: "データソース",
      domainPrompt: "「コードの論理」と「生命の詩情」をテーマにした個人サイトのために、創造的でモダンなドメイン名を提案してください。",
      impactLabel: "社会的インパクト",
      architectureLabel: "アーキテクチャ",
      authorNoteLabel: "作者のメモ:",
      toolkitQuote: "ツールは一時的ですが、論理は永遠です。構文は変わっても、問題解決の根底にあるパターンは厳格な秩序を保ちます。"
    },
    sanctuary: {
      title: "感性の回遊",
      subtitle: "論理が感情へと溶けゆく場所。\nいつまでも響く記憶の断片。",
      cinemaLog: "シネマログ",
      readingCosmos: "読書宇宙",
      seriesLabel: "エピソードの物語",
      podcastLabel: "音声周波数",
      languageQuote: "「別の言語を持つことは、第二の魂を持つことである。」— カール大帝"
    },
    intersection: {
      title: "交差点",
      subtitle: "実験室と精神の庭をつなぐ架け橋。\n二進法の論理とアナログな感情の融合。",
      readThought: "思考を読む"
    },
    about: {
      title: "私が誰であるかへの手がかり",
      email: "メールを送る",
      linkedin: "LinkedIn",
      invite: "「もしこれらの周波数があなたと共鳴するなら、ぜひ交流しましょう。」"
    },
    projects: [
      {
        id: 'p1',
        title: '眼科画像診断AI',
        description: 'アルゴリズムの研究開発から実装までを担当。GANを用いた超解像モデル、nnUNetによる視神経乳頭分割、ONH定量分析などを開発。',
        impact: 'FDA/CE認証用の正常眼データベースを構築。アルゴリズムの精度が向上するたび、患者は正確な診断に一歩近づきます。',
        techStack: ['Python', 'GAN', 'nnUNet', 'VTK', 'LabelMe'],
        highlights: ['FDA/CE 準拠', '超解像'],
        reflection: '医療機器登録の厳しい基準の下で、アルゴリズムは単なるモデルではなく、生命への重い誓いであると痛感しました。'
      },
      {
        id: 'p2',
        title: 'BCI インプラントロボットナビゲーション',
        description: '神経インターフェースロボットの視覚システムを担当。顕微鏡下のステレオビジョンで10ミクロンレベルの精度を実現し、安全な電極埋め込みを支援。',
        impact: '生物と機械の境界を繋ぐ。脳という最も繊細な器官を、究極の精度で守るために。',
        techStack: ['C++', 'TensorRT', 'PyTorch', 'Stereo Vision', 'LibTorch'],
        highlights: ['10ミクロン精度', 'BCI'],
        reflection: '人間と機械の境界線で働くことは、ハードウェアの終わりと「自己」の始まりがどこにあるのかを問いかけさせます。'
      },
      {
        id: 'p3',
        title: '歯科手術ロボティクス',
        description: '歯科インプラント用3Dナビゲーションソフトウェアの開発。VTK/ITKを使用して上顎洞と下顎神経管のセグメンテーションを実現。',
        impact: '外科医の直感をデジタルな精度へ変換。手術計画のデジタル化を推進し、2つの特許を取得。',
        techStack: ['C++', 'VTK', 'ITK', 'Visual Studio'],
        highlights: ['特許2件取得', '手術ナビゲーション'],
        reflection: '抽象的なCTデータをナビゲート可能な3Dマップに変えることで、空間論理を物理的な安全性へと変換する責任を学びました。'
      },
      {
        id: 'p4',
        title: '量子ドット指紋識別システム',
        description: '学部卒業論文。量子ドットの光学的特性をシミュレーションし、固有ID識別システムに応用。Matlabと英語で執筆。',
        impact: '原点。英語とMatlabで完遂した最初のシステム研究であり、私の論理の旅の始まりです。',
        techStack: ['Matlab', '英語論文執筆', 'シミュレーション'],
        highlights: ['起源', '学部卒業論文'],
        reflection: 'ここが私のスタート地点でした。コードが物理世界の複雑なテクスチャをシミュレートできると初めて気づいた瞬間です。'
      }
    ],
    movies: [
      {
        id: 'm1',
        title: 'ラ・ラ・ランド',
        type: 'movie',
        quote: "夢を追いかける人たちに乾杯。たとえ愚かに見えても。",
        comment: "野心と愛のバランスを描いた視覚的シンフォニー。最も論理的な選択が、時に最も切ない犠牲を伴うことを思い出させてくれます。",
        link: "https://www.imdb.com/title/tt3783958/"
      },
      {
        id: 'm2',
        title: '燃ゆる女の肖像',
        type: 'movie',
        quote: "恋人たちは皆、何かを発明していると感じるものかしら？",
        comment: "眼差し、沈黙、絵画。コードでは捉えきれない、人間関係の儚い本質を捉えています。",
        link: "https://www.imdb.com/title/tt8613070/"
      },
      {
        id: 'm3',
        title: 'ブレードランナー 2049',
        type: 'movie',
        quote: "最高に素敵な思い出は、みんな彼女のもの。",
        comment: "「意識」と「記憶」という神話に取り憑かれています。私たちが記憶を定義するのか、記憶が私たちを定義するのでしょうか？",
        link: "https://www.imdb.com/title/tt1856101/"
      }
    ],
    books: [
      {
        id: 'b1',
        title: '夜間飛行 (West with the Night)',
        subtitle: 'ベリル・マーカム',
        type: 'book',
        quote: "場所を去らなければならないのなら... 決してゆっくり去ってはいけないと学んだ。",
        comment: "マーカムの散文は彼女の飛行機のように高く飛翔します。慣習という安全ネットなしに生きる人生の証。",
        link: "https://www.goodreads.com/book/show/1624.West_with_the_Night"
      },
      {
        id: 'b2',
        title: '剃刀の刃',
        subtitle: 'サマセット・モーム',
        type: 'book',
        quote: "剃刀の刃を渡るのは難しい。故に賢者は言う、救済への道は険しいと。",
        comment: "日常の中で意味を探求するラリーの旅は、工学の「How」の背後にある「Why」を探す私自身の旅と重なります。",
        link: "https://www.goodreads.com/book/show/31196.The_Razor_s_Edge"
      },
      {
        id: 'b3',
        title: '明るい夜',
        subtitle: 'チェ・ウニョン',
        type: 'book',
        quote: "二度と会えなくても、私は決してあなたを忘れません。",
        comment: "世代を超えた対話。過去はアーカイブされるデータではなく、現在に織り込まれた生きた糸であることを示しています。",
        link: "https://www.goodreads.com/book/show/60097434-bright-night"
      }
    ],
    series: [
      {
        id: 's1',
        title: 'Fleabag フリーバッグ',
        type: 'series',
        quote: "It'll pass. (そのうち過ぎ去るわ)",
        comment: "生のまま、魂のデバッグログのように第四の壁を破る。最適化されていない、混沌とした人間らしさを肯定してくれます。",
        link: "https://www.imdb.com/title/tt5687612/"
      }
    ],
    podcasts: [
      {
        id: 'pc1',
        title: '岩中花述',
        type: 'podcast',
        subtitle: 'Podcast',
        quote: "岩の裂け目で咲く。",
        comment: "女性のレジリエンスを探求する対話。これを聴くことは、私たちを縛る社会的なコードをデバッグするようなものです。",
        link: "https://podcasts.apple.com/cn/podcast/%E5%B2%A9%E4%B8%AD%E8%8A%B1%E8%BF%B0/id1617260565"
      },
      {
        id: 'pc2',
        title: '回音谷',
        type: 'podcast',
        subtitle: 'Podcast',
        quote: "魂の残響。",
        comment: "思考を漂わせるサウンドスケープ。デジタルノイズの時代に必要な、アナログ信号の休息。",
        link: "https://www.xiaoyuzhoufm.com/podcast/6130c25a83a059d91f16386c"
      }
    ],
    blogPosts: [
      {
        id: 'blog1',
        title: 'アルゴリズムのバイアスと人間の死角',
        summary: '医療AIにおける倫理的影響と、私たち自身の偏見がどのようにニューラルネットワークの重みに浸透するかを探求します。',
        tags: ['AI 倫理', '哲学']
      },
      {
        id: 'blog2',
        title: '医療画像が死の哲学に出会うとき',
        summary: 'データを通して存在の境界を見つめる。専門的な診断経験から導き出された、生と死に関する個人的な考察。',
        tags: ['医療画像', '生と死']
      },
      {
        id: 'blog3',
        title: 'コードの「美」は存在するか？',
        summary: 'エンジニアの美的メモ。再帰関数の優雅さをソネットの構造と比較する。',
        tags: ['美学', 'コード']
      }
    ],
    timeline: [
      {
        year: '2015',
        title: 'Hello, World',
        description: '初めてPythonのコードを書いた日。論理で小さな宇宙をコントロールするスリルを感じました。'
      },
      {
        year: '2018',
        title: '初めての単独映画鑑賞',
        description: '空っぽの映画館で「2001年宇宙の旅」を観ました。静寂は騒音よりも雄弁であることを知りました。'
      },
      {
        year: '2020',
        title: '医療画像プロジェクト',
        description: '私のコードが初めて患者の診断に直接影響を与えました。責任の重さを実感しました。'
      }
    ]
  },
  de: {
    tagline: "Die Logik des Codes, die Poesie des Seins",
    subTagline: "Ein Ingenieur, der Logik durch Code und Existenz durch Wahrnehmung erforscht.",
    nav: {
      portal: "Portal",
      lab: "Das Labor",
      intersection: "Schnittpunkt",
      sanctuary: "Zufluchtsort",
      about: "Über mich"
    },
    portal: {
      labTitle: "Das Labor",
      labDesc: "Rationale Schöpfung & Einsichten",
      labCta: "Logik erforschen",
      sanctuaryTitle: "Der Zufluchtsort",
      sanctuaryDesc: "Emotionales Wandern & Reflexion",
      sanctuaryCta: "Frei wandern",
      intersectionBtn: "Den Schnittpunkt betreten"
    },
    lab: {
      title: "Das Labor",
      subtitle: "// Wo Algorithmen auf Realität treffen\nSystem.init(logic, data, rigorous_testing);",
      coreSystems: "Kernsysteme",
      arsenal: "Arsenal",
      searchLabTitle: "KI-Konzeptlabor",
      searchLabDesc: "Experimentieren Sie mit Google Search Grounding, um aktuelle Inspiration zu finden.",
      searchPlaceholder: "Stellen Sie eine Frage (z.B. Ideen für Domainnamen)...",
      searchBtn: "Experiment starten",
      searching: "Verarbeite Logik...",
      sources: "Datenquellen",
      domainPrompt: "Finden Sie kreative Domainnamen für eine Portfolio-Website über 'Logik' und 'Poesie' und prüfen Sie, ob sie modern klingen.",
      impactLabel: "Menschlicher Einfluss",
      architectureLabel: "Architektur",
      authorNoteLabel: "Anmerkung des Autors:",
      toolkitQuote: "Werkzeuge sind vergänglich. Logik ist ewig. Die Syntax ändert sich, aber die zugrundeliegenden Muster der Problemlösung bleiben streng geordnet."
    },
    sanctuary: {
      title: "Der Zufluchtsort",
      subtitle: "Wo Logik in Gefühl übergeht.\nEine Sammlung nachhallender Echos.",
      cinemaLog: "Kino-Logbuch",
      readingCosmos: "Lese-Kosmos",
      seriesLabel: "Episodische Erzählungen",
      podcastLabel: "Audio-Frequenzen",
      languageQuote: "„Eine andere Sprache zu haben, bedeutet, eine zweite Seele zu besitzen.“ — Karl der Große"
    },
    intersection: {
      title: "Der Schnittpunkt",
      subtitle: "Die Brücke zwischen dem Labor und dem Zufluchtsort.\nSynthese aus binärer Logik und analogem Gefühl.",
      readThought: "Gedanken lesen"
    },
    about: {
      title: "Hinweise darauf, wer ich bin",
      email: "E-Mail senden",
      linkedin: "LinkedIn",
      invite: "„Wenn diese Frequenzen bei Ihnen Resonanz finden, lade ich Sie zum Austausch ein.“"
    },
    projects: [
      {
        id: 'p1',
        title: 'Intelligente ophthalmologische Diagnose',
        description: 'KI-Lösung für Netzhautbildgebung. Implementierung von GAN-basierter Superauflösung, nnUNet für Segmentierung und quantitative ONH-Analyse.',
        impact: 'Aufbau der FDA/CE-konformen Datenbank für normale Augen. Jedes geklärte Pixel bringt einen Patienten einer präzisen Diagnose näher.',
        techStack: ['Python', 'GAN', 'nnUNet', 'VTK', 'LabelMe'],
        highlights: ['FDA/CE Konformität', 'Superauflösung'],
        reflection: 'Unter den strengen Standards der Medizinproduktezulassung erkannte ich, dass ein Algorithmus nicht nur ein Modell ist, sondern eine Verpflichtung gegenüber dem Leben.'
      },
      {
        id: 'p2',
        title: 'BCI-Implantat-Roboter-Navigation',
        description: 'Visionssystem für neuronale Schnittstellenroboter. Erreichte 10-Mikron-Präzision in der Stereo-Mikroskopie für sichere Elektrodenimplantation.',
        impact: 'Die Brücke zwischen dem Biologischen und dem Mechanischen. Sicherstellung, dass die Schnittstelle zum Gehirn mit absoluter Präzision behandelt wird.',
        techStack: ['C++', 'TensorRT', 'PyTorch', 'Stereo Vision', 'LibTorch'],
        highlights: ['10µm Präzision', 'Brain-Computer Interface'],
        reflection: 'Die Arbeit an der Grenze zwischen Mensch und Maschine ließ mich fragen: Wo endet die Hardware und wo beginnt das „Selbst“?'
      },
      {
        id: 'p3',
        title: 'Zahnchirurgische Robotik',
        description: '3D-Navigationssoftware für Zahnimplantate. Entwicklung von Algorithmen zur Segmentierung von Kieferhöhle und Unterkiefernerve mittels VTK/ITK.',
        impact: 'Digitalisierung der Intuition des Chirurgen. Zwei Patente wurden für diese Innovationen in der Operationsplanung erteilt.',
        techStack: ['C++', 'VTK', 'ITK', 'Visual Studio'],
        highlights: ['2 Patente', 'Chirurgische Navigation'],
        reflection: 'Die Umwandlung abstrakter CT-Daten in eine navigierbare 3D-Karte lehrte mich die Verantwortung, räumliche Logik in physische Sicherheit zu übersetzen.'
      },
      {
        id: 'p4',
        title: 'Quantenpunkt-Fingerabdrucksystem',
        description: 'Bachelorarbeit. Simulation optischer Eigenschaften von Quantenpunkten für eindeutige Identifikationssysteme. Verfasst in Englisch und Matlab.',
        impact: 'Die Genesis. Ein System, das vollständig in Englisch und Matlab geschrieben wurde und den Beginn meiner Reise markierte.',
        techStack: ['Matlab', 'Akademisches Englisch', 'Simulation'],
        highlights: ['Der Ursprung', 'Bachelorarbeit'],
        reflection: 'Mein Startpunkt. Hier erkannte ich zum ersten Mal, dass Code die komplexen Texturen der physischen Welt simulieren kann.'
      }
    ],
    movies: [
      {
        id: 'm1',
        title: 'La La Land',
        type: 'movie',
        quote: "Auf die, die träumen, so töricht sie auch scheinen mögen.",
        comment: "Eine visuelle Symphonie über das Gleichgewicht von Ehrgeiz und Liebe. Sie erinnert mich daran, dass die logischste Wahl manchmal das herzzerreißendste Opfer erfordert.",
        link: "https://www.imdb.com/title/tt3783958/"
      },
      {
        id: 'm2',
        title: 'Porträt einer jungen Frau in Flammen',
        type: 'movie',
        quote: "Glauben alle Liebenden, dass sie etwas erfinden?",
        comment: "Der Blick, die Stille, das Gemälde. Es fängt die flüchtige Natur von Verbindungen besser ein, als jede Zeile Code einen Zustand erfassen könnte.",
        link: "https://www.imdb.com/title/tt8613070/"
      },
      {
        id: 'm3',
        title: 'Blade Runner 2049',
        type: 'movie',
        quote: "All die besten Erinnerungen gehören ihr.",
        comment: "Ich bin besessen vom Mythos des „Bewusstseins“ und der „Erinnerung“. Definieren wir unsere Erinnerungen, oder definieren sie uns?",
        link: "https://www.imdb.com/title/tt1856101/"
      }
    ],
    books: [
      {
        id: 'b1',
        title: 'West with the Night',
        subtitle: 'Beryl Markham',
        type: 'book',
        quote: "Ich habe gelernt, dass wenn man einen Ort verlassen muss... man es auf jede Weise tun sollte, nur nicht langsam.",
        comment: "Markhams Prosa fliegt so hoch wie ihr Flugzeug. Ein Testament für ein Leben ohne das Sicherheitsnetz der Konvention.",
        link: "https://www.goodreads.com/book/show/1624.West_with_the_Night"
      },
      {
        id: 'b2',
        title: 'Auf Messers Schneide',
        subtitle: 'W. Somerset Maugham',
        type: 'book',
        quote: "Scharf ist die Schneide des Messers, schwer ist sie zu überschreiten; darum ist der Weg zur Erlösung schwierig, sagen die Weisen.",
        comment: "Larrys Suche nach Sinn im Alltäglichen spiegelt meine eigene Suche nach dem „Warum“ hinter dem „Wie“ des Ingenieurwesens wider.",
        link: "https://www.goodreads.com/book/show/31196.The_Razor_s_Edge"
      },
      {
        id: 'b3',
        title: 'Helle Nacht',
        subtitle: 'Choi Eun-young',
        type: 'book',
        quote: "Auch wenn wir uns nicht wiedersehen, werde ich dich nie vergessen.",
        comment: "Ein Dialog zwischen Generationen. Er zeigt, dass die Vergangenheit keine zu archivierenden Daten sind, sondern ein lebendiger Faden, der in die Gegenwart gewoben ist.",
        link: "https://www.goodreads.com/book/show/60097434-bright-night"
      }
    ],
    series: [
      {
        id: 's1',
        title: 'Fleabag',
        type: 'series',
        quote: "Es geht vorbei.",
        comment: "Roh, die vierte Wand durchbrechend wie ein Debug-Protokoll der Seele. Es validiert die chaotische, nicht optimierte Realität des Menschseins.",
        link: "https://www.imdb.com/title/tt5687612/"
      }
    ],
    podcasts: [
      {
        id: 'pc1',
        title: 'Stories of Flowers in the Rock',
        type: 'podcast',
        subtitle: 'Yan Zhong Hua Shu',
        quote: "In den Rissen blühen.",
        comment: "Gespräche, die die Resilienz von Frauen erforschen. Das zu hören ist wie das Debuggen des gesellschaftlichen Codes, der uns einschränkt.",
        link: "https://podcasts.apple.com/cn/podcast/%E5%B2%A9%E4%B8%AD%E8%8A%B1%E8%BF%B0/id1617260565"
      },
      {
        id: 'pc2',
        title: 'Valley of Echoes',
        type: 'podcast',
        subtitle: 'Hui Yin Gu',
        quote: "Echos der Seele.",
        comment: "Klanglandschaften, die Gedanken treiben lassen. Eine notwendige analoge Pause vom digitalen Lärm.",
        link: "https://www.xiaoyuzhoufm.com/podcast/6130c25a83a059d91f16386c"
      }
    ],
    blogPosts: [
      {
        id: 'blog1',
        title: 'Algorithmische Vorurteile & blinde Flecken',
        summary: 'Erforschung der ethischen Implikationen von KI im Gesundheitswesen und wie unsere eigenen Vorurteile in die Gewichtungen neuronaler Netze sickern.',
        tags: ['KI Ethik', 'Philosophie']
      },
      {
        id: 'blog2',
        title: 'Wenn medizinische Bildgebung auf die Philosophie des Todes trifft',
        summary: 'Durch Daten auf die Grenze der Existenz starren. Eine persönliche Reflexion über Sterblichkeit, abgeleitet aus professioneller Diagnose.',
        tags: ['Medizinische Bildgebung', 'Leben & Tod']
      },
      {
        id: 'blog3',
        title: 'Existiert die „Schönheit“ von Code?',
        summary: 'Ästhetische Notizen eines Ingenieurs. Vergleich der Eleganz einer rekursiven Funktion mit der Struktur eines Sonetts.',
        tags: ['Ästhetik', 'Code']
      }
    ],
    timeline: [
      {
        year: '2015',
        title: 'Hallo Welt',
        description: 'Schrieb meine erste Zeile Python. Spürte den Nervenkitzel, ein kleines Universum mit Logik zu kontrollieren.'
      },
      {
        year: '2018',
        title: 'Erstes Kinoerlebnis allein',
        description: 'Sah „2001: Odyssee im Weltraum“ in einem leeren Theater. Erkannte, dass Stille lauter spricht als Lärm.'
      },
      {
        year: '2020',
        title: 'Das medizinische Bildgebungsprojekt',
        description: 'Zum ersten Mal beeinflusste mein Code direkt die Diagnose eines Patienten. Die Last der Verantwortung stellte sich ein.'
      }
    ]
  },
  fr: {
    tagline: "La Logique du Code, La Poésie de l'Être",
    subTagline: "Un ingénieur explorant la logique à travers le code, et l'existence à travers la perception.",
    nav: {
      portal: "Portail",
      lab: "Le Labo",
      intersection: "Intersection",
      sanctuary: "Sanctuaire",
      about: "À propos"
    },
    portal: {
      labTitle: "Le Labo",
      labDesc: "Création Rationnelle & Insights",
      labCta: "Explorer la Logique",
      sanctuaryTitle: "Le Sanctuaire",
      sanctuaryDesc: "Errance Émotionnelle & Réflexion",
      sanctuaryCta: "Errer Librement",
      intersectionBtn: "Entrer dans l'Intersection"
    },
    lab: {
      title: "Le Labo",
      subtitle: "// où les algorithmes rencontrent la réalité\nSystem.init(logic, data, rigorous_testing);",
      coreSystems: "Systèmes Centraux",
      arsenal: "Arsenal",
      searchLabTitle: "Labo de Concepts IA",
      searchLabDesc: "Expérimentez avec Google Search Grounding pour trouver une inspiration actualisée.",
      searchPlaceholder: "Posez une question (ex: idées de nom de domaine)...",
      searchBtn: "Lancer l'Expérience",
      searching: "Traitement Logique...",
      sources: "Sources de Données",
      domainPrompt: "Trouvez des noms de domaine créatifs pour un site portfolio sur la 'Logique' et la 'Poésie', vérifiez s'ils sonnent modernes.",
      impactLabel: "Impact Humain",
      architectureLabel: "Architecture",
      authorNoteLabel: "Note de l'Auteur :",
      toolkitQuote: "Les outils sont éphémères. La logique est éternelle. La syntaxe change, mais les modèles sous-jacents de résolution de problèmes restent strictement ordonnés."
    },
    sanctuary: {
      title: "Le Sanctuaire",
      subtitle: "Là où la logique se dissout dans le sentiment.\nUne collection d'échos persistants.",
      cinemaLog: "Journal Cinéma",
      readingCosmos: "Cosmos de Lecture",
      seriesLabel: "Récits Épisodiques",
      podcastLabel: "Fréquences Audio",
      languageQuote: "« Avoir une autre langue, c'est posséder une deuxième âme. » — Charlemagne"
    },
    intersection: {
      title: "L'Intersection",
      subtitle: "Le pont entre le laboratoire et le sanctuaire.\nSynthèse de logique binaire et de sentiment analogique.",
      readThought: "Lire la Pensée"
    },
    about: {
      title: "Indices sur qui je suis",
      email: "M'envoyer un email",
      linkedin: "LinkedIn",
      invite: "« Si ces fréquences résonnent avec vous, je vous invite à échanger. »"
    },
    projects: [
      {
        id: 'p1',
        title: 'Diagnostic Ophtalmique Intelligent',
        description: 'Solution IA pour l\'imagerie rétinienne. Implémentation de la super-résolution basée sur GAN, nnUNet pour la segmentation et analyse quantitative ONH.',
        impact: 'Construction de la base de données d\'yeux normaux conforme FDA/CE. Chaque pixel clarifié rapproche un patient d\'un diagnostic précis.',
        techStack: ['Python', 'GAN', 'nnUNet', 'VTK', 'LabelMe'],
        highlights: ['Conformité FDA/CE', 'Super-résolution'],
        reflection: 'J\'ai réalisé que sous les normes strictes de l\'enregistrement des dispositifs médicaux, un algorithme n\'est pas juste un modèle, mais un engagement envers la vie.'
      },
      {
        id: 'p2',
        title: 'Navigation Robotique Implant BCI',
        description: 'Système de vision pour robot d\'interface neurale. Atteinte d\'une précision de 10 microns en vision stéréo microscopique pour une implantation sûre.',
        impact: 'Relier le biologique et le mécanique. S\'assurer que l\'interface avec le cerveau est manipulée avec une précision absolue.',
        techStack: ['C++', 'TensorRT', 'PyTorch', 'Stereo Vision', 'LibTorch'],
        highlights: ['Précision 10µm', 'Interface Cerveau-Machine'],
        reflection: 'Travailler à la frontière de l\'humain et de la machine m\'a fait questionner : où finit le matériel et où commence le « soi » ?'
      },
      {
        id: 'p3',
        title: 'Robotique Chirurgicale Dentaire',
        description: 'Logiciel de navigation 3D pour implants dentaires. Développement d\'algorithmes pour la segmentation du sinus maxillaire et du nerf mandibulaire via VTK/ITK.',
        impact: 'Numériser l\'intuition du chirurgien. Deux brevets ont été obtenus pour ces innovations en planification chirurgicale.',
        techStack: ['C++', 'VTK', 'ITK', 'Visual Studio'],
        highlights: ['2 Brevets', 'Navigation Chirurgicale'],
        reflection: 'Transformer des données CT abstraites en une carte 3D navigable m\'a appris la responsabilité de traduire la logique spatiale en sécurité physique.'
      },
      {
        id: 'p4',
        title: 'Système d\'Empreinte Digitale à Points Quantiques',
        description: 'Thèse de premier cycle. Simulation des caractéristiques optiques des points quantiques pour des systèmes d\'identification uniques. Écrit en anglais et Matlab.',
        impact: 'La Genèse. Un système écrit entièrement en anglais et Matlab qui a marqué le début de mon voyage.',
        techStack: ['Matlab', 'Anglais Académique', 'Simulation'],
        highlights: ['L\'Origine', 'Thèse de premier cycle'],
        reflection: 'Mon point de départ. C\'est là que j\'ai réalisé pour la première fois que le code pouvait simuler les textures complexes du monde physique.'
      }
    ],
    movies: [
      {
        id: 'm1',
        title: 'La La Land',
        type: 'movie',
        quote: "À ceux qui rêvent, aussi fous qu'ils puissent paraître.",
        comment: "Une symphonie visuelle sur l'équilibre entre ambition et amour. Elle me rappelle que parfois, le choix le plus logique exige le sacrifice le plus déchirant.",
        link: "https://www.imdb.com/title/tt3783958/"
      },
      {
        id: 'm2',
        title: 'Portrait de la jeune fille en feu',
        type: 'movie',
        quote: "Tous les amants ont-ils l'impression d'inventer quelque chose ?",
        comment: "Le regard, le silence, la peinture. Cela capture la nature éphémère de la connexion mieux que n'importe quelle ligne de code ne pourrait capturer un état.",
        link: "https://www.imdb.com/title/tt8613070/"
      },
      {
        id: 'm3',
        title: 'Blade Runner 2049',
        type: 'movie',
        quote: "Tous les meilleurs souvenirs sont les siens.",
        comment: "Je suis obsédé par le mythe de la « conscience » et de la « mémoire ». Définissons-nous nos souvenirs, ou nous définissent-ils ?",
        link: "https://www.imdb.com/title/tt1856101/"
      }
    ],
    books: [
      {
        id: 'b1',
        title: 'Vers l\'Ouest avec la nuit',
        subtitle: 'Beryl Markham',
        type: 'book',
        quote: "J'ai appris que si vous devez quitter un endroit... quittez-le de n'importe quelle façon sauf lentement.",
        comment: "La prose de Markham vole aussi haut que son avion. Un testament d'une vie vécue sans le filet de sécurité de la convention.",
        link: "https://www.goodreads.com/book/show/1624.West_with_the_Night"
      },
      {
        id: 'b2',
        title: 'Le Fil du rasoir',
        subtitle: 'W. Somerset Maugham',
        type: 'book',
        quote: "Le fil du rasoir est difficile à franchir ; ainsi les sages disent que le chemin du Salut est ardu.",
        comment: "La quête de sens de Larry au milieu du banal fait écho à ma propre recherche du « pourquoi » derrière le « comment » de l'ingénierie.",
        link: "https://www.goodreads.com/book/show/31196.The_Razor_s_Edge"
      },
      {
        id: 'b3',
        title: 'Bright Night',
        subtitle: 'Choi Eun-young',
        type: 'book',
        quote: "Même si nous ne nous revoyons pas, je ne t'oublierai jamais.",
        comment: "Un dialogue intergénérationnel. Il montre comment le passé n'est pas une donnée à archiver, mais un fil vivant tissé dans le présent.",
        link: "https://www.goodreads.com/book/show/60097434-bright-night"
      }
    ],
    series: [
      {
        id: 's1',
        title: 'Fleabag',
        type: 'series',
        quote: "Ça passera.",
        comment: "Brut, brisant le quatrième mur comme un journal de débogage de l'âme. Cela valide la réalité désordonnée et non optimisée d'être humain.",
        link: "https://www.imdb.com/title/tt5687612/"
      }
    ],
    podcasts: [
      {
        id: 'pc1',
        title: 'Stories of Flowers in the Rock',
        type: 'podcast',
        subtitle: 'Yan Zhong Hua Shu',
        quote: "Fleurir dans les fissures.",
        comment: "Conversations explorant la résilience des femmes. Écouter cela est comme déboguer le code sociétal qui nous contraint.",
        link: "https://podcasts.apple.com/cn/podcast/%E5%B2%A9%E4%B8%AD%E8%8A%B1%E8%BF%B0/id1617260565"
      },
      {
        id: 'pc2',
        title: 'Valley of Echoes',
        type: 'podcast',
        subtitle: 'Hui Yin Gu',
        quote: "Échos de l'âme.",
        comment: "Des paysages sonores qui permettent aux pensées de dériver. Une pause analogique nécessaire du bruit numérique.",
        link: "https://www.xiaoyuzhoufm.com/podcast/6130c25a83a059d91f16386c"
      }
    ],
    blogPosts: [
      {
        id: 'blog1',
        title: 'Biais Algorithmique & Angles Morts Humains',
        summary: 'Explorer les implications éthiques de l\'IA dans la santé et comment nos propres préjugés s\'infiltrent dans les poids des réseaux neuronaux.',
        tags: ['Éthique IA', 'Philosophie']
      },
      {
        id: 'blog2',
        title: 'Quand l\'Imagerie Médicale Rencontre la Philosophie de la Mort',
        summary: 'Regarder la frontière de l\'existence à travers les données. Une réflexion personnelle sur la mortalité dérivée du diagnostic professionnel.',
        tags: ['Imagerie Médicale', 'Vie & Mort']
      },
      {
        id: 'blog3',
        title: 'La « Beauté » du Code Existe-t-elle ?',
        summary: 'Notes esthétiques d\'un ingénieur. Comparer l\'élégance d\'une fonction récursive à la structure d\'un sonnet.',
        tags: ['Esthétique', 'Code']
      }
    ],
    timeline: [
      {
        year: '2015',
        title: 'Bonjour Monde',
        description: 'Écrit ma première ligne de Python. Ressenti le frisson de contrôler un petit univers avec la logique.'
      },
      {
        year: '2018',
        title: 'Première Expérience Cinéma Seule',
        description: 'Regardé « 2001 : L\'Odyssée de l\'espace » dans une salle vide. Réalisé que le silence parle plus fort que le bruit.'
      },
      {
        year: '2020',
        title: 'Le Projet d\'Imagerie Médicale',
        description: 'Première fois que mon code a directement influencé le diagnostic d\'un patient. Le poids de la responsabilité s\'est installé.'
      }
    ]
  }
};
