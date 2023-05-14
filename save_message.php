<?php
$message = $_POST['message'];

// Save the message to a file or database
// For simplicity, we'll save it to a text file
$file = fopen('messages.txt', 'a');
fwrite($file, $message . PHP_EOL);
fclose($file);
?>
