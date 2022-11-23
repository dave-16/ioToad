// import {PageBackground} from '../components/background.js'
import {AccountHeader} from '../../components/accountHeader'
import {Footer} from '../../components/footer'
import Image from 'next/image';
import {LottieViewer} from '../../components/lottie'
import {useSession, signIn, signOut} from 'next-auth/react'
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function Account() {
    const {data: session} = useSession({required: true,});
    const [name, setName] = useState('');
    if (name === '' && session) {
        setName(session.user.name)
        console.log(session)
    }
    
    return (
      <div style={{width: '100%', background: '#020221'}}>
        <AccountHeader/>
        <main style={{position: 'absolute', width: '100%', padding: '0% 5%'}}>
          <div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}>
            <h2>Account Settings</h2>
            <p>Welcome {name}</p>
            <div className="header_button" onClick={() => signOut()}>
                <p>Sign out</p>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    )
  }
  
