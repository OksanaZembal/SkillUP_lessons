/* eslint-disable no-console */
//eslint no - console: "error"
// --------TASK1---------

var a = -5;
if (a > 0) {
    console.log(1);
} else if (a < 0) {
    console.log(-1);
} else {
    console.log(0);
}

function compareNumber(b) {
    if (b > 0) {
        return 1;
    } else if (b < 0) {
        return -1;
    } else {
        return 0;
    }
}
console.log(compareNumber(4));


var n;
a = 1;
n = a > 0 ? 'true' : 'false';
console.log("Does a>0? " + n);

a = 2;
switch (a) {
    case 1:
        console.log('a');
        break;
    case 2:
        console.log('b');
        break;
    case 3:
        console.log('c');
        break;
    default:
        console.log('z');
}
var i;
for (i = 1; i < 10; i++) {
    console.log(i * i);
}
var k = 1;
while (k < 10) {
    console.log(k * k);
    k++;

}

function getBiggerNumber(a, b) {
    if (a > b) {
        return a + " -This number is bigger";
    } else if (a < b) {
        return b + " -This number is bigger";
    } else {
        return "Those numbers are equal";
    }
}
console.log(getBiggerNumber(5, 3));