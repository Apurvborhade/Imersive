import React from 'react'

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
            <div className="instagram social-btn border border-black/[.2] p-4 rounded-full">
              <img src="./assets/discord.png" alt="" width="30px" height="30px" />
            </div>
            <div className="instagram social-btn border border-black/[.2] p-4 rounded-full">
              <img src="./assets/discord.png" alt="" width="30px" height="30px" />
            </div>

          </div>
        </div>
        <div className="navigation-links border-t border-black/[.2]">
          <ul className="flex py-10 justify-center ">
            <li className="mx-4"><a href="" className="footer-links">Home</a></li>
            <li className="mx-4"><a href="" className="footer-links">Home</a></li>
            <li className="mx-4"><a href="" className="footer-links">Home</a></li>
            <li className="mx-4"><a href="" className="footer-links">Home</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer