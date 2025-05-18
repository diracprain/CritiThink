export const settingsData = {
  difficulty: 3,
  notifications: true,
  theme: 'dark',
  language: 'zh-CN',
  fontSize: 16
};

export const favorites = [
  {
    id: 1,
    itemId: 2,
    type: 'course',
    title: '50种常见逻辑谬误',
    addedAt: '2024-05-10'
  },
  {
    id: 2,
    itemId: 1,
    type: 'debate',
    title: '苏格拉底vs智者学派',
    addedAt: '2024-05-15'
  }
];

export const studyPlans = [
  {
    id: 1,
    title: '基础逻辑训练',
    items: [1, 3],
    completed: false
  },
  {
    id: 2,
    title: '哲学辩论进阶',
    items: [1, 2],
    completed: true
  }
];