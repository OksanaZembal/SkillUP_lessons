/*eslint-disable no-console */
//eslint no - console: "error"
// --------TASK1---------
// object

var skill = {
    name: "html",
    level: 5,
    fullPackage: function() {
        return this.name + " - " + this.level;
    }
};
console.log(skill.fullPackage());


// --------TASK2---------
//Add the newString() method to the prototype String, which will do the first and the last letter to uppercase.

var String = function(name) {
    this.name = name
};
String.prototype.Upper = function() {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1, this.name.length - 1) + this.name.charAt(this.name.length - 1).toUpperCase();
}
var me = new String('lorem');
console.log(me.Upper());


// --------TASK3---------
// Calculator

var Calculator = {
    num1: 5,
    num2: 65
};

function sum(number1, number2) {
    return this[number1] + this[number2]
}

function mul(number1, number2) {
    return this[number1] * this[number2]
}
console.log(sum.call(Calculator, 'num1', 'num2'));
console.log(mul.call(Calculator, 'num1', 'num2'));