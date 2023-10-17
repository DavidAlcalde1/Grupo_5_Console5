window.addEventListener("load", function(){
    let formulario = document.querySelector("form.login");
    formulario.addEventListener("submit", function(e){
        let errores = [];

        let campoEmail = document.querySelector(".ancho-mail");
        console.log("campoEmail", campoEmail);
        if(campoEmail.value === ""){
            errores.push("El campo de email debe estar completo");
        } else if (!campoEmail.value.includes('@')) {
            errores.push("El campo de email debe contener un '@'");
        }

        // if (errores.length > 0) {
        //     e.preventDefault(); // Evita que el formulario se envíe si hay errores.
            
        //     let ulErrores = document.querySelector(".errores ul");
        //     for (let i = 0; i < errores.length; i++) {
        //         ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
                
        //     }
        //     document.appendChild(ulErrores)
        // }

        if (errores.length > 0) {
            e.preventDefault(); // Evita que el formulario se envíe si hay errores.
        
            let ulErrores = document.querySelector("div.errores ul");
            ulErrores.innerHTML = ""; // Limpia cualquier contenido previo.
        
            for (let i = 0; i < errores.length; i++) {
                let li = document.createElement("li");
                li.textContent = errores[i];
                ulErrores.appendChild(li);
            }
        }
        
    });
});
