import React from 'react'

const Team = () => {
  return (
    <section className="team-wrapper relative mt-52 lg:px-52 px-10 py-10">
    <div className="team-section-header">
        <div className="heading">
            <p className="section-title">OUR PEOPLE</p>
            <p className="text-4xl my-5">AT THE FOREFRONT OF VIRTUAL EXPERIENCE TECH</p>
            <a href="/">
                <button className="join-team-btn slide-button light border px-10 py-3 border-black/[0.4]">Join Our Team</button>
            </a>
        </div>

        <div className="team-members-wrapper relative my-10 grid lg:grid-cols-6 grid-cols-2 gap-5">
            <div data-content="SHRYASH"  className="member-card card-lg relative col-span-2">
                <div className="team-member-dets">
                    <p className="bg-white w-full px-5 py-2">Test Name</p>
                </div>
                <div className="card-overlay">
                    <p className="text-xl p-10">Founder At Imersive</p>
                </div>
                <div className="member-image-wrapper relative overflow-hidden rounded-lg">
                    <img src="./assets/nft.jpg" alt="" />
                </div>
            </div>
            <div data-content="Apurv"  className="member-card card-lg relative col-span-2">
                
                <div className="card-overlay">
                    <p className="text-xl p-10">Founder At Imersive</p>
                </div>
                <div className="member-image-wrapper relative overflow-hidden rounded-lg">
                    <img src="./assets/nft.jpg" alt="" />
                </div>
            </div>
            <div data-content="SHRYASH"  className="member-card card-lg relative col-span-2">
                
                <div className="card-overlay">
                    <p className="text-xl p-10">Founder At Imersive</p>
                </div>
                <div className="member-image-wrapper relative overflow-hidden rounded-lg">
                    <img src="./assets/nft.jpg" alt="" />
                </div>
            </div>
            <div data-content="SHRYASH"  className="member-card card-sm relative">
                
                <div className="card-overlay">
                    <p className="text-xl p-10">Founder At Imersive</p>
                </div>
                <div className="member-image-wrapper relative overflow-hidden rounded-lg">
                    <img src="./assets/nft.jpg" alt="" />
                </div>
            </div>
            <div data-content="SHRYASH"  className="member-card card-sm relative">
                
                <div className="card-overlay">
                    <p className="text-xl p-10">Founder At Imersive</p>
                </div>
                <div className="member-image-wrapper relative overflow-hidden rounded-lg">
                    <img src="./assets/nft.jpg" alt="" />
                </div>
            </div>
            <div data-content="SHRYASH"  className="member-card card-sm relative">
                
                <div className="card-overlay">
                    <p className="text-xl p-10">Founder At Imersive</p>
                </div>
                <div className="member-image-wrapper relative overflow-hidden rounded-lg">
                    <img src="./assets/nft.jpg" alt="" />
                </div>
            </div>
            <div data-content="SHRYASH"  className="member-card card-sm relative">
                
                <div className="card-overlay">
                    <p className="text-xl p-10">Founder At Imersive</p>
                </div>
                <div className="member-image-wrapper relative overflow-hidden rounded-lg">
                    <img src="./assets/nft.jpg" alt="" />
                </div>
            </div>
            <div data-content="SHRYASH"  className="member-card card-sm relative">
                
                <div className="card-overlay">
                    <p className="text-xl p-10">Founder At Imersive</p>
                </div>
                <div className="member-image-wrapper relative overflow-hidden rounded-lg">
                    <img src="./assets/nft.jpg" alt="" />
                </div>
            </div>
            <div  data-content="SHRYASH" className="member-card card-sm relative">
                
                <div className="card-overlay">
                    <p className="text-xl p-10">Founder At Imersive</p>
                </div>
                <div className="member-image-wrapper relative overflow-hidden rounded-lg">
                    <img src="./assets/nft.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Team