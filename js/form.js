// Envío de formulario

const capturaDeDatos = () => {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let mail = document.getElementById("mail").value
    let telefono = document.getElementById("telefono").value
    let direccion = document.getElementById("direccion").value
    let mensaje = document.getElementById("mensaje").value

    if (telefono.length == 10) {
        let datosDeEnvio = {nombre: nombre, 
            apellido: apellido,
            mail: mail,
            telefono: telefono,
            direccion: direccion,
            mensaje: mensaje}
            
        console.log(JSON.stringify(datosDeEnvio))

    } else {
        console.log("Complete correctamente los datos")
    }
}    


        
    



















