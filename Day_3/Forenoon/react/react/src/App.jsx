import React from "react";
import "./App.css";
import Greeting from "./greeting";
import Home from "./home";
import Counter from "./counter";


function App() {
    return (
        <div className="app-centered">
            <Greeting name="Kavin" />
            <Home />
            <Counter />
        </div>
    );
}

export default App;