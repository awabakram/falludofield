<!DOCTYPE html>
<html>
    <head>
        <title>Create Account</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <body>
        <form action="signup.php" method="post">
        <h2>CREATE ACCOUNT</h2>
        <?php if(isset($_GET['error'])) { ?>
            <p class="error"> <?php echo $_GET['error']; ?></p>
        <?php } ?>

        <label>Username</label>
        <input type="text" name="uname" placeholder="Username..." required><br>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password..." required><br>
        <label>Re-Enter Password</label>
        <input type="password" name="repassword" placeholder="Re-enter Password..." required><br>
        <label>Nickname</label>
        <input type="text" name="nickname" placeholder="Nickname..." required><br>
        <label>Email</label>
        <input type="text" name="email" placeholder="Email..." required><br>

        <button type="submit">GO!</button><br>

    </body>


</html>