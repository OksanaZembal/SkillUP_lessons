/*eslint-disable no-console */
//eslint no - console: "error"
// --------TASK1---------
function addArreyByPush() {
    var arr = [];
    for (var i = 0; i == null; i++) {
        arr[i] = arr.push(prompt());
        if (arr[i] == null) {
            break;
        }
    }
    return arr;
}
console.log(addArreyByPush());
console.log(arr);

// --------TASK2---------

function getMatrixIndex(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            sum = sum + arr[i][j];
        }
    }
    return sum;
}
var arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
console.log(getMatrixIndex(arr));

// --------TASK3---------
var longString = "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequuntur laboriosam nisi fuga commod adipisci in laborum quod nihil dignissimos itaque architecto recusandae corrupti";
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

// --------TASK4------------
var numberArrey = [1, 9, 22, 7, 6];
numberArrey.splice(3, 0, 8);
console.log(numberArrey);