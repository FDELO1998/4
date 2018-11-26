<?php
header("Content-type:text/html;charset=utf-8");
$link = @mysql_connect('localhost','root','20110807') or die("连接错误".mysql_error());

 if(mysql_select_db('wangyi',$link)){
 	mysql_query("set names utf8");	
 }else{
 	echo "fail";
 };
   $email=$_POST['email2'];
   $psd=$_POST['password2'];
   $sql= "select * from users";
   $result=mysql_query($sql);
while ($arr=mysql_fetch_array($result)) {
    if ($email == $arr["email"] && $psd==$arr["password"] ) {
     	 echo "<script type='text/javascript'>alert('登录成功');location='课设网易云音乐.html';</script>";
     	break;
     }else if (($email == $arr["email"]) && ($psd!=$arr["password"]) ) {
     	echo "<script type='text/javascript'>alert('用户名或者密码错误');</script>";
        break;
     }
};
?>