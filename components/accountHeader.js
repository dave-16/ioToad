import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'

import {HeaderButton} from '../components/header_button'
import Image from 'next/image';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {LottieViewer} from '../components/lottie';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router'
import { style, width } from '@mui/system';

export const AccountHeader = () => {
    const { user, logout } = useAuth()
    // const {data: session} = useSession();
    const [showButtons, setshowButtons] = useState(false);
    const [name,setName] = useState('');
    const hamburgerButton = () => {
        setshowButtons(!showButtons);
       
        
    }
    const [content, setContent] = useState(
        (<Link href={`/Account/Signin`}><div className="header_button">
          <p>Sign in</p>
        </div></Link>)
      );
      var mycookie;
      if (name === '' && user) {
          setName('NA')
          setContent(<div className="header_button" onClick={logout}>
            <p>Sign out</p>
          </div>)
          mycookie = document.cookie;
          console.log(mycookie);
      }    return (
        <>
            <Head>
                <title>ioToad</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className='header_container_div' >
                <div className='top_div'>
                    <Link href={`/`}>
                        <div className='icon_div' style={{width: '200px'}}>
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
                        user ?
                            <div className='login_div'>
                                <Link href={`/Account`}>
                                    <image
                                       
                                        alt='photo' 
                                        layout="fixed" 
                                        width={35}
                                        height={35}   
                                        style={{borderRadius: '50%'}}   
                                    />
                                </Link>
                                <HeaderButton  name={name} style={{width: '200px'}} url='Account/'/>
                                {content}
                            </div>
                        :
                            <div className='login_div'>
                                <Link href={`/Account/Signin`}>
                                    <div className="header_button">
                                        <p style={{margin: '2px', fontSize: '20px', textAlign: 'center', fontSize: '1.275em', color: '#d4d8d5', fontFamily: '"Courier New", Courier, monospace'}}>
                                            Sign in
                                        </p>
                                    </div>
                                </Link>
                            </div>
                    }
                </div>
                <div className='bottom_div'>
                    <HeaderButton name='Account Settings' url='Account/'/>
                    <HeaderButton name='Payment Plans' url='Account/PaymentPlan'/>
                    <HeaderButton name='Download ioCAD' url='Account/DownloadioCAD'/>
                    {/* <HeaderButton name='Download addons' url=''/> */}
                    {/* <HeaderButton name='File Transfer' url=''/> */}
                </div>
                {
                    showButtons ? 
                        <div className='bottom_div_media'>
                            <HeaderButton name='Account Settings' url='Account/'/>
                            <HeaderButton name='Payment Plans' url='Account/PaymentPlan'/>
                            <HeaderButton name='Download ioCAD' url='Account/DownloadioCAD'/>
                            {/* <HeaderButton name='Download addons' url=''/> */}
                            {/* <HeaderButton name='File Transfer' url=''/> */}
                        </div>
                    :
                        null
                }
                <hr className='breaker_hr' style={{ border: '0', height: '1px', backgroundImage: 'linear-gradient(to right, #000015, #d4d8d5, #000015)'}}/>
            </div>
        </>
    )
};
