window.addEventListener ("load", init, false);

// dom handles
var handle_input = null; 
var handle_inputButton = null;

function init() {
	handle_input = document.getElementById ("todoApp_input");
	handle_inputButton = document.getElementById ("todoApp_inputButton");
	handle_inputButton.addEventListener ("click", inputButtonManager, false);
}

function inputButtonManager() {
	var inputText = handle_input.value;
	console.log (inputText);
}

