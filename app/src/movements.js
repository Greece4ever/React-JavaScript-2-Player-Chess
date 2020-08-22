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




const leftEND = [1,9,17,25,33,41,49,57]

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

