import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { Provider } from './context/books';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);


root.render(
    // Use BookContext to share value within <App>
    // 5 can be replaced by object or array in the future
    <Provider>
        <App />
    </Provider>
)



