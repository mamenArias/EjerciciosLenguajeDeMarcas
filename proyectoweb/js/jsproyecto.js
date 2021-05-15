$(document).ready(main);
//Animación menú responsive
var contador = 1;

function main() {
    $('.menu_bar').click(function() {
        //$('.menuResponsive').toggle();

        if (contador == 1) {
            $('.menuResponsive').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('.menuResponsive').animate({
                left: '-100%'
            });
        }
    });
}

//Botón del menú lateral
var dropdown = document.getElementsByClassName("botonDesplegable");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

//Animación de las imágenes para abrirse a pantalla completa cuando hacemos click
$(document).ready(function() {
    //Al hacer clic en cualquier img ejecutamos la acción
    $('.content img').click(function() {
        //Capturamos el src de la img
        var postimg = $(this).attr('src');
        //Agregamos el src a una href simbólico
        $('#verimagenes').attr('href', postimg);
        //Hacemos clic en el enlace para activar el visor
        $('#verimagenes').click();
    });

});



// Ocultamos el botón de desconectar
/*function ocultar() {
    $(".logout").hide();
    $("#conectado").hide();
    $(".textoOculto").hide();
<<<<<<< HEAD
}*/


/*function comprobarLogin() {

    if (sessionStorage.getItem('user').length > 0) {
        $('#loginBoton').css('display', 'none');
        $('#logout').css('display', 'inline-block');
        $('.conectado').css('display', 'inline-block');
>>>>>>> parent of 0a4f187 (prueba2)
    }
}

window.onload() = function launch() {
    comprobarLogin();
}*/