let alertaError = document.getElementById("mostrarAlerta")
console.log(alertaError)




function showAlert(mensaje, divelement) {
    divelement.innerHTML = mensaje;
	divelement.className = "alert alert-danger";
         
    divelement.hidden = false;
    setTimeout(function () {
        divelement.hidden = true;
    }, 5000);
}

function CreaMatriz(n, m) {
	//DEFINIMOS EL TAMAÑO DE LA MATRIZ
	this.length = n;
	for (var i=0; i<n; i++) {
		this[i] = new Array(m);
	}
	return this;
}

function MultiplicarMatrices () {
	DefinirMatriz3 ()
	for (i=0; i < filaA; i++){
		for (j=0; j < colB; j++){
			for (k=0; k < colA; k++){
				matriz3[i][j] = matriz3[i][j] + (matriz1[i][k] * matriz2[k][j]);
			}
		}
	}
}

function Mostrar () {
	Cargar ()
	
	var q = 0;
	
	for (i=0; i < matriz3.length; i++){
		for (j=0; j < matriz3[i].length; j++){
			document.matrizR.elements[q].value = matriz3[i][j];
			matriz3[i][j] = 0;
			q++;
		}
	}
}


function Cargar () {
	var q = 0;
	console.log(parseInt(document.matrizA.elements[q].value))
	//console.log(parseInt(document.matrizB.elements[q].value))
//Recopila datos del formulario y los guarda en las matrices
	for (i=0; i<filaA; i++) {
		for (j=0; j<colA; j++) {
			matriz1[i][j] = parseInt(document.matrizA.elements[q].value);
			q++;
		}
	}
	
	q=0;
	for (i=0; i<filaB; i++) {
		for (j=0; j<colB; j++) {
			matriz2[i][j] = parseInt(document.matrizB.elements[q].value);
			q++;
		}
	}
	
	MultiplicarMatrices ()
}

var matriz1;
var matriz2;
var filaA;
var colA;
var filaB;
var colB;
var contador = 0;
function Comprobar () {
	filaA = parseInt(document.dimA.elements[0].value);
	colA = parseInt(document.dimA.elements[1].value);
	filaB = parseInt(document.dimB.elements[0].value);
	colB = parseInt(document.dimB.elements[1].value);
		
	//Valida que los campos no esten vacios
	if (isNaN(filaA) || isNaN(colA) || isNaN(filaB) || isNaN(colB)) {
		
		showAlert("Valores no válidos.", alertaError);
	}
	//Valida que la columna de la matriz A sea igual a la fila de la matriz B
	else if (colA != filaB) {
		
		showAlert("Dimensiones de las matrices no válidas", alertaError);
	}
	else {
		if (contador > 0) {
			Borrar ()
		}
		
		matriz1 = new CreaMatriz(filaA, colA);
		matriz2 = new CreaMatriz(filaB, colB);
		Formulario (filaA, colA, filaB, colB)
		matriz3 = new CreaMatriz(filaA, colB);
		CrearMatrizResultado (filaA, colB)
		contador++
		console.log(contador)
	}
}

function Formulario (filA, colA, filB, colB) {
	let cargarMatrices = "";
	cargarMatrices += `<div  id="matrices" align="conter">Matriz A <form name="matrizA">`
	for (i=0; i<filA; i++) {	
		cargarMatrices += `<br>`
		for (j=0; j<colA; j++) {
			cargarMatrices += `<input type="text" size="4" name="text">`
		}

		console.log(cargarMatrices)
	}

	cargarMatrices += `<br><br>`
	cargarMatrices += `</form>Matriz B <form name="matrizB">`
	for (i=0; i<filB; i++) {
		cargarMatrices += `<br>`
		for (j=0; j<colB; j++) {	
			cargarMatrices += `<input type="text" size="4" name="text">`
		}	
	}
	cargarMatrices += `<br><br>`
	cargarMatrices += `<input type="button" value="Calcular" name="button" id="buttonCalcu" onclick="Mostrar()">`
	cargarMatrices += `</div>`
	document.getElementById("devep").innerHTML = cargarMatrices;
}

function CrearMatrizResultado (filaA, colB) {
	let cargarMatrizResultado = "";
	cargarMatrizResultado += `<br>`
	cargarMatrizResultado += `<div id="mensajeError" align="conter">Resultado <form name="matrizR">`
	for (i=0; i<filaA; i++) {
		cargarMatrizResultado += `<br>`
		for (j=0; j<colB; j++) {
			cargarMatrizResultado += `<input type="text" size="4" name="text">`
		}
	
	}
	cargarMatrizResultado += `</form> </div>`
	cargarMatrizResultado += `<br><br><br>`
	document.getElementById("devepRes").innerHTML = cargarMatrizResultado;
}

var matriz3;
function DefinirMatriz3 () {
	for (i=0; i < matriz3.length; i++){
		for (j=0; j < matriz3.length; j++){
			matriz3[i][j] = 0;
		}
	}
}
function Borrar () {
	var capa1 = document.getElementById("matrices");
	var capa2 = document.getElementById("resultado");
	var padre1 = capa1.parentNode;
	var padre2 = capa2.parentNode;
	padre1.removeChild(capa1);
	padre2.removeChild(capa2);
}