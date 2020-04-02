class Game {
  drawGrid() {
    
    for(let i = 0; i < 11 ;i++){
      line(0, i * SQUARE_SIDE, WIDTH, i * SQUARE_SIDE);
      line(i * SQUARE_SIDE, 0,i * SQUARE_SIDE, HEIGHT);
      // line(0,10,WIDTH, 10);
    }
  }
}

class Player {
  constructor(col, row){
    this.yCol = 0;
    this.xRow = 0;
  }

  moveUp(){
    this.yCol -= 1;
  }
  moveRight(){
    this.xRow += 1;
  }
  moveLeft(){
    this.xRow -= 1;
  }
  moveDown(){
    this.yCol += 1;
  }
}

    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
  

