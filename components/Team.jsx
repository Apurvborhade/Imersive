import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const myLoader = ({ src }) => {
    // https://images.unsplash.com/photo-
    return `https://images.unsplash.com/photo-${src}`
}
const Team = () => {
    return (
        
        <section className="team-wrapper relative mt-52 lg:px-52 px-10 py-10">
            <div className="team-section-header">
                <div className="heading">
                    <p className="section-title">OUR PEOPLE</p>
                    <p className="text-4xl my-5">AT THE FOREFRONT OF VIRTUAL EXPERIENCE TECH</p>
                    <Link href="/">
                        <button className="join-team-btn slide-button light border px-10 py-3 border-black/[0.4]">Join Our Team</button>
                    </Link>
                </div>

                <div className="team-members-wrapper relative my-10 grid lg:grid-cols-6 grid-cols-2 gap-5">
                    <div className='member-card col-span-2'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="1673427147403-9e87c4fe8a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SHRYSH</p>
                            <p className='team-role-text'>Founder At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card col-span-2'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="1673427147403-9e87c4fe8a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SHRYSH</p>
                            <p className='team-role-text'>Founder At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card col-span-2'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="1673427147403-9e87c4fe8a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SHRYSH</p>
                            <p className='team-role-text'>Founder At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="1673427147403-9e87c4fe8a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SHRYSH</p>
                            <p className='team-role-text'>Founder At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="1673427147403-9e87c4fe8a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SHRYSH</p>
                            <p className='team-role-text'>Founder At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="1673427147403-9e87c4fe8a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SHRYSH</p>
                            <p className='team-role-text'>Founder At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="1673427147403-9e87c4fe8a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SHRYSH</p>
                            <p className='team-role-text'>Founder At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="1673427147403-9e87c4fe8a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SHRYSH</p>
                            <p className='team-role-text'>Founder At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="1673427147403-9e87c4fe8a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SHRYSH</p>
                            <p className='team-role-text'>Founder At Imersive</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team