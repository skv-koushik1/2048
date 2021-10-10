
function gameWon() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (grid[i][j] === 2048) {
        return true;
      }
    }
  }
  return false;
}

function isGameOver() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {

      if (grid[i][j] === 0) {
        return false;
      }

      if (i !== 3 && grid[i][j] === grid[i+1][j]) {
        return false;
      }
  
      if (j !== 3 && grid[i][j] === grid[i][j+1]) {
        return false;
      }
    }
  }
  return true;
}
  

function addNumber() {
  var options = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (grid[i][j] === 0) {
        options.push({
          x : i,
          y : j
        });
      }
    }  
  }
  if (options.length > 0) {
    var spot = random(options);
    var randomPos = Math.round(random(1));
  
    if (randomPos > 0.5) {
      grid[spot.x][spot.y] = 2;
    } else {
      grid[spot.x][spot.y] = 4;
    }
    newGrid[spot.x][spot.y] = 1;
  }
}

// operating on array itself
function combine(row) {
  for (var i = 3; i >= 1; i--) {
    var a = row[i];
    var b = row[i-1];
    if (a == b) {
      row[i] = a + b;
      score += row[i];
      row[i-1] = 0;
    }
  }
  return row;
}

function compare(a, b) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }
  return false;
}
  