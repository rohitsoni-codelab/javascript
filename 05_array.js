const arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(arr);
// arr.forEach((item,index)=>{
//     console.log(`Item ${item} at index ${index}`);
// }
// )


//doubling the values

arr.forEach((item)=>{console.log(item*item)})

//we can store this modified values in an array. Bcz forEach does not return any thing... it returns undefined
//to re store the new value of the array in an array, we use map function











const brr=arr.map(item=>item*item)                  //map using array function
console.log(brr)

const crr=arr.map((item,index)=>                    //map usnig callback function. here return is must
{
    return `value=${item*item*item} index=${index}`
}
)
console.log(crr)

// const crr=['Rohit','Raghav','Radha']
// crr.forEach((item)=>{
//     console.log(`Hello ${item}`)
// })



    
