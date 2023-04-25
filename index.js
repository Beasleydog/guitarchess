(async () => {
    const { freelizerStart, freelizerStop, freelizerSubscribe, freelizerUnsubscribe } = await freelizer();
    freelizerStart();
    window.freelizerUnsubscribe = freelizerUnsubscribe;
    window.freelizerSubscribe = freelizerSubscribe;
    window.freelizerStart = freelizerStart;
    window.freelizerStop = freelizerStop;

    var config = {
        pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png',
        position: 'start'
    }

    var board1 = Chessboard('board', config);

    let CURRENT_TURN = "white";
    let CURRENT_STATUS = "picking";



    getCordinate().then((cordinate) => {
        console.log(cordinate);
    });
})();

window.noteList = ["E", "F", "G", "A", "B", "C", "D", "E"];
