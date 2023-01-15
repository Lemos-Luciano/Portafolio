<?php


    session_start();

    //Comprobación de seguridad, solo pueden acceder usuarios que hayan iniciado sesión
    if(!isset($_SESSION['usuario'])){
        echo '
            <script>
                alert("Acceso permitido solo para usuarios registrados, por favor debes iniciar sesion previamente");
                window.location = "index.php";
            </script>
        ';
        // header("location: index.php");
        session_destroy();
        die();
    }




?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <title>Bienvenid@</title>
</head>
<body>
    <h1>Bienvenido al fantástico mundo de Luciano Lemos</h1>
    <div class="container-form">
        <a href="php/cerrar_sesion.php">Cerrar sesión</a>

    </div>
</body>
</html>