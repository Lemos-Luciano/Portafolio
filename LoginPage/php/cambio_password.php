<?php

    include 'conexion_be.php';

    session_start();

    // se crea una variable, tuve problemas en colocar la sesión directamente
    $usuario =  $_SESSION['usuario'];



    $nueva_password = $_POST['nueva_password'];
    // Encriptado de contraseña
    // $nueva_password = hash('sha512', $nueva_password);
    $cambio_contrasena = "UPDATE usuarios SET contrasena = '$nueva_password' WHERE email = '$usuario'";


    $vieja_password = $_POST['vieja_password'];
    $consulta_vieja_contrasena = "SELECT contrasena FROM usuarios WHERE email = '$usuario'";


    // Obtiene la contraseña vieja y la crea en la variable contrasena_vieja
    $ejecutar = mysqli_query($conexion, $consulta_vieja_contrasena);
    if ($ejecutar) {
        while($row = $ejecutar->fetch_array()){
            $contrasena_vieja = $row['contrasena'];
        }
    }

    // Comprueba si la contraseña vieja es la correcta en caso afirmativo la cambia por la nueva
    if ($contrasena_vieja === $vieja_password) {
        $ejecutar = mysqli_query($conexion, $cambio_contrasena);
        echo '
        <script>
            alert("La contraseña ha sido modificada con éxito");
            window.location = "../bienvenid@.php";
        </script>
        ';
    } else {
        echo '
        <script>
            alert("La contraseña antigua colocada no es la correcta. Por favor, intentelo de nuevo");
            window.location = "../bienvenid@.php";
        </script>
        ';
    }

    exit();



?>
