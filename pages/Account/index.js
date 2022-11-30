// import {PageBackground} from '../components/background.js'
import Link from 'next/link'

import {AccountHeader} from '../../components/accountHeader'
import {Footer} from '../../components/footer'
import Image from 'next/image';
import {LottieViewer} from '../../components/lottie'
import {useSession, signIn, signOut} from 'next-auth/react'
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function Account() {
    const {data: session} = useSession();
    const [name, setName] = useState('');
    const [content, setContent] = useState(
      (<Link href={`/Account/Signin`}><div className="header_button">
        <p>Sign in</p>
      </div></Link>)
    );
    var mycookie;
    if (name === '' && session) {
        setName(session.user.name)
        setContent(<div className="header_button" onClick={() => signOut()}>
          <p>Sign out</p>
        </div>)
        mycookie = document.cookie;
        console.log(mycookie);
    }
    
    return (
      <div style={{width: '100%', background: '#020221'}}>
        <AccountHeader/>
        <main style={{position: 'absolute', width: '100%', padding: '0% 5%'}}>
          <div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}>
            <h2>Account Settings</h2>
            <p>Welcome {name}</p>
            {content}
          </div>
          <Footer />
        </main>
      </div>
    )
  }
  
