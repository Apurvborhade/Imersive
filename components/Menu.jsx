import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { BsInstagram,BsTwitter } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'


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
        <div className={`menu-wrapper text-black flex justify-between items-end flex-col overflow-hidden  ${menuOpen ? 'active p-10 ' : ''} `} ref={menu}>
            <button className="close-btn hover:rotate-90" onClick={() => {setMenuOpen(false)}}>
                <IoClose size={40}/>
            </button>
            <div className="navigation mb-20 text-3xl flex flex-col gap-10">
                <Link href={"/#projects"} className="uppercase text-right menu-link hover:mr-1">projects</Link>
                <Link href={"/#about"} className="uppercase text-right menu-link hover:mr-1">ABOUT</Link>
                <Link href={"/#services"} className="uppercase text-right menu-link hover:mr-1">SERVICES</Link>
                <Link href={"/#contact"} className="uppercase text-right menu-link hover:mr-1">CONTACT</Link>
            </div>
            <div className="socials flex gap-5">
                <BsTwitter size={25} />
                <BsInstagram size={25}/>
            </div>
        </div>
    )
}

export default Menu