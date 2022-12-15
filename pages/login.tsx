

//@ts-nocheck
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import Link from 'next/link'

import { signInWithGoogle } from '../firebase.config';
import {HeaderButton} from './header_button'
import Image from 'next/image';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { LottieViewer } from '../components/lottie';

 const Login = () => {
  const router  = useRouter()
    const [display, setDisplay] = useState('block');
    function stopDisplaying() {
        setDisplay('none');
        
    }
    const [data, setData] = useState({
      email: '',
      password: '',
    })
  
    const handleLogin = async (e: any) => {
      e.preventDefault()
  
      console.log(user)
      try {
        await login(data.email, data.password)
        router.push('/dashboard')
      } catch (err) {
        console.log(err)
      }
    }
  
    return (
    <div style={{display: display}}>
        <div className='Zholderone' style={{width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', position: 'fixed', zIndex: '5'}}>
            <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '100%', height: '25%'}}/>
            <div className='Zholdernew' style={{ width: '100%', height: '50%', display: 'inline-flex'}}>
                <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '25%', height: '100%'}}/>
                <div style={{backgroundColor: 'white', width: '50%', height: '100%', display: 'flex', padding: '5% 1%', flexDirection: 'column', justifyContent:'center', alignItems: 'center', color: 'black'}}>
                    <LottieViewer choice={'logo'} width={60} height={50} loop={true}/>
                    <h3>Sign in into ioCAD.</h3>

                  <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
            required
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <Button variant='primary' type='submit'>
     
        <Link href="/signup" passHref> Signup</Link>
      </Button>
    </div>
                </div>
                <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '25%', height: '100%'}}/>
            </div>
            <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '100%', height: '25%'}}/>
        </div>
    </div>
    );
};

export default Login;