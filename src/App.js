import logo from './logo.svg';
import './App.css';
import './myFolder/components/userComponents'
import {useEffect, useState} from "react";

function App() {
let [x,y]=useState([])
useEffect(()=> {

  fetch('https://jsonplaceholder.typicode.com/users')
      .then(value => value.json())
      .then(value => {
        y([...value])
      });

},[])

  return (
    <div>
      {
        x.map(value => <userComponents key={value} items={value}/> )
      }
    </div>
  );
}

export default App;
