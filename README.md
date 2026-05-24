# Bili_YKChengZi 项目站点

本仓库是 Bili_YKChengZi 的官方网站源码，对应线上站点为 [ykchengzi.qzz.io](https://ykchengzi.qzz.io)。网站主要展示 Bili_YKChengZi 相关产品及信息。

## 网站功能

- 产品展示：展示操作系统、在线工具、Minecraft 服务器等产品
- 下载链接：提供各类产品的下载方式
- 产品简介：详细介绍各个产品的功能特点
- 关于页面：介绍 Bili_YKChengZi 的项目理念和联系方式

## 目录结构

```
chengziyk.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions 自动部署配置文件
├── css/                     # 相关样式文件目录
│   ├── bootstrap.min.css    # Bootstrap 样式文件
│   └── templatemo-style.css # 模板样式文件
├── fontawesome/             # 字体图标目录
│   ├── css/
│   │   └── all.min.css      # Font Awesome 样式文件
│   └── LICENSE.txt          # Font Awesome 许可证文件
├── img/                     # 图片资源目录
│   ├── CZ.ico               # 网站图标
│   ├── banner-image.png     # 横幅图片
│   ├── chengmao.jpg         # 橙猫图片
│   ├── img-01-big.jpg       # 操作系统展示图片
│   ├── img-01.jpg           # 产品图片
│   ├── img-02.jpg           # 产品图片
│   ├── img-04.jpg           # 产品图片
│   ├── markdown.png         # Markdown相关图片
│   ├── select-arrow.png     # 选择箭头图片
│   ├── tools.png            # 在线工具展示图片
│   ├── wallpaper.png        # 背景图片
│   └── win10kunbang.png     # Windows 10捆绑软件版图片
├── js/                      # 脚本文件目录
│   └── plugins.js           # 插件脚本
├── video/                   # 视频资源目录
│   └── hero.mp4             # 英雄区视频
├── about.html               # 关于页面
├── beifen.html              # 主页的旧版本备份
├── md-to-doc.html           # Markdown转文档页面
├── md-to-docbak.html        # Markdown转文档旧版页面
├── minecraftserver.html     # Minecraft服务器页面
├── model.html               # 模型展示页面
├── online.html              # 在线工具产品页面
├── system.html              # 操作系统页面
├── test_pages.html          # 测试页面
├── win10kunbang.html        # Windows 10捆绑软件版页面
├── index.html               # 首页
├── sitemap.xml              # 网站地图
├── BingSiteAuth.xml         # Bing网站验证文件
└── README.md                # 项目说明文档
```

## 页面说明

| 页面 | 文件名 | 描述 |
|------|--------|------|
| 首页 | index.html | 网站首页，展示产品索引和特色功能 |
| 操作系统 | system.html | Windows系统相关产品展示 |
| 在线工具 | online.html | 各类在线实用工具展示 |
| 我的世界服务器 | minecraftserver.html | 橙猫生存服务器介绍 |
| 关于 | about.html | Bili_YKChengZi项目介绍和联系方式 |
| Markdown转换器 | md-to-doc.html | Markdown转Word/Excel工具 |
| Windows10捆绑软件版 | win10kunbang.html | Windows10魔改系统展示 |

## SEO优化

网站已进行以下SEO优化：
- 所有页面添加了 `meta description` 标签
- 所有页面添加了合适的 `h1` 标题标签
- 创建了 `sitemap.xml` 网站地图
- 配置了Bing网站管理员工具验证

## 部署说明

项目通过 GitHub Actions 自动部署到 GitHub Pages，部署配置文件为 `.github/workflows/deploy.yml`，每次推送到 `main` 分支会自动触发部署流程。

## 联系方式

- GitHub: [Bili_YKChengZi](https://github.com/chengziyk)
- B站: Bili_YKChengZi
- 邮箱: belugajia@outlook.com
