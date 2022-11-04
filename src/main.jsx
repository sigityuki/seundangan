import React from 'react';
import {createRoot} from "react-dom/client"
import App from "./App.js"
import "./style.css.js"

const root = document.querySelector("#root")

createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
) 