import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const myLoader = ({ src }) => {
    // https://images.unsplash.com/photo-
    return `https://imersive.io/wp-content/uploads/${src}`
}
const Team = ({ blok }) => {
    const teamMembers = blok.members;

    return (

        <section {...storyblokEditable(blok)} className="team-wrapper relative mt-52 lg:px-52 px-10 py-10">
            <div className="team-section-header">
                <div className="heading">
                    <p className="section-title">OUR PEOPLE</p>
                    <p className="text-4xl my-5">{blok.headline}</p>
                    <Link href="/">
                        <button className="join-team-btn slide-button light border px-10 py-3 border-black/[0.4]">{blok.buttontext}</button>
                    </Link>
                </div>

                <div className="team-members-wrapper relative my-10 grid lg:grid-cols-6 grid-cols-2 gap-5">
                    {teamMembers.map(member => (
                        <div className={`member-card ${member.large ? 'col-span-2' : ''}`}>
                            <div className='image-wrapper rounded-lg overflow-hidden'>
                                <Image
                                    loader={myLoader}
                                    src={member.imagesrc}
                                    alt="Smart Contract Development"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div className='mt-5'>
                                <p className='text-xl font-medium uppercase'>{member.name}</p>
                                <p className='team-role-text'>{member.role}</p>
                            </div>
                        </div>
                    ))}
                    {/* 
                    
                    
                    
                    
                    
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="2022/08/6-600x600.jpg"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>3VILWI5CH</p>
                            <p className='team-role-text'>Creative At Imersive</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Team