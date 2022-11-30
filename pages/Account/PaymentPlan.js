// import {PageBackground} from '../components/background.js'
import {AccountHeader} from '../../components/accountHeader'
import {Footer} from '../../components/footer'
import Image from 'next/image';
import { Package } from '../../components/package';
import {LottieViewer} from '../../components/lottie'
import {useSession, signIn, signOut} from 'next-auth/react'
import { SignInPopup } from '../../components/signin_popup';
import Link from 'next/link'
import { useState } from 'react';
import { db } from '../../firebase.config';
import { doc, getDocFromCache, getDocs, collection, getDoc } from 'firebase/firestore'
import { Button, Input, TextField } from '@material-ui/core';

var firstTimeLoad = true;
export default function PaymentPlan() {
  const {data: session} = useSession({required: true,});
  const [content, setContent] = useState(
    (<div>
        <p>Please signin to continue</p>
        <Link href={`/Account/Signin`}>
          <div className="header_button">
            <p>Sign in</p>
          </div>
        </Link>
      </div>)
  );
  const [currentPlan, setCurrentPlan] = useState('Basic')
  function downloadClicked() {
    console.log('downloadClicked')
    
  }
  function basiClicked() {
    setCurrentPlan('Basic');
    window.localStorage.setItem('plan', 'basic');
  }
  function standardClicked() {
    setCurrentPlan('Standard');
    window.localStorage.setItem('plan', 'standard');
  }
  function premiumClicked() {
    setCurrentPlan('Premium');
    window.localStorage.setItem('plan', 'premium');
  }
  console.log(currentPlan)
  if (session && firstTimeLoad) {
    firstTimeLoad = false;
    setContent(
      <div style={{width: '100%'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Package name='Basic' ammount='10' selectClicked={basiClicked}/> 
          <Package name='Standard' ammount='50' selectClicked={standardClicked}/>
          <Package name='Premium' ammount='150' selectClicked={premiumClicked}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 style={{textAlign: 'center'}}>Billing Details</h2>
            <TextField 
              inputMode='numeric'
              required
              placeholder='Card Number'
              inputProps={{ style: {
                 color: '#020221', 
                 backgroundColor: "white", 
                 opacity: '0.7',
                 borderRadius: '7px',
                 padding: '17px 22px',
                 minWidth: '300px',
                 maxWidth: '400px',
                 marginTop: '5px'
                } }}>Card Number</TextField>
            <TextField
              inputMode='numeric'
              required
              placeholder='Exp Date'
              inputProps={{ style: {
                 color: '#020221', 
                 backgroundColor: "white", 
                 opacity: '0.7',
                 borderRadius: '7px',
                 padding: '17px 22px',
                 minWidth: '300px',
                 maxWidth: '400px',
                 marginTop: '5px'
                } }}>Exp Date</TextField>
            <TextField
              inputMode='numeric'
              required
              placeholder='Cvv'
              inputProps={{ style: {
                 color: '#020221', 
                 backgroundColor: "white", 
                 opacity: '0.7',
                 borderRadius: '7px',
                 padding: '17px 22px',
                 minWidth: '300px',
                 maxWidth: '400px',
                 marginTop: '5px'
            }}}>Cvv</TextField>
            <Button
              onClick={() => {
                window.localStorage.setItem('paid', window.localStorage.getItem('plan'));
              }}
              style={{
                borderRadius: '8px',
                backgroundColor: "#787888",
                padding: "18px 36px",
                margin: "10px",
                fontSize: "18px"
            }}
            >Submit</Button>
        </div>
      </div>
    )
  }
  
    return (
      <div style={{width: '100%', background: '#020221'}}>
        <AccountHeader/>
        <main style={{position: 'absolute', width: '100%', padding: '0% 5%'}}>
          <div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}>
            <h2>Payment Plan</h2>
              {session ? <p style={{textAlign: 'center'}}>Choose the package that suits you: {currentPlan}</p> : null}
            {content}
          </div>
          <Footer />
        </main>
      </div>      
    )
  }
  
