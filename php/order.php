<?php

$post = (!empty($_POST)) ? true : false;

if($post)
{
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$email = htmlspecialchars($_POST['email']);
$comment = htmlspecialchars($_POST['comment']);
$price = htmlspecialchars($_POST['price']);
$title  = '► Поступил новый заказ на разработку сайта! ◄';
$subject = '► Вы сделали заказ на разработку сайта! ◄';
$message =
'<html>  
<head>  
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">  
</head>  
<body>  
<table width="768" cellpadding="0" cellspacing="0" bgcolor="e4e4e4" style="margin:0 auto;border:1px solid #C3BFBE">'.
	'<tr>
		<th>'.$name.'</th>
	</tr>'.
	'<tr>
		<th>'.$phone.'</th>
	</tr>'.
	'<tr>
		<th>'.$price.'</th>
	</tr>'.
'</table>
</body>
</html>';



$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: Web-Ulyanov <web-ulyanov@gmail.com>\r\n";

mail ("$email","$subject","$message","$headers");
mail ("mak7560@yandex.ru",
      "$title",
      "Имя: $name \n Телефон: $phone\n Email: $email ",
	  "$headers");

}
?>

