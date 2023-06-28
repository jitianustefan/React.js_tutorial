import { useRef, useState } from "react";
import "../App.css";





function Calculator(){
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const culoare = {
        color: 'red',
        border: '2px solid red',
        borderRadius: '10px',
        padding: 20 ,
        margin: windowSize.current[1]*0.5
    }

    const plus = (e) => {
        e.preventDefault();
        setResult((result) => result + Number
        (inputRef.current.value));
    }

    const minus = (e) => {
        e.preventDefault();
        setResult((result) => result - Number
        (inputRef.current.value));
    }

    const times = (e) => {
        e.preventDefault();
        setResult((result) => result * Number
        (inputRef.current.value));
    }

    const divide = (e) => {
        e.preventDefault();
        setResult((result) => result / Number
        (inputRef.current.value));
    }

    const resetInut = (e) => {
        e.preventDefault();
        inputRef.current.value = 0;
    }

    const resetResult = (e) => {
        e.preventDefault();
        setResult((prevVal) => prevVal * 0);
    }

    
    return (
        <div>
            <div className="App">
                <h1>Simplest Working Calcuator</h1>
            </div>
            <form>
                <p style={culoare}ref={resultRef}>{result}</p>
                <input
                pattern="[0-9]"
                ref={inputRef}
                type="number"
                placeholder="Type a number"
                />
                <button onClick={plus}>add</button>
                <button onClick={minus}>minus</button>
                <button onClick={times}>times</button>
                <button onClick={divide}>divide</button>
                <button onClick={resetInut}>resetInut</button>
                <button onClick={resetResult}>resetResult</button>
            </form>
        </div>
    );
    
}
export default Calculator;