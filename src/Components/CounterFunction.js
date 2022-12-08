import React from 'react'
import { useState } from 'react'

function CounterFunction() {
    const [counter, setCounter] = useState(0)

    function incrementCounter() {
        setCounter(counter + 1)
    }
    function decrementFunction() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    function setToZero() {
        setCounter(counter => counter = 0)

    }
    return (
        <div style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto", marginTop: "25px", width: "400px", backgroundColor: "grey", border: "10px solid black", borderRadius: "30px" }}>
            <header className="App-header">
                <h1 style={{ textTransform: "uppercase", padding: "20px" }}>Counter Application</h1>
                <h2 style={{ textAlign: "center" }}><span>{counter}</span></h2>
                <div style={{ marginLeft: "auto", marginRight: "auto", padding: "20px" }}>
                    <button style={{ backgroundColor: "black", padding: "10px", color: "white", border: "5px", margin: "10px" }} onClick={incrementCounter}>increase</button>
                    <button style={{ backgroundColor: "black", padding: "10px", color: "white", border: "5px", margin: "10px" }} onClick={decrementFunction}>decrease</button>
                    <button style={{ backgroundColor: "black", padding: "10px", color: "white", border: "5px", margin: "10px" }} onClick={setToZero}>Reset</button>
                </div>
            </header>
        </div>
    )
}

export default CounterFunction