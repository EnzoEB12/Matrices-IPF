//Funciones para generar número aleatorios.
function getRandom() {
    let max = 10
    let min = 1
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandom2() {
    let max = 100
    let min = 1
    return Math.floor(Math.random() * (max - min)) + min;
}

////////////////////////////////////

var matriz = new Array(2);
matriz[0] = new Array(2);
matriz[1] = new Array(2);
//Metemos los números en cada posición
matriz[0][0] = getRandom();
matriz[0][1] = getRandom();
matriz[1][0] = getRandom();
matriz[1][1] = getRandom();
console.log("==========================")
console.log("Matriz 1")
console.log(matriz)



var matriz2 = new Array(2);
matriz2[0] = new Array(2);
matriz2[1] = new Array(2);
//Metemos los números en cada posición
matriz2[0][0] = getRandom2();
matriz2[0][1] = getRandom2();
matriz2[1][0] = getRandom2();
matriz2[1][1] = getRandom2();
console.log("==========================")
console.log("Matriz 2")
console.log(matriz2)



var matriz3 = new Array(2);
matriz3[0] = new Array(2);
matriz3[1] = new Array(2);

//RESULTADO
for (x = 0; x < 2; x++) { //filas
    for (y = 0; y < 2; y++) { //columnas
        matriz3[x][y] = (matriz[x][0] * matriz2[0][y]) + (matriz[x][1] * matriz2[1][y]);
    }
}
console.log("==========================")
console.log("Resultado")
console.log(matriz3)
console.log("==========================")
