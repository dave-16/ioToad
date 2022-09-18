
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
      <div className='wrapper_div'>
        <PageBackground />
        <main className="container_main">
          <Header />
          <div className='download_div'>
            <div className="download_button">
              Download ioCAD
            </div>
          </div>
          <div className='content_div'>
            <div className='iocad_discription_div'>
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
  
