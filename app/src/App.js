import React,{useState,useEffect} from 'react';
import "./chessboard.css"
//Soliders
import pawn from "./icons/black/pawn.png";
import whitePawn from "./icons/white/whitePawn.png";
//Towers
import Blacktower from "./icons/black/rook.png";
import whiteTower from "./icons/white/tower.png";
//Horses
import blackHorse from "./icons/black/horse_knight.png";
import whiteHorse from  "./icons/white/horse.png";
//Bishops
import whiteBishop from "./icons/white/bishop.png";
import blackBishop from "./icons/black/bishop.png";
//Queens
import whiteQueens from "./icons/white/queen.png";
import blackQueens from "./icons/black/queen.png";
//Kings
import whiteKings from "./icons/white/king.png";
import blackKings from "./icons/black/king.png";


function App() {
  
  //8x8 Squares
  const [squares,setSquares] = useState([]);

  //Soliders
  const [blackSoliders,setBlackSoliders] = useState([]) 
  const [whiteSoliders,setWhiteSoliders] = useState([]); 

  //Towers
  const [blackTowers,setBlackTowers] = useState([])
  const [whiteTowers,setWhiteTowers] = useState([])

  //Horses
  const [blackHorses,setBlackHorses] = useState([]);
  const [whiteHorses,setWhiteHorses] = useState([]);

  //Bishops
  const [blackBishops,setBlackBishops] = useState([]);
  const [whiteBishops,setWhiteBishops] = useState([]);

  //Queens
  const [blackQueen,setBlackQueen] = useState([]);
  const [whiteQueen,setWhiteQueen] = useState([]);

  //Kings
  const [blackKing,setBlackKing] = useState( [] );
  const [whiteKing,setWhiteKing] = useState([] );


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

  

  // <-------------- SOLIDERS ----------------- >
  
  //BLACK Pawns
  useEffect(() => {
    for (let j=0;j < 8;j++)
    {
      setBlackSoliders(prev => [...prev,{"id" : `sol_${j}`}])
    }
  },[])

  //Set BLACK The Solider's positions
  useEffect(() => {
    let parent_element;
    let i = 1;
    console.log(document.querySelectorAll('.solider'))
    document.querySelectorAll('.solider').forEach(solider => {
      parent_element = document.getElementById(`square_${48+i}`);
      parent_element.appendChild(solider)
      i+=1
    })

  },[blackSoliders])

  //WHITE Pawns
  useEffect(() => {
    for (let j=0;j < 8;j++)
    {
      setWhiteSoliders(prev => [...prev,{"id" : `solWHIT_${j}`}])
    }
  },[])

  //Set WHITE The Solider's positions
  useEffect(() => {
    let parent_element;
    let i = 1;
    document.querySelectorAll('.solider-white').forEach(solider => {
      parent_element = document.getElementById(`square_${8+i}`);
      parent_element.appendChild(solider)
      i+=1
    })

  },[whiteSoliders])


  // <-------------- TOWERS ----------------- >

  useEffect(() => {
    for (let i=0;i < 2;i++)
    {
      setWhiteTowers(prev => [...prev,{"id" : `towWhite_${i}`}])
    }

  },[])

  useEffect(() => {
    for (let i=0;i < 2;i++)
    {
      setBlackTowers(prev => [...prev,{"id" : `towWhite_${i}`}])
    }

  },[])


  useEffect(() => {
    let parent_element;
    let i = 1;
    document.querySelectorAll('.tower-white').forEach(tower => {
      switch(i) {
        case 1:
          parent_element = document.getElementById(`square_${i}`);
          console.log(parent_element)
          parent_element.appendChild(tower)
          break;
        default:
          parent_element = document.getElementById(`square_8`);
          parent_element.appendChild(tower)
          break;
      }
      i+=1
  })},[whiteTowers])

  useEffect(() => {
    let parent_element;
    let i = 1;
    console.log(document.querySelectorAll('.tower-black'))
    document.querySelectorAll('.tower-black').forEach(tower => {
      switch(i) {
        case 1:
          parent_element = document.getElementById(`square_57`);
          parent_element.appendChild(tower)
          break;
        default:
          parent_element = document.getElementById(`square_64`);
          parent_element.appendChild(tower)
          break;
      }
      i+=1
    })

  },[blackTowers])


  // <-------------- Horses ----------------- >

  useEffect(() => {
    for (let i=0;i < 2;i++)
    {
      setWhiteHorses(prev => [...prev,{"id" : `horseWhite_${i}`}])
    }

  },[])

  useEffect(() => {
    for (let i=0;i < 2;i++)
    {
      setBlackHorses(prev => [...prev,{"id" : `horseBlack_${i}`}])
    }
  },[])


  useEffect(() => {
    let parent_element;
    let i = 1;
    document.querySelectorAll('.horse-white').forEach(horse => {
      switch(i) {
        case 1:
          parent_element = document.getElementById(`square_2`);
          parent_element.appendChild(horse)
          break;
        default:
          parent_element = document.getElementById(`square_7`);
          parent_element.appendChild(horse)
          break;
      }
      i+=1
    })

  },[whiteHorses])

  useEffect(() => {
    let parent_element;
    let i = 1;
    document.querySelectorAll('.horse-black').forEach(horse => {
      switch(i) {
        case 1:
          parent_element = document.getElementById(`square_58`);
          parent_element.appendChild(horse)
          break;
        default:
          parent_element = document.getElementById(`square_63`);
          parent_element.appendChild(horse)
          break;
      }
      i+=1
    })

  },[blackHorses])

  // <-------------- Bishops ----------------- >

  useEffect(() => {
    for (let i=0;i < 2;i++)
    {
      setWhiteBishops(prev => [...prev,{"id" : `bishopWhite_${i}`}])
    }

  },[])

  useEffect(() => {
    for (let i=0;i < 2;i++)
    {
      setBlackBishops(prev => [...prev,{"id" : `bishopBlack_${i}`}])
    }
  },[])


  useEffect(() => {
    let parent_element;
    let i = 1;
    document.querySelectorAll('.bishop-white').forEach(bishop => {
      switch(i) {
        case 1:
          parent_element = document.getElementById(`square_3`);
          parent_element.appendChild(bishop)
          break;
        default:
          parent_element = document.getElementById(`square_6`);
          parent_element.appendChild(bishop)
          break;
      }
      i+=1
    })

  },[whiteBishops])

  useEffect(() => {
    let parent_element;
    let i = 1;
    document.querySelectorAll('.bishop-black').forEach(bishop => {
      switch(i) {
        case 1:
          parent_element = document.getElementById(`square_59`);
          parent_element.appendChild(bishop)
          break;
        default:
          parent_element = document.getElementById(`square_62`);
          parent_element.appendChild(bishop)
          break;
      }
      i+=1
    })

  },[blackBishops])

  // <-------------- Queens ----------------- >

  useEffect(() => {
    setWhiteQueen(prev => [...prev,{"id" : `queenWhite_1`}])
  },[])

  useEffect(() => {
    setBlackQueen(prev => [...prev,{"id" : `queenBlack1`}])
  },[])


  useEffect(() => {
    try{
      let parent_element = document.getElementById('square_4');
      parent_element.appendChild(document.querySelector('.queen-white'));  
    }
    catch(e) {}
  },[whiteQueen])


  useEffect(() => {
    try {
      let parent_element = document.getElementById('square_61');
      parent_element.appendChild(document.querySelector('.queen-black'));  
    }
    catch (e) {}

  },[blackQueen])


  // <-------------- Kings ----------------- >

  useEffect(() => {
    setWhiteKing(prev => [...prev,{"id" : `kingWhite_1`}])
  },[])

  useEffect(() => {
    setBlackKing(prev => [...prev,{"id" : `kingBlack_1`}])
  },[])

  useEffect(() => {
    try{
      let parent_element = document.getElementById('square_5');
      parent_element.appendChild(document.querySelector('.king-white'));  
    }
    catch(e) {}
  },[whiteKing])


  useEffect(() => {
    try{
      let parent_element = document.getElementById('square_60');
      parent_element.appendChild(document.querySelector('.king-black'));  
    }
    catch (e){}

  },[blackKing])


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
    event.dataTransfer.effectAllowed = "copyMove";
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
    {/* <---------------- Soliders ----------->     */}

    {blackSoliders.map(solider => (
      <img className="solider" id={solider.id} key={solider.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={pawn} draggable={true}></img>
    ))}

    {whiteSoliders.map(solider => (
      <img className="solider-white" id={`white_${solider.id}`} key={solider.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whitePawn} draggable={true}></img>
    ))}

    {/* <---------------- Towers ----------->     */}

    {whiteTowers.map(tower => (
      <img className="tower-white" id={`${tower.id}`} key={tower.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whiteTower} draggable={true}></img>
    ))}

    {blackTowers.map(tower => (
          <img className="tower-black" id={`${tower.id}`} key={tower.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={Blacktower} draggable={true}></img>
        ))}

    {/* <---------------- Horses ----------->     */}
    {whiteHorses.map(horse => (
      <img className="horse-white" id={`${horse.id}`} key={horse.id} onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whiteHorse} draggable={true}></img>
    ))}

    {blackHorses.map(horse => (
          <img className="horse-black" id={`${horse.id}`} key={horse.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={blackHorse} draggable={true}></img>
        ))}

    {/* <---------------- Bishops ----------->     */}
    {whiteBishops.map(bishop => (
      <img className="bishop-white" id={`${bishop.id}`} key={bishop.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whiteBishop} draggable={true}></img>
    ))}

    {blackBishops.map(bishop => (
          <img className="bishop-black" id={`${bishop.id}`} key={bishop.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={blackBishop} draggable={true}></img>
        ))}


    {/* <---------------- Queens ----------->     */}

    {whiteQueen.map(queen => (
      <img className="queen-white" id={`${queen.id}`} key={queen.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whiteQueens} draggable={true}></img>
  ))}

    {blackQueen.map(queen => (
        <img className="queen-black" id={`${queen.id}`} key={queen.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={blackQueens} draggable={true}></img>
    ))}


    {/* <---------------- Kings ----------->     */}

    {whiteKing.map(king => (
      <img className="king-white" id={`${king.id}`} key={king.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whiteKings} draggable={true}></img>
    ))}

    {blackKing.map(king => (
      <img className="king-black" id={`${king.id}`} key={king.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={blackKings} draggable={true}></img>
    ))}

    </div>
  );
}

export default App;
