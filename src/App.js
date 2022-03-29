
import './App.css';
import {useEffect, useState} from "react";
import UserComponents from "./myFolder/components/Users/UserComponents";



function App() {

  let[x,y]=useState([])

  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
  return response.json();
}).then((jsonResponse)=>{
  y([...jsonResponse])
})


  },[]);

  return (
    <div>
      {
        x.map(value => <UserComponents key={value} item={value}/>)
      }
    </div>
  );
}

export default App;
