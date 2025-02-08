'use strict';
const body = document.querySelector('body');
const container = document.querySelector('.container');
const cell = document.querySelectorAll('.cell');
const gameOver = document.querySelector('.gameOver');
const message = document.querySelector('.message');
const close = document.querySelector('.close');

const cellZero = document.querySelector('#zero');
const cellOne = document.querySelector('#one');
const cellTwo = document.querySelector('#two');
const cellThree = document.querySelector('#three');
const cellFour = document.querySelector('#four');
const cellFive = document.querySelector('#five');
const cellSix = document.querySelector('#six');
const cellSeven = document.querySelector('#seven');
const cellEight = document.querySelector('#eight');

const div = document.createElement('div');

const players = {
    player1: 'Player 1',
    player2: 'Player 2',
}

const Game = {
    board: ['', '', '', '', '', '', '', '', ''],
    go: true,
    p: '',
    d: 0,
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
            container.classList.add('opacity');
            gameOver.classList.remove('hidden');
            message.textContent = `${Game.go ? 'Player2' : 'Player1'} Wins the Game!`;
            console.log(`${Game.go ? 'Player2' : 'Player1'} Wins the Game!`);
            Game.winner = true;
        }

        Game.d = 0;
        Game.board.forEach(function (i) {
            if (i !== '') Game.d++;
        });

        if (Game.d === 9 && Game.winner === false) {
            console.log('Game Draw');
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
            }
        });
    },

    assign: function (cello) {
        if (Game.board[Game.p] === '') {
            if (Game.go === true) {
                cello.append(document.createElement('div'));
                cello.childNodes[0].classList.add('cross');
                cello.value = 'x';
            }
            else {
                cello.append(document.createElement('div'));
                cello.childNodes[0].classList.add('circle');
                cello.value = 'o';
            }

            Game.board[Game.p] = cello.value;
            Game.go = !Game.go;
        }
    }

};

Game.play();

close.addEventListener('click', function () {
    container.classList.remove('opacity');
    gameOver.classList.add('hidden');
});