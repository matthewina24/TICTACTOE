/* var firstPlayer = Math.floor((Math.random() *11) //returns number between 1 and 10
if (firstPlayer > 5){
	playerCount =0;}
else
	{playerCount = 1}; */
	
var playerCount = 0;
function allowDrop(ev) {
	ev.preventDefault();
}
function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.id);
}
function drop(ev) {
	var data=ev.dataTransfer.getData("Text");
	if (playerCount == 0 && document.getElementById(data).className == "dragon"){
		var imgelement = document.getElementById(data);
		imgelement.setAttribute("draggable","false");
		ev.target.appendChild(document.getElementById(data));
		ev.preventDefault();
		playerCount ++;
		ev.target.style.backgroundColor = "#ff99ff";}
	else if(playerCount == 1 && document.getElementById(data).className == "dog"){
		var imgelement = document.getElementById(data);
		imgelement.setAttribute("draggable","false");
		ev.target.appendChild(document.getElementById(data));
		ev.preventDefault();
		playerCount --;
		ev.target.style.backgroundColor ="#ff3366";}
	
	
	
}

function gamelogic(ev){
	var count = 0;
	var countStreak = 0;
	
	var boxArray = document.getElementsByClassName('box');
	// boxes 0-2 are row 1, 3-5 are row 2, and 6-8 are row 3
	
	// begins looping through all nine boxes on the page
	for(count = 0; count < boxArray.length; count ++){
		// checks if the box being manipulated has a child (image) attached before trying to access it
		if(boxArray[count].hasChildNodes()){
		
			// various cases calling to check if the box has appropriate neighbouring image children. This is the core game logic
			// Assigns if the current loop is dealing with an x or an o, for game logic purposes
			var boxClassName = boxArray[count].childNodes[0].className
			// In this instance, for example, it checks for the left win condition, passing in the current loop number and if its an x or an o
			if(( count == 3 || count == 6) && checkLeftWin(count, boxClassName)){
				alert(boxClassName + " won!");
				window.location.reload();
				}			
			else if ((count == 1 || count == 2) && checkDownWin(count, boxClassName)){
				alert(boxClassName + " won!");
				window.location.reload();
				}
			else if(count == 0 && (checkDownWin(count, boxClassName) || checkLeftWin(count, boxClassName) || checkDiagnolDownWin(count, boxClassName))){
				alert(boxClassName + " won!");
				window.location.reload();
			}
			
			else if(count == 6 && (checkLeftWin(count, boxClassName) || checkDiagnolUpWin(count, boxClassName))){
				alert(boxClassName + " won!");
				window.location.reload();
			}
			//boxArray[count].style.backgroundColor = 'red';
		}
		else{
		
		}
	}
}

// Function to check if the left win condition is fulfulled. All the following functions follow the same format, just checking different conditions
function checkLeftWin(count, boxClassName){
	var boxArray = document.getElementsByClassName('box');
	
	//switch to go through if it's in position 0, check it's appropriate neighbours, and so on
	switch(count){
	
		case 0:
		if(boxArray[1].hasChildNodes() && boxArray[2].hasChildNodes())
			if(boxArray[1].childNodes[0].className == boxClassName && boxArray[2].childNodes[0].className == boxClassName){
				return true;
			}
		break;
		
		case 3:
		if(boxArray[4].hasChildNodes() && boxArray[5].hasChildNodes())
			if(boxArray[4].childNodes[0].className == boxClassName && boxArray[5].childNodes[0].className == boxClassName){
				return true;
			}
		break;
		
		case 6:
		if(boxArray[7].hasChildNodes() && boxArray[8].hasChildNodes())
			if(boxArray[7].childNodes[0].className == boxClassName && boxArray[8].childNodes[0].className == boxClassName){
				return true;
			}
		break;
		
	}
}

function checkDownWin(count, boxClassName){
	var boxArray = document.getElementsByClassName('box');
	switch(count){
	
		case 0:
		if(boxArray[1].hasChildNodes() && boxArray[2].hasChildNodes())
			if(boxArray[1].childNodes[0].className == boxClassName && boxArray[2].childNodes[0].className == boxClassName){
				return true;
			}
		break;
		
		case 1:
		if(boxArray[4].hasChildNodes() && boxArray[7].hasChildNodes())
			if(boxArray[4].childNodes[0].className == boxClassName && boxArray[7].childNodes[0].className == boxClassName){
				return true;
			}
		break;
		
		case 2:
		if(boxArray[5].hasChildNodes() && boxArray[8].hasChildNodes())
			if(boxArray[5].childNodes[0].className == boxClassName && boxArray[5].childNodes[0].className == boxClassName){
				return true;
			}
		break;
	}
}


function checkDiagnolDownWin(count, boxClassName){
	var boxArray = document.getElementsByClassName('box');
	if(boxArray[4].hasChildNodes() && boxArray[7].hasChildNodes()){
		if(boxArray[4].childNodes[0].className == boxClassName && boxArray[7].childNodes[0].className == boxClassName){
					return true;
		 }
	 }
}

function checkDiagnolUpWin(count, boxClassName){
	var boxArray = document.getElementsByClassName('box');
	if(boxArray[4].hasChildNodes() && boxArray[2].hasChildNodes()){
		if(boxArray[4].childNodes[0].className == boxClassName && boxArray[2].childNodes[0].className == boxClassName){
					return true;
		 }
	}
}