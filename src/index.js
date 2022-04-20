import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

export const MyContext=createContext(null)
const value = {name:'max',age:35}

ReactDOM.render(
  <React.StrictMode>

      <MyContext.Provider value={value}>

   <BrowserRouter>
       <App />
   </BrowserRouter>

      </MyContext.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
