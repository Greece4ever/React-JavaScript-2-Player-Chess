import React,{useState,useEffect} from 'react';
import "./chessboard.css"
import pawn from "./icons/black/pawn.png";
import whitePawn from "./icons/white/whitePawn.png";

function App() {

  const [squares,setSquares] = useState([]); //8x8 Squares

  const [blackSoliders,setBlackSoliders] = useState([]) //Paws

  const [whiteSoliders,setWhiteSoliders] = useState([]);

  //Black and white colors
  const colors = {
    "white" : "#cfc99f",
    "black" : "#363533"
  }

  //Set dark background
  useEffect(() => {
    document.body.style.backgroundColor = "#252828"
  },[])

  //Creates the Chessboard pattern
  useEffect(() => {
    let status = true;
    for (let i=1;i < 65;i++)
    {
    if(status) {
      setSquares(prev => [...prev,{"color" : 1,"id" : i}])
    }
    else{
      setSquares(prev => [...prev,{"color" : 0,"id" : i,}])
    }
    status = (i%8==0) ? status : !status
  }
  },[])

  //BLACK Pawns
  useEffect(() => {
    for (let j=0;j < 8;j++)
    {
      setBlackSoliders(prev => [...prev,{"id" : `sol_${j}`,"moves" : [8],"kill" : [7,9]}])
    }
  },[])

  //Set BLACK The Solider's positions
  useEffect(() => {
    let parent_element;
    let i = 1;
    document.querySelectorAll('.solider').forEach(solider => {
      parent_element = document.getElementById(`square_${48+i}`);
      parent_element.appendChild(solider)
      i+=1
    })

  })

  //WHITE Pawns
  useEffect(() => {
    for (let j=0;j < 8;j++)
    {
      setWhiteSoliders(prev => [...prev,{"id" : `solWHIT_${j}`,"moves" : [8],"kill" : [7,9]}])
    }
  },[])

  //Set BLACK The Solider's positions
  useEffect(() => {
    let parent_element;
    let i = 1;
    document.querySelectorAll('.solider-white').forEach(solider => {
      parent_element = document.getElementById(`square_${8+i}`);
      parent_element.appendChild(solider)
      i+=1
    })

  })



  // < Handle Drag and Drop >

  const handleDrag = (event) => 
  {
    let element = event.target;
    event.target.style.opacity = '0.5';
    element.classList.add("current-drug"); //Add a class that only this element will have to distinguish it

  }

  const handleDragEnd = (event) => 
  {
    let element = event.target;
    event.target.style.opacity = '1';
    element.classList.remove("current-drug");
  }

  const handleDragOver = (event) => 
  {
    event.preventDefault();
    let elementToReceiveDrop = event.target;
    let elentToBeDropped = document.querySelector('.current-drug'); //Unique
    if(!elentToBeDropped){console.log(elentToBeDropped)}
    elementToReceiveDrop.appendChild(elentToBeDropped);

  }

  return (
    <div style={{"transform" : "translateX(35%)",marginTop : "10px"}} className="App">
      <div style={{"width" : "600px",textAlign : "center",border : "20px solid #4f5056",borderRadius : "5px"}} className="row">
        {squares.map(square => (
          <div id={`square_${square.id}`} key={square.id} className="square" style={{backgroundColor : square.color===1 ? colors.white : colors.black}} onDragOver={(event) => handleDragOver(event)}><b>{square.id}</b></div>
        ))}
    </div>
    {blackSoliders.map(solider => (
      <img className="solider" id={solider.id} key={solider.id} moves={solider.moves} kill={solider.kill} onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={pawn} draggable={true}></img>
    ))}

    {whiteSoliders.map(solider => (
      <img className="solider-white" id={`white_${solider.id}`} key={solider.id} moves={solider.moves} kill={solider.kill} onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whitePawn} draggable={true}></img>
    ))}

    </div>
  );
}

export default App;
