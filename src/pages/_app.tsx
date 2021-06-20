import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { SubHeader } from '../components/SubHeader';
import { BackToTopButton } from '../components/Buttons/BackToTop';
import { Footer } from '../components/Footer';

import '../styles/global.scss';

function MyApp({ Component, pageProps}: AppProps) {
  return (
    <>
      <Header />
      <SubHeader />
      <Component {...pageProps} />
      <BackToTopButton />
      <Footer />
    </>
  )
}

export default MyApp