import { storyblokEditable } from '@storyblok/react';
import React from 'react'

const Roadmap = ({ blok }) => {
    const phases = blok.phase;

    return (
        <section {...storyblokEditable(blok)} className="section-process relative" id="about">
            <div className="process-roadmap-wrapper relative flex flex-col items-center p-10">
                <div className="roadmap-title">
                    <p className="uppercase lg:text-3xl">ENJOY OUR PROCESS</p>
                </div>
                <div className="vertical-bars absolute mt-16 flex w-full h-full justify-around border-y">
                    <div className="bar lg:block hidden"></div>
                    <div className="bar"></div>
                    <div className="bar lg:block hidden"></div>
                </div>

                {phases.map(phase => (
                    <div className={`roadmap mt-52 ${phase.isAlignedLeft ? 'rotu' : ''}`} key={phase._uid}>
                        <div className="roadmap-phase relative">
                            <div className={`phase-title absolute -top-12 ${phase.isAlignedLeft ? 'left-12' : 'left-20'} flex`}>
                                <p className={`phase-desc text-sm text-black/[.3] w-96 absolute -top-10 ${phase.isAlignedLeft ? 'left-40 rotu' : 'left-32'} hidden lg:block`}>{phase.phasedesc}</p>
                                <p className={`${phase.isAlignedLeft ? 'rotu' : ''} w-32`}>{phase.phasetitle}</p>
                            </div>  

                            <div className="phase-btn">
                                <div className="vector-bar">
                                </div>
                                <div className="focus"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Roadmap