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
    return {
        display,
    }
})();

DisplayController.display.grid();



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
        unbindEvents: function() {
            this.gameBoardDiv.removeEventListener('click', this.modifyArray);
        },
        modifyArray: function() {
            const index = event.target.className[0];
            if (gameBoard.array[index]) return
            if (gameBoard.check % 2 === 0) {
                gameBoard.array.splice(index, 1, 'O');
                gameBoard.check++;
            } else {
                gameBoard.array.splice(index, 1, 'X');
                gameBoard.check++;
            }
            gameBoard.winCondition();
        },
        winCondition: function() {
            this.won = {};
           
            for (let i = 0; i < 7;) {
                if ( gameBoard.array[i] === gameBoard.array[i+1] && gameBoard.array[i] === gameBoard.array[i+2]) {
                    if (gameBoard.array[i] !== "") { 
                        this.won.marker = gameBoard.array[i];
                        this.unbindEvents();
                        //GamePlay.gamePlay.unset();
                        break
                    }
                }
                i = i + 3;
            }
            for (let i = 0; i < 3; i++) {
                if (gameBoard.array[i] === gameBoard.array[i+3] && gameBoard.array[i] === gameBoard.array[i+6]) {
                    if (gameBoard.array[i] !== "") { 
                        this.won.marker = gameBoard.array[i];
                        this.unbindEvents();
                        //GamePlay.gamePlay.unset();
                        break
                    }
                }
            }
            if (gameBoard.array[0] === gameBoard.array[4] && gameBoard.array[0] === gameBoard.array[8]) {
                if (gameBoard.array[0] !== "") {
                    this.won.marker = gameBoard.array[0];
                    this.unbindEvents();
                    //GamePlay.gamePlay.unset();
                    
                }
            }
            else if (gameBoard.array[2] === gameBoard.array[4] && gameBoard.array[2] === gameBoard.array[6]) {
                if (gameBoard.array[2] !== "") { 
                    this.won.marker = gameBoard.array[2];
                    this.unbindEvents();
                    //GamePlay.gamePlay.unset();
                    
                }
            }
        
                GamePlay.gamePlay.winnerModal(this.won.marker);
            
        }
    }
   return {
        init: gameBoard.init(),
        won: gameBoard.won, 
        array: gameBoard.array, //currently used for debugging
        check: gameBoard.check, //currently used for debugging
   }
})();




const GamePlay = (() => {
    const gamePlay = {
        init: function() {
            this.cacheDom();
            this.set();
        },
        cacheDom: function() {
            this.gameBoardDiv = document.querySelector('#gameBoardDiv');
            this.modal = document.querySelector('#modal');
            this.winnerText = document.querySelector('#winnerText');
            this.restartButton = document.querySelector('#restart');
        },
        set: function() {
            this.gameBoardDiv.addEventListener('click', this.marker);
            this.restartButton.addEventListener('click', this.pageReload);
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
        count: 0,
        winnerModal: function(playerMark) {
            if (playerMark) {
                this.modal.style.display = "flex";
                this.winnerText.textContent = `${playerMark} won!`
            }
            this.count++;
            if (this.count === 9) {
                this.modal.style.display = "flex";
                this.winnerText.textContent = `Game Tied!`;
            }
            
            
        },
        pageReload: function() {
            location.reload();
        }
    }
    gamePlay.init();
    return {
        gamePlay,
        }
})(); 


//GamePlay.gamePlay.set();




function Player(name, marker) {
    return {
        name,
        marker
    }
}


