alert("Bienvenido a tu tienda de discos.")

const precioCD = 250
const precioCassette = 150
const precioVinil = 450
const precioMiniDisk = 400

let cantidad = 0
let total = 0
let seguirComprando = true
let continuar = 1

let producto = printMenu()

while(seguirComprando){
    if(producto === 1){
        cantidad = setCantidad()
        calculo(precioCD, cantidad)
    } else if (producto === 2){
        cantidad = setCantidad()
        calculo(precioCassette, cantidad)
    } else if (producto === 3){
        cantidad = setCantidad()
        calculo(precioVinil, cantidad)
    } else if (producto === 4){
        cantidad = setCantidad()
        calculo(precioMiniDisk, cantidad)
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
alert("El total de tu cuenta es: " + total)



function setCantidad () {
    cantidad = parseInt(prompt("Introduce la cantidad:"))
    return cantidad
}

function calculo (precioProducto, cantidad){
    total = total + (precioProducto * cantidad)
    cantidad = 0
}

function printMenu () {
    return parseInt(prompt(`¿Qué deseas comprar?
    1- CD ($${precioCD})
    2- Cassette ($${precioCassette})
    3- Vinil ($${precioVinil})
    4- Mini Disk ($${precioMiniDisk})`))
}