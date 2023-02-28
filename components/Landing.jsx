import { Karla } from '@next/font/google'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Header from './Header'

const karla = Karla({ subsets: ['latin'] })

const Landing = ({ setMenuOpen }) => {
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
        <div className="landing flex flex-col">
            <Header setMenuOpen={setMenuOpen} />

            <div className="landing-body mt-20 h-full flex py-10 flex-col flex-1 justify-around">
                <div className="flex justify-center">
                    <h1 className="text-center lg:text-9xl text-3xl landing-brand-text">IMERSIVE</h1>
                </div>
                <div className="flex justify-center">
                    <div className="landing-video-bg p-10">
                        <div className="bubble-btns lg:block hidden relative">
                            <Link href={"/contact"} className="bubble-btn text-lg absolute text-center" >
                                <p>
                                    CONTACT
                                </p>
                            </Link>
                            <Link href={"/"} className="bubble-btn text-lg absolute text-center" >
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
                        <video src="/landing.mp4" autoPlay muted id="landing-video" controlsList="nodownload"></video>
                        {/* <iframe className='pointer-events-none' src="https://player.vimeo.com/video/798898118?h=4d5c51ab46&autoplay=1&loop=1&title=0&byline=0&portrait=0&sidedock=0&transparent=0&muted=1" width="1200" height="675" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
                    </div>
                </div>
                <p className={`landing-brand-desc text-lg lg:ml-20 text-center lg:text-left px-10 lg:px-0 ${karla.className} font-light`}>We help you navigate new frontiers in customer engagement. At Immerse, we build immersive virtual experiences that connect with audiences that matter the most to your business.</p>
            </div>
        </div>
    )
}

export default Landing