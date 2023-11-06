window.addEventListener('load', function () {
    console.log('Evento load se ha disparado correctamente.');
    let formEdit = document.querySelector('form.edit')
    console.log('Este es FORM EDIT',formEdit)
    formEdit.addEventListener('submit', function (e) {
        let errores = [];
        
        let campoNombre = document.querySelector('#name');
        
        if (campoNombre.value.trim() === "") {
            errores.push("¡El campo de Nombre debe estar llenado!!!");
        
        } else if (campoNombre.value.length < 5 ) {
            errores.push("¡Solo se permiten mínimo 05 caracteres para el campo Nombre!!!");
        }
        // Validaciones de Descripción
        let campoDescripcion = document.querySelector('#description');
        
        if (campoDescripcion.value.trim() === "") {
            errores.push( "¡El campo de descripción debe estar llenado¡¡¡")
        } else if (campoDescripcion.value.length < 20 ) {
            errores.push( "¡El campo Descripción deberá tener al menos 20 caracteres!!!");
        }   
        // Validaciones de la Imagen
        // let campoImagen = document.querySelector('#image').value;
        // let imagenNueva = document.querySelector('#imagenNueva')
        // if (imagenNueva.files.length > 0) {
        //     // Verificar la extensión del archivo
        //     const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
        //     filename = imagenNueva.files[0].name;
        //     const fileExtension = filename.split(".").pop().toLowerCase();

        //     if (!allowedExtensions.includes(fileExtension)) {
        //         errores.push("¡La imagen debe ser de formato JPG, JPEG, PNG o GIF!");
        //     }
        // }
        // Otra opción para validar la imagen
        // let campoImagen = document.querySelector('#image');
        // if (campoImagen.files.length === 0) {
        //     console.log('no hay imagen',campoImagen.files);
        //     errores.push("¡Debes seleccionar una imagen!");
        // } else {
        //     // Verificar la extensión del archivo
        //     const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
        //     const fileName = campoImagen.files[0].name;
        //     const fileExtension = fileName.split(".").pop().toLowerCase();

        //     if (!allowedExtensions.includes(fileExtension)) {
        //         errores.push("¡La imagen debe ser de formato JPG, JPEG, PNG o GIF!");
        //     }
        // }

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