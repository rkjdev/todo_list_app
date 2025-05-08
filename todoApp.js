window.addEventListener ("load", init, false);

// dom handles
var handle_input = null; 
var handle_inputButton = null;
var handle_taskDisplay = null;

function init() {
	handle_input = document.getElementById ('todoApp_input');
	handle_inputButton = document.getElementById ('todoApp_inputButton');
	handle_taskDisplay = document.getElementById ('todoApp_taskDisplay');
	handle_inputButton.addEventListener ('click', inputButtonManager, false);
}

function inputButtonManager (event) {
	var inputText = handle_input.value;
	addTaskElementToTaskDisplay (inputText);
}

function addTaskElementToTaskDisplay (inputText) {
	var taskElement = document.createElement ('li');
	taskElement.textContent = inputText;
	addDeleteButtonToTaskElement (taskElement);
	handle_taskDisplay.appendChild (taskElement);
}

function addDeleteButtonToTaskElement (taskElement) {
	var taskDeleteButton = document.createElement ('button');
	taskDeleteButton.textContent = 'delete';
	taskDeleteButton.addEventListener ('click', taskDeleteButtonManager, false);
	taskElement.appendChild (taskDeleteButton);
}

function taskDeleteButtonManager (event) {
	var taskDeleteButton = event.target;
	var taskElement = taskDeleteButton.parentNode;
	taskElement.remove();
}
