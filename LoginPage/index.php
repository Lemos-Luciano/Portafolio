<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <title>LoginPage</title>
</head>
<body>
    <div class="container-form sign-up">
        <div class="welcome-back">
            <div class="mensaje">
                <h2>Bienvenido al login creado por Luciano Lemos</h2>
                <p>Si ya tienes una cuenta, por favor, inicia sesión.</p>
                <button class="sign-up-btn">Iniciar sesión</button>
            </div>
        </div>
        <!-- formulario crear usuario -->
        <form action="php/registro_usuarios_be.php" method="POST" class="formulario">
            <h2 class="crearCuenta">Crear una cuenta</h2>
            <p class="cuentaGratis">Crea una cuenta gratis</p>
            <input type="text" placeholder="Nombre" name="nombre_completo">
            <input type="email" placeholder="Email" name="email">
            <input type="password" placeholder="Contraseña" name="password">
            <button class="botonLoco">Registrarse</button>
        </form>
    </div>


    <div class="container-form sign-in">
        <!-- Formulario iniciar sesión -->
        <form action="php/login_usuarios_be.php" method="POST" class="formulario">
            <h2 class="crearCuenta">Iniciar sesión</h2>
            <p class="cuentaGratis">Introduce tus datos</p>
            <input type="email" placeholder="Email" name="usuario">
            <input type="password" placeholder="Contraseña" name="contrasena">
            <button class="botonLoco">Iniciar sesión</button>
        </form>
        <div class="welcome-back">
            <div class="mensaje">
                <h2>Bienvenido al login creado por Luciano Lemos</h2>
                <p>Si aún no tienes una cuenta, por favor, create una cuenta aquí.</p>
                <button class="sign-in-btn">Registrarse</button>
            </div>
        </div>

    </div>



    <script src="js/script.js"></script>
</body>
</html>