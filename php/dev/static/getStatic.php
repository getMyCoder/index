<?php
require_once "link.php";
$name=$_GET['name'];
$password=$_GET['password'];
$userMsg="select * from user where name='$name' and password='$password'";
$res = mysqli_query($conn,$userMsg );
if(mysqli_num_rows($res)>0 && $name && $password){
   $row=mysqli_fetch_assoc($res);
   session_start();
   $_SESSION['name']=$name;
   $_SESSION['password']=$password;
   echo 'success';
}else{
   echo 'error';
}


?>