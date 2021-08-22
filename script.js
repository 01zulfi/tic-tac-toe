//Dependencies? Yes. No for now.
const DisplayController = (() => {
    const array = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'O'];
    const gameBoardDiv = document.querySelector('#gameBoardDiv');
    const display = {
        grid: function() {
            for (let i = 0; i < 9; i++) {
                const gameBoardSquare = document.createElement('div');
                gameBoardSquare.id = 'gameBoardSquare';
                gameBoardDiv.appendChild(gameBoardSquare);
            }
        },
        marker: function() {
            const gameBoardSquareNodeList = document.querySelectorAll('#gameBoardSquare');
            for (let i = 0; i < 9; i++) {
                gameBoardSquareNodeList[i].textContent = array[i];
            }
        }
    }
    const gamePlay = {
        set: function() {
            document.querySelectorAll('#gameBoardSquare').forEach( index =>
                index.addEventListener('click', () => {
                index.textContent = 'O';
            }))
        }
    }
    return {
        grid: display.grid(),
        //marker: display.marker(),
        gamePlay: gamePlay,
        }
})();

DisplayController.gamePlay.set();

// const GameBoard = (() => { //control array
//     const gameBoard = {
//         array: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'O'],
//     }
//     DisplayController.gamePlay.set();
//     return {
//         gameBoard
//     }
// })()



function Player(name, marker) {
    return {
        name,
        marker
    }
}
