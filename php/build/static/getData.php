<?php
require_once "link.php";
$name=$_GET['name'];
$password=$_GET['password'];
$getUserMsg="select * from user where name='$name' and password='$password'";
$getDataRs=mysqli_query($conn,$getUserMsg);
while($row=mysqli_fetch_assoc($getDataRs)){
    echo json_encode($row);
}
?>