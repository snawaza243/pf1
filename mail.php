<?php
$name = $_POST['name']
;$email = $_POST['email']
;$message = $_POST['message'];

$to = "snawaza243@gmail.com";

$subject = "Mail from portfolio Demo 1";
$text = "Name = ".$name. " \r\nEmail = ".$email. "\r\nMessage = ".$message;
$headers = "From: noreply@indiantechnoera.in"."\r\n"."CC:thisoneissam@gmail.com";
if($email !=NULL)
{
    mail($to,$subject,$text, $headers);
}

header("Location:thankyou.html");


?>