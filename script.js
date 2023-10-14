let gameRound = 0;
const domContent = (function(){
    const startButton = document.querySelector(".start-button")
    const formView = document.querySelector(".form-field")
    const player1Input = document.querySelector(".player1-input")
    const player2Input = document.querySelector(".player2-input")
    const endScreen = document.querySelector(".end-screen-field")

    return {startButton,player1Input,player2Input, formView, endScreen}
})()

domContent.startButton.addEventListener("click",()=>{
    domContent.formView.classList.add("active")
    player1 = createPlayer(domContent.player1Input.value)
    player2 = createPlayer(domContent.player2Input.value)
    players = {player1,player2}
    if (domContent.player1Input.value === ""){
        player1 = createPlayer("player1")
    }
    if (domContent.player2Input.value === ""){
        player2 = createPlayer("player2")
    }
})

function createPlayer (name){
    return {name}
}

const gameBoard = (function() {
    const mainPage = document.querySelector(".main-page")
    let field = new Array(3);
    for (let i = 0; i < 3; i++) {
        field[i] = new Array(3);
        for (let j = 0; j < 3; j++) {
            let symbol;
            const cell = document.createElement("div");
            cell.classList.add("cell");
            mainPage.appendChild(cell)
            field[i][j] = {cell, symbol};
            cell.addEventListener("click",(e)=>{
                if(symbol === undefined){
                    if(gameRound % 2 === 0){
                        symbol = "x"
                    } else {
                        symbol = "o"
                    }
                    cell.innerText = symbol
                    gameRound += 1
                    field[i][j] = {cell, symbol};
                    gameState(gameBoard)
                }
            })
        }
    }
    return {field};
})();

const gameState = function(gameBoard) {
    if (gameBoard.field[0][0].symbol === undefined &&gameBoard.field[1][0].symbol === undefined&&gameBoard.field[2][0].symbol === undefined||
        gameBoard.field[0][1].symbol === undefined &&gameBoard.field[1][1].symbol === undefined&&gameBoard.field[2][1].symbol === undefined||
        gameBoard.field[0][2].symbol === undefined &&gameBoard.field[1][2].symbol === undefined&&gameBoard.field[2][2].symbol === undefined||
        gameBoard.field[0][0].symbol === undefined &&gameBoard.field[0][1].symbol === undefined&&gameBoard.field[0][2].symbol === undefined||
        gameBoard.field[1][0].symbol === undefined &&gameBoard.field[1][1].symbol === undefined&&gameBoard.field[1][2].symbol === undefined||
        gameBoard.field[2][0].symbol === undefined &&gameBoard.field[2][1].symbol === undefined&&gameBoard.field[2][2].symbol === undefined){
        
    }
    else if (gameBoard.field[0][0].symbol===gameBoard.field[0][1].symbol && gameBoard.field[0][1].symbol===gameBoard.field[0][2].symbol||
            gameBoard.field[1][0].symbol===gameBoard.field[1][1].symbol && gameBoard.field[1][1].symbol===gameBoard.field[1][2].symbol||
            gameBoard.field[2][0].symbol===gameBoard.field[2][1].symbol && gameBoard.field[2][1].symbol===gameBoard.field[2][2].symbol||
            gameBoard.field[0][0].symbol===gameBoard.field[1][1].symbol && gameBoard.field[1][1].symbol ===gameBoard.field[2][2].symbol||
            gameBoard.field[0][2].symbol===gameBoard.field[1][1].symbol && gameBoard.field[1][1].symbol ===gameBoard.field[2][0].symbol||
            gameBoard.field[0][0].symbol===gameBoard.field[1][0].symbol && gameBoard.field[1][0].symbol ===gameBoard.field[2][0].symbol||
            gameBoard.field[0][1].symbol===gameBoard.field[1][1].symbol && gameBoard.field[1][1].symbol ===gameBoard.field[2][1].symbol||
            gameBoard.field[0][2].symbol===gameBoard.field[1][2].symbol && gameBoard.field[1][2].symbol ===gameBoard.field[2][2].symbol){ 
            domContent.endScreen.classList.add("active") 
            if(gameRound % 2 === 0){
                domContent.endScreen.textContent = (players.player2.name + " has won!");
            }
            else if(gameRound % 2 === 1){
                domContent.endScreen.textContent = (players.player1.name + " has won!");
            }
            return
        }
    if (gameRound === 9) {
        domContent.endScreen.classList.add("active")
        domContent.endScreen.textContent = "Its a draw!";
        return
    }   
};
