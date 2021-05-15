function comprobarLogin() {
    if (sessionStorage.getItem("user").length > 0) {
        //$(".loginBoton").hide();
        //$(".logout").show();
        $(".conectado").show();
        //$(".textoOculto").show();
    }
}
//document.getElementById("conectado").innerHTML = "| Bienvenid@ " + sessionStorage.getItem("user") + " |";


function cerrarSesion() {
    if (typeof(Storage) !== "undefined") {
        if (confirm("¿Desea Cerrar Sesión?")) {
            sessionStorage.removeItem("user");
            location.reload();
        } else {

        }

    } else {
        alert("Este navegador no soporta web storage...");
    }

    return false;
}

function leerXML() {


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
    var nombre;
    var xmlDoc = xml.responseXML;

    var x = xmlDoc.getElementsByTagName("usuario");
    loginAceptado = false;

    for (i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == document.getElementById("user").value) {
            if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == document.getElementById("pass").value) {
                loginAceptado = true;
                nombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
                pass = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
                if (typeof(Storage) !== "undefined") {
                    // Código cuando Storage es compatible
                    sessionStorage.setItem("user", nombre);
                    sessionStorage.setItem("clave", pass);
                } else {
                    alert("El navegador no es compatible con SessionStorage.")
                        // Código cuando Storage NO es compatible
                }
                break;

            }
        }
    }

    if (loginAceptado == true) {
        window.alert("Bienvenid@ " + nombre);
        $(".loginBoton").hide();
        $(".login").hide();
        $(".logout").show();
        document.getElementById("conectado").innerHTML = "| Bienvenid@ " + sessionStorage.getItem("user") + " |";
        $(".conectado").show();
        $(".textoOculto").show();
        //location.reload();
        //window.history.go(-1);

    } else {
        window.alert("Usuario o contraseña incorrectos");
    }


}



window.onload = function() {
    $(".loginBoton").show();
    $(".logout").hide();
    $(".conectado").hide();
    $(".textoOculto").hide();

    comprobarLogin();
}