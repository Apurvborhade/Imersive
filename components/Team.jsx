// Import necessary modules and components
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Define custom loader function for the Next.js Image component
const myLoader = ({ src }) => {
    // Construct the URL for the image based on the "src" property
    return `https://imersive.io/wp-content/uploads/${src}`
}

// Define the "Team" component
const Team = ({ blok }) => {
    // Extract the "members" array from the "blok" object passed as a prop
    const teamMembers = blok.members;
    
    
    // Render the team section with editable content
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
                    {/* Map over the "members" array to render a "member-card" for each member */}
                    {teamMembers.map(member => (
                        <div className={`member-card ${member.large ? 'col-span-2' : ''}`} key={member._uid}>
                            <div className='image-wrapper rounded-lg overflow-hidden'>
                                {/* Render the member's profile picture using the Next.js Image component */}
                                <Image
                                    loader={myLoader} // Set the custom loader function to fetch the image
                                    src={member.imagesrc} // Set the URL of the image
                                    alt="Smart Contract Development"
                                    width={500}
                                    height={500}
                                    loading="lazy"
                                />
                            </div>
                            <div className='mt-5'>
                                {/* Render the member's name and role */}
                                <p className='text-xl font-medium uppercase'>{member.name}</p>
                                <p className='team-role-text'>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Export the "Team" component as the default export
export default Team
