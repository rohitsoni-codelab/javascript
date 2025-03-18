// immediately invoked function expression
//  ()()   ==============> this is the syntax of the IIFE 

function connection(){
    console.log("DataBase connected")
}

connection();

// using IIFE 
console.log("------------------------- after iife-------------------");

(function connection()
{
    console.log("DataBase2 connected")
}
) ();//===================> semi coloun is must for using more than one IIFE


(function conn2(){
    console.log("DataBase3 connected")
})()