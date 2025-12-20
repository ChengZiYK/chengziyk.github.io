# Bili_YKChengZi 项目站点

本仓库是 Bili_YKChengZi 的官方网站源码，对应线上站点为 [ykchengzi.jkun.cf](http://ykchengzi.jkun.cf)。网站主要展示 Bili_YKChengZi 相关产品及信息，目前处于产品仍在制作中，敬请期待。

## 网站功能

- 展示 Bili_YKChengZi 的产品。
- 提供下载链接。
- 提供产品简介。

## 目录结构

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
│   ├── img-01-big.jpg       # 操作系统展示图片（Windows11徽标）
│   ├── markdown.png         # 产品图片
│   ├── tools.png            # 在线工具展示图片
│   ├── wallpaper.png        # 背景图片
│   └── win10kunbang.png     # Windows 10捆绑软件版图片
├── js/                      # 脚本文件目录
│   ├── plugins.js           # 插件脚本
│   └── ...                  # 其他脚本文件
├── video/                   # 视频资源目录
├── beifen.html              # 主页的旧版本备份
├── md-to-doc.html           # Markdown转文档页面
├── md-to-doc.html           # Markdown转文档旧版页面
├── online.html              # 在线工具产品页面
├── about.html               # 关于页面
├── index.html               # 首页
├── system.html              # 操作系统页面
├── test_pages.html          # 测试页面
├── win10kunbang.html        # Windows 10捆绑软件版页面
└── README.md                # 项目说明文档

## 部署说明

项目通过 GitHub Actions 自动部署到 GitHub Pages，部署配置文件为 {insert\_element\_0\_YC5naXRodWIvd29ya2Zsb3dzL2RlcGxveS55bWxg}，每次推送到 `main` 分支会自动触发部署流程。
