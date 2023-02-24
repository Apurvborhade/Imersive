import React from 'react'

const Roadmap = () => {
  return (
    <section className="section-process relative" id="about">
            <div className="process-roadmap-wrapper relative flex flex-col items-center p-10">
                <div className="roadmap-title">
                    <p className="uppercase lg:text-3xl">ENJOY OUR PROCESS</p>
                </div>
                <div className="vertical-bars absolute mt-16 flex w-full h-full justify-around border-y">
                    <div className="bar lg:block hidden"></div>
                    <div className="bar"></div>
                    <div className="bar lg:block hidden"></div>
                </div>
                <div className="roadmap mt-52">
                    <div className="roadmap-phase relative">
                        <div className="phase-title absolute -top-12 left-20 flex">
                            <p className="phase-desc  text-sm text-black/[.3] w-96 absolute -top-10 left-32 hidden lg:block">Lorem
                                ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit cum maiores tempore!
                                Voluptate ullam odit repudiandae ducimus eos velit qui. Adipisci velit porro in
                                architecto.</p>
                            <p className="w-32">PHASE 1</p>
                        </div>

                        <div className="phase-btn">
                            <div className="vector-bar">
                            </div>
                            <div className="focus"></div>
                        </div>
                    </div>
                </div>
                <div className="roadmap rotu mt-52">
                    <div className="roadmap-phase relative">
                        <div className="phase-title absolute -top-12 left-12 flex">
                            <p className="w-32 rotu">PHASE 1</p>
                            <p className="phase-desc  text-sm text-black/[.3] w-96 absolute -top-10 left-32 hidden lg:block rotu">Lorem
                                ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit cum maiores tempore!
                                Voluptate ullam odit repudiandae ducimus eos velit qui. Adipisci velit porro in
                                architecto.</p>
                        </div>

                        <div className="phase-btn">
                            <div className="vector-bar">
                            </div>
                            <div className="focus"></div>
                        </div>
                    </div>
                </div>
                <div className="roadmap mt-52">
                    <div className="roadmap-phase relative">
                        <div className="phase-title absolute -top-12 left-20 flex">
                            <p className="phase-desc  text-sm text-black/[.3] w-96 absolute -top-10 left-32 hidden lg:block">Lorem
                                ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit cum maiores tempore!
                                Voluptate ullam odit repudiandae ducimus eos velit qui. Adipisci velit porro in
                                architecto.</p>
                            <p className="w-32">PHASE 1</p>
                        </div>

                        <div className="phase-btn">
                            <div className="vector-bar">
                            </div>
                            <div className="focus"></div>
                        </div>
                    </div>
                </div>
                <div className="roadmap rotu mt-52">
                    <div className="roadmap-phase relative">
                        <div className="phase-title absolute -top-12 left-12 flex">
                            <p className="w-32 rotu">PHASE 1</p>
                            <p className=" phase-desc  text-sm text-black/[.3] w-96 absolute -top-10 left-32 hidden lg:block rotu">Lorem
                                ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit cum maiores tempore!
                                Voluptate ullam odit repudiandae ducimus eos velit qui. Adipisci velit porro in
                                architecto.</p>
                        </div>

                        <div className="phase-btn">
                            <div className="vector-bar">
                            </div>
                            <div className="focus"></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
  )
}

export default Roadmap