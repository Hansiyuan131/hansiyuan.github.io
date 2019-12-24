# Java基础语法

## 前言
 
### Java是什么？   
- Java语言是美国Sun公司1995年推出的高级的编程语言
### Java发展历史？
- 1995年Sun公司发布Java1.0版本
- 2009年Oracle甲骨文公司收购Sun公司，并于2011发布Java 1.7版本
- 2014年发布Java 1.8版本
- 2017年发布Java 9.0版本
### Java语言能做什么？
- 互联网程序的开发等

## 环境搭建

### JVM是什么？

- Java虚拟机，简称JVM，是运行所有Java程序的假想计算机，是Java程序的运行环境，是Java 最具吸引力的特性之一。我们编写的Java代码，都运行在 JVM 之上
- [JVM-百度百科](https://baike.baidu.com/item/JVM)

#### 为什么说Java跨平台？

- 任何软件的运行，都必须要运行在操作系统之上，而我们用Java编写的软件可以运行在任何的操作系统上，这个特性称为Java语言的跨平台特性。该特性是由JVM实现的，我们编写的程序运行在JVM上，而JVM运行在操作系统上。
    ![为什么说Java跨平台？](http://q1pt18a8n.bkt.clouddn.com/images/blog/Java/Java%E5%9F%BA%E7%A1%80/Java%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95/jvm.png)

### JRE和JDK是什么？

- JRE (Java Runtime Environment) ：是Java程序的运行时环境，包含 JVM 和运行时所需要的 核心类库 。
- JDK (Java Development Kit)：是Java程序开发工具包，包含 JRE 和开发人员使用的工具。
    ![JRE和JDK是什么](http://q1pt18a8n.bkt.clouddn.com/images/blog/Java/Java%E5%9F%BA%E7%A1%80/Java%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95/jdk.png)
- JDK > JRE > JVM

### Java环境配置

1. JDK安装
2. JAVA_HOME环境变量的配置
    - 变量名：`JAVA_HOME` ，变量值：JDK9的安装目录 例：`c:\Java9\jdk-9.0.1`
    - `Path`环境变量新增值`%JAVA_HOME%\bin; `
3. 测试安装
    - DOS命令行输入`java`
    - DOS命令行输入`javac`

## HelloWorld

### Java程序开发步骤

> Java程序开发的三个步骤：编写、编译、运行。

- 编写
    > 后缀名为 .java 文件 HelloWorld.java
    ``` java
    public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }
    ```
- 编译Java源文件
    > Javac编译后产生了一个新的文件 HelloWorld.class    
    > 是Java的可运行文件，称为字节码文件.
    > 将我们编写的Java源文件翻译成JVM认识的class文件，在这个过程中， javac 编译器会检查我们所写的程序是否有错误，有错误就会提示出来，如果没有错误就会编译成功。
-  运行Java程序
    > 使用 java 命令进行运行 `java HelloWorld`
    > 将 class文件 交给JVM去运行，此时JVM就会去执行我们编写的程序了。

## 常量、变量和数据类型及运算
- 常量：是指在Java程序中固定不变的数据。
- 变量：常量是固定不变的数据，那么在程序中可以变化的量称为变量。
- 数据类型分类
    - 基本数据类型：包括 整数 、 浮点数 、 字符 、 布尔 。
    - 引用数据类型：包括 类 、 数组 、 接口 。

> long类型：建议数据后加L表示。float类型：建议数据后加F表示。

### 数据类型转换

#### 自动转换

#### 强制转换

### 运算符

## 方法

<Valine></Valine>