const guardarInformacion = document.getElementById("guardar")
const vaciarInformacion = document.getElementById("vaciar")
const blogNotas = document.getElementById("blog")

// Cargar contenido guardado al iniciar
const almacenado = localStorage.getItem("informacionP")
if (almacenado !== null) {
    blogNotas.value = almacenado
}

function conseguirInfo(){
    const texto = blogNotas.value
    localStorage.setItem('informacionP', texto)
}

// Vaciar el localStorage y el textarea
vaciarInformacion.addEventListener("click", () => {
    localStorage.removeItem('informacionP')
    blogNotas.value = ''
})

guardarInformacion.addEventListener('click', conseguirInfo)
