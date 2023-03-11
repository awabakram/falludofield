<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Create Account!</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <body>
        <div class="container">

            <form action="signup.php" method="post">
                <?php if(isset($_GET['error'])) { ?>
                    <p class="error"> <?php echo $_GET['error']; ?></p>
                    <?php } ?>
                    
                <h1>CREATE ACCOUNT</h1>

                <label>Username</label>
                <input type="text" name="uname" required><br>
                <label>Password</label>
                <input type="password" name="password" required><br>
                <label>Re-Enter Password</label>
                <input type="password" name="repassword" required><br>
                <label>Nickname</label>
                <input type="text" name="nickname" required><br>
                <label>Email</label>
                <input type="text" name="email" required><br>
        
                <button type="submit">Go!</button><br>
                <a href="index.php">Back To Login</a>
            </form>
        </div>

    </body>


</html>