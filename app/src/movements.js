/**
 * The functions here return all the possible moves
 * of a chess piece, given a point in space
 * @WARNING : THEY CANNOT KNOW IF ONE OF THE RESULTING POINTS IS OCCUPIED
  * Returns the in the following format :
  * [FL,FR,BL,BR]
  * F = Forward B = Backward L = Left R = Right
 */

//Forward Right
const FR = [57,58,59,60,61,62,63,64,8,16,24,32,40,48,56]
//Forward Left
const FL = [57,58,59,60,61,62,63,64,1,9,17,25,33,41,49,57]
//Backward Right
const BR = [1,2,3,4,5,6,7,8,16,24,32,40,48,56]
//Backward Left
const BL = [1,2,3,4,5,6,7,8,9,17,25,33,41,49,57]
//Left
const leftEND = [1,9,17,25,33,41,49,57]
const LEFT = [1,9,17,25,33,41,49,57];
//Back
const BACK = [1,2,3,4,5,6,7,8];
//Right
const RIGHT = [8,16,24,32,40,48,56,64];
//Front
const FRONT = [57,58,59,60,61,62,63,64];

//Bishop
const handleBishop = (start) => {
    /**
   * Finds all the possible moves of a bishop
   */

  //FR
  let forward_right = [];
  let i = start; //forward_left
  while (!FR.includes(i)) {
    forward_right.push(i+9)
    i+=9
  }
  //FL
  let forward_left = [];
  i = start;
  while (!FL.includes(i)){
    forward_left.push(i+7);
    i+=7;
  }
  //BL
  let back_left = [];
  i = start;
  while (!BL.includes(i)) {
    back_left.push(i-9);
    i-=9;
  }
  let back_right = [];
  i = start;
  while (!BR.includes(i)) {
    back_right.push(i-7);
    i-=7;
  }
  return [forward_left,forward_right,back_left,back_right]
}

//Rook
const handleTower = (position) => {
    /**
   * Finds all the possible moves of a Tower
   */
  let forward_array = [];
    let i = position + 8;
    //Forwards
    while(i < 64)
    {
      forward_array.push(i)
      i+=8
    }
    //Backwards
    let backward_array = [];
    i = position -8;
    while(i > 0)
    {
      backward_array.push(i)
      i-=8
    }
    //Right
    let right_Array = [];
    i = position;
    while(i %8!=0){
      right_Array.push(i)
      i++
    }
    let x = (right_Array[right_Array.length-1]+1)
    if (!isNaN(x)) right_Array.push(x)
    right_Array = right_Array.slice(1,right_Array.length)
    //Left
    i = position;
    let left_Array = [];
    while(!leftEND.includes(i)){
      left_Array.push(i)
      i--
    }
    left_Array = left_Array.slice(1,left_Array.length)
    const y = (left_Array[left_Array.length-1]-1);
    // left_Array.pop(position)
    if (!isNaN(y)) left_Array.push(y)
    return [forward_array,backward_array,right_Array,left_Array]

}

//Queen
const handleQueen = (position) => {
  const rook = handleTower(position);
  const bishop = handleBishop(position);
  rook.push(...bishop);
  return rook;
}

//Solider
const isStartingPosition = (position) => {
  const starting_positions = BACK.map(item => item+8)
  return starting_positions.includes(position)
}

const handleSolider = (position) => {
  switch(isStartingPosition(position)) {
    case true:
      return [position+8,position+16]
    default:
      let move = position+8;
      if(!BACK.includes(position))
      {return [position+8]}
      return [];
  }
}

//King
const handleKing = (position) => {
  let back = [];
  let front = [];
  let right = [];
  let left = [];
  //Left
  if(!LEFT.includes(position))
  {
    let reduced_0 = position-9;
    let reduced_1 = position-1;
    let extended = position+7;
    if(extended <=64){
      left.push(extended);
    }
    switch (true) {
      case reduced_0 > 0:
        left.push(reduced_0,reduced_1);
        break;
      case reduced_1 > 0:
      left.push(reduced_1);;
      break;
      default:
      null;
    }
  }
  //Right
  if(!RIGHT.includes(position))
  {
    let reduced = position-7;
    let greater_0 = position+9;
    let greater_1 = position+1;
    if(reduced>0) {
      right.push(reduced)
    }
    switch(true) {
      case greater_0 <= 64:
      right.push(greater_0,greater_1);
      break;
      case greater_1 <= 64:
      right.push(greater_1)
      default:
      null;
    }
  }
    //Front
    if(!FRONT.includes(position))
    {
      switch (true) {
        case LEFT.includes(position):
          front.push(position+8,position+9)
          break;
        case RIGHT.includes(position):
          front.push(position+7,position+8)
          break;
        default:
          front.push(position+6,position+7,position+8)
          break;
      }
    }
    if(!BACK.includes(position))
    {
      switch (true) {
        case LEFT.includes(position):
          back.push(position-8,position-9)
          break;
        case RIGHT.includes(position):
          back.push(position-9,position-8)
          break;
        default:
          back.push(position-7,position-8,position-9)
          break;
      }
    }
  return [front,back,left,right];
}
