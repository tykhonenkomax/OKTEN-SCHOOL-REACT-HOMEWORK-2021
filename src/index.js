import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";



function reducer (state=0,action) {
    switch (action.type){
        case 'INC':
            console.log(action.payload);
            return state=state+action.payload;

        case 'DEC':
            return state=state-action.payload;
        case 'RESET':
            return state=action.payload;

        default:
            return state;
    }


}


let store= createStore(reducer);
console.log(store.getState());
store.dispatch({type:'', payload: "!"})

ReactDOM.render(
    <React.StrictMode>

        <Provider store={store}>
        <App />
        </Provider>

    </React.StrictMode>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
