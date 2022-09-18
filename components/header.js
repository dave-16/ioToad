import { useState } from 'react';
import Head from 'next/head';
import {HeaderButton} from '../components/header_button'
import Image from 'next/image';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => {
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
                    <div className='icon_div'>
                        <Image
                            src="/favicon.ico" 
                            layout="fixed"
                            width={50}
                            height={50}
                        />
                    </div>
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
                    <div className='login_div'>
                        <HeaderButton name='Login'/>
                    </div>
                </div>
                <div className='bottom_div'>
                    <HeaderButton name='Home' url=''/>
                    <HeaderButton name='ioCAD' url='iocad'/>
                    <HeaderButton name='BIM' url='BIM'/>
                    <HeaderButton name='Automation' url='Automation'/>
                    <HeaderButton name='Offshoring' url='Offshoring'/>
                    <HeaderButton name='About' url='About'/>
                </div>
                {
                    showButtons ? 
                        <div className='bottom_div_media'>
                            <HeaderButton name='Home' url=''/>
                            <HeaderButton name='ioCAD' url='iocad'/>
                            <HeaderButton name='BIM' url='BIM'/>
                            <HeaderButton name='Automation' url='Automation'/>
                            <HeaderButton name='Offshoring' url='Offshoring'/>
                            <HeaderButton name='About' url='About'/>
                        </div>
                    :
                        null
                }
                <hr className='breaker_hr' style={{ border: '0', height: '1px', backgroundImage: 'linear-gradient(to right, #000015, #f8f172, #000015)'}}/>
            </div>
        </>
    )
};
