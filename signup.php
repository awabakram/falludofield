<?php
session_start();
include "db_conn.php";

if(isset($_POST['uname']) && isset($_POST['password']) 
    && isset($_POST['repassword']) && isset($_POST['nickname']) 
    && isset($_POST['email'])) {

        function validate($data){
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
}

$uname = validate($_POST['uname']);
$pass = validate($_POST['password']);
$repass = validate($_POST['repassword']);
$nickname = validate($_POST['nickname']);
$email = validate($_POST['email']);

if ( $pass === $repass)
{
    $sql = "SELECT * FROM users WHERE user_name='$uname'";
    $query = mysqli_query($conn, $sql);
    if (mysqli_num_rows($query) > 0)
    {
        echo "Username is already taken.";
    }
    else
    {
        $sql = "INSERT INTO users (user_name, password, nickname, email) VALUES ('$uname','$pass','$nickname','$email')";
        $query = mysqli_query($conn, $sql);
        header("Location: home.php");
    }

}
else
{
    echo "Passwords do not match.";
}