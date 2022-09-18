import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import ReactDOM from "react-dom/client";
import App from "./App";

export let render = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateValuePost={store.updateValuePost.bind(store)}/>
        </React.StrictMode>
    );
}

render(store.getState())
store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
