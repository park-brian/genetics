

var stats = new Array(6);

var numTrials = 100;
var timer = null;
var counter = 0;
var heads = 0;
var tails = 0;
var streak = 0;

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
		var coins = "";
		var coinArray = new Array(val);
		var same = true;
		
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
		
		for (var j = 0; j < coinArray.length - 1; j += 2) {
			
			console.log("comparing " + coinArray[j] + " and " + coinArray[j+1]);
			if (coinArray[j] % 2 != coinArray[j+1] % 2) {
				console.log("found no streak!");
				same = false;
			}
		}
		
		if (same) {
			streak ++;
		}
		
		// ---------- Update Table ----------
		
		var index = val - 2;
		
		
		
		document.getElementById('num').innerHTML = val;		
		document.getElementById('trials').innerHTML = counter;
		document.getElementById('heads').innerHTML = heads;
		document.getElementById('tails').innerHTML = tails;
		document.getElementById('all').innerHTML = streak;
		
		

		// ---------- Call Animation Recursively ----------	
		document.getElementById('coins').innerHTML = coins;
		timer = setTimeout(generator, 20);
	}
	
	else {
		clearInterval(timer);
		timer = null;
		counter = 0;
		
		heads = 0;
		tails = 0;
		streak = 0;
	}
}