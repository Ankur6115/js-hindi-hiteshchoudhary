function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("U");
    console.log("R");
    
}

//sayMyName()


//function addTwoNumbers(number1 , number2){
  //  console.log(number1 + number2);
    
//}

//const result = addTwoNumbers(3 , 4)
//console.log("Result ", result);






function addTwoNumbers(number1 , number2){
    let result = number1 + number2
    return result
}
    


const result = addTwoNumbers(3 , 4)
//console.log("Result: ", result);

function loginUserMassage(username){
    return`${username} just logged in`
}

console.log(loginUserMassage("ankur"));

//********************************************************************************* */


function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username : "ankur",
    price : 199,
}

function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)

handleObject({
    username : "sam",
    price : 399
})



const myNewArray = [200, 400, 100]
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



