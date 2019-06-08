var table = document.querySelector('table');

table.addEventListener('mouseover', function(changeColor) {

    var block = changeColor.target;

    if (block.tagName == "TD") {

        block.style.background = "grey";
    }
});
// table.addEventListener('mouseover', function(colorBack) {
//     if (block.style.background = "gray") {
//         block.style.background = "white";
//      }
// });