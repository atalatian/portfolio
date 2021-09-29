import React, {useEffect, useState} from "react";
import './navigation.css';
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';
import {NavButton} from "react-svg-buttons";
import useMediaQuery from '@mui/material/useMediaQuery';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import separateWords from "../separateWords";
import capitalizeEachWord from "../capitalizeEachWord";


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

    number: {
        overflow: "hidden",
        zIndex: -1,
    }
});

const navItems = [
    {title: 'about', address: '#about', icon: null},
    {title: 'skills', address: '#skills', icon: null},
    {title: 'projects', address: '#projects', icon: null},
    {title: 'instagram', address: 'https://www.instagram.com/ah_talatian/',
        icon: <InstagramIcon sx={{fontSize: 30}}/>},
    {title: 'github', address: 'https://github.com/atalatian',
        icon: <GitHubIcon sx={{fontSize: 30}}/>},
    {title: 'linkedin', address: 'https://www.linkedin.com/in/amir-hossein-talatian-b7a05a190/',
        icon: <LinkedInIcon sx={{fontSize: 30}}/>},
]


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

    const renderNavItems = () => {
        return navItems.map((item)=>{
            let child = (item.icon ? item.icon : capitalizeEachWord(separateWords(item.title)));
            let target = (item.icon ? `_blank` : `_self`);
            return(
                <li className={`nav-item p-${minItemPadding} p-xl-${itemPadding} d-flex 
                    align-items-center justify-content-center`}>
                    <a className={`nav-link p-0 ${classes.color}`} target={target}
                       href={`${item.address}`}>{child}</a>
                </li>
            );
        })
    }

    return (
        <React.Fragment>
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
                            {renderNavItems()}
                            <li className={`nav-item p-${minItemPadding} p-xl-${itemPadding} d-flex 
                    align-items-center justify-content-center display-6 fs-4`}>
                                <a className={`nav-link p-0 ${classes.color}`} href={`#`}>FA</a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </Paper>
        </React.Fragment>
    );
}