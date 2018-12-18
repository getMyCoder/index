<?php
require_once "link.php";
$name=$_GET['name'];
$password=$_GET['password'];
$index=$_GET['index'];
$getIndex="update user set indexNum='$index' where  name='$name' and password='$password'";
$getIndexRs=mysqli_query($conn,$getIndex);
if($getIndexRs){
    echo "success";
}
?>