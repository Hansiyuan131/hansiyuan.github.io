const 读书 = require('./读书/index')
const 个性化推荐 = require('./个性化推荐/index')
const 剑指Offer = require('./剑指Offer/index')
const 量化分析 = require('./量化分析/index')
const 爬虫 = require('./爬虫/index')
const 算法 = require('./算法/index')

const about = require('./about/index')
const DevOps = require('./DevOps/index')
const iMall = require('./iMall/index')
const iMall_admin_web = require('./iMall-admin-web/index')
const JavaSE = require('./JavaSE/index')
const JavaWeb = require('./JavaWeb/index')
const leetcode = require('./leetcode/index')
const Mysql = require('./Mysql/index')
const Python = require('./Python/index')
const React = require('./React/index')
const Vue = require('./Vue/index')



module.exports = {
    '/读书/': 读书,
    '/个性化推荐/': 个性化推荐,
    '/剑指Offer/': 剑指Offer,
    '/量化分析/': 量化分析,
    '/算法/': 算法,
    '/爬虫/': 爬虫,
    '/about/': about,
    '/DevOps/': DevOps,
    '/iMall/': iMall,
    '/iMall-admin-web/': iMall_admin_web,
    '/JavaSE/': JavaSE,
    '/JavaWeb/': JavaWeb,
    '/leetcode/': leetcode,
    '/Mysql/': Mysql,
    '/Python/': Python,
    '/React/': React,
    '/Vue/': Vue,
}