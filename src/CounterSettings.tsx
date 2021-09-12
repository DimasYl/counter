import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import './App.css'
import style from './CounterSettings.module.css'

type CounterSettingsPropsType = {
    min: number
    max: number
    setMax: (max: number) => void
    setMin: Dispatch<SetStateAction<number>>
    setValue: Dispatch<SetStateAction<number>>
    remember: boolean
    setRemember: (remember: boolean) => void
}

export const CounterSettings:
    React.FC<CounterSettingsPropsType> = ({max, min, setMax, setMin, setValue, remember,setRemember}) => {

    const onChangeMaxValue = (e:  ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
    }
    const onChangeMinValue = (e:  ChangeEvent<HTMLInputElement>) => {
        setMin(+e.currentTarget.value)

    }
    const onSet = () => {
        setMin(min)
        setMax(max)
        setValue(min)
        setRemember(!remember)
    }
    const onClickInputValue = () => {
        setRemember(false)
    }
    return (
        <div className={style.settings}>
            <div className={style.pole}>
                <p>Min value - <input type='number' onClick={onClickInputValue} className={min < 0 || min >= max ? style.redError : ''}  value={min} onChange={onChangeMinValue}/></p>
                <p>Max value - <input type='number' onClick={onClickInputValue} className={min >= max ? style.redError : ''} value={max} onChange={onChangeMaxValue}/></p>
            </div>
            <div className={style.set}>
                <button disabled={min < 0 || min >= max || remember} onClick={onSet}>SET</button>
            </div>
        </div>
    )
}
export default CounterSettings;