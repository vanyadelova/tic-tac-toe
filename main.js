const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]

  function isValidBoard(board) {
    // ...implement your logic here, return true or false
  if (board.length === 3) {
    const a = board.filter(c => c.length === 3);
    if (a.length !== 3){
      return false;
    } else {
      return checkCells(board);

    }  
  } else{ 
    return false; 
  }    
}

console.log(isValidBoard(board));
  module.exports = {isValidBoard}


  


  // ...implement your logic here, return true or false
  function checkCells(board) {
    const arrayCells = [true]

    board.forEach(a => a.forEach(function(b) {
        if (b !== null && b !== 'x' && b !== 'o') { arrayCells[0] = false }

    }));
    return arrayCells[0];
}

//console.log(checkCells(board));



