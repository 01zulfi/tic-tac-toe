//Dependencies? Yes. No for now.
const DisplayController = (() => {
    const array = ['', '', '', '', '', '', '', '', ''];
    const gameBoardDiv = document.querySelector('#gameBoardDiv');
    const display = {
        grid: function() {
            for (let i = 0; i < 9; i++) {
                const gameBoardSquare = document.createElement('div');
                gameBoardSquare.id = 'gameBoardSquare';
                gameBoardDiv.appendChild(gameBoardSquare);
                gameBoardSquare.classList.add(`${i}`)
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
            const gameBoardSquareNodeList = document.querySelectorAll('#gameBoardSquare');
            for(let i = 0; i < 9; i++) {
                gameBoardSquareNodeList[i].addEventListener('click', () => {
                    gameBoardSquareNodeList[i].textContent = 'X';
                    array.splice(i, 1, 'X');
                });
            }
        },
    }
    return {
        array,
        display,
        //marker: display.marker(),
        gamePlay,
        }
})();


DisplayController.display.grid();
//DisplayController.grid.marker();
//DisplayController.gamePlay.set();


const GameBoard = (( ) => {
    const gameBoard = {
        array: ['', '', '', '', '', '', '', '', ''],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            
        },
        cacheDom: function() {
            this.gameBoardDiv = document.querySelector('#gameBoardDiv');
        },
        bindEvents: function () {
            this.gameBoardDiv.addEventListener('click', this.modifyArray);
        },
        modifyArray: function() {
            this.index = event.target.className;
            gameBoard.array.splice(this.index, 1, 'X');
        }
    }
   gameBoard.init();
   return {
    array: gameBoard.array,
   }
})();



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



