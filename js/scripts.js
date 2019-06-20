/**
 * 
 */
function factorial(n) {
	var result =1;
	var i;
	for(i=n; i>1; i--) {
		result = result * i;
	}
	return result;
}

function cesarCipher(str, key) {
	var tmp;
	const UPPER = /[A-Z]+$/;
	const LOWER = /[a-z]+$/;
	var encriptedMsg = "";
	for(var i = 0; i < str.length; i++) {
		if (str.charAt(i).match(LOWER)) {	
			tmp = String.fromCharCode((str.charCodeAt(i) - 97 + parseInt(key))% 26 + 97);
			encriptedMsg += tmp;
		} else if(str.charAt(i).match(UPPER)) {
			tmp = String.fromCharCode((str.charCodeAt(i) - 65 + parseInt(key))% 26 + 65);
			encriptedMsg += tmp;
		} else {
			encriptedMsg += str.charAt(i);
		}
	}
	return encriptedMsg;
}

function cesarDecipher(str, key) {
	var tmp;
	const UPPER = /[A-Z]+$/;
	const LOWER = /[a-z]+$/;
	var encriptedMsg = "";
	for(var i = 0; i < str.length; i++) {
		if (str.charAt(i).match(LOWER)) {	
			tmp = String.fromCharCode((str.charCodeAt(i) - 97 - parseInt(key))% 26 + 97);
			encriptedMsg += tmp;
		} else if(str.charAt(i).match(UPPER)) {
			tmp = String.fromCharCode((str.charCodeAt(i) - 65 - parseInt(key))% 26 + 65);
			encriptedMsg += tmp;
		} else {
			encriptedMsg += str.charAt(i);
		}
	}
	return encriptedMsg;
}