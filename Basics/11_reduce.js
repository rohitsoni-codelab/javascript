const shoppingCart=[
    {
        itemname:"js course",
        price:999,
    },
    {
        itemname:"mobile-dev course",
        price:5999,
    },
    {
        itemname:"web-dev course",
        price:2999,
    }
]

//Add the prices of the courses in the cart
//reduce((acc,currcal)=>(),initialval)

const priceToPay=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(`PriceToPay : ${priceToPay}`)