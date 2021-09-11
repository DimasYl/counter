import React from "react";
import './App.css'
import style from './CounterSettings.module.css'

type CounterSettingsPropsType = {
    min: number
    max: number
}

export const CounterSettings: React.FC<CounterSettingsPropsType> = ({max, min}) => {
    return (
        <div className={style.settings}>
            <div className={style.pole}>
                <p>Min value - {min}</p>
                <p>Max value - {max}</p>
            </div>
            <div className={style.set}>
                <button>SET</button>
            </div>
        </div>
    )
}
export default CounterSettings;