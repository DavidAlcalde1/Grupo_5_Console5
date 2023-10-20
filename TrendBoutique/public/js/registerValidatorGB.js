window.addEventListener('load', function () {
  this.document.addEventListener('submit', function (e) {
    e.preventDefault()
    // Validaciones del Nombre
    let campoNombre = document.querySelector("#nombre");
    let msgNombre = document.querySelector('#msgNombre')
    msgNombre.innerHTML = ""
    if (campoNombre.value === "") {
      msgNombre.innerHTML = "El campo de Nombre debe estar llenado"
    } else if (campoNombre.value.length >= 30 || /^\s+$/.test(campoNombre.value)) {
      msgNombre.innerHTML = "Solo se permiten 30 letras para el campo Nombre"
    } else if (/^([0-9])*$/.test(campoNombre.value)) {
      msgNombre.innerHTML = "Solo se permiten letras en el campo Nombre"
    }

    // Validaciones del Apellido
    let campoApellido = document.querySelector("#apellido");
    let msgApellido = document.querySelector('#msgApellido')
    msgApellido.innerHTML = ""
    if (campoApellido.value === "") {
      msgApellido.innerHTML = "El campo de Apellido debe estar llenado"
    } else if (campoApellido.value.length >= 30 || /^\s+$/.test(campoApellido.value)) {
      msgApellido.innerHTML = "Solo se permiten 30 letras para el campo Apellido"
    } else if (/^([0-9])*$/.test(campoApellido.value)) {
      msgApellido.innerHTML = "Solo se permiten letras en el campo Apellido"
    }
    
    // Validaciones del email
    let campoEmail = document.querySelector("#correo");
    let msgEmail = document.querySelector('#msgEmail')
    msgEmail.innerHTML = ""
    if (campoEmail.value === "") {
      msgEmail.innerHTML = "El campo de email debe estar llenado"
    // } else if (!campoEmail.value.includes('@')) {
    } else if (!/\S+@\S+\.\S+/.test(campoEmail.value)) {
      msgEmail.innerHTML = "El email debe ser válido"
    }
  })
})