let btnLeft = document.querySelector('#btnLeft')
let btnRight = document.querySelector('#btnRight')
let iconsParent = document.querySelector('.item-icons div')


let arr = ['icon-facebook', 'icon-twitter', 'icon-google', 'icon-pinterest-squared', 'icon-instagram', 'icon-stumbleupon', 'icon-rss']

removeElements()
createElements()

function createElements() {
 for (let index = 0; index < arr.length - 2; index++) {
  let i = document.createElement('i')
  i.classList.add(arr[index])
  iconsParent.appendChild(i)
 }
}

function removeElements(){
 iconsParent.innerHTML = ''
}

function puzirLeft() {
 let firstItem = arr[0]
 for (let index = 0; index < arr.length - 1; index++) {
  arr[index] = arr[index + 1]
 }
 arr[arr.length - 1] = firstItem
 console.log(arr)
}

function puzirRight() {
 let lastItem = arr[arr.length - 1]
 for (let index = arr.length - 1; index > 0; index--) {
  arr[index] = arr[index - 1]
 }
 arr[0] = lastItem
 console.log(arr)
}

btnLeft.addEventListener('click', function () {
 puzirLeft()
 removeElements()
 createElements()
})

btnRight.addEventListener('click', function () {
 puzirRight()
 removeElements()
 createElements()
})