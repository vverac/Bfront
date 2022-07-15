const serverUrl = 'http://localhost:3000/'
const itemsPath = 'productos/'

window.onload = getData()

const items = document.querySelector('.items')

function getData() {
  fetch(`${serverUrl}${itemsPath}`)
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => printData(data))

}

function printData(data) {
  const itemContainer = document.createElement('div')
  itemContainer.className = 'row';

  data.forEach(item => {
    itemContainer.innerHTML += createDomElement(item)
    items.append(itemContainer)
  })
}

function createDomElement(item) {
  const itemHtml = `
 <div class="col-12 col-md-3">
            <div class="item shadow mb-4 pt-3">
              <h6 class="item-title text-center">ENERGETICA MR BIG</h6>
              <img class="item-image" src="https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg">
              <div class="item-details ml-3">
                <p>Precio</p>
                <h4 class="item-price"> 1999 </h4>
                <button class="item-button btn btn-secondary mb-3 addToCart">AÑADIR AL CARRITO</button>
              </div>
            </div>
          </div>
  `
  return itemHtml;
}