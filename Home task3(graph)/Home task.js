const graf = {
  0: {
      id: 0,
      name: "zero",
      numbers: [40, 500, 200]
  },
  1: {
      id: 1,
      name: "one",
      numbers: [4, 5]
  },
  2: {
      id: 2,
      name: "two",
      numbers: [4, 0]
  },
  3: {
      id: 3,
      name: "three",
      numbers: [2]
  },
  4: {
      id: 4,
      name: "four",
      numbers: [0, 1, 2, 5]
  },
  5: {
      id: 5,
      name: "five",
      numbers: [0, 1, 4]
  },
}

const zero = graf[0];
console.log('zero', zero)
const zeronumbers = zero.numbers.map(numbersId => graf[numbersId])

const one = graf[1];
console.log('one', one)
const onenumbers = one.numbers.map(numbersId => graf[numbersId])


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
for(let i=0; i<5; i++){
  for(let j=0; j<graf[i].numbers.length; j++){
ctx.beginPath();
ctx.moveTo(graf[i].id,graf[i].id);
ctx.lineTo(graf[i].numbers[j], graf[i].numbers[j]);
ctx.stroke();
}
}