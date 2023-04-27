async function getCordinate() {
    clearCordinateHighlights();
    clearRowHighlights();

    const columnNote = await getNote((currentNote) => {
        highlightRow(currentNote)
    });
    const rowNote = await getNote((currentNote) => {
        highlightCordinate(columnNote, currentNote)
    });

    return { columnNote, rowNote };
}
async function getValidPiece(color) {
    return new Promise(async (resolve, reject) => {
        while (true) {
            console.log("getting cordinate");
            const cordinate = await getCordinate();
            const piece = window.board1.position()[notesToChessNotation(cordinate.rowNote, cordinate.columnNote)];
            if (piece && piece[0] == color) {
                resolve(cordinate);
                return;
            } else {
                spawnEmoji("❌");
            }
        }
    });
}
async function getValidMove(game, cordinate) {
    return new Promise(async (resolve, reject) => {
        while (true) {
            const moveDestination = await getCordinate();
            console.log(moveDestination);
            const move = game.move({
                from: notesToChessNotation(cordinate.rowNote, cordinate.columnNote),
                to: notesToChessNotation(moveDestination.rowNote, moveDestination.columnNote),
                promotion: 'q' // NOTE: always promote to a queen for example simplicity
            });
            if (move) {
                resolve(move);
                return;
            }
            console.log(move);
        }
    });
}