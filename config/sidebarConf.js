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
     //常用导航
     '/常用导航/': utils.genSidebar('常用导航', filehelper.getFileName(docs + "/常用导航/"), false),

     //项目
     '/项目/iMall/': utils.genSidebar('iMall', filehelper.getFileName(docs + "/项目/iMall/"), false),
     '/项目/iMall-admin-web/': utils.genSidebar('iMall-admin-web', filehelper.getFileName(docs + "/项目/iMall-admin-web/"), false),

     //前端
     '/前端/React/': utils.genSidebar('React', filehelper.getFileName(docs + "/前端/React/"), false),
     '/前端/Vue/': utils.genSidebar('Vue', filehelper.getFileName(docs + "/前端/Vue/"), false),

      //后端
      '/后端/Java/Java基础/': utils.genSidebar('Java基础', filehelper.getFileName(docs + "/后端/Java/Java基础/"), false),
      '/后端/Java/Java框架/': utils.genSidebar('Java框架', filehelper.getFileName(docs + "/后端/Java/Java框架/"), false),
      '/后端/Net/Net基础/': utils.genSidebar('Net基础', filehelper.getFileName(docs + "/后端/Net/Net基础/"), false),
      '/后端/Net/Net框架/': utils.genSidebar('Net框架', filehelper.getFileName(docs + "/后端/Net/Net框架/"), false),

     //人工智能
     '/Python/基础语法/': utils.genSidebar('基础语法', filehelper.getFileName(docs + "/Python/基础语法/"), false),
     '/Python/爬虫/': utils.genSidebar('爬虫', filehelper.getFileName(docs + "/Python/爬虫/"), false),
     '/Python/量化分析/': utils.genSidebar('量化分析', filehelper.getFileName(docs + "/Python/量化分析/"), false),
     '/Python/Web框架/': utils.genSidebar('Web框架', filehelper.getFileName(docs + "/Python/Web框架/"), false),
     '/Python/人工智能/': utils.genSidebar('人工智能', filehelper.getFileName(docs + "/Python/人工智能/"), false),

    
    

     // 数据库
     '/数据库/Mysql/': utils.genSidebar('Mysql', filehelper.getFileName(docs + "/数据库/Mysql/"), false),

     // 算法
     '/算法/算法基础/': utils.genSidebar('算法基础', filehelper.getFileName(docs + "/算法/算法基础/"), false),
     '/算法/LeetCode/': utils.genSidebar('LeetCode', filehelper.getFileName(docs + "/算法/LeetCode/"), false),
     '/算法/剑指Offer/': utils.genSidebar('剑指Offer', filehelper.getFileName(docs + "/算法/剑指Offer/"), false),

     //其他
     '/其他/about/': utils.genSidebar('关于我', filehelper.getFileName(docs + "/其他/about/"), false),
     '/其他/读书/': utils.genSidebar('读书', filehelper.getFileName(docs + "/其他/读书/"), false),
     '/其他/DevOps/': utils.genSidebar('DevOps', filehelper.getFileName(docs + "/其他/DevOps/"), false),
     '/其他/每月小记/': utils.genSidebar('每月小记', filehelper.getFileName(docs + "/其他/每月小记/"), false),
     '/其他/Linux/': utils.genSidebar('Linux', filehelper.getFileName(docs + "/其他/Linux/"), false),
     
     // 一定要放在最后！！！
     // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
     // '/': [''] // 此处选择禁用
 };