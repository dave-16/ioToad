import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'
import {useSession, signIn, signOut} from 'next-auth/react'
import {HeaderButton} from '../components/header_button'
import Image from 'next/image';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {LottieViewer} from '../components/lottie'

export const SignInPopup = () => {
    const [display, setDisplay] = useState('block');
    function stopDisplaying() {
        setDisplay('none');
    }
    return (
    <div style={{display: display}}>
        <div style={{width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', position: 'fixed', zIndex: '5'}}>
            <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '100%', height: '25%'}}/>
            <div style={{ width: '100%', height: '50%', display: 'inline-flex'}}>
                <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '25%', height: '100%'}}/>
                <div style={{backgroundColor: 'white', width: '50%', height: '100%', display: 'flex', padding: '5% 1%', flexDirection: 'column', justifyContent:'center', alignItems: 'center', color: 'black'}}>
                    <LottieViewer choice={'logo'} width={60} height={50} loop={true}/>
                    <h3>Sign in into ioCAD.</h3>
                    <div onClick={() => signIn("google")} style={{border: 'solid #b1adad 2px', padding: '0px 10px', borderRadius: '12px', textAlign: 'center', userSelect: 'none'}}>
                        <p>Google Sign In</p>
                    </div>
                </div>
                <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '25%', height: '100%'}}/>
            </div>
            <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '100%', height: '25%'}}/>
        </div>
    </div>
    );
};