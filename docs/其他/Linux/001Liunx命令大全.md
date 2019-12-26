# Linux命令大全
## 操作系统
#### 初识操作系统
- **操作系统（Operation System，OS）**
    ![](http://q1pt18a8n.bkt.clouddn.com/images/blog/%E5%85%B6%E4%BB%96/Linux/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.png)
- 操作系统的作用
    - 是现代计算机系统中`最基本和最重要`的系统软件
    - 是配置在计算机硬件上的`第一层软件`，是对`硬件系统`的`首次扩展`
    - 主要作用是`管理好硬件设备`，并为用户和应用程序提供一个简单的接口，以便于使用
    - 而其他的诸如编译程序、数据库管理系统，以及大量的应用软件，都直接依赖于操作系统的支持
- 不同应用领域的主流操作系统
    - 桌面操作系统
        - Windows系列 : 用户群体大
        - macOS : 适合于开发人员
        - Linux : 应用软件少
    - 服务器操作系统
        - Linux :安全、稳定、免费、占有率高
        - Windows Server：付费、占有率低
    - 嵌入式操作系统
        - Linux
    - 移动设备操作系统
        - iOS
        - Android（基于 Linux）
- 虚拟机
    - 虚拟机（Virtual Machine）指通过软件模拟的具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统
    - 虚拟系统通过生成现有操作系统的全新虚拟镜像，具有真实操作系统完全一样的功能
    - 进入虚拟系统后，所有操作都是在这个全新的独立的虚拟系统里面进行，可以独立安装运行软件，保存数据，拥有自己的独立桌面，不会对真正的系统产生任何影响
    - 而且能够在现有系统与虚拟镜像之间灵活切换的一类操作系统
#### 操作系统的发展历史
- 操作系统的发展历史
    - Unix
    - Minix
    - Linux-->林纳斯（Linus）
    - Unix家谱
        ![](http://q1pt18a8n.bkt.clouddn.com/images/blog/%E5%85%B6%E4%BB%96/Linux/unix%E5%AE%B6%E8%B0%B1.png)
- Linux 内核及发行版
    - Linux 内核版本
        - 内核（kernel）是系统的心脏，是运行程序和管理像磁盘和打印机等硬件设备的核心程序，它提供了一个在裸设备与应用程序间的抽象层
        - Linux 内核版本又分为 稳定版 和 开发版，两种版本是相互关联，相互循环
            - 稳定版：具有工业级强度，可以广泛地应用和部署。新的稳定版相对于较旧的只是修正一些 bug 或加入一些新的驱动程序
            - 开发版：由于要试验各种解决方案，所以变化很快
        - 内核源码网址：http://www.kernel.org
    - Linux 发行版本
        - Ubuntu
        - Redhat
        - CentOS
- Linux 的应用领域
    - 服务器领域
    - 嵌入式领域
    - 个人桌面领域
- 单用户操作系统和多用户操作系统
    - 单用户操作系统：指一台计算机在同一时间 只能由一个用户 使用，一个用户独自享用系统的全部硬件和软件资源
        - Windows XP 之前的版本都是单用户操作系统
    - 多用户操作系统：指一台计算机在同一时间可以由 多个用户 使用，多个用户共同享用系统的全部硬件和软件资源
        - Unix 和 Linux 的设计初衷就是多用户操作系统
- Windows 和 Linux 文件系统区别
    - Windows
        ![](http://q1pt18a8n.bkt.clouddn.com/images/blog/%E5%85%B6%E4%BB%96/Linux/Windows%E7%9B%98%E7%AC%A6.png)
        ![](http://q1pt18a8n.bkt.clouddn.com/images/blog/%E5%85%B6%E4%BB%96/Linux/Windows%E7%9B%AE%E5%BD%95.png)
    - Linux
        ![](http://q1pt18a8n.bkt.clouddn.com/images/blog/%E5%85%B6%E4%BB%96/Linux/Linux%E7%9B%98%E7%AC%A6.png)
        ![](http://q1pt18a8n.bkt.clouddn.com/images/blog/%E5%85%B6%E4%BB%96/Linux/linux%E7%9B%AE%E5%BD%95.png)
## Linux 主要目录速查表
![](http://q1pt18a8n.bkt.clouddn.com/images/blog/%E5%85%B6%E4%BB%96/Linux/Linux%E7%9B%98%E7%AC%A6.png)
- **/：根目录**
    - 一般根目录下只存放目录，在 linux 下有且只有一个根目录，所有的东西都是从这里开始
    - 当在终端里输入 /home，其实是在告诉电脑，先从 /（根目录）开始，再进入到 home 目录
- **/bin、/usr/bin：可执行二进制文件的目录**
    - 如常用的命令 ls、tar、mv、cat 等
- **/boot：放置 linux 系统启动时用到的一些文件**
    - 如 linux 的内核文件：/boot/vmlinuz，系统引导管理器：/boot/grub
- **/dev：存放linux系统下的设备文件**
    - 访问该目录下某个文件，相当于访问某个设备，常用的是挂载光驱mount /dev/cdrom /mnt
- **/etc：系统配置文件存放的目录**
    - 不建议在此目录下存放可执行文件，重要的配置文件有
        - /etc/inittab
        - /etc/fstab
        - /etc/init.d
        - /etc/X11
        - /etc/sysconfig
        - /etc/xinetd.d
- **/home：系统默认的用户家目录**
    - 新增用户账号时，用户的家目录都存放在此目录下
    - `~`表示当前用户的家目录
    - `~edu` 表示用户 edu 的家目录
- **/lib、/usr/lib、/usr/local/lib：系统使用的函数库的目录**
    - 程序在执行过程中，需要调用一些额外的参数时需要函数库的协助
- **/lost+fount：系统异常产生错误时，会将一些遗失的片段放置于此目录下**
- **/mnt: /media：光盘默认挂载点**
    - 通常光盘挂载于 /mnt/cdrom 下，也不一定，可以选择任意位置进行挂载
- **/opt：给主机额外安装软件所摆放的目录**
- **/proc：此目录的数据都在内存中**
    - 如系统核心，外部设备，网络状态，由于数据都存放于内存中，所以不占用磁盘空间，比较重要的文件有：/proc/cpuinfo、/proc/interrupts、/proc/dma、/proc/ioports、/proc/net/* 等
- **/root：系统管理员root的家目录**
- **/sbin、/usr/sbin、/usr/local/sbin：放置系统管理员使用的可执行命令** 
    - 如 fdisk、shutdown、mount 等。与 /bin 不同的是，这几个目录是给系统管理员 root 使用的命令，一般用户只能"查看"而不能设置和使用
- **/tmp：一般用户或正在执行的程序临时存放文件的目录**
    - 任何人都可以访问，重要数据不可放置在此目录下
- **/srv：服务启动之后需要访问的数据目录**
    - 如 www 服务需要访问的网页数据存放在 /srv/www 内
- **/usr：应用程序存放目录**
    - **/usr/bin**：存放应用程序
    - **/usr/share**：存放共享数据
    - **/usr/lib**：存放不能直接运行的，却是许多程序运行所必需的一些函数库文件
    - **/usr/local**：存放软件升级包
    - **/usr/share/doc**：系统说明文件存放目录
    - **/usr/share/man**：程序说明文件存放目录
- **/var：放置系统执行过程中经常变化的文件**
    - **/var/log**：随时更改的日志文件
    - **/var/spool/mail**：邮件存放的目录
    - **/var/run**：程序或服务启动后，其 PID 存放在该目录下
## 初识命令

## 文件和目录

## 远程管理

## 用户权限

## 系统信息

## 其他命令 





<Valine></Valine>