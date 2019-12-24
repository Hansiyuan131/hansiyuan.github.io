# Java面向对象


## 面向对象思想

- [面向对象思想-百度百科](https://baike.baidu.com/item/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E6%80%9D%E6%83%B3)
    > Java语言是一种面向对象的程序设计语言，而面向对象思想是一种程序设计思想，我们在面向对象思想的指引下，使用Java语言去设计、开发计算机程序。 这里的对象泛指现实中一切事物，每种事物都具备自己的属性和行为。面向对象思想就是在计算机程序设计过程中，参照现实中事物，将事物的属性特征、行为特征抽象出来，描述成计算机事件的设计思想。 它区别于面向过程思想，强调的是通过调用对象的行为来实现功能，而不是自己一步一步的去操作实现。
- 区别:
    - 面向过程：强调步骤。
    - 面向对象：强调对象。
- 特点
    - 三大基本特征，即封装、继承和多态。
### 类和对象
- 类
    - 是一组相关属性和行为的集合。可以看成是一类事物的模板，使用事物的属性特征和行为特征来描述该类事物。
        - 属性：就是该事物的状态信息。
        - 行为：就是该事物能够做什么。
- 对象
    - 对象：是一类事物的具体体现。对象是类的一个实例,必然具备该类事物的属性和行为
- 举例：
    - 类：猫
        - 属性：名称、品种
        - 行为：叫、跑
    - 对象：Tom
        >类是对一类事物的描述，是抽象的。
        >对象是一类事物的实例，是具体的。
        >类是对象的模板，对象是类的实体。

#### 类格式
``` java
public class ClassName {
    //成员变量
    //成员方法
}
```

#### 类例子
``` java
public class Student {
    //成员变量
    String name；//姓名
    int age；//年龄
    //成员方法
    public void study() {
        System.out.println("学");
    } 
}
```
#### 对象的使用
``` java
public static void main(String[] args) {
    //创建对象格式：类名 对象名 = new 类名();
    Student s = new Student();
    System.out.println("s:"+s); //cn.itcast.Student@100363
    //直接输出成员变量值
    System.out.println("姓名："+s.name); //null
    System.out.println("年龄："+s.age); //0
    //给成员变量赋值
    s.name = "XXX";
    s.age = 22;
    //再次输出成员变量的值
    System.out.println("姓名："+s.name); //XXX
    System.out.println("年龄："+s.age); //22
    System.out.println("‐‐‐‐‐‐‐‐‐‐");
    //调用成员方法
    s.study(); // "学"
}
```
#### 对象内存图
### 成员变量和局部变量
- 在类中的位置不同 
    - 成员变量：类中，方法外
    - 局部变量：方法中或者方法声明上(形式参数)
- 作用范围不一样 
    - 成员变量：类中
    - 局部变量：方法中
- 初始化值的不同 
    - 成员变量：有默认值
    - 局部变量：没有默认值。必须先定义，赋值，最后使用
- 在内存中的位置不同 
    - 成员变量：堆内存
    - 局部变量：栈内存
- 生命周期不同 
    - 成员变量：随着对象的创建而存在，随着对象的消失而消失
    - 局部变量：随着方法的调用而存在，随着方法的调用完毕而消失
## 封装
### 概述
> 将属性隐藏起来，若需要访问某个属性，提供公共方法对其访问

- 封装的步骤
    1. 使用 private 关键字来修饰成员变量。
    2. 对需要访问的成员变量，提供对应的一对 getXxx 方法 、 setXxx 方法。
    3. 使用this关键字对封装优化
        > this代表所在类的当前对象的引用（地址值），即对象自己的引用
    4. 使用构造方法对封装优化
        > 1.如果你不提供构造方法，系统会给出无参数构造方法。
        > 2.如果你提供了构造方法，系统将不再提供无参数构造方法。
        > 3.构造方法是可以重载的，既可以定义参数，也可以不定义参数。
### 标准JavaBean
``` java
public class Student {
    //成员变量
    private String name;
    private int age;
    //构造方法
    public Student() {}
    public Student(String name,int age) {
        this.name = name;
        this.age = age;
    } 
    //成员方法
    public void setName(String name) {
        this.name = name;
    } 
    public String getName() {
        return name;
    } 
    public void setAge(int age) {
        this.age = age;
    } 
    public int getAge() {
        return age;
    }
}
```

## 继承

## 抽象类

## 接口

## 多态

## final

## 权限修饰符

## 内部类

## 引用类型


<Valine></Valine>