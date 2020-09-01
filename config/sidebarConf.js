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
     
     // 一定要放在最后！！！
     // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
     // '/': [''] // 此处选择禁用
 };