

var stats = new Array(6);

var numTrials = 1000;
var timer = null;
var counter = 0;
var heads = 0;
var tails = 0;
var consecutiveHeads = 0;
var consecutiveTails = 0;

document.onload = function() {
	for (var i = 0; i < stats.length; i ++) {
		var row = new Array(5);
		
		for (var j = 0; j < row.length; j ++) {
			row[j] = 0;
		}
		
		stats.push(row);
	}
}

function generator() {

	if (counter < numTrials) {
		counter ++;
		
		// ---------- Animate Coins ----------
		var val = parseInt(document.getElementById('selector').value);	// get number of coins
		var coinArray = new Array(val);
		var coins = "";
		var allHeads = true;
		var allTails = true;
		
		for (var i = 0; i < val; i ++) {
			var r = Math.ceil(Math.random() * 12);	// random number from 1-12
			
			if (r % 2 == 0) {
				tails ++;
			} else {
				heads ++;
			}
			
			coinArray[i] = r;			
			coins += '<img src="assets/images/coins/' + r + '.jpg"></img>';
		}
		
		for (var j = 0; j < coinArray.length; j ++) {
			if (coinArray[j] % 2 != 1) {
				allHeads = false;
			}
		}
		
		for (var j = 0; j < coinArray.length; j ++) {
			if (coinArray[j] % 2 != 0) {
				allTails = false;
			}
		}

		if (allHeads) {
			consecutiveHeads ++;
		}
		else if (allTails) {
			consecutiveTails ++;
		}
		
		// ---------- Update Table ----------
		
		var index = val - 2;
		
		document.getElementById('num').innerHTML = val;		
		document.getElementById('trials').innerHTML = counter;
		document.getElementById('heads').innerHTML = heads;
		document.getElementById('tails').innerHTML = tails;
		document.getElementById('allHeads').innerHTML = consecutiveHeads;
		document.getElementById('allTails').innerHTML = consecutiveTails;
		

		// ---------- Call Animation Recursively ----------	
		document.getElementById('coins').innerHTML = coins;
		timer = setTimeout(generator, 0);
	}
	
	else {
		clearInterval(timer);
		timer = null;
		counter = 0;
		
		heads = 0;
		tails = 0;
		consecutiveHeads = 0;
		consecutiveTails = 0;
	}
}