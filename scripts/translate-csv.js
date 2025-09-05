const fs = require('fs');
const path = require('path');

// 翻译映射表
const translations = {
  // AI 工具
  '低成本高效的中国大模型': 'Cost-effective and efficient Chinese large language model',
  'Anthropic 推出的先进对话式 AI 助手': 'Advanced conversational AI assistant by Anthropic',
  '字节跳动推出的免费中文 AI 聊天助手': 'Free Chinese AI chat assistant by ByteDance',
  'Google 推出的多模态 AI 助手': 'Multimodal AI assistant by Google',
  '微软 AI 助手，集成于 Edge/Office': 'Microsoft AI assistant integrated with Edge/Office',
  '多模型聚合 AI 聊天平台': 'Multi-model aggregated AI chat platform',
  '智谱 AI 推出的中文大模型': 'Chinese large language model by Zhipu AI',
  '月之暗面推出的中文大模型': 'Chinese large language model by Moonshot AI',
  '字节跳动推出的 AI 聊天和应用构建平台': 'AI chat and application building platform by ByteDance',
  '百度推出的中文大模型': 'Chinese large language model by Baidu',
  '阿里云推出的中文大模型': 'Chinese large language model by Alibaba Cloud',
  
  // AI 绘画
  'AI 艺术与图片生成平台': 'AI art and image generation platform',
  '微软 AI 图片生成工具': 'Microsoft AI image generation tool',
  'Canva 内置 AI 设计与文案工具': 'Canva built-in AI design and copywriting tool',
  'AI 图像生成平台': 'AI image generation platform',
  '开源 AI 图片生成平台': 'Open source AI image generation platform',
  'Stable Diffusion 官方图片生成工具': 'Official Stable Diffusion image generation tool',
  
  // AI 写作
  'AI 文案与内容生成平台': 'AI copywriting and content generation platform',
  'AI 文案与营销内容生成工具': 'AI copywriting and marketing content generation tool',
  'AI 内容与文案生成平台': 'AI content and copywriting generation platform',
  
  // AI 翻译
  'AI 驱动的高质量翻译工具': 'AI-powered high-quality translation tool',
  
  // AI 音乐
  'AI 音乐生成平台': 'AI music generation platform',
  'AI 音乐生成器': 'AI music generator',
  
  // AI 视频
  'AI 视频与多媒体创作平台': 'AI video and multimedia creation platform',
  'AI 视频生成平台': 'AI video generation platform',
  
  // AI 编程
  'AI 代码自动补全工具': 'AI code auto-completion tool',
  'AI 编程搜索与问答': 'AI programming search and Q&A',
  'AI 驱动的代码编辑器': 'AI-powered code editor',
  
  // AI 平台
  'AI 开源模型与社区平台': 'AI open source models and community platform',
  '哔哩哔哩 AI 创作工具': 'Bilibili AI creation tools',
  
  // AI 办公
  'Notion 内置 AI 助手': 'Notion built-in AI assistant',
  '语雀文档 AI 助手': 'Yuque document AI assistant',
  
  // React
  '流行的 React Web 框架': 'Popular React web framework',
  '构建用户界面的 JavaScript 库': 'JavaScript library for building user interfaces',
  '高质量 React 组件库': 'High-quality React component library',
  '企业级 React 组件库': 'Enterprise-grade React component library',
  'Shadcn 主题编辑器': 'Shadcn theme editor',
  '热门 React 组件集合': 'Popular React component collection',
  '基于 Tailwind CSS 的 React 组件': 'React components based on Tailwind CSS',
  '丰富的 React 动画组件': 'Rich React animation components',
  '创意动画组件集合': 'Creative animation component collection',
  'React 动画库': 'React animation library',
  'React 状态管理库': 'React state management library',
  '小巧高效的 React 状态管理库': 'Lightweight and efficient React state management library',
  '高质量 React Hooks 库': 'High-quality React Hooks library',
  'React 路由解决方案': 'React routing solution',
  '用于数据请求的 React Hooks 库': 'React Hooks library for data requests',
  '强大的异步状态管理库': 'Powerful asynchronous state management library',
  
  // Vue
  '渐进式 JavaScript 框架': 'Progressive JavaScript framework',
  '轻量、可定制的移动端 Vue 组件库': 'Lightweight, customizable mobile Vue component library',
  '符合直觉的 Vue.js 状态管理库': 'Intuitive Vue.js state management library',
  'Vue Composition API 的常用工具集': 'Common toolset for Vue Composition API',
  
  // 后端开发
  'Java 企业级应用开发框架': 'Java enterprise application development framework',
  'Python Web 开发框架': 'Python web development framework',
  '优雅的 PHP Web 框架': 'Elegant PHP web framework',
  'Node.js 渐进式开发框架': 'Node.js progressive development framework',
  'Go 语言 Web 框架': 'Go language web framework',
  '现代高性能 Python Web 框架': 'Modern high-performance Python web framework',
  'Node.js Web 框架': 'Node.js web framework',
  'PHP 异步框架': 'PHP asynchronous framework',
  'API 查询语言': 'API query language',
  '高性能 RPC 框架': 'High-performance RPC framework',
  '端到端类型安全的 API 框架': 'End-to-end type-safe API framework',
  '现代数据库 ORM 工具': 'Modern database ORM tool',
  'Java ORM 框架': 'Java ORM framework',
  'Java 持久层框架': 'Java persistence layer framework',
  '分布式搜索引擎': 'Distributed search engine',
  '分布式流处理平台': 'Distributed stream processing platform',
  '开源消息队列': 'Open source message queue',
  '动态服务发现和配置管理': 'Dynamic service discovery and configuration management',
  '服务网格解决方案': 'Service mesh solution',
  '分布式键值存储': 'Distributed key-value storage',
  '开源监控系统': 'Open source monitoring system',
  '数据可视化平台': 'Data visualization platform',
  '开源自动化服务器': 'Open source automation server',
  '自动化运维工具': 'Automation operations tool',
  'Java 项目管理工具': 'Java project management tool',
  '强大的构建工具': 'Powerful build tool',
  
  // 数据库
  '流行的 NoSQL 数据库': 'Popular NoSQL database',
  '最流行的开源关系型数据库': 'Most popular open source relational database',
  '高性能键值数据库': 'High-performance key-value database',
  '强大的开源关系型数据库': 'Powerful open source relational database',
  '轻量级嵌入式数据库': 'Lightweight embedded database',
  
  // 服务器
  '高性能 Web 服务器': 'High-performance web server',
  
  // DevOps
  '容器化与微服务部署平台': 'Containerization and microservices deployment platform',
  '容器编排与管理平台': 'Container orchestration and management platform',
  
  // 设计工具
  '协作式界面设计工具': 'Collaborative interface design tool',
  '在线平面设计平台': 'Online graphic design platform',
  '手绘风格的在线绘图工具': 'Hand-drawn style online drawing tool',
  '在线流程图与思维导图工具': 'Online flowchart and mind mapping tool',
  '开源流程图与图表工具': 'Open source flowchart and chart tool',
  '动画资源与预览工具': 'Animation resources and preview tool',
  
  // Icon
  '社区驱动的图标库': 'Community-driven icon library',
  '知名图标库': 'Well-known icon library',
  '整合多套流行图标的框架': 'Framework integrating multiple popular icon sets',
  '精致开源图标库': 'Exquisite open source icon library',
  '开源图标搜索与编辑工具': 'Open source icon search and editing tool',
  '阿里巴巴矢量图标库': 'Alibaba vector icon library',
  '拟物风格图标': 'Skeuomorphic style icons',
  
  // UI
  '现代 JavaScript、Vue 和 React 动画库': 'Modern JavaScript, Vue and React animation library',
  '一个快速且通用的 JavaScript 动画库': 'A fast and versatile JavaScript animation library',
  
  // CSS框架
  '实用优先的 CSS 框架': 'Utility-first CSS framework',
  '基于 Tailwind 的组件库': 'Component library based on Tailwind',
  '即时原子化 CSS 引擎': 'Instant atomic CSS engine',
  
  // 开发工具
  '最流行的免费代码编辑器': 'Most popular free code editor',
  '专业的前端开发 IDE': 'Professional frontend development IDE',
  '强大的 Java/全栈开发 IDE': 'Powerful Java/full-stack development IDE',
  'AI 驱动的代码编辑器': 'AI-powered code editor',
  '效率启动器工具': 'Efficiency launcher tool',
  '现代化终端工具': 'Modern terminal tool',
  '创新的浏览器': 'Innovative browser',
  '所见即所得 Markdown 编辑器': 'WYSIWYG Markdown editor',
  '集笔记、知识库、项目管理于一体的效率工具': 'Efficiency tool integrating notes, knowledge base and project management',
  '分布式版本控制系统': 'Distributed version control system',
  '全球最大开源代码托管平台': 'World\'s largest open source code hosting platform',
  '企业级代码托管与 DevOps 平台': 'Enterprise code hosting and DevOps platform',
  '国内知名代码托管平台': 'Well-known domestic code hosting platform',
  '前端部署与托管平台': 'Frontend deployment and hosting platform',
  '前端自动化部署平台': 'Frontend automated deployment platform',
  
  // 云服务
  '国内主流云服务平台': 'Mainstream domestic cloud service platform',
  '全球云服务平台': 'Global cloud service platform',
  '亚马逊云服务平台': 'Amazon cloud service platform',
  '全球 CDN 与安全加速平台': 'Global CDN and security acceleration platform',
  
  // 包管理
  'Node.js 包管理平台': 'Node.js package management platform',
  '高效的 Node.js 包管理器': 'Efficient Node.js package manager',
  'Node.js 包管理器': 'Node.js package manager',
  
  // 构建工具
  '极速前端构建工具': 'Ultra-fast frontend build tool',
  '前端模块打包工具': 'Frontend module bundler',
  
  // 代码质量
  'JavaScript 代码质量与风格检查工具': 'JavaScript code quality and style checking tool',
  '代码自动格式化工具': 'Code auto-formatting tool',
  
  // 测试工具
  '流行的 JavaScript 测试框架': 'Popular JavaScript testing framework',
  '灵活的 JavaScript 测试框架': 'Flexible JavaScript testing framework',
  '前端自动化测试工具': 'Frontend automated testing tool',
  '现代端到端自动化测试工具': 'Modern end-to-end automated testing tool',
  
  // API工具
  'API 接口调试与文档工具': 'API interface debugging and documentation tool',
  '强大的 API 测试与调试工具': 'Powerful API testing and debugging tool',
  'API 文档与测试工具': 'API documentation and testing tool',
  '自动生成 API 文档工具': 'Automatic API documentation generation tool',
  
  // 开发工具
  '本地服务内网穿透工具': 'Local service intranet penetration tool',
  
  // 操作系统
  '主流开源操作系统': 'Mainstream open source operating system',
  '流行的 Linux 发行版': 'Popular Linux distribution',
  '稳定的 Linux 发行版': 'Stable Linux distribution',
  
  // 终端工具
  '强大的 shell 终端': 'Powerful shell terminal',
  'Zsh 插件与主题管理工具': 'Zsh plugin and theme management tool',
  '终端多路复用工具': 'Terminal multiplexer tool',
  
  // 编辑器
  '经典文本编辑器': 'Classic text editor',
  '现代化 Vim 编辑器': 'Modern Vim editor',
  
  // 工具
  'Markdown 语法检查工具': 'Markdown syntax checking tool',
  '正则表达式测试与学习工具': 'Regular expression testing and learning tool',
  '代码片段美化分享工具': 'Code snippet beautification and sharing tool',
  'JSON 格式化与校验工具': 'JSON formatting and validation tool',
  'Base64 编码解码工具': 'Base64 encoding and decoding tool',
  '文件格式转换工具': 'File format conversion tool',
  '图片背景移除工具': 'Image background removal tool',
  'Google 开源的图片压缩工具': 'Google open source image compression tool',
  '图片压缩工具': 'Image compression tool',
  'AI 驱动的代码与文档问答平台': 'AI-powered code and documentation Q&A platform',
  '网站速度与网络检测工具': 'Website speed and network detection tool',
  '为你的 README 添加数据可视化': 'Add data visualization to your README',
  '验证码接收平台': 'Verification code receiving platform',
  'JSON 在线解析与格式化': 'Online JSON parsing and formatting',
  '开发人员的工具箱': 'Developer\'s toolbox',
  '前端 API 兼容性查询': 'Frontend API compatibility query',
  
  // Projects
  '个人网站': 'Personal website',
  '服务状态监控站点': 'Service status monitoring site',
  '游戏摸鱼': 'Game leisure'
};

// 读取 CSV 文件
const csvPath = path.join(__dirname, '../apps/web/assets/PFinalClub Nav.csv');
let csvContent = fs.readFileSync(csvPath, 'utf-8');

// 按行分割
const lines = csvContent.split('\n');
const header = lines[0];
const dataLines = lines.slice(1);

// 处理每一行
const processedLines = dataLines.map(line => {
  if (!line.trim()) return line;
  
  const parts = line.split(',');
  if (parts.length >= 3) {
    const desc = parts[2];
    if (translations[desc]) {
      parts[2] = translations[desc];
    }
  }
  
  return parts.join(',');
});

// 重新组合
const newCsvContent = [header, ...processedLines].join('\n');

// 写回文件
fs.writeFileSync(csvPath, newCsvContent, 'utf-8');

console.log('CSV translation completed!');
