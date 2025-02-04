const marvel_heros = ["thor", "tronman", "spiderman"]
const dc_heroes = ["spriderman", "flash", "batman"]

//marvel_heros.push(dc_heroes)

//const allHeros = marvel_heros.concat(dc_heroes)

const allNewHeros = [...marvel_heros, ...dc_heroes]


console.log(allNewHeros);

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("ankur"));

console.log(Array.from("ankur"));


