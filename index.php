<!DOCTYPE html>
<!-- LOGIN PAGE -->
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login!</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <div class="container">

        <form action="login.php" method="post">
            <?php if(isset($_GET['error'])) { ?>
                <p class="error"> <?php echo $_GET['error']; ?></p>
            <?php } ?>
            
           
            <h1>Login</h1>
            <label>Username</label>
            <input type="text" name="uname"><br>
            <label>Password</label>
            <input type="password" name="password"><br>
         
            
            <button type="submit">Go!</button><br>
            <a href="signuppage.php">Create Account</a>
        </form>

    </div>


</body>
</html>