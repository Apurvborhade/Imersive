import Link from 'next/link';
import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className={`flex flex-col -z-10 border border-t`} id="#footer">
      <div className={`footer-cta flex-1`}>
        <h2 className={`lg:text-8xl text-3xl mb-5 font-light`}>Ready to work with us?</h2>
        <p className="lg:text-2xl text-xl">hello@imersive.co</p>
      </div>

      <div className="footer-navigation px-10 ">
        <div className="socials flex justify-end pb-5">
          <div className="flex gap-2">
            <Link href={"https://www.instagram.com/masfashion_nft/"} target="_blank" className="instagram social-btn border border-black/[.2] p-4 rounded-full">
              <BsInstagram />
            </Link>
            <Link href={"https://twitter.com/masfashion_nft"} target="_blank" className="instagram social-btn border border-black/[.2] p-4 rounded-full">
              <BsTwitter />
            </Link>

          </div>
        </div>
        <div className="navigation-links border-t border-black/[.2]">
          <ul className="flex py-10 justify-start ">
            <li className="mx-4"><Link href="/" className="footer-links">Home</Link></li>
            <li className="mx-4"><Link href="/#projects" className="footer-links">Projects</Link></li>
            <li className="mx-4"><Link href="/contact" className="footer-links">Contact</Link></li>
            <li className="mx-4"><Link href="/#about" className="footer-links">About</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer