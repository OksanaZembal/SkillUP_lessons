/*eslint-disable no-console */
//eslint no - console: "error"


// --------TASK1--Введення масиву через promt----
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



// --------TASK2--Сума елементів матриці-------
var arrmatrix = [
    [1, 1, 1],
    [1, 5, 1],
    [1, 1, 1]
];

function getMatrixIndex(arrmatrix) {
    var sum = 0;
    for (var i = 0; i < arrmatrix.length; i++) {
        for (var j = 0; j < arrmatrix.length; j++) {
            sum = sum + arrmatrix[i][j];
        }
    }
    return sum;
}

console.log(getMatrixIndex(arrmatrix));

// --------TASK3-- Перетворення рядка в масив-------


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

// --------TASK4---Додавання елементу до масиву---------

var numberArray = [1, 9, 22, 7, 6];
numberArray.splice(3, 0, 8);
console.log(numberArray);

// --------TASK5------------Массив випадкових чисел-------

var myMax = 100;

function randomNumber(number) {
    var array = [];
    for (var i = 0; i < number; i++) {
        array.push(Math.floor(Math.random() * myMax) + 1);
    }
    return arrey;
}
var arrayResult = randomNumber(10);
console.log(arrayResult);
console.log(arrayResult.indexOf(+prompt("Enter number")));




// --------TASK6-----Метод forEach(element)---- 

var loremString = "Lorem   elit Consequuntur dolor sit fugaath";
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

// --------TASK7-----Метод map(element)----

var arrayOfNumbers = [8, 6, 12, 10];
console.log(arrayOfNumbers);
var square = arrayOfNumbers.map(function(sqr) {
    return sqr * sqr;
});
console.log(square);