import Link from 'next/link'

import {PageBackground} from '../components/background.js'
import {Header} from '../components/header'
import {Footer} from '../components/footer'
import Image from 'next/image';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { IFCLoader } from 'three/examples/jsm/loaders/IFCLoader';
import { SignInPopup } from '../components/signin_popup.js'
import {Login} from './login'
import {Signup} from './signup';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router'

const Model = () => {
  const ifcloader = new IFCLoader();
  ifcloader.ifcManager.setWasmPath('../../../../');
  const ifc = useLoader(IFCLoader, "./01.ifc");
  return (
    <>
      <primitive object={ifc} scale={0.4}/>
    </>
  );
};
export default function Iocad() {

  const [signinComponent, setSigninComponent] = useState(<div/>);
  const { user, logout } = useAuth()

    function downloadClicked() {
      if (user) {
        
      } else {
        setSigninComponent(<SignInPopup/> );
      }
    }
    return (
      <div className='wrapper_div'>
        {/* <PageBackground /> */}
        
        <Header />
        <main className="container_main" style={{padding: '5%'}}>
          <div className='download_div'>
            <Link href="/Account/DownloadioCAD">
              <div className="download_button" onClick={downloadClicked} style={{color: '#020221'}}>
                Download ioCAD
              </div>
            </Link>
          </div>
          <div className='content_div'>
            <div className='iocad_discription_div'>
              <h1>ioCAD</h1>
              <p>A software for virtual construction.</p>
              <p>.............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... ............. </p>
            </div>
            <div className='iocad_model_div'>
              <div className='iocad_picture'>
                  <Image
                      src="/iocad.png" 
                      layout="fill"
                  />
              </div>
              <div className='iocad_model'>
                  <Canvas>
                      <ambientLight intensity={0.2} />
                      <pointLight position={[10, 10, 10]} />
                      <mesh position={[0, 0, 0]}>
                          <Model />
                      </mesh>
                      <OrbitControls />
                  </Canvas>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    )
  }
  
