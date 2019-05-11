<?php
header("Content-type:text/html;charset=utf-8");//设置中文连接模式
$con = mysqli_connect("localhost","root","20110807","wangyi");//连接数据库
if(!$con){
 die("连接错误".mysqli_connect_error());//出错返回错误
};
$con -> query("SET NAMES utf8");
$name=$_POST['name'];//获得表单提交的内容
 $psd=$_POST['password'];
 $email=$_POST['email'];
 $sql="INSERT INTO users (name,password,email) VALUES ('$name','$psd','$email')";
 if ($con->query($sql) === TRUE) {
 	 echo "<script type='text/javascript'>alert('注册成功');location='课设网易云音乐.html';</script>";
 }else{
 	 echo "Error: " . $sql . "<br>" . $conn->error;
 }
 $con->close();//123456
?>