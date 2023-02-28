import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const myLoader = ({ src }) => {
    // https://images.unsplash.com/photo-
    return `https://imersive.io/wp-content/uploads/${src}`
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
                                src="2022/08/1-600x600.jpg"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>ROCEAN.ETH</p>
                            <p className='team-role-text'>Founder At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card col-span-2'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="2022/08/10-600x600.jpg"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>BLACKHAWK</p>
                            <p className='team-role-text'>Co-Founder At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card col-span-2'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="2022/08/12-600x600.jpg"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>RAJU</p>
                            <p className='team-role-text'>Advisor At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="2022/08/8-600x600.jpg"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SATYR</p>
                            <p className='team-role-text'>Operations At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="2022/08/5-600x600.jpg"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SHRYSH</p>
                            <p className='team-role-text'>Design At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="2022/08/2-600x600.jpg"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>SABBY.ETH</p>
                            <p className='team-role-text'>NFT wizard At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="2022/08/9-600x600.jpg"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>WIR.ETH</p>
                            <p className='team-role-text'>Tech At Imersive</p>
                        </div>
                    </div>
                    <div className='member-card'>
                        <div className='image-wrapper rounded-lg overflow-hidden'>
                            <Image
                                loader={myLoader}
                                src="2022/08/7-600x600.jpg"
                                alt="Smart Contract Development"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-medium'>DEVILSTATOR</p>
                            <p className='team-role-text'>Marketing At Imersive</p>
                        </div>
                    </div>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team