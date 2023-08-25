const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

//index of each cell
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "",""];
let currentPlayer = "X";
let running = false;

//to start the game
initializeGame();


//function to start the game
function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame)
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}


function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

//to update cell
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;

}

//to change player
function changedPlayer(){
    //reassigning current player to "O"
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

//functin to check winner
function checkWinner(){
    let roundWon = false;

    //loop to check each cell 
    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        //to check of there are empty spaces in cells
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }

        //to check if X or O got match in a row
        if (cellA == cellB && cellB == cellC ){
            roundWon = true;
            break;
        }
    }

    //to check if there is a winner
    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!!!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = "Draw!";
        running = false;
    }
    else{
        changedPlayer();
    }

}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "",""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}