import '../styles/globals.css'
import '../styles/iocad.css'
import '../styles/header.css'
import '../styles/downloadButton.css'
import {LottieViewer} from '../components/lottie'
import {useEffect, useState} from 'react';
import {SessionProvider} from 'next-auth/react';

function MyApp({ Component, pageProps, session }) {
  const size = useWindowSize();
  return <SessionProvider session={session}>
    <div  style={{position: 'fixed', top: '0', left:'0', zIndex: '-1',  backgroundColor: '#020221', width: '100%', height: '100%'}}>
      <LottieViewer choice={'grid'} width={size.width} height={size.height} loop={false}/>
    </div>
    <div>
      <Component {...pageProps}/>
    </div>
  </SessionProvider>
}

export default MyApp

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); 
  return windowSize;
}