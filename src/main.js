const game = new Game();
let player1 = new Player();


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  // image(img, player1.xRow, player1.yCol);
  game.drawGrid();
}

function keyPressed(){
  if(keyCode === 38){ 
    player1.moveUp();
  }
  if(keyCode === 39){
    player1.moveRight();
  }
  if(keyCode === 37){
    player1.moveLeft();
  }
  if(keyCode === 40){
    player1.moveDown();
  }

  console.log(player1.yCol, player1.xRow);
}

function preload(){
  img = loadImage('./assets/character-down.png');
}