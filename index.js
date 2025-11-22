const guardarInformacion = document.getElementById("guardar")
const verificarInformacion = document.getElementById("verificar")
const blogNotas = document.getElementById("blog")


let informacionP = ""

function conseguirInfo(){
    if(localStorage.getItem("informacionP") !== null){
        blogNotas.value = informacionP
    }
}