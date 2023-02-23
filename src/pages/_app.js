import '@/styles/globals.css'
import '@/styles/responsive.css'
import { Orbitron,Poppins,Karla } from '@next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'],weight:'100' })
const karla = Karla({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
 
  return (
    <>
        <style jsx global>{`
            * {
              background-color:"#fff";
              font-family: ${orbitron.style.fontFamily};
            }
            .landing-brand-desc,.services-tagline,.service-desc,.card-overlay p {
              font-family: ${karla.style.fontFamily};
            }
            .contact-mail,.close-btn-menu {
              font-family: ${poppins.style.fontFamily};
            }
            .footer-cta h2 ,.footer-cta p {
              font-family: ${poppins.style.fontFamily};
            }
        `}</style>
      <Component {...pageProps} />
    </>
  )
}
