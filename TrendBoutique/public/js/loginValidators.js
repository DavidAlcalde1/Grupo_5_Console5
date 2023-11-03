window.addEventListener('load', function () {
    let formLogin = document.querySelector('form.login')
    formLogin.addEventListener('submit', function (e) {
        let errores = [];

        // Validaciones del Correo Electrónico
        let campoEmail = document.querySelector('#correo');
        if (campoEmail.value === "") {
            errores.push("¡El campo de correo electrónico debe estar llenado!");
        } else {
            // Utiliza una expresión regular para verificar el formato del correo electrónico
            if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(campoEmail.value)) {
                errores.push("¡El correo electrónico debe ser válido!");
            }
        }
        
        // Validaciones de Password
        let campoPassword = document.querySelector('#contrasena');
        
        if (campoPassword.value === "") {
            errores.push("¡El campo de Password es Obligatorio¡¡¡")
        }else if (campoPassword.value.length <= 8){
            errores.push("¡El campo de Password debe tener al menos 8 caracteres¡¡¡");
        }
                

        if (errores.length > 0) {
            e.preventDefault(); // Evita que el formulario se envíe si hay errores.
        
            let ulErrores = document.querySelector("div.errores ul");
            ulErrores.innerHTML = ""; // Limpia cualquier contenido previo.
        
            for (let i = 0; i < errores.length; i++) {
                let li = document.createElement("li");
                let br = document.createElement("br");
                li.textContent = errores[i];
                ulErrores.appendChild(li);
                ulErrores.appendChild(br);
            }
        }

    })
})