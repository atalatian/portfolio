import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Flippy, {BackSide, FrontSide} from "react-flippy";
import capitalizeEachWord from "./capitalizeEachWord";
import html from "../images/logos/html.png";
import css from "../images/logos/css.png";
import javascript from "../images/logos/javascript.png";
import jquery from "../images/logos/jquery.png";
import react from "../images/logos/react.png";
import python from "../images/logos/python.png";
import django from "../images/logos/django.png";
import nodeJs from "../images/logos/nodeJs.png";
import java from "../images/logos/java.png";
import bootstrap from "../images/logos/bootstrap.png";
import materialUi from "../images/logos/materialUi.png";

const useStyles = makeStyles({
    logoWrap:{
        maxWidth: `${100}px`,
    },
});

const skillsFrontEnd = [
    {name: 'html', image: html},
    {name: 'css', image: css},
    {name: 'javascript', image: javascript},
    {name: 'jquery', image: jquery},
    {name: 'react', image: react},
    {name: 'python', image: python},
    {name: 'django', image: django},
    {name: 'node js', image: nodeJs},
    {name: 'java', image: java},
    {name: 'Bootstrap', image: bootstrap},
    {name: 'material ui', image: materialUi},
]

const sideFlippy = {
    display: `grid`,
    placeItems: `center`,
    backgroundColor: `white`,
    borderRadius: `${10}px`,
}

export default function Skills(){
    const classes = useStyles();

    return(
        <div id={`skills`} className={``}>
            <div className={`d-flex flex-wrap align-items-center justify-content-center`}>
                {
                    skillsFrontEnd.map((skill)=>{
                        return(
                            <div className={`mw-100 m-5`}>
                                <Flippy flipOnHover={true}
                                        flipOnClick={false}>
                                    <FrontSide style={sideFlippy}>
                                        <div className={classes.logoWrap}>
                                            <img className={`img-fluid`}
                                                 src={skill.image} alt={skill.name}/>
                                        </div>
                                    </FrontSide>
                                    <BackSide style={sideFlippy}>
                                        <h1 className='display-6 fs-5'>
                                            {capitalizeEachWord(skill.name)}
                                        </h1>
                                    </BackSide>
                                </Flippy>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}