import '@/styles/globals.css'
import '@/styles/responsive.css'
import { Orbitron, Poppins, Karla } from '@next/font/google'
import Loading from 'components/Loading'
import { useEffect, useState } from 'react'

const orbitron = Orbitron({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: '100' })
const karla = Karla({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false)
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
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
            .contact-mail,.close-btn-menu {
              font-family: ${poppins.style.fontFamily};
            }
            .footer-cta h2 ,.footer-cta p,.contact-form {
              font-family: ${poppins.style.fontFamily};
            }
        `}</style>
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <Loading />
      )}
    </>
  )
}
