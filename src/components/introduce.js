import React from "react"
import CoralPinkWhite from '../images/coral-pink-white.png'
import { makeStyles } from '@material-ui/styles';
import { Squircle } from 'react-ios-corners';
import Typist from 'react-typist';
import "react-typist/dist/Typist.css";

const useStyles = makeStyles({
    introduce: {
        backgroundColor: '#cf3476',
    },
    section1:{
        color: "white",
    },
    mark: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        color: 'white',
    },
    fullStackText: {
        color: `#72deb0`,
    },
    circle: {
        width: `${1}rem`,
        height: `${1}rem`,
        backgroundColor: `white`,
    },
    title: {
        color: "white",
    }
});





export default function Introduce(props){
    const classes = useStyles();

    return(
        <React.Fragment>
            <div id={`about`} className={``}>
                <div className={`d-flex justify-content-center ` +
                `align-items-center flex-column flex-xl-row ${classes.section1} text-center`}>
                    <div className={`m-3 m-xl-5 mw-100 flex-shrink-0`}>
                        <Squircle>
                            <img className={`img-fluid`} src={CoralPinkWhite} alt="my_image"/>
                        </Squircle>
                    </div>
                    <div className={`m-3 m-xl-5 mw-100`}>
                        <p className={`display-3`}>I'm Amir Hossein Talatian</p>
                        <div className={`display-6 mb-3 ${classes.fullStackText}`}>
                            <Typist>
                                I'm a Full-Stack developer
                            </Typist>
                        </div>
                        <p className={`lead lh-lg text-center`}>
                            <mark className={classes.mark}>
                                I'm currently studying computer
                                engineering at Azad university south tehran branch,<br/>
                                my main focus is Artificial intelligence,<br/> but I chose
                                web development for entering this industry
                                because it's straightforward to learn and perform.
                            </mark>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}