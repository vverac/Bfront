const serverUrl = 'http://localhost:3000/'
const itemsPath = 'productos/'
const itemsCatPath = 'categorias/'


// window.onload = getData()

const items = document.querySelector('.items')

const getData = async () => {
  try {
    const res = await fetch(`${serverUrl}${itemsCatPath}`)
    const data = await res.json()
    printData(data)
    formularioCliente(data)
    filtros(data)
  } catch (error) {
    console.log(error)
  }
}

// const fetchData = async () => {
//   try {
//     const res = await fetch(`${serverUrl}${itemsCatPath}`)
//     const data = await res.json()
//     printData(data)
//     filtros(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

const printData = data => {
  let productos = ''
  data.forEach(item => {
    productos += `
<div class="row ">
    <div class="col">
             <div class="item shadow mb-4 pt-3">
               <h6 class="item-title text-center">${item.name}</h6>
               <img class="item-image" src=${item.url_image}>
               <div class="item-details ml-3">
                 <p>Precio</p>
                 <h4 class="item-price">${item.price}</h4>
                 <button class="item-button btn  btn-lg btn-secondary mb-3 addToCart">Añadir al Carrito</button>
               </div>
             </div>
           </div>
</div>
    `

  })
  items.innerHTML = productos;
}




getData()
// fetchData()