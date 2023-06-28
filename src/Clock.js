import ChildClock from "./ChildClock";
import React, {useState} from 'react';

function Clock() {
    const data = new Date()
    const [greet, setGreet] = React.useState('Hi');
    return (
        <div>
            <h1>A state value: {greet}</h1>
            <ChildClock message={data.toLocaleTimeString()}/>
        </div>
    );

}

export default Clock;