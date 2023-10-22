window.addEventListener('load', function () {
    let formRegister = document.querySelector('form.create')
    formRegister.addEventListener('submit', function (e) {
        let errores = [];
        
        let campoNombre = document.querySelector('#name');
        
        if (campoNombre.value === "") {
            errores.push("¡El campo de Nombre debe estar llenado!!!");
        
        } else if (campoNombre.value.length < 5 ) {
            errores.push("¡Solo se permiten mínimo 05 caracteres para el campo Nombre!!!");
        }
        // Validaciones de Descripción
        let campoDescripcion = document.querySelector('#description');
        
        if (campoDescripcion.value === "") {
            errores.push( "¡El campo de Apellido debe estar llenado¡¡¡")
        } else if (campoDescripcion.value.length < 20 ) {
            errores.push( "¡El campo Descripción deberá tener al menos 20 caracteres!!!");
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