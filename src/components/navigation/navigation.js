import React, {useEffect, useState} from "react";
import './navigation.css';
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {MorphIcon, NavButton} from "react-svg-buttons";
import useMediaQuery from '@mui/material/useMediaQuery';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Draggable from 'react-draggable';


const useStyles = makeStyles({
    fullWidth: {
        width: `100%`,
    },

    fullHeight: {
        height: `100%`,
    },

    zeroWidth: {
        width: 0,
    },

    zeroHeight: {
        height: 0,
    },

    color: {
        color: `black`,
    },
});


export default function Navigation() {

    const itemPadding = 4;
    const minItemPadding = 2;

    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [direction, setDirection] = useState();
    const xl = useMediaQuery('(min-width:1200px)');
    const [sizingClass, setSizingClass] = useState(classes.fullWidth);



    useEffect(()=>{
        if (xl){
            if (open){
                setDirection('left')
                setSizingClass(classes.fullWidth);
            }else {
                setDirection('right');
                setSizingClass(classes.zeroWidth);
            }
        }else {
            if (open){
                setDirection('up');
                setSizingClass(classes.fullHeight);
            }else {
                setDirection('down');
                setSizingClass(classes.zeroHeight);
            }
        }
    }, [open, xl])

    const handleMenuClick = (e) => {
        setOpen(!open)
    }

    return (
        <React.Fragment>
            <Draggable>
                <Paper elevation={10} className={`position-fixed m-3 navigation`}>
                    <nav className="d-flex p-0 m-0 ">
                        <ul className="d-flex p-0 m-0 flex-column flex-xl-row
                     justify-content-start align-items-center">
                            <li className={`nav-item p-${minItemPadding} p-xl-${minItemPadding} d-flex 
                        align-items-center justify-content-center`}>
                                <div className={`menuIcon`} onClick={handleMenuClick}>
                                    <NavButton direction={direction} opened={false}/>
                                </div>
                            </li>
                            <div className={`d-flex flex-column flex-xl-row
                         overflow-hidden display-6 fs-3 ${sizingClass}`}>
                                <li className={`nav-item p-${minItemPadding} p-xl-${itemPadding} d-flex 
                        align-items-center justify-content-center`}>
                                    <a className={`nav-link p-0 ${classes.color}`} href="#">About</a>
                                </li>
                                <li className={`nav-item p-${minItemPadding} p-xl-${itemPadding} d-flex 
                        align-items-center justify-content-center`}>
                                    <a className={`nav-link p-0 ${classes.color}`} href="#">Projects</a>
                                </li>
                                <li className={`nav-item p-${minItemPadding} p-xl-${itemPadding} d-flex 
                        align-items-center justify-content-center`}>
                                    <a className={`nav-link p-0 ${classes.color}`}
                                       href="#"><InstagramIcon sx={{fontSize: 30}}/></a>
                                </li>
                                <li className={`nav-item p-${minItemPadding} p-xl-${itemPadding} d-flex 
                        align-items-center justify-content-center`}>
                                    <a className={`nav-link p-0 ${classes.color}`}
                                       href="#"><GitHubIcon sx={{fontSize: 30}}/></a>
                                </li>
                                <li className={`nav-item p-${minItemPadding} p-xl-${itemPadding} d-flex 
                        align-items-center justify-content-center`}>
                                    <a className={`nav-link p-0 ${classes.color}`}
                                       href="#"><LinkedInIcon sx={{fontSize: 30}}/></a>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </Paper>
            </Draggable>
        </React.Fragment>
    );
}