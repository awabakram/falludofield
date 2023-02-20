<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8">
        <title>Create Account</title>
        <link rel="stylesheet" href="style.css">
        <script src="loginJAVA.js"></script>
    </head>

    <body>
        <h1>Create Account</h1>
        
      
        <form name="register_form">
            <div>
                <label>Username</label>
                <input id="Username" name="Username" type="text">
            </div>
            <div>
                <label>Password</label>
                <input id="Password" name="Password" type="password">
            </div>
            <div>
                <label>Re-Password</label>
                <input id="REPassword" name="REPassword" type="password">
            </div>
            <div>
                <label>Nickname</label>
                <input id="Nickname" name="Nickname" type="text">
            </div>
            <div>
                <label>Email</label>
                <input id="Email" name="Email" type="text">
            </div>

            <div>
                <input id="signup" type="submit" value="Sign Up" onclick="return RegisterUser()">
            </div>
          
        </form>


       
    </body>
    
</html>