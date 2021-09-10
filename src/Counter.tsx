import React, {useState} from "react";
import './App.css'

type CounterPropsType = {
    value: number
    inc: () => void
    reset: () => void
}

export function Counter(props:CounterPropsType){
    return(
        <div className='counter'>
            <div className='pole'> <div className={props.value===5?'red': ''}>{props.value}</div></div>
            <button onClick={props.inc}   disabled={props.value ===5}>inc</button>
            <button onClick={props.reset} className='' disabled={props.value===0}>reset</button>
            </div>
    )
}
