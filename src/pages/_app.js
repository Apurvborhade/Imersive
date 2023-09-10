import '@/styles/globals.css'
import '@/styles/responsive.css'
import { Orbitron, Poppins, Karla, Montserrat } from '@next/font/google'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Landing from 'components/Landing'
import Page from 'components/Page'

import Services from 'components/Services'
import Roadmap from 'components/Roadmap'
import Projects from 'components/Projects'
import Team from 'components/Team'
import About from 'components/About';



const orbitron = Orbitron({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200'] })
const karla = Karla({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

const components = {
  Landing: Landing,
  About: About,
  Service: Services,
  Roadmap: Roadmap,
  Projects: Projects,
  Team: Team,
  page: Page,
}
storyblokInit({
  accessToken: process.env.ACCESS_TOKEN,
  use: [apiPlugin],
  components
});

export default function App({ Component, pageProps }) {



  return (
    <>
      <style jsx global>{`
            * {
              background-color:"#fff";
              font-family: ${orbitron.style.fontFamily};
            }
            .landing-brand-desc,.services-tagline,.service-desc,.card-overlay p,.team-role-text,.phase-desc {
              font-family: ${karla.style.fontFamily};
            }
            .contact-mail,.close-btn-menu,.about-section p,.about-section h3,.poppins {
              font-family: ${poppins.style.fontFamily};
            }
            .footer-cta h2 ,.footer-cta p,.contact-form {
              font-family: ${poppins.style.fontFamily};
            }
            .montserrat {
              font-family: ${montserrat.style.fontFamily};

            }
        `}</style>

      <Component {...pageProps} />


    </>
  )
}
