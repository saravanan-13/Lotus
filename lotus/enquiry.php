<?php
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['comment'] ;
  $name = $_REQUEST['name'];
  $mobile = $_REQUEST['mobile'];
  $message = " Name : $name\n" . " Email : $email\n" . " Phone : $mobile\n" . " Message : $message\n";
  $to ="saravanansmart13@gmail.com";
  $subject = "Enquiry";
  $headers = "From: $email" ;
  mail($to,$subject,$message,$headers);
  header('Location: contact.html');
?>