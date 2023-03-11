<?php
#establishes a connection to the falludofield_db database.

$sname= "localhost";
$unmae= "root";
$password = "";
$db_name = "falludofield_db";

$conn = mysqli_connect($sname, $unmae, $password, $db_name);

if (!$conn) 
{
    echo "Failed to connect to the database..";
}