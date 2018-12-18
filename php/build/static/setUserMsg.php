<?php
require_once "link.php";
$id = $_GET['id'];
$name = $_GET['name'];
$conText = $_GET['conText'];
$iphoneNum = $_GET['iphoneNum'];
$Email = $_GET['Email'];
$password = $_GET['password'];
$setUserM = "update user set  name='$name', conText='$conText', iphoneNum='$iphoneNum', Email='$Email', password='$password' where  id='$id'";
$setUserMRs = mysqli_query($conn, $setUserM);
if ($setUserMRs) {
    echo "success";
}
?>