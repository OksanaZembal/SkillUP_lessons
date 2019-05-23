/*eslint-disable no-console */
//eslint no - console: "error"
// --------TASK1--ВВедення масиву через promt----(НЕ ЗНАЮ ЯК ЗРОБИТИ)---
var arr = [];
var number = 10;

function addArreyByPush(number) {
    for (var i = 0; i < number && i !== null; i++) {
        var newarr = arr.push(+prompt("Enter the numbers:"));

    }
    return newarr;
}
console.log(addArreyByPush());

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
var arrey = longString.split(' ');
console.log(arrey);
for (var i = 0; i < arrey.length; i++) {
    if (arrey[i].length > 5) {
        console.log(arrey[i]);
    }
}
// --------TASK3 (Function method)---------
function getLongStrings() {
    var targetArray = [];
    for (var i = 0; i < arrey.length; i++) {
        if (arrey[i].length > 5) {
            targetArray.push(arrey[i]);
        }
    }
    return targetArray;
}
var result = getLongStrings();
console.log(result);

// --------TASK4---Додавання елементу до масиву---------
var numberArrey = [1, 9, 22, 7, 6];
numberArrey.splice(3, 0, 8);
console.log(numberArrey);

// --------TASK5------------Массив випадкових чисел-------
var myMax = 100;

function randomNumber(number) {
    var arrey = [];
    for (var i = 0; i < number; i++) {
        arrey.push(Math.floor(Math.random() * myMax) + 1);
    }
    return arrey;
}
var arreyResult = randomNumber(10);
console.log(arreyResult);
console.log(arreyResult.indexOf(+prompt("Enter number")));




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
var arreyOfNumbers = [8, 6, 12, 10];
console.log(arreyOfNumbers);
var square = arreyOfNumbers.map(function(sqr) {
    return sqr * sqr;
});
console.log(square);