


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



//Alimentar lista de articulos
const album =  {}
let number = 0

for (let i = 0; i < 10; i++) {
    number = getRandomAlbum(1, 89998)
    console.log(number)
    getAlbumInfo(number)
}



function getAlbumInfo(number){
fetch(`https://api.discogs.com/releases/${number}`)
.then(response => response.json())
.then(response => {
    //console.log(response)
    const {artists, title, genres, lowest_price, released, community, country, formats} = response
    album.id = number
    //Get Artist Name
    //console.log(artists[0].name)
    album.artist = artists[0].name
    // //Get Album Name
    // //console.log(title)
    album.title = title
    // //Get Genre
    // //console.log(genres[0])
    album.genre = genres[0]
    // //Get Price
    // //console.log(lowest_price)
    album.price = lowest_price
    // //Get Release Year
    // //console.log(released)
    album.released = released
    // //Get Country
    // //console.log(country)
    album.country = country
    // //Get Format
    // //console.log(formats[0].name)
    album.format = formats[0].name
    // //Get Rating
    // //console.log(community.rating.average)
    album.rate = community.rating.average
    listaArticulos.push({...album})
})
.catch(error => console.log(error))
}

console.log("Lista de Articulos", listaArticulos)

function getRandomAlbum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }





accessButton.onclick = () => {
    console.log(nombre.value)
    localStorage.setItem("usuario", nombre.value)

    divNombre.remove()

    const saludo = document.createElement('h2')
    saludo.innerText = `Bienvenido a tu tienda de discos ${localStorage.getItem('usuario')}`
    workDiv.append(saludo)

    showAvailableDisk()

    //createProductList()
    //showPrice()
    
    //createComprarButton()
    
    // const productList = document.getElementById('products')

    // productList.onchange = () => {
    //     const price = document.getElementById('price')
    //     if (productList.value === 'CD') {
    //         price.innerText = `${(listaArticulos[0].precio)}`
    //     } else if (productList.value === 'Cassette') {
    //         price.innerText = `${(listaArticulos[1].precio)}`
    //     } else if (productList.value === 'Vinil') {
    //         price.innerText = `${(listaArticulos[2].precio)}`
    //     } else if (productList.value === 'Mini Disk') {
    //         price.innerText = `${(listaArticulos[3].precio)}`
    //     }
    //     console.log(productList.value)
    // }

    const addCartButtons = document.querySelectorAll('.addCart')
    
    const addCart = function (event) {
        console.log(this.id)
        listaArticulos.forEach(album => {
            if(album.id === parseInt(this.id)){
                console.log(album)
                console.log(carrito.includes(album))
                if(carrito.includes(album)){
                    carrito[carrito.indexOf(album)].quantity++
                } else {
                    album.quantity = 1
                    carrito.push(album)
                }
                
                console.log("Carrito", carrito)
            }
        })
    }

    addCartButtons.forEach(button => {
        button.addEventListener("click", addCart)

    })

    // const comprarButton = document.getElementById('comprarButton')

    // comprarButton.onclick = () => {
    //     carrito.forEach(product => {
    //         total += product.precio
    //     })
    //     const addButton = document.getElementById('addCart')
    //     addButton.remove()
    //     const hTotal = document.createElement('h1')
    //     hTotal.setAttribute('id', 'hTotal')
    //     hTotal.innerText = `Tu gran total es de $${total}`
    //     showTotal.append(hTotal)
        
    //     console.log(total)
    // }


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
    addButton.setAttribute('class', 'addCart')
    addButton.setAttribute('id', `${album.id}`)
    addButton.innerText = 'Agregar al Carrito'
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

function showAvailableDisk () {

    listaArticulos.forEach(album => {
        const albumInfo = document.createElement('div')
        albumInfo.setAttribute('class', 'album')
        const albumHeader = document.createElement('h3')
        albumHeader.innerText = `${album.title} - ${album.artist}`
        const albumGenre = document.createElement('p')
        albumGenre.innerText = `Genre: ${album.genre}`
        const albumPrice = document.createElement('p')
        albumPrice.innerText = `Price: ${album.price}`
        const albumReleased = document.createElement('p')
        albumReleased.innerText = `Released Year: ${album.released}`
        const albumCountry = document.createElement('p')
        albumCountry.innerText = `Country: ${album.country}`
        const albumFormat = document.createElement('p')
        albumFormat.innerText = `Format: ${album.format}`
        const albumRate = document.createElement('p')
        albumRate.innerText = `Rate: ${album.rate}`
        albumInfo.append(albumHeader, albumGenre, albumPrice, albumReleased, albumCountry, albumFormat, albumRate)
        productSection.append(albumInfo)
        
        const addButton = document.createElement('button')
        addButton.setAttribute('class', 'addCart')
        addButton.setAttribute('id', album.id)
        addButton.innerText = 'Agregar al Carrito'
        productSection.append(addButton)


})
}