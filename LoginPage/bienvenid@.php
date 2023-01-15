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
    <div class="formulario">
        <h1>Bienvenido al fantástico mundo de Luciano Lemos</h1>
        <h3>Usted se encuentra dentro del usuario <?php echo $_SESSION['usuario']; ?></h3>
        <div>
            <a href="php/cerrar_sesion.php" class="botonLoco">Cerrar sesión</a>

        </div>
    </div>
    <div>
        <form action="php/cambio_password.php" method="POST" class="formulario">
            <input type="password" placeholder="Contraseña anterior" name="vieja_password">
            <input type="password" placeholder="Nueva contraseña" name="nueva_password">
            <button class="botonLoco">Cambiar contraseña</button>
        </form>
    </div>
</body>
</html>