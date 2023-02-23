import Image from 'next/image'
import React from 'react'

import Logo from "../public/logo.png"

const Header = () => {
  return (
    <header className="relative w-full">
    <div className="header-wrapper flex justify-between px-1">
            <div className="logo-container p-3">
            <Image
                src={Logo}
                alt="Logo"
                width={50}
                height={50}
                />
            </div>
            <button className="menu-btn slide-button border-l border-white/[0.3] px-10">
                MENU
            </button>
        </div>
    </header>
  )
}

export default Header