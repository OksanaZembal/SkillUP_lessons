/*eslint-disable no-console */
//eslint no - console: "error"
// --------TASK1---------

var skill = {
    name: "html",
    level: 5,
    fullPakege: function() {
        return this.name + " - " + this.level;
    }
};
console.log(skill.fullPakege());