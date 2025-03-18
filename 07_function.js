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