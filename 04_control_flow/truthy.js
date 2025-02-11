const userEmail = "ankur@ai"
if (userEmail) {
    console.log("got user Email");
    
} else {
    console.log("don't have user email");
    
}

// falsy value = false, 0 , -0, "" , null, undefined , NaN

//truthy value = "0" , 'false' , " " , [] , {} , function(){}


//nullish coalescing operator(??);

let val1
val1 = 5 ?? 10;
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);


