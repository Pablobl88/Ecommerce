// Envío de formulario

$('body').append(`<form>
                    <input type="text" id="nombre" placeholder="Nombre" required>
                    <input type="text" id="apellido" placeholder="Apellido" required>
                    <input type="email" id="mail" placeholder="E-mail" required>    
                    <input type="phone" id="telefono" placeholder="Ingrese N° de teléfono con el código de área sin el 0" required>
                    <input type="text" id="direccion" placeholder="Dirección de envío" required>
                    <textarea id="mensaje" placeholder="Aclaraciones para la entrega"></textarea>
                    <button onclick="capturaDeDatos()">PAGAR COMPRA</button> 
                    </form>`) 

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

  


        
    



















