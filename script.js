'use strict';
const h1 = document.querySelector('h1');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const cell = document.querySelectorAll('.cell');

const reset = document.querySelector('.reset');

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
    player1: `'❌'`,
    player2: `'⭕'`,
}

const Game = {
    board: ['', '', '', '', '', '', '', '', ''],
    go: true,
    p: '',
    d: 0,
    winner: false,

    // Check for game result if any
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
            message.textContent = `${Game.go ? players.player2 : players.player1} Wins the Game!`;
            Game.winner = true;
            popup();
        }

        Game.d = 0;
        Game.board.forEach(function (i) {
            if (i !== '') Game.d++;
        });

        if (Game.d === 9 && Game.winner === false) {
            message.textContent = `Game DRAW!`;
            Game.winner = true;
            popup();
        }
    },

    // Play game
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

    // Assign X or O accordingly
    assign: function (cello) {
        if (Game.board[Game.p] === '') {
            if (Game.go === true) {
                cello.append(document.createElement('div'));
                cello.childNodes[0].classList.add('cross');
                cello.value = 'x';
                cello.style.border = 'none';
                cello.style.boxShadow = 'none';
            }
            else {
                cello.append(document.createElement('div'));
                cello.childNodes[0].classList.add('circle');
                cello.value = 'o';
                cello.style.border = 'none';
                cello.style.boxShadow = 'none';
            }

            Game.board[Game.p] = cello.value;
            Game.go = !Game.go;
        }
    }

};

Game.play();

reset.addEventListener('click', function (e) {
    e.preventDefault();

    Game.board = ['', '', '', '', '', '', '', '', ''];
    Game.go = true;
    Game.p = '';
    Game.d = 0;
    Game.winner = false;
    cell.forEach((cello) => {
        cello.textContent = '';
        closePopup();
        cello.style.border = '2px solid rgb(96, 132, 95)';
        cello.style.boxShadow = '3px 5px 5px rgb(96, 132, 95)';
    });
});

const popup = function () {
    setTimeout(function () {
        h1.classList.add('opacity');
        logo.classList.add('opacity');
        container.classList.add('opacity');
        gameOver.classList.remove('hidden');
    }, 500);
};

const closePopup = function () {
    container.classList.remove('opacity');
    h1.classList.remove('opacity');
    logo.classList.remove('opacity');
    gameOver.classList.add('hidden');
}

close.addEventListener('click', closePopup);