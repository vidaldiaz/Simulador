


//let cantidad = 0
let total = 0
let seguirComprando = true
let continuar = 1
const carrito = []
const listaArticulos = []
const nombre = document.getElementById('inputName')
const accessButton = document.getElementById('enterName')
const divNombre = document.getElementById('divNombre')
const workDiv = document.getElementById('workDiv')
const productSection = document.getElementById('productSection')
const listaCompras = document.getElementById('listaCompras')
const showTotal = document.getElementById('showTotal')



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



accessButton.onclick = () => {
    console.log(nombre.value)
    localStorage.setItem("usuario", nombre.value)

    divNombre.remove()

    const saludo = document.createElement('h2')
    saludo.innerText = `Bienvenido a tu tienda de discos ${localStorage.getItem('usuario')}`
    workDiv.append(saludo)

    createProductList()
    showPrice()
    createAddButton()
    createComprarButton()
    
    const productList = document.getElementById('products')

    productList.onchange = () => {
        const price = document.getElementById('price')
        if (productList.value === 'CD') {
            price.innerText = `${(listaArticulos[0].precio)}`
        } else if (productList.value === 'Cassette') {
            price.innerText = `${(listaArticulos[1].precio)}`
        } else if (productList.value === 'Vinil') {
            price.innerText = `${(listaArticulos[2].precio)}`
        } else if (productList.value === 'Mini Disk') {
            price.innerText = `${(listaArticulos[3].precio)}`
        }
        console.log(productList.value)
    }

    const anadirCarrito = document.getElementById('addCart')

    anadirCarrito.onclick = () => {
        if (productList.value === 'CD') {
            carrito.push(listaArticulos[0])
            updateList(listaArticulos[0])
        } else if (productList.value === 'Cassette') {
            carrito.push(listaArticulos[1])
            updateList(listaArticulos[1])
        } else if (productList.value === 'Vinil') {
            carrito.push(listaArticulos[2])
            updateList(listaArticulos[2])
        } else if (productList.value === 'Mini Disk') {
            carrito.push(listaArticulos[3])
            updateList(listaArticulos[3])
        }


        

        console.log(carrito)
    }

    const comprarButton = document.getElementById('comprarButton')

    comprarButton.onclick = () => {
        carrito.forEach(product => {
            total += product.precio
        })
        const addButton = document.getElementById('addCart')
        addButton.remove()
        const hTotal = document.createElement('h1')
        hTotal.setAttribute('id', 'hTotal')
        hTotal.innerText = `Tu gran total es de $${total}`
        showTotal.append(hTotal)
        
        console.log(total)
    }


}

function updateList (elemento) {
    const added = document.createElement('p')
    added.innerText = `Agregado al carrito ${elemento.tipo} por $${elemento.precio}`
    listaCompras.append(added)
}

function createProductList () {
    const productList = document.createElement('select')
    productList.setAttribute('id', 'products')

    listaArticulos.forEach((elem) => {
        const product = document.createElement('option')
        product.innerText = elem.tipo
        productList.append(product)
    }) 

    productSection.append(productList)
}



function showPrice () {
    const price = document.createElement('h3')
    const precio = document.createElement('h3')
    price.setAttribute('id', 'price')
    precio.innerText = 'Precio'
    productSection.append(precio)
    productSection.append(price)   
}

function createAddButton () {
    const addButton = document.createElement('button')
    addButton.setAttribute('id', 'addCart')
    addButton.innerText = 'Agregar a Carrito'
    productSection.append(addButton)
}

function createComprarButton () {
    const comprarButton = document.createElement('button')
    const br = document.createElement('br')
    comprarButton.setAttribute('id', 'comprarButton')
    comprarButton.innerText = 'COMPRAR'
    productSection.append(br)
    productSection.append(comprarButton)
}