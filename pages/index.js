import Head from 'next/head';
import Image from 'next/image';
import {Picture, Thumbnail} from '../components/picture'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
// const Model = () => {
//     const gltf = useLoader(GLTFLoader, "./p.gltf");
//     return (
//       <>
//         <primitive object={gltf.scene} scale={0.4} />
//       </>
//     );
//   };

export default function App() {
  const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  const triplet = (e1, e2, e3) => keyStr.charAt(e1 >> 2) + keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) + keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) + keyStr.charAt(e3 & 63)
  const rgbDataURL = (r, g, b) => `data:image/gif;base64,R0lGODlhAQABAPAA${ triplet(0, r, g) + triplet(b, 255, 255) }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

  return (
    <div>
        <style>
            {`
            .background_image1 {
                opacity: 0.6;
            }
            .background_image2 {
                opacity: 0.4;
            }
            `}
        </style>
        <Head>
            <title>ioToad</title>
        </Head>
        <main style={{ background: '#000015'}}>
            <div style={{ backgroundColor: '#000015', position: 'fixed', width: '100%', overflow: 'hidden', zIndex: '-1' }}>
                <Image
                    src="/background_grid2.png" 
                    layout="fixed"
                    width={1890}
                    height={1240}
                    quality={100}
                    placeholder="blur"
                    blurDataURL={rgbDataURL(0, 0, 0)}
                    className="background_image1"
                />
            </div>            
            <div style={{ position: 'absolute', width: '100%',height: '100%', overflowY: 'auto', overflowX: 'hidden'}}>
                <div>
                    <div style={{ position: 'absolute', width: '100%', fontSize: '80px', color: 'white', alignContent: 'center'}}>
                        <Image
                            src="/background_grid2.png" 
                            layout="fixed"
                            width={1890}
                            height={1240}
                            className="background_image2"
                        /> 
                        
                    </div>
                    <div>
                        HEADER
                    </div>
                    <Picture/>
                </div>
                <div style={{color: 'white'}}>
                    
                </div>
                <div style={{color: 'white', width: '100%', display: 'flex', flexFlow: 'row', justifyContent: 'center'}}>
                    <div style={{ width: '40%'}}>
                        <h2>ioCAD</h2>
                        <p>our porduct</p>
                        iocad is .............. ..........
                    </div>
                    <div>
                        <Image
                            src="/iocad.jpg" 
                            layout="fixed"
                            width={480}
                            height={254.5}
                        />
                        
                        {/* <Canvas>
                            <Suspense fallback={null}>
                            <Model />
                            <OrbitControls />
                            <Environment preset="forest" background /> 
                            </Suspense>
                        </Canvas> */}
                    </div>
                    
                </div>
                
            </div>

        </main>
    </div>
  );
}
