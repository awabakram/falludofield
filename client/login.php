<?php
#php code to run after the user clicks the "Go!" button from the loginpage.php page.
session_start();
include "db_conn.php";

if(isset($_POST['uname']) && isset($_POST['password'])) {
    
    function validate($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
}

$uname = validate($_POST['uname']);
$pass = validate($_POST['password']);

if(empty($uname)) {
    header("Location: loginpage.php");
    exit();
}
else if(empty($pass)) {
    header("Location: loginpage.php");
    exit();
}

#mysql to check if the login detals exist in the database.
$sql = "SELECT * FROM users WHERE user_name='$uname' AND password='$pass'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);
    if($row['user_name'] === $uname && $row['password'] === $pass) {
        #player's information is retrieved.
        $_SESSION['id'] = $row['id'];
        $_SESSION['user_name'] = $row['user_name'];
        $_SESSION['nickname'] = $row['nickname'];
        $_SESSION['email'] = $row['email'];
        header("Location: home.php");
        exit();
    }
    else{
        header("Location: loginpage.php?error=Incorrect Username or Password");
        exit();
    }
}
else {
    header("Location: loginpage.php");
    exit();
}