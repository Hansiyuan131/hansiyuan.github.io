const pluginConf=require('../../config/pluginConfig');
const navConf=require('../../config/navConfig');
const sidebarConf=require('../../config/sidebarConf');

module.exports = {
    title: 'Mr.Han\'s blog',
    base:'',
    description: 'Stay Hungry. Stay Foolish',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    plugins: ['@vuepress/pwa'],
    plugins: ['autobar'],
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
        logo: '/img/logo.png',
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