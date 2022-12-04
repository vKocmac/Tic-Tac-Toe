
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
    console.log("iam in");
     Game.player1.marker = "x";
     Game.player2.marker = "o";
    console.log(Game.player1,Game.player2);


  })
  oButton.addEventListener("click", ()=>{
    Game.player1.marker = "o";
    Game.player2.marker = "x";
    console.log(Game.player1,Game.player2);
  })
})();

const Render = (()=>{
  const gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((item, i) => {
    item.addEventListener("click", ()=>{
      if(i%2 === 0){
        Gameboard.gameboard[i] =Game.player1.marker;
          item.innerHTML = Game.player1.marker;
          console.log(Gameboard.gameboard);
      }else{
        Gameboard.gameboard[i] = Game.player2.marker;
          item.innerHTML = Game.player2.marker;
          console.log(Gameboard.gameboard);
      }
    });
  });
})();

const Game = (()=>{
  const player1 = Player("Player 1", "");
  const player2 = Player("Player 2", "");
  return {player1, player2}
SelectMarker();
  // const player1 = Player("Player 1", "x");
  // const player2 = Player("Player 2", "o");
  //  return {player1, player2};


})();
