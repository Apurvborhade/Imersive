import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    const serviceWrapper = useRef()
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

        if (window.screen.width > 800) {
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
                xPercent: -200,
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
            serviceWrapper.current.addEventListener("mousemove",() => {
                cursor.classList.add("service")
                cursor.innerHTML = "SERVICES"
            })
            serviceWrapper.current.addEventListener("mouseleave",() => {
                cursor.classList.remove("service")
                cursor.innerHTML = ""
            })
        }
    }, [])

    return (
        <section className="service-section border-t border-white/[.2] flex lg:flex-row flex-col" id="services">
            <div className="services-landing-wrapper flex justify-between flex-col relative items-center p-5 lg:p-0">
                <div className="service-title w-full mt-5 lg:mr-16">
                    <p className="text-end test-text">{`{what we do}`}</p>
                </div>
                <div className="services-tagline-wrapper flex flex-col relative">
                    <div className="layout-circle absolute"></div>
                    <div className="overflow-hidden">
                        <div className="service-cta-text-wrapper">
                            <span className="lg:text-9xl text-2xl uppercase" id="service-cta-text">EMPOWERING BRANDS</span>
                        </div>
                    </div>
                    <div className="ml-auto overflow-hidden">
                        <div className="ml-auto service-cta-text-wrapper">
                            <span className="lg:text-7xl text-xl uppercase ">with great cx</span>
                        </div>
                    </div>
                </div>
                <div className="services-desc mb-5 ">
                    <p
                        className="services-tagline text-right absolute lg:bottom-32 lg:right-32 right-10 text-xl bottom-16 ">
                        With our expertise and top-of-the-line technology, businesses can enjoy a competitive edge and
                        stay relevant in the evolving digital landscape.
                    </p>
                </div>
            </div>
            <div className="services-body lg:flex-row flex-col flex justify-center items-center gap-12" ref={serviceWrapper}>
                <div className="service-wrapper relative">
                    <div className="service-title-overlay">
                        <p className="lg:text-2xl mb-3 text-sm">BLOCK-CHAIN SOLUTIONS</p>
                    </div>
                    <div className="relative service-">
                        <div className="service-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1666816943035-15c29931e975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" id="service-image" />
                        </div>
                        <div
                            className="service-desc-overlay absolute text-white text-center w-full h-full flex justify-center items-center top-0 bg-black/[.5]">
                            <p className="service-desc lg:text-lg text-sm">
                                Our blockchain solutions at Imersive provide state-of-the-art decentralized platforms
                                that deliver unparalleled security and transparency, allowing our clients to unlock new
                                business potential and drive growth.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service-wrapper relative">
                    <div className="service-title-overlay">
                        <p className="lg:text-2xl mb-3 text-sm">Augmented Reality + Social AR</p>
                    </div>
                    <div className="relative service-">
                        <div className="service-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80" alt="" id="service-image" />
                        </div>
                        <div
                            className="service-desc-overlay absolute text-white text-center w-full h-full flex justify-center items-center top-0 bg-black/[.5]">
                            <p className="service-desc lg:text-lg text-sm">
                                Imersive's Augmented Reality and Social AR solutions provide innovative ways to boost brand engagement and create dynamic, interactive experiences that captivate audiences.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service-wrapper relative">
                    <div className="service-title-overlay">
                        <p className="lg:text-2xl mb-3 text-sm">Smart Contract  Development</p>
                    </div>
                    <div className="relative service-">
                        <div className="service-image-wrapper">
                            <img src="https://images.unsplash.com/photo-1673427147403-9e87c4fe8a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" alt="" id="service-image" />
                        </div>
                        <div
                            className="service-desc-overlay absolute text-white text-center w-full h-full flex justify-center items-center top-0 bg-black/[.5]">
                            <p className="service-desc lg:text-lg text-sm">
                                Our smart contract development services at Imersive offer reliable and automated solutions for streamlining business processes and facilitating trust in digital transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Services