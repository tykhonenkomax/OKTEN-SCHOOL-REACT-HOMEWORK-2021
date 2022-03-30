
import './App.css';
import {useEffect, useState} from "react";
import UserComponents from "./myFolder/components/Users/UserComponents";
import {getUsers} from "./myFolder/DirtyСode/DirtyCode";



function App() {

let [x,y]=useState([])


useEffect(()=>{
getUsers().then(value => y([...value]));
},[])

  return (
    <div>
        {
            x.map(value => <UserComponents key={value.id} item={value}/>)
        }
    </div>
  );
}

export default App;
