# CritiThink - 大学生批判性思维训练平台

## 项目描述
基于React的批判性思维训练平台，包含多智能体对抗系统、内容图书馆和成就系统。

## GitHub部署指南

1. 创建GitHub仓库
   - 登录GitHub账号
   - 点击右上角"+" → "New repository"
   - 输入仓库名称(如CritiThink)
   - 选择Public/Private → 点击Create repository

2. 本地初始化Git仓库
```bash
# 进入项目目录
cd your-project-path

# 初始化Git仓库
git init

# 添加所有文件到暂存区
git add .

# 提交初始版本
git commit -m "初始提交"
```

3. 连接并推送代码
```bash
# 添加远程仓库(替换为您的GitHub用户名和仓库名)
git remote add origin https://github.com/your-username/your-repo.git

# 推送代码到main分支
git branch -M main
git push -u origin main
```

4. Vercel部署
   - 项目已配置vercel.json
   - 推送后可在Vercel直接导入部署
   - 部署完成后将获得类似 https://your-project-name.vercel.app 的公开URL

## 开发环境
- Node.js 18+
- pnpm
- React 18
- TypeScript 5
