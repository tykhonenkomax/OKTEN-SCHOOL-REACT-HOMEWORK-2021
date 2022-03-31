
import './App.css';
import './myFolder/components/UserComponents'
import {useEffect, useState} from "react";
import UserComponents from "./myFolder/components/UserComponents";
import './myFolder/Users.css'

function App() {

let [x,y]=useState([])
let [a,b]=useState(null)



useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(value => value.json())
      .then(value => {
        y([...value]);
      });

},[])



    let search = (id)=> {
    let findedUser = x.find(value => value.id === id);
        console.log(findedUser);
        b(findedUser)

    };

  return (
    <div className={'wrap'}>
        <div className={'user-box'}>
      {
        x.map((value) => <UserComponents
            key={value.id}
            item={value}
            search = {search}/> )
      }
        </div>

        <div className={'single-user-box'}>
            {
                a && <h2>{a.id} - {a.username}</h2>
            }
        </div>

    </div>
  );
}

export default App;
