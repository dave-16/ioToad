// import {PageBackground} from '../components/background.js'
import {AccountHeader} from '../../components/accountHeader'
import {Footer} from '../../components/footer'
import Image from 'next/image';
import {LottieViewer} from '../../components/lottie'
import { SignInPopup } from '../../components/signin_popup';
import { SignUpPopup } from '../../components/signup_popup';
import { useState } from 'react';
import { Account } from './index';
import { useAuth } from '../../context/AuthContext';
import {Login} from '../login'

export default function Signin() {
  // const {data: session} = useSession();
  const {user,logout} =useAuth();
    return (
      <>
        {
          user ?
          <div style={{width: '100%', background: '#020221'}}>
        <AccountHeader/>
        <main style={{position: 'absolute', width: '100%', padding: '0% 5%'}}>
          <div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}>
            <h2>Account Settings</h2>
            <p>You are already signed in</p>
            <div className="header_button" onClick={() => logout}>
                <p>Sign out</p>
            </div>
          </div>
          <Footer />
        </main>
      </div> :
          <SignUpPopup/> 
        }
      </>
    )
  }
  
