import React, { useState } from 'react'
import './boxContainer.css';

const BoxContainer = ({ className, children }) => {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <div className={toggle ? '' : 'hidden'}>
                <div className={`box ${className}`}>
                    {children}
                </div>
            </div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    )
}

export default BoxContainer