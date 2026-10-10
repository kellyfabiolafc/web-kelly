const formulario = document.getElementById("formContacto");
const respuesta = document.getElementById("respuestaFormulario");

if (formulario && respuesta) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value.trim();
        if (!nombre) {
            document.getElementById("nombre").focus();
            return;
        }
        
        respuesta.textContent = `Gracias por tu mensaje, ${nombre}.`;
        formulario.reset();
    });
}