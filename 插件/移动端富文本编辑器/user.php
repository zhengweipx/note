<?php
// 服务器名
define('SERVER_NAME', '47.92.1.126');

// 冷链数据库的访问参数
define('LENG_LIAN_DB_NAME', 'bdgis2');
define('LENG_LIAN_USER_NAME', 'root');
define('LENG_LIAN_PASSWORD', 'znmysqldatacenter');
define('LENG_LIAN_CHARACTER_SET', 'utf8');

// GIS数据库的连接字符串
define('GIS_DB_CONN_STRING','host=localhost port=5432 dbname=BeiDouGis user=postgres password=1234567890');


$content=$_post['content'];
$con = mysqli_connect(SERVER_NAME, LENG_LIAN_USER_NAME, LENG_LIAN_PASSWORD,LENG_LIAN_DB_NAME);
mysqli_set_charset($con, LENG_LIAN_CHARACTER_SET);
$sql="insert into usertype Usertype value '{$content}'";
$result=mysqli_query($con,$sql);
if ($result) {
    echo "OK！";
}
mysqli_close($con);