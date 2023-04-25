function highlightRow(rowLetter) {
    let row = window.noteList.indexOf(rowLetter);
    if (row == -1) return;
    [...document.getElementById("board").children[0].children[0].children].forEach(x => x.classList.remove("highlightedRow"));
    document.getElementById("board").children[0].children[0].children[row].classList.add("highlightedRow");
}
function highlightCordinate(rowLetter, columnLetter) {
    console.log(rowLetter, columnLetter);
    let row = window.noteList.indexOf(rowLetter);
    let column = window.noteList.indexOf(columnLetter);
    if (row == -1 || column == -1) return;
    [...document.getElementById("board").children[0].children[0].children].forEach(x => x.classList.remove("highlightedRow"));
    [...document.getElementById("board").children[0].children[0].children].forEach(x => [...x.children].forEach(y => y.classList.remove("highlightedCord")));
    document.getElementById("board").children[0].children[0].children[row].children[column].classList.add("highlightedCord");
}