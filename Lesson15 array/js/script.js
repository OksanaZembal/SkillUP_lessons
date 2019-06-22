/*eslint-disable no-console */
//eslint no - console: "error"


// --------TASK1------
//add items to the array via the prompt(), until user click "cancel"
var arr = [];

function getPushArray() {
    var f = prompt();
    if (f === null) {
        console.log(arr);
    } else {
        arr.push(f);
        getPushArray();
    }
}
getPushArray();



// --------TASK2---------
//find the sum of elements of the matrix array
var arrMatrix = [
    [1, 1, 1],
    [1, 5, 1],
    [1, 1, 1]
];

function getMatrixIndex(arrMatrix) {
    var sum = 0;
    for (var i = 0; i < arrMatrix.length; i++) {
        for (var j = 0; j < arrMatrix.length; j++) {
            sum = sum + arrMatrix[i][j];
        }
    }
    return sum;
}

console.log(getMatrixIndex(arrMatrix));

// --------TASK3-------
// break the lorem line by the delimiter '' and display the words in the console longer than 5 letters


var longString = "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequuntur laboriosam nisi fuga";
var array = longString.split(' ');
console.log(array);
for (var i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
        console.log(array[i]);
    }
}
// --------TASK3 (Function method)---------


function getLongStrings() {
    var targetArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > 5) {
            targetArray.push(array[i]);
        }
    }
    return targetArray;
}
var result = getLongStrings();
console.log(result);

// --------TASK4---------
//Given array [1, 9, 22, 7, 6], add the number 8 after number 22

var numberArray = [1, 9, 22, 7, 6];
numberArray.splice(3, 0, 8);
console.log(numberArray);

// --------TASK5--------
//write a function randomNumber (number) that fills the array random numbers from 0 to 100, check, if there is a number in array  via prompt()

var myMax = 100;

function randomNumber(number) {
    var array = [];
    for (var i = 0; i < number; i++) {
        array.push(Math.floor(Math.random() * myMax) + 1);
    }
    return array;
}
var arrayResult = randomNumber(10);
console.log(arrayResult);
console.log(arrayResult.indexOf(+prompt("Enter number")));




// --------TASK6------- 
// with method forEach(element) find the longest word in array

var loremString = "Lorem elit Consequuntur dolor sit fugaath";
var words = loremString.split(' ');
console.log(words);

function getLongestWord(words) {
    var longestWord = "";
    words.forEach(function(word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}
console.log("The longest word is: " + getLongestWord(words));

// --------TASK7------
// With using the map method, create an array of square  of array

var arrayOfNumbers = [8, 6, 12, 10];
console.log(arrayOfNumbers);
var square = arrayOfNumbers.map(function(sqr) {
    return sqr * sqr;
});
console.log(square);