




function RegisterUser()
{
    document.register_form.action = "signupPHP.php";
    username = document.getElementById("Username").value;
    password = document.getElementById("Password").value;
    repass = document.getElementById("REPassword").value;
    nickname = document.getElementById("Nickname").value;
    email = document.getElementById("Email").value;

    validUsername = validationUsername(username);    
    validPassword = validationPassword(password, repass);
    validNickname = validationNickname(nickname);
    validEmail = validationEmail(email);

    if(validUsername==true && validPassword==true && validNickname==true && validEmail==true)
    {
        
        window.location.href = "temporaryLoggedIN.html";
      
    }
    
    return false;


}

function validationUsername(username)
{
    if(username.length == 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function validationPassword(password, repass)
{
    if(password == repass)
    {
        //password must contain min 8 chars, 1 number,1 special char
        var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return passwordRegex.test(password);
    }
    else
    {
        return false;
    }
        
}

function validationNickname(nickname)
{
    if(nickname.length > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function validationEmail(email)
{
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}