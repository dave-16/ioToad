
import {PageBackground} from '../components/background.js'
import {Header} from '../components/header'
import {Footer} from '../components/footer'
import Image from 'next/image';
export default function offshoring() {
    return (
      <div style={{width: '100%', background: '#020221'}}>
        <PageBackground />
        <main style={{position: 'absolute', width: '100%'}}>
          <Header />
          <div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}>
            <div style={{color: '#f8f172', padding: '20px', textAlign: 'center', maxWidth: '800px'}}>
              <div style={{width: '30%', marginLeft: '35%'}}>
                <Image
                    src="/Offshoring.svg" 
                    layout="responsive"
                    width={100}
                    height={100}
                />
              </div>
              <h1>Offshoring</h1>
              <p>Offshoring business processes can save you barrels of money. 
                Wages in developing nations are remarkably cheap and well-educated candidates abound. 
                All of our development work is handled in collaboration with a number of contractors mostly in Africa. 
                We've worked with contractors all over the southern hemisphere for nearly a decade. 
                Once we know exactly the kind of service you need, we'll handle everything from contracting, 
                training, oversight, and quality assurance.
                At ioToad, we want your business to benefit from the global economy just like the biggest of companies. 
                Click the toad to get in touch and start saving your business money ASAP!</p>
            </div>
          </div>
          
          <Footer />
        </main>
      </div>
    )
  }
  
