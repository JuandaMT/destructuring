/* DESTRUCTURING */
// 1
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const [p1, p2, p3] = empleados;
console.log(p2);
console.log(p1);

/* OBJETO POKEMON */
const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

const { name: nombre } = pokemon;
const { name } = pokemon;
console.log(name);
const { type } = pokemon;
console.log(type);
const { moves } = pokemon;
const [, m2] = moves;
console.log(m2);

/* SPREAD Y REST */
const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};
// 1
const objetoMergeado = { ...pokemon, ...pikachu };
console.log(objetoMergeado);
// 2
const sumEveryOther = (...numeros) => {
  let acumulador = 0;
  for (let numero of numeros) {
    acumulador += numero;
  }
  return acumulador;
};
console.log(sumEveryOther(6, 8, 2, 3, 1));
// 3
const addOnlyNums = (...numeros) => {
  let acumulador = 0;
  for (let numero of numeros) {
    if (typeof numero == "number") {
      acumulador += numero;
    }
  }
  return acumulador;
};
console.log(addOnlyNums(1, "perro", 2, 4));
// 4
const countTheArgs = (...elementos) => {
  let acumulador = 0;
  for (let elemento of elementos) {
    acumulador +=1
  }
  return acumulador
};
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso'))
// 5
const combineTwoArrays = (a, b) =>{
    const arraysCombinadas = [...a,...b]
    return arraysCombinadas
}
console.log(combineTwoArrays([1, 2, 3, 4], [1, 2, 3, 4]))