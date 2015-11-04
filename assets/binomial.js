window.onload = function() {
	var nChildren = '';
	for (var i = 1; i < 10; i ++) {
		nChildren += "<option>" + i + "</option>";
	} 

	document.getElementById('numChildren').innerHTML = nChildren;
	updateParents();
}

function updateParents() {
	var p1 = document.getElementById('parent-1').selectedIndex;
	var p2 = document.getElementById('parent-2').selectedIndex;
	console.log(p1 + ' ' + p2);

	document.getElementById('firstParent').innerHTML = document.getElementById('parent-1').value;
	document.getElementById('secondParent').innerHTML = document.getElementById('parent-2').value;
}

function generateFormula() {
	
	
}