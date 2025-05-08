window.addEventListener ("load", init, false);

// dom handles
let handle_input = null; 
let handle_inputButton = null;
let handle_taskDisplay = null;

function init() {
	handle_input = document.getElementById ('todoApp_input');
	handle_inputButton = document.getElementById ('todoApp_inputButton');
	handle_taskDisplay = document.getElementById ('todoApp_taskDisplay');
	handle_inputButton.addEventListener ('click', eventHandler_inputButton, false);
}

function createTaskElement (inputText) {
	const taskElement = document.createElement ('li');
	const taskTextSpan = document.createElement ('span');
	taskTextSpan.textContent = inputText;
	taskElement.appendChild (taskTextSpan);
	const taskDeleteButton = createTaskDeleteButton();
	taskElement.appendChild (taskDeleteButton);
	return taskElement;
}

function createTaskDeleteButton() {
	const taskDeleteButton = document.createElement ('button');
	taskDeleteButton.textContent = 'delete';
	taskDeleteButton.addEventListener ('click', eventHandler_taskDeleteButton, false);
	return taskDeleteButton;
}

function eventHandler_inputButton (event) {
	const taskElement = createTaskElement (handle_input.value);
	handle_taskDisplay.appendChild (taskElement);
}

function eventHandler_taskDeleteButton (event) {
	const taskDeleteButton = event.target;
	const taskElement = taskDeleteButton.parentNode;
	taskElement.remove();
}
