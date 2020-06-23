# 关于Maven你需要了解什么？

## Maven 介绍  

- 什么是Maven？
  - [百度百科](https://baike.baidu.com/item/Maven/6094909)
  - [Maven官网](https://maven.apache.org/what-is-maven.html)

- Maven 能解决什么问题 ？
  
  - 构建工程，管理 jar包，编译代码，自动运行单元测试，打包，生成报表，部署项目，生成 Web 站点  
- Maven 的两个核心特性
  - Maven 的依赖管理  

    > 通过 pom.xml 文件配置要引入的 jar 包的坐标，再读取坐标并到仓库中加载 jar 包。过建立索引，可以大大提高加载 jar 包的速度，使得我们认为 jar 包基本跟放在本地的工程文件中再读取出来的速度是一样的。	

  - 一键构建  

    > Maven 规范化构建流程 ：
    >
    > ![image-20200622173039369](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200622173039369.png)

 <Valine></Valine>
-----------------------

## Maven 的使用

- Maven 软件的下载 和 安装

  - [maven-download](https://maven.apache.org/download.cgi)

  - 解压后目录结构

    ```
    ├─bin  存放了 maven 的命令，比如我们前面用到的 mvn tomcat:run            
    ├─boot 存放了一些 maven 本身的引导程序，如类加载器等            
    ├─conf 存放了 maven 的一些配置文件，如 setting.xml 文件                 
    └─lib  存放了 maven 本身运行所需的一些 jar 包            
    ```

- 使用前提是你的电脑上之前已经安装并配置好了 JDK

  - JDK环境配置
  - Maven环境配置
    - 配置 MAVEN_HOME ，变量值就是你的 maven 安装 的路径（bin 目录之前一级目录）  
    - 配置 Path ，变量值：;%MAVEN_HOME%\bin
    - 压缩包所在文件夹最好不要使用中文和空格

- 验证安装

  ```bash
  C:\Users\hansiyuan>mvn -v
  Apache Maven 3.6.3 (cecedd343002696d0abb50b32b541b8a6ba2883f)
  Maven home: D:\Tools\apache-maven-3.6.3\bin\..
  Java version: 1.8.0_251, vendor: Oracle Corporation, runtime: C:\Program Files\Java\jdk1.8.0_251\jre
  Default locale: zh_CN, platform encoding: GBK
  OS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"
  ```

- Maven仓库分类

  ![image-20200623102701409](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623102701409.png)

  - 本地仓库

    > - 用来存储从远程仓库或中央仓库下载的插件和 jar 包，项目使用一些插件或 jar 包，优先从本地仓库查找
    > - 默认本地仓库位置在 ${user.dir}/.m2/repository， ${user.dir}表示 windows 用户目录。  

  - 远程仓库

    > - 如果本地需要插件或者 jar 包，本地仓库没有， 默认去远程仓库下载。
    > - 远程仓库可以在互联网内也可以在局域网内。  

  - 中央仓库

    > 在 maven 软件中内置一个远程仓库地址 http://repo1.maven.org/maven2 ，它是中
    > 央仓库，服务于整个互联网，它是由 Maven 团队自己维护，里面存储了非常全的 jar 包，它包含了世界上大部分流行的开源项目构件。  

- Maven本地仓库的配置

  - 创建本地仓库文件夹

  - 在 MAVE_HOME/conf/settings.xml 文件中配置本地仓库位置

    ```xml
     <localRepository>D:\Tools\maven_repository</localRepository>
    ```

- 全局setting与用户setting
  - 全局setting：maven 安装目录下的 conf/setting.xml 文件  
  - 用户setting：${user.dir}/.m2/settings.xml 目录中,${user.dir} 指 windows 中的用户目录。  
- Maven工程目录

> 作为一个 maven 工程，它的 src 目录和 pom.xml 是必备的  
>
> 如果是普通的 java 项目，那么就没有 webapp 目录。  

```
│  pom.xml 
│  target 项目输出位置，编译后的 class 文件会输出到此目录
└─src                       
    ├─main                  
    │  ├─java     存放项目的.java 文件          
    │  └─resources 存放项目资源文件，如 spring, hibernate 配置文件
    │  └─webapp  页面素材 
    └─test                  
    │  └─java    存放所有单元测试.java 文件，如 JUnit 测试类 
    │  └─resources 测试资源文件

项目目录下运行 mvn tomcat:run 运行maven项目
```
 <Valine></Valine>
-------------------------

## Maven 常用命令

- compile 

    > compile 是 maven 工程的编译命令，作用是将 src/main/java 下的文件编译为 class 文件输出到 target目录下。 

	``` bash
	mvn compile
	```

- test

    > test 是 maven 工程的测试命令，会执行 src/test/java 下的单元测试类。

    ``` bash
    mvn test
    ```

- clean  

  > clean 是 maven 工程的清理命令，执行 clean 会删除 target 目录及内容 

  ``` bash
  mvn clean
  ```

- package 

  > package 是 maven 工程的打包命令，对于 java 工程执行 package 打成 jar 包，对于 web 工程打成 war包。 

  ``` bash
  mvn package
  ```

- install  

  > install 是 maven 工程的安装命令，执行 install 将 maven 打成 jar 包或 war 包发布到本地仓库。
  >
  > 从运行结果中，可以看出：当后面的命令执行时，前面的操作过程也都会自动执行  

  ``` bash
  mvn install
  ```

- Maven 指令的生命周期  

  > Maven 对项目构建过程分为**三套**相互**独立**的生命周期  

  - Clean Lifecycle  在进行真正的构建之前进行一些清理工作  
  - Default Lifecycle  构建的核心部分，编译，测试，打包，部署等等
  - Site Lifecycle  生成项目报告，站点，发布站点  

<Valine></Valine>
------------------

## Maven 的概念模型  

  > Maven 包含了一个项目对象模型 (Project Object Model)，一组标准集合，一个项目生命周期(ProjectLifecycle)，一个依赖管理系统(Dependency Management System)，和用来运行定义在生命周期阶段
  > (phase)中插件(plugin)目标(goal)的逻辑。  

  ![image-20200623111620865](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623111620865.png)

- 项目对象模型 (Project Object Model)  

  > 一个 maven 工程都有一个 pom.xml 文件，通过 pom.xml 文件定义项目的坐标、项目依赖、项目信息、
  > 插件目标等。  

- 依赖管理系统(Dependency Management System)  

  > 通过 maven 的依赖管理对项目所依赖的 jar 包进行统一管理  

  ``` xml
   <dependencies>
          <dependency>
              <groupId>com.baomidou</groupId>
              <artifactId>mybatis-plus-generator</artifactId>
              <version>3.3.2</version>
          </dependency>
    </dependencies>
  ```

- 一个项目生命周期(Project Lifecycle)  

  > 使用 maven 完成项目的构建，项目构建包括：清理、编译、测试、部署等过程， maven 将这些
  > 过程规范为一个生命周期，如下所示是生命周期的各各阶段  
  >
  > ![image-20200623112112073](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623112112073.png)

- 一组标准集合  

  > maven 将整个项目管理过程定义一组标准，比如：通过 maven 构建工程有标准的目录结构，有标准的生命周期阶段、依赖管理有标准的坐标定义等  

- 插件(plugin)目标(goal)  

  > maven 管理项目生命周期过程都是基于插件完成的。  

 <Valine></Valine>
----------

## 创建Maven工程

### Idea 的 Maven 配置

- 打开File/Settings 配置 maven  

  > 依据图片指示，选择本地 maven 安装目录，指定 maven 安装目录下 conf 文件夹中 settings 配置文件。  
  >
  > ![image-20200623141600157](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623141600157.png)

### 创建 Maven 的 Web 工程

1. 打开 idea，选择创建一个新工程  

   ![image-20200623141725429](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623141725429.png)

2. 选择 idea 提供好的 maven 的 web 工程模板  

   ![image-20200623141958794](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623141958794.png)

3. 点击 Next 填写项目信息  

   ![image-20200623142222390](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623142222390.png)

4. 点击 Next  

   ![image-20200623142342703](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623142342703.png)

5. 点击 Finish 后开始创建工程，耐心等待，直到出现如下界面  

   ![image-20200623142529485](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623142529485.png)

6. 手动添加 src/main/java 目录, 在main下右键新版Idea会有提示并为文件夹设置类型

   ![image-20200623142744497](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623142744497.png)

7. pom.xml

   > 每个 maven 工程都需要定义本工程的坐标，坐标是 maven 对 jar 包的身份定义  
   >
   > 新建项目的坐标定义如下：

   ``` xml
   <groupId>org.example</groupId> <!--项目名称，定义为组织名+项目名，类似包名-->
   <artifactId>maven-demo</artifactId> <!-- 模块名称 -->
   <!-- 当前项目版本号， snapshot 为快照版本即非正式版本， release 为正式发布版本 -->
   <version>1.0-SNAPSHOT</version>
   <!-- 
   	打包类型:
           jar：执行 package 会打成 jar 包
           war：执行 package 会打成 war 包
           pom ：用于 maven 工程的继承，通常父工程设置为 pom 
   -->
   <packaging>war</packaging>
   
   <!-- 
   	坐标来源:
   	https://mvnrepoitory.com/
   -->
   ```

8. 项目中添加的坐标  

   > 依赖范围  : A 依赖 B，需要在 A 的 pom.xml 文件中添加 B 的坐标。
   >
   > 添加坐标时需要指定依赖范围，依赖范围包括：  
   >
   > - compile ：编译范围，指 A 在编译时依赖 B，此范围为默认依赖范围。 编译范围的依赖会用在
   >   编译、测试、运行，由于运行时需要所以编译范围的依赖会被打包。  
   >
   > - provided  ：provided 依赖只有在当 JDK 或者一个容器已提供该依赖之后才使用， provided 依
   >   赖在编译和测试时需要，在运行时不需要，比如： servlet api 被 tomcat 容器提供  
   >
   > - runtime  ：runtime 依赖在运行和测试系统的时候需要，但在编译的时候不需要。 比如： jdbc
   >   的驱动包。由于运行时需要所以 runtime 范围的依赖会被打包。  
   >
   > - test  ：test 范围依赖 在编译和运行时都不需要，它们只有在测试编译和测试运行阶段可用，
   >   比如： junit。由于运行时不需要所以 test范围依赖不会被打包。  
   >
   > - system  ：system 范围依赖与 provided 类似，但是你必须显式的提供一个对于本地系统中 JAR
   >   文件的路径， 需要指定 systemPath 磁盘路径， system依赖不推荐使用。  
   >
   >   ![image-20200623144200781](http://img.hansiyuan.top/images/blog/JavaBlog/%E5%85%B3%E4%BA%8EMaven%E4%BD%A0%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E4%BB%80%E4%B9%88/image-20200623144200781.png)

   ``` xml
   <dependencies>
       <dependency>
           <groupId>junit</groupId>
           <artifactId>junit</artifactId>
           <version>4.13</version>
           <scope>test</scope>
       </dependency>
   </dependencies>
   ```

9. 设置 jdk 编译版本  

   ``` xml
   <build>
       <plugins>
           <plugin>
               <groupId>org.apache.maven.plugins</groupId>
               <artifactId>maven-compiler-plugin</artifactId>
               <configuration>
                   <source>1.8</source>
                   <target>1.8</target>
                   <encoding>UTF-8</encoding>
               </configuration>
           </plugin>
       </plugins>
   </build>
   ```

10. 编写代码，添加 tomcat7  插件，断点调试

-------

## Maven构建SSM工程



--------

## 分模块构建工程



---------------

## Maven 私服  



-------

## 第三方 jar 包放入本地仓库或私服



------------

 <Valine></Valine>