import React, {useState} from "react";
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
import Skills from './components/skills';
import Container from '@mui/material/Container';
import {Switch, Route, HashRouter } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    circle:{
        width: `${1}rem`,
        height: `${1}rem`,
        backgroundColor: `white`
    },

    color: {
        color: `white`,
    },

    span: {
        width: `${1}px`,
        height: `${100}%`,
        backgroundColor: `white`,
    },

    left:{
        left: `${1}px`,
    },

    leftRtl:{
        left: `${35}px`,
    },

    right:{
        right: `${35}px`,
    },

    rightRtl:{
        right: `${1}px`,
    },
}));

const sections = [
    {component: <Introduce/>, title: "About"},
    {component: <Skills/>, title: "Skills"},
    {component: <Projects/>, title: "Projects"},
]

function App() {
    const classes = useStyles();
    const [rtl, setRtl] = useState(false);

    const renderSections = () => {
        return sections.map((section, index)=>{
            return(
                <div className={`d-flex flex-column-reverse
                 ${rtl ? 'flex-xl-row-reverse' : 'flex-xl-row'} 
                align-items-center`}>
                    {
                        sections[index + 1] ? <div className={`border-bottom border-white`}>
                            {section.component}
                        </div> : section.component
                    }
                    <div className={`d-flex align-self-stretch justify-content-end
                     ${rtl ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`d-flex align-self-center
                         align-items-end position-relative p-4 ${rtl ? classes.rightRtl : classes.left}
                          ${rtl ? 'flex-row-reverse' : 'flex-row'}`}>
                            <h1 className={`display-6 fs-6 m-1 ${classes.color}`}>{section.title}</h1>
                            <div className={`border rounded-circle m-1 ${classes.circle}`}>
                            </div>
                        </div>
                        <div className={`position-relative ${classes.span}
                         ${rtl ? classes.leftRtl: classes.right}`}></div>
                    </div>
                </div>
            );
        });
    }

    return (
        <React.Fragment>
            <HashRouter>
                <Switch>
                    <Route path="/">
                        <div id='app' className={`App`}>
                            <Container maxWidth="xl">
                                <Navigation/>
                                {renderSections()}
                            </Container>
                        </div>
                    </Route>
                </Switch>
            </HashRouter>
        </React.Fragment>
    );
}

export default App;
