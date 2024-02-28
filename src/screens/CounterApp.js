import React, { useState } from 'react';
import './counterApp.css';

export const CounterApp = () => {
    // let count = 0;

    const [count, setCount] = useState(0)


    const increase = () => {
        // count++;
        setCount(prevCount => prevCount + 1)
    }
    const decrease = () => {
        // count--;
        setCount(prevCount => prevCount - 1)
    }

    return (
        <>
            <div>CounterApp</div>
            <div className="box">
                <button className='add' onClick={increase}>Increase</button>
                <p>Count: {count}</p>
                <button className='sub' onClick={decrease}>Decrease</button>
            </div>
        </>
    )
}
