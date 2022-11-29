let i = 100;

while (i <= 200) {
    //se a condicao esquerda for verdadeira, a da direita é executada
    i % 2 !== 0 && console.log(i);

    i++;
}