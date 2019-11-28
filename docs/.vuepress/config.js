const pluginConf=require('../../config/pluginConfig');
const navConf=require('../../config/navConfig');
const sidebarConf=require('../../config/sidebarConfig/index');

module.exports = {
    title: 'iMall',
    base:'',
    description: 'Stay Hungry. Stay Foolish',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    plugins: ['@vuepress/pwa'],
    locales: {
        '/': {
          lang: 'zh-CN',
        }
    },
    plugins: [
        pluginConf,
        '@vuepress/back-to-top',
        '@vuepress/active-header-links'
    ],
    themeConfig: {
        logo: '/img/favicon.png',
        lastUpdated: 'Last Updated',
        repo: 'Hansiyuan131/hansiyuan131.github.io',
        nav: navConf,
        sidebar: sidebarConf,
        docsDir: 'docs',
        docsBranch: 'feature',
        editLinks: true,
        editLinkText: '编辑此文档'
    }
}