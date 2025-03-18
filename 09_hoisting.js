console.log(funOne(5))//================>hoisting: using the function before its declaration
function funOne(num){
    return num+1;
}



console.log(funtwo(5));//===============> it does not support hoisting
const funtwo= function(num){//==============> here declaration of function is done through a variable
    return num+1;
}
// console.log(funtwo(5));