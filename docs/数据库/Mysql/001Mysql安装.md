# MySQL Install

> MySQL (mysql-5.7.20-winx64.zip)

1. unzip to your_mysql_directory/
2. create your_mysql_directory/my.ini

```
[mysql]
# 设置 mysql 客户端默认字符集
default-character-set=utf8mb4 
[mysqld]
#设置 3306 端口
port = 3306 
# 设置 mysql 的安装目录
basedir=D:\mysql-5.7.24-winx64
# 设置 mysql 数据库的数据的存放目录
datadir=D:\mysql-5.7.24-winx64\data
# 允许最大连接数
max_connections=200
# 服务端使用的字符集默认为比特编码的 latin1 字符集
character-set-server=utf8mb4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 开启标准的 explicit_defaults_for_timestamp 功能
explicit_defaults_for_timestamp=true
```
<!--more-->

3. CMD (as Adminisdtrator)

```
your_mysql_directory/bin>mysqld --initialize --user=mysql --console
```

> remember generated password

4. Install MySQL service

```
your_mysql_directory/bin>mysqld --install your_mysql_service_name --defaults-file="your_mysql_directory/my.ini"
```

5. Start MySQL service

```
net start mysql
```

6. Login in MySQL server

```
your_mysql_directory/bin>mysql -u root -p
```

7. Reset password

```
mysql>set password=password('your_new_password');
```

8. Check charset

  ```sql    
mysql> show variables where variable_name like 'char%' or variable_name like 'coll%';
+--------------------------+----------------------------------------+
| Variable_name            | Value                                  |
+--------------------------+----------------------------------------+
| character_set_client     | utf8mb4                                |
| character_set_connection | utf8mb4                                |
| character_set_database   | utf8mb4                                |
| character_set_filesystem | binary                                 |
| character_set_results    | utf8mb4                                |
| character_set_server     | utf8mb4                                |
| character_set_system     | utf8                                   |
| character_sets_dir       | D:\mysql-5.7.24-winx64\share\charsets\ |
| collation_connection     | utf8mb4_unicode_ci                     |
| collation_database       | utf8mb4_unicode_ci                     |
| collation_server         | utf8mb4_unicode_ci                     |
+--------------------------+----------------------------------------+
11 rows in set (0.00 sec)
  ```

9. 卸载 MySQL
- 停止 mysql 服务
    - `net stop mysql`
    - services.msc
- 删除 mysql 服务
    - `sc delete mysql`
    
10. IDEA 连接 MySQL
- View | Tool Windows | Database | + | Data Source | MySQL
- user
- password
- Download missing driver files
- Ctrl + Enter 

11. user@"%"

```
create user admin; 
GRANT ALL PRIVILEGES ON *.* TO admin@"%" IDENTIFIED BY 'admin' WITH GRANT OPTION;
flush privileges; 
```

 <Valine></Valine>