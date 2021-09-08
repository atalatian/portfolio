import React, { useEffect, useState } from "react"
import CoralPinkWhite from '../images/coral-pink-white.png'
import duck from '../images/duck.png';
import gear from '../images/gear.png';


export default function Introduce(){

    const [render, setRender] = useState(0);
    const [fullStackCoverClass, setFullStackCoverClass] = useState('');
    const [imAnimateClass, setImAnimateClass] = useState('');
    const [amirAnimateClass, setAmirAnimateClass] = useState('');
    const [hosseinAnimateClass, setHosseinAnimateClass] = useState('');
    const [talatianAnimateClass, setTalatianAnimateClass] = useState('');
    const [gearRotate, setGearRotate] = useState(0);

    useEffect(() => {
        let counter = render;
        let topWindow = window.scrollY;
        let bottomWindow = window.innerHeight + window.scrollY;
        let im = document.getElementById('im');
        let imBottom = im.offsetTop + im.offsetHeight;
        let imTop = im.offsetTop;
        let amir = document.getElementById('amir');
        let amirBottom = amir.offsetTop + amir.offsetHeight;
        let amirTop = amir.offsetTop;
        let hossein = document.getElementById('hossein');
        let hosseinBottom = hossein.offsetTop + hossein.offsetHeight;
        let hosseinTop = hossein.offsetTop;
        let talatian = document.getElementById('talatian');
        let talatianBottom = talatian.offsetTop + talatian.offsetHeight;
        let talatianTop = talatian.offsetTop;
        let section2 = document.getElementById('section-2');
        let section2Top = section2.offsetTop;

        if (counter === 0){
            if (topWindow < imBottom && bottomWindow > imTop){
                setImAnimateClass('animateName');
            }else if (topWindow >= imBottom || bottomWindow <= imTop){
                setImAnimateClass('')
            }

            if (topWindow < amirBottom && bottomWindow > amirTop){
                setAmirAnimateClass('animateName');
            }else if (topWindow >= amirBottom || bottomWindow <= amirTop){
                setAmirAnimateClass('')
            }

            if (topWindow < hosseinBottom && bottomWindow > hosseinTop){
                setHosseinAnimateClass('animateName');
            }else if (topWindow >= hosseinBottom || bottomWindow <= hosseinTop){
                setHosseinAnimateClass('')
            }

            if (topWindow < talatianBottom && bottomWindow > talatianTop){
                setTalatianAnimateClass('animateName');
            }else if (topWindow >= talatianBottom || bottomWindow <= talatianTop){
                setTalatianAnimateClass('')
            }
        }

        function gettingScrolled(e){
            counter += 1;
            setRender(counter);

            if (topWindow < imBottom && bottomWindow > imTop){
                setImAnimateClass('animateName');
            }else if (topWindow >= imBottom || bottomWindow <= imTop){
                setImAnimateClass('')
            }

            if (topWindow < amirBottom && bottomWindow > amirTop){
                setAmirAnimateClass('animateName');
            }else if (topWindow >= amirBottom || bottomWindow <= amirTop){
                setAmirAnimateClass('')
            }

            if (topWindow < hosseinBottom && bottomWindow > hosseinTop){
                setHosseinAnimateClass('animateName');
            }else if (topWindow >= hosseinBottom || bottomWindow <= hosseinTop){
                setHosseinAnimateClass('')
            }

            if (topWindow < talatianBottom && bottomWindow > talatianTop){
                setTalatianAnimateClass('animateName');
            }else if (topWindow >= talatianBottom || bottomWindow <= talatianTop){
                setTalatianAnimateClass('')
            }

            if (bottomWindow >= section2Top){
                let gearRotation = topWindow/2;
                setGearRotate(gearRotation)
            }

        }

        window.addEventListener('scroll', gettingScrolled);
        return ()=> window.removeEventListener('scroll', gettingScrolled);
    }, [render,])

    return(
        <React.Fragment>
            <div id='introduce'>
                <div id='landing' className='primaryBackground introduce'>
                    <div className='introduceTextWrapper'>
                        <div id='im' className={'name im ' + imAnimateClass}>
                            <h1 className='display-1 introduceText'>I'm</h1>
                        </div>
                        <div id='amir' className={'name amir ' + amirAnimateClass}>
                            <h1 className='display-1 introduceText'>Amir</h1>
                        </div>
                        <div id='hossein' className={'name hossein ' + hosseinAnimateClass}>
                            <h1 className='display-1 introduceText'>Hossein</h1>
                        </div>
                        <div id='talatian' className={'name talatian ' + talatianAnimateClass}>
                            <h1 className='display-1 introduceText'>Talatian</h1>
                        </div>
                    </div>
                    <div className='photoFrame'>
                        <img width="100%" src={CoralPinkWhite} alt="my_photo"/>
                        <div className='fullStack'>
                            <h1 className='display-1'>I'm a Full-Stack Developer</h1>
                        </div>
                    </div>
                </div>
                <div id='section-2' className='section-2'>
                    <div className='section-2-wrapper'>
                        <div className='gears'>
                            <div className='gear1'
                                 style={{transform: 'rotateZ(' + gearRotate + 'deg)'}}>
                                <img width='100%' src={gear} alt="gear"/>
                            </div>
                            <div className='gear2'
                                 style={{transform: 'rotateZ(' + -gearRotate + 'deg)'}}>
                                <img width='100%' src={gear} alt="gear"/>
                            </div>
                        </div>
                        <div className='section-2-container'>
                            <div className='skills'>
                                <h1 className='display-1 mt-5'>Skills</h1>
                            </div>
                            <div className='end'>
                                <div className='frontEnd'>
                                    <h1 className='display-3'>Front End</h1>
                                    <div className='frontEndWrap'>
                                        <h1 className='display-6 me-5'>HTML</h1>
                                        <h1 className='display-6 me-5'>CSS</h1>
                                        <h1 className='display-6 me-5'>Javascript/Jquery/React</h1>
                                    </div>
                                </div>
                                <div className='backEnd'>
                                    <h1 className='display-3'>Back End</h1>
                                    <div className='backEndWrap'>
                                        <h1 className='display-6 me-5'>Python/Django</h1>
                                        <h1 className='display-6 me-5'>NodeJs/ExpressJs</h1>
                                    </div>
                                </div>
                                <div className='others'>
                                    <h1 className='display-3'>Others</h1>
                                    <div className='othersWrap'>
                                        <h1 className='display-6 me-5'>Java</h1>
                                        <h1 className='display-6 me-5'>Bootstrap</h1>
                                        <h1 className='display-6 me-5'>Material-Ui</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}