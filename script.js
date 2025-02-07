'use strict';
const container = document.querySelector('.container');
const cell = document.querySelectorAll('.cell');
const cellZero = document.querySelector('#zero');
const cellOne = document.querySelector('#one');
const cellTwo = document.querySelector('#two');
const cellThree = document.querySelector('#three');
const cellFour = document.querySelector('#four');
const cellFive = document.querySelector('#five');
const cellSix = document.querySelector('#six');
const cellSeven = document.querySelector('#seven');
const cellEight = document.querySelector('#eight');

const players = {
    player1: 'Player 1',
    player2: 'Player 2',
}

const Game = {
    board: ['', '', '', '', '', '', '', '', ''],
    go: true,
    p: '',
    winner: false,

    checkWinner: function () {
        if ((Game.board[0] === Game.board[1] && Game.board[0] === Game.board[2] && Game.board[0] !== '') ||
            (Game.board[3] === Game.board[4] && Game.board[3] === Game.board[5] && Game.board[3] !== '') ||
            (Game.board[6] === Game.board[7] && Game.board[6] === Game.board[8] && Game.board[6] !== '') ||
            (Game.board[0] === Game.board[3] && Game.board[0] === Game.board[6] && Game.board[0] !== '') ||
            (Game.board[1] === Game.board[4] && Game.board[1] === Game.board[7] && Game.board[1] !== '') ||
            (Game.board[2] === Game.board[5] && Game.board[2] === Game.board[8] && Game.board[2] !== '') ||
            (Game.board[0] === Game.board[4] && Game.board[0] === Game.board[8] && Game.board[0] !== '') ||
            (Game.board[2] === Game.board[4] && Game.board[2] === Game.board[6] && Game.board[2] !== '')
        ) {
            console.log(`${Game.go ? 'Player2' : 'Player1'} Wins the Game!`);
            Game.winner = true;
        }
    },

    play: function () {
        container.addEventListener('click', function goPlay(e) {
            e.preventDefault();

            if (!Game.winner) {

                for (let i = 0; i <= 8; i++) {
                    if (e.target === cell[i])
                        Game.p = i;
                }

                Game.assign(e.target);
                Game.checkWinner();
                console.log(Game.go);
                console.log(Game.board);

                console.log(Game.winner);
            }
        });
    },

    assign: function (cello) {
        if (Game.board[Game.p] === '') {
            if (Game.go === true) {
                cello.textContent = 'x';
                cello.value = 'x';
            }
            else {
                cello.textContent = 'o';
                cello.value = 'o';
            }

            Game.board[Game.p] = cello.value;
            Game.go = !Game.go;
        }
    }

}


console.log(Game.board.slice(0, 3).join('  '));
console.log(Game.board.slice(3, 6).join('  '));
console.log(Game.board.slice(6).join('  '));

Game.checkWinner();

Game.play();