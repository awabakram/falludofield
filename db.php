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
    createTables("UserTable");


    function createTables($dbName)
    {
        $sql = "CREATE TABLE user (
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
