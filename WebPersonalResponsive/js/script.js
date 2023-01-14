$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    //Animación de scroll en botones barra izquierda
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
            500,
            'linear'
        );
        });
        

});


// Popup agradecimiento EN CONSTRUCCION
var btnAbrirPopup = document.getElementById("enviar"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopup = document.getElementById("btn-cerrar-popup");

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('activar');
});

