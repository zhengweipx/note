# 查询
> 核心功法 `select 字段[函数，运算] from 表  
[where][group by][having][order by][limit]`
* 基本语句
```sql
SELECT * FROM  user 
``` 
* 查询字段
```sql
SELECT id,name FROM  user
``` 
* 条件查询  `=` `>=` `<=` `=` `!=` 
```sql
SELECT id,name FROM  user WHERE id = 1
``` 
* 多条件  and  or
```sql
SELECT id,name FROM  user WHERE id = 1 and name='lisi'
``` 
* between 条件,表示在某一范围之间
```sql
SELECT id,name FROM  user WHERE id BETWEEN 1 and 3;
``` 
* in 条件 表示只要在这个集合内就ok
```sql
SELECT id,name FROM  user WHERE id in (2,3,10);
``` 
* 查询排序  order by  升序  asc  降序 desc
```sql
SELECT id,name FROM  user WHERE id in (2,3,10) ORDER  BY id DESC ;
``` 
* 多字段排序  字段一 desc，字段二 asc
```sql
SELECT id,name FROM  user WHERE id in (2,3,10) ORDER  BY id DESC ,price ASC ;
``` 
* 输出限制 limit n;
```sql
SELECT id,name FROM  user WHERE id in (2,3,10) ORDER  BY id DESC ,price ASC limit 1;
``` 
* 输出限制取长度 limit n,m;  (常用于分页);
```sql
SELECT id,name FROM  user WHERE id in (2,3,10) ORDER  BY id DESC ,price ASC limit 1,3;
```
* 模糊匹配 like  % 能代表n个字符
```sql
select name from goods WHERE name like '%电%'
```
* 模糊匹配 like  _ 只代表一个
```sql
select name from goods WHERE name like '_电_'
```
* 查询结果的运算  起别名
```sql
select ceil(price/10) as newprice,name from goods 
```
* 计算结果的行数 count()
用函数的时候，一定要注意，只能求结果，不要再去查询其他字段，
除非这个字段值所有行都一样
```sql
select count(*) as totle  from goods 
```
* 函数  avg    
```sql
select AVG(price) as totle  from goods 
```
* 函数  min    
```sql
select min(price),count(*) as totle  from goods 
```
* 函数  max   
```sql
select max(price) as totle  from goods 
```
* 函数  sum  
```sql
select sum(price) as totle  from goods 
```

* 分组 group by  
```sql
select sum(price) as totle  from goods group by pid
```
* 如果要对结果集进行筛选，那么可以用having，但是不能用where，
where只能对原字段进行筛选。
having不能删选原字段，where不能删选处理后的字段
```sql
select sum(price) as totle  from goods group by pid
```
## 子查询
* where 型子查询  
> 用一次查询的结果作为另外一次查询的条件
```sql
第一次查询的结果包含一行
select id,name  from goods WHERE price=(select max(price) from goods)
第一次查询的结果包含多行的时候
select id,name  from goods WHERE price in (select price from goods where pid=2)
```

* from  型字查询  
> 将一次查询的结果看成是临时的一张表
，然后在这个临时表里面去再次查询

```sql
SELECT name from (select * from goods WHERE pid=2) as tmp
```

## 多表查询
* 内连接  连接是有条件的
```sql
select man.id,man.name,women.name as wname,women.id as wid from man inner join women WHERE man.home=women.home   
```
* 左链接 
> 以左边表为准，如果右边表能匹配则匹配，匹配不成功则补null
```sql
select man.id,man.name,women.name as wname,women.id as wid from man left join women on man.home=women.home   
```
* 右链接
> 以右边表为准，如果左边表能匹配则匹配，匹配不成功则补null
```sql
select man.id,man.name,women.name as wname,women.id as wid from man right join women on man.home=women.home   
```




























