import React, {useState} from 'react';
import { useEffect } from 'react';
import '../styles2/Timer.css';

export default function Timer(){
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(()=>{
        let intervalo = null

        if(timerOn){
            intervalo = setInterval(()=>{
                setTime(prevTime => prevTime + 10)
            }, 10)
        }else{
            clearInterval(intervalo)
        }

        return () => clearInterval(intervalo)

    }, [timerOn] )

    return (
        <>
        <h1>Timer</h1>
        <div>
            <span>{("0"+ Math.floor((time/60000) % 60)).slice(-2)} mins </span>
            <span>{("0"+ Math.floor((time/1000) % 60)).slice(-2)} secs </span>
        </div>
        <div className='btn-timer'>
            <button className='btn-start' onClick={() => setTimerOn(true)}>Start</button>
            <button className='btn-stop' onClick={() => setTimerOn(false)}>Stop</button>
            <button className='btn-reset' onClick={() => setTime(0)}>Reset</button>
        </div>
        
        </>

    )
};