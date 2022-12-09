const products = require ("./5_data")

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data) {
  let shoppingCart = data.filter(item => item.type === 'sweet');
  return shoppingCart = shoppingCart.map((candy) => ({ item: candy.item, price: candy.price }))
}

console.log(getSaleItems(products))



// let cart = document.getElementById('cart')

// let sweetsArr= getSaleItems(products)
// console.log(sweetsArr)


// for(let i=0;i<sweetsArr.length;i++){
//     cart.innerHTML += `<li>${sweetsArr[i].item} Sale Price: &dollar;${sweetsArr[i].price}</li>`
// }

// function getSaleItems(data){
//   let sweetTreats= data.filter(item => item.type=="sweet").map(n=> ({item:n.item,price:n.price}))
// //   return sweetTreats}