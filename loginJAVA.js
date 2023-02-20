




function RegisterUser()
{
    document.register_form.action = "signupPHP.php";
    username = document.getElementById("Username").value;
    password = document.getElementById("Password").value;
    if(password == "hehe")
    {
        window.location.href = "Login.html";  
    }
    return false;
}