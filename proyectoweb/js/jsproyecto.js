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


// Ocultamos el botón de desconectar
/*function ocultar() {
    $(".logout").hide();
    $("#conectado").hide();
    $(".textoOculto").hide();
}*/

//document.getElementById("conectado").innerHTML = "| Bienvenid@ " + sessionStorage.getItem("user") + " |";

function miFuncion(xml) {

    var i;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("usuario");
    var loginCorrecto = false;
    var nombreUsuario = document.getElementById("user").value;
    var passUsuario = document.getElementById("pass").value;

    for (i = 0; i < x.length; i++) {

        if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == nombreUsuario) {

            if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == passUsuario) {

                loginCorrecto = true;
                //nombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
                //clave = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;

                if (typeof(Storage) !== 'undefined') {

                    sessionStorage.setItem('user', nombreUsuario);

                    sessionStorage.setItem('pass', passUsuario);

                    break;
                } else {
                    alert("El navegador no es compatible con SessionStorage.")
                }
            }
        }
    }

    if (loginCorrecto == true) {

        alert("Bienvenid@ " + nombreUsuario);
        $(".logout").show();
        $(".loginBoton").hide();
        $(".login").hide();
        $(".textoOculto").show();
        $("#conectado").value = nombreUsuario;
        $("#conectado").show();
        //document.getElementById('#loginBoton').style.display = "none";
        //document.getElementById('#conectado').value = nombreUsuario;
        //document.getElementById('#conectado').style.display = "block";
        //location.reload();
    } else {
        alert("Usuario o contraseña incorrectos.");
    }


}

function cerrarSesion() {
    if (typeof(Storage) !== "undefined") {
        if (confirm("¿Desea Cerrar Sesión?")) {
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("pass");
            location.reload();
        }
        return false;
    }
}

function comprobarLogin() {
    if (sessionStorage.getItem('user').length > 0) {
        document.getElementById('#loginBoton').style.display = "none";
        document.getElementById('#conectado').value = nombreUsuario;
        document.getElementById('#conectado').style.display = "block";

        document.getElementById('#logout').style.display = "inline-block";
        //  document.getElementById('.conectado').innerHTML = sessionStorage.getItem("usuario");
    } else {
        document.getElementById('#logout').style.display = "none";
    }
}

window.onload() = function launch() {
    comprobarLogin();
}