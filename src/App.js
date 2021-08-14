import './App.css';
import Introduce from "./components/introduce";
import '../src/styles/styles.css';
import New from "./components/new";
import New2 from "./components/new2";
import Welcome from "./components/welcome";
import {useState, useEffect} from "react";
import Navbar from "./components/navbar";
import BackgroundText from "./components/backgroundText";
import Logo from "./components/Logo";

function App() {

    return (
        <div className="App">
            <BackgroundText/>
            <Introduce/>
        </div>
    );
}

export default App;
