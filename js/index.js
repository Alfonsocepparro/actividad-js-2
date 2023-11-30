const NOMBRE = prompt("Ingrese su nombre").toLowerCase();
alert("Hola" + " " + NOMBRE);


const TITULO_PAG = document.getElementById("titulo_pag");
TITULO_PAG.innerText = "Venta de articulos usados y no tan usados";

class Producto {
    constructor(nombre, marca, stock, img) {
        this.nombre = nombre;
        this.marca = marca;
        this.stock = stock;
        this.img = img;
    }
}

const REMERA = new Producto("Remera", "Levis", 2, "../assets/reme.jpg");
const ZAPAS = new Producto("Zapatillas", "Vans", 1, "../assets/zapas.jpg");
const MALLA = new Producto("Malla", "HyM", 2, "../assets/malla.jpg");
const CARTUCHERA = new Producto("Cartruchera", "No sabe no contesta", 1, "../assets/cartu.jpg");

const ARRAY_PRODUCTOS = [REMERA, ZAPAS, MALLA, CARTUCHERA];

let contenedorProductos = document.getElementById("contenedorProductos");

ARRAY_PRODUCTOS.forEach(Producto => {
    let div = document.createElement("div");
    div.className = "card"; // Primero tengo que crear el div, ponerle clase y después editarlo al html
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${Producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Producto: ${Producto.nombre}</h5>
            <p class="card-text"> Marca:${Producto.marca}</p>
            <p class="card-text"> Stock:${Producto.stock}</p>
            <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
    </div>`;

    contenedorProductos.appendChild(div);

});


