var myTimer;

function resetTimer() {
	element = document.getElementById("mainTimer")
	element.textContent = '25:00'
}

function enableStartButton() {
	var btn = document.getElementById("start-timer-button");
	btn.disabled = false;
}

function enableStopButton() {
	var btn = document.getElementById("stop-timer-button");
	btn.disabled = false;
}

function disableStartButton() {
	var btn = document.getElementById("start-timer-button");
	btn.disabled = true;
}

function disableStopButton() {
	var btn = document.getElementById("stop-timer-button");
	btn.disabled = true;
}


// timer functionality taken from https://jsfiddle.net/robbmj/vpq5toeq/4/ (modified and adjusted for my use)

function startTimer(duration, display) {

	var timer = duration, minutes, seconds;

	disableStartButton();
	enableStopButton();


    myTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

		if (timer)
		
		--timer;
	}, 1000);
	
}

function stopTimer() {

	clearInterval(myTimer);
	enableStartButton();
	disableStopButton();
}

function addNewList() {

	// get text input
	var list_name = document.getElementById('new-list').value;

	// create new element
	var new_list_item = document.createElement('button');
	new_list_item.type = "button";
	new_list_item.className = "list-group-item list-group-item-action";
	new_list_item.innerText = list_name;

	// append element
	var all_lists = document.getElementById('all-lists');
	all_lists.appendChild(new_list_item);

	// clear text field
	document.getElementById('new-list').value = "";

}

function addNewTask() {
	// get text input
	var task_name = document.getElementById('new-task').value;

	// create new element
	var new_task_item = document.createElement('li');
	new_task_item.className = "list-group-item";

	var new_task_input = document.createElement("input");
	new_task_input.className = "form-check-input me-1";
	new_task_input.type = "checkbox";
	new_task_input.value = "";

	var edit_icon = document.createElement('a');
	edit_icon.href = "#";
	edit_icon.class = "edit";
	edit_icon.setAttribute('data-bs-placement','bottom');
	edit_icon.title = "Edit";
	edit_icon.style = "float: right;"

	var edit_icon_inner = document.createElement('i');
	edit_icon_inner.setAttribute('data-feather', 'edit');
	edit_icon_inner.style="color: grey; height: 15px; width: 15px;";

	edit_icon.appendChild(edit_icon_inner);

	var delete_icon = document.createElement('a');
	delete_icon.href = "#";
	delete_icon.class = "delete";
	delete_icon.setAttribute('data-bs-placement','bottom');
	delete_icon.title = "Delete";
	delete_icon.style = "padding-left: 8px; float: right;"

	var delete_icon_inner = document.createElement('i');
	delete_icon_inner.setAttribute('data-feather', 'trash-2');
	delete_icon_inner.style="color: red; height: 15px; width: 15px;";

	delete_icon.appendChild(delete_icon_inner);

	new_task_item.appendChild(new_task_input);

	new_task_item.append(task_name);
	
	new_task_item.appendChild(delete_icon);

	new_task_item.appendChild(edit_icon);

	// append to list

	var all_tasks = document.getElementById("current-task-list");
	all_tasks.appendChild(new_task_item);

	// clear text
	document.getElementById('new-task').value = "";

	feather.replace();
}
