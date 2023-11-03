window.addEventListener("load", function(){
    
    let formRegistro = document.querySelector("form.registro");
    formRegistro.addEventListener("submit", function(e){
        let erroresReg = [];

        //Validaciones front de Nombre
        let campoNombre = document.querySelector("#nombre");
        if(campoNombre.value === ""){
            erroresReg.push("El campo de Nombre debe estar llenado")
        }else if(campoNombre.value.length == 30 || /^\s+$/.test(campoNombre.value)){
            erroresReg.push("Solo se permiten 30 letras para el campo Nombre")
        }else if(/^([0-9])*$/.test(campoNombre.value)){
            erroresReg.push("Solo se permiten letras en el campo Nombre")
        }

        //Validaciones front de Apellido
        let campoApellido = document.querySelector("#apellido");
        if(campoApellido.value === ""){
            erroresReg.push("El campo de Apellido debe estar llenado")
        }else if(campoApellido.value.length == 40 || /^\s+$/.test(campoApellido.value)){
            erroresReg.push("Solo se permiten 40 letras para el campo Apellido")
        }else if(/^([0-9])*$/.test(campoApellido.value)){
            erroresReg.push("Solo se permiten letras en el campo Apellido")
        }
                
        //Validaciones front de Email
        let campoEmail = document.querySelector("#email");
        if(campoEmail.value === ""){
            erroresReg.push("El campo de email debe estar llenado");
        } else if (!campoEmail.value.includes('@')) {
            erroresReg.push("El campo de email debe contener un '@'");
        }

        if (erroresReg.length > 0) {
            e.preventDefault(); // Evita que el formulario se envíe si hay errores.
        
            let ulErroresReg = document.querySelector("div.errores ul");
            ulErroresReg.innerHTML = ""; // Limpia cualquier contenido previo.
        
            for (let i = 0; i < erroresReg.length; i++) {
                let li = document.createElement("li");
                li.textContent = erroresReg[i];
                ulErroresReg.appendChild(li);
            }
        }

        
        
    });
});
