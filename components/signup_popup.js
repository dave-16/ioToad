import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'
import {HeaderButton} from '../components/header_button'
import Image from 'next/image';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {LottieViewer} from '../components/lottie';
import TestModals from "../components/testModal";
import Login from '../pages/login';
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
export const SignUpPopup = () => {
    const {user,signup} = useAuth();
    const [display, setDisplay] = useState('block');
    function stopDisplaying() {
        setDisplay('none');
    }
    const [dis,setDis] = useState('')
    const [data, setData] = useState({
      email: '',
      password: '',
    })
  
    const handleSignup = async (e) => {
        e.preventDefault()
    
        try {
          await signup(data.email, data.password)
        } catch (err) {
          console.log(err)
          setDis(err.message)
        }
    
        console.log(data)
      }
    
    return (
      
    <div style={{display: display}}>
      
        <div className='Zscroller' style={{width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', position: 'fixed', zIndex: '5'}}>
            <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '100%', height: '6%'}}/>
            <div  style={{ width: '100%',  display: 'inline-flex'}}>
                <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '38%', height: '100%'}}/>
                <div style={{backgroundColor: 'white', width: '468px', height: '100%', display: 'flex', padding: '5% 1%', flexDirection: 'column', justifyContent:'center', alignItems: 'center', color: 'black'}}>
                    <LottieViewer choice={'logo'} width={60} height={50} loop={true}/>
                    <h3 className='Zcenter'>Signup into ioCAD.</h3>              
                    <h1 className="text-center my-3 ZFS">Signup</h1>
                    <p className='ZerrorH'>{dis}</p>
      <Form className='Zform' onSubmit={handleSignup}>
        <Form.Group className="mb-3 ZF" controlId="formBasicEmail">
          
          <Form.Label>Email</Form.Label>
          <Form.Control  className='Zin'
            onChange={(e) =>
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

        <Form.Group className="mb-3 ZF" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className='Zin'
            onChange={(e) =>
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
        <Button className='ZbtnSub' variant="primary" type="submit">
          Signup
        </Button>
      </Form>
         <br/>
        <Link  href="/Account/Signin" passHref>Login ?</Link>
       
                </div>
                
                <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '38%', height: '100%'}}/>
            </div>
            <div onClick={stopDisplaying} style={{backgroundColor: 'transparent', width: '100%', height: '25%'}}/>
        </div>
    </div>
    );
};