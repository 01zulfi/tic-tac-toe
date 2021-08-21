const GameBoard = (() => {
    const gameBoard = {
        array: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    } 
    return {
        gameBoard: gameBoard.array
    }
})()

const DisplayController = (() => {
    const gameBoardDiv = document.querySelector('#gameBoardDiv');
    const body = document.querySelector('#body');
    gameBoardDiv.textContent = GameBoard.gameBoard;
    body.appendChild(gameBoardDiv);
})

function Player(name, marker) {
    return {
        name,
        marker
    }
}
