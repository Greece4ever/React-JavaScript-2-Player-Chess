/**
 * The functions here return all the possible moves
 * of a chess piece, given a point in space
 * @WARNING : THEY CANNOT KNOW IF ONE OF THE RESULTING POINTS IS OCCUPIED
  * Returns the in the following format :
  * [FL,FR,BL,BR]
  * F = Forward B = Backward L = Left R = Right
 */

/** FOR THE WHITE PIECES */

//Forward Right
const FR = [57,58,59,60,61,62,63,64,8,16,24,32,40,48,56]
const FL = [57,58,59,60,61,62,63,64,1,9,17,25,33,41,49,57]
const BR = [1,2,3,4,5,6,7,8,16,24,32,40,48,56]
const BL = [1,2,3,4,5,6,7,8,9,17,25,33,41,49,57]

/**FOR THE BLACK PIECES */
const FR_black = [1,2,3,4,5,6,7,8,16,24,32,40,48,56]
const FL_black = [1,2,3,4,5,6,7,8,9,17,25,33,41,49,57]
const BR_black = [57,58,59,60,61,62,63,64,8,16,24,32,40,48,56]
const BL_black = [57,58,59,60,61,62,63,64,1,9,17,25,33,41,49,57]



//Left
const leftEND = [1,9,17,25,33,41,49,57]
const LEFT = [1,9,17,25,33,41,49,57];
//Back
const BACK = [1,2,3,4,5,6,7,8];
//Right
const RIGHT = [8,16,24,32,40,48,56,64];
//Front
const FRONT = [57,58,59,60,61,62,63,64];

/** FOR THE BLACK PIECES */
const FRONT_black = [1,2,3,4,5,6,7,8];
const BACK_black = [57,58,59,60,61,62,63,64];

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

const handleBishopBlack = (start) => {
  /**
 * Finds all the possible moves of a bishop
 */

//FR
let forward_right = [];
let i = start; //forward_left
while (!FR_black.includes(i)) {
  forward_right.push(i-7)
  i-=7
}
//FL
let forward_left = [];
i = start;
while (!FL_black.includes(i)){
  forward_left.push(i-9);
  i-=9;
}
//BL
let back_left = [];
i = start;
while (!BL_black.includes(i)) {
  back_left.push(i+7);
  i+=7;
}
//BR
let back_right = [];
i = start;
while (!BR.includes(i)) {
  back_right.push(i+9);
  i+=9;
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

const handleTowerBlack = (position) => {
  let forward_array = [];
  let i = position;
  while (i > 0) {
    forward_array.push(i-8)
    i -=8;
  }
  forward_array.pop()
  let backward_array = [];
  i = position+8;
  while(i <= 64)
  {
    backward_array.push(i)
    i+=8
  }
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
  while(!LEFT.includes(i)){
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

const handleQueenBlack = (position) => {
  const rook = handleTowerBlack(position);
  const bishop = handleBishopBlack(position);
  rook.push(...bishop);
  return rook;
}

//Solider
const isStartingPosition = (position) => {
  const starting_positions = BACK.map(item => item+8)
  return starting_positions.includes(position)
}

const isStartingPositionBlack = (position) => {
  const starting_positions = BACK_black.map(item => item-8)
  return starting_positions.includes(position)

}

const handleSolider = (position) => {
  switch(isStartingPosition(position)) {
    case true:
      return [[position+8,position+16]]
    default:
      let move = position+8;
      if(!FRONT.includes(move))
      {return [[move]]}
      return [];
  }
}

const handleSoliderBlack = (position) => {
  switch(isStartingPositionBlack(position)) {
    case true:
      return [[position-8,position-16]]
    default:
      let move = position-8;
      if(!FRONT_black.includes(move))
      {return [[move]]}
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
          front.push(position+7,position+8,position+9)
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

const handleHorse = (position) => {
  let front = [];
  let back = [];
  let left = [];
  let right = [];

  // Left
  const l1 = position-2+8;
  const l2 = position-2-8;
  if (!RIGHT.includes(l1) && !RIGHT.map(item => item-1).includes(l1))
  //Does not matter whether we check l1 or l2 they are in the same collumn
  {
    if (l1 > 0 && l1 <= 64){
      left.push(l1)
    }
  }
  if (!RIGHT.includes(l2) && !RIGHT.map(item => item-1).includes(l2))
  //Does not matter whether we check l1 or l2 they are in the same collumn
  {
    if (l2 > 0 && l2 <= 64){
      left.push(l2)
    }
  }
  //Right
  let r1 = position+2+8;
  let r2 = position+2-8;
  if(!LEFT.includes(r1) && !LEFT.map(item => item +1).includes(r1))
  {
    if (r1 > 0 && r1 <= 64 ) {
      right.push(r1);
    }
  }
  if(!LEFT.includes(r2) && !LEFT.map(item => item +1).includes(r2))
  {
    if (r2 > 0 && r2 <= 64 ) {
      right.push(r2);
    }
  }
  //Front
  let f1 = position+16+1;
  let f2 = position+16-1;
  if(!FRONT.map(item => item + 8).includes(position))
  {
    if (f1 <= 64 && f1 > 0) {

      if (!LEFT.includes(f1))
      {
        front.push(f1)
      }
    }
    if (f2 <= 64 && f2 > 0)
    {
      if (!RIGHT.includes(f2)) {
        front.push(f2);
      }
    }
  }
  //Back
  let b1 = position-16+1;
  let b2 = position-16-1;
  if(!BACK.map(item => item - 8).includes(position))
  {
    if (b1 <= 64 && b1 > 0) {
      if (!LEFT.includes(b1))
      {
        back.push(b1)
      }
    }
    if (b2 <= 64 && b2 > 0)
    {
      if (!RIGHT.includes(b2)) {
        back.push(b2);
      }
    }
  }

  return [front,back,left,right]
}




export const handleMovement = (piece, color) => {
  switch (color.toLowerCase()) {
    case "white":
      switch(piece.toLowerCase()) {
        case "king":
          return handleKing;
        case "solider":
          return handleSolider;
        case "queen":
          return handleQueen;
        case "tower":
          return handleTower;
        case "horse":
          return handleHorse;
        case "bishop":
          return handleBishop;
      }
      break;
    case "black":
      switch(piece.toLowerCase()) {
        case "king":
          return handleKing;
          break;
        case "solider":
          return handleSoliderBlack;
        case "queen":
          return handleQueen;
        case "tower":
          return handleTowerBlack;
        case "horse":
          return handleHorse;
        case "bishop":
          return handleBishop;
      }
      break;
  }
}


class doNotUseThis {
// const handleHorse = (position) => {
//   switch(true) {
//     case BACK.includes(position):
//       switch (true){
//         case LEFT.includes(position):
//           return [[position+16+1],[position+3+8]]
//           break;
//         case RIGHT.includes(position):
//           return [[position+16-1],[position-3+8]]
//           break;
//         default:
//           return [[position+16+1,position+16-1],[position+3+8,position-3+8]]
//       }
//       break;
//     case FRONT.includes(position):
//       switch(true) {
//         default:
//       }
//     // default:
//     //   return [[position+16+1,position+16-1],[position-16-1,position-16],[position+3+8,position-3+8]]  
//   }
// }

}

