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
        width: `${500}px`,
    },

    left: {
        left: `${10}px`,
        zIndex: 2,
    },

    right: {
        right: `${10}px`,
        zIndex: 1,
    },

    top: {
        top: `${10}px`,
        zIndex: 2,
    },

    bottom: {
        bottom: `${10}px`,
        zIndex: 1,
    },

    paper: {
        overflow: `hidden`,
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
    const matches = useMediaQuery('(min-width:992px)');

    return(
        <div className={`d-flex flex-column flex-lg-row mw-100 align-items-center m-5`}>
            <div className={`flex-shrink-0 mw-100 
            position-relative ${matches ? classes.left : classes.top} ${classes.images}`}>
                <Paper elevation={6} className={`overflow-hidden border`}>
                    {props.carousel}
                </Paper>
            </div>
            <div className={`position-relative mw-100 ${matches ? classes.right : classes.bottom}`}>
                <Paper elevation={3} className={`p-5`}>
                    <div>
                        <h1 className={`display-6 fs-1`}>{props.title}</h1>
                    </div>
                    <div className={`m-2 m-sm-3`}>
                        {
                            props.descriptions.map((description)=>{
                                return(
                                    <p className={`display-6 fs-4 lh-lg`}>
                                        <mark>
                                            {description}
                                        </mark><br/>
                                    </p>
                                );
                            })
                        }
                    </div>
                    <div className={`d-flex flex-column flex-sm-row`}>
                        <div className={`m-2 m-sm-3`}>
                            <ThemeProvider theme={buttonTheme}>
                                <Button variant="contained" endIcon={<LaunchIcon/>}>
                                    Live
                                </Button>
                            </ThemeProvider>
                        </div>
                        <div className={`m-2 m-sm-3`}>
                            <ThemeProvider theme={buttonTheme}>
                                <Button variant="contained" endIcon={<GitHubIcon/>}>
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
