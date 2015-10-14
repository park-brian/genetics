

var stats = new Array(6);

var numTrials = 100;
var timer = null;
var counter = 0;
var heads = 0;
var tails = 0;
var consecutiveHeads = 0;
var consecutiveTails = 0;
var diceArray = [0, 0, 0, 0, 0, 0];


function generateQuestion() {
	numDice = parseInt(document.getElementById('numDice').value);
	
	switch(numDice) {
		case 2:
			document.getElementById('diceQuestion').innerHTML = "What is the probability of getting a one on the first die and an odd number on the second die?";
			break;
		case 3:
			document.getElementById('diceQuestion').innerHTML = "What is the probability of getting a one on the first die, an odd number on the second die and an even number on the third die?";
			break;
		case 4:
			document.getElementById('diceQuestion').innerHTML = "What is the probability of getting a one on the first die, an odd number on the second die, an even number on the third die and a six on the last die?";
			break;
	}
}

function rollDice() {
	numRolls = parseInt(document.getElementById('numRolls').value);
	var delay = 1000/numRolls;
	
	if (counter < numRolls) {
		counter ++;

		// ---------- Animate Dice ----------
		var val = parseInt(document.getElementById('numDice').value);	// get number of dice
		var dice = "";
		
		for (var i = 0; i < val; i ++) {
			var r = Math.ceil(Math.random() * 6);	// random number from 1-12
						
			diceArray[r-1]++;
			
			document.getElementById(r.toString()).innerHTML = diceArray[r-1];
			
			dice += '<img src="assets/images/dice/' + r + '.jpg"></img>';
		}
		console.log(diceArray);

			// ---------- Call Animation Recursively ----------	
		document.getElementById('dice').innerHTML = dice;
		timer = setTimeout(rollDice, delay);
	}
	
	else {
		clearInterval(timer);
		timer = null;
		counter = 0;	
		diceArray = [0, 0, 0, 0, 0, 0];
	}	
}


function generator() {

	numTrials = parseInt(document.getElementById('numTrials').value);
	var delay = 1000/numTrials;

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
		timer = setTimeout(generator, delay);
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

document.onload = function() {

	for (var i = 0; i < stats.length; i ++) {
		var row = new Array(5);
		
		for (var j = 0; j < row.length; j ++) {
			row[j] = 0;
		}
		
		stats.push(row);
	}
}
