import { defineConfigWithTheme } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
export interface ThemeConfig {
  //navBar
  menuList: { name: string; url: string }[]

  //banner
  videoBanner: boolean
  name: string
  welcomeText: string
  motto: string[]
  social: { icon: string; url: string }[]

  //spine
  spineVoiceLang: 'zh' | 'jp'

  //footer
  footerName: string
  poweredList: { name: string; url: string }[]

  //gitalk
  clientID: string
  clientSecret: string
  repo: string
  owner: string
  admin: string[]
}

export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    // gitalk
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk/dist/gitalk.css' }],
    ['script', { src: 'https://unpkg.com/gitalk/dist/gitalk.min.js' }],
    // bluearchive font
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka/Blueaka.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/font/Blueaka_Bold/Blueaka_Bold.css',
      },
    ],
    // 图片灯箱
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
      },
    ],
  ],
  ignoreDeadLinks: true,
  // 生成站点地图
  // sitemap: {
  //   hostname: 'https://vitepress-theme-bluearchive.vercel.app',
  // },
  title: "ChengZi 的小站",
  description: "ChengZi的小站",
  themeConfig: {
    // navBar
    menuList: [
      { name: '首页', url: '' },
      { name: '标签', url: 'tags/' },
    ],

    //banner区配置
    videoBanner: false,
    name: "YKChengZi",
    welcomeText: '欢迎来到 ChengZi 的小站!',
    motto: ['欢迎来到我的小站~ChengZi在这里跪求前辈们三连+关注+充电，我会非常开心的口牙~~~', '逸一时，误一世。', '萨德·伊帕曾经说过：“依旧依旧,罢逸陵!”'],
    social: [
      { icon: 'github', url: 'https://github.com/ChengZiYK' },
      { icon: 'bilibili', url: 'https://space.bilibili.com/1892907969' },
      { icon: 'qq', url: 'https://im.qq.com/index/' },
      { icon: 'wechat', url: 'https://weixin.qq.com/' },
    ],

    //spine语音配置，可选zh/jp
    spineVoiceLang: 'jp',

    // footer配置
    footerName: 'YKChengZi',
poweredList: [
    { name: 'VitePress', url: 'https://github.com/vuejs/vitepress' },
    { name: 'GitHub Pages', url: 'https://docs.github.com/zh/pages' },
    { name: '萌ICP备20254322号', url: 'https://icp.gov.moe/?keyword=20254322' },
    { name: '坤ICP备20251145号', url: 'https://icp.jkun.cf/id.php?keyword=20251145'}
],

    //gitalk配置
    clientID: 'Ov23lir3PMJEnzdgIaBX',
    clientSecret: '71544cbde0f3dfc912e7812cb745fa7504ff91d4',
    repo: 'chengziyk.github.io',
    owner: 'ChengZiYK',
    admin: ['ChengZiYK'],
  },
  markdown: {
    theme: 'solarized-dark',
    lineNumbers: true,
    math: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      })
    },
  },
})
