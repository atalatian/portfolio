import React, {useRef} from "react";
import { makeStyles } from '@material-ui/styles';
import "./navigationMobile.css";
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Navigation from "../navigation/navigation";
import Fab from '@mui/material/Fab';

const useStyles = makeStyles({
});


export default function NavigationMobile() {

    const classes = useStyles();

    const input = useRef();

    return (
        <React.Fragment>
            <div className={`navigationMobile`}>
                <input type="checkbox" id={`active`} ref={input}/>
                <Fab className={`menu-btn m-1 m-sm-4`}
                     onClick={()=>{input.current.checked = !input.current.checked}}
                     color="primary" aria-label="menu">
                    <MenuIcon sx={{ fontSize: 30 }} />
                </Fab>
                <div className="wrapper">
                    <nav>
                        <ul className="menuItems m-0 p-0">
                            <li className={`m-3`}>
                                <a href="#" className={`display-5`} data-item='About'>
                                    About
                                </a>
                            </li>
                            <li className={`m-3`}>
                                <a href="#" className={`display-5`} data-item='Projects'>
                                    Projects
                                </a>
                            </li>
                            <li className={`m-3`}>
                                <a href="#" className={`display-5`} data-item='Contacts'>
                                    Contacts
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    );
}