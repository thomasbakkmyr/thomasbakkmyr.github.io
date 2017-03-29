function plus(num1, num2) {
	return num1 + num2;
}

function minus(num1, num2) {
	return num1 - num2;
}

function division(num1, num2) {
	if (num2 ===0){
		return "Error"
		} 
	else {
		return num1 / num2;
		}
}

function multiplication(num1, num2) {
	return num1 * num2
}

function clear(num1, num2) {
return "";
}






var result = document.getElementById("answer");

	document.getElementById("plus").onclick = function(){
		var num1 = Number(document.getElementById("num1").value);
		var num2 = Number(document.getElementById("num2").value);
		result.innerHTML = plus(num1, num2);
	}
	document.getElementById("minus").onclick = function() {
		var num1 = Number(document.getElementById("num1").value);
		var num2 = Number(document.getElementById("num2").value);
		result.innerHTML = minus(num1, num2);
	}
	document.getElementById("division").onclick = function(){
		var num1 = Number(document.getElementById("num1").value);
		var num2 = Number(document.getElementById("num2").value);
		result.innerHTML = division(num1, num2);
	}
	document.getElementById("multiplication").onclick = function(){
		var num1 = Number(document.getElementById("num1").value);
		var num2 = Number(document.getElementById("num2").value);
		result.innerHTML = multiplication(num1, num2);
	}
	document.getElementById("clear").onclick = function(){
		var num1 = Number(document.getElementById("num1").value);
		var num2 = Number(document.getElementById("num2").value);
		result.innerHTML = clear("");
	}