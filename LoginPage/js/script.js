const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),
      $SignIn = document.querySelector('.sign-in'),
      $SignUp = document.querySelector('.sign-up');


document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $SignIn.classList.toggle('active')
        $SignUp.classList.toggle('active')
    }
});


// Pagina bienvenid@
const $btnCambiarPass = document.querySelector('.btnCambiarPass'),
      $cambiarPass = document.querySelector('.cambiarPass');


document.addEventListener('click', e => {
    if (e.target === $btnCambiarPass) {
        $cambiarPass .classList.toggle('active')
    }
});



// Mostrar contraseña y cambiar linterna
var contrasenaActual = document.getElementById('contrasenaActual'),
    btnlinterna =  document.getElementById('linterna'),
    contador=0;

function cambio ()
    { if (contador==0)
        {   
            contrasenaActual.classList.add('active');
            btnlinterna.classList.remove('off')
            btnlinterna.classList.add('on')
            contador=1;
        }
        else {
            contrasenaActual.classList.remove('active');
            btnlinterna.classList.remove('on')
            btnlinterna.classList.add('off')
            contador=0;
        }
    }

btnlinterna.addEventListener('click', cambio, true);



// Funciones eyes, ocultan y muestran las contraseñas
// importante colocar el punto cuando lo buscamos por clase
const eyeIcon = document.querySelector('.eyeIcon');
const eyeIcon2 = document.getElementById("eyeIcon2");

// corroboro si lo lee
// console.log(eyeIcon);
// console.log(eyeIcon2);

eyeIcon.addEventListener('click', function(){
    // creamos la constante del i (en caso contrario nos tomaria todo el span donde se encuentra)
    const icon = this.querySelector("i");
    // console.log(this.querySelector("i"));
    // console.log(this);
    // console.log(this.nextElementSibling.type); this muestra donde estoy, nextelement.. muestra el siguiente (en este caso el input), type el tipo del input
    if (this.nextElementSibling.type === "password") {
        this.nextElementSibling.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }else{
        this.nextElementSibling.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
})
eyeIcon2.addEventListener('click', function(){
    // creamos la constante del i (en caso contrario nos tomaria todo el span donde se encuentra)
    const icon = this.querySelector("i");
    // console.log(this.querySelector("i"));
    // console.log(this);
    // console.log(this.nextElementSibling.type); this muestra donde estoy, nextelement.. muestra el siguiente (en este caso el input), type el tipo del input
    if (this.nextElementSibling.type === "password") {
        this.nextElementSibling.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }else{
        this.nextElementSibling.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
})