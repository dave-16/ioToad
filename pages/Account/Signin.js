// import {PageBackground} from '../components/background.js'
import {AccountHeader} from '../../components/accountHeader'
import {Footer} from '../../components/footer'
import Image from 'next/image';
import {LottieViewer} from '../../components/lottie'
import { SignInPopup } from '../../components/signin_popup';
import { useState } from 'react';
import { Account } from './index';
import { useAuth } from '../../context/AuthContext';
import {Login} from '../login'
import Router, { useRouter } from 'next/router';

export default function Signin() {
  // const {data: session} = useSession();
  const {user,logout} =useAuth();
  const router = useRouter();
   
  const handleSignout = async (e) => {
    e.preventDefault()

    console.log(user)
    try {
      
      Router.push('/')
      logout
    } catch (err) {
      console.log(err)
    }
  }
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
            <div className="header_button" onClick={handleSignout} >
                <p>Sign out</p>
            </div>
          </div>
          <Footer />
        </main>
      </div> :
          <SignInPopup/> 
        }
      </>
    )
  }
  
