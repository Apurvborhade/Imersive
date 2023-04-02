import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { MdTouchApp } from 'react-icons/md'

const imageLoader = ({ src }) => {
    return `https://a.storyblok.com/${src}`
}


const About = ({ blok }) => {
    const [icon, setIcon] = useState('')
    useEffect(() => {
        let sliderContainer = document.querySelector('.slider-container');
        let innerSlider = document.querySelector('.inner-slider');

        let pressed = false;
        let startX;
        let x;

        sliderContainer.addEventListener("mousedown", (e) => {
            pressed = true;
            startX = e.offsetX - innerSlider.offsetLeft;
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
        <div className='about-section' id='about' {...storyblokEditable(blok)}>
            <div className='flex flex-col items-center py-20 lg:py-40'>
                <h3 className='text-center text-xl lg:text-3xl w-mid'>
                    {blok.productDescriptionTitle}
                </h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 px-10 lg:px-44 lg:gap-x-40 mt-20 gap-y-20 lg:mt-32'>
                    {blok.productDescription.map((card) => (
                        <div className='product-desc-card flex' key={card._uid}>
                            
                            <div className='desc-icon mr-5'>
                                <MdTouchApp size={50} />
                            </div>
                            <div>
                                <p>{card.title}</p>
                                <p className='text-white/[0.6]'>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='space-showcase py-10 mt-20'>
                <div className='showcase-header lg:pl-20 pl-10'>
                    <div>
                        <h2 className='uppercase poppins text-4xl'>{blok.spaceShowcaseTitle}</h2>
                        <p className='text-white/[0.8] pr-10 lg:pr-0 lg:w-mid mt-5'>{blok.spaceShowcaseDescription}</p>
                    </div>
                    <div className='slider-container relative mt-10 overflow-scroll'>
                        <div className='inner-slider'>
                            {blok.spaceCarousel.map((card) => (
                                <div key={card._uid}>
                                    <Image
                                        loader={imageLoader}
                                        src={card.image.filename.split("a.storyblok.com/")[1]}
                                        width={50}
                                        height={10}
                                        className="object-cover"
                                        alt={card.image.alt}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-features lg:px-20 px-5 mt-32'>
                <div className='product-features-header'>
                    <h2 className='lg:text-5xl text-2xl poppins'>{blok.productFeatureTitle}s</h2>
                </div>
                <div className='product-features-body grid lg:grid-cols-9 gap-2 mt-10'>
                    {blok.productFeatures.map((card) => (
                        <div key={card._uid} className={`feature-card flex flex-col justify-center items-start p-10 rounded-lg  col-span-${card.cardSize} ${card.outlined ? ' border-2 ' : ' mix-blend-difference bg-white text-black'}`}>
                            <h3 className='text-4xl'>{card.title}</h3>
                            <p className='mt-2'>{card.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default About