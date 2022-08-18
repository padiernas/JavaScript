let correo=document.querySelector("#correo")
let contrasena=document.querySelector("#contrasena")
let boton=document.querySelector("#enviarLogin")

boton.addEventListener("click",()=>{
    enviarDatos()
})

const enviarDatos=()=>{
    // let usuario=[]
    // usuario.push(correo.value)
    // usuario.push(contrasena.value)
    let usuario={
    correo:"",
    contrasena:""
    }
    usuario.correo=correo.value
    usuario.contrasena=contrasena.value

    let jsonUsuario=JSON.stringify(usuario)

    // localStorage.setItem(correo,usuario)
    // alert("Se ha enviado a local storage")

    localStorage.setItem(correo.value,jsonUsuario)
    alert("Se ha enviado a local storage")
    obtenerUsuario()
};

const obtenerUsuario=()=>{
    let usuario=document.querySelector("#usuario")
    let objUsuario=JSON.parse(localStorage.getItem("padierna.saurez@gmail.com"))
    // console.log(localStorage.getItem("padierna.saurez@gmail.com"))
    console.log(objUsuario)
    usuario.innerHTML=objUsuario.correo
}