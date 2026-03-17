// ============ 唐朝英雄数据 ============

export interface HeroData {
  id: string;
  name: string;
  title: string;
  emoji: string;
  color: string;
  bgGradient: [string, string];
  skills: string[];
  story: string;
  quote: string;
  funFact: string;
}

export const TANG_HEROES: HeroData[] = [
  {
    id: "liyuan",
    name: "李渊",
    title: "唐朝创始人",
    emoji: "👑",
    color: "#FFD700",
    bgGradient: ["#1a0533", "#4a0080"],
    skills: ["🏰 建立大唐帝国", "🎯 起义推翻隋朝", "🤝 笼络各方豪杰", "👨‍👦 培养牛娃李世民"],
    story: "从一个地方官，逆袭成为皇帝！",
    quote: "\"这天下，我李渊来了！\"",
    funFact: "他是李世民的亲爹，却被儿子逼着退位😅",
  },
  {
    id: "lishimin",
    name: "李世民",
    title: "千古明君·天可汗",
    emoji: "⚔️",
    color: "#FF6B35",
    bgGradient: ["#0d1b2a", "#1b4f72"],
    skills: ["⚔️ 打仗超厉害", "📖 认真听大臣讲道理", "🌾 带领百姓丰衣足食", "🌏 让外国人都服气"],
    story: "打仗第一，听劝第一，当皇帝也第一！",
    quote: "\"以铜为镜，可以正衣冠！\"",
    funFact: "他有个超会怼人的大臣魏征，吵了200次架还继续用👍",
  },
  {
    id: "wuzetian",
    name: "武则天",
    title: "中国唯一女皇帝",
    emoji: "👸",
    color: "#E91E8C",
    bgGradient: ["#1a0020", "#6a0050"],
    skills: ["👑 当上唯一女皇帝", "📋 发明科举选人才", "🌸 让老百姓日子变好", "💪 谁不服就搞定谁"],
    story: "在男人的世界里，她偏偏当了皇帝！",
    quote: "\"谁说女子不如男？\"",
    funFact: "她给自己立了块无字碑，说功过让后人评价，太有气魄了！✨",
  },
  {
    id: "xuanzang",
    name: "玄奘",
    title: "西天取经第一人",
    emoji: "🧘",
    color: "#FF9500",
    bgGradient: ["#0a1628", "#1e3a5f"],
    skills: ["🐪 徒步走了5万里", "📚 带回657本经书", "🦁 穿越沙漠戈壁", "✝ 翻译佛经超认真"],
    story: "一个人，一匹马，走遍了半个世界！",
    quote: "\"宁向西去死，不向东退生！\"",
    funFact: "孙悟空的原型就是他！不过真实的玄奘没有神仙帮助😂",
  },
  {
    id: "libai",
    name: "李白",
    title: "诗仙·酒鬼诗人",
    emoji: "🌙",
    color: "#4FC3F7",
    bgGradient: ["#0d0d2b", "#1a237e"],
    skills: ["🍷 喝酒写诗两不误", "🌊 一首诗就能出名", "🗡 剑法也超厉害", "🌙 月亮是他最好的朋友"],
    story: "喝酒、写诗、游天下，这就是李白的快乐！",
    quote: "\"举头望明月，低头思故乡！\"",
    funFact: "他写了将近一千首诗，每首都像在做梦一样神奇✨",
  },
  {
    id: "dufu",
    name: "杜甫",
    title: "诗圣·忧国忧民",
    emoji: "📜",
    color: "#66BB6A",
    bgGradient: ["#1b2820", "#2e7d32"],
    skills: ["📝 用诗记录历史", "❤️ 心里装着天下百姓", "🏚 自己穷还惦记别人", "📚 留下1400多首诗"],
    story: "自己穷得叮当响，心里还装着全天下！",
    quote: "\"安得广厦千万间，大庇天下寒士俱欢颜！\"",
    funFact: "他和李白是好朋友，一个爱喝酒浪漫，一个担心国家现实，正好互补😄",
  },
  {
    id: "weizheng",
    name: "魏征",
    title: "史上最敢怼皇帝的人",
    emoji: "🗡️",
    color: "#FF7043",
    bgGradient: ["#1c1208", "#4e342e"],
    skills: ["🗣 敢当着皇帝面说不", "📋 进谏200多次从不怕", "🧠 超级聪明看问题准", "💎 皇帝的良心镜子"],
    story: "别人怕皇帝，他专门怼皇帝！",
    quote: "\"兼听则明，偏信则暗！\"",
    funFact: "他死后，李世民哭着说：我失去了一面镜子！🥺",
  },
  {
    id: "wangwei",
    name: "王维",
    title: "诗中有画·画中有诗",
    emoji: "🎨",
    color: "#AB47BC",
    bgGradient: ["#1a0a2e", "#4a148c"],
    skills: ["🎨 画画超级厉害", "📝 诗写得像画一样美", "🎵 音乐也是一把好手", "🏔 隐居山林悠哉悠哉"],
    story: "诗、书、画、音乐全部精通，唐朝第一全才！",
    quote: "\"明月松间照，清泉石上流！\"",
    funFact: "他的诗写的山水风景，读完感觉自己去旅游了一趟🌿",
  },
  {
    id: "jianzhen",
    name: "鉴真",
    title: "六次东渡·越挫越勇",
    emoji: "⛵",
    color: "#26C6DA",
    bgGradient: ["#001529", "#004d7a"],
    skills: ["⛵ 6次渡海终于成功", "🦯 失明了也没有放弃", "🙏 把佛教带到日本", "🏛 在日本建了唐招提寺"],
    story: "失败5次，瞎了眼睛，第6次终于成功！",
    quote: "\"山川异域，风月同天！\"",
    funFact: "他到日本时已经完全失明了，但依然靠记忆讲课传法💪",
  },
  {
    id: "liguinian",
    name: "李龟年",
    title: "盛唐第一音乐家",
    emoji: "🎵",
    color: "#FFCA28",
    bgGradient: ["#1a1400", "#4d3d00"],
    skills: ["🎶 唐玄宗最爱的歌手", "🎸 精通多种乐器", "🎤 声音动听人人迷", "📖 见证了盛唐兴衰"],
    story: "唱过最繁华的盛世，也见过最落寞的流亡！",
    quote: "\"正是江南好风景，落花时节又逢君！\"",
    funFact: "安史之乱后，他流落江南，杜甫偶遇他时写下了那首著名的诗🎶",
  },
];

// ============ 视频规格常量 ============
export const VIDEO_CONFIG = {
  WIDTH: 1080,
  HEIGHT: 1920,
  FPS: 60,
  SCENE_DURATION_FRAMES: 1080, // 18秒 × 60fps
};
