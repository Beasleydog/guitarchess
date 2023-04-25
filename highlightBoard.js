function highlightRow(rowLetter) {
    let row = ["E", "F", "G", "A", "B", "C", "D", "E"].indexOf(rowLetter);
    if (row == -1) return;
    [...document.getElementById("board").children[0].children[0].children].forEach(x => x.classList.remove("highlightedRow"));
    document.getElementById("board").children[0].children[0].children[row].classList.add("highlightedRow");
}