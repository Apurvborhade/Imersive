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
const Services = ({blok}) => {

    const serviceWrapper = useRef()
    
    const serviceBodyShiftCalc = () => {
        return (serviceWrapper.current.clientWidth) + (services.length * 240) + (services.length * 48) + 48
    }
    
    useEffect(() => {
        // TEXT REVEAL ANIM
        gsap.from(".service-cta-text-wrapper", {
            scrollTrigger: {
                trigger: ".service-section",
                start: "-=100px center",
                scrub: false,
                markers: false,
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 150,
            duration: 1,
            rotation: 45, transformOrigin: "left 100%"
        });

        if (window.screen.width > 1000) {
            // SLIDE SERVICES
            const tweenanim = gsap.to("#services", {
                scrollTrigger: {
                    trigger: "#services",
                    markers: false,
                    start: "top top",
                    end: "+=4000px",
                    pin: true,
                    markers: false,
                    scrub: true
                },
                x:-serviceBodyShiftCalc(),
                // xPercent: -(((services.length - 1) * 100) - ((385/3840) * 100)),
                ease: "none",
                delay: 2
            })

            // CHANGE BODY BACKGROUND COLOR  
            gsap.to("body", {
                scrollTrigger: {
                    containerAnimation: tweenanim,
                    trigger: ".services-body",
                    start: "left center",
                    toggleActions: "play none none reverse"
                },
                backgroundColor: "#fff",
                color: "#000"
            })
            gsap.to("header", {
                scrollTrigger: {
                    containerAnimation: tweenanim,
                    trigger: ".services-body",
                    start: "left center",
                    toggleActions: "play none none reverse"
                },
                backgroundColor: "#fff",
                color: "#fff",
                borderBottomColor: "#0003"
            })
            gsap.to(".menu-btn", {
                scrollTrigger: {
                    containerAnimation: tweenanim,
                    trigger: ".services-body",
                    start: "left center",
                    toggleActions: "play none none reverse"
                },
                borderLeftColor: "#fff3"
            })

            // RESIZE SERVICE IMAGES
            gsap.to(".service-image-wrapper", {
                scrollTrigger: {
                    containerAnimation: tweenanim,
                    trigger: ".service-image-wrapper",
                    start: "300px center",
                    toggleActions: "play none none reverse"
                },
                className: "service-image-wrapper-full",
                ease: "none",
            })

            // CURSOR
            const cursor = document.querySelector(".cursor")
            serviceWrapper.current.addEventListener("mousemove", () => {
                cursor.classList.add("service")
                cursor.innerHTML = "SERVICES"
            })
            serviceWrapper.current.addEventListener("mouseleave", () => {
                cursor.classList.remove("service")
                cursor.innerHTML = ""
            })
        }
        if (window.screen.width < 800) {
            gsap.to("body", {
                scrollTrigger: {
                    trigger: ".services-body",
                    start: "top center",
                    markers: false,
                    toggleActions: "play none none reverse"
                },
                backgroundColor: "#fff",
                color: "#000"
            })
        }

        const serviceImages = document.querySelectorAll(".service-image-wrapper img");
        const serviceDesc = document.querySelectorAll(".service-desc");

        serviceImages.forEach((image) => {
            const overlayText = image.parentElement.parentElement.querySelector(".service-desc");
            const overlay = image.parentElement.parentElement.querySelector(".service-desc-overlay");

            gsap.to(image, {
                scrollTrigger: {
                    trigger: image,

                    start: "+=100px center",

                },
                css: { width: "100%" },
                duration: 1
            })
            gsap.from(overlayText, {
                scrollTrigger: {
                    trigger: image,

                    start: "+=100px center",

                },
                opacity: 0,
                duration: 1,
                delay: 0.4,
            })
            gsap.from(overlay, {
                scrollTrigger: {
                    trigger: image,

                    start: "+=100px center",

                },
                opacity: 0,
                duration: 1,
                delay: 0.7,
            })
        })
    }, [])

    return (
        <section {...storyblokEditable(blok)} className="service-section border-t border-white/[.2] flex lg:flex-row flex-col" id="services">
            <div className="services-landing-wrapper flex justify-between flex-col relative items-center p-5 lg:p-0">
                <div className="service-title w-full mt-5 lg:mr-16">
                    <p className="text-end test-text">{`{what we do}`}</p>
                </div>
                <div className="services-tagline-wrapper mb-20 lg:mb-0 flex flex-col relative">
                    <div className="layout-circle absolute"></div>
                    <div className="overflow-hidden">
                        <div className="service-cta-text-wrapper">
                            <span className="lg:text-9xl text-2xl uppercase" id="service-cta-text">{blok.PrimaryHeadline}</span>
                        </div>
                    </div>
                    <div className="ml-auto overflow-hidden">
                        <div className="ml-auto service-cta-text-wrapper">
                            <span className="lg:text-7xl text-xl uppercase ">{blok.SecondaryHeadline}</span>
                        </div>
                    </div>
                </div>
                <div className="services-desc mb-5 ">
                    <p
                        className="services-tagline text-right absolute lg:bottom-32 lg:right-32 right-10 text-xl bottom-16 ">
                        {blok.servicedesc}
                    </p>
                </div>
            </div>
            <div className="services-body lg:flex-row flex-col flex lg:justify-start justify-center lg:pl-96 items-center gap-12" ref={serviceWrapper}>
                {services.map((service) => (
                    <div className="service-wrapper relative" key={service.id}>
                        <div className="service-title-overlay">
                            <p className="lg:text-2xl mb-3 text-sm uppercase">{service.name}</p>
                        </div>
                        <div className="relative service-">
                            <div className="service-image-wrapper">
                                <Image
                                    loader={myLoader}
                                    src={service.image}
                                    alt={service.name}
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div
                                className="service-desc-overlay absolute text-white text-center w-full h-full flex justify-center items-center top-0 bg-black/[.5]">
                                <p className="service-desc lg:text-lg text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}


export default Services
