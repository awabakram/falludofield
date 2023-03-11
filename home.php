<?php 
#This is a temporary webpage and needs to be repalced by the webpage that is actually meant to be loaded after
#logging in.
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

 ?>


<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Home!</title>
     <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
     <div class="container">

          <?php echo 'Hello, ', $_SESSION['nickname']; ?>
     
          <a href="logout.php">Logout</a>
     </div>
</body>
</html>
<?php 

}else{
     header("Location: index.php");
     exit();
}
 ?>