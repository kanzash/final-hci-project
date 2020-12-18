var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 25;

     function myClock() {
       document.getElementById("demo").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Reached zero");
       }
     }
   }

function resetTimer() {
	element = document.getElementById("mainTimer")
	element.textContent = '25:00'
}


function disableStopButton() {
	document.getElementById("stop-timer-button").disabled = "true"
}

function enableStopButton() {
	document.getElementById("stop-timer-button").disabled = "false"
	document.getElementById("stop-timer-button").enabled = "true"
}


function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	document.getElementById("stop-timer-button").disabled = "false"
	document.getElementById("start-timer-button").disabled = "true"
	enableStopButton()
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
	}, 1000);
	
}

function addNewList() {

	// get text input
	var list_name = document.getElementById('new-list').value;

	// create new element
	var new_list_item = document.createElement('button')
	new_list_item.type = "button"
	new_list_item.className = "list-group-item list-group-item-action"
	new_list_item.innerText = list_name

	// append element
	var all_lists = document.getElementById('all-lists')
	all_lists.appendChild(new_list_item)

	// clear text field
	document.getElementById('new-list').value = ""

}
