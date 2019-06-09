/*eslint-disable no-console */
//eslint no - console: "error"
// --------TASK1---------(+)

function getName() {
    function putName() {
        var myName = prompt("Enter your name: ");
        return myName;
    }
    return putName();
}
alert("Hello " + getName());

// --------TASK2---------(+)

var Calculator = {
    num1: 5,
    num2: 6,
};

function sum(number1, number2) {
    return this[number1] + this[number2]
}

function mul(number1, number2) {
    return this[number1] * this[number2]
}
console.log(sum.call(Calculator, 'num1', 'num2'));
console.log(mul.call(Calculator, 'num1', 'num2'));

//--------TASK3---------(-)

function Calculator2(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;

    this.sum = function() {
        return this.number1 + this.number2;
    };
    this.mul = function() {
        return this.number1 * this.number2;
    };
}

var calculator2 = new Calculator2(2, 3);

console.log("Сума =" + calculator2.sum());
console.log("Добуток =" + calculator2.mul());