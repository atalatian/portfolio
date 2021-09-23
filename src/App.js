import React, {useEffect, useRef} from "react";
import './App.css';
import Introduce from "./components/introduce";
import '../src/styles/styles.css';
import '../src/styles/styles2.css';
import '../src/styles/styles3.css';
import '../src/styles/styles4.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./components/projects";
import { makeStyles } from '@material-ui/core/styles';
import Navigation from "./components/navigation/navigation";
import MyStepper from "./components/stepper";
import Skills from './components/skills';


const useStyles = makeStyles((theme) => ({
    app:{
        backgroundColor: '#cf3476',
    },
}));

const sections = [
    {section: <Introduce/>, title: "Introduce"},
    {section: <Skills/>, title: "Skills"},
    {section: <Projects/>, title: "Projects"},
]

function App() {
    const classes = useStyles();

    useEffect(()=>{
        console.log(sections[0].section)
    }, [])

    return (
        <React.Fragment>
            <div id='app' className={`App ${classes.app}`}>
                <Navigation/>
                <MyStepper/>
                <Introduce/>
                <Skills/>
                <Projects/>
            </div>
        </React.Fragment>
    );
}

export default App;
