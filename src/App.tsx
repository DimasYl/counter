import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import CounterSettings from "./CounterSettings";

function App() {
    const [minValue, setMinValue] = useState(3)
    const [maxValue, setMaxValue] = useState(10)
    const [value, setValue] = useState(minValue)
    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        setValue(value - 1)
    }
    const reset = () => {
        setValue(minValue)
    }
    return (
        <div className='container'>
            <CounterSettings max={maxValue} min={minValue}/>
            <Counter value={value}
                     inc={increment}
                     dec={decrement}
                     reset={reset}
                     min={minValue}
                     max={maxValue}
            />

        </div>
    )
}

export default App;
