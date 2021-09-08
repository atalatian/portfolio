import React, {useEffect, useState, useLayoutEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import socialMedia1 from '../images/socialMedia/socialMedia1.png';
import socialMedia2 from '../images/socialMedia/socialMedia2.png';
import socialMedia3 from '../images/socialMedia/socialMedia3.png';
import socialMedia4 from '../images/socialMedia/socialMedia4.png';
import healthcare1 from '../images/healthcare/healthcare1.png';
import healthcare2 from '../images/healthcare/healthcare2.png';
import healthcare3 from '../images/healthcare/healthcare3.png';
import healthcare4 from '../images/healthcare/healthcare4.png';
import know1 from '../images/know/know1.png';
import know2 from '../images/know/know2.png';
import know3 from '../images/know/know3.png';
import know4 from '../images/know/know4.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


let projectsData = [
    {
        name: 'Social Media',
        tags: ['html', 'css', 'javascript', 'jquery', 'python', 'django', 'bootstrap'],
        description: 'You can create profile, send posts, search other users,' +
            ' follow them, like their post, and comment under their posts.' +
            ' Created by django and bootstrap',
        images: [socialMedia1, socialMedia2, socialMedia3, socialMedia4],
    },
    {
        name: 'Healthcare',
        tags: ['html', 'css', 'javascript', 'react', 'materialUi'],
        description: 'Application for heart health information,' +
            ' created by react and material-ui' +
            ' and recharts library for charts.' +
            ' charts made responsive from scratch.',
        images: [healthcare1, healthcare2, healthcare3, healthcare4],
    },
    {
        name: 'Know',
        tags: ['html', 'css', 'javascript', 'react'],
        description: 'No Bootstrap! No Material-Ui! Frontend template for a restaurant,' +
            ' created with react, css and javascript',
        images: [know1, know2, know3, know4],
    },
]


export default function Projects(props){
    const [projects, setProjects] = useState();
    const [tags, setTags] = useState();

    useLayoutEffect(()=>{
        projectsData.forEach((project)=>{
            project.render = true;
        });

        let tagsStart = []
        let init;
        projectsData.forEach((project) => {
            project.tags.forEach((tag) => {
                init = false;
                tagsStart.forEach(tagStart => {
                    if (tag === tagStart){
                        init = true;
                    }
                });
                if (!init){
                    tagsStart.push(tag);
                }
            })
        })

        setTags(tagsStart);
        setProjects(projectsData);
    }, [])

    useEffect(()=>{
    }, []);

    const createNewState = (state) =>{
        const forMutable = (state, previous, index) => {
            if (state.constructor === Array){
                if (previous){
                    previous[index] = [...state];
                }
                state.forEach((item, index)=>{
                    forMutable(item, state, index);
                })
            }else if (state.constructor === Object){
                if (previous){
                    previous[index] = {...state}
                }
                for (let prop in state){
                    if (state.hasOwnProperty(prop)){
                        forMutable(state[prop], state, prop);
                    }
                }
            }
        }

        let newState
        if (state.constructor === Array){
            newState = [...state];
            forMutable(newState, null, null);
        }else if (state.constructor === Object){
            newState = {...state};
            forMutable(newState, null, null);
        }else {
            return state;
        }
        return newState;
    }

    const tagClick = (e ,tag) =>{
        let elements = document.querySelectorAll('.project-tags-wrapper');
        elements.forEach(element => {
            if (element.classList.contains('tagBeforeHundredWidth')){
                element.classList.remove('tagBeforeHundredWidth')
            }
        });
        e.currentTarget.classList.add('tagBeforeHundredWidth');

        let newProjects = createNewState(projects);

        if (tag === 'all'){
            newProjects.forEach((project)=>{
                project.render = true;
            });
        }else {
            newProjects.forEach((project)=>{
                project.render = false;
                project.tags.forEach((projectTag)=>{
                    if (projectTag === tag){
                        project.render = true;
                    }
                });
            })
        }

        setProjects(newProjects);
    }

    const renderTags = (tags) => {
        if (tags){
            return tags.map((tag)=>{
                return(
                    <div className='project-tag'>
                        <div onClick={(e) => {tagClick(e, tag)}}
                             className='project-tags-wrapper p-1'>
                            <h2 className='display-6'>#{tag}</h2></div>
                    </div>
                )
            })
        }
    }

    const renderProjectCards = (projects) => {
        if (projects){
            return projects.map((project, index) => {
                    if (project.render){
                        return (
                            <div key={index} className='project-card border'>
                                <h1 className='display-6'>{project.name}</h1>
                            </div>
                        );
                    }
                return null;
            });
        }
        return null;
    }

    const renderProjects = (projects) => {

        if (projects){
            return projects.map((project, index) => {
                if (project.render){
                    return(
                        <div className='project' key={index}>
                            <div className='project-main'>
                                <div className='project-image'>
                                    <Carousel width='100%' autoPlay infiniteLoop
                                              showArrows={false}
                                              showIndicators={false}
                                              showStatus={false}
                                              showThumbs={false}>
                                        {
                                            project.images.map((image) => {
                                                return(
                                                    <div>
                                                        <img src={image} alt={project.name}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Carousel>
                                </div>
                                <div className='project-title'>
                                    <h1 className='display-1'>{project.name}</h1>
                                </div>
                                <div className='project-description'>
                                    <p className='lead text-decoration-underline'>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                            <div className='project-actions'>
                                <div className='project-live'>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} size='4x'/>
                                    <h1 className='display-6'>Live</h1>
                                </div>
                                <div className='project-github'>
                                    <FontAwesomeIcon icon={faGithub} size='4x'/>
                                    <h1 className='display-6'>Github</h1>
                                </div>
                            </div>
                        </div>
                    );
                }
                return null;
            })
        }

    }

    return(
        <React.Fragment>
            <div className='project-tags'>
                <div className='project-tag'>
                    <div onClick={(e) => {tagClick(e, 'all')}}
                         className='project-tags-wrapper tagBeforeHundredWidth p-1'>
                        <h2 className='display-6'>All</h2></div>
                </div>
                {renderTags(tags)}
            </div>
            <div className='project-cards'>
                {renderProjectCards(projects)}
            </div>
            <div className='projects'>
                {renderProjects(projects)}
            </div>
        </React.Fragment>
    );
}