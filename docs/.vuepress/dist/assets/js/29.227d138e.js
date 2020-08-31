(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{464:function(a,t,s){"use strict";s.r(t);var n=s(29),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"关于maven你需要了解什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于maven你需要了解什么？"}},[a._v("#")]),a._v(" 关于Maven你需要了解什么？")]),a._v(" "),s("h2",{attrs:{id:"maven-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-介绍"}},[a._v("#")]),a._v(" Maven 介绍")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("什么是Maven？")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://baike.baidu.com/item/Maven/6094909",target:"_blank",rel:"noopener noreferrer"}},[a._v("百度百科"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://maven.apache.org/what-is-maven.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Maven官网"),s("OutboundLink")],1)])])]),a._v(" "),s("li",[s("p",[a._v("Maven 能解决什么问题 ？")]),a._v(" "),s("ul",[s("li",[a._v("构建工程，管理 jar包，编译代码，自动运行单元测试，打包，生成报表，部署项目，生成 Web 站点")])])]),a._v(" "),s("li",[s("p",[a._v("Maven 的两个核心特性")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Maven 的依赖管理")]),a._v(" "),s("blockquote",[s("p",[a._v("通过 pom.xml 文件配置要引入的 jar 包的坐标，再读取坐标并到仓库中加载 jar 包。过建立索引，可以大大提高加载 jar 包的速度，使得我们认为 jar 包基本跟放在本地的工程文件中再读取出来的速度是一样的。")])])]),a._v(" "),s("li",[s("p",[a._v("一键构建")]),a._v(" "),s("blockquote",[s("p",[a._v("Maven 规范化构建流程 ：")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200622173039369.png",alt:"image-20200622173039369"}})])])])])])]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"maven-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-的使用"}},[a._v("#")]),a._v(" Maven 的使用")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Maven 软件的下载 和 安装")]),a._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("maven-download"),s("OutboundLink")],1)])]),a._v(" "),s("li",[s("p",[a._v("解压后目录结构")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("├─bin  存放了 maven 的命令，比如我们前面用到的 mvn tomcat:run            \n├─boot 存放了一些 maven 本身的引导程序，如类加载器等            \n├─conf 存放了 maven 的一些配置文件，如 setting.xml 文件                 \n└─lib  存放了 maven 本身运行所需的一些 jar 包            \n")])])])])])]),a._v(" "),s("li",[s("p",[a._v("使用前提是你的电脑上之前已经安装并配置好了 JDK")]),a._v(" "),s("ul",[s("li",[a._v("JDK环境配置")]),a._v(" "),s("li",[a._v("Maven环境配置\n"),s("ul",[s("li",[a._v("配置 MAVEN_HOME ，变量值就是你的 maven 安装 的路径（bin 目录之前一级目录）")]),a._v(" "),s("li",[a._v("配置 Path ，变量值：;%MAVEN_HOME%\\bin")]),a._v(" "),s("li",[a._v("压缩包所在文件夹最好不要使用中文和空格")])])])])]),a._v(" "),s("li",[s("p",[a._v("验证安装")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Users"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("hansiyuan"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("mvn -v\nApache Maven "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.6")]),a._v(".3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("cecedd343002696d0abb50b32b541b8a6ba2883f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nMaven home: D:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Tools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("apache-maven-3.6.3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\nJava version: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.8")]),a._v(".0_251, vendor: Oracle Corporation, runtime: C:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Program Files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("jdk1.8.0_251"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("jre\nDefault locale: zh_CN, platform encoding: GBK\nOS name: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"windows 10"')]),a._v(", version: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10.0"')]),a._v(", arch: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"amd64"')]),a._v(", family: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"windows"')]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("Maven仓库分类")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623102701409.png",alt:"image-20200623102701409"}})]),a._v(" "),s("ul",[s("li",[s("p",[a._v("本地仓库")]),a._v(" "),s("blockquote",[s("ul",[s("li",[a._v("用来存储从远程仓库或中央仓库下载的插件和 jar 包，项目使用一些插件或 jar 包，优先从本地仓库查找")]),a._v(" "),s("li",[a._v("默认本地仓库位置在 ${user.dir}/.m2/repository， ${user.dir}表示 windows 用户目录。")])])])]),a._v(" "),s("li",[s("p",[a._v("远程仓库")]),a._v(" "),s("blockquote",[s("ul",[s("li",[a._v("如果本地需要插件或者 jar 包，本地仓库没有， 默认去远程仓库下载。")]),a._v(" "),s("li",[a._v("远程仓库可以在互联网内也可以在局域网内。")])])])]),a._v(" "),s("li",[s("p",[a._v("中央仓库")]),a._v(" "),s("blockquote",[s("p",[a._v("在 maven 软件中内置一个远程仓库地址 http://repo1.maven.org/maven2 ，它是中\n央仓库，服务于整个互联网，它是由 Maven 团队自己维护，里面存储了非常全的 jar 包，它包含了世界上大部分流行的开源项目构件。")])])])])]),a._v(" "),s("li",[s("p",[a._v("Maven本地仓库的配置")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("创建本地仓库文件夹")])]),a._v(" "),s("li",[s("p",[a._v("在 MAVE_HOME/conf/settings.xml 文件中配置本地仓库位置")]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("localRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("D:\\Tools\\maven_repository"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("localRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])])])]),a._v(" "),s("li",[s("p",[a._v("全局setting与用户setting")]),a._v(" "),s("ul",[s("li",[a._v("全局setting：maven 安装目录下的 conf/setting.xml 文件")]),a._v(" "),s("li",[a._v("用户setting：${user.dir}/.m2/settings.xml 目录中,${user.dir} 指 windows 中的用户目录。")])])]),a._v(" "),s("li",[s("p",[a._v("Maven工程目录")])])]),a._v(" "),s("blockquote",[s("p",[a._v("作为一个 maven 工程，它的 src 目录和 pom.xml 是必备的")]),a._v(" "),s("p",[a._v("如果是普通的 java 项目，那么就没有 webapp 目录。")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("│  pom.xml \n│  target 项目输出位置，编译后的 class 文件会输出到此目录\n└─src                       \n    ├─main                  \n    │  ├─java     存放项目的.java 文件          \n    │  └─resources 存放项目资源文件，如 spring, hibernate 配置文件\n    │  └─webapp  页面素材 \n    └─test                  \n    │  └─java    存放所有单元测试.java 文件，如 JUnit 测试类 \n    │  └─resources 测试资源文件\n\n项目目录下运行 mvn tomcat:run 运行maven项目\n")])])]),s("hr"),a._v(" "),s("h2",{attrs:{id:"maven-常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-常用命令"}},[a._v("#")]),a._v(" Maven 常用命令")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("compile")]),a._v(" "),s("blockquote",[s("p",[a._v("compile 是 maven 工程的编译命令，作用是将 src/main/java 下的文件编译为 class 文件输出到 target目录下。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn compile\n")])])])]),a._v(" "),s("li",[s("p",[a._v("test")]),a._v(" "),s("blockquote",[s("p",[a._v("test 是 maven 工程的测试命令，会执行 src/test/java 下的单元测试类。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("test")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("clean")]),a._v(" "),s("blockquote",[s("p",[a._v("clean 是 maven 工程的清理命令，执行 clean 会删除 target 目录及内容")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn clean\n")])])])]),a._v(" "),s("li",[s("p",[a._v("package")]),a._v(" "),s("blockquote",[s("p",[a._v("package 是 maven 工程的打包命令，对于 java 工程执行 package 打成 jar 包，对于 web 工程打成 war包。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn package\n")])])])]),a._v(" "),s("li",[s("p",[a._v("install")]),a._v(" "),s("blockquote",[s("p",[a._v("install 是 maven 工程的安装命令，执行 install 将 maven 打成 jar 包或 war 包发布到本地仓库。")]),a._v(" "),s("p",[a._v("从运行结果中，可以看出：当后面的命令执行时，前面的操作过程也都会自动执行")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("Maven 指令的生命周期")]),a._v(" "),s("blockquote",[s("p",[a._v("Maven 对项目构建过程分为"),s("strong",[a._v("三套")]),a._v("相互"),s("strong",[a._v("独立")]),a._v("的生命周期")])]),a._v(" "),s("ul",[s("li",[a._v("Clean Lifecycle  在进行真正的构建之前进行一些清理工作")]),a._v(" "),s("li",[a._v("Default Lifecycle  构建的核心部分，编译，测试，打包，部署等等")]),a._v(" "),s("li",[a._v("Site Lifecycle  生成项目报告，站点，发布站点")])])])]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"maven-的概念模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-的概念模型"}},[a._v("#")]),a._v(" Maven 的概念模型")]),a._v(" "),s("blockquote",[s("p",[a._v("Maven 包含了一个项目对象模型 (Project Object Model)，一组标准集合，一个项目生命周期(ProjectLifecycle)，一个依赖管理系统(Dependency Management System)，和用来运行定义在生命周期阶段\n(phase)中插件(plugin)目标(goal)的逻辑。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623111620865.png",alt:"image-20200623111620865"}})]),a._v(" "),s("ul",[s("li",[s("p",[a._v("项目对象模型 (Project Object Model)")]),a._v(" "),s("blockquote",[s("p",[a._v("一个 maven 工程都有一个 pom.xml 文件，通过 pom.xml 文件定义项目的坐标、项目依赖、项目信息、\n插件目标等。")])])]),a._v(" "),s("li",[s("p",[a._v("依赖管理系统(Dependency Management System)")]),a._v(" "),s("blockquote",[s("p",[a._v("通过 maven 的依赖管理对项目所依赖的 jar 包进行统一管理")])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.baomidou"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("mybatis-plus-generator"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("3.3.2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("一个项目生命周期(Project Lifecycle)")]),a._v(" "),s("blockquote",[s("p",[a._v("使用 maven 完成项目的构建，项目构建包括：清理、编译、测试、部署等过程， maven 将这些\n过程规范为一个生命周期，如下所示是生命周期的各各阶段")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623112112073.png",alt:"image-20200623112112073"}})])])]),a._v(" "),s("li",[s("p",[a._v("一组标准集合")]),a._v(" "),s("blockquote",[s("p",[a._v("maven 将整个项目管理过程定义一组标准，比如：通过 maven 构建工程有标准的目录结构，有标准的生命周期阶段、依赖管理有标准的坐标定义等")])])]),a._v(" "),s("li",[s("p",[a._v("插件(plugin)目标(goal)")]),a._v(" "),s("blockquote",[s("p",[a._v("maven 管理项目生命周期过程都是基于插件完成的。")])])])]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"创建maven工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建maven工程"}},[a._v("#")]),a._v(" 创建Maven工程")]),a._v(" "),s("h3",{attrs:{id:"idea-的-maven-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea-的-maven-配置"}},[a._v("#")]),a._v(" Idea 的 Maven 配置")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("打开File/Settings 配置 maven")]),a._v(" "),s("blockquote",[s("p",[a._v("依据图片指示，选择本地 maven 安装目录，指定 maven 安装目录下 conf 文件夹中 settings 配置文件。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623141600157.png",alt:"image-20200623141600157"}})])])])]),a._v(" "),s("h3",{attrs:{id:"创建-maven-的-web-工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-maven-的-web-工程"}},[a._v("#")]),a._v(" 创建 Maven 的 Web 工程")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("打开 idea，选择创建一个新工程")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623141725429.png",alt:"image-20200623141725429"}})])]),a._v(" "),s("li",[s("p",[a._v("选择 idea 提供好的 maven 的 web 工程模板")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623141958794.png",alt:"image-20200623141958794"}})])]),a._v(" "),s("li",[s("p",[a._v("点击 Next 填写项目信息")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623142222390.png",alt:"image-20200623142222390"}})])]),a._v(" "),s("li",[s("p",[a._v("点击 Next")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623142342703.png",alt:"image-20200623142342703"}})])]),a._v(" "),s("li",[s("p",[a._v("点击 Finish 后开始创建工程，耐心等待，直到出现如下界面")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623142529485.png",alt:"image-20200623142529485"}})])]),a._v(" "),s("li",[s("p",[a._v("手动添加 src/main/java 目录, 在main下右键新版Idea会有提示并为文件夹设置类型")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623142744497.png",alt:"image-20200623142744497"}})])]),a._v(" "),s("li",[s("p",[a._v("pom.xml")]),a._v(" "),s("blockquote",[s("p",[a._v("每个 maven 工程都需要定义本工程的坐标，坐标是 maven 对 jar 包的身份定义")]),a._v(" "),s("p",[a._v("新建项目的坐标定义如下：")])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.example"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--项目名称，定义为组织名+项目名，类似包名--\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("maven-demo"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 模块名称 --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 当前项目版本号， snapshot 为快照版本即非正式版本， release 为正式发布版本 --\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.0-SNAPSHOT"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- \n\t打包类型:\n        jar：执行 package 会打成 jar 包\n        war：执行 package 会打成 war 包\n        pom ：用于 maven 工程的继承，通常父工程设置为 pom \n--\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("packaging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("war"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("packaging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- \n\t坐标来源:\n\thttps://mvnrepoitory.com/\n--\x3e")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("项目中添加的坐标")]),a._v(" "),s("blockquote",[s("p",[a._v("依赖范围  : A 依赖 B，需要在 A 的 pom.xml 文件中添加 B 的坐标。")]),a._v(" "),s("p",[a._v("添加坐标时需要指定依赖范围，依赖范围包括：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("compile ：编译范围，指 A 在编译时依赖 B，此范围为默认依赖范围。 编译范围的依赖会用在\n编译、测试、运行，由于运行时需要所以编译范围的依赖会被打包。")])]),a._v(" "),s("li",[s("p",[a._v("provided  ：provided 依赖只有在当 JDK 或者一个容器已提供该依赖之后才使用， provided 依\n赖在编译和测试时需要，在运行时不需要，比如： servlet api 被 tomcat 容器提供")])]),a._v(" "),s("li",[s("p",[a._v("runtime  ：runtime 依赖在运行和测试系统的时候需要，但在编译的时候不需要。 比如： jdbc\n的驱动包。由于运行时需要所以 runtime 范围的依赖会被打包。")])]),a._v(" "),s("li",[s("p",[a._v("test  ：test 范围依赖 在编译和运行时都不需要，它们只有在测试编译和测试运行阶段可用，\n比如： junit。由于运行时不需要所以 test范围依赖不会被打包。")])]),a._v(" "),s("li",[s("p",[a._v("system  ：system 范围依赖与 provided 类似，但是你必须显式的提供一个对于本地系统中 JAR\n文件的路径， 需要指定 systemPath 磁盘路径， system依赖不推荐使用。")]),a._v(" "),s("p",[s("img",{attrs:{src:"http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623144200781.png",alt:"image-20200623144200781"}})])])])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("junit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("junit"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("4.13"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("test"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependencies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("设置 jdk 编译版本")]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.apache.maven.plugins"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("maven-compiler-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("encoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("UTF-8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("encoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("编写代码，添加 tomcat7  插件，断点调试")])])]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"maven构建ssm工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven构建ssm工程"}},[a._v("#")]),a._v(" Maven构建SSM工程")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"分模块构建工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分模块构建工程"}},[a._v("#")]),a._v(" 分模块构建工程")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"maven-私服"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven-私服"}},[a._v("#")]),a._v(" Maven 私服")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"第三方-jar-包放入本地仓库或私服"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方-jar-包放入本地仓库或私服"}},[a._v("#")]),a._v(" 第三方 jar 包放入本地仓库或私服")]),a._v(" "),s("hr"),a._v(" "),s("Valine")],1)}),[],!1,null,null,null);t.default=e.exports}}]);