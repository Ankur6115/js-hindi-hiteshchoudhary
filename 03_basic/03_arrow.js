const user = {
    username: "ankur",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
        
    }


}

//user.welcomeMessage()
//user.username = " sam"
//user.welcomeMessage()

/*console.log(this);

function chai(){
    console.log(this);
    
}

chai()*/


/*const chai = function () {
    let username = "ankur"
    console.log(this.username);
    
}

chai()*/

const chai = () => {
    let username = "ankur"
    console.log(this.username);
    
}
//chai()

//onst addTwo = (num1, num2) => {
    //return num1 + num2

//}


const addTwo = (num1, num2) => ({user : "ankur"})

console.log(addTwo ());