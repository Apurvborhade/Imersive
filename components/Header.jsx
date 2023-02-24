import Image from 'next/image'
import React from 'react'

import Logo from "../public/logo.png"

const Header = ({setMenuOpen}) => {
  return (
    <header className="fixed z-10 left-0 top-0 bg-black w-full">
      <div className="header-wrapper flex justify-between px-1">
            <div className="logo-container p-3">
            <Image
                src={Logo}
                alt="Logo"
                width={80}
                height={80}
                />
            </div>
            <button className="menu-btn slide-button  border-l border-white/[0.3] px-10" onClick={() => setMenuOpen(true)}>
              <p>
                MENU
              </p>  
            </button>
        </div>
    </header>
  )
}

export default Header