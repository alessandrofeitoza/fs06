let notas = [
    9,
    -8.7,
    5,
    -6.8,
    10,
];


let soma = 0; // let soma =  notas.reduce( (x, y) => x + y);
let positivos = 0;
let negativos = 0;

//percorrendo nota por nota
notas.forEach( cadaNota => {
    soma += cadaNota //somando a nota para no final ter o total

    if (cadaNota >= 0) { //testando se a nota é negativa ou positiva
        positivos++;
    } else {
        negativos++;
    }
} );

let quantidade = notas.length;
let media = soma / quantidade;

console.log("Media: " + media);
console.log("Positivos: " + positivos);
console.log("Negativos: " + negativos);
console.log("Negativos %: " + ((negativos/quantidade) * 100));
console.log("Positivos %: " + ((positivos/quantidade) * 100));