
const mysym = Symbol("key1")

const jsuser = {
    name:"ankur",
    [mysym]:"mykey1",
    age: 18,
    location: "Alwar",
    email: "ankur@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

};


console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser[mysym]);

jsuser.email = "ankur@chatgpt.com"
console.log(jsuser["email"]);

//Object.freeze(jsuser)

console.log(jsuser);
