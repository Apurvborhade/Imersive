import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import Landing from 'components/Landing'
import Services from 'components/Services'
import Roadmap from 'components/Roadmap'
import Team from 'components/Team'
import Footer from 'components/Footer'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Menu from 'components/Menu'
import Header from 'components/Header'
import Projects from 'components/Projects'
import Loading from 'components/Loading'
import { getStoryblokApi, StoryblokComponent, useStoryblokState } from "@storyblok/react"

export default function Home({ story }) {
  const [menuOpen, setMenuOpen] = useState(false)
  story = useStoryblokState(story);

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

  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.style.transform = `translate(${e.clientX - 30}px, ${e.clientY - 30}px)`;
    });

    document.addEventListener("click", () => {
      cursor.classList.add("cursor-click");

      setTimeout(() => {
        cursor.classList.remove("cursor-click");
      }, 100);
    });
  }, [])


  return (
    <>
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
    </>
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