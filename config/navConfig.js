module.exports = [
    { text: 'Home', link: '/' },
    { 
        text: '常用导航', link: '/常用导航/'
    },
    { 
        text: '项目', 
        items: [
            { text: 'iMall', link: '/项目/iMall/' },
            { text: 'iMall-admin-web', link: '/项目/iMall-admin-web/' }
        ]
    },
    { 
        text: '前端',
        items: [
            {
                text: '框架', items: [
                    { text: 'Vue', link: '/前端/Vue/' },
                    { text: 'React', link: '/前端/React/' }
                ]
            }
           
        ]
    },
    { 
        text: '后端', items: [
            {
                text: 'Java', items: [
                    { text: 'Java基础', link: '/后端/Java/Java基础/' },
                    { text: 'Java框架', link: '/后端/Java/Java框架/' },
                ]
            },
            {
                text: '.NET', items: [
                    { text: 'Net基础', link: '/后端/Net/Net基础/' },
                    { text: 'Net框架', link: '/后端/Net/Net框架/' },
                ]
            },
            {
                text: 'Python', items: [
                    { text: 'Python基础', link: '/后端/Python/Python基础/' },
                    { text: 'Python爬虫', link: '/后端/Python/Python爬虫/' },
                    { text: '个性化推荐', link: '/后端/Python/个性化推荐/' },
                    { text: '量化分析', link: '/后端/Python/量化分析/' },
                ]
            }
        ] 
    },
    { 
        text: '算法',
        items: [
            {
                text: '基础', items: [
                    { text: '数据结构+算法', link: '/算法/算法基础/' },
                ]
            },
            {
                text: '练习', items: [
                    { text: 'LeetCode', link: '/算法/LeetCode/' },
                    { text: '剑指Offer', link: '/算法/剑指Offer/' }
                ]
            },
            
        ]
    },
    { 
        text: '数据库',
        items: [
            { text: 'Mysql', link: '/数据库/Mysql/' },
        ]
    },
    { 
        text: '其他',
        items: [
            { text: 'DevOps', link: '/其他/DevOps/' },
            { text: '读书', link: '/其他/读书/' },
            { text: '关于我', link: '/其他/about/' },
        ]
    },
    { 
        text: 'Test链接',
        items: [
            { text: '区块链', link: '/Other/BlockChain/' },
            { text: '金融', link: '/Other/Finance/' },
            { text: 'Git', link: '/Other/Git/' },
            { text: 'Hexo', link: '/Other/Hexo/' },
            { text: 'Vue', link: '/Other/Vue/' },
            { text: 'VuePress', link: '/Other/VuePress/' },
        ]
    },
];