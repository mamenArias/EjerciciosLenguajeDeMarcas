<<<<<<< HEAD
        function leerXML() {
            // lee desde GitHub.
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    miFuncion(this);
                }
            };
            xhr.open("GET", "registrados.xml", true);
            xhr.send();
=======
window.onload = function comprobarLogin() {
    if (sessionStorage.getItem("user").length > 0) {
        $('#loginOculto').css('display', 'none');
        $('#logout').css('display', 'inline-block');
        $('#conectado').css('display', 'inline-block');
    }
}
document.getElementById("conectado").innerHTML = "| Bienvenid@ " + sessionStorage.getItem("user") + " |";


function cerrarSesion() {
    if (typeof(Storage) !== "undefined") {
        if (confirm("¿Desea Cerrar Sesión?")) {
            sessionStorage.removeItem("user");
            location.reload();
        } else {

>>>>>>> parent of 0a4f187 (prueba2)
        }


        function miFuncion(xml) {
            var i;
            var xmlDoc = xml.responseXML;
            var x = xmlDoc.getElementsByTagName("usuario");
            var checkingData = false;
            var nombreUsuario = document.getElementById("user").value;
            var passUsuario = document.getElementById("pass").value;
            for (i = 0; i < x.length; i++) {
                if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == nombreUsuario) {
                    if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == passUsuario) {
                        checkingData = true;
                        if (typeof(Storage) !== 'undefined') {
                            sessionStorage.setItem("user", nombreUsuario);
                            sessionStorage.setItem("pass", passUsuario);
                            location.reload();
                            break;
                        } else {
                            alert("El navegador no es compatible con SessionStorage.")
                        }
                    }
                }
            }
            if (checkingData == true) {
                alert("Bienvenido, " + nombreUsuario)
                    //window.history.go(-1)
            } else {
                window.alert("Usuario o contraseña incorrectos");
            }
        }



<<<<<<< HEAD
        function logOut() {
            if (typeof(Storage) !== "undefined") {
                if (confirm("¿Estás seguro?")) {
                    sessionStorage.removeItem("user");
                    sessionStorage.removeItem("pass")
                    location.reload();
=======
    var x = xmlDoc.getElementsByTagName("usuario");
    loginAceptado = false;

    for (i = 0; i < x.length; i++) {
        if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == document.getElementById("user").value) {
            if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == document.getElementById("pass").value) {
                loginAceptado = true;
                nombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
                pass = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
                if (typeof(Storage) !== 'undefined') {
                    // Código cuando Storage es compatible
                    sessionStorage.setItem('user', nombre);
                    sessionStorage.setItem('clave', pass);
                } else {
                    alert("El navegador no es compatible con SessionStorage.")
                        // Código cuando Storage NO es compatible
>>>>>>> parent of 0a4f187 (prueba2)
                }
                return false;
            }
        }

        function checking() {
            if (sessionStorage.getItem("user").length > 0) {
                $("#loginBoton").hide();
                $("#logout").show();
                $("#textOculto").show();

                $("#conectado").show();
            }
        }
        document.getElementById("conectado").innerHTML = "Bienvenido " + sessionStorage.getItem("user");

        window.onload = function launch() {
            $(".logout").hide();
            $("#conectado").hide();
            $(".textoOculto").hide();
            checking();
        }