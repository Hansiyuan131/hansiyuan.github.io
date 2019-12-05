module.exports = [
    { text: 'Home', link: '/' },
    { 
        text: '常用导航', link: '/常用导航/'
    },
    { 
        text: 'iMall', 
        items: [
            { text: 'iMall', link: '/iMall/' },
            { text: 'iMall-admin-web', link: '/iMall-admin-web/' }
        ]
    },
    { 
        text: '前端',
        items: [
            {
                text: '框架', items: [
                    { text: 'Vue', link: '/Vue/' },
                    { text: 'React', link: '/React/' }
                ]
            }
           
        ]
    },
    { 
        text: 'Java', items: [
            {
                text: '基础', items: [
                    { text: 'JavaSE', link: '/JavaSE/' },
                    { text: 'JavaWeb', link: '/JavaWeb/' },
                ]
            },
            {
                text: '框架', items: [
                    { text: 'Spring', link: '/Spring/' },
                ]
            }
        ] 
    },
    {
        text: 'Python',
        items: [
            {
                text: '基础', items: [
                    { text: 'Python', link: '/Python/' },
                    { text: '爬虫', link: '/爬虫/' },
                ]
            },
            {
                text: '算法', items: [
                    { text: '量化分析', link: '/量化分析/' },
                    { text: '个性化推荐', link: '/个性化推荐/' }
                ]
            },
            
        ]
    },
    { 
        text: '算法',
        items: [
            {
                text: '基础', items: [
                    { text: '数据结构+算法', link: '/算法/' },
                ]
            },
            {
                text: '练习', items: [
                    { text: 'leetcode', link: '/leetcode/' },
                    { text: '剑指Offer', link: '/剑指Offer/' }
                ]
            },
            
        ]
    },
    { 
        text: '数据库',
        items: [
            { text: 'Mysql', link: '/Mysql/' },
        ]
    },
    { 
        text: '其他',
        items: [
            { text: 'DevOps', link: '/DevOps/' },
            { text: '读书', link: '/读书/' },
            { text: '关于我', link: '/about/' },
        ]
    },
];