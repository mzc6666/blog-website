module.exports = {
  // 网站标题
  title: "blog-mzc",
  // 网站的描述
  description: "博客网站",
  // 基础路径
  base: "/blog-website/",
  // 额外的<head>标签
  head: [],
  // 主机名
  host: "0.0.0.0",
  // 端口号
  port: 8000,
  // 客户端文件的临时目录。
  temp: "/path/to/@vuepress/core/.temp",
  // 输出目录
  // dest: ".vuepress/dist",
  // 多语言支持
  locales: undefined,
  // cache
  cache: false,
  // 额外的需要被监听的文件
  extraWatchFiles: [],
  // 主题
  theme: undefined,
  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Languages",
        items: [
          {
            text: "Chinese",
            items: [
              { text: "Chinese", link: "/guide/" },
              { text: "Japanese", link: "/guide/" },
            ],
          },
          {
            text: "Chinese",
            items: [
              { text: "Chinese", link: "/guide/" },
              { text: "Japanese", link: "/guide/" },
            ],
          },
        ],
      },
    ],
    // 侧边栏
    sidebar: [
      ["/", "首页"],
      {
        title: "Group 1", // 必要的
        path: "/guide/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/guide/"],
      },
    ],
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    // 页面滚动
    smoothScroll: true,
  },
  // 插件
  plugins: undefined,
  // markdown config
  markdown: {
    // 显示行号
    lineNumbers: true,
  },
  // webpack 配置
  configureWebpack: {
    resolve: {
      alias: {
        "@": "/",
      },
    },
  },
};
