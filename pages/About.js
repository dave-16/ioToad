import {PageBackground} from '../components/background.js'
import {Header} from '../components/header'
import {Footer} from '../components/footer'
import Image from 'next/image';
export default function about() {
    return (
      <div style={{width: '100%', background: '#020221'}}>
        <PageBackground />
        <main style={{position: 'absolute', width: '100%'}}>
          <Header />
          <div style={{display: 'grid', placeItems: 'center', marginTop: '50px'}}>
            <div style={{color: '#f8f172', textAlign: 'center', maxWidth: '800px'}}>
              <div style={{width: '30%', marginLeft: '35%'}}>
                <Image
                  src="/iotoadlogo.png" 
                  layout="responsive"
                  width={50}
                  height={50}
                />
              </div>
              <h1>About ioToad</h1>
              <p>At IOToad our goal is to provide businesses with outsourced engineering and automation services. 
                Founded in 2021, IOToads mission is to pay good people for good work, especially those who couldn't 
                find work anywhere else. To ensure that we our working with the best and brightest, 
                IOToad pays our engineers from extremely underinvested countries where educated individuals are 
                highly under utilized like Ethiopia, Kenya, and Tanzania. IOToad pays double the national average 
                salary for to get the most talented individuals possible.<br/>
                "Having spent nearly a year in East Africa, I recognize that the only way to lift up 
                this part of the world is to start treating them as part of the global economy. 
                No one is talking about outsourcing to Africa, but its a huge mistake. 
                There are so many smart people, ready to do the hard work that we can't afford to do ourselves. 
                Every construction job should be completed in 3D before a human starts work. 
                It is imperative to the safety of construction workers, all of our time and resources, 
                and of course the bottom line."<br/>
                　　- <i>John Brindley, founder IOToad</i></p>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    )
  }
  
