import React, { useEffect, useState } from "react"
import { makeStyles } from '@material-ui/styles';




export default function BackgroundText(){

    const [rotateClass, setRotateClass] = useState('');

    useEffect(() => {
        let sectionHeight1 = document.getElementById('introduce').clientHeight;
        window.onscroll = function (){
            if (window.pageYOffset >= sectionHeight1){
                setRotateClass('backgroundTextSpin');
            }else if (window.pageYOffset <= sectionHeight1){
                setRotateClass('backgroundTextSpinBackwards')
            }
        }
    }, []);


    return(
        <React.Fragment>
            <div className='scene'>
                <div className={"backgroundTextLayer1 " + rotateClass}>
                    <div className='backgroundTextLayer2'>
                        <div className='rect first'>About</div>
                        <div className='rect second'>Portfolio</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}