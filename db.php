<?php



    $host = 'localhost';
    $username = 'root';
    $password = 'root';
    try
    {
        $conn = new PDO("mysql:host=$host", $username, $password);
        echo "Connected to $host successfully.";
    }
    catch (PDOException $pe)
    {
        die("Could not connect to $host :" . $pe->getMessage());
    }

    #createDatabase("falludofieldDatabase");
    #createTables("UserTable");
    #addUser("Shazil123", "shazil", "shazil.shahzad@student.manchester.ac.uk", "bestPassword");
    #getUser(1);

    function getUser($id)
    {
        $sql = "SELECT username, nickname, email, password
        FROM UserTable
        WHERE userId = :id";

        $pdo = new pdo('mysql:host=localhost;dbname=mydb',
        'root', 'root');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
        'id' => $id
        ]);
        
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        while ($row = $stmt->fetch())
        {
            echo("<br>" . $row['username'] . " " . $row['nickname'] .
            " " .$row['email'] . " " . $row['password']);
        }
    }

    function addUser($username, $nickname, $email, $password)
    {
        $sql = "INSERT INTO UserTable (username, nickname, email, password) VALUES (:username, :nickname, :email, :password)";

        $pdo = new pdo('mysql:host=localhost;dbname=mydb', 'root', 'root');
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            'username' => $username,
            'nickname' => $nickname,
            'email' => $email,
            'password' => $password
        ]);
}

    function createTables($dbName)
    {
        $sql = "CREATE TABLE UserTable (
        userId INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(30) NOT NULL,
        nickname VARCHAR(30) NOT NULL,
        email VARCHAR(30) NOT NULL,
        password VARCHAR(128) NOT NULL)";

        $pdo = new pdo('mysql:host=localhost;dbname=' . $dbName . '', 'root', 'root');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        $pdo->query($sql);
    }


    function createDatabase($databaseName)
    {
        $sql = "CREATE DATABASE IF NOT EXISTS $databaseName";

        $pdo = new pdo('mysql:host=localhost;', 'root', 'root');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        $pdo->query($sql);
        showDatabases();
    }

    function showDatabases()
    {
        $sql = "SHOW DATABASES";
    
        $pdo = new pdo('mysql:host=localhost;', 'root', 'root');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        while ($row = $stmt->fetch())
        {
            print("<h3>" . $row['Database'] . "</h3>");
        }
    }


?>
