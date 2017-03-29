var result = document.getElementById("result");

//Oppgave a
 document.getElementById("a").onclick = function() {
	result.innerHTML = "";
	var tall=[34, 53, 2, 3, 34, 26, -26, 85, 3, 4, 98, 2, -12];
	for (var i = 0; i<tall.length ; i++) {
		result.innerHTML += tall[i] + " ";
	}
	}

	//Oppgave b
	document.getElementById("b").onclick = function() {
	result.innerHTML = "";
	var tall=[34, 53, 2, 3, 34, 26, -26, 85, 3, 4, 98, 2, -12];
	tall.reverse();
	for (var i = 0; i<tall.length ; i++) {
		result.innerHTML += tall[i] + " ";
	}
	}

	//Oppgave c
	document.getElementById("c").onclick = function() {
	result.innerHTML = "";
	var tall=[34, 53, 2, 3, 34, 26, -26, 85, 3, 4, 98, 2, -12];
	for (var i = 0; i<tall.length ; i+=2) {
		result.innerHTML += tall[i] + " ";
	}
	}

	//Oppgave d
	document.getElementById("d").onclick = function() {
	result.innerHTML = "";
	var tall=[34, 53, 2, 3, 34, 26, -26, 85, 3, 4, 98, 2, -12];
	for (var i = 0; i<tall.length ; i++)
		if (tall[i]< 10) {
		result.innerHTML += tall[i] + " ";
	}
	}