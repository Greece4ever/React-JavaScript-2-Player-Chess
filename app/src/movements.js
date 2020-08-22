const leftEND = [1,9,17,25,33,41,49,57]

const handleTower = (position) => {
    //Given a position finds all the possible moves a rook can make
    //Returns an array of arrays in the following format
    // return [forward_array,backward_array,right_Array,left_Array] where the position is indicating all the possible moves in that direction
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
    right_Array.push(right_Array[right_Array.length-1]+1)
    //Left
    i = position;
    let left_Array = [];
    while(!leftEND.includes(i)){
      left_Array.push(i)
      i--
    }
    left_Array.push(left_Array[left_Array.length-1]-1)
    return [forward_array,backward_array,right_Array,left_Array]
  
  }
  