function highlightRow(rowLetter) {
    let row = window.noteList.indexOf(rowLetter);

    clearRowHighlights();
    if (row == -1) return;

    document.getElementById("board").children[0].children[0].children[row].classList.add("highlightedRow");
}
function clearRowHighlights() {
    [...document.getElementById("board").children[0].children[0].children].forEach(x => x.classList.remove("highlightedRow"));
}
function clearCordinateHighlights() {
    [...document.getElementById("board").children[0].children[0].children].forEach(x => [...x.children].forEach(y => y.classList.remove("highlightedCord")));
}
function highlightCordinate(rowLetter, columnLetter) {
    let row = window.noteList.indexOf(rowLetter);
    let column = window.noteList.indexOf(columnLetter);

    clearRowHighlights();
    if (row == -1 || column == -1) return;

    document.getElementById("board").children[0].children[0].children[row].children[column].classList.add("highlightedCord");
}
function indicateCordinate(rowLetter, columnLetter) {
    let row = window.noteList.indexOf(rowLetter);
    let column = window.noteList.indexOf(columnLetter);

    [...document.getElementById("board").children[0].children[0].children].forEach(x => [...x.children].forEach(y => y.classList.remove("indicatedCord")));
    document.getElementById("board").children[0].children[0].children[row].children[column].classList.add("indicatedCord");
}