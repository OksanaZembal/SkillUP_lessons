/* eslint-disable no-console */
//eslint no - console: "error"
// --------TASK1---------
var myMax = 100;
var myRandomNumber = Math.floor(Math.random() * myMax) + 1;
console.log("The number is " + myRandomNumber);
if (myRandomNumber % 2 == 0) {
    console.log("This number is Even Number");
} else {
    console.log("This number is Odd Number");
}
//--------TASK1-(function method)--------

function randomNumber(min, max) {
    var a = Math.floor(Math.random() * (max - min + 1)) + min;
    if (a % 2 == 0) {
        return a + " -This number is 'Even Number'";
    } else {
        return a + " -This number is 'Odd Number'";
    }
}
console.log(randomNumber(0, 100));

// --------TASK2---------

var arr = ["banana", "orange", "apple", "mango", "strawberry", "kiwi", "lemon", "cherry"];
for (var i = 0; i < arr.length; i++) {
    var firstLetter = arr[i][0].toUpperCase();
    var restLetters = arr[i].substring(1);
    arr[i] = firstLetter + restLetters;
}
console.log(arr.join(" "));


// --------TASK3---------
function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        return str1 + " -this is bigger line!";
    } else if (str1.length < str2.length) {
        return str2 + " -this is bigger line!";
    } else {
        return "this strings are equal";
    }
}
console.log(compareStrings("Harry Potter", "Game Of Thrones"));