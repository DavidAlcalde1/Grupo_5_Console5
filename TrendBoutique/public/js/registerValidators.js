window.addEventListener('load', function () {
  this.document.addEventListener('submit', function (e) {
    e.preventDefault()
    // Validaciones del Nombre
    let campoNombre = document.querySelector("#nombre");
    let msgNombre = document.querySelector('#msgNombre');
    msgNombre.innerHTML = ""
    if (campoNombre.value === "") {
      msgNombre.innerHTML = "¡El campo de Nombre debe estar llenado!!!"
    } else if (campoNombre.value.length >= 30 || /^\s+$/.test(campoNombre.value)) {
      msgNombre.innerHTML = "¡Solo se permiten 30 letras para el campo Nombre!!!"
    } else if (/^([0-9])*$/.test(campoNombre.value)) {
      msgNombre.innerHTML = "¡Solo se permiten letras en el campo Nombre!!!"
    }

    // Validaciones del Apellido
    let campoApellido = document.querySelector("#apellido");
    let msgApellido = document.querySelector('#msgApellido');
    msgApellido.innerHTML = ""
    if (campoApellido.value === "") {
      msgApellido.innerHTML = "¡El campo de Apellido debe estar llenado¡¡¡"
    } else if (campoApellido.value.length >= 30 || /^\s+$/.test(campoApellido.value)) {
      msgApellido.innerHTML = "¡Solo se permiten 30 letras para el campo Apellido¡¡¡"
    } else if (/^([0-9])*$/.test(campoApellido.value)) {
      msgApellido.innerHTML = "¡Solo se permiten letras en el campo Apellido¡¡¡"
    }
    
    // Validaciones del email
    let campoEmail = document.querySelector("#correo");
    let msgEmail = document.querySelector('#msgEmail')
    msgEmail.innerHTML = ""
    if (campoEmail.value === "") {
      msgEmail.innerHTML = "¡El campo de email debe estar llenado¡¡¡"
    // } else if (!campoEmail.value.includes('@')) {
    } else if (!/\S+@\S+\.\S+/.test(campoEmail.value)) {
      msgEmail.innerHTML = "¡El email debe ser válido¡¡¡"
    }

    // Validaciones del teléfono
    let campoTelefono = document.querySelector("#telefono");
    let msgTelefono = document.querySelector('#msgTelefono');
    msgTelefono.innerHtml = "";
    if(campoTelefono.value === ""){
      msgTelefono.innerHTML = "¡El campo de Teléfono debe estar llenado¡¡¡"
    }

    // Validaciones de Ocupación
    let campoOcupacion = document.querySelector("#role");
    let msgOcupacion = document.querySelector('#msgOcupacion');
    msgOcupacion.innerHTML = "";
    if (campoOcupacion.value === ""){
      msgOcupacion.innerHTML = "¡El campo de Ocupación debe estar llenado¡¡¡"
    }else if (/^([0-9])*$/.test(campoOcupacion.value)) {
      msgOcupacion.innerHTML = "¡Solo se permiten letras en el campo Ocupación¡¡¡"
    }

    // Validaciones de Password
    let campoPassword = document.querySelector("#contrasena");
    let msgPassword = document.querySelector('#msgPassword');
    msgPassword.innerHTML = "";
    if (campoPassword.value === ""){
      msgPassword.innerHTML = "¡El campo de Password es Obligatorio¡¡¡"
    }

    // Validaciones de Ciudad
    let campoCiudad = document.querySelector("#ciudad");
    let msgCiudad = document.querySelector('#msgCiudad');
    msgCiudad.innerHTML = "";
    if (campoCiudad.value === ""){
      msgCiudad.innerHTML = "¡El campo de Ciudad debe estar llenado¡¡¡"
    }else if(/^([0-9])*$/.test(campoCiudad.value)){
      msgCiudad.innerHTML = "¡Solo se permiten letras en el campo Ciudad¡¡¡"
    }

    // Validación de Fecha de Nacimiento
    let campoFechaNacimiento = document.querySelector("#fechaNacimiento");
    let msgFechaNacimiento = document.querySelector('#msgFechaNacimiento');
    msgFechaNacimiento.innerHTML = "";

    if (campoFechaNacimiento.value === "") {
      msgFechaNacimiento.innerHTML = "¡El campo de Fecha de Nacimiento debe estar llenado!";
    } else {
      const fechaNacimiento = new Date(campoFechaNacimiento.value);
      const fechaActual = new Date();
      const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

      if (fechaActual.getMonth() < fechaNacimiento.getMonth() || (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--; // Restar 1 si no ha cumplido años todavía en este año.
      }

      if (edad < 18) {
        msgFechaNacimiento.innerHTML = "Debes ser mayor de 18 años para registrarte.";
      }
    }

    //Validaciones del sexo
    let opcionesRadio = document.querySelectorAll(".caja input[type=radio]");
    let msgRadio = document.querySelector('#msgRadio');
    msgRadio.innerHTML = "";

    let algunaOpcionSeleccionada = Array.from(opcionesRadio).some(opcion => opcion.checked);

    if (!algunaOpcionSeleccionada) {
      msgRadio.innerHTML = "Debes seleccionar una de las opciones de género";
    }

  })
})