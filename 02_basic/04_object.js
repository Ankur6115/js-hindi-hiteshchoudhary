const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


const regularuser = {
    email: "some@gmail.com",
    fullname : {
        userfullname : {
            firtstname : "ankur",
            lastname: "chiwal"
        }
    }
}

console.log(regularuser.fullname.userfullname.firtstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));



