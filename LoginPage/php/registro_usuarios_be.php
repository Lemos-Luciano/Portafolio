<?php

    include 'conexion_be.php';

    $nombre_completo = $_POST['nombre_completo'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $consulta = "INSERT INTO usuarios(nombre_completo, email, password)
              VALUES('$nombre_completo','$email','$password')";

    $ejecutar = mysqli_query($conexion, $consulta);

    if($ejecutar){
        echo '
            <script>
                alert("Usuario creado exitosamente");
                window.location = "../index.php";
            </script>
        ';
    }else{       
        echo '
        <script>
            alert("No se ha podido crear el usuario. Por favor, Intenteló de nuevo");
            window.location = "../index.php";
        </script>
        ';

    }

    mysqli_close($conexion)
?>