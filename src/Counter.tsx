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
    remember: boolean
}

export const Counter: React.FC<CounterPropsType> = (props) => {

    function entryField() {
        if (props.min < 0 || props.max <= props.min ){
            return <div className={style.err}> Incorrect value </div>
        } else if(!props.remember){
            return <div className={style.message}>Enter value and press 'set'</div>
        }else {

            return  <div className={props.value === props.max ? 'red' : 'number'}>{props.value}</div>
        }

    }

    return (
        <div className={style.counter}>
            <div className={style.pole}>
                {/*{ props.min >= 0 && props.max > props.min*/}
                {/*    ? <div className={props.value === props.max ? 'red' : 'number'}>{props.value}</div>*/}
                {/*    : <div className={style.err}> Incorrect value </div>*/}
                {/*}*/}
                {entryField()}
            </div>
            {props.min >= 0 && props.min < props.max
                ? <div className={style.table}>

                    <button onClick={props.inc} disabled={props.value === props.max}>inc</button>
                    <button onClick={props.dec} disabled={props.value === props.min}>dec</button>
                    <button onClick={props.reset}  disabled={props.value === props.min}>reset</button>
                </div>
                : <div className={style.table}>
                    <button onClick={props.inc} disabled>inc</button>
                    <button onClick={props.dec} disabled>dec</button>
                    <button onClick={props.reset} disabled>reset</button>
                </div>
            }

        </div>
    )
}
