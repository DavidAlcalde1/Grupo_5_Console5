window.addEventListener("load", function(){
    console.log("La página se ha cargado completamente.");
    let formulario = document.querySelector("form.login");

    formulario.addEventListener("submit", function(e){
        let errores = [];

        let campoEmail = document.querySelector(".ancho-mail");

        if(campoEmail.value === ""){
            errores.push("El campo de email debe estar completo");
        } else if (!campoEmail.value.includes('@')) {
            errores.push("El campo de email debe contener un '@'");
        }

        if (errores.length > 0) {
            e.preventDefault(); // Evita que el formulario se envíe si hay errores.
            
            let ulErrores = document.querySelector(".errores ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
                
            }
        }
    });
});
