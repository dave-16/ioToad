
import {PageBackground} from '../components/background.js'
import {Header} from '../components/header'
import {Footer} from '../components/footer'
import Image from 'next/image';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { IFCLoader } from 'three/examples/jsm/loaders/IFCLoader';
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
export default function iocad() {
    return (
      <div style={{width: '100%', background: '#020221'}}>
        <PageBackground />
        <main style={{position: 'absolute', width: '100%'}}>
          <Header />
          <div style={{display: 'grid', placeItems: 'center', margin: '20px 0px'}}>
            <div className="download_button" style={{fontSize: '30px'}}>
              Download ioCAD
            </div>
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            <div style={{color: '#f8f172', textAlign: 'center', maxWidth: '40%',margin: '20px'}}>
              <h1>ioCAD</h1>
              <h2>A software for virtual construction.</h2>
              <p>.............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... .............
              .............. ........ .......... ............. </p>
            </div>
            <div style={{margin: '20px', height: 'fit-content', backgroundColor: 'gray'}}>
              <div style={{ zIndex: '2', pointerEvents: 'none', position: 'absolute'}}>
                  <Image
                      src="/iocad.png" 
                      layout="fixed"
                      width={480}
                      height={270}
                  />
              </div>
              <div style={{left: '0px', top: '0px', width: '480px', height: '263px'}}>
                  <Canvas>
                      <ambientLight intensity={0.2} />
                      <pointLight position={[10, 10, 10]} />
                      {/* <Suspense fallback={null}> */}
                      <mesh position={[0, 0, 0]}>
                          <Model />
                      </mesh>
                      {/* <Environment preset="forest" background />  */}
                      {/* </Suspense> */}
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
  
