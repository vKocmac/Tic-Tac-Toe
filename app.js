const gridItem = document.querySelectorAll(".grid-item");
let currentPlayer;
const Gameboard = (()=>{
  const gameboard = ["","","","","","","","",""];
  return {gameboard};
})();

const Player = (name, marker)=>{
  return {
    name, marker
  }
};

// const Selections = (()=>{
//   const selectOpp = document.querySelector("#select-opponent")
//   const selectDif = document.querySelector("#select-difficulty")
//   const difficulty = selectDif.value;
//   const opponent = selectOpp.value;
//   return {
//     difficulty,
//     opponent
//   }
//   }
// )();

const SelectMarker = (()=>{
  const xButton = document.querySelector(".x-mark");
  const oButton = document.querySelector(".o-mark");
  xButton.addEventListener("click", ()=>{
     Game.player1.marker = "x";
     Game.player2.marker = "o";
    console.log(Game.player1,Game.player2);
    currentPlayer = 1;
    // console.log(Selections.difficulty);
    // console.log(Selections.opponent);
    playWithHuman();

  })
  oButton.addEventListener("click", ()=>{
    Game.player1.marker = "o";
    Game.player2.marker = "x";
    console.log(Game.player1,Game.player2);
    currentPlayer = 2;
    playWithHuman();
  })
})();

const playWithHuman = ()=>{

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

const playWithPC = ()=>{

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


const Game = (()=>{
  const player1 = Player("Player 1", "");
  const player2 = Player("Player 2", "");
  return {player1, player2}
})();

function checkIfWins(){
  const board = Gameboard.gameboard;
  if       (board[0]==="o" && board[1]==="o" &&board[2]==="o"){
    console.log("The winner is O")
  }else if (board[3]==="o" && board[4]==="o" && board[5]==="o") {
    console.log("The winner is O")
  }else if (board[6]==="o" && board[7]==="o" && board[8]==="o") {
    console.log("The winner is O")
  }else if (board[0]==="o" && board[3]==="o" && board[6]==="o") {
    console.log("The winner is O")
  }else if (board[1]==="o" && board[4]==="o" && board[7]==="o") {
    console.log("The winner is O")
  }else if (board[2]==="o" && board[5]==="o" && board[8]==="o") {
    console.log("The winner is O")
  }else if (board[0]==="o" && board[4]==="o" && board[8]==="o") {
    console.log("The winner is O")
  }else if (board[2]==="o" && board[4]==="o" && board[6]==="o") {
    console.log("The winner is O")
  }else if (board[0]==="x" && board[1]==="x" &&board[2]==="x"){
    console.log("the winner is X")
  }else if (board[3]==="x" && board[4]==="x" && board[5]==="x") {
    console.log("the winner is X")
  }else if (board[6]==="x" && board[7]==="x" && board[8]==="x") {
    console.log("the winner is X")
  }else if (board[0]==="x" && board[3]==="x" && board[6]==="x") {
    console.log("the winner is X")
  }else if (board[1]==="x" && board[4]==="x" && board[7]==="x") {
    console.log("the winner is X")
  }else if (board[2]==="x" && board[5]==="x" && board[8]==="x") {
    console.log("the winner is X")
  }else if (board[0]==="x" && board[4]==="x" && board[8]==="x") {
    console.log("the winner is X")
  }else if (board[2]==="x" && board[4]==="x" && board[6]==="x") {
    console.log("the winner is X")
  }else if(board.includes("") === false){
    console.log("It's a draw")
  }
  playWithHuman(); //is it nesessary? it works without but why.
}
