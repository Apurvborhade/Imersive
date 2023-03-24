import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from 'next/image';
import { services } from 'data/services';
import { storyblokEditable } from '@storyblok/react';

import { RiArrowDownSLine } from 'react-icons/ri'

gsap.registerPlugin(ScrollTrigger);


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
        gsap.to(".menu-wrapper", {
            scrollTrigger: {
                trigger: ".service-section",
                start: "left center",
                toggleActions: "play none none reverse"
            },
            backgroundColor: "#000",
            color: "#fff",
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

    const serviceBtn = (e) => {
        e.preventDefault();
        const filterOptionsList = e.target;
        let infoElem;
        if (filterOptionsList.classList.contains("service-trigger")) {
            infoElem = filterOptionsList.nextElementSibling;
        } else {
            infoElem = filterOptionsList.parentElement.nextElementSibling;
        }

        infoElem.classList.toggle("is-visible")
        if (infoElem.classList.contains("is-visible")) {
            infoElem.style.maxHeight = infoElem.scrollHeight + "px"
        } else {
            infoElem.style.maxHeight = 0 + "px"
        }

    }
    return (
        <section {...storyblokEditable(blok)} className="service-section py-40 flex justify-center px-10" id="services">
            <div>
                <p className='text-xl'>solutions</p>
                <div className='cursor-pointer service-option  mt-3 pt-4  border-t  overflow-hidden' >
                    <div className='service pt-3 w-full' >
                        <div className='lg:text-5xl text-2xl flex justify-between items-center service-trigger pb-4' ref={slideDiv} onClick={serviceBtn} >
                            <p className='montserrat font-medium '>BLOCK CHAIN DEVELOPMENT</p>
                            <RiArrowDownSLine size={40} className="pointer-events-none" />
                        </div>
                        <div className='lg:text-3xl text-xl flex justify-between service-detail' >
                            <p className='poppins lg:w-mid'>A corporate and marine travel online platform that brings travel coordinators, travelers and travel advisors together.</p>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer service-option  mt-3 pt-4  border-t  overflow-hidden' >
                    <div className='service pt-3 w-full' >
                        <div className='lg:text-5xl text-2xl flex justify-between items-center service-trigger pb-4' ref={slideDiv} onClick={serviceBtn} >
                            <p className='montserrat font-medium '>AR VR DEVELOPMENT</p>
                            <RiArrowDownSLine size={40} className="pointer-events-none" />
                        </div>
                        <div className='lg:text-3xl text-xl flex justify-between service-detail ' >
                            <p className='poppins lg:w-mid'>A corporate and marine travel online platform that brings travel coordinators, travelers and travel advisors together.</p>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer service-option  mt-3 pt-4  border-t  overflow-hidden' >
                    <div className='service pt-3 w-full' >
                        <div className='lg:text-5xl text-2xl flex justify-between items-center service-trigger pb-4' ref={slideDiv} onClick={serviceBtn} >
                            <p className='montserrat font-medium '>METAVERSE SPACES</p>
                            <RiArrowDownSLine size={40} className="pointer-events-none" />
                        </div>
                        <div className='lg:text-3xl text-xl flex justify-between service-detail ' >
                            <p className='poppins lg:w-mid'>A corporate and marine travel online platform that brings travel coordinators, travelers and travel advisors together.</p>
                        </div>
                    </div>
                </div>
                <div className='cursor-pointer service-option  mt-3 pt-4  border-t  overflow-hidden' >
                    <div className='service pt-3 w-full' >
                        <div className='lg:text-5xl text-2xl flex justify-between items-center service-trigger pb-4' ref={slideDiv} onClick={serviceBtn} >
                            <p className='montserrat font-medium '>BLOCK CHAIN DEVELOPMENT</p>
                            <RiArrowDownSLine size={40} className="pointer-events-none" />
                        </div>
                        <div className='lg:text-3xl text-xl flex justify-between service-detail ' >
                            <p className='poppins lg:w-mid'>A corporate and marine travel online platform that brings travel coordinators, travelers and travel advisors together.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


export default Services
