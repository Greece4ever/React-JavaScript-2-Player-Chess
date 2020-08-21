import React,{useState,useEffect} from 'react';
import "./chessboard.css"
import pawn from "./icons/black/pawn.png"

function App() {

  const [checkborad,setCheckborad] = useState([]);

  useEffect(() => {
    let status = true;
    for (let i=1;i < 65;i++)
    {
      console.log(status)
    if(status) {
      setCheckborad(prev => [...prev,<div className="square" key={i} style={{"width" : "70px",height : "60px",backgroundColor :"#cfc99f",cursor : "pointer"}}>{i}</div>])
    }
    else{
      setCheckborad(prev => [...prev,<div className="square" key={i} style={{"width" : "70px",height : "60px",backgroundColor :"#363533",cursor : "pointer"}}>{i}</div>])
    }
    status = (i%8==0) ? status : !status
  }
  },[])

  return (
    <div style={{"transform" : "translateX(35%)",marginTop : "10px"}} className="App">
      <div style={{"width" : "600px",textAlign : "center",border : "20px solid #4f5056",borderRadius : "5px"}} className="row">
        {checkborad}
        {/* <div style={{"width" : "70px",height : "50px",backgroundColor : "#cfc99f"}}>d</div>
        <div style={{"width" : "70px",height : "50px",backgroundColor : "#363533"}}>d</div> */}
    </div>
    <img src={pawn}></img>

    </div>
  );
}

export default App;
