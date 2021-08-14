import React from "react"
import CoralPinkWhite from '../images/coral-pink-white.png'
import Logo from "./Logo";

export default function Introduce(){
    return(
        <React.Fragment>
            <div id="introduce" className='d-flex justify-content-evenly align-items-center
             primaryBackground introduce'>
                <div className='goUp'>
                    <h1 className="primaryForeground display-3 introducePrimaryText">
                        I'm Amir Hossein Talatian</h1>
                    <h1 className="thirdForeground display-6 introduceSecondaryText">
                        A Full-Stack Developer</h1>
                </div>
                <div className='photoFrame goUp'>
                    <img width="100%" src={CoralPinkWhite} alt="my_photo"/>
                </div>
            </div>
        </React.Fragment>
    );
}