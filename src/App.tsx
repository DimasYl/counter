import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import CounterSettings from "./CounterSettings";

function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(10)
    const [value, setValue] = useState(minValue)
    const [remember, setRemember] = useState(false)


    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        setValue(value - 1)
    }
    const reset = () => {
        setValue(minValue)
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem("minValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMinValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("minValue", JSON.stringify(minValue))
    }, [minValue])
    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setMaxValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])


    return (
        <div className='container'>
            <CounterSettings
                max={maxValue}
                min={minValue}
                setMin={setMinValue}
                setMax={setMaxValue}
                setValue={setValue}
                remember={remember}
                setRemember={setRemember}
            />
            <Counter value={value}
                     inc={increment}
                     dec={decrement}
                     reset={reset}
                     min={minValue}
                     max={maxValue}
                     remember={remember}
            />

        </div>
    )
}

export default App;
