import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/main.scss";

var root = document.getElementById("root");

function renderComp() {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        root
    );
}

renderComp();
