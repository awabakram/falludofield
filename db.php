<?php
    $host = 'localhost';
    $username = 'root';
    $password = 'root';
    try
    {
        $conn = new PDO("mysql:host=$host", $username, $password);
        echo "Connected to $host successfully.";
        addUser("Jack321", "Jack", "jack@gmail.com", "TheBestPassword!");
        echo "added user successfully";
    }
    catch (PDOException $pe)
    {
        die("Could not connect to $host :" . $pe->getMessage());
    }

    
    


    function addUser($username, $nickname, $email, $password)
    {
       
        $sql = "INSERT INTO `usertable` (`Username`, `Password`, `Nickname`, `Email`) 
                VALUES ($username, $password, $nickname, $email)";

        $pdo = new pdo('mysql:host=localhost;dbname=falludofielddatabase',
        'root', 'root');
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
        'Username' => $username,
        'Nickname' => $nickname,
        'Email' => $email,
        'Password' => $password
        ]);

    }

?>
