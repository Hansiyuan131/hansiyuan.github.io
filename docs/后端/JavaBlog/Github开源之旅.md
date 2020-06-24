# Github开源之旅

## 认识Git

### 注册GitHub账户

- 熟悉GitHub和认识Github

  （1）实名注册 Github 账户、点亮个人头像、完善个人资料      
  （2）能够在 Github 上搜索资料（你感兴趣的方面，python、java等等）   
  （3）搜索大神（阮一峰等等）、搜索项目（例如CRM）   
  （4）能够评估人和项目的活跃度（按照贡献度等等）   
  （5）Star 收藏项目  Follow 关注高手  

### Git工具使用

- 命令行工具 `Bash`、`Cmd`、`Power Shell`等   
- GUI工具`Git GUI`、`Github Desktop`、`SourceTree`等    
- IDE 集成工具`Visual Studio`、`Eclipse`、`IntelliJ IDE`等     
- [Git命令行工具](https://git-scm.com/)的下载

> 在Git Bash 中运行 
>
> ``` bash
> $ git --version   # 验证安装是否成功，然后设置简单配置颜色和字体    
> ```

### Bash命令初体验

#### Git bash 练习

``` bash
$ pwd     # 当前路径 
$ mkdir   # 创建文件夹
$ cd      # 进入文件夹 
$ echo    # 打印
$ cat     # 打印文件内容 
$ cp      # 复制文件夹
$ ls ..   # 上级目录
$ mv      # 移动目录
$ rm      # 删除文件
$ clear   # 清除 
$ cd ~ ls # 进入主目录
$ ls -a   # 查看隐藏目录
$ vim  .gitconfig   # 进行编辑  vim编辑器   //要在.gitcofig目录中使用此命令
```

#### 设置Git参数

``` bash
$ git config  --lis
$ git config  --global user.name "Hansiyuan131"
$ git config  --global user.email "422295068@qq.com"
```

### Git详解

<img src="http://img.hansiyuan.top/images/blog/JavaBlog/Github开源之旅/image-20200624102453074.png" alt="image-20200624102453074" style="zoom:75%;" />

- Workspace：工作区
- Index / Stage：暂存区
- Repository：仓库区（或本地仓库）   

#### 工作区和暂存区的相关操作

``` bash
$ git init   # 在当前目录下建一个git 代码库
$ git clone [url]   # 下载一个项目和他的代码历史 url 
$ git add  [file1]  [file2]  # 添加指定文件到暂存区
$ git  rm  [file1]  [file2]  # 删除工作区文件，并且将这次删除的文件放在暂存去
$ git  mv  [file-origin]  [file-renamed] #  改名文件，并且将这个名改放入暂存区
$ git  commit  -m  [message]  # 提交暂存区到仓库
$ git commit  -a  -m [message]  # 直接提交从工作区到仓库（前提该文件已经有仓库的历史版本
$ git status # 显示变更信息
$ git log  # 显示当前分支的历史版本
$ git log --oneline #  友好的显示当前分支的历史版本
```

#### 同步远程仓库

<img src="http://img.hansiyuan.top/images/blog/JavaBlog/Github开源之旅/image-20200624103024079.png" alt="image-20200624103024079" style="zoom:75%;" />

``` bash
$ git remote add [shortname] [url] # 增加远程仓库、并命名 (git remote add origin [url])
$ git push [remote] [branch] # 将本地的提交推送到远程仓库  (git push origin master)
$ git pull [remote] [branch] # 将远程仓库提交拉下本地
$ git remote -v # 查看绑定的仓库
```

### Git 练习

1. `try.github.io` 按照题目练习[在线练习Git命令](http://try.github.io/)

2. 闯关[git-it](https://www.npmjs.com/package/git-it)

   1.  安装Node.js

   2. 安装git-it-g

       ``` bash
       npm install  git-it-g  
       ```
### 其他常用命令

> 基本上于vim的操作一样  

``` bash
 $ \  继续编写不用慌 命令行换行
# 强制退出 命令行终结 Ctrl+c
# 上翻页：Ctrl+u    
# 退出： q或者Ctrl+c   
# 最上：gg   
# 最下：G   
# 搜索：/n   
# 下一匹配行：u  
# 上一匹配行：n    
```

### Vim操作模式

``` bash
$ vim  readme.md    

# 编辑模式： i   
# 回到普通模式：Esc   
# 保存退出：：wq  
# 放弃保存并退出 q!    
```

---------

## MarkDown语法的应用

> Markdown 是一种轻量级标记语言，它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的XHTML(或者HTML)文档

### MarkDown的认识

Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。

- [Daring Fireball: Markdown](http://daringfireball.net/projects/markdown/) Project markdown
- [维基百科的 MarkDown 词条](https://zh.wikipedia.org/wiki/Markdown)  
- [百度百科的 MarkDown 词条](https://baike.baidu.com/item/markdown)
- [MultiMarkdown](http://fletcherpenney.net/multimarkdown/) 引入更多标记特性和输出选项的改进版Markdown

----

### 为什么要使用Markdown语法

- 纯文本，兼容性极强，可以用任意文本编辑器打开.    
- 语法简单（the syntax is so simple you can barely call it “syntax.”），零学习成本，极好的可读性，让你专注于文字写作而不是页面排版，并且兼容 HTML，simple but powerful .     
- 格式转换方便，Markdown 的文本你可以轻松转换为 html、pdf、epub、电子书等。   
- 适合团队协作，可以使用 git/svn 等进行版本控制管理。    
- [阳志平：为什么 Markdown 成为科技界写作主流？](http://www.yangzhiping.com/tech/r-markdown-knitr.html)    
- [图灵社区：用Markdown来写自由书籍-开源技术的方案](http://www.ituring.com.cn/article/828?q=markdown)   

目前很多在线服务商均支持使用markdown编写： 

（1）[Github](https://github.com) 最先支持，使用Markdown的一个分支版本来格式化评论、消息以及其它内容。   
（2）[Stack Overflow](http://stackoverflow.com/) 使用一种 Markdown 的分支作为它的文章格式化系统。   
（3）[博客园](http://www.cnblogs.com/) 国内技术人的博客家园，每天活跃上万用户，高质量社区。    
（4）[CSDN](http://www.csdn.net/) 号称全球最大中文IT社区，涵盖了多种语言、架构、博客、俱乐部等模块的技术论坛。    
（5）[图灵社区](http://www.ituring.com.cn/) 使用markdown语法供用户写作电子书.    
（6）[简书](http://www.jianshu.com/) 重拾文字的力量，交流故事，沟通想法，一个基于内容分享的社区。    
（7）[为知笔记](http://www.wiz.cn/) 国内顶尖笔记软件，支持使用Markdown语法编辑笔记。    
（8）[有道云笔记](http://note.youdao.com/noteintro.html) 最新版本开始支持，并且支持一些扩展语法。    
（9）[processon](https://www.processon.com/) 备注内容支持Markdown语法   
（9）[百度脑图](http://naotu.baidu.com/) 备注内容支持Markdown语法    

### Markdown语法的使用

- [Github: Mastering Markdown](https://guides.github.com/features/mastering-markdown/) GitHub 帮助中关于 Markdown 的语法帮助
- [MarkDown 语法团队规范](https://github.com/hzlzh/1MarkDown) 语法规范简洁版
- [Markdown Style Guide](http://www.cirosantilli.com/markdown-style-guide/) 语法规范复杂版
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/) GitHub 使用的 Markdown 语法，略微不同于标准 Markdown 语法。提供了一些更加简洁的语法，类似 URL autolinking, Strikethrough, Fenced code blocks, Syntax highlighting 等等
- [MultiMarkdown 介绍](http://fletcherpenney.net/multimarkdown/) 对 markdown 进行的扩展功能
- [Why Markdown? A two-minute explanation](http://brettterpstra.com/2011/08/31/why-markdown-a-two-minute-explanation/)
- [简书：献给写作者的 Markdown 新手指南](http://www.jianshu.com/p/q81RER)
- [语法参考链接一](https://www.jianshu.com/p/b03a8d7b1719)
- [语法参考链接二](https://www.jianshu.com/p/191d1e21f7ed)

### 关于编写Markdown语法的工具

**强烈推荐：Typora** 

- [马克飞象](https://maxiang.info/) web/chrome 离线客户端，markdown 全功能支持，最大特点内容能够同步到印象笔记（evernote）中，笔记的用户重度推荐，按年收费，目前作者 [@weibo](http://weibo.com/u/2788354117) 正在开发跨平台的客户端。   

- [StackEdit](https://stackedit.io/) 在线 markdown 编辑器，可同步文档到Google Drive和 Dropbox，可发布文章到 Blogger，GitHub，Google Drive，Dropbox，Tumblr和WordPress。  

- [cmd 作业部落](https://www.zybuluo.com/mdeditor) 支持 win/mac/linux/web/chrome 全平台，支持实时同步预览，支持代码高亮、数学公式，区分写作和阅读模式，支持在线存储，分享文稿网址。  

- [MacDown](http://macdown.uranusjr.com/) OSX 上的 Markdown 开源编辑器，支持代码高亮，实时预览等。   

- [MarkdownPad](http://www.markdownpad.com/) Windows上的全功能Markdown编辑器，推荐win上使用，基本全部功能。   

- [Marked2](http://marked2app.com/) 多种 md 显示方案，不能够编辑文件，只用来展示文件，配合 [subline text markdown edit](https://packagecontrol.io/packages/MarkdownEditing) 插件，完美使用；

- [MWeb](http://zh.mweb.im/) 专业的 Markdown 写作、记笔记、静态博客生成软件，由国内独立开发者[@oulvhai](http://weibo.com/oulvhai)开发，支持Toc、Table、代码高亮、支持发布到 Wordrpess 博客、支持 Metaweblog API 的博客服务、Wordpress.com、Evernote 和印象笔记、Blogger、Scriptogr.am、Tumblr等服务。

- [Haroopad](http://pad.haroopress.com/user.html) 又一款简洁多功能的跨平台编辑器，全功能支持，再加上对社交网络友好的连接，多种主题等，感兴趣的可以看看。详情参考[issue#1](https://github.com/xirong/my-markdown/issues/1)

- [Typora](http://www.typora.io/) 不分栏，实时展示看到写出的内容，对于不喜欢「两栏」设计的人来说是一个选择

- [MarkEditor - ME](http://markeditor.com/app/markeditor) MarkEditor以markdown为基础语法，多标签栏、文件夹结构，纯文本的方式带来优雅、高效的体验。 确实很棒的工具，带来很多新鲜的理念，支持、重构、提升 markdown，加快写作的体验。具体可以查看几篇评测文章：
- [简洁与强大，从不是矛盾的事物：写作工具 MarkEditor 功能详解](http://sspai.com/34317)
- [不止是一款简单的码字工具：MarkEditor 进阶功能介绍](http://sspai.com/34656)
- [码字必备：18 款优秀的 Markdown 写作工具 | 2015 年度盘点](http://sspai.com/32483) 喜欢哪一款，就看你的了。

-------------------

### 开始写 MarkDown 文档

- 完成[在线通关任务](http://www.markdowntutorial.com/lesson/1/)；  
- 打通 [how-to-markdown](https://github.com/workshopper/how-to-markdown/) 12 关；     

&emsp; 我们可以用 MarkDown 记录自己每天的工作和学习经历，也可以用 MarkDown 记录自己平时学习中收藏的学习资料，或者用于其他用途，请自由发挥自己的想象力和创造力。  

-------

## Git 进阶

###  GIT 图形化工具的使用

#### Git GUI工具基本用法

TODO

#### SourceTree基本用法

TODO

#### EGit基本用法

TODO

### Git配置

#### .gitignore和换行符

-  .gitignore忽略某个文件的状态 

    ``` bash
    $ vim .gitIgnore  .gitignore忽略某个文件的状态 
    # 输入要忽略的文件  通配符 （* ？）    
    # 通常写注释注明  以#开头     
    ```

- .gitignore使用场合

  > 1. 忽略操作系统自动生成的文件，比如：缩略图，等；    
  > 2. 忽略编译生成的中间文件、可执行文件等，比如： C 语言编译产生的 .obj 文件和 .exe 文件；  
  > 3. 忽略你自己的带有敏感信息的配置文件，比如：存放口令的配置文件；   
  > 4. tmp/ 临时目录；   
  > 5. log/ 日志目录；   
  > 6. 等等

- 强制添加 .gitignore 忽略的文件   

  ``` bash
  $ git add –f <file name>    
  # 查看 .gitignore 策略生效行号  
  $ git check-ignore –v <file name> 
  ```

- 消除换行符警告

  > CR: carriage return 回车，光标到首行， ‘\r’ = return  
  > LF: line feed 换行，光标下移一行，’\n’ = newline   
  > linux: 换行 \n   
  > windows: 换行 \r\n   
  > MAC OS: 换行 \r   
  >
  > <1>提交时转换为LF，检出时转换为CRLF，默认设置不用修改，Git 是 linux 配置 
  >
  > ``` bash
  > $ git config –-global core.autocrlf true   
  > ```
  >
  > <2>允许提交包含混合换行符的文件
  >
  > ``` 
  > $ git config –-global core.safecrlf false    
  > ```

#### 别名和缓存凭证

（1）Git bash查看日志

``` bash
$ git  log  
$ git  log --oneline      
```

（2） git 图形化查看日志

``` bash
$ git log  --pretty=format:'%h %ad | %s%d  [%an]'  --graph  --date=short
```

（3）别名的使用

> 我们可以看到git 图形化查看日志命令很长 所以我们可以使用别名来进行我们想要的操作。alias(别名)   
> 例如：我们现在用hi(History历史的前两个字母代替用git图形化查看日志的命令)

``` bash
$ git config --global  alias.hi  --pretty=format:'%h %ad | %s%d  [%an]'  --graph  --date=short    
```

- 在Vim中更改 比较方便  步骤如下    
  ``` bash
  $ cd ~             # 进入主目录
  $ ls -l -a         # 我们看到一个.gitconfig的文件
  $ vim  .gitconfig  # 进入编辑 
  $ wq!              # 按Esc键退出输入状态，然后按Shift+“;”再输入q!或wq!（不保存改动，wq!是保存文件的写入修改）退出。
  ```

  - 记录一下我对其他命令的更改项  

    ``` bash   
    ci = commit  
    ad = add .  
    br = branch   
    hi = log  --pretty=format:'%h %ad | %s%d  [%an]'  --graph  --date=short   
    st = status  
    ```

（4）缓存凭证的使用

``` bash
# 每次我们在提交的时候  git总是会提醒我们输入密码 解决办法 若在http协议下
$ git config –-global credential.helper wincred
```

### Git协议

#### 本地协议

> 本地协议（放服务器上比较麻烦 配置相对复杂）

（1）克隆本地仓库    

``` bash
$ git clone /c/wd/Github.git   
$ .git(可省)
$ git remote -v 
```

（2）克隆本地仓库，不建议使用 file://    

``` bash
$ git clone file:///c/wd/Github.git
```

（3）添加远程仓库的链接   

``` bash
$ git remote add origin /c/wd/Github.git
```

#### Git协议

> Git协议（要么完全权限要么没有权限）访问速度最快 一般跟其他权限共同使用  端口问题

（1）克隆远程仓库   

``` bash
$ git clone git://server_ip/Github.git
```

（2）添加远程仓库的链接   

``` bash
$ git remote add origin git://server_ip/Github.git
```

#### HTTP协议/HTTPS协议

> HTTP协议/HTTPS协议（80端口/443端口）简单有效  新手容易上手  防火墙开放端口  传输效率低

（1）克隆远程仓库   

``` bash
$ git clone https://github.com/Hansiyaun131/Github.git
```

（2）添加远程仓库的链接   

``` bash
$ git remote add origin https://github.com/Hansiyaun131/Github.git
```

#### SSH协议

> SSH协议 公钥、私钥（在企业服务器上容易搭建  对数据压缩最大  速度快  防火墙可能会屏蔽SSH端口）

（1）克隆远程仓库，一般写成简短的命令   

``` bash
$ git clone ssh://git@github.com/Hansiyaun131/Github.git（完整写法）   
$ git clone git@github.com:Hansiyaun131/Github.git（简写）    
```

（2）添加远程仓库的链接

``` bash
$ git remote add origin git@github.com:Hansiyaun131/Github.git
```

（3）生成 RSA 密钥对 :  

``` bash
$ ssh-Keygen -t rsa -C "422295068@qq.com"（之后操作回车即可）
```

- 在 Github 网站添加公钥:    
  1. 生成密钥对后  进入SSH文件夹（cd ~  cd  .ssh ）    
  2. 然后查看公钥文件 cat  id_rsa.pub复制其中信息   
  3. 在Setting中SSH and GPG keys 中实则SSH keys   
  4. new  一个设置题目  复制公钥  结束

（4）使用 SSH 协议，克隆仓库或者添加远程链接:

``` bash
git clone git@github.com:Hansiyaun131/(你的项目名)
第一次使用需要  yes
```

（5）查看当前协议

``` bash
$ git remote -v
```

### Git基本操作

#### 几个Git新命令

``` bash
$ git   git    #  命令信息
$ git help -a   # 查看全部 git 子命令
$ git blame <GitProgress.md>  # 逐行查看文件的修改历史
$ git blame –L 100,110 <GitProgress.md>  # 从第 100 行开始，到 110 行。逐行查看文件的修改历史
$ git clean -n   # 列出打算清除的档案
$ git clean –f   # 真正的删除
$ git clean -x   # 连 .gitignore 中忽略的档案也清除
```

#### Git add深入

（1）文件提交：  

``` bash
$ git add .   
```

（2）一个文件多个提交：

```bash
$ git add –p
```

#### Git commit深入

（1）add & commit mothed 1： 

``` bash  
$ git add .    
$ git commit –m “message”      
```

（2）add & commit mothed 2：

``` bash
$ git commit –a –m “message”    
```

（3）add & commit mothed 3：

``` bash
$ git commit –am “message”     
```

（4）每个提交要保证适当的颗粒度、相关性和独立性。

- 以一个小功能、小改进或一个 bug fix 为单位  
- 对应的 unit test 程序在同一个 commit  
- 无相关的修改不在同一个 commit  
- 语法错误的半成品程序不能 commit    

（5）使用Angular提交规范

#### 查看信息深入

（1）short and branch

``` bash
$ git status -sb
```

（2）查看某个提交信息

```bash
$ git show HEAD
$ git show HEAD~2
$ git show HEAD^
```

（3）查看提交历史

``` bash
$ git log <file name> # 某文件历史查看
$ git log --grep  <msg># 筛选需要查看的历史
$ git log -n  # n为需要查看的条数
$ git diff  # 工作区与暂存区的差异
$ git diff --cached  # 暂存区与版本的差异
$ git diff --HEAD  # 工作区与版本差异
```

#### 回撤操作深入

（1）回撤暂存区内容到工作目录

``` bash
$ git reset HEAD
```

（2）回撤提交到暂存区

``` bash
$ git reset HEAD^ --soft
```

（3）回撤提交，放弃变更

``` bash
$ git reset HEAD（某版本哈希值） –-hard  //回撤到某版本
```

（4）回撤远程仓库，-f  即 --force

``` bash
$ git push -f
```

（5）回撤上一次提交

``` bash
$ git add .
$ git commit --amend –m “message” //并提交本次
```

（6）变基操作，改写历史提交

``` bash
$ git rebase –i HEAD~3
```

### 标签操作

（1）在当前提交上，打标签 v0.0

``` bash
$ git tag v0.0 
```

（2）在当前提交上，打标签 v0.0，并给 message 信息注释

``` bash
$ git tag v0.0 –m “message”
```

（3）在当前提交之前的第 4 个版本上，打标签 v0.0

``` bash
$ git tag v0.0 HEAD~4
```

（4）列出所有标签

``` bash
$ git tag
```

（5）删除本地标签

``` bash
$ git tag –d v0.0
```

（6）把所有标签推送到远程仓库

``` bash
$ git push origin --tags
```

（7）把某个标签推送到远程仓库

``` bash
$ git push origin v0.0
```

（8）删除远程标签

``` bash
$ git push origi:refs/tags/v0.0
```

### Git分支操作

#### 分支简介

#### 实例演示分支操作

#### 冲突解决

【要点】：     
（1）在不同分支上，修改同一个文件；   
（2）不同的人，修改了同一个文件；   
（3）不同的仓库，修改了同一个文件；   
（4）冲突只在合并分支的时候才会发生；    
（5）发生冲突并不可怕，冲突的代码不会丢失；   
（6）解决冲突，重新提交，commit 时不要给 message；    
（7）冲突信息的格式；    

#### 分支命令

（1）创建分支 foo

``` bash
$ git branch foo   
```

（2）切换到分支 foo

``` bash
$ git checkout foo
```

（3）创建分支并同时切换到 foo，一步做到

``` bash
$ git checkout -b foo
```

（4）修改分支名字

``` bash
$ git branch –m old_name new_name
$ git branch –M old_name new_name   
```

（5）删除分支 foo

``` bash
$ git branch -d foo  //提示
$ Git branch –D foo   //强制
```

（6）列出远程分支

``` bash
$ git branch -r
```

（7）列出本地分支版本

``` bash
$ git branch -v
```

（8）查看已合并的分支

``` bash
$ git branch --merged
$ git branch --no-merged
```

（9）列出远程合并的分支

``` bash
$ git branch -r --merged
```

（10）取出远程 foo 分支

``` bash
$ git checkout –t origin/foo
```

（11）删除远程分支

``` bash
$ git push origin <space>:<remote branch>
$ git fetch -p
```

（12）合并分支

``` bash
$ git merge <branch name>
```

（13）合并分支，拒绝 fast forward，产生合并 commit

``` bash
$ git merge –-no-ff
```

（14）保存进度

``` bash
$ git stash
```

（15）弹出进度

``` bash
$ git stash pop
```

（16）查看 stash 列表

``` bash
$ git stash list
```

（17）删除 stash 列表

``` bash
$ git stash clear
```

（18）与分支名创建联系

``` bash
$ git push -u origin [分支名]
```

------

## Git使用规范



------

## Git工作流



------

## Stylish的使用



------

## 在Github上进行项目协作





-------

## Gitbook的使用





-------

## LinuxBash基础



---------

## 搭建个人博客

### Jekyll

### Hexo

### VuePress



-------

## Git服务器的搭建



-------

<Valine></Valine>