// import {PageBackground} from '../components/background.js'
import {AccountHeader} from '../../components/accountHeader'
import {Footer} from '../../components/footer'
import {useSession, signIn, signOut} from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react';
import {HeaderButton} from '../../components/header_button'

var firstTimeLoad = true;
export default function DownloadioCAD() {
  const {data: session} = useSession({required: true,});
  const [downloadLink, setDownloadLink] = useState(<div/>);
  const [content, setContent] = useState(
    (<div>
        <p>Please signin to continue</p>
        <Link href={`/Account/Signin`}>
          <div className="header_button">
            <p>Sign in</p>
          </div>
        </Link>
      </div>)
  );
  function triggerDownload(url, ext) {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `.${ext}`);
    link.setAttribute('target', 'new');
    document.body.appendChild(link);
    link.click();
  }
  function downloadClicked() {
    if (window.localStorage.getItem('plan')) {
      setDownloadLink(<>
        <a onClick={triggerDownload('https://storage.googleapis.com/iotoad_iocad_bucket123/iocad_v0.1.330.zip', 'zip')}><p>Download ioCAD installable: ioCAD_v0.1.330.msix</p></a>
        <a onClick={triggerDownload('https://storage.googleapis.com/iotoad_iocad_bucket123/iocad_v0.1.330.msix', 'msix')}><p>Download ioCAD compressed: ioCAD_v0.1.330.zip</p></a>
      </>)
    } else {
      setContent(
        <div>
          <p>Select a plan and pay before downloading the software</p>
          <HeaderButton name='Payment Plans' url='Account/PaymentPlan'/>

        </div>
      )
    }
    
  }
  if (session && firstTimeLoad) {
    firstTimeLoad = false;
    setContent(
      <div className="download_button" onClick={downloadClicked} style={{color: '#020221'}}>
                Download ioCAD
              </div>
    )
  }
  
    return (
      <div style={{width: '100%', background: '#020221'}}>
        <AccountHeader/>
        <main style={{position: 'absolute', width: '100%', padding: '0% 5%'}}>
          <div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}>
            <h2>Download ioCAD</h2>
            {content}
            {downloadLink}
          </div>
          <Footer />
        </main>
      </div>      
    )
  }
  
