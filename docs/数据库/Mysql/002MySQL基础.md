# MySQL基础

## 初识Mysql

> SQL 命令式语言 第四代语言

### Mysql的分类

- DDL（Data Definition Language）
  - 数据定义语句，这些语句定义了不同的数据段、数据库、表、列、索引等数据库对象的定义。常用的语句关键字主要包括create、drop、alter等。
- DML（Data Manipulation Language）
  - 数据操纵语句，用于添加、删除、更新和查询数据库记录，并检查数据完整性，常用的语句关键字主要包括insert、delete、udpate和select等。
- DCL（Data Control Language）
  - 数据控制语句，用于控制不同数据段直接的许可和访问级别的语句。这些语句定义了数据库、表、字段、用户的访问权限和安全级别。主要的语句关键字包括grant、revoke等

### 基本语法

``` mysql
-- sql 语句
select * from table_name
```
1. SQL 关键字不区分大小写
2. 分号 ; 是区分语句的标志
3. MySQL 注释
``` mysql
# This comment continues to the end of line
-- This comment continues to the end of line

/* this is an in-line comment */

/*
this is a
multiple-line comment
*/

```
4. 推荐使用完全限定表(数据库.表名的格式)
5. 常用的 SQL 语句
``` mysql
SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
DROP DATABASE - deletes a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index
```

-------

## SQL

### DDL

#### 常用+基本了解

关键字：
- `create`
- `alert`
- `drop`

数据类型：
- `text` 文本类型
	- `char` 定长类型
	- `varchar` 可边长类型
	- `Text` 
	- `LongText`
	- `BloB` 存储二进制数据
	- `LongBolB` 
- `number` 数值类型
	- `int(sIZE)` 整型 size表示位数
	- `BIGINT` 长整型
	- `double（3，2）` 小数  共三位小数点后占两位，整数位占一位
	- `dicamal` 跟金钱有关的
- `Date/Time` 时间类型
	- `Date`  YYYY-MM-DD
	- `DateTime` YYYY-MM-DD HH:MI:SS
#### Create 

##### Create DB

```mysql
create database database_name
```

##### Create Table

```mysql
create table table_name(
-- 字段名 字段名 数据类型 [数据范围] [约束] 注释
) comment '表描述'
```

#### Drop

Drop database 

```mysql
DROP DATABASE database_name;
```

##### Drop table

```mysql
DROP TABLE table_name;
```

##### Drop index in MySQL

```mysql
ALTER TABLE table_name DROP INDEX index_name;
```

##### Truncate table 

```mysql
TRUNCATE TABLE table_name;
-- Truncate是一个能够快速清空资料表内所有资料的SQL语法。 并且能针对具有自动递增值的字段，做计数重置归零重新计算的作用。
```

#### Constraints

##### 非空约束 Not null

```mysql
CREATE TABLE PersonsNotNull (
P_Id int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
City varchar(255)
);
```

##### 唯一约束 Unique

```mysql
CREATE TABLE Persons (
P_Id int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
City varchar(255),
CONSTRAINT uc_PersonID UNIQUE (P_Id,LastName)
);
```

##### 主键约束 Primary Key

```mysql
CREATE TABLE table_name (
id INT AUTO_INCREMENT PRIMARY KEY,
);
```

```mysql
CREATE TABLE Persons (
P_Id int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
PRIMARY KEY (P_Id)
);
```

##### 外键约束 Foreign Key

- 主表 / 父表（主键所在的表）
- 从表 / 子表（外键所在的表）
- 必须引用主表主键
- 外键和主键数据类型一致

##### 创建外键

```mysql
alter table db_a.enroll
  add constraint
    enroll_fk_activityId
    foreign key (activityId)
      references db_a.activity (id);
```

##### 暂时禁用外键约束

```mysql
-- Try DISABLE KEYS:
SET FOREIGN_KEY_CHECKS=0;

-- make sure to
SET FOREIGN_KEY_CHECKS=1;
```

##### 缺省值 Default

```mysql
CREATE TABLE Persons (
P_Id int NOT NULL,
LastName varchar(255) NOT NULL,
City varchar(255) DEFAULT 'Sandnes'
)
```

##### 自增 Auto Increment

```mysql
CREATE TABLE Persons (
ID int NOT NULL UNSIGNED AUTO_INCREMENT,
PRIMARY KEY (ID)
);

ALTER TABLE Persons AUTO_INCREMENT = 100;
```

#### Alter

##### Rename

```mysql
ALTER TABLE old_table_name RENAME new_table_name;
```

##### ADD COLUMN

```mysql
ALTER TABLE table_name
ADD COLUMN column_name datatype [AFTER column_name | FIRST];
```

##### DROP COLUMN

```mysql
ALTER TABLE table_name
DROP COLUMN column_name;
```

##### MODIFY COLUMN

```mysql
ALTER TABLE table_name
MODIFY COLUMN column_name datatype [AFTER column_name | FIRST];
```

##### ADD CONSTRAINT PRIMARY KEY

```mysql
ALTER TABLE table_name
ADD CONSTRAINT primary_key_name PRIMARY KEY(columns);
```

##### CHANGE

```msyql
ALTER TABLE table_name
CHANGE old_column_name new_column_name datatype [AFTER column_name |
FIRST];
```

##### ADD CONSTRAINT FOREIGN KEY

```mysq;
ALTER TABLE table_name
ADD CONSTRAINT
foreign_key_name
FOREIGN KEY (columns)
REFERENCES parent_table(columns)
ON DELETE action
ON UPDATE action;


#       on delete cascade; -- 级联删除
#       on delete set null ; -- 级联置空
```

##### DROP FOREIGN KEY 

```mysql
ALTER TABLE table_name
DROP FOREIGN KEY constraint_name;
```

##### DROP INDEX

```mysql
ALTER TABLE table_name DROP INDEX unique_column_name;
```

##### IGNORE

```mysql
-- Delete all duplicated rows except one
ALTER IGNORE TABLE table_name
ADD UNIQUE INDEX idx_name (column);
```

```mysql
-- If you want to keep the row with the lowest id value:
DELETE n1 FROM names n1, names n2 WHERE n1.id > n2.id AND n1.name = n2.name;
-- If you want to keep the row with the highest id value:
DELETE n1 FROM names n1, names n2 WHERE n1.id < n2.id AND n1.name = n2.name;
```

#### Index

##### CREATE INDEX

```mysql
CREATE INDEX idx_name ON table_name(column);
```

##### DROP INDEX

```mysql
DROP INDEX idx_name ON table_name;
```

##### SHOW INDEX 

```mysql
SHOW INDEX FROM table_name;
```

- primary key > index
- unique > index
- foreign key > index (only for InnoDB)

Does MySQL index foreign key columns automatically?

- 单列索引 todo
- 组合索引 todo

------

### DML

>  语句(Data Manipulate Language)

#### Insert

```mysql
INSERT INTO table_name
VALUES (value1,value2,value3,...);
```

```mysql
INSERT INTO table_name (column1,column2,column3,...)
VALUES (value1,value2,value3,...);
```

#### Update

```mysql
UPDATE table_name
SET column1=value1,column2=value2,...
WHERE some_column=some_value;
```

#### Delete

```mysql
DELETE FROM table_name
WHERE some_column=some_value;
```

#### import

```mysql
mysql> source file_name.sql
```

#### load 导入

```mysql
LOAD DATA LOCAL INFILE 'path_to_your_csv_file'
INTO TABLE your_db.your_table
FIELDS TERMINATED BY ',' (column_name1, column_name2, ...)
SET id = NULL;
```

#### dump 备份

```mysql
-- your_mysql_directory/bin
mysqldump -B -u your_mysql_username -p database_name > file_name.sql
```



------

### DQL

> 语句(Data Query Language)

#### MySQL Show

- SHOW DATABASES; 显示服务器中所有的库
- SHOW TABLES; 显示库中所有的表
- SHOW TABLE STATUS FROM database_name; 显示库中所有表的信息
- SHOW TABLE STATUS WHERE Name = ‘table_name’; 显示表的信息
- SHOW [FULL] COLUMNS FROM table_name; 显示表中所有列的信息
- SHOW TABLE STATUS WHERE Name = ‘table_name’; 显示表的信息
- SHOW FULL TABLES FROM database_name; 显示库中的表和视图
- SHOW VARIABLES; 显示变量
- SHOW CREATE TABLE table_name; 显示建表语句
- SHOW CREATE VIEW view_name; 显示建视图语句
- SHOW INDEX FROM table_name; 显示表中索引信息

#### Select

```mysql
SELECT column_name,column_name
FROM table_name;
```

#### distinct

```mysql
SELECT DISTINCT column_name,column_name
FROM table_name;
```

#### where

```mysql
SELECT column_name,column_name
FROM table_name
WHERE column_name operator value;
```

#### AND & OR

```mysql
SELECT * FROM Customers
WHERE Country='Germany'
AND City='Berlin';
```

```mysql
SELECT * FROM Customers
WHERE City='Berlin'
OR City='München';
```

```mysql
SELECT * FROM Customers
WHERE Country='Germany'
AND (City='Berlin' OR City='München');
```

#### Order By

```mysql
SELECT column_name1, column_name2
FROM table_name
ORDER BY column_name1 ASC|DESC, column_name2 ASC|DESC;
-- ORDER BY 1, 2
```

#### Top limit

```mysql
SELECT column_name(s)
FROM table_name
LIMIT number1 OFFSET number2;
-- LIMIT number2, number1
```

- LIMIT 位于 ORDER BY 之后

#### Like

```mysql
SELECT column_name(s)
FROM table_name
WHERE column_name [NOT] LIKE pattern;
```

```mysql
CREATE TABLE table_name_new LIKE table_name
```

------

### DTL

> (Data Transaction Language)
>
> 在数据库系统中，一个事务是指：由一系列数据库操作组成的一个完整的逻辑过程

#### 事务的 ACID 特性

##### 原子性 Atomicity 

一个事务 transaction 中的所有操作，要么全部完成，要么全部不完成，不会结束在中间某个环节

##### 一致性 Consistency 

在事务开始之前和事务结束以后，数据库的完整性没有被破坏

##### 隔离性 Isolation 

数据库允许多个并发事务对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致

##### 持久性 Durability

事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失

#### 开启一次事务

```mysql
START TRANSACTION;
```

#### 事务处理语句

- DML 语句 insert update delete
- DQL 语句与事务无关

#### 显式结束事务

- COMMIT; 提交
- ROLLBACK; 回滚

#### 隐式结束事务

- DDL 语句

#### 事务保留点

```mysql
SAVEPOINT save_point_name; -- 设置保留点
ROLLBACK TO save_point_name; -- 回滚到保留点，不能结束事务
SET AUTOCOMMIT = 0;
SET AUTOCOMMIT = 1;
```

------

### DCL

> (Data Control Language)

#### 创建用户

```mysql
-- 创建用户
CREATE USER your_username@'localhost' IDENTIFIED BY 'some_password';
-- 改用户名
RENAME USER your_username@'localhost' TO new_your_username@'localhos
t';
-- 更改密码
SET PASSWORD [FOR your_username] = PASSWORD('new_your_password');
-- 删除用户
DROP USER your_username;
```

#### 权限

```mysql
-- 显示权限信息
SHOW GRANTS FOR your_username@'localhost';
-- 授予权限
GRANT some_privileges ON some_databases(some_tables) TO some_users@'l
ocalhost';
-- 撤销权限
REVOKE some_privileges ON some_databases(some_tables) FROM some_users
@'localhost';
-- 刷新权限
FLUSH PRIVILEGES;
-- 权限粒度
GRANT ALL
REVOKE ALL
ON database_name.*
ON database_name.table_name
```

------

## 数据类型

text, number, and Date/Time

### Text types 

| 数据类型       | 含义                            |
| -------------- | ------------------------------- |
| char(n)        | 固定长度，最多255个字符         |
| **varchar(n)** | **固定长度，最多65535个字符**   |
| tinytext       | 可变长度，最多255个字符         |
| text           | 可变长度，最多65535个字符       |
| mediumtext     | 可变长度，最多2的24次方-1个字符 |
| longtext       | 可变长度，最多2的32次方-1个字符 |

#### char和varchar

1. char(n) 若存入字符数小于n，则以空格补于其后，查询之时再将空格去掉。所以char类型存储的字符串末尾不能有空格，varchar不限于此。 
2. char(n) 固定长度，char(4)不管是存入几个字符，都将占用4个字节，varchar是存入的实际字符数+1个字节（n<=255）或2个字节(n>255)，所以varchar(4),存入3个字符将占用4个字节。 
3. char类型的字符串检索速度要比varchar类型的快。

#### varchar和text

1. varchar可指定n，text不能指定，内部存储varchar是存入的实际字符数+1个字节（n<=255）或2个字节(n>255)，text是实际字符数+2个字节。 
2. text类型不能有默认值。 
3. varchar可直接创建索引，text创建索引要指定前多少个字符。varchar查询速度快于text,在都创建索引的情况下，text的索引似乎不起作用。

### Number types

| 数据类型            | 描述                                                |
| ------------------- | --------------------------------------------------- |
| tinyint(m)          | 1个字节  范围(-128~127)                             |
| smallint(m)         | 2个字节  范围(-32768~32767)                         |
| mediumint(m)        | 3个字节  范围(-8388608~8388607)                     |
| **int(m)**          | 4个字节  范围(-2147483648~2147483647)               |
| bigint(m)           | 8个字节  范围`(+-9.22*10的18次方)`                  |
| float(m,d)          | 单精度浮点型    8位精度(4字节)     m总个数，d小数位 |
| **double(m,d)**     | 双精度浮点型    16位精度(8字节)    m总个数，d小数位 |
| **DECIMAL(size,d)** | 参数m<65 是总个数，d<30且 d<m 是小数位。            |

> INT(size)
> The size is just the display width, that is used when the field has ZEROFILL specified.

- 浮点型在数据库中存放的是近似值，而定点类型在数据库中存放的是精确值。 
- 设一个字段定义为float(5,3)，如果插入一个数123.45678,实际数据库里存的是123.457，但总个数还以实际为准，即6位。
- 取值范围如果加了unsigned，则最大值翻倍，如tinyint unsigned的取值范围为(0~256)。

### Date types

| 数据类型     | 描述                          |
| ------------ | ----------------------------- |
| **date**     | 日期 '2008-12-2'              |
| time         | 时间 '12:25:36'               |
| **datetime** | 日期时间 '2008-12-2 22:06:44' |
| timestamp    | 自动存储记录修改时间          |

- 若定义一个字段为timestamp，这个字段里的时间数据会随其他字段修改的时候自动刷新，所以这个数据类型的字段可以存放这条记录最后被修改的时间。



------

## SQL函数

### 聚合函数

> Aggregate function 

- AVG(col) 返回指定列的平均值
- COUNT(col) 返回指定列中非NULL值的个数
- MIN(col) 返回指定列的最小值
- MAX(col) 返回指定列的最大值
- SUM(col) 返回指定列的所有值之和
- GROUP_CONCAT(col) 返回由属于一组的列值连接组合而成的结果
- FIRST()
- LAST()
- SQL Group By 组查询
- SELECT aggregate_function(column_name)
- GROUP BY cloumn_name;把 column_name 列值相同的分为一组
- HAVING 组检索

```mysql
GROUP_CONCAT([DISTINCT] column_name [Order BY ASC/DESC column_name]
[Separator ‘分隔符’])
SET group_concat_max_len = 2048 -- default 1024
```

### 标量函数

> Scalar function

#### 数学函数

- ABS(x) 返回 x 的绝对值
- BIN(x) 返回 x 的二进制（OCT 返回八进制，HEX 返回十六进制）
- CEILING(x) 返回大于 x 的最小整数值
- EXP(x) 返回值 e（自然对数的底）的 x 次方
- FLOOR(x) 返回小于 x 的最大整数值
- GREATEST(x1,x2,…,xn) 返回集合中最大的值
- LEAST(x1,x2,…,xn) 返回集合中最小的值
- LN(x) 返回 x 的自然对数
- LOG(x,y) 返回 x 的以 y 为底的对数
- MOD(x,y) 返回 x / y 的模（余数）
- PI() 返回 PI 的值（圆周率）
- RAND() 返回 ０ 到 １ 内的随机值,可以通过提供一个种子参数使随机数生成器生成一个指定的值
- ROUND(x,y) 返回参数 x 的四舍五入的有 y 位小数的值
- SIGN(x) 返回代表数字 x 的符号的值
- SQRT(x) 返回一个数的平方根
- TRUNCATE(x,y) 返回数字 x 截短为 y 位小数的结果

#### 字符串函数

- ASCII(char) 返回字符的 ASCII 码值
- BIT_LENGTH(str) 返回字符串的比特长度
- CONCAT(s1,s2…,sn) 将 s1,s2...,sn 连接成字符串
- CONCAT_WS(sep,s1,s2…,sn) 将 s1,s2...,sn 连接成字符串，并用 sep 字符间隔
- INSERT(str,x,y,instr) 将字符串 str 从第 x 位置开始，y 个字符长的子串替换为字符串
- instr
- FIND_IN_SET(str,list) 分析逗号分隔的 list 列表，如果发现 str，返回 str 在 list
- 中的位置
- LCASE(str)或LOWER(str) 返回将字符串 str 中所有字符改变为小写后的结果
- LEFT(str,x) 返回字符串 str 中最左边的 x 个字符
- LENGTH(s) 返回字符串 str 中的字符数
- LTRIM(str) 从字符串 str 中切掉开头的空格
- POSITION(substr,str) 返回子串 substr 在字符串 str 中第一次出现的位置
- QUOTE(str) 用反斜杠转义 str 中的单引号
- REPEAT(str,srchstr,rplcstr) 返回字符串 str 重复 x 次的结果
- REVERSE(str) 返回颠倒字符串 str 的结果
- RIGHT(str,x) 返回字符串 str 中最右边的 x 个字符
- RTRIM(str) 返回字符串 str 尾部的空格STRCMP(s1,s2) 比较字符串 s1 和 s2
- TRIM(str) 去除字符串首部和尾部的所有空格
- UCASE(str)或UPPER(str) 返回将字符串 str 中所有字符转变为大写后的结果

#### 日期和时间函数

- CURDATE()或CURRENT_DATE() 返回当前的日期
- CURTIME()或CURRENT_TIME() 返回当前的时间
- DATE_ADD(date,INTERVAL int keyword) 返回日期 date 加上间隔时间 int 的结果
- DATE_FORMAT(date,fmt) 依照指定的 fmt 格式格式化日期 date 值
- DATE_SUB(date,INTERVAL int keyword) 返回日期 date 加上间隔时间 int 的结果
- DAYOFWEEK(date) 返回 date 所代表的一星期中的第几天(1~7)
- DAYOFMONTH(date) 返回 date 是一个月的第几天(1~31)
- DAYOFYEAR(date) 返回 date 是一年的第几天(1~366)
- DAYNAME(date) 返回 date 的星期名，如：SELECT DAYNAME(CURRENT_DATE);
- FROM_UNIXTIME(ts,fmt) 根据指定的 fmt 格式，格式化 UNIX 时间戳 ts
- HOUR(time) 返回 time 的小时值(0~23)
- MINUTE(time) 返回 time 的分钟值(0~59)
- MONTH(date) 返回 date 的月份值(1~12)
- MONTHNAME(date) 返回 date 的月份名
- NOW() 返回当前的日期和时间
- QUARTER(date) 返回 date 在一年中的季度(1~4)
- WEEK(date) 返回日期 date 为一年中第几周(0~53)
- YEAR(date) 返回日期 date 的年份(1000~9999)

------

## 数据库设计

### 数据库的设计 - 范式

> NF 规范的形式

1. 1NF: 没有复义的列 `添加列`
2. 2NF: 每行可以区分 `加主键`
3. 3NF: 没有冗余的列 `添加表`

> 3NF: 表中不能含有其他表的非主关键字值

### 电商网站

1. 电商网站

- db_ec
- tables
  - user
  - product
  - order

参考网[网易-严选](http://you.163.com/)

```mysql
drop database if exists db_ec;
create database db_ec;

-- user table
drop table if exists db_ec.user;
create table db_ec.user
(
  id       int auto_increment primary key comment 'id PK',
  email    varchar(255) not null unique comment 'email NN UN',
  password varchar(255) not null comment 'password NN',
  mobile   varchar(255) not null unique comment 'mobile NN UN'
) comment 'user table';

-- user table
drop table if exists db_ec.user_info;
create table db_ec.user_info
(
  id     int auto_increment primary key comment 'id PK',
  avatar varchar(255) comment 'avatar',
  gender char(2) comment 'gender',
  city   varchar(255) comment 'city',
  userId int comment 'user id FK'
) comment 'user info table';

-- category table
drop table if exists db_ec.category;
create table db_ec.category
(
  id         int auto_increment primary key comment 'id PK',
  title      varchar(255) not null comment 'title NN',
  picture    varchar(255) comment 'category picture',
  categoryId int comment 'parent category id FK'
) comment 'category table';

-- product table
drop table if exists db_ec.product;
create table db_ec.product
(
  id            int auto_increment primary key comment 'id PK',
  title         varchar(255)  not null comment 'title NN',
  price         decimal(8, 2) not null comment 'price NN',
  originalPrice decimal(8, 2) comment 'original price',
  -- ...
  -- slidePictures text not null comment 'slide pictures', -- '1.jpg 2.jpg 3.jpg 4.jpg 5.jpg'
  -- detail pictures ?
  categoryId    int comment 'category id FK'
) comment 'product table';


-- pictures table
drop table if exists db_ec.pictures;
create table db_ec.pictures
(
  id        int auto_increment primary key comment 'id PK',
  title     varchar(255) not null unique comment 'title NN UN',
  type      int(1)       not null comment 'type: 1-slide picture 2-detail picture',
  productId int comment 'product id FK'
) comment 'pictures table';


alter table db_ec.user_info
  add constraint
    user_info_fk_userId
    foreign key (userId)
      references db_ec.user (id);

alter table db_ec.category
  add constraint
    category_fk_categoryId
    foreign key (categoryId)
      references db_ec.category (id);

alter table db_ec.product
  add constraint
    product_fk_categoryId
    foreign key (categoryId)
      references db_ec.category (id);

alter table db_ec.pictures
  add constraint
    pictures_fk_productId
    foreign key (productId)
      references db_ec.product (id);


select *
from db_ec.user;

select *
from db_ec.user_info;

select *
from db_ec.category;

select *
from db_ec.product;

select *
from db_ec.pictures;
```

### 春游报名系统

- 管理员登录之后，添加活动名称，可以对活动进行 CRUD
- 学生注册
- 学生登录之后，选择自己想参加的活动，报名
- 管理员登录之后，查询学生报名情况，也可以选择活动，查看这个活动的报名情况

```mysql
drop database if exists db_a;
create database db_a;

drop table if exists db_a.user;
create table db_a.user
(
  id       int auto_increment primary key comment 'id PK',
  username varchar(255) not null comment 'username NN',
  password varchar(255) not null comment 'password NN',
  role     int(1)       not null default 0 comment 'role 0-student 1-admin NN'
) comment 'user table';

drop table if exists db_a.activity;
create table db_a.activity
(
  id    int auto_increment primary key comment 'id PK',
  title varchar(255) not null comment 'activity title NN'
) comment 'activity table';

drop table if exists db_a.enroll;
create table db_a.enroll
(
  id         int auto_increment primary key comment 'id PK',
  time       datetime not null default now() comment 'enroll time NN',
  userId     int      not null comment 'user id FK',
  activityId int      not null comment 'activity id FK'
) comment 'enroll table';

alter table db_a.enroll
  add constraint
    enroll_fk_userId
    foreign key (userId)
      references db_a.user (id);

alter table db_a.enroll
  add constraint
    enroll_fk_activityId
    foreign key (activityId)
      references db_a.activity (id);

-- add admin
insert into db_a.user value (null, 'admin', md5('123'), 1);

-- admin sign in 'xxx', 'yyy'
select *
from db_a.user
where username = 'admin'
  and password = md5('123');

-- create
insert into db_a.activity value (null, '植物园一日游');
insert into db_a.activity value (null, '动物园一日游');

-- delete
delete
from db_a.activity
where id = 1;

-- update
update db_a.activity
set title = ''
where id = 1;

-- retrieve
select *
from activity;


-- student sign up
insert into db_a.user(username, password) value ('Tom', md5('abc'));
insert into db_a.user(username, password) value ('Jerry', md5('def'));
insert into db_a.user(username, password) value ('Tester', md5('ghi'));


-- student sign in 'xxx', 'yyy'
select *
from db_a.user
where username = 'jerry'
  and password = md5('def');

# delete from db_a.user;
# set foreign_key_checks = 0;
# set foreign_key_checks = 1;
# truncate db_a.user;

-- student enroll
insert into db_a.enroll(id, userId, activityId) value (null, 2, 1);
insert into db_a.enroll(id, userId, activityId) value (null, 3, 2);

-- admin sign in retrieve
select u.username, a.title
from db_a.user u
       inner join db_a.enroll e
                  on u.id = e.userId
       inner join db_a.activity a
                  on e.activityId = a.id;

select u.username, a.title
from db_a.user u
       inner join db_a.enroll e
                  on u.id = e.userId
       inner join db_a.activity a
                  on e.activityId = a.id
where a.id = 1;

select *
from db_a.user;
select *
from db_a.activity;
select *
from db_a.enroll;
```

------

## 索引的使用

- 什么叫做索引？索引有什么用？
  - 表的数据量比较小  不创建索引
- 索引存在的缺点/弊端
- 什么情况？什么列适合创建索引。
  - 值相对离散

```mysql
show index from scott.emp;
-- MySQL, Primary key & Foreign key 默认为索引

create index idx_ename on scott.emp (ENAME);

drop index idx_ename on scott.emp;

show index from db_school.student;

select ENAME
from scott.emp;

-- 如果 index 只有好处，没有必要存在这个概念
create index ind_password on db_csdn.user(password); -- 434176 KB
create index ind_username on db_csdn.user(username); -- 434176 KB
create index ind_email on db_csdn.user(email); -- 434176 KB

show index from db_csdn.user;

select password, count(password)
from db_csdn.user
group by password
order by 2 desc
limit 10 offset 0;

select *
from db_csdn.user
limit 100 offset 0;

select password
from db_csdn.user
where password regexp '^\198[0-9]{1}[0-9]{1,2}[0-9]{1,2}$';
```

------

## 实战

### IP

> 将IP Address导入mysql数据库
>
> IP  Internet  Protocol  互联网协议

1. IPv4
   - 范围i在`[0-255]`   例如`192.168.1.1` 
   - 地址不太够
2. IPv6（暂时不考虑）

#### Load

```mysql
LOAD DATA LOCAL INFILE 'path_to_your_csv_file'
INTO TABLE your_db.your_table
FIELDS TERMINATED BY ',' (column_name1, column_name2, ...)
SET id = NULL;
```

#### 什么是csv？

#### 使用正则表达式

使用正则表达式替换IP中的数据
`(\d+\.\d+\.\d+\.\d+)` 
替换为 
`$1|`

转为UTF-8， 保存

```mysql
drop database if exists db_ip;
create database db_ip;

drop table if exists db_ip.ip;
create table db_ip.ip
(
  id  int auto_increment primary key comment 'id PK',
  min varchar(255) not null comment 'min ip NN',
  max varchar(255) not null comment 'max ip NN',
  loc varchar(255) not null comment 'location NN'
) comment 'ip address table';

load data local infile 'd:/ip.txt'
  into table db_ip.ip
  fields terminated by '|'
  (min, max, loc)
  set id = null;

select *
from db_ip.ip;

select count(*)
from db_ip.ip;

update db_ip.ip
set min = trim(min),
    max = trim(max),
    loc = trim(loc);

-- 166.111.3.207
-- SQL

select inet_aton('166.111.3.207'); -- inet: internet aton: address to number
select inet_ntoa(2792293327);

select loc
from db_ip.ip
where inet_aton('166.111.3.207') between inet_aton(min) and inet_aton(max);
```

------

### User

>  CSDN密码账号导入数据库

- 数据导入 MySQL 数据库

- 查询

  - 各列值的快速模糊查询
  - 排名前十的密码
  - 排名前十的邮箱
  - 用户名和邮箱名相同的数据
  - 密码可能是生日的数据
    - 哪一年出生的用户最多
    - 哪个星座的用户最多
  - 密码是 QQ 号的
  - 密码是手机号的
    - 哪个运营商的用户最多
  - 弱密码用户数据

  ```
   短密码
   纯数字密码
   纯字母密码
  ```

  - 强密码用户数据

  ```
   长密码
   字母和数字
   含特殊符号
  ```

```mysql
drop database if exists db_csdn;
create database db_csdn;

drop table if exists db_csdn.user;
create table db_csdn.user
(
  id       int auto_increment primary key comment 'id PK',
  username varchar(255) not null comment 'username NN',
  password varchar(255) not null comment 'password NN',
  email    varchar(255) not null comment 'email NN'
) comment 'user table';

load data local infile 'd:/csdn.txt'
  into table db_csdn.user
  fields terminated by '❤'
  (username, password, email)
  set id = null;

select *
from db_csdn.user;

-- 查询排名前十的密码？

select password, count(password)
from db_csdn.user
group by password
order by 2 desc
limit 10 offset 0;

select *
from db_csdn.user
where password like '%ppnn13_dkstFeb.1st%';


select md5('123Asd!@#123Asd!@#');

select *
from db_csdn.user;
```

------

## SQL语句练习

### 练习数据库创建

```mysql
-- MySQL dump 10.13  Distrib 5.6.30, for Win32 (AMD64)
--
-- Host: localhost    Database: scott
-- ------------------------------------------------------
-- Server version	5.6.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE = @@TIME_ZONE */;
/*!40103 SET TIME_ZONE = '+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0 */;
/*!40101 SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES = @@SQL_NOTES, SQL_NOTES = 0 */;

--
-- Current Database: `scott`
--
DROP DATABASE IF EXISTS `scott`;
CREATE DATABASE /*!32312 IF NOT EXISTS */ `scott` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `scott`;

--
-- Table structure for table `dept`
--

DROP TABLE IF EXISTS `dept`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dept` (
  `DEPTNO` INT(2) NOT NULL,
  `DNAME`  VARCHAR(14) DEFAULT NULL,
  `LOC`    VARCHAR(13) DEFAULT NULL,
  PRIMARY KEY (`DEPTNO`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dept`
--

LOCK TABLES `dept` WRITE;
/*!40000 ALTER TABLE `dept`
  DISABLE KEYS */;
INSERT INTO `dept` VALUES (10, 'ACCOUNTING', 'NEW YORK'), (20, 'RESEARCH', 'DALLAS'), (30, 'SALES', 'CHICAGO'),
  (40, 'OPERATIONS', 'BOSTON');
/*!40000 ALTER TABLE `dept`
  ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emp`
--

DROP TABLE IF EXISTS `emp`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emp` (
  `EMPNO`    INT(4) NOT NULL,
  `ENAME`    VARCHAR(10)  DEFAULT NULL,
  `JOB`      VARCHAR(9)   DEFAULT NULL,
  `MGR`      INT(4)       DEFAULT NULL,
  `HIREDATE` DATE         DEFAULT NULL,
  `SAL`      DOUBLE(7, 2) DEFAULT NULL,
  `COMM`     DOUBLE(7, 2) DEFAULT NULL,
  `DEPTNO`   INT(2)       DEFAULT NULL,
  PRIMARY KEY (`EMPNO`),
  KEY `FK_emp_deptno` (`DEPTNO`),
  CONSTRAINT `FK_emp_deptno` FOREIGN KEY (`DEPTNO`) REFERENCES `dept` (`DEPTNO`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emp`
--

LOCK TABLES `emp` WRITE;
/*!40000 ALTER TABLE `emp`
  DISABLE KEYS */;
INSERT INTO `emp` VALUES (7499, 'ALLEN', 'SALESMAN', 7698, '1981-02-20', 1600.00, 300.00, 30),
  (7521, 'WARD', 'SALESMAN', 7698, '1981-02-22', 1250.00, 500.00, 30),
  (7566, 'JONES', 'MANAGER', 7839, '1981-04-02', 2975.00, NULL, 20),
  (7654, 'MARTIN', 'SALESMAN', 7698, '1981-09-28', 1250.00, 1400.00, 30),
  (7698, 'BLAKE', 'MANAGER', 7839, '1981-05-01', 2850.00, NULL, 30),
  (7782, 'CLARK', 'MANAGER', 7839, '1981-06-09', 2450.00, NULL, 10),
  (7788, 'SCOTT', 'ANALYST', 7566, '1987-07-13', 3000.00, NULL, 20),
  (7839, 'KING', 'PRESIDENT', NULL, '1981-11-30', 5000.00, NULL, NULL),
  (7844, 'TURNER', 'SALESMAN', 7698, '1981-09-08', 1500.00, 0.00, 30),
  (7876, 'ADAMS', 'CLERK', 7788, '1987-07-13', 1100.00, NULL, 20),
  (7900, 'JAMES', 'CLERK', 7698, '1981-12-03', 950.00, NULL, 30),
  (7902, 'FORD', 'ANALYST', 7566, '1981-12-03', 3000.00, NULL, 20),
  (7934, 'MILLER', 'CLERK', 7782, '1982-01-23', 1300.00, NULL, 10);
/*!40000 ALTER TABLE `emp`
  ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salgrade`
--

DROP TABLE IF EXISTS `salgrade`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `salgrade` (
  `GRADE` INT(11) DEFAULT NULL,
  `LOSAL` INT(11) DEFAULT NULL,
  `HISAL` INT(11) DEFAULT NULL
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salgrade`
--

LOCK TABLES `salgrade` WRITE;
/*!40000 ALTER TABLE `salgrade`
  DISABLE KEYS */;
INSERT INTO `salgrade` VALUES (1, 700, 1200), (2, 1201, 1400), (3, 1401, 2000), (4, 2001, 3000), (5, 3001, 9999);
/*!40000 ALTER TABLE `salgrade`
  ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE = @OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE = @OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS = @OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION = @OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES = @OLD_SQL_NOTES */;

-- Dump completed on 2016-07-20 11:10:57


show tables from scott;

desc scott.emp;
select *
from scott.emp;
desc scott.dept;
select *
from scott.dept;
desc scott.salgrade;
```

### 练习题(一)

```mysql
# 1. 查找部门 30 中员工的详细信息
select *
from scott.emp
where DEPTNO = 30;
# 2. 找出从事 clerk 工作的员工的编号、姓名、部门号
select EMPNO, ENAME, DEPTNO
from scott.emp
where JOB = 'clerk';
# 3. 检索出奖金多于基本工资的员工信息
select *
from scott.emp
where COMM > SAL;
# 4. 检索出奖金多于基本工资 30% 员工信息
select *
from scott.emp
where COMM > SAL * 0.3;
# 5. 希望看到 10 部门的经理或者 20 部门的职员 clerk 的信息
select *
from scott.emp
where (DEPTNO = 10 and JOB = 'manager')
   or (DEPTNO = 20 and JOB = 'clerk');
# 6. 找出 10 部门的经理、20 部门的职员或者既不是经理也不是职员但是高于 2000 元的员工信息
select *
from scott.emp
where (DEPTNO = 10 and JOB = 'manager')
   or (DEPTNO = 20 and JOB = 'clerk')
   or (JOB <> 'manager' and JOB <> 'clerk' and SAL > 2000);
# 7. 找出获得奖金的员工的工作
select JOB, COMM
from scott.emp
where COMM > 0;
# 8. 找出奖金少于 100 或者没有获得奖金的员工的信息
select *
from scott.emp
where COMM < 100
   or COMM is null;
# 9. 查找员工雇佣日期是当月的最后一天的员工信息
select *
from scott.emp
where HIREDATE = last_day(HIREDATE);
# 10. 检索出雇佣年限超过 35 年的员工信息
select *
from scott.emp
where date_add(HIREDATE, interval 35 year) < now();
# 11. 找出姓名以 A、B、S 开始的员工信息
select ENAME
from scott.emp
WHERE substr(ENAME, 1, 1) IN ('a', 'b', 's');
# 12. 找到名字长度为 4 个字符的员工信息
select *
from scott.emp
where length(ENAME) = 4;
# 13. 名字中不包含 R 字符的员工信息
select *
from scott.emp
where ENAME not like '%r%';
# 14. 找出员工名字的前3个字符
select ENAME, substr(ENAME, 1, 3)
from scott.emp;
# 15. 将名字中 A 改为 a
select ENAME, replace(ENAME, 'a', 'A')
from scott.emp;
# 16. 将员工的雇佣日期拖后 10 年
select HIREDATE, date_add(HIREDATE, interval 10 year)
from scott.emp;
# 17. 返回员工的详细信息并按姓名排序
select *
from scott.emp
order by ENAME;
# 18. 返回员工的信息并按员工的工作年限降序排列
select *
from scott.emp
order by HIREDATE;
# 19. 返回员工的信息并按工作降序、工资升序排列
select *
from scott.emp
order by JOB desc, sal + ifnull(COMM, 0);
# 20. 返回员工的姓名、雇佣年份和月份，并按月份和雇佣日期排序
select ENAME, year(HIREDATE), month(HIREDATE), HIREDATE
from scott.emp
order by 3, HIREDATE;
# 21. 计算员工的日薪，每月按 30 天
select round((SAL + ifnull(COMM, 0)) / 30, 2)
from scott.emp;
# 22. 找出 2 月份雇佣的员工
select *
from scott.emp
where month(HIREDATE) = 9;
# 23. 至今为止，员工被雇佣的天数
select ENAME, HIREDATE, datediff(now(), HIREDATE)
from scott.emp;
# 24. 找出姓名中包含 A 的员工信息
select *
from scott.emp
where ENAME like '%a%';
# 25. 计算出员工被雇佣了多少年、多少月、多少日
```

### 练习题(二)

```mysql
# 1. 返回拥有员工的部门名、部门号
select distinct d.DNAME, d.DEPTNO
from scott.emp e
       join scott.dept d
            on e.DEPTNO = d.DEPTNO;
# 2. 工资多于 scott 的员工信息
select *
from scott.emp
where (SAL + ifnull(COMM, 0)) > (
  select (SAL + ifnull(COMM, 0))
  from scott.emp
  where ENAME = 'sco_tt'
);
# 3. 返回员工和所属经理的姓名?
select e1.ENAME, e2.ENAME
from scott.emp e1
       join scott.emp e2
            on e1.MGR = e2.EMPNO;
# 4. 返回雇员的雇佣日期早于其经理雇佣日期的员工及其经理姓名
select e1.ENAME, e2.ENAME
from scott.emp e1
       join scott.emp e2
            on e1.MGR = e2.EMPNO
where e1.HIREDATE < e2.HIREDATE;
# 5. 返回员工姓名及其所在的部门名称
select e.ENAME, d.DNAME
from scott.emp e
       join scott.dept d
            on e.DEPTNO = d.DEPTNO;
# 6. 返回从事 clerk 工作的员工姓名和所在部门名称
select e.ENAME, d.DNAME
from scott.emp e
       join scott.dept d
            on e.DEPTNO = d.DEPTNO
where e.JOB = 'clerk';
# 7. 返回部门号及其本部门的最低工资
select DEPTNO, min(sal + ifnull(COMM, 0))
from scott.emp
group by DEPTNO;
# 8. 返回销售部 sales 所有员工的姓名
select e.ENAME
from scott.emp e
       join scott.dept d
            on e.DEPTNO = d.DEPTNO
where d.DNAME = 'sales';
# 9. 返回工资多于平均工资的员工
select *
from scott.emp
where (sal + ifnull(COMM, 0)) > (
  select avg(sal + ifnull(COMM, 0))
  from scott.emp
);
# 10. 返回与 scott 从事相同工作的员工
select *
from scott.emp
where JOB = (
  select JOB
  from scott.emp
  where ENAME = 'sco_tt'
);
# 11. 返回比 30 部门员工平均工资高的员工姓名与工资
select *
from scott.emp
where SAL + ifnull(comm, 0) > (
  select avg(sal + ifnull(COMM, 0))
  from scott.emp
  where DEPTNO = 30
);
# 12. 返回工资高于30部门所有员工工资的员工信息
select *
from scott.emp
where SAL + ifnull(comm, 0) > (
  select max(sal + ifnull(COMM, 0))
  from scott.emp
  where DEPTNO = 30
);
# 13. 返回部门号、部门名、部门所在位置及其每个部门的员工总数
select d.DEPTNO, d.DNAME, d.LOC, count(e.ENAME)
from scott.emp e
       right join scott.dept d
                  on e.DEPTNO = d.DEPTNO
group by d.DEPTNO;
# 14. 返回员工的姓名、所在部门名及其工资
select e.ENAME, d.DNAME, e.SAL + ifnull(e.COMM, 0)
from scott.emp e
       join scott.dept d
            on e.DEPTNO = d.DEPTNO;
# 15. 返回雇员表中不在同一部门但是从事相同工作的员工信息
select e1.ENAME, e2.ENAME
from scott.emp e1
       join scott.emp e2
where e1.DEPTNO <> e2.DEPTNO
  and e1.JOB = e2.JOB;
# 16. 返回员工的详细信息，包括部门名
select e.*, d.DNAME
from scott.emp e
       join scott.dept d
            on e.DEPTNO = d.DEPTNO;
# 17. 返回员工工作及其从事此工作的最低工资
select JOB, min(sal + ifnull(COMM, 0))
from scott.emp
group by job;
# 18. 返回不同部门经理的最低工资
select deptno, min(sal + ifnull(COMM, 0))
from scott.emp
where JOB = 'manager'
group by DEPTNO;

select *
from scott.emp
where DEPTNO = 20;
# 19. 计算出员工的年薪，并且以年薪排序
select (sal + ifnull(comm, 0)) * 12
from scott.emp
order by 1;
# 20. 返回工资处于第 4 级别的员工的姓名
select e.ENAME, s.GRADE
from scott.salgrade s
       join scott.emp e
            on e.SAL + ifnull(e.COMM, 0) between s.LOSAL and s.HISAL
where s.GRADE = 4;
```

------
 <Valine></Valine>