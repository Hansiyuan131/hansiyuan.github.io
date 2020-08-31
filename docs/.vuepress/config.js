const pluginConf=require('../../config/pluginConfig');
const navConf=require('../../config/navConfig');
const sidebarConf=require('../../config/sidebarConf');

module.exports = {
    title: '7Tree技术栈',
    base:'',
    description: 'Talk is cheap. Show me the code',
    head: [
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'icon', href: '/favicon-32x32.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }]
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
    ],
    themeConfig: {
        logo: '/images/icons/icon-72x72.png',
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