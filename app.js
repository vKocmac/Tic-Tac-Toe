const gridItem = document.querySelectorAll(".grid-item");
const selectOpp = document.querySelector("#select-opponent");
const selectDif = document.querySelector("#select-difficulty");
const body = document.querySelector("body");
const gameBoard = document.querySelector(".game-board");
const selections = document.querySelector(".selections");
const chooseMark = document.querySelector(".choose-mark");
let currentPlayer;
let randomNumber;

const Gameboard = (()=>{
  const gameboard = ["","","","","","","","",""];
  return {gameboard};
})();

const Player = (name, marker)=>{
  return {
    name, marker
  }
};

const restart = document.querySelector(".restart");
restart.addEventListener("click", ()=>{
  Restart();
  });

const Restart = ()=>{
    Gameboard.gameboard = ["","","","","","","","",""];
    gridItem.forEach((item, i) => {
    item.innerHTML = "";
    gameBoard.style.filter = "blur(0)";
    selections.style.filter = "blur(0)";
    chooseMark.style.filter = "blur(0)";

  })
};

const SelectMarker = (()=>{
  const xButton = document.querySelector(".x-mark");
  const oButton = document.querySelector(".o-mark");
  xButton.addEventListener("click", ()=>{

    const difficulty = selectDif.value;
    const opponent = selectOpp.value;

     Game.player1.marker = "x";
     Game.player2.marker = "o";
    console.log(Game.player1,Game.player2);
    console.log(opponent,difficulty);
    currentPlayer = 1;
    if(opponent === "PC"){
      playWithPC();
    }else{
      playWithHuman();
      }
    })
  oButton.addEventListener("click", ()=>{

    const difficulty = selectDif.value;
    const opponent = selectOpp.value;

    Game.player1.marker = "o";
    Game.player2.marker = "x";
    console.log(Game.player1,Game.player2);
    console.log(opponent,difficulty);
    currentPlayer = 2;
    if(opponent === "PC"){
      fisrtMoveO();
    }else{
      playWithHuman();
    }
  })
})();

const playWithHuman = ()=>{
console.log("You are playing with human being");
  gridItem.forEach((item, i) => {
    item.addEventListener("click", ()=>{
      if(item.innerHTML === ""){
        if (currentPlayer === 1){
          Gameboard.gameboard[i] = Game.player1.marker;
            item.innerHTML = Game.player1.marker;
            currentPlayer=2;
            checkIfWins();
        }else{
          Gameboard.gameboard[i] = Game.player2.marker;
            item.innerHTML = Game.player2.marker;
            currentPlayer = 1;
            checkIfWins();
        }
      }
    });
  });
};
function randomGrid(){
for (let i=0;i<=gridItem.length;i++){
  if  (Gameboard.gameboard[randomNumber]!==""){
      randomNumber = Math.floor(Math.random() * 8)+1;
      }
  }
  return randomNumber;
}

const playWithPC = ()=>{
console.log("You are playing with a machine");
gridItem.forEach((item, i) => {
  item.addEventListener("click", ()=>{
    if(item.innerHTML === ""){
      if (currentPlayer === 1){
        Gameboard.gameboard[i] = Game.player1.marker;
          item.innerHTML = Game.player1.marker;
          currentPlayer=2;
          checkIfWins();
          randomGrid();
          console.log(randomNumber);
          if(Gameboard.gameboard[randomNumber]===""){
            for (x=0;x<=gridItem.length;x++){
              setTimeout(function() {gridItem[randomNumber].innerHTML=Game.player2.marker;}, 500);
              // gridItem[randomNumber].innerHTML = Game.player2.marker;
              Gameboard.gameboard[randomNumber] = Game.player2.marker;
              console.log(Gameboard.gameboard);
              currentPlayer = 1;
              checkIfWins();
            }
          }
      }
    }
  });
});
};

function fisrtMoveO(){

    randomGrid();
    console.log(randomNumber);
    if(Gameboard.gameboard[randomNumber]===""){
      for (x=0;x<=gridItem.length;x++){
        setTimeout(function() {gridItem[randomNumber].innerHTML=Game.player2.marker;}, 700);
        // gridItem[randomNumber].innerHTML = Game.player2.marker;
        Gameboard.gameboard[randomNumber] = Game.player2.marker;
        console.log(Gameboard.gameboard);
        currentPlayer = 1;
        checkIfWins();
        playWithPC();
      }
    }
}

const Game = (()=>{
  const player1 = Player("Player 1", "");
  const player2 = Player("Player 2", "");
  return {player1, player2}
})();

function checkIfWins(){
  const board = Gameboard.gameboard;
  if       (board[0]==="o" && board[1]==="o" &&board[2]==="o"){
    renderWinnerO();
  }else if (board[3]==="o" && board[4]==="o" && board[5]==="o") {
    renderWinnerO();
  }else if (board[6]==="o" && board[7]==="o" && board[8]==="o") {
    renderWinnerO();
  }else if (board[0]==="o" && board[3]==="o" && board[6]==="o") {
    renderWinnerO();
  }else if (board[1]==="o" && board[4]==="o" && board[7]==="o") {
    renderWinnerO();
  }else if (board[2]==="o" && board[5]==="o" && board[8]==="o") {
    renderWinnerO();
  }else if (board[0]==="o" && board[4]==="o" && board[8]==="o") {
    renderWinnerO();
  }else if (board[2]==="o" && board[4]==="o" && board[6]==="o") {
    renderWinnerO();
  }else if (board[0]==="x" && board[1]==="x" &&board[2]==="x"){
    renderWinnerX();
  }else if (board[3]==="x" && board[4]==="x" && board[5]==="x") {
    renderWinnerX();
  }else if (board[6]==="x" && board[7]==="x" && board[8]==="x") {
    renderWinnerX();
  }else if (board[0]==="x" && board[3]==="x" && board[6]==="x") {
    renderWinnerX();
  }else if (board[1]==="x" && board[4]==="x" && board[7]==="x") {
    renderWinnerX();
  }else if (board[2]==="x" && board[5]==="x" && board[8]==="x") {
    renderWinnerX();
  }else if (board[0]==="x" && board[4]==="x" && board[8]==="x") {
    renderWinnerX();
  }else if (board[2]==="x" && board[4]==="x" && board[6]==="x") {
    renderWinnerX();
  }else if(board.includes("") === false){
    draw();
  }
}

function renderWinnerX(){
  const container = document.querySelector(".container");
  const div = document.createElement("div");
div.classList.add("winner");
  const h2 = document.createElement("h2");
  h2.innerHTML = "Winner is";
  const x = document.createElement("h1");
  x.innerHTML = "X"
setTimeout(()=>{
  container.appendChild(div);
  div.appendChild(h2);
  div.appendChild(x);
  gameBoard.style.filter = "blur(2px)";
  selections.style.filter = "blur(2px)";
  chooseMark.style.filter = "blur(2px)";
},300
)


  setTimeout(function() {container.removeChild(div)}, 3000);
  setTimeout(function() {Restart();}, 4000);
}

function renderWinnerO(){
  const container = document.querySelector(".container");
  const div = document.createElement("div");
div.classList.add("winner");
  const h2 = document.createElement("h2");
  h2.innerHTML = "Winner is";
  const x = document.createElement("h1");
  x.innerHTML = "O"
setTimeout(()=>{
  container.appendChild(div);
  div.appendChild(h2);
  div.appendChild(x);
  gameBoard.style.filter = "blur(2px)";
  selections.style.filter = "blur(2px)";
  chooseMark.style.filter = "blur(2px)";
},300
)
  setTimeout(function() {container.removeChild(div)}, 3000);
  setTimeout(function() {Restart();}, 4000);
}

function draw(){
  const container = document.querySelector(".container");
  const div = document.createElement("div");
div.classList.add("winner");
  const h2 = document.createElement("h2");
  h2.innerHTML = "It's a Draw";
setTimeout(()=>{
  container.appendChild(div);
  div.appendChild(h2);
  gameBoard.style.filter = "blur(2px)";
  selections.style.filter = "blur(2px)";
  chooseMark.style.filter = "blur(2px)";
},300
)
  setTimeout(function() {container.removeChild(div)}, 3000);
  setTimeout(function() {Restart();}, 4000);
}
