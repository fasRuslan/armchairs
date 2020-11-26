<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$postData = json_decode(file_get_contents('php://input'), true);
$name = $postData['name'];
$phone = $postData['phone'];
$email = $postData['email'];
$ind = $postData['ind'];
$city = $postData['city'];
$address = $postData['address'];
$cart = $postData['cart'];
$cartTotal = $postData['cartTotal'];


$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'zayavka_sayt@mail.ru';
$mail->Password = '1786107tyu';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('zayavka_sayt@mail.ru');
$mail->addAddress('gardistyl@gmail.com');
$mail->isHTML(true);

$mail->Subject = 'Заявка с сайта';
$htmlBody = '
<!doctype html>
<html lang="ru"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="x-apple-disable-message-reformatting">
<title>Заказ</title>
</head>
<body>
<table border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0" width="100%">
    <tr>
        <td height="100%">
            <table border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0" width="100%">
                <tr>
                    <td>
                        <div>
                            Имя клиента: ' . $name . '
                        </div>
                        <div>
                            Телефон клиента: ' . $phone . '
                        </div>
                        <div>
                            E-mail клиента: ' . $email . '
                        </div>
                        <div>
                            Адрес: ' . $ind . $city . $address . '
                        </span>
                    </td>
                </tr>';
foreach ($cart as $item) :
    $htmlBody .=    '
                <tr>
                    <td>
                        <span style="display:inline-block; width:300px;">
                            Артикул: ' . $item["article"] . '
                        </span>
                        <span style="display:inline-block; width:300px;">
                            Название товара: ' . $item["name"] . '
                        </span>
                        <span style="display:inline-block; width:300px;">
                            Количество: ' . $item["quantity"] . '
                        </span>
                        <span style="display:inline-block; width:300px;">
                            Цвет: ' . $item["currentColor"] . '
                        </span>
                        <span style="display:inline-block; width:300px;">
                            Цена: ' . $item["price"] . '
                        </span>
                    </td>
                </tr>';
endforeach;
$htmlBody .= '<tr>
                    <td>
                        <span style="display:inline-block; width:300px;">
                            Cумма заказа: ' . $cartTotal . '
                        </span>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
        </td>
    </tr>
</table>
</body>
</html>';

$mail->Body = $htmlBody;
$mail->AltBody = '';

if (!$mail->send()) {
    echo 'Возникла ошибка, попробуйте еще раз';
} else {
    echo 'Спасибо, ' . $name . '! Ваш заказ принят. Мы скоро свяжемся с Вами!';
}
