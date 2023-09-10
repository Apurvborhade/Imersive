import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'

import { storyblokEditable } from '@storyblok/react'

const Projects = ({ blok }) => {

    const projects = useRef()
    const [speed, setSpeed] = useState()
    const projectsShiftCalc = () => {
        return (projects.current.clientHeight - projects.current.lastElementChild.clientHeight)
    }

    
    
    
    useEffect(() => {
        setSpeed(40)
        if (window.screen.width > 1200) {
            gsap.to(".projects", {
                scrollTrigger: {
                    trigger: ".projects-wrapper",
                    start: "top top",
                    end: `+=${4000 * 0.5}`,
                    scrub: true,
                    markers:false,
                    pin: true,
                },
                y: -projectsShiftCalc(),
            })
        }


    }, [])

    return (
        <div {...storyblokEditable(blok)} className='projects-wrapper grid lg:grid-cols-2 grid-cols-1 lg:mt-36 mt-20 relative' id='projects'>
            <div className=' items-center projects p-10 flex flex-col gap-2' ref={projects}>
                {blok.projectsmedia.map((video) => (
                    <video src={video.filename} autoPlay loop muted className='project-video'></video>
                ))}
            </div>
            <div className='projects-info mb-10 lg:absolute lg:bottom-0 lg:right-0 lg:p-10'>
                <p className='lg:text-6xl text-4xl px-10 lg:px-0 lg:text-left text-center'>WE TAKE GREAT PRIDE IN THE WORK WE DO</p>
            </div>
        </div>
    )
}

export default Projects