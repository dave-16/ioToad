import {PageBackground} from '../components/background.js'
import {Header} from '../components/header'
import {Footer} from '../components/footer'
import Image from 'next/image';
export default function bim() {
    return (
      <div style={{width: '100%', background: '#020221'}}>
        <PageBackground />
        <main style={{position: 'absolute', width: '100%'}}>
          <Header />
          <div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}>
            <div style={{color: '#f8f172', textAlign: 'center', maxWidth: '800px'}}>
              <div style={{width: '50%', marginLeft: '25%'}}>
                <Image
                    src="/bimteam.svg" 
                    layout="responsive"
                    width={960}
                    height={540}
                />
              </div>
              <h1>BIM Services</h1>
              <p>Keeping track of 3d systems requires a lot of time and attention to detail,
                but modeling can prevent costly mistakes from taking place in the field. 
                IOToad allows companies to scale their virtual modeling capacity while eliminating
                much of the burden of bringing on a new hire.<br/>
                Prices for local engineers and overseas engineers are presented below. 
                Prices shown include all applicable charges and fees for monthly packages.</p>
                <h2>Offshore Pricing</h2>
                <p>IOToad's experienced American engineers oversee junior engineers from developing 
                  countries across Africa. Junior engineers handle the majority of the modeling work. 
                  The experienced engineers oversee the projects, make design decisions, 
                  and interact with project staff from all involved parties. This setup ensures 
                  that your company is always working with someone who understands the project and 
                  has the ability to respond in real time, while also granting affordable pricing, 
                  and quick turnaround time.<br/>
                  IOToad recognizes the need to create a more equitable future especially for 
                  those who have been underserved by the global economic system, 
                  that's why we pay our eningeers double the standard rate within their country. 
                  Paying more than fair wages feels good, is still much cheaper than hiring entry 
                  level engineers stateside, and gives us the opportunity to hire extraordinarly talented engineers.</p>
                <h2>Onshore Pricing US</h2>
                <p>Work directly with American engineers (namely John Brindley) to satisfy the demands 
                  of time sensitive and complex projects.</p>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    )
  }
  
