let btStartGame = document.querySelector('#bt-start');



btStartGame.addEventListener('click', initialize);

function initialize(evento) {

    evento.preventDefault();
    startGame();



}


function startGame() {

    $(`#start-game`).hide();


    $(`#background-game`).append(`<div id="player"></div>`);
    $(`#background-game`).append(`<div id="enemy1"></div>`);
    $(`#background-game`).append(`<div id="enemy2"></div>`);
    $(`#background-game`).append(`<div id="hostage"></div>`);

}

