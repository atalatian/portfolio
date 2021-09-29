import React, {useEffect, useState, useLayoutEffect} from "react";
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
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import capitalizeEachWord from "./capitalizeEachWord";
import separateWords from "./separateWords";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '../components/card';

let projectsData = [
    {
        name: 'socialMedia',
        tags: ['html', 'css', 'javascript', 'jquery', 'python', 'django', 'bootstrap'],
        descriptions: [
            `You can create profile, send posts, search other users,
             follow them, like their post, and comment under their posts.`,
            `Created by django and bootstrap`,
        ],
        images: [socialMedia1, socialMedia2, socialMedia3, socialMedia4],
    },
    {
        name: 'healthcare',
        tags: ['html', 'css', 'javascript', 'react', 'materialUi'],
        descriptions: [
            `Application for heart health information.`,
            `Created by react and material-ui and recharts library for charts.`,
            `Charts made responsive from scratch.`,
        ],
        images: [healthcare1, healthcare2, healthcare3, healthcare4],
    },
    {
        name: 'know',
        tags: ['html', 'css', 'javascript', 'react'],
        descriptions: [
            `No Bootstrap! No Material-Ui!`,
            `Frontend template for a restaurant.`,
            `Created with react, css and javascript.`,
        ],
        images: [know1, know2, know3, know4],
    },
]


const theme = createTheme({
    palette: {
        primary: {
            main: '#cf3476'
        },
    },

    overrides: {
        MuiFilledInput: {
            root: {
                backgroundColor: `rgba(${255}, ${255}, ${255}, ${1})`,
                "&.Mui-focused":{
                    backgroundColor: `rgba(${255}, ${255}, ${255}, ${1})`,
                },
                "&:hover":{
                    backgroundColor: `rgba(${255}, ${255}, ${255}, ${1}) !important`,
                }

            },
        },

        MuiInputLabel:{
            filled: {
                color: '#cf3476'
            }
        },

        MuiIconButton: {
            root: {
                color: '#cf3476',
            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    projects:{
        backgroundColor: '#cf3476',
    },

    autoComplete: {
        width: `${500}px`
    },
}));

const liveLinks = [
    'https://atalatian-social-media.herokuapp.com/logIn/',
    'https://atalatian.github.io/healthcare/#/',
    'https://atalatian.github.io/know/#/',
]

const githubLinks = [
    'https://github.com/atalatian/socialMedia',
    'https://github.com/atalatian/healthcare',
    'https://github.com/atalatian/know',
]


export default function Projects(props){
    const [projects, setProjects] = useState();
    const [tags, setTags] = useState();
    const classes = useStyles();

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

    const renderProjects = (projects) => {
        if (projects){
            return projects.map((project, index) => {
                if (project.render){
                    return(
                        <Card key={index} carousel={
                            <Carousel width={`fit-content`} autoPlay infiniteLoop
                                      showArrows={false}
                                      showIndicators={false}
                                      showStatus={false}
                                      showThumbs={false}>
                                {
                                    project.images.map((image) => {
                                        return(
                                            <div>
                                                <img className={`img-fluid`}
                                                     src={image} alt={project.name}/>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        }
                              title={capitalizeEachWord(separateWords(project.name))}
                              descriptions={project.descriptions}
                              rtl={false}
                              index={index}
                              liveLinks={liveLinks}
                              githubLinks={githubLinks}
                        />
                    );
                }
                return null;
            })
        }
    }

    const handleSearch = (e, value) => {
        console.log(value)
    }

    const renderSearch = () =>{
        if (tags){
            return(
                <ThemeProvider theme={theme}>
                    <Autocomplete
                        multiple
                        id="tags-filled"
                        onChange={handleSearch}
                        options={tags}
                        getOptionLabel={(option) => capitalizeEachWord(separateWords(option))}
                        filterSelectedOptions
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="outlined" label={capitalizeEachWord(separateWords(option))}
                                      {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="filled"
                                label="Search Tags"
                                placeholder="Tags"
                            />
                        )}
                    />
                </ThemeProvider>
            );
        }else {
            return null;
        }
    }

    return(
        <React.Fragment>
            <div id={`projects`} className={`mw-100`}>
                <div className={`d-flex align-items-start justify-content-center`}>
                    <div className={`d-flex flex-wrap align-items-center
                     justify-content-center mw-100`}>
                        {/*
                            <div className={`m-3 m-lg-5 ${classes.autoComplete}`}>
                                {renderSearch()}
                            </div>
                        */}
                        {renderProjects(projects)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

