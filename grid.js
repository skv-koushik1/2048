function blankGrid() {
  return [
    [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0], 
    [0, 0, 0, 0]
  ];
}

function operate(row) {
  row = slide(row);
  row = combine(row);
  row = slide(row);
  return row;
}

function copyGrid(grid) {
  var extraGrid = blankGrid();

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      extraGrid[i][j] = grid[i][j];
    }
  }
  return extraGrid;
}

function flipGrid(grid) {
  for (var i = 0; i < 4; i++) {
    grid[i].reverse();
  }
  return grid;
}

function rotateGrid(grid) {
  var newGrid = blankGrid();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      newGrid[i][j] = grid[j][i];
    }
  }
  return newGrid;
}

function slide(row) {
  var arr = row.filter(val => val);
  var missing = 4 - arr.length;
  var zeros = Array(missing).fill(0);
  arr = zeros.concat(arr);
  return arr;
}

function drawGrid() {
  var resoln = 125;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      noFill();
      strokeWeight(10);
      var val = grid[i][j];
      var s = val.toString();
      stroke(200);
      if (val !== 0) {
        fill(colors[s]);
      } else {
        noFill();
      }
      rect(i * resoln, j * resoln, resoln, resoln, 30);
      if (grid[i][j] !== 0) {
        textAlign(CENTER, CENTER);
        if (newGrid[i][j] === 1) {
          strokeWeight(10);
          stroke(200, 0, 200);
          newGrid[i][j] = 0;
        } else {
          noStroke();
        }
        var len = s.length - 1;
        var sizes = [64, 64, 64, 48, 48, 36, 36, 18];
        textSize(sizes[len]);
        fill(255);
        text(val, i * resoln + resoln/2, j * resoln + resoln/2);
      }
    }
  }
}