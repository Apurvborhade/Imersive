import Header from 'components/Header'
import Menu from 'components/Menu'
import { sendContactForm } from 'lib/api'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import intlTelInput from 'intl-tel-input';
import "intl-tel-input/build/js/utils"


const initValues = { name: "", company: "", email: "", phone: "" }

const initState = { values: initValues, isLoading: false, isSuccess: false }

const Contact = () => {
    const [contactDetails, setContactDetails] = useState(initState);

    const input = useRef()
    
    useEffect(() =>{
        const iti = intlTelInput(input.current)
        var test = iti.getSelectedCountryData();
        console.log(test)
    },[contactDetails])
    useEffect(() => {
        intlTelInput(input.current, {
            separateDialCode:true
        });
        
    },[document.querySelector("#phone")])

    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        document.addEventListener("mousemove", (e) => {
            cursor.style.transform = `translate(${e.clientX - 30}px, ${e.clientY - 100}px)`;
        });

        document.addEventListener("click", () => {
            cursor.classList.add("cursor-click");

            setTimeout(() => {
                cursor.classList.remove("cursor-click");
            }, 100);
        });
    }, [])

    const { values, isLoading, isSuccess } = contactDetails;
    useEffect(() => {
        if (isSuccess) {
            toast('Sent Succesfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    })
    const handleChange = ({ target }) => {
        
        setContactDetails((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            }
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setContactDetails((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values)
            setContactDetails({
                values: initValues, isLoading: false, isSuccess: true
            });
        } catch (error) {
            console.log(error)
        }

    }

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='cursor'></div>
            <div>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Header setMenuOpen={setMenuOpen} />

                <div className=' relative flex mt-20 justify-center items-center h-full py-3 '>
                    <div className='contact-form-wrapper grid lg:grid-cols-2 grid-cols-1 gap-20 lg:p-20 p-10'>
                        <div className='contact-cta lg:border-r lg:border-b-0 border-b text-black flex flex-col lg:justify-around justify-center lg:pr-20'>
                            <h3 className='lg:text-6xl text-lg w-96'>LET&apos;S CONNECT TOGETHER</h3>
                            <div className='back-link lg:flex w-60 bg-black h-60 rounded-full flex ml-auto hidden justify-center items-center text-white'>
                                <Link href='/'>GO BACK HOME</Link>
                            </div>
                        </div>

                        <div className='contact-form text-black relative'>
                            {isLoading ? (
                                <div className="loader">
                                    <div className="spinner"></div>
                                </div>
                            ) : null}
                            <p className='lg:text-3xl text-2xl'>Hello, Imersive Team!</p>

                            <form onSubmit={onSubmit} className="contact-form flex flex-col gap-10 my-10">
                                <input type="text" placeholder="name" name='name' className='border font-bold py-4 px-10 outline-none focus:border-black' value={values.name} onChange={handleChange} />
                                <input type="text" placeholder="company" name='company' className='border font-bold py-4 px-10 outline-none focus:border-black' value={values.company} onChange={handleChange} />
                                <input type="text" placeholder="email" name='email' className='border font-bold py-4 px-10 outline-none focus:border-black' required value={values.email} onChange={handleChange} />
                                <input ref={input} type="text" id='phone' placeholder="phone" name='phone' className='border font-bold py-4 px-10 outline-none focus:border-black' required value={values.phone} onChange={handleChange}  />
                                <button className='form-submit-btn bg-black p-7 text-white'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact