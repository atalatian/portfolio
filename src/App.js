import './App.css';
import Introduce from "./components/introduce";
import '../src/styles/styles.css';
import '../src/styles/styles2.css';
import '../src/styles/styles3.css';
import '../src/styles/styles4.css';
import {useState, useEffect} from "react";
import BackgroundText from "./components/backgroundText";
import Projects from "./components/projects";

function App() {

    return (
        <div id='app' className='App'>
            <BackgroundText/>
            <Introduce/>
            <Projects/>
        </div>
    );
}

export default App;
