<?php
// Retrieve the messages from the file or database
// For simplicity, we'll read them from a text file
$messages = file('messages.txt', FILE_IGNORE_NEW_LINES);

echo json_encode($messages);
?>
