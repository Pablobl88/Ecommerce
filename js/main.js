class _Models{
    constructor(categoria, franquicia, personaje, tamaño, precio, color) {
        this.categoria = categoria;
        this.franquicia = franquicia;
        this.personaje = personaje;
        this.tamaño = tamaño;
        this.precio = precio;
        this.color = color;
    }
}

 modelsA = new _Models ("Anime", "DRAGON BALL", "Goku", "15cm", 2500 , "Pintado a mano");
 modelsB = new _Models ("Anime", "NARUTO", "Naruto", "15cm", 2500 ,  "Pintado a mano");
 modelsC = new _Models ("Superheroes", "BATMAN", "Batman", "15cm", 2500 ,  "Pintado a mano");
 modelsD = new _Models ("Películas", "CHUCKY", "Chucky", "12cm", 1600 ,  "Pintado a mano");
 modelsE = new _Models ("Videojuegos", "AMONG US", "Player Rojo", "8cm", 600 ,  "Rojo - Detalles Pintados");
 modelsF = new _Models ("Videojuegos", "AMONG US", "Player Blanco", "8cm", 600 ,  "Blanco - Detalles pintados");
 modelsG = new _Models ("Videojuegos", "POKEMON", "Pikachu", "10cm", 900 ,  "Amarillo - Detalles pintados");
 modelsH = new _Models ("Varios", "AUTOS LOCOS", "El Super Perrari", "12cm", 2800 ,  "Pintado a mano");

const figures = [modelsA, modelsB, modelsC, modelsD, modelsE, modelsF, modelsG, modelsH];
const carrito = [];

/* Cards en js */
let acumulador = ``;
figures.forEach((figuras) => {
    acumulador += `<div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder">${figuras.franquicia} - ${figuras.personaje}</h5>
                                    <p>${figuras.tamaño}</p>
                                    $${figuras.precio}
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">                          
                                <a onclick="agregarAlCarrito('${figuras.personaje}')" href="#modalCompra" class="btn btn-danger btn-sm botonAgregarCarrito" data-toggle="modal">Agregar al carrito</a>
                                    <div class="modal fade" id="modalCompra">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <header class="modal-header">
                                                    <button tyle="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>                        
                                                </header>
                                                <div class="modal-body">
                                                    <p id="mensajeModalCompra"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <button onclick="borrarDelCarrito('${figuras.personaje}')" class="btn-default"><img src="iconos/bin.svg"  width="20" height="20"></button>
                            </div>
                        </div>
                    </div>`
})

/**Ubicación cards*/
document.getElementById("productos").innerHTML = acumulador;

// Función para agregar al carrito

function agregarAlCarrito(personaje){
    const productoSeleccionado = figures.find(figuras => figuras.personaje === personaje);

    carrito.push(productoSeleccionado)
        clickCompra = "Agregaste figura de" + " " + personaje + " " + "al carrito";
        $("#mensajeModalCompra").html(clickCompra);   

    document.getElementById("contador-carrito").innerHTML = carrito.length;
    console.log(carrito);
}





















