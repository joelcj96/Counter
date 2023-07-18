import React, { useState } from 'react';
import './Counter.css';

function Counter() {
    const [counter, setCounter] = useState(0);

    const setDecrease = () => {
        setCounter(counter - 1);
    }

    const setIncrease = () => {
        setCounter(counter + 1);
    }

    const setReset = () => {
        setCounter(0); // Reset the counter to zero
    }

    return (
        <div className='main'>
            <div className='container'>
                <h1 className='title'>Counter</h1>
                <h1 className='counter'>{counter}</h1>
                <button className='increase' onClick={setIncrease}>Increase</button>
                <button className='decrease' onClick={setDecrease}>Decrease</button>
                <button className='reset' onClick={setReset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
