import { sendContactForm } from 'lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import Logo from "../public/logo.png"
import 'react-phone-number-input/style.css';

const initValues = { firstname: "", lastname: "", email: "", phone: "", company: "" }
const initState = { values: initValues, isLoading: false, isSuccess: false, error: "", inValidPhone: false }

const Footer = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [contactDetails, setContactDetails] = useState(initState);
  const router = useRouter();
  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    setContactDetails((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        phone: phoneNumber
      }
    }))


    if (value) {
      if (!isValidPhoneNumber(value)) {
        setContactDetails((prev) => ({
          ...prev,
          isLoading: false,
          inValidPhone: true,
        }));
      } else {
        setContactDetails((prev) => ({
          ...prev,
          isLoading: false,
          inValidPhone: false,
        }));
      }
    }
  };
  const { values, isLoading, isSuccess, error } = contactDetails;
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
      if (!contactDetails.inValidPhone) {
        await sendContactForm(values)
        setContactDetails({
          values: initValues, isLoading: false, isSuccess: true
        });
      } else {
        setContactDetails((prev) => ({
          ...prev,
          isLoading: false,
          error: "invalid Phone"
        }));
      }
      setPhoneNumber("")
    } catch (error) {
      setContactDetails((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message
      }))
    }

  }
  return (
    <footer className={`-z-10 border border-t lg:mt-20 `} id="#footer">

      <div id='contact' className="footer-contact-form flex flex-col justify-center items-start lg:px-40 px-5 lg:py-0 py-10 ">

        <form onSubmit={onSubmit} className="lg:py-32 contact-form lg:p-10 w-full flex flex-col items-center lg:items-stretch gap-10 relative">

          <h2 className='poppins text-4xl lg:text-6xl font-bold'>Get in touch</h2>{error && (
            <p className='text-red-700 text-xl text-start error-message'>{error}</p>
          )}
          <div className='grid grid-cols-2 gap-10 relative'>
            {isLoading ? (
              <div className="loader">
                <div className="spinner"></div>
              </div>
            ) : null}
            <div className="form-field col-span-full lg:col-auto x-50">
              <input value={values.firstname} onChange={handleChange} placeholder='First Name*' name="firstname" className="input-text poppins text-xl lg:text-2xl outline-none js-input border-b py-2 w-full focus:border-black" type="text" required />
            </div>
            <div className="form-field col-span-full lg:col-auto x-50">
              <input value={values.lastname} onChange={handleChange} placeholder='Last Name*' name="lastname" className="input-text poppins text-xl lg:text-2xl outline-none js-input border-b py-2 w-full focus:border-black" type="text" required />
            </div>
            <div className="form-field col-span-full lg:col-auto x-100">
              <input value={values.email} onChange={handleChange} placeholder='Email Address*' name="email" className="input-text poppins text-xl lg:text-2xl outline-none js-input border-b py-2 w-full focus:border-black" type="text" required />
            </div>
            <PhoneInput
              type="tel" id='phone' placeholder="Phone*" name='phone'
              required
              className='input-text col-span-full lg:col-auto poppins  outline-none js-input border-b py-2 w-full focus:border-black lg:text-2xl'
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
            <div className="form-field col x-100 col-span-full">
              <input value={values.company} onChange={handleChange} placeholder='Company*' name="company" className="input-text poppins text-xl lg:text-2xl outline-none js-input border-b py-2 w-full focus:border-black" type="text" required />
            </div>

          </div>
          <div className="form-field col x-100 align-center">
            <button className="slide-button light border px-10 py-3 border-black/[0.4]">Send</button>
          </div>
        </form>
      </div>
      <div className="footer-header border-y grid lg:grid-cols-4 grid-cols-1">
        <div className='border-r border-black/[.1] p-10'>
          <Link href={"/"} className="logo-container p-3 flex items-center gap-3 text-xl">
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={80}
            />
            <p className='text-white'>IMERSIVE</p>
          </Link>
        </div>
        <div className='border-r border-black/[.1] p-10'>
          <h3 className='poppins text-2xl font-semibold text-black/[0.8]'>Email</h3>
          <div className='mt-4 flex flex-col gap-2'>
            <Link href="/" className='poppins text-xl font-semibold text-black/[.3] hover:text-black/[1] transition-all'>hello@imersive.com</Link>
          </div>
        </div>
        <div className='border-r border-black/[.1] p-10'>
          <h3 className='poppins text-2xl font-semibold text-black/[0.8]'>Socials</h3>
          <div className='mt-4 flex flex-col gap-2'>
            <Link href="/" className='poppins text-xl font-semibold text-black/[.3] hover:text-black/[1] transition-all'>Instagram</Link>
            <Link href="/" className='poppins text-xl font-semibold text-black/[.3] hover:text-black/[1] transition-all'>Twitter</Link>
          </div>
        </div>
        <div className='border-r border-black/[.1] p-10'>
          <h3 className='poppins text-2xl font-semibold text-black/[0.8]'>Quick Links</h3>
          <div className='mt-4 flex flex-col gap-2'>
            <Link href="/" className='poppins text-xl font-semibold text-black/[.3] hover:text-black/[1] transition-all'>Services</Link>
            <Link href="/" className='poppins text-xl font-semibold text-black/[.3] hover:text-black/[1] transition-all'>Works</Link>
            <Link href="/" className='poppins text-xl font-semibold text-black/[.3] hover:text-black/[1] transition-all'>About</Link>
          </div>
        </div>
      </div>




    </footer>
  )
}

export default Footer