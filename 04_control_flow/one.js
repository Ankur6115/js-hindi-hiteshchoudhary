const temperature = 41

if (temperature === 51){
    console.log("less than 50");
    
    
} else {
    console.log("temperature is greater than 50");
    
}

console.log("execute");
 
const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`user power:${power}`);
    
}

const balance = 1000

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 900");
    
} else {
    console.log("less than 1200");
    
}


const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("allow to by course");
    
}

const loggedInFromGoogle = true
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}