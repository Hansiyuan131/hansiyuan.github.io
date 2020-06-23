module.exports = {
    plugins: {
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/active-header-links': true,
    '@vuepress/medium-zoom': {
        selector: '.my-wrapper .my-img',
    },
}};
