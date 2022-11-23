
// import {PageBackground} from '../components/background.js'
import {Header} from '../components/header'
import {Footer} from '../components/footer'
import Image from 'next/image';
export default function automation() {
    return (
      <div style={{width: '100%', background: '#020221'}}>
          <Header />
        {/* <PageBackground /> */}
        <main style={{position: 'absolute', width: '100%', padding: '0% 5%'}}>
          <div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}>
           <div style={{padding: '20px', textAlign: 'center', maxWidth: '800px'}}>
            <div style={{width: '50%', marginLeft: '25%'}}>
              <Image
                  src="/Automation.png" 
                  layout="responsive"
                  width={960}
                  height={540}
              />
            </div>
            <h1>Automation</h1>
            <p>The wheels of innovation keep turning at an ever-faster pace.
              Automate your business processes to keep up with the times. Of course, 
              not all of your business can be automated, but with each passing year more and more components can be. 
              That's why ioToad is so into the idea of kiazen. This Japanese idea is a business management 
              philosophy aimed at producing ongoing incremental improvements throughout an organization, 
              especially in quality and efficiency.<br/>
              At ioToad we know that kiazen is the way to go when working with established businesses, 
              especially in relation to automation. Little by little, we can create tools, programs, 
              and bots that improve business efficiency, customer service, and product quality.<br/>
              Get in touch today to have a free consult with ioToad to see what bits of business we can 
              automate together. Click the toad to contact us 😉.</p>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    )
  }
  
