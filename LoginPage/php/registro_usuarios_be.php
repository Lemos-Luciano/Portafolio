<?php

    include 'conexion_be.php';

    $nombre_completo = $_POST['nombre_completo'];
    $email = $_POST['email'];
    $contrasena = $_POST['contrasena'];
    // Encriptado de contraseña
    // $contrasena = hash('sha512', $contrasena);


    $consulta = "INSERT INTO usuarios(nombre_completo, email, contrasena)
              VALUES('$nombre_completo','$email','$contrasena')";




    // Verificar que no se repita el usuario
    $verificar_correo = mysqli_query($conexion, "SELECT * FROM usuarios WHERE email='$email' ");

    if(mysqli_num_rows($verificar_correo) > 0) {
        echo '
            <script>
                alert("Este correo ya esta registrado. Por favor, intentelo con uno diferente");
                window.location = "../index.php";
            </script>
            ';
            exit();
    }

    // Mensaje una vez creado el usuario
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