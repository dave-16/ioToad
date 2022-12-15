//@ts-nocheck
import '../styles/globals.css'
import '../styles/iocad.css'
import '../styles/header.css'
import '../styles/downloadButton.css'
import '../styles/auth.css'
import {LottieViewer} from '../components/lottie'
import {useEffect, useState} from 'react';
import { AuthContextProvider } from '../context/AuthContext'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute';
import type { AppProps } from 'next/app'

const noAuthRequired = ['/','/login','/signup']

function MyApp({ Component, pageProps}:AppProps) {
  const size = useWindowSize();
  const router = useRouter()
  return <AuthContextProvider >

    <div  style={{position: 'fixed', top: '0', left:'0', zIndex: '-1',  backgroundColor: '#020221', width: '100%', height: '100%'}}>
      <LottieViewer choice={'grid'} width={size.width} height={size.height} loop={false}/>
    </div>
    <div>
      {noAuthRequired.includes(router.pathname)? (
      <Component {...pageProps}/>
      ):(
        
        <Component {...pageProps} />
     
      )}
    </div>
  </AuthContextProvider>
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