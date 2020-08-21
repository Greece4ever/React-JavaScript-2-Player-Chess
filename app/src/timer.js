import React,{useEffect,useState} from 'react';

const ZeroOneBoolean = (input) => {
    switch(input)
    {
        case true:
            return 1;
        case false:
            return 0;
    }
}


const Timer = (props) => {
    const [time,setTime] = useState(60);

    useEffect(() => {
        const interval =setInterval(() => {
            if(time==0){props.setTurn(prev => ZeroOneBoolean(!prev))}
            setTime(prev => prev-1)
        },1000)
        return () => clearInterval(interval)
    })

    useEffect(() => {
        setTime(60);
    },[props.turn])


    return (
        <div style={{"backgroundColor" : "#889093",border : "5px solid rgb(79, 80, 86)",width : "50%"}}>
            <div style={{fontFamily : "fantasy",color : "#fff",fontSize : "50px"}}>
                {new Date(time * 1000).toISOString().substr(14, 5)}
            </div>
        </div>
    )
}


export default Timer;