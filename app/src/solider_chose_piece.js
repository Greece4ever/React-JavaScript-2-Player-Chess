import React,{useState} from 'react';
import { piecesBlack , piecesWhite} from "./App"; 
import "./choices.css";
//Icons
import blacktower from "./icons/black/rook.png";
import whitetower from "./icons/white/tower.png";
//Horses
import blackhorse from "./icons/black/horse_knight.png";
import whitehorse from  "./icons/white/horse.png";
//Bishops
import whitebishop from "./icons/white/bishop.png";
import blackbishop from "./icons/black/bishop.png";
//Queens
import whitequeen from "./icons/white/queen.png";
import blackqueen from "./icons/black/queen.png";


const ChoosePlayer = (props) => {

    const handleChange = (id,event) => {
        let selected_piece = event.target.parentElement.getAttribute('piece');
        const changedElement = document.getElementById(id);
        if(changedElement.className!=='solider'){
            changedElement.setAttribute('class',`${selected_piece}-${props.black ? 'black' : 'white'}`)
        } else 
        {
            changedElement.setAttribute('class',`${selected_piece}-black`)
        }
        let rslt;
        switch(selected_piece) 
        {
            case 'queen':
                rslt = props.black  ? blackqueen : whitequeen;
                break;
            case 'tower':
                rslt = props.black  ? blacktower : whitetower;
                break;
            case 'bishop':
                rslt = props.black  ? blackbishop : whitebishop;
                break;
            case 'horse':
                rslt = props.black  ? blackhorse : whitehorse;
                break;
        }
        changedElement.setAttribute('src',rslt)
        document.getElementById('close').click();
    }

    return (
        <div>
            <button style={{"visibility" : "hidden","position" : 'absolute'}} id="$1" type="button" class="btn btn-primary" data-toggle="modal" data-target="#solider_choose">
            &amp;
            </button>
            <div class="modal fade" data-backdrop="static" data-keyboard="false" id="solider_choose" tabindex="-1" role="dialog" aria-labelledby="solider_chooseTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div style={{"background-color" : "#232628",borderBottom : "1px solid #9f885a",textAlign : "center !important"}} class="modal-header">
                    <h5 style={{"color" : "#fff",textAlign : "center",color : "rgb(159, 136, 90)"}} class="modal-title" id="exampleModalLongTitle">Choose a piece</h5>
                </div>
                <div style={{"background-color" : "#232628"}} class="modal-body">
                    <div className="d-flex justify-content-around">
                        <div piece={"horse"} onClick={(event) => {handleChange(props.id,event)}} className="display-piece">
                            {props.black ? piecesBlack.horse : piecesWhite.horse}
                        </div>
                        <div piece={"tower"} onClick={(event) => {handleChange(props.id,event)}} className="display-piece">
                            {props.black ? piecesBlack.rook : piecesWhite.rook}
                        </div>
                        <div piece={"bishop"} onClick={(event) => {handleChange(props.id,event)}} className="display-piece">
                            {props.black ? piecesBlack.bishop : piecesWhite.bishop}
                        </div>
                        <div piece={"queen"} onClick={(event) => {handleChange(props.id,event)}} className="display-piece"> 
                            {props.black ? piecesBlack.queen :  piecesWhite.queen}
                        </div>
                    </div>
                </div>
                <div style={{"background-color" : "#2e2e2e",borderTop : "0px"}} class="modal-footer">
                    <div style={{visibility : "hidden"}}>d</div>
                    <button style={{"visibility" : "hidden",position : "absolute"}} id="close" data-dismiss="modal">&close;</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default ChoosePlayer;