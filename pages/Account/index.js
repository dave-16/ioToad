// import {PageBackground} from '../components/background.js'
import Link from 'next/link'

import {AccountHeader} from '../../components/accountHeader'
import {Footer} from '../../components/footer'

import {LottieViewer} from '../../components/lottie'

import { TextField } from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Account() {
    // const {data: session} = useSession();
    const {user , logout} =useAuth();
    const [name, setName] = useState('');
    const [content, setContent] = useState(
      (<Link href={`/Account/Signin`}><div className="header_button">
        <p>Sign in</p>
      </div></Link>)
    );
    var mycookie;
    if (name === '' && user) {
        setName(user.email)
        setContent(<div className="header_button" onClick={() => logout}>
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
            <p className='Zuseremail'>Welcome {name}</p>
            {content}
          </div>
          <Footer />
        </main>
      </div>
    )
  }
  
