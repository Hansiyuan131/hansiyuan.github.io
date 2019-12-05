const pluginConf=require('../../config/pluginConfig');
const navConf=require('../../config/navConfig');
const sidebarConf=require('../../config/sidebarConfig/index');

module.exports = {
    title: '韩思远的博客',
    base:'',
    description: 'Stay Hungry. Stay Foolish',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.png' }],
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