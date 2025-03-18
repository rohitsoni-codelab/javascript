// for loop in js

let arr=[4,6,2,7,23,11]
for(let i=0;i<+arr.length;i++)
{
    console.log(arr[i]);
    
}





// while loop
console.log("\nWhile loop\n");
let i=0
while(i<arr.length)
{
    console.log(arr[i])
    i++
}






//forOf loop

console.log("\n forof loop\n")

for (const elm of arr) 
    {
    console.log(elm)
    }

// for (const elm1 of arr) => console.log(elm1)   // It is only valid for foreach loops



// let arr=[4,6,2,7,23,11]
//for each loop

console.log("\n forEach Loops")

arr.forEach(elm2 => {console.log(elm2)});

//we can pass multiple parameteres in forEach loop

arr.forEach((eml2,i,arr)=>{console.log(eml2,i,arr)})