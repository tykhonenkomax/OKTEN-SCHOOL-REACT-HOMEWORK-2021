import {useState} from "react";

function CounterComponents(props) {
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
<button onClick={plus}>increment</button>
<button onClick={minus}>increment</button>
<button onClick={reset}>increment</button>
        </div>
    );
}
export default CounterComponents;