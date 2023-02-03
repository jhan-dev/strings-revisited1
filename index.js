//strings review

///A) **iteration**
//Strings are iterable! Practice iterating over strings with the prompts below.

//-------------------------

//1)backwards word
//iterate backwards and return the word facing the right way

//** You do not need to split to solve this. try to solve this by iterating backwards

function backwards(str) {
	//create result var
	let result = '';
	//iterate str
	for (var i = str.length - 1; i >= 0; i--) {
		//  iterate str backwards
		let currChar = str[i];
		//reverse str
		result += currChar;
	}
	//return result
	return result;
}

//console.log(backwards('olleh')); //=> 'hello'

//-------------------------

//2) every other character
//Given a string, pull out a word by iterating over every other character.

function everyOther(str) {
	//create result var
	let result = '';
	//iterate str by every other char
	for (var i = 0; i < str.length; i += 2) {
		//create currChar var
		let currChar = str[i];
		//update result w/ currChar
		result += currChar;
	}
	//return result
	return result;
}

//console.log(everyOther('shwoitmj')); // => 'swim'
//console.log(everyOther('gkloure')); //= > 'glue'

//-------------------------

//3 Flip every character
//Given a string, flip every character with the one next to it

function flip(str) {
	//create result var
	let result = '';
	//iterate str and flip pairs only
	for (var i = 0; i < str.length; i += 2) {
		//create fChar var
		let fChar = str[i + 1];
		//create sChar var
		let sChar = str[i];
		//if str[i+1] !== undefined
		if (fChar !== undefined) {
			//update result w/ f&s Char
			result += fChar + sChar;
		} else {
			//else update result w/ sec char (last char)
			result += sChar;
		}
	}
	//return result
	return result;
}

//console.log(flip('ejllo')) //=> 'jello';
//console.log(flip('otatl')) //=> 'total';
//console.log(flip('ebrdoom')) //> 'bedroom'
//console.log(flip('ofru')) //=> 'four'

//-------------------------

//4) Get every third -> advanced problem
//** pay close attention to the examples
//**hint: try looping backwards

//Get every third character starting from the end of the string to get a word

function getEveryThird(str) {
	//create result var
	let result = '';
	//iterate str backwards by 3 chars
	for (var i = str.length - 1; i >= 0; i -= 3) {
		//create currChar var
		let currChar = str[i];
		//update result w/ currChar
		result += currChar;
	}
	//return result
	return result;
}

//console.log(getEveryThird('drteghlsdbiomweusfj')); //=> 'jumbled'
//console.log(getEveryThird('oerwtyt')); //=> 'two'
//console.log(getEveryThird('tlka')); //=> at

//5) Advanced: every other character switch
//A string of words has been flipped, and an extra character has been added in between. Flip every other character and add it to a new string to return a word

function everyOtherSwitch(str) {
	//create result var
	let result = '';
	//iterate str by 4 (fChar+skip+sChar+skip) **correction from 3
	for (var i = 0; i < str.length; i += 4) {
		//create fChar var
		let fChar = str[i + 2];
		//create sChar var
		let sChar = str[i];
		//if fChar !== undefined
		if (fChar !== undefined) {
			//update result w/ f&s chars
			result += fChar + sChar;
		}
		//else
		else {
			//update w/ sec char
			result += sChar;
		}
	}
	//return result
	return result;
}
//horse                       2 1 4 3 5
//console.log(everyOtherSwitch('odhysprle')) //=> 'horse'
//console.log(everyOtherSwitch('idmrhagjyst')); //=> 'mighty'
//mighty                      2 1 4 3 6 5

//********************************** */

//--------------------------------

//B) **immutability**
//While strings are iterable, they are not mutable. That means you cannot directly change the index of a string like you can an array. How can you get around that? That is up for you to solve!
//!important: Don't solve this by splitting. This is for practicing the concept

///1) Given a word and a character, replace the first letter of the word with the character
function replaceFirstLetter(word, char) {
	//create result var
	let result = '';
	//update result w/ char+slice word from 1
	result += char + word.slice(1);
	//return result
	return result;
}

//console.log(replaceFirstLetter('word', 'f' )) //=> ford

//--------------------------------

///2) Replace the given word's first and last character with an uppercase

function firstLastUppercase(str) {
	//create result var
	let result = '';
	//iterate str
	for (var i = 0; i < str.length; i++) {
		//create currChar var
		let currChar = str[i];
		//create fChar var
		let fChar = str[0];
		//create lChar var
		let lChar = str[str.length - 1];
		//if currChar !== fChar & !== lChar
		if (currChar !== fChar && currChar !== lChar) {
			//update result w/ currChar
			result += currChar;
		} else {
			//else change currChar to upperCase
			currChar = currChar.toUpperCase();
			//update result w/ currChar
			result += currChar;
		}
	}
	//return result
	return result;
}

//console.log(firstLastUppercase('world')); //=> 'WorlD'

//--------------------------------

//3) Are the first and last Switched?
//Given a word and a target word, find if by switching the first and last character you get the target word.

function isSwitched(word, target) {
	//create fChar var
	let fChar = word[0];
	//create lChar var
	let lChar = word[word.length - 1];
	//if word === target, return false
	if (word === target) {
		return false;
	}
	//else if fChar === target[word.length-1] && lChar === target[0]
	else if (
		fChar.toLowerCase() === target[word.length - 1].toLowerCase() &&
		lChar.toLowerCase() === target[0].toLowerCase()
	) {
		//return true
		return true;
	}
	return false;
}

//console.log(isSwitched('yungrh', 'hungry')) // => true
//console.log(isSwitched('laugh', 'laugh')) // => false
//console.log(isSwitched('sigth', 'sight')); // => false
//console.log(isSwitched('eakM', 'mAke')); //=> true

//-------------------------

//4) replace characters with symbol
//Given a string, a target letter, and a symbol, replace the character in the string with the symbol

//**solve without splitting str

function replaceWithSymbol(str, char, sym) {
	//create result var
	let result = '';
	//iterate str
	for (var i = 0; i < str.length; i++) {
		//create currChar var
		let currChar = str[i].toLowerCase();
		//if currChar === char
		if (currChar === char.toLowerCase()) {
			//currChar = sym
			currChar = sym;
			//update result
			result += currChar;
		}
		//else update result w/ currChar
		else {
			result += currChar;
		}
	}
	//return result
	return result;
}

//console.log(replaceWithSymbol('three', 'e', '#')) //=> thr##
//console.log(replaceWithSymbol('very precious stones', ' ', '%')) //=> 'very%precious%stones'
//console.log(replaceWithSymbol('Total tally', 't', '&'))  // ==> '&o&al &ally'

//-------------------------

//********************************** */
//concatenation

//-------------------------

//coming soon - continue on for now!

//********************************** */
//methods

///pull the object from the string

///Practie methods for strings - Slice and indexOf
/*
  Some of the strings methods have an array counterpart. And some array methods do not have a string counterpart.
  Remember strings are immutable, and arrays are not mutable. This means that string methods must always return a new method.
   */

//-------------------------

//1) //slice - Takes two indexes as arguments and returns a new string starting from the first given index and ending at the second. If the second index is not given it will stop at the last character.

//Play around with the methods! Predict what will be logged

var toBeSliced = 'Slice me!';
var sliced1 = toBeSliced.slice(1, 3);
var sliced2 = toBeSliced.slice(1);
//console.log('sliced1:', sliced1); // what will be shown here?
//  sliced1Prediction:  'li'

//console.log('sliced2:',  sliced2); // what will be shown here?
//  sliced2Prediction:  'lice me!'

//-------------------------

//2) indexOf - Returns the start index in a string of a given string, or -1 if the given string is not found.

var indexPractice = 'hello you';
var indexed1 = indexPractice.indexOf('ello');
var indexed2 = indexPractice.indexOf('zebra');
//console.log('indexed1:', indexed1); // what will be shown here?
//  indexed1Prediction:  1

//console.log('indexed2:', indexed2); // what will be shown here?
//  indexed2Prediction:  0
//  **correction:  -1, because 'zebra' in indexPractice = false

//-------------------------

//3)
///Look around and play with these methods as well!

//substring
//toLowercase
//toUppercase

//-------------------------

//slice 1
//given a string and a start and ending index, return the correct chunk of the given string - Use slice -

function sliceChunk(str, start, end) {
	//console.log(str.slice(start, end));
	return str.slice(start, end);
}

//console.log('sliceChunk:', sliceChunk('cows in the field', 5, 11) === 'in the'); //=> 'in the'

//**** not for strings, but interesting: how many unique objects, i.e. objects that do not contain repetitive content */

//-----------------------------------

//slice 2
//given a str, an index, and a targetString, return a boolen: true if the targetString exists at that index or false if it does not-- Use slice!

//*** You do not need indexOf for this problem because you are given the starting index. Use the parameters given and slice to solve this.

function atIndex(str, ind, targetStr) {
	//if str.slice @ ind === targetStr, return true
	//console.log(str.slice(ind, ind+targetStr.length));
	if (str.slice(ind, ind + targetStr.length) === targetStr) {
		return true;
	}
	//else return false
	else {
		return false;
	}
}

//console.log('atIndex:', atIndex('We would love to go!', 9, 'love')) //=> true
//console.log('atIndex', atIndex('We would love to go!', 10, 'go')); //=> false

//-----------------------------------

//indexOf 1:
