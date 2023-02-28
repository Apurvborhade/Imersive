import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'


const Menu = ({ menuOpen, setMenuOpen }) => {
    const menu = useRef()
    useEffect(() => {
        const menuLink = document.querySelectorAll(".menu-link");

        menuLink.forEach((link) => {
            link.addEventListener("mouseenter", () => {
                gsap.to(link.firstElementChild, {
                    yPercent: -50
                })
            })
            link.addEventListener("mouseleave", () => {
                gsap.to(link.firstElementChild, {
                    yPercent: 0
                })
            })
        })
    }, [])

   


    return (
        <div className={`menu-wrapper  ${menuOpen ? 'active' : ''} `} ref={menu}>
            <div className="close-btn flex justify-between">
                <h1 className={`text-3xl p-10 `}>IMERSIVE</h1>
                <button className="close-btn-menu p-10" onClick={() => setMenuOpen(false)}>CLOSE</button>
            </div>

            <div className="menu-body grid grid-cols-1 h-full">

                <div className="menu-navigation flex flex-col justify-around h-full pb-20">
                    <div className="lg:text-9xl text-4xl flex flex-col lg:gap-16 gap-10 lg:flex-1 lg:px-16 lg:p-32">
                        <div className="menu-link" data-scroll="#about">

                            <div className="flex flex-col gap-10" onClick={() => setMenuOpen(false)}>
                                <Link className="text-center" href="/#about">ABOUT</Link>
                                <Link className="text-center" href='/#about'>ABOUT</Link>
                            </div>

                        </div>
                        <div className="menu-link" data-scroll="#footer">
                            <div className="flex flex-col gap-10" onClick={() => setMenuOpen(false)}>
                                <Link className="text-center" href='/contact'>CONTACT</Link>
                                <Link className="text-center" href='/contact'>CONTACT</Link>
                            </div>
                        </div>
                        <div className="menu-link" data-scroll="#about">
                            <div className="flex flex-col gap-10" onClick={() => setMenuOpen(false)}>
                                <Link className="text-center" href="/">PROJECTS</Link>
                                <Link className="text-center" href='/'>PROJECTS</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu