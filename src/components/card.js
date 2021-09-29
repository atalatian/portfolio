import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider, } from '@mui/material/styles';


const useStyles = makeStyles({

    images: {
        width: `${43}rem`,
    },

    left: {
        left: `${10}px`,
    },

    right: {
        right: `${10}px`,
    },

    top: {
        top: `${10}px`,
    },

    bottom: {
        bottom: `${10}px`,
    },

    zIndex1: {
        zIndex: 1,
    },

    zIndex2: {
        zIndex: 2,
    },

    paper: {
        overflow: `hidden`,
    },

    cardText: {
        maxWidth: `${10}rem`,
    },

    cardTextMobile: {
        maxWidth: `${40}rem`,
    },

    aHover: {
        "&:hover":{
            color: `white`,
        },
    }
});

const buttonTheme = createTheme({
    palette:{
        primary: {
            main: "#cf3476",
        },
    }
});

export default function Card(props){
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:1200px)');

    const handleClass = (type) => {
        switch (type){
            case 'lt':
                if (matches){
                    if (props.rtl){
                        return `${classes.right} ${classes.zIndex2}`;
                    }else {
                        return `${classes.left} ${classes.zIndex2}`;
                    }
                }else {
                    if (props.rtl){
                        return `${classes.bottom} ${classes.zIndex2}`;
                    }else {
                        return `${classes.top} ${classes.zIndex2}`;
                    }
                }
            case 'rb':
                if (matches){
                    if (props.rtl){
                        return `${classes.left} ${classes.zIndex1}`;
                    }else {
                        return `${classes.right} ${classes.zIndex1}`;
                    }
                }else {
                    if (props.rtl){
                        return `${classes.top} ${classes.zIndex1}`;
                    }else {
                        return `${classes.bottom} ${classes.zIndex1}`;
                    }
                }
        }
    }

    return(
        <div className={`d-flex flex-column ${props.rtl ? 'flex-xl-row-reverse' : 'flex-xl-row'} 
        mw-100 align-items-center mt-5 mb-5`}>
            <div className={`flex-shrink-0 mw-100 
            position-relative ${handleClass('lt')} ${classes.images}`}>
                <Paper elevation={6} className={`overflow-hidden border mw-100`}>
                    {props.carousel}
                </Paper>
            </div>
            <div className={`position-relative mw-100 ${handleClass('rb')}`}>
                <Paper elevation={3} className={`p-5`}>
                    <div>
                        <h1 className={`display-6 fs-2`}>{props.title}</h1>
                    </div>
                    <div className={`m-1 m-sm-2 ${matches ? classes.cardText : classes.cardTextMobile}`}>
                        {
                            props.descriptions.map((description)=>{
                                return(
                                    <React.Fragment>
                                        <p className={`display-6 fs-5 p-0 m-0`}>
                                            {description}
                                        </p><br/>
                                    </React.Fragment>
                                );
                            })
                        }
                    </div>
                    <div className={`d-flex flex-column flex-sm-row`}>
                        <div className={`m-1 m-sm-2`}>
                            <ThemeProvider theme={buttonTheme}>
                                <Button className={`${classes.aHover}`}
                                        href={props.liveLinks[props.index]}
                                        target={`_blank`}
                                        variant="contained" endIcon={<LaunchIcon/>}>
                                    Live
                                </Button>
                            </ThemeProvider>
                        </div>
                        <div className={`m-1 m-sm-2`}>
                            <ThemeProvider theme={buttonTheme}>
                                <Button className={`${classes.aHover}`}
                                        href={props.githubLinks[props.index]}
                                        target={`_blank`}
                                        variant="contained" endIcon={<GitHubIcon/>}>
                                    Github
                                </Button>
                            </ThemeProvider>
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    );
}
