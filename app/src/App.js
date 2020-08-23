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
//Timer
import Timer from "./timer";
//Movement
import { handleMovement } from "./movements";
//Killing
import { FilterDuplicates2 } from "./functions";


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

  //Turn Managment
  const [turn,setTurn] = useState(0);
  const [currentPosition,setCurrentPosition] = useState('');
  
  //Moving
  const [possibleMoves,setPossibleMoves] = useState([]);
  const [reciver,setReceiver] = useState();

  //Kills
  const [killed,setKilled] = useState([])
  //All classess
  const [killedWhite,setKilledWhite] = useState([]);
  const [killedBlack,setKilledBlack] = useState([]);


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
    let id = element.parentNode.getAttribute('id');
    setCurrentPosition(id);
    let className = element.className;
    if(className.includes("black") || className=="solider")
    {
      if(!turn==0){
        return null;
      }
    }
    else {
      if(!turn==1){
        return null;
      }
    }
    document.getElementById(id).style.backgroundColor = "#97d8a1";
    document.getElementById(id).style.border = "1px solid #8cea9a"

    let pieceNcolor = className.split('-');
    //Special case in black pawns
    if(pieceNcolor.length ===1) pieceNcolor = [className,'black']
    let possible_moves_callable = handleMovement(pieceNcolor[0],pieceNcolor[1]);
    let possible_moves = possible_moves_callable(Number(id.split("_")[1]));
    let num_position;
    let HTML_ELEMENT;
    const moves_tmp = [];
    for (let move in possible_moves)
    {
      for (let directionalMove in possible_moves[move])
      {
        num_position = possible_moves[move][directionalMove]
        HTML_ELEMENT = document.getElementById(`square_${num_position}`);
        if(HTML_ELEMENT.childNodes.length < 2) {
          moves_tmp.push(num_position)
          HTML_ELEMENT.classList.add("possible_move");
          HTML_ELEMENT.style.backgroundColor = "rgb(159, 171, 207)";
          HTML_ELEMENT.style.border = "1px solid #97a7d8";  
        }
        else {
          const childPiece = HTML_ELEMENT.childNodes[1];
          let obj_class = element.classList[0];
          if(obj_class.trim()=='solider')
          {
            obj_class = ['solider','black'];
          } else {
            obj_class = obj_class.split('-');
            obj_class = [obj_class[0],obj_class[1]];
          }

          let childClass = childPiece.className;
          if(childClass=='solider') {
            childClass = ['solider','black']
          }
          else {
            childClass = childClass.split('-');
            childClass = [childClass[0],childClass[1]];
            };
          if(childClass[1]!=obj_class[1]) {
            HTML_ELEMENT.classList.add("possible_move");
            HTML_ELEMENT.style.backgroundColor = "#d66c62";
            HTML_ELEMENT.style.border = "1px solid #d66c62";      
          }
          
        };
      };
    };
    setPossibleMoves(moves_tmp);
    event.target.style.opacity = '0.5';
    element.classList.add("current-drug"); //Add a class that only this element will have to distinguish it

  }

  const handleDragEnd = (event) => 
  {
    if(killed[1]!=undefined && killed[0]==reciver )
    {
      const isWhiteOrBlack = killed[1].className;
      let result = isWhiteOrBlack.trim().toLowerCase();
      let img_src = killed[1].src;
      if (result==='solider' || result.includes('black'))
      {
        result = 'black';
        setKilledBlack(prev => [...prev,img_src]);
      }
      else {
        result = 'white';
        setKilledWhite(prev => [...prev,img_src]);
      }
    }
    setKilled([]);
    const initial_position = document.getElementById(currentPosition);
    initial_position.style.backgroundColor = initial_position.getAttribute('color');
    initial_position.style.border = '0';

    let element = event.target;
    const classList = element.classList;
    if(classList.length===1)
    {
      return null;
    }
    event.target.style.opacity = '1';
    classList.remove("current-drug");
    let moves = document.querySelectorAll('.possible_move');
    let initial_color;
    for (let j=0;j < moves.length;j++)
    {
      initial_color = moves[j].getAttribute('color');
      moves[j].style.backgroundColor = initial_color;
      moves[j].style.border = "0"
      moves[j].classList.remove('possible_move')
    }

    if(element.parentNode.getAttribute('id')===currentPosition)
    {
      return null;
    }


    setTurn(turn==0 ? 1 : 0);
  }

  const handleDragOver = (event) => 
  {
    let elentToBeDropped = document.querySelector('.current-drug'); //Unique
    if(!elentToBeDropped){return null}
    //if there is another element in that element
    let elementToReceiveDrop = event.target;
    let id = elementToReceiveDrop.getAttribute('id').replace("square_",'');
    if (!possibleMoves.includes(Number(id))) {
      if(id!=currentPosition.replace("square_",'') && elementToReceiveDrop.style.backgroundColor.trim() !=  "rgb(214, 108, 98)") {
        return null;
      }
    }
    if(killed[0]!=undefined && elementToReceiveDrop!=killed[0]) {
      killed[0].appendChild(killed[1])
    }
    if(elementToReceiveDrop.childNodes[1] && elementToReceiveDrop.childNodes[1]!=elentToBeDropped)
    {
      if(elementToReceiveDrop.style.backgroundColor.trim() == '#d66c62' || elementToReceiveDrop.style.backgroundColor.trim() ==  "rgb(214, 108, 98)") {
        setKilled([elementToReceiveDrop,elementToReceiveDrop.childNodes[1]])
        elementToReceiveDrop.removeChild(elementToReceiveDrop.childNodes[1])
        elementToReceiveDrop.appendChild(elentToBeDropped);
        setReceiver(elementToReceiveDrop)

      }
      return null;
    }
    setReceiver(elementToReceiveDrop)
    elementToReceiveDrop.appendChild(elentToBeDropped);
  }

  return (
    <div style={{position : "absolute",left : "50%",transform : "translate(-50%, 0)",top : "2%"}} className="App">
      <div style={{'textAlign' : "center",transform : "translateX(25%)"}}>
        <Timer setTurn={setTurn} turn={turn} />
      </div>
      {/* White Player Deaths */}
      <div style={{position : "absolute",height : "515px",width : "100px",backgroundColor : 'rgb(79, 80, 86)',left: "-150px",marginTop : "17px"}}>
        <img style={{"width" : "64px",marginLeft : "15px"}} src={blackKings}></img>
        <hr></hr>
        {
          FilterDuplicates2(killedBlack).map(item => (
            <div className="inline"><span style={{"color" : "#fff",fontSize : "22px",marginTop : "10px",marginLeft : "10px"}}>{item[0]} x</span><img style={{marginBottom : "7px","width" : "32px",marginLeft : "5px"}} src={item[1]}></img></div>
          ))
        }
      </div>
      {/* Black Player Deaths */}
      <div style={{position : "absolute",height : "515px",width : "100px",backgroundColor : 'rgb(79, 80, 86)',right: "-150px",marginTop : "17px"}}>
        <img style={{"width" : "64px",marginLeft : "15px"}} src={whiteKings}></img>
        <hr></hr>
        {FilterDuplicates2(killedWhite).map(item => (
            <div className="inline"><span style={{"color" : "#fff",fontSize : "22px",marginTop : "10px",marginLeft : "10px"}}>{item[0]} x</span><img style={{marginBottom : "7px","width" : "32px",marginLeft : "5px"}} src={item[1]}></img></div>
        ))}

      </div>

      <div style={{"width" : "600px",textAlign : "center",border : "20px solid #4f5056",borderRadius : "5px",marginTop : "15px"}} className="row">
        {squares.map(square => (
          <div id={`square_${square.id}`} onClick={(event) => event.target.style.backgroundColor = "red"} color={square.color===1 ? colors.white : colors.black} key={square.id} className="square" style={{backgroundColor : square.color===1 ? colors.white : colors.black}} onDragOver={(event) => handleDragOver(event)}><b style={{"pointerEvents" : "none",userSelect : "none",position : "absolute"}}>{square.id}</b></div>
        ))}
    </div>
    {/* <---------------- Soliders ----------->     */}

    {blackSoliders.map(solider => (
      <img style={{"cursor" : "grab"}} className="solider" id={solider.id} key={solider.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={pawn} draggable={true}></img>
    ))}

    {whiteSoliders.map(solider => (
      <img style={{"cursor" : "grab"}} className="solider-white" id={`white_${solider.id}`} key={solider.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whitePawn} draggable={true}></img>
    ))}

    {/* <---------------- Towers ----------->     */}

    {whiteTowers.map(tower => (
      <img style={{"cursor" : "grab"}} className="tower-white" id={`${tower.id}`} key={tower.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whiteTower} draggable={true}></img>
    ))}

    {blackTowers.map(tower => (
          <img style={{"cursor" : "grab"}} className="tower-black" id={`${tower.id}`} key={tower.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={Blacktower} draggable={true}></img>
        ))}

    {/* <---------------- Horses ----------->     */}
    {whiteHorses.map(horse => (
      <img style={{"cursor" : "grab"}} className="horse-white" id={`${horse.id}`} key={horse.id} onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whiteHorse} draggable={true}></img>
    ))}

    {blackHorses.map(horse => (
          <img style={{"cursor" : "grab"}} className="horse-black" id={`${horse.id}`} key={horse.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={blackHorse} draggable={true}></img>
        ))}

    {/* <---------------- Bishops ----------->     */}
    {whiteBishops.map(bishop => (
      <img style={{"cursor" : "grab"}} className="bishop-white" id={`${bishop.id}`} key={bishop.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whiteBishop} draggable={true}></img>
    ))}

    {blackBishops.map(bishop => (
          <img style={{"cursor" : "grab"}} className="bishop-black" id={`${bishop.id}`} key={bishop.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={blackBishop} draggable={true}></img>
        ))}


    {/* <---------------- Queens ----------->     */}

    {whiteQueen.map(queen => (
      <img style={{"cursor" : "grab"}} className="queen-white" id={`${queen.id}`} key={queen.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whiteQueens} draggable={true}></img>
  ))}

    {blackQueen.map(queen => (
        <img style={{"cursor" : "grab"}} className="queen-black" id={`${queen.id}`} key={queen.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={blackQueens} draggable={true}></img>
    ))}


    {/* <---------------- Kings ----------->     */}

    {whiteKing.map(king => (
      <img style={{"cursor" : "grab"}} className="king-white" id={`${king.id}`} key={king.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={whiteKings} draggable={true}></img>
    ))}

    {blackKing.map(king => (
      <img style={{"cursor" : "grab"}} className="king-black" id={`${king.id}`} key={king.id}  onDragEnd={(event) => handleDragEnd(event)} onDragStart={(event) => {handleDrag(event)}} src={blackKings} draggable={true}></img>
    ))}
    <div style={{"color" : "#fff",textAlign : "center",fontFamily : "'Monoton', cursive",fontSize : "40px",marginTop : "30px",pointerEvents : "none",userSelect : "none"}}>
      Turn : {turn==0 ? <img style={{"width" : "64px"}} src={blackKings}></img> : <img style={{"width" : "64px"}} src={whiteKings}></img>}
    </div>

    </div>
  );
}

export default App;
