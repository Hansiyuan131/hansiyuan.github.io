module.exports = [
    { text: 'Home', link: '/' },
    { 
        text: '项目', 
        items: [
            { text: 'iMall', link: '/项目/iMall/' },
            { text: 'sn-reader', link: '/项目/sn-reader/' }
        ]
    },
    { 
        text: 'Blog', items: [
        {
            text: '后端', items: [
                {text: 'JavaBlog', link: '/后端/JavaBlog/'},
                {text: 'NetBlog', link: '/后端/NetBlog/'},
            ]
        },
        {
            text: '前端',items: [
                {text: 'VueBlog', link: '/前端/Vue/'},
                {text: 'ReactBlog', link: '/前端/React/'}
            ]
        }] 
    },
    {
        text: '人工智能', items: [
            {
                text: '爬虫', link: '/Python/爬虫/',
            },
            {
                text: '————————', items: [
                    { text: '人工智能', link: '/Python/人工智能/' },
                    { text: '量化分析', link: '/Python/量化分析/' },
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
            { text: 'SQLServer', link: '/数据库/SQLServer/' },
            { text: 'Redis', link: '/数据库/Redis/' },
            { text: 'MongoDB', link: '/数据库/MongoDB/' },
        ]
    },
    { 
        text: '其他',
        items: [
            { text: '关于我', link: '/其他/about/' },
            { text: 'Linux', link: '/其他/Linux/' },
            { text: 'DevOps', link: '/其他/DevOps/' },
            { text: '读书', link: '/其他/读书/' },
            { text: '每月小记', link: '/其他/每月小记/' },
            { text: '常用导航', link: '/其他/常用导航/' },
        ]
    },
];