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
<div>  
<table width="768" cellpadding="0" cellspacing="0" bgcolor="e4e4e4" style="margin:0 auto;height: 150px;background: #8B8B8B;border-bottom: 3px solid rgb(116, 116, 116);border-right: 1px solid rgb(116, 116, 116);">'.
	'<tr style="border-bottom: 3px solid rgb(177, 177, 177);">
		<th style="padding: 5px 0;color: rgb(255,255,255);font-family: Verdana;font-size: 11px;text-transform: uppercase;">'.'Здраствуйте, '.$name.'!'.'</th>
	</tr>'.
	'<tr style="border-bottom: 3px solid rgb(177, 177, 177);">
		<td style="padding: 5px 30px;color: #FFF;">'.'Вы оставили заявку на разработку сайта, ориентировачная стоимость составляет: '.$price.'<br>'.'В течении дня с вами свяжется наш менеджер!'.'</td>
	</tr>'.
	'<tr>
		<td style="color: #FFF;padding: 5px 30px;">'.'Вы так же можете связаться с нами сами по телефону: <span style="font-weight: bold;margin-left: 10px;">8-800-XXX-XX-XX</span>'.'</td>
	</tr>'.
'</table>
</div>
</body>
</html>';



$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: Web-Ulyanov <web-ulyanov@gmail.com>\r\n";

mail ("$email","$subject","$message","$headers");
mail ("mak7560@yandex.ru",
      "$title",
      "Имя клиента: $name<br>Телефон: $phone<br>Email: $email<br>Сумма заказа: $price<br>Комментарий: $comment ",
	  "$headers");

}
?>

