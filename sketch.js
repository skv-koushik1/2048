
var grid, newGrid;
var score = 0;

var colors = {
  "2" : "rgb(50, 50, 0)",//255
  "4" : "rgb(100, 100, 0)",//200
  "8" : "rgb(150, 150, 0)",//150
  "16" : "rgb(200, 200, 0)",//100, 100, 0
  "32" : "rgb(250, 250, 0)",//50, 50, 0
  "64" : "rgb(255, 200, 0)",
  "128" : "rgb(255, 150, 0)",
  "256" : "rgb(255, 100, 0)",
  "512" : "rgb(255, 500, 0)",
  "1024" : "rgb(255, 0, 0)",
  "2048" : "rgb(30, 184, 287)"
}


function setup() {
  createCanvas(500, 500);
  frameRate(3);
  grid = blankGrid();
  newGrid = blankGrid();

  addNumber();
  addNumber();
  updateCanvas();
}


// only move
function keyPressed() {
  var flipped = false;
  var rotated = false;
  var played = true;

  if (keyCode === DOWN_ARROW) {
  }
  else if (keyCode === UP_ARROW) {
    grid = flipGrid(grid);
    flipped = true;
  }
  else if (keyCode === RIGHT_ARROW) {
    grid = rotateGrid(grid);
    rotated = true;
  }
  else if (keyCode === LEFT_ARROW) {
    grid = rotateGrid(grid);
    grid = flipGrid(grid);
    rotated = true;
    flipped = true;
  }
  else {
    played = false;
  }

  if (played) {
    var past = copyGrid(grid);
    for (var i = 0; i < 4; i++) {
      grid[i] = operate(grid[i]);
    }
    var changed = compare(past, grid);
  
    if (flipped) {
      grid = flipGrid(grid);
    }
    if (rotated) {
      grid = rotateGrid(grid);
      grid = rotateGrid(grid);
      grid = rotateGrid(grid);
    }
    if (changed) {
      addNumber();
    }
    updateCanvas();

    fill(0);
    var gameover = isGameOver();
    if (gameover) {
      textAlign(CENTER, CENTER);
      textSize(64);
      text("OUT OF MOVES!!", width/2, height/2);
    }

    var win = gameWon();
    if (win) {
      textAlign(CENTER, CENTER);
      textSize(64);
      text("WINNER", width/2, height/2);
      textSize(32);
      text("YOU FOUND THE 2048 TILE!!", width/2, (height/2)+100);
    }
  }
}

function updateCanvas() {
  background(50);
  drawGrid();
  select('#score').html(score);
}