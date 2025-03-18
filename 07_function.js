console.log("hello")

function showName(){
    console.log("Rohit Soni")
}

showName();

//new feature of function

function showNumber(...num1){//========> can allow dynamically changable arguments
    return num1;
}

console.log(showNumber(499,533,488,199))





//passing object in function
const user={
    name:"Rohit",
    slary:94000
}

function showObj(anyobj){
    console.log(`Username is ${anyobj.name} and user's salary is ${anyobj.slary}`)
}

showObj(user);