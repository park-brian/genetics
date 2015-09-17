
var timer = null;
var counter = 10;

document.onload = function() {

}

function getRandomInt(range) {
	
	return Math.ceil(Math.random() * range);
	
}


function getCoinPath() {
	var contents = "<img src='assets/images/coins/"
	contents += Math.ceil(Math.random() * 8) + ".jpg' width='60px'></img>";
	return contents;
}

function flipCoins() {
	var val = parseInt(document.getElementById('selector').value);
	
	var coins = "";
	
	for (var i = 0; i < val; i += 1) {
		coins += getCoinPath();
	}
	
	document.getElementById('coins').innerHTML = coins;
	
		if (counter > 0) {
		counter -= 1;
		timer = setInterval(flipCoins, 2);
	} else {
		clearInterval(timer);
		timer = null;
//		counter = 10;
	}
}

function updateNum() {
	var selected = document.getElementById('selector');
	
	document.getElementById('num').innerHTML = selected.value;
}

function flipCoins50() {
	for (var i = 1; i <= 8; i += 1) {
		document.getElementById("c" + i).style.display = "none";			
	}
	
	var val = parseInt(document.getElementById('selector').value);
	var array = new Array();
	
	for (var i = 0; i < val; i += 1) {
		var name = "c" + getRandomInt(8);
		console.log(name);
		document.getElementById(name).style.display = "inline";
	}
		
	if (counter > 0) {
		counter -= 1;
		timer = setInterval(flipCoins50, 100);
	} else {
		clearInterval(timer);
		timer = null;
//		counter = 10;
	}
	
	
}
