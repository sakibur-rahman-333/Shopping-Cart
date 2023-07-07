//Variables
let productNameArray = [];
//From HTML
let productListTable = document.getElementById('product-list');
let cartListTable = document.getElementById('cart-list');

//Event Listener
productListTable.addEventListener('click', productListTableClicked);
cartListTable.addEventListener('click', cartListTableClicked);

//Function
function productListTableClicked(e) {
  if (e.target.className == 'cart-button') {
    let val = e.target.parentNode.parentNode;
    let productName = val.cells[0].innerText;
    let productPrice = val.cells[1].innerText;

    if (productNameArray.indexOf(productName) == -1) {
      let tdProduct = document.createElement('td');
      let tdPrice = document.createElement('td');
      let tdOption = document.createElement('td');
      let tdRemoveButton = document.createElement('button');
      let trElement = document.createElement('tr');

      tdProduct.innerText = productName;
      tdPrice.innerText = productPrice;
      tdRemoveButton.className = 'remove-from-cart';
      tdRemoveButton.innerText = 'Remove';
      tdOption.appendChild(tdRemoveButton);

      trElement.appendChild(tdProduct);
      trElement.appendChild(tdPrice);
      trElement.appendChild(tdOption);

      cartListTable.appendChild(trElement);

      productNameArray.push(productName);
    }
  }
}

function cartListTableClicked(e) {
  let val = e.target;
  if (val.className == 'remove-from-cart') {
    let pNode = val.parentNode.parentNode;
    let productName = pNode.cells[0].innerText;

    let pos = productNameArray.indexOf(productName);
    productNameArray.splice(pos, 1);
    pNode.remove();
  }
}
