import { Karla } from '@next/font/google'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

import { storyblokEditable } from "@storyblok/react";


const karla = Karla({ subsets: ['latin'] })

const Landing = ({ blok }) => {
    const bubble_btn = useRef([])
    useEffect(() => {
        bubble_btn.current = document.querySelectorAll('.bubble-btn')
        bubble_btn.current.forEach((btn) => {
            btn.addEventListener("mousemove", (e) => {
                var rect = btn.getBoundingClientRect();
                var x = (e.clientX - rect.left) / 10;
                var y = (e.clientY - rect.top) / 10;

                btn.firstElementChild.style.transform = `translate3d(${x}px,${y}px,0px)`
                btn.style.transform = `translate3d(${x}px,${y}px,0px)`
            })

            btn.addEventListener("mouseleave", () => {

                btn.firstElementChild.style.transform = `translate3d(${0}px,${0}px,0px)`
                btn.style.transform = `translate3d(${0}px,${0}px,0px)`
            })
        })
    }, [])



    return (
        <div className="landing flex flex-col" {...storyblokEditable(blok)}>

            <div className="landing-body mt-20 h-full flex py-10 flex-col flex-1 justify-around">
                <div className="flex justify-center">
                    <h1 className="text-center lg:text-9xl text-3xl landing-brand-text uppercase" >{blok.headline}</h1>
                </div>
                <div className="flex justify-center">
                    <div className="landing-video-bg p-10">
                        <div className="bubble-btns lg:block hidden relative">
                            <Link href={"/contact"} className="bubble-btn text-lg absolute text-center" >
                                <p>
                                    CONTACT
                                </p>
                            </Link>
                            <Link href={"/#projects"} className="bubble-btn text-lg absolute text-center" >
                                <p>
                                    PROJECTS
                                </p>
                            </Link>
                            <Link href={"/#about"} className="bubble-btn text-lg absolute text-center" >
                                <p>
                                    ABOUT
                                </p>
                            </Link>
                        </div>
                        <video src={blok.video.filename} autoPlay muted id="landing-video" loop controlsList="nodownload"></video>
                    </div>
                </div>
                <p className={`landing-brand-desc text-lg lg:ml-20 text-center lg:text-left px-10 lg:px-0 ${karla.className} font-light`}>{blok.branddescription}</p>
            </div>
        </div>


    )
}

export default Landing