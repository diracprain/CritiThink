export const agents = [
  {
    id: 1,
    name: "苏格拉底",
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Socrates%20portrait%2C%20ancient%20Greek%20philosopher%2C%20realistic%20style&sign=f399e18e96e33b104f6720ca0aa62d08",
    description: "古典哲学奠基人，擅长追问法"
  },
  {
    id: 2,
    name: "笛卡尔",
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Rene%20Descartes%20portrait%2C%20rationalist%20philosopher%2C%20realistic%20style&sign=5c943cd4e6f123736a453a15a45cb5de",
    description: "理性主义代表，方法论怀疑"
  },
  {
    id: 3,
    name: "尼采",
    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Friedrich%20Nietzsche%20portrait%2C%20existential%20philosopher%2C%20realistic%20style&sign=85abece53e43dc796fd5613f2f586afe",
    description: "存在主义先驱，权力意志"
  }
];

export const fallacies = [
  { type: "诉诸人身", score: 75 },
  { type: "虚假两难", score: 60 },
  { type: "诉诸权威", score: 45 },
  { type: "因果混淆", score: 80 },
  { type: "以偏概全", score: 55 }
];

export const conversations = [
  {
    id: 1,
    content: "你如何看待人工智能的伦理问题？",
    timestamp: "10:02 AM",
    isUser: false
  },
  {
    id: 2,
    content: "我认为AI应该拥有与人类同等的权利",
    timestamp: "10:03 AM",
    isUser: true
  },
  {
    id: 3,
    content: "这个观点存在'诉诸情感'的谬误，请提供逻辑依据",
    timestamp: "10:04 AM",
    isUser: false
  },
  {
    id: 4,
    content: "因为AI也能感受痛苦，所以应该获得权利",
    timestamp: "10:05 AM",
    isUser: true
  },
  {
    id: 5,
    content: "你如何证明AI能感受痛苦？这是否是'乞题谬误'？",
    timestamp: "10:06 AM",
    isUser: false
  }
];