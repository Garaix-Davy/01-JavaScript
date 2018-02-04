var array = [];
var multipliedArray = [];
var associativeArray = {};

function generate() {

  // resetting other tags if the button is reused.
  resetTags();

  // Declares an array of a random size of between 1 and 8 elements
  // Using the getRandomInt function to get a random integer. See the getRandomInt function further below.
  array = new Array(getRandomInt (3, 8));
  // Populates each array elements with random numbers between -10 and 10
  for (var i = 0; i < array.length; i++) {
    array[i] = getRandomInt (-10, 10);
  }
  // Displays the generated array, and the result of each call functions
  document.getElementById('array').innerHTML = "This array was randomly generated: <ul><li>" + array.join("</li><li>") + "</li></ul>";

  // Unhide the multply button.
  document.getElementById("multiplyButton").style.visibility = "visible";
}

// returns a random number
function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function multiply(array) {
  var multiplier = getRandomInt (3, 8);
  multipliedArray = [];
	for (var i = 0; i < array.length; i++) {
		multipliedArray.push(array[i] * multiplier);
	}
  resetTags();
  document.getElementById('multiplyArray').innerHTML += "Each array element has been multiplied by a randomly chosen multiplier ("
  + multiplier + "). The array is now: <ul><li>" + multipliedArray.join("</li><li>") + "</li></ul>";

  // unhide the convert button.
  document.getElementById("convertButton").style.visibility = "visible";
}

function convertArray(multipliedArray) {
  // builds associative "named indexes"
  associativeArray = {};
  if (document.getElementById('multiplyArray').innerHTML == ""){
    multipliedArray = array;
  }
  for(var i = 0; i < multipliedArray.length; i++) {
    var letter = String.fromCharCode(65+i);
    associativeArray[letter] = multipliedArray[i];
  }
  // stringifies the associative array (or object) into a string to display
  var stringArray = JSON.stringify(associativeArray);
  console.log(associativeArray);
  console.log("hello");
  document.getElementById('convertArray').innerHTML = "Each element of the resulting array is paired with a key starting from the letter A. "
  + "The resulting \"associative\" array, or object, is then stringified using JSON:<br><br>" + stringArray;
}

function resetTags() {
  document.getElementById('multiplyArray').innerHTML = "";
  document.getElementById('convertArray').innerHTML = "";
}
