import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"
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
        gsap.to(".slide-button", {
            scrollTrigger: {
                trigger: ".service-section",
                start: "left center",
                toggleClass:'slide-button-bg-change',
                toggleActions: "play none none reverse"
            },
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
        let arrow;
        if (filterOptionsList.classList.contains("service-trigger")) {
            infoElem = filterOptionsList.nextElementSibling;
            arrow = filterOptionsList.lastElementChild
            
        } else {
            infoElem = filterOptionsList.parentElement.nextElementSibling;
            arrow = filterOptionsList.parentElement.lastElementChild
        }

        infoElem.classList.toggle("is-visible")
        
        if (infoElem.classList.contains("is-visible")) {
            infoElem.style.maxHeight = infoElem.scrollHeight + "px"
            arrow.style.rotate = "180deg"
        } else {
            infoElem.style.maxHeight = 0 + "px"
            arrow.style.rotate = "0deg"
        }

    }
    return (
        <section {...storyblokEditable(blok)} className="service-section py-40 flex justify-center px-10" id="services">
            <div>
                <p className='text-xl'>solutions</p>

                {blok.services.map((service) => (
                    <div className='cursor-pointer service-option  mt-3 pt-4  border-t  overflow-hidden' key={service._uid}>
                        <div className='service pt-3 w-full' >
                            <div className='lg:text-5xl text-2xl flex justify-between items-center service-trigger pb-4' ref={slideDiv} onClick={serviceBtn} >
                                <p className='montserrat font-medium '>{service.title}</p>
                                <RiArrowDownSLine size={40} className="pointer-events-none solution-arrow" />
                            </div>
                            <div className='lg:text-2xl text-xl flex justify-between service-detail' >
                                <p className='poppins lg:w-mid'>{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}


export default Services
