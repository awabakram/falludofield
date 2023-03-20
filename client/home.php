<?php 
#This is a temporary webpage and needs to be repalced by the webpage that is actually meant to be loaded after
#logging in.
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

 ?>


<!DOCTYPE html>
<html lang="en">
<head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
     <title>Falludofield</title>
     <link rel="stylesheet" href="startpagecsssignedin.css">
</head>

<body>
     <div class="container">

          <?php echo 'Hello, ', $_SESSION['nickname']; ?>

     </div>
     <button onclick="window.location.href = 'logout.php';" class="signoutbutton">
                <h6>Sign out</h6>
        </button>
        <section>
                <div class="lining">
                        <div class="rectangle">                        
                                <h1 style="font-family: Helvetica" class="textcenter"><font size="7">FalLUDOfield</font></h1>
                        </div>
                </div>
                <button onclick="window.location.href = 'game.html';" class="playbutton">
                        <h4>Play</h4>
                </button>
                <button onclick="window.location.href = 'tc.html';" class="leaderboardbutton">
                        <h1>Leaderboard</h1>
                </button>
        </section>
</body>
</html>
<?php 

}else{
     header("Location: index.php");
     exit();
}
 ?>