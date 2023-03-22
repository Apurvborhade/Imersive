import Head from 'next/head'


import Footer from 'components/Footer'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Menu from 'components/Menu'
import Header from 'components/Header'

import { getStoryblokApi, StoryblokComponent, useStoryblokState } from "@storyblok/react"

import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'





// Define custom CSS styles for the log message
const logStyle = `
  font-weight: bold;
  color: #fff;
  background-color: #617143;
  padding: 12px 14px;
  border-radius: 4px;
`;

// Define a function that logs the message with the custom styles
function customLog(message) {
  console.log(`%c${message}`, logStyle);
}

// Call the customLog function with a message
customLog('Design and Developed By https://github.com/Apurvborhade ❤️');


export default function Home({ story }) {
  const [menuOpen, setMenuOpen] = useState(false)
  story = useStoryblokState(story);
  const router = useRouter();
  useEffect(() => {

    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    //get scroll value
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      // console.log({ scroll, limit, velocity, direction, progress })
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const cursorMove = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.transform = `translate(${e.clientX - 30}px, ${e.clientY - 30}px)`;
  }
  


  return (
    <div onMouseMove={cursorMove}>
      <Head>
        <title>Imersive.io</title>
        <meta name="description" content="We help you navigate new frontiers in customer engagement. At Immerse, we build immersive virtual experiences that connect with audiences that matter the most to your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='cursor'></div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={`page-wrapper`}>
        <Header setMenuOpen={setMenuOpen} />

        <StoryblokComponent blok={story.content} />
        <Footer />

      </div>
    </div>
  )
}


export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}