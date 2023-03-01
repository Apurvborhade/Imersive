import gsap from 'gsap'
import React, { useEffect } from 'react'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from 'next/image'
const myLoader = ({ src, width, quality }) => {
    // https://images.unsplash.com/photo-
    return `https://images.unsplash.com/photo-${src}`
}
const Projects = () => {

    useEffect(() => {
        if (window.screen.width > 1200) {

            gsap.to(".projects", {
                scrollTrigger: {
                    trigger: ".projects-wrapper",
                    start: "top top",
                    end:"+=4000 center",
                    scrub: true,
                    pin: true,
                },
                yPercent:-70,
            })
        }


    }, [])

    return (
        <div className='projects-wrapper grid lg:grid-cols-2 grid-cols-1 lg:mt-36 relative' id='projects'>
            <div className=' items-center projects p-10 flex flex-col gap-2'>
            <video src="/landing.mp4" autoPlay muted id="landing-video"></video>
            <video src="/Mas-Black-Shoe.mp4" autoPlay muted id="landing-video"></video>
            <video src="/Banner-MAS.mp4.mp4" autoPlay muted id="landing-video"></video>
            <video src="/MAS-BLCK-Card-Mint.mp4" autoPlay muted id="landing-video"></video>

                {/* <iframe src="https://player.vimeo.com/video/798896249?h=5fb46e8c9a&loop=1&title=0&byline=0&portrait=0&sidedock=0&transparent=0" width="500" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <iframe src="https://player.vimeo.com/video/798899250?h=5fb46e8c9a&loop=1&title=0&byline=0&portrait=0&sidedock=0&transparent=0" width="500" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <iframe src="https://player.vimeo.com/video/798903430?h=5fb46e8c9a&loop=1&title=0&byline=0&portrait=0&sidedock=0&transparent=0" width="500" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <iframe src="https://player.vimeo.com/video/798901003?h=5fb46e8c9a&loop=1&title=0&byline=0&portrait=0&sidedock=0&transparent=0" width="500" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                <iframe src="https://player.vimeo.com/video/798898118?h=5fb46e8c9a&loop=1&title=0&byline=0&portrait=0&sidedock=0&transparent=0" width="500" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
            </div>
            <div className='projects-info mb-10 lg:absolute lg:bottom-0 lg:right-0 lg:p-10'>
                <p className='lg:text-6xl text-4xl px-10 lg:px-0 lg:text-left text-center'>WE TAKE GREAT PRIDE IN THE WORK WE DO</p>
            </div>
        </div>
    )
}

export default Projects