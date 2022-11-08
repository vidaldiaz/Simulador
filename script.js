alert("Bienvenido a tu tienda de discos.")


//let cantidad = 0
let total = 0
let seguirComprando = true
let continuar = 1
const carrito = []
const listaArticulos = []


class Articulo {
constructor (tipo, precio){
    this.tipo = tipo;
    this.precio = precio;
    }
}

const cd = new Articulo("CD", 250)
listaArticulos.push(cd)
const cassette = new Articulo("Cassette", 150)
listaArticulos.push(cassette)
const vinil = new Articulo("Vinil", 450)
listaArticulos.push(vinil)
const miniDisk = new Articulo("Mini Disk", 400)
listaArticulos.push(miniDisk)

console.log(listaArticulos)

let producto = printMenu()

while(seguirComprando){
    if(producto === 1){
        carrito.push(listaArticulos[producto -1])
    } else if (producto === 2){
        carrito.push(listaArticulos[producto -1])
    } else if (producto === 3){
        carrito.push(listaArticulos[producto -1])
    } else if (producto === 4){
        carrito.push(listaArticulos[producto -1])
    }
    
    continuar = parseInt(prompt(`¿Deseas seguir comprando?
    1- Si
    2- No`))


    if(continuar === 1){
        producto = printMenu()
    } else if (continuar === 2){
        seguirComprando = false
    }
        
}

console.log(carrito)
calculo()
alert("El total de tu cuenta es: " + total)



function setCantidad () {
    noArticulos = parseInt(prompt("Introduce la cantidad:"))
    return noArticulos
}

function calculo (){
    carrito.forEach(elemento =>
        total += elemento.precio)
    return total
}



function printMenu() {
    return parseInt(prompt(`¿Qué deseas comprar?
    1- ${listaArticulos[0].tipo} ($${listaArticulos[0].precio})
    2- ${listaArticulos[1].tipo} ($${listaArticulos[1].precio})
    3- ${listaArticulos[2].tipo} ($${listaArticulos[2].precio})
    4- ${listaArticulos[3].tipo} ($${listaArticulos[3].precio})`))    
}

