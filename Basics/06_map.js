/*
Using Map we can do following operatins....
1).toUpperCase
2)user.map(Number)
3)


*/





//CHANGING TO UPPER CASE...
const nam=['rohit','raghv','kanhiya','radha']
const upperNam=nam.map((item,index)=>
{
    console.log(`At index ${index} the value is ${item.toUpperCase()}`)
    return `At index ${index} the value is ${item.toUpperCase()}`
}
)
// console.log(upperNam)
console.log("----------------------------------------------------")

//accessing key of values from the an array of object...

const obj=[
    {name: "Rohit", age:21},
    {name: "Kishori", age:20},
    {name: "Shyama", age:19},
]

const userName=obj.map((user,index)=>console.log(`Name=${user.name} and Age=${user.age}`))

console.log("Converting the username into upper case................")
const upperName=obj.map((user,index)=>console.log(`Name=${user.name.toUpperCase()} and Age=${user.age}`))

