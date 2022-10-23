alert("Bienvenido a tu tienda de discos.")

const precioCD = 250
const precioCassette = 150
const precioVinil = 450
const precioMiniDisk = 400

let cantidad = 0
let total = 0
let seguirComprando = true
let continuar = 1

let producto = parseInt(prompt(`¿Qué deseas comprar?
1- CD ($250)
2- Cassette ($150)
3- Vinil ($450)
4- Mini Disk ($400)`))

while(seguirComprando){
    if(producto === 1){
        cantidad = parseInt(prompt("Introduce la cantidad de CDs:"))
        total = total + (precioCD * cantidad)
        cantidad = 0
    } else if (producto === 2){
        cantidad = parseInt(prompt("Introduce la cantidad de Cassettes:"))
        total = total + (precioCassette * cantidad)
        cantidad = 0
    } else if (producto === 3){
        cantidad = parseInt(prompt("Introduce la cantidad de Viniles:"))
        total = total + (precioVinil * cantidad)
        cantidad = 0
    } else if (producto === 4){
        cantidad = parseInt(prompt("Introduce la cantidad de Mini Disks:"))
        total = total + (precioMiniDisk * cantidad)
        cantidad = 0
    }
    
    continuar = parseInt(prompt(`¿Deseas seguir comprando?
    1- Si
    2- No`))


    if(continuar === 1){
        producto = parseInt(prompt(`¿Qué deseas comprar?
            1- CD ($250)
            2- Cassette ($150)
            3- Vinil ($450)
            4- Mini Disk ($400)`))
    } else if (continuar === 2){
        seguirComprando = false
    }
        
}
alert("El total de tu cuenta es: " + total)