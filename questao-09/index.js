let sexo = process.argv[2];
let altura = parseFloat(process.argv[3]);

if (sexo === 'm') {
    console.log((72.7 * altura) - 58);
} else if (sexo === 'f') {
    console.log((62.1 * altura) - 44.7);
}