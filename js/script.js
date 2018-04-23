document.getElementById("calculate-button").onclick = function() {
	//Coletar números dentro das caixas de input

	let elem1= document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');

	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);
	let sum = val1 + val2;

	let choice = 
	document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;
	let operationResult = getResult(val1, val2, operation);

	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult;


	// Identificador de NaN

		if (isNaN(val1)) {
        alert("Você precisa inserir um valor! NaN = Não é número");
        document.getElementById('elem-1').focus();
    } else if (isNaN(val2)) {
        alert("Você precisa inserir um valor! NaN = Não é número");
        document.getElementById('elem-2').focus();

    }


	// Mostrar resultado de acordo com a operação selecionada
	
if (operation === '+') {
		resultElement.innerText = val1 + val2;
	} else if (operation === '-') {
		resultElement.innerText = val1 - val2;
	} else if (operation === '*') {
		resultElement.innerText = val1 * val2;
	} else if (operation === '/') {
		resultElement.innerText = val1 / val2;
	}

}
	

function getResult(val1, val2, operation) {
	if(operation === '+') {
		return val1 + val2;
	} else if (operation === '-') {
		return val1 - val2;
	} else if (operation === '*') {
		return val1 * val2;
	} else if (operation === '/') {
		return val1 / val2;
	}
}




