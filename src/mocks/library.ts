export const categories = [
  {
    id: 1,
    name: "基础逻辑",
    color: "bg-blue-600",
    icon: "fa-solid fa-brain"
  },
  {
    id: 2,
    name: "经典论战",
    color: "bg-purple-600",
    icon: "fa-solid fa-scroll"
  },
  {
    id: 3,
    name: "时事议题",
    color: "bg-orange-500",
    icon: "fa-solid fa-newspaper"
  },
  {
    id: 4,
    name: "学科专项",
    color: "bg-green-600",
    icon: "fa-solid fa-atom"
  }
];

export const courses = [
  {
    id: 1,
    title: "命题逻辑基础",
    category: "基础逻辑",
    cover: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=logic%20diagram%20with%20symbols%20and%20equations%2C%20tech%20style&sign=10e563ee3443a38fa4bf07199526ce38"
  },
  {
    id: 2,
    title: "50种常见逻辑谬误",
    category: "基础逻辑",
    cover: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=collection%20of%20logical%20fallacies%20illustrated%20with%20examples%2C%20minimalist%20design&sign=db493c8c84cacb800dc64f684e2be9de"
  },
  {
    id: 3,
    title: "真值表构建工具",
    category: "基础逻辑",
    cover: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=truth%20table%20with%20boolean%20logic%20symbols%2C%20digital%20interface&sign=59cf949aff37f5d9fa00879a15a342b2"
  }
];

export const debates = [
  {
    id: 1,
    title: "苏格拉底vs智者学派",
    characters: ["苏格拉底", "普罗泰戈拉"],
    background: "古希腊雅典广场",
    category: "经典论战"
  },
  {
    id: 2,
    title: "笛卡尔vs休谟",
    characters: ["笛卡尔", "休谟"],
    background: "17世纪欧洲沙龙",
    category: "经典论战"
  }
];

export const subjects = [
  {
    id: 1,
    title: "计算机科学逻辑",
    category: "学科专项",
    preview: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=computer%20science%20knowledge%20graph%20with%20nodes%20and%20connections%2C%20tech%20style&sign=4efc8c0ace4f481297c28b32a46a0bcd"
  },
  {
    id: 2,
    title: "法律逻辑学",
    category: "学科专项",
    preview: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=legal%20logic%20knowledge%20graph%20with%20gavel%20and%20scales%2C%20professional%20style&sign=7f9b74fe54f40043130c71c6a84c096e"
  }
];
