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
    window.board1 = board1;

    const game = new Chess();
    window.game = game;

    gameLoop();
})();

async function gameLoop() {
    await makeMove(game, board1);
    currentState.innerText = game.turn() === "w" ? "White" : "Black";
    if (game.game_over()) {
        alert("Game Over! " + game.turn() === "w" ? "White" : "Black" + " lost!");
        return;
    }
    gameLoop();
}

window.noteList = ["E", "F", "G", "A", "B", "C", "D", "D#"];
