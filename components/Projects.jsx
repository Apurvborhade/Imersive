import gsap from 'gsap'
import React, { useEffect } from 'react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from 'next/image'
import { storyblokEditable } from '@storyblok/react'
const myLoader = ({ src, width, quality }) => {
    // https://images.unsplash.com/photo-
    return `https://images.unsplash.com/photo-${src}`
}
const Projects = ({blok}) => {
    const cursorBlendOff = (e) => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.add("blendoff")
    }
    const cursorBlendOn = (e) => {
        const cursor = document.querySelector(".cursor");
        cursor.classList.remove("blendoff")
    }
    useEffect(() => {
        if (window.screen.width > 1200) {

            gsap.to(".projects", {
                scrollTrigger: {
                    trigger: ".projects-wrapper",
                    start: "top top",
                    end: "+=4000 center",
                    scrub: true,
                    pin: true,
                },
                yPercent: -70,
            })
        }


    }, [])

    return (
        <div {...storyblokEditable(blok)} className='projects-wrapper grid lg:grid-cols-2 grid-cols-1 lg:mt-36 mt-20 relative' id='projects'>
            <div className=' items-center projects p-10 flex flex-col gap-2'>
                <video onMouseMove={cursorBlendOff} onMouseLeave={cursorBlendOn} src="/landing.mp4" autoPlay loop muted></video>
                <video onMouseMove={cursorBlendOff} onMouseLeave={cursorBlendOn} src="/MAS-Fashion-Jacket.mp4" autoPlay loop muted></video>
                <video onMouseMove={cursorBlendOff} onMouseLeave={cursorBlendOn} src="/Banner-MAS.mp4.mp4" autoPlay loop muted></video>
                <video onMouseMove={cursorBlendOff} onMouseLeave={cursorBlendOn} src="/MAS-BLCK-Card-Mint.mp4" autoPlay loop muted></video>
            </div>
            <div className='projects-info mb-10 lg:absolute lg:bottom-0 lg:right-0 lg:p-10'>
                <p className='lg:text-6xl text-4xl px-10 lg:px-0 lg:text-left text-center'>WE TAKE GREAT PRIDE IN THE WORK WE DO</p>
            </div>
        </div>
    )
}

export default Projects