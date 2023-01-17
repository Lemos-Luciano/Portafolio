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
    <script src="https://kit.fontawesome.com/887a7d67c7.js" crossorigin="anonymous"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- https://cdnjs.com/libraries/font-awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Bienvenid@</title>
</head>
<body>
    <div class="containerBienvenida">
        <div class="formulario">
            <div class="texto">
                <h2>Bienvenido al fantástico mundo de Luciano Lemos</h2>
                <p>Usted se encuentra dentro del usuario</p>
                <h4><?php echo $_SESSION['usuario'];?></h4>
                <p>Su contraseña actual es:</p>
                <div class="passContainer">
                    <div class="containerLinterna">
                        <div class="linterna off" id="linterna"></div>
                        <!-- <button class="linterna" id="linterna"></button> -->
                    </div>
                    <!-- <div class="luciano"><i class="fa-duotone fa-flashlight luciano"></i></div> -->
                    <div class="contrasenaActual" id="contrasenaActual">
                        <h4><?php
                            include 'php/conexion_be.php';

                            // session_start();
                            $usuario =  $_SESSION['usuario'];
                            $consulta_vieja_contrasena = "SELECT contrasena FROM usuarios WHERE email = '$usuario'";


                            // Obtiene la contraseña vieja y la crea en la variable contrasena_vieja
                            
                            $ejecutar = mysqli_query($conexion, $consulta_vieja_contrasena);

                            if ($ejecutar) {
                                while($row = $ejecutar->fetch_array()){
                                    $contrasena_vieja = $row['contrasena'];
                                }
                            }

                            echo $contrasena_vieja;
                        ?></h4>
                    </div>

                </div>
            </div>
            <div class="botones">
                <button class="botonLoco btnCambiarPass">Quieres cambiar la contraseña?</button>
                <!-- <a href="" class="botonLoco btnCambiarPass">Quieres cambiar la contraseña?</a> -->
                <a href="php/cerrar_sesion.php" class="botonLoco">Cerrar <br> sesión</a>

            </div>
        </div>
        <div class="cambiarPass">
            <form action="php/cambio_password.php" method="POST" class="formulario">
                <div class="containerCambioPass">
                    <span class="eyeIcon"> <i class="fa-solid fa-eye-slash"></i> </span>
                    <input type="password" placeholder="Contraseña anterior" name="vieja_password"> 
                </div>
                <div class="containerCambioPass">
                    <span class="eyeIcon" id="eyeIcon2"> <i class="fa-solid fa-eye-slash"></i> </span>
                    <input type="password" placeholder="Nueva contraseña" name="nueva_password">
                </div>
                <button class="botonLoco">Cambiar contraseña</button>
            </form>
        </div>
    </div>


    <script src="js/script.js"></script>
</body>
</html>