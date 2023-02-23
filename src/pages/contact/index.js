import Header from 'components/Header'
import Menu from 'components/Menu'
import React, { useState } from 'react'

const Contact = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Header setMenuOpen={setMenuOpen}/>

    <div className='flex justify-center items-center h-full py-3 '>
        <div className='contact-form-wrapper grid grid-cols-2 gap-20 p-20'>
            <div className='contact-cta border-r text-black flex flex-col justify-around lg:pr-20'>
                <h3 className='text-6xl w-96'>LET'S CONNECT TOGETHER</h3>
                <div className='back-link w-60 bg-black h-60 rounded-full flex ml-auto justify-center items-center text-white'>
                    <a href='/'>GO BACK HOME</a>
                </div>
            </div>

            <div className='contact-form text-black'>
                <p className='text-3xl'>Hello, Imersive Team!</p>

                <form class="register-form flex flex-col gap-10 my-10">
                    <input type="text" placeholder="name" className='border py-4 px-10 outline-none'/>
                    <input type="password" placeholder="password" className='border py-4 px-10 outline-none'/>
                    <input type="text" placeholder="email address" className='border py-4 px-10 outline-none'/>
                    <button className='form-submit-btn bg-black p-7 text-white'>create</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact