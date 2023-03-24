import Image from 'next/image'
import React, { useEffect } from 'react'

import { MdTouchApp } from 'react-icons/md'
const myLoader = ({ src }) => {
    return `https://images.unsplash.com/photo-${src}`
}
const About = () => {
    useEffect(() => {
        let sliderContainer = document.querySelector('.slider-container');
        let innerSlider = document.querySelector('.inner-slider');

        let pressed = false;
        let startX;
        let x;

        sliderContainer.addEventListener("mousedown", (e) => {
            pressed = true;
            startX = e.offsetX - innerSlider.offsetLeft;
            console.log(startX)
            sliderContainer.style.cursor = "grabbing";
        });

        sliderContainer.addEventListener("mouseenter", () => {
            sliderContainer.style.cursor = "grab";
        });

        sliderContainer.addEventListener("mouseup", () => {
            sliderContainer.style.cursor = "grab";
            pressed = false;
        });

        const checkBoundary = () => {
            let outer = sliderContainer.getBoundingClientRect();
            let inner = innerSlider.getBoundingClientRect();

            if (parseInt(innerSlider.style.left) > 0) {
                innerSlider.style.left = "0px";
            }

            if (inner.right < outer.right) {
                innerSlider.style.left = `-${inner.width - outer.width}px`;
            }
        }
        sliderContainer.addEventListener("mousemove", (e) => {
            if (!pressed) return;
            e.preventDefault();

            x = e.offsetX;

            innerSlider.style.left = `${x - startX}px`;

            checkBoundary();
        });

    }, [])

    return (
        <div className='about-section' id='about'>
            <div className='flex flex-col items-center py-20 lg:py-40'>
                <h3 className='text-center text-xl lg:text-3xl w-mid'>
                    Imersive is a Web2.5 E-commerce platform that leverages XR tools and the blockchain to provide
                    gamified retail spaces and easy to use sales solutions.
                </h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 px-10 lg:px-44 lg:gap-x-40 mt-20 gap-y-20'>
                    <div className='product-desc-card flex'>
                        <div className='desc-icon mr-5'>

                            <MdTouchApp size={50} />
                        </div>
                        <div>
                            <p>Interactive 3D Product Displays</p>
                            <p className='text-white/[0.6]'>The product should allow retailers to showcase their products in interactive 3D displays that allow customers to view products from multiple angles and even interact with them.</p>
                        </div>
                    </div>
                    <div className='product-desc-card flex'>
                        <div className='desc-icon mr-5'>

                            <MdTouchApp size={50} />
                        </div>
                        <div>
                            <p>Interactive 3D Product Displays</p>
                            <p className='text-white/[0.6]'>The product should allow retailers to showcase their products in interactive 3D displays that allow customers to view products from multiple angles and even interact with them.</p>
                        </div>
                    </div>
                    <div className='product-desc-card flex'>
                        <div className='desc-icon mr-5'>

                            <MdTouchApp size={50} />
                        </div>
                        <div>
                            <p>Interactive 3D Product Displays</p>
                            <p className='text-white/[0.6]'>The product should allow retailers to showcase their products in interactive 3D displays that allow customers to view products from multiple angles and even interact with them.</p>
                        </div>
                    </div>
                    <div className='product-desc-card flex'>
                        <div className='desc-icon mr-5'>

                            <MdTouchApp size={50} />
                        </div>
                        <div>
                            <p>Interactive 3D Product Displays</p>
                            <p className='text-white/[0.6]'>The product should allow retailers to showcase their products in interactive 3D displays that allow customers to view products from multiple angles and even interact with them.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-showcase py-10 mt-20'>
                <div className='showcase-header lg:pl-20 pl-10'>
                    <div>
                        <h2 className='uppercase poppins text-4xl'>Explore our spaces</h2>
                        <p className='text-white/[0.8] pr-10 lg:pr-0 lg:w-mid mt-5'>Step into the world of the metaverse with our stunning 3D spaces that help brands to showcase their products like never before. Our team has created virtual stores, art galleries, showrooms, and more, providing a unique and immersive experience that&apos;s sure to captivate your audience.</p>
                    </div>
                    <div className='slider-container relative mt-10 overflow-scroll'>
                        <div className='inner-slider '>
                            <div className='card'></div>
                            <div className='card'></div>
                            <div className='card'></div>
                            <div className='card'></div>
                            <div className='card'></div>
                            <div className='card'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-features lg:px-20 px-5 mt-32'>
                <div className='product-features-header'>
                    <h2 className='lg:text-5xl text-2xl poppins'>Discover the compelling reasons why retailers should choose Us</h2>
                </div>
                <div className='product-features-body grid lg:grid-cols-9 gap-2 mt-10'>
                    <div className="feature-card  flex flex-col justify-center items-start col-span-3 border-2 p-10 rounded-lg">
                        <h3 className='text-4xl'>Easy-to-use interface</h3>
                        <p className='mt-2'>The product has a simple drag-and-drop interface that lets you create your virtual store with ease, without any coding skills.</p>
                    </div>
                    <div className="feature-card  flex flex-col justify-center items-start col-span-3 border-2 p-10 rounded-lg">
                        <h3 className='text-4xl'>Easy-to-use interface</h3>
                        <p className='mt-2'>The product has a simple drag-and-drop interface that lets you create your virtual store with ease, without any coding skills.</p>
                    </div>
                    <div className="feature-card  flex flex-col justify-center items-start col-span-3 border-2 p-10 rounded-lg">
                        <h3 className='text-4xl'>Easy-to-use interface</h3>
                        <p className='mt-2'>The product has a simple drag-and-drop interface that lets you create your virtual store with ease, without any coding skills.</p>
                    </div>
                    <div className="feature-card mix-blend-difference flex flex-col justify-center items-start col-span-2 rounded-lg p-10 bg-white text-black">
                        <h3 className='text-4xl'>Easy-to-use interface</h3>
                        <p className='mt-2'>The product has a simple drag-and-drop interface that lets you create your virtual store with ease, without any coding skills.</p>
                    </div>
                    <div className="feature-card mix-blend-difference flex flex-col justify-center items-start col-span-2 rounded-lg p-10 bg-white text-black">
                        <h3 className='text-4xl'>Easy-to-use interface</h3>
                        <p className='mt-2'>The product has a simple drag-and-drop interface that lets you create your virtual store with ease, without any coding skills.</p>
                    </div>
                    <div className="feature-card flex flex-col justify-center items-start col-span-3  border-2 p-10 rounded-lg">
                        <h3 className='text-4xl'>Easy-to-use interface</h3>
                        <p className='mt-2'>The product has a simple drag-and-drop interface that lets you create your virtual store with ease, without any coding skills.</p>
                    </div>
                    <div className="feature-card mix-blend-difference flex flex-col justify-center items-start col-span-2 rounded-lg p-10 bg-white text-black">
                        <h3 className='text-4xl'>Easy-to-use interface</h3>
                        <p className='mt-2'>The product has a simple drag-and-drop interface that lets you create your virtual store with ease, without any coding skills.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About