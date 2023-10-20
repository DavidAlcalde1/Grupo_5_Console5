window.addEventListener('load', function () {
    this.document.addEventListener('submit', function (e) {
        e.preventDefault()
        // Validaciones del Nombre
        let campoName = document.querySelector("#name");
        let msgName = document.querySelector('#msgName');
        msgName.innerHTML = ""
        if (campoName.value === "") {
            msgName.innerHTML = "¡El campo de Nombre debe estar llenado!!!"
        } else if (campoName.value.length >= 30 || /^\s+$/.test(campoName.value)) {
            msgName.innerHTML = "¡Solo se permiten 30 letras para el campo Nombre!!!"
        } else if (/^([0-9])*$/.test(campoName.value)) {
            msgName.innerHTML = "¡Solo se permiten letras en el campo Nombre!!!"
        }

        // Validaciones de la Descripción
        let campoDescription = document.querySelector("#description");
        let msgDescription = document.querySelector('#msgDescription');
        msgDescription.innerHTML = ""
        if (campoDescription.value === "") {
            msgDescription.innerHTML = "¡El campo de Descripción debe estar llenado¡¡¡"
        } else if (campoDescription.value.length >= 100 || /^\s+$/.test(campoDescription.value)) {
            msgDescription.innerHTML = "¡Solo se permiten 100 letras para el campo Descripción¡¡¡"
        } else if (/^([0-9])*$/.test(campoDescription.value)) {
            msgDescription.innerHTML = "¡Solo se permiten letras en el campo Descripción¡¡¡"
        }

        // Validaciones del Precio
        let campoPrice = document.querySelector("#price");
        let msgPrice = document.querySelector('#msgPrice');
        msgName.innerHTML = ""
        if (campoPrice.value === "") {
            msgPrice.innerHTML = "¡Debe asignar un precio al producto!!!"
        }

        //Validaciones de Cantidad
        let campoCantidad = document.querySelector("#quantity");
        let msgQuantity = document.querySelector('#msgQuantity');
        msgQuantity.innerHTML = ""
        if (campoCantidad.value === "") {
            msgQuantity.innerHTML = "¡Debe asignar alguna cantidad al producto!!!"
        }

        //Validaciones de Descuento
        let campoDescuento = document.querySelector("#discount");
        let msgDiscount = document.querySelector('#msgDiscount');
        msgDiscount.innerHTML = ""
        if (campoDescuento.value === "") {
            msgDiscount.innerHTML = "¡Debe asignar alguna cantidad al descuento!!!"
        }


    })
})