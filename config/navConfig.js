module.exports = [
    { text: 'Home', link: '/' },
    { 
        text: '常用导航', link: '/常用导航/'
    },
    { 
        text: '项目', 
        items: [
            { text: 'imall', link: '/项目/imall/' },
            { text: 'sn-reader', link: '/项目/sn-reader/' }
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
            
        ] 
    },
    {
        text: '人工智能', items: [
            {
                text: 'Python基础', items: [
                    { text: 'Python基础语法', link: '/Python/基础语法/' },
                    { text: 'PythonWeb框架', link: '/Python/Web框架/' },
                    { text: '爬虫', link: '/Python/爬虫/' },
                ]
            },
            {
                text: '人工智能', items: [
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
        ]
    },
];