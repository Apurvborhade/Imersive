import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from "../public/logo.png"

const Header = ({ setMenuOpen }) => {

  const menuBtnHandler = () => {
    setMenuOpen(true)
    gsap.from(".menu-link", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: .1,
      stagger: 0.2
    })
  }
  return (
    <header className="fixed z-10 left-0 top-0 bg-black w-full">
      <div className="header-wrapper flex justify-between pl-1">
        <Link href={"/"} className="logo-container p-3 flex items-center gap-3 text-xl hover:mr-10">
          <Image
            src={Logo}
            alt="Logo"
            width={80}
            height={80}
          />
          <h1>IMERSIVE</h1>
        </Link>
        <button className="menu-btn slide-button  border-l border-white/[0.3] px-10" onClick={menuBtnHandler}>
          <p className=''>
            MENU
          </p>
        </button>
      </div>
    </header>
  )
}

export default Header