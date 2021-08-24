//Dependencies? Yes. No for now.
const DisplayController = (() => {
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
    }
    const gamePlay = {
        set: function() {
            gameBoardDiv.addEventListener('click', this.marker)
            
        },
        marker: function() {
            if (event.target.textContent) {
                return
            }
            if (gamePlay.check % 2 === 0) {
                event.target.textContent = 'O';
                gamePlay.check++;
                event.target.classList.add('filled');
            } else {
                event.target.textContent = 'X';
                gamePlay.check++;
                event.target.classList.add('filled');
            }
            
        },
        check: 1, 
    }
    return {
        display,
        gamePlay,
        }
})();

DisplayController.display.grid();
DisplayController.gamePlay.set();


const GameBoard = (( ) => {
    const gameBoard = {
        array: ['', '', '', '', '', '', '', '', ''],
        check: 1,
        init: function() {
            this.cacheDom();
            this.bindEvents();
            //this.winCondition();
        },
        cacheDom: function() {
            this.gameBoardDiv = document.querySelector('#gameBoardDiv');
        },
        bindEvents: function () {
            this.gameBoardDiv.addEventListener('click', this.modifyArray);
        },
        modifyArray: function() {
            if (gameBoard.array[event.target.className[0]]) return
            this.index = event.target.className[0];
            if (gameBoard.check % 2 === 0) {
                gameBoard.array.splice(this.index, 1, 'O');
                gameBoard.check++;
            } else {
                gameBoard.array.splice(this.index, 1, 'X');
                gameBoard.check++;
            }
            gameBoard.winCondition();
        },
        
        winCondition: function() {
            // if (gameBoard.array[0] === gameBoard.array[1] && gameBoard.array[0] === gameBoard.array[2]) {
            //     if (gameBoard.array[0] !== "") {
            //         console.log("win")
            //     }
            // }
            // if (gameBoard.array[3] === gameBoard.array[4] && gameBoard.array[3] === gameBoard.array[5]) {
            //     if (gameBoard.array[3] !== "") {
            //         console.log("win")
            //     }
            // }
            for (let i = 0; i < 7; i++) {
                if ( gameBoard.array[i] === gameBoard.array[i+1] && gameBoard.array[i] === gameBoard.array[i+2]) {
                    if (gameBoard.array[i] !== "") { 
                        console.log('win')
                        document.querySelector('#gameBoardDiv').removeEventListener('click', this.modifyArray);
                    }
                }
            }
        }
    }
   return {
        init: gameBoard.init(),
        array: gameBoard.array, //currently used for debugging
        check: gameBoard.check, //currently used for debugging
   }
})();




function Player(name, marker) {
    return {
        name,
        marker
    }
}


