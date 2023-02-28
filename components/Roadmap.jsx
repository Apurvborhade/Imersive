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
                            <p className="phase-desc  text-sm text-black/[.3] w-96 absolute -top-10 left-32 hidden lg:block">During this phase Our Team and Client Teams (both Brand Manager and Marketing head) work together to bring out the intended story and clearly build a shared vision of the desired immersive experience.</p>
                            <p className="w-32">DEFINE</p>
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
                            <p className="w-32 rotu">DESIGN</p>
                            <p className="phase-desc text-sm text-black/[.3] w-96 absolute -top-10 left-40 hidden lg:block rotu">We put together a mood board and creatives of what the immersive space will look like. During this phase Client actively participates in providing feedback that helps our team finalize the design of the experience.</p>
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
                            <p className="phase-desc  text-sm text-black/[.3] w-96 absolute -top-10 left-32 hidden lg:block">Our team develops the content weaving the stories into the immersive experiences as envisioned in the design phase. Contents of the stories and experiences are released for approval by the Brand Manager and any changes requested are incorporated in the next release.</p>
                            <p className="w-32">DEVELOP</p>
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
                            <p className="w-32 rotu">LAUNCH</p>
                            <p className=" phase-desc  text-sm text-black/[.3] w-96 absolute -top-10 left-40 hidden lg:block rotu">During this phase the Client and our team will test the product for its robustness and quality. Our goal is to ensure our deployment will be easy to use for the end consumer.</p>
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
                            <p className="phase-desc  text-sm text-black/[.3] w-96 absolute -top-10 left-32 hidden lg:block">We work with your media and marketing teams to understand the expected outcome from the virtual experience and help you exectute digital marketing strategies to achieve the desired objectives.</p>
                            <p className="w-32">AMPLIFY</p>
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
                            <p className="w-32 rotu">OPTIMIZE</p>
                            <p className=" phase-desc  text-sm text-black/[.3] w-96 absolute -top-10 left-40 hidden lg:block rotu">We work with you to continuously optimise the customer's experience while making sure that the brand story always remains relevant and up-to-date.</p>
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