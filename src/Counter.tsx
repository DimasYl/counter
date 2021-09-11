import React from "react";
import './App.css'
import style from './Counter.module.css'

type CounterPropsType = {
    value: number
    inc: () => void
    dec: () => void
    reset: () => void
    min: number
    max: number
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    return (
        <div className={style.counter}>
            <div className={style.pole}>
                <div className={props.value === props.max ? 'red' : 'number'}>{props.value}</div>
            </div>
            <div className={style.table}>
                <button onClick={props.inc} disabled={props.value === props.max}>inc</button>
                <button onClick={props.dec} disabled={props.value === props.min}>dec</button>
                <button onClick={props.reset} className='' disabled={props.value === props.min}>reset</button>
            </div>
        </div>
    )
}
