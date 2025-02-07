<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = trim($_POST['name']);
    $name1 = trim($_POST['name1']);
    $tel = trim($_POST['tel0']);
    $tel1 = trim($_POST['tel1']);

    if (empty($name) || empty($tel)) {
        echo "Пожалуйста, заполните все поля.";
        exit;
    }

    $to = "pochta@gmail.com";
    $subject = "Новая заявка с сайта";

    $message = "Имя: $name\n";
    $message .= "Телефон: $tel\n";
    $message .= "Телефон1: $tel1\n";

    $headers = "From: no-reply@yourdomain.com\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Ваше сообщение отправлено!";
    } else {
        echo "Ошибка отправки сообщения. Пожалуйста, попробуйте позже.";
    }
} else {
    echo "Некорректный запрос.";
}
?>