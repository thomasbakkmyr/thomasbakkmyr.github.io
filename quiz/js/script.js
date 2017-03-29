



var result = document.getElementById("answerS1");

document.getElementById("svarbutton1").onclick = function (){
	var radio = document.getElementById("s1a");
	var correct = 0;
	if (radio.checked){
		correct++;
	}
	result.innerHTML = correct;
}

var result = document.getElementById("answerS2");

document.getElementById("svarbutton2").onclick = function (){
	var checkbox = document.getElementById("s2a, s2d");
	var correct = 0;
	if (checkbox.checked){
		correct++;
	}
	result.innerHTML = correct;
}
	
