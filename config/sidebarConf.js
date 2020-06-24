const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const docs = rootpath+"/docs/"
const utils = require(rootpath+'/utils/index.js');
const filehelper = require(rootpath+'/utils/getFilenames.js');
/**
 * 侧边栏的配置（顺序无所谓）
 * utils.genSidebar('Java基础', filehelper.getFileName(docs+"/Java/Basic/"), false),
 */
 module.exports = {
     //项目
     '/项目/iMall/': utils.genSidebar('iMall', filehelper.getFileName(docs + "/项目/iMall/"), false),
     '/项目/sn-reader/': utils.genSidebar('sn-reader', filehelper.getFileName(docs + "/项目/sn-reader/"), false),

     //前端
     '/前端/React/': utils.genSidebar('React', filehelper.getFileName(docs + "/前端/React/"), false),
     '/前端/Vue/': utils.genSidebar('Vue', filehelper.getFileName(docs + "/前端/Vue/"), false),

      //后端
      '/后端/JavaBlog/': utils.genSidebar('JavaBlog', filehelper.getFileName(docs + "/后端/JavaBlog/"), false),
      '/后端/NetBlog/': utils.genSidebar('NetBlog', filehelper.getFileName(docs + "/后端/NetBlog/"), false),

     //人工智能
     '/Python/爬虫/': utils.genSidebar('爬虫', filehelper.getFileName(docs + "/Python/爬虫/"), false),
     '/Python/量化分析/': utils.genSidebar('量化分析', filehelper.getFileName(docs + "/Python/量化分析/"), false),
     '/Python/人工智能/': utils.genSidebar('人工智能', filehelper.getFileName(docs + "/Python/人工智能/"), false),

    
    

     // 数据库
     '/数据库/Mysql/': utils.genSidebar('Mysql', filehelper.getFileName(docs + "/数据库/Mysql/"), false),
     '/数据库/SQLServer/': utils.genSidebar('SQLServer', filehelper.getFileName(docs + "/数据库/SQLServer/"), false),
     '/数据库/MongoDB/': utils.genSidebar('MongoDB', filehelper.getFileName(docs + "/数据库/MongoDB/"), false),
     '/数据库/Redis/': utils.genSidebar('Redis', filehelper.getFileName(docs + "/数据库/Redis/"), false),


     // 算法
     '/算法/算法基础/': utils.genSidebar('算法基础', filehelper.getFileName(docs + "/算法/算法基础/"), false),
     '/算法/LeetCode/': utils.genSidebar('LeetCode', filehelper.getFileName(docs + "/算法/LeetCode/"), false),
     '/算法/剑指Offer/': utils.genSidebar('剑指Offer', filehelper.getFileName(docs + "/算法/剑指Offer/"), false),

     //其他
     '/关于我/': utils.genSidebar('关于我', filehelper.getFileName(docs + "/关于我/"), false),
     '/读书/': utils.genSidebar('读书', filehelper.getFileName(docs + "/读书/"), false),
     '/DevOps/': utils.genSidebar('DevOps', filehelper.getFileName(docs + "/DevOps/"), false),
     '/每月小记/': utils.genSidebar('每月小记', filehelper.getFileName(docs + "/每月小记/"), false),
     '/常用导航/': utils.genSidebar('常用导航', filehelper.getFileName(docs + "/常用导航/"), false),
     '/其他/': utils.genSidebar('其他', filehelper.getFileName(docs + "/其他/"), false),

     
     // 一定要放在最后！！！
     // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
     // '/': [''] // 此处选择禁用
 };