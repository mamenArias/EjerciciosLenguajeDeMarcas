        function leerXML() {
            // lee desde GitHub.
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    miFuncion(this);
                }
            };
            xhr.open("GET", "https://sergiolt.github.io/Publico/proyectoweb/xml/registrados.xml", true);
            xhr.send();
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
                            //sessionStorage.setItem(nombreUsuario, passUsuario);
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
                window.history.go(-1)
            }
        }



        function logOut() {
            if (typeof(Storage) !== "undefined") {
                if (confirm("¿Estás seguro?")) {
                    sessionStorage.removeItem("user");
                    sessionStorage.removeItem("pass")
                    location.reload();
                }
                return false;
            }
        }

        function checking() {
            if (sessionStorage.getItem(nombreUsuario).length > 0) {
                $("#loginBoton").hide();
                $("#logout").show();
                $("#textOculto").show();
                document.getElementById("conectado").innerHTML = sessionStorage.getItem("user");

            }
        }


        window.onload = function launch() {
            $(".logout").hide();
            $("#conectado").hide();
            $(".textoOculto").hide();
            checking();
        }