import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css'
import CounterApp from './screens/useState/CounterApp';
import ArrayState from './screens/useState/ArrayState';

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <>
            {/* <App /> */}
            {/* <CounterApp /> */}
            <ArrayState />
        </>

    </React.StrictMode>
);