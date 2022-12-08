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

const SelectMarker = (()=>{
  const xButton = document.querySelector(".x-mark");
  const oButton = document.querySelector(".o-mark");
  xButton.addEventListener("click", ()=>{
     Game.player1.marker = "x";
     Game.player2.marker = "o";
    console.log(Game.player1,Game.player2);
    currentPlayer = 1;
    Render();

  })
  oButton.addEventListener("click", ()=>{
    Game.player1.marker = "o";
    Game.player2.marker = "x";
    console.log(Game.player1,Game.player2);
    currentPlayer = 1;
    Render();
  })
})();

const Render = ()=>{

  gridItem.forEach((item, i) => {
    item.addEventListener("click", ()=>{
      if(item.innerHTML === ""){
        if (currentPlayer === 1){
          console.log("render1");
          Gameboard.gameboard[i] =Game.player1.marker;
            item.innerHTML = Game.player1.marker;
            console.log(Gameboard.gameboard);
            currentPlayer=2;
        }else{
          console.log("render2");
          Gameboard.gameboard[i] =Game.player2.marker;
            item.innerHTML = Game.player2.marker;
            console.log(Gameboard.gameboard);
            currentPlayer = 1;
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
