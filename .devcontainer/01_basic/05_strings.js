const name = "ankur"
const repoCount = 50


//console.log(name + repoCount);
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ankur')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newstring = gameName.substring(0, 4)
console.log(newstring);

const anotherstring =  gameName.slice(-5, 2)
console.log(anotherstring);

const newstringone = "  ankur  "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://ankur.com/ankur%20bhiwadi"
console.log(url.replace('%20', '-'))


console.log(url.includes('ankur'));

console.log(gameName.split);

