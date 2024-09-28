import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const Context = createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
<Context.Provider value={"ganesh"}>
    <App />
    </Context.Provider>
 
  </React.StrictMode>
);

export {Context}


