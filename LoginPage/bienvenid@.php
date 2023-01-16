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
    <div>
        <div class="formulario">
            <div class="texto">
                <h2>Bienvenido al fantástico mundo de Luciano Lemos</h2>
                <p>Usted se encuentra dentro del usuario <?php echo $_SESSION['usuario']; ?></p>
            </div>
            <div class="botones">
                <button class="botonLoco btnCambiarPass">Quieres cambiar la contraseña?</button>
                <!-- <a href="" class="botonLoco btnCambiarPass">Quieres cambiar la contraseña?</a> -->
                <a href="php/cerrar_sesion.php" class="botonLoco">Cerrar sesión</a>

            </div>
        </div>
        <div class="cambiarPass">
            <form action="php/cambio_password.php" method="POST" class="formulario">
                <input type="password" placeholder="Contraseña anterior" name="vieja_password">
                <input type="password" placeholder="Nueva contraseña" name="nueva_password">
                <button class="botonLoco">Cambiar contraseña</button>
            </form>
        </div>
    </div>



    <script src="js/script.js"></script>
</body>
</html>