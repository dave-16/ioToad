// import {PageBackground} from '../components/background.js'
import {Header} from '../../components/header'
import {Footer} from '../../components/footer'
import Image from 'next/image';
import {LottieViewer} from '../../components/lottie'
import {useSession, signIn, signOut} from 'next-auth/react'
import { SignInPopup } from '../../components/signin_popup';

export default function signin() {
    return (
      <SignInPopup/>
    )
  }
  
