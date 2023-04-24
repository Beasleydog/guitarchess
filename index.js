var config = {
    pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
    position: 'start'
}
var board1 = Chessboard('board', config);

const notes = ["E", "F", "G", "A", "B", "C", "D", "E"];

(async () => {
    try {
        const { start, subscribe, stop } = await freelizer()
        start()
        subscribe((data) => {
            // console.log(data);
            window.currentNote = data.note;
            document.getElementById("currentNote").innerHTML = data.note;
        });

    } catch (error) {
        // Error handling goes here
    }
})();