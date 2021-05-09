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


//Código para leer el XML y validar el usuario y contraseña
function leerXML() {
    // lee desde aquí.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            miFuncion(this);
        }
    };
    xhr.open("GET", "registrados.xml", true);
    xhr.send();
}

function miFuncion(xml) {

    var i;
    var usrNom;
    var usrPsw;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("usuario");
    var loginCorrecto;

    for (i = 0; i < x.length; i++) {

        if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == document.getElementById("userid").value &&
            x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == document.getElementById("pwd").value) {
            loginCorrecto = true;
            break;
        } else {
            loginCorrecto = false;
        }
    }

    if (loginCorrecto) {
        alert("Login correcto.");
        var div = document.getElementById("textoOculto");
        div.style.display = "block";
        var div2 = document.getElementsByClassName("login");
        div.style.display = "none";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }


}