
import './App.css';
import './myFolder/components/UserComponents'
import {useEffect, useState} from "react";
import UserComponents from "./myFolder/components/UserComponents";

function App() {

let [x,y]=useState([])

useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(value => value.json())
      .then(value => {
        y([...value]);
      });

},[])

    let xxx = ()=> {console.log('DONE')};

  return (
    <div>
      {
        x.map((value) => <UserComponents
            key={value.id}
            item={value}
            fatherFunction = {xxx}/> )
      }
    </div>
  );
}

export default App;
