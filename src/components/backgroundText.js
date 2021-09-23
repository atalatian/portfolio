import React, { useEffect, useState } from "react"




export default function BackgroundText(props){
    const [rotateClass, setRotateClass] = useState('');


    useEffect(() => {
        window.onscroll = function (){
            let introduce = props.introduceRef;
            let introduceHeight = introduce.offsetTop + introduce.offsetHeight;
            if (window.scrollY > introduceHeight){
                setRotateClass('backgroundTextSpin');
            }else if (window.scrollY <= introduceHeight){
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
                        <div className='rect second'>Projects</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}