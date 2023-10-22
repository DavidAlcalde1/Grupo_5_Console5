window.addEventListener('load', function () {
    let formRegister = document.querySelector('form.registro')
    formRegister.addEventListener('submit', function (e) {
        let errores = [];
        
        let campoNombre = document.querySelector('#nombre');
        
        if (campoNombre.value === "") {
            errores.push("¡El campo de Nombre debe estar llenado!!!");
        
        } else if (/^([0-9])*$/.test(campoNombre.value)) {
            errores.push("¡Solo se permiten letras en el campo Nombre!!!");
        } else if (campoNombre.value.length >= 30 || campoNombre.value.length < 2 || /^\s+$/.test(campoNombre.value)) {
            errores.push("¡Solo se permiten mínimo 02 caracteres para el campo Nombre!!!");
        }
        // Validaciones del Apellido
        let campoApellido = document.querySelector('#apellido');
        
        if (campoApellido.value === "") {
            errores.push( "¡El campo de Apellido debe estar llenado¡¡¡")
        } else if (campoApellido.value.length >= 30 || campoApellido.value.length < 2 || /^\s+$/.test(campoApellido.value)) {
            errores.push( "¡Solo se permiten 30 letras para el campo Apellido¡¡¡")
        } else if (/^([0-9])*$/.test(campoApellido.value)) {
            errores.push( "¡Solo se permiten letras en el campo Apellido¡¡¡")
        }

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

        // Validaciones de la Imagen
        let campoImagen = document.querySelector('#image');
        if (campoImagen.files.length === 0) {
            errores.push("¡Debes seleccionar una imagen!");
        } else {
            // Verificar la extensión del archivo
            const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
            const fileName = campoImagen.files[0].name;
            const fileExtension = fileName.split(".").pop().toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                errores.push("¡La imagen debe ser de formato JPG, JPEG, PNG o GIF!");
            }
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