import logo from './logo.svg';
import './App.css';
import ComponentsUsers from "./myFolder/ComponentsUsers";
import {useState} from "react";

let users = [
    {name: 'anna', age: 29, status: false},
    {name: 'eva', age: 23, status: true},
    {name: 'emma', age: 3, status: true},
    {name: 'janna', age: 37, status: false},
    {name: 'jenya', age: 33, status: true},
    {name: 'dina', age: 70, status: false},
    {name: 'jorjitta', age: 43, status: true},
    {name: 'jenifer', age: 23, status: false},
    {name: 'inna', age: 34, status: true},
]

function App() {

    let [counter, setCounter] = useState(0)
let increment =()=> {
    counter++;
    setCounter(counter)

}
    let [x, y] = useState(users)
    let deleteUsers = () => {
        users.pop();
        y([...x]);
    }
    return (
        <div>

            <div>
                <div>
counter is {counter}
                    <button onClick={increment}>increment</button>

                </div>
            </div>


            {
                users.map((user, index) =>
                    <ComponentsUsers key={index}
                                     name={user.name}
                                     age={user.age}
                                     status={user.status}
                    />
                )
            }
            <button onClick={deleteUsers}>DELETE</button>
        </div>
    );
}

export default App;
