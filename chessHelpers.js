function notesToChessNotation(rowNote, columnNote) {
    const notation = ["a", "b", "c", "d", "e", "f", "g"][window.noteList.indexOf(rowNote)] + (8 - window.noteList.indexOf(columnNote));
    console.log(rowNote, columnNote, notation);
    return notation;
}
async function makeMove(game, board1) {
    return new Promise((res) => {
        getValidPiece(game.turn()).then(async (cordinate) => {
            console.log(cordinate);
            clearCordinateHighlights();
            clearRowHighlights();
            indicateCordinate(cordinate.rowNote, cordinate.columnNote);

            const move = await getValidMove(game, cordinate);

            board1.move(move.from + "-" + move.to);
            res();
        });
    })
}