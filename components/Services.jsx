import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from 'next/image';
import { services } from 'data/services';
import { storyblokEditable } from '@storyblok/react';


gsap.registerPlugin(ScrollTrigger);


const myLoader = ({ src, width, quality }) => {
    return `https://images.unsplash.com/photo-${src}`
}
const Services = ({ blok }) => {

    useEffect(() => {

        // CHANGE BODY BACKGROUND COLOR  
        gsap.to("body", {
            scrollTrigger: {
                trigger: ".service-section",
                start: "left center",
                toggleActions: "play none none reverse"
            },
            backgroundColor: "#fff",
            color: "#000"
        })
        gsap.to("header", {
            scrollTrigger: {
                trigger: ".service-section",
                start: "left center",
                toggleActions: "play none none reverse"
            },
            backgroundColor: "#fff",
            color: "#fff",
            borderBottomColor: "#0003"
        })
        gsap.to(".menu-btn", {
            scrollTrigger: {
                trigger: ".service-section",
                start: "left center",
                toggleActions: "play none none reverse"
            },
            borderLeftColor: "#fff3"
        })
    }, [])
    const slideDiv = useRef()

    const tl = gsap.timeline()
    const textAnimUp = (e) => {
        console.log(e.target.parentElement)
        tl.to(slideDiv.current,{
            y:-100,
            ease:"power1.out",
            duration:1
        })
    }
    const textAnimDown = (e) => {
        tl.to(slideDiv.current,{
            y:0,
            ease:"power4.out",
            duration:1
        })
    }
    return (
        <section {...storyblokEditable(blok)} className="service-section flex justify-center py-20" id="services">
            <div>
                <p>solutions</p>
                <div className='cursor-pointer service-option  border-t mt-3 pt-4 overflow-hidden' onMouseEnter={textAnimUp} onMouseLeave={() => textAnimDown()}>
                    <div className='service pt-3' ref={slideDiv}>
                        <div className='lg:text-5xl text-2xl flex justify-between'  >
                            <p className='montserrat'>LANDING PAGE</p>
                            <p className='montserrat'>$1000</p>
                        </div>
                        <div className='lg:text-3xl text-xl flex justify-between service-detail mt-10' >
                            <p className='montserrat'>A corporate and marine travel online platform that brings travel coordinators, travelers and travel advisors together.</p>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer service-option  border-t mt-3 pt-4 overflow-hidden' onMouseEnter={ textAnimUp} onMouseLeave={() => textAnimDown()}>
                    <div className='service pt-3' ref={slideDiv}>
                        <div className='lg:text-5xl text-2xl flex justify-between'  >
                            <p className='montserrat'>LANDING PAGE</p>
                            <p className='montserrat'>$1000</p>
                        </div>
                        <div className='lg:text-3xl text-xl flex justify-between service-detail mt-10' >
                            <p className='montserrat'>A corporate and marine travel online platform that brings travel coordinators, travelers and travel advisors together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Services
