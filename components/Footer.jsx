import React from 'react'

const Footer = () => {
  return (
    <footer class={`flex flex-col -z-10 border border-t`} id="#footer">
      <div class={`footer-cta flex-1`}>
        <h2 class={`lg:text-8xl text-3xl mb-5 font-light`}>Ready to work with us?</h2>
        <p class="lg:text-2xl text-xl">hello@imersive.co</p>
      </div>

      <div class="footer-navigation px-10 ">
        <div class="socials flex justify-end pb-5">
          <div class="flex gap-2">
            <div class="instagram social-btn border border-black/[.2] p-4 rounded-full">
              <img src="./assets/discord.png" alt="" width="30px" height="30px" />
            </div>
            <div class="instagram social-btn border border-black/[.2] p-4 rounded-full">
              <img src="./assets/discord.png" alt="" width="30px" height="30px" />
            </div>

          </div>
        </div>
        <div class="navigation-links border-t border-black/[.2]">
          <ul class="flex py-10 justify-center ">
            <li class="mx-4"><a href="" class="footer-links">Home</a></li>
            <li class="mx-4"><a href="" class="footer-links">Home</a></li>
            <li class="mx-4"><a href="" class="footer-links">Home</a></li>
            <li class="mx-4"><a href="" class="footer-links">Home</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer