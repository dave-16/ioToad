import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'
import {useSession, signIn, signOut} from 'next-auth/react'
import {HeaderButton} from '../components/header_button'
import Image from 'next/image';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {LottieViewer} from '../components/lottie'

export const AccountHeader = () => {
    const {data: session} = useSession();
    const [showButtons, setshowButtons] = useState(false);
    const hamburgerButton = () => {
        setshowButtons(!showButtons);
    }
    return (
        <>
            <Head>
                <title>ioToad</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className='header_container_div' >
                <div className='top_div'>
                    <Link href={`/`}>
                        <div className='icon_div'>
                            <LottieViewer choice={'logo'} width={60} height={50} loop={true}/>
                        </div>
                    </Link>
                    <div className='hamburger_button_div'>
                        <IconButton
                            onClick={() => {
                                hamburgerButton();
                            }}
                        >
                            <div className='header_button hamburger_button'>
                                <MenuIcon fontSize='large'/>
                            </div>
                        </IconButton>
                    </div>
                    {
                        session ?
                            <div className='login_div'>
                                <Link href={`/Account`}>
                                    <Image
                                        src={session.user.image} 
                                        alt='photo' 
                                        layout="fixed" 
                                        width={35}
                                        height={35}   
                                        style={{borderRadius: '50%'}}   
                                    />
                                </Link>
                                <HeaderButton name={session.user.name} url='Account'/>
                            </div>
                        :
                            <div className='login_div'>
                                <button className="header_button" onClick={() => signIn("google")} style={{border: 'solid white 2px'}}>
                                    <p style={{margin: '2px', fontSize: '20px', textAlign: 'center', fontSize: '1.275em', color: '#d4d8d5', fontFamily: '"Courier New", Courier, monospace'}}>
                                        Sign in
                                    </p>
                                </button>
                            </div>
                    }
                </div>
                <div className='bottom_div'>
                    <HeaderButton name='Account Settings' url=''/>
                    <HeaderButton name='Payment Plans' url=''/>
                    <HeaderButton name='Download ioCAD' url=''/>
                    {/* <HeaderButton name='Download addons' url=''/> */}
                    {/* <HeaderButton name='File Transfer' url=''/> */}
                </div>
                <hr className='breaker_hr' style={{ border: '0', height: '1px', backgroundImage: 'linear-gradient(to right, #000015, #d4d8d5, #000015)'}}/>
            </div>
        </>
    )
};
