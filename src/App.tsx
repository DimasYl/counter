import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {
    const [value, setValue] = useState(0)
    const inc = () => {
        setValue(value + 1)
    }
    const reset = () => {
        setValue(0)
    }
    return (
        <Counter value={value}
                 inc={inc}
                 reset={reset}
        />
    )
}

export default App;
