<?php
    
    // inicia las sesiones porque vamos a trabajar con ellas
    session_start();

    include 'conexion_be.php';

    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $contrasena = hash('sha512', $contrasena);


    $verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE email='$usuario'");
    $verificar_contrasena = mysqli_query($conexion, "SELECT * FROM usuarios WHERE password='$contrasena'");


    if(mysqli_num_rows($verificar_usuario)  > 0) {
        if(mysqli_num_rows($verificar_contrasena)  > 0) {
            $_SESSION['usuario'] = $usuario;
            header("location: ../bienvenid@.php");
            
            // echo '
            // <script>
            //     window.location = "../bienvenid@";
            // </script>
            // ';
            exit();
        }else{
            echo '
            <script>
                alert("El usuario existe, pero la contraseña no es la correcta. Por favor intentelo nuevamente");
                window.location = "../index.php";
            </script>
            ';
            exit();
            }
    }else{
        echo '
        <script>
            alert("No existe el usuario, por favor intentelo nuevamente");
            window.location = "../index.php";
        </script>
        ';
        exit();
    }
        





?>