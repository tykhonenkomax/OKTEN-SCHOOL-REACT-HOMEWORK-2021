import {useState} from "react";

function CounterComponents() {


    let [counter, setCounter]=useState(0)

    let plus = () =>{
        setCounter(++counter)
    };
    let minus = () =>{
        setCounter(--counter)
    };
    let reset = () =>{
        setCounter(0)
    };



    return(

        <div>

<h1>Counter - ${counter}</h1>
<button onClick={plus}>PLUS</button> <br/>
<button onClick={minus}>MINUS</button> <br/>
<button onClick={reset}>RESET</button> <br/>
        </div>
    );
}
export default CounterComponents;