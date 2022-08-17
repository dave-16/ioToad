import { useState } from 'react';
import {PageBackground} from '../components/background.js';
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import Image from 'next/image';
import Slider from '@mui/material/Slider';

export default function bim() {
    const [value, setValue] = useState(200);
    const [value2, setValue2] = useState(200);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleChange2 = (event, newValue) => {
      setValue2(newValue);
    };
    const savingCalculator = (hr) => {
      switch (hr) {
        case 100: return 234;
        case 200: return 2740;
        case 300: return 5944;
        case 400: return 6589;
        case 500: return 8433;
        case 600: return 10942;
        case 700: return 12688;
        case 800: return 15393;
        case 900: return 17239;
        case 1000: return 20044;
        case 1100: return 22090;
        case 1200: return 24996;
        case 1300: return 27041;
        case 1400: return 30047;
        case 1500: return 32292;
        case 1600: return 35298;
        case 1700: return 37643;
        case 1800: return 40849;
        case 1900: return 43294;
        case 2000: return 46600;
        default: return 0;
      }
    }
    const costCalculator = (hr) => {
      let salary = hr*3050/100;
      let software = (hr/100%2 == 0) ? hr / 20 * 32 : (hr + 100) / 20 * 32;
      let hardware = (hr/100%2 == 0) ? hr + hr/10 : hr + hr/10 + 10;
      let saving = savingCalculator(hr);
      return salary + software + hardware - saving;
    }
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
                  level engineers stateside, and gives us the opportunity to hire extraordinarly talented engineers.
                  </p>
                <p>Slide to see how much your company can save:</p>
                <Slider 
                  aria-label="Hour" 
                  value={value}
                  onChange={handleChange}
                  step={100}
                  marks
                  min={100}
                  max={2000} 
                  valueLabelDisplay="auto"
                />
                <h3>Save {Math.round(100*savingCalculator(value)/(savingCalculator(value)+costCalculator(value)))}% 
                on {(value < 301) ? 1 : Math.ceil(value/200)} {value == 100 ? 'half' : 'full'} time BIM Pro*</h3>
                <h4>{value} hours for ${costCalculator(value)} (${Math.round(costCalculator(value)/value*100)/100} per hour)‡</h4>
                <p>* Savings of ${savingCalculator(value)} per month on {value} hours of BIM Modeling. Prices are compared to
                  hiring {(value < 301) ? 1 : Math.ceil(value/200)} {value == 100 ? 'half' : 'full'} time 
                  BIM Pro in the US. The cost of a BIM Modeler in the US is based on full time salary 
                  information from talent.com (${value*3050/100}) and also includes the cost of 
                  software ({(value/100%2 == 0) ? value / 20 * 32 : (value + 100) / 20 * 32}) and 
                  hardware ({(value/100%2 == 0) ? value + value/10 : value + value/10 + 10}).</p>
                <p>‡ All rates are shown as monthly rates inclusive of all applicable fees. 
                  All hours will be prorated and billed accordingly. We know some hours are worth more than others, 
                  that's why we'll always be honest with you about how long our work took, and how long we think our 
                  work should have taken. We'll never charge you for unproductive time and work hard to bill fairly.</p>
                <h2>Onshore Pricing US</h2>
                <p>Work directly with American engineers (namely John Brindley) to satisfy the demands 
                  of time sensitive and complex projects.</p>
                <p>Slide for pricing:</p>
                <Slider 
                  aria-label="Hour" 
                  value={value2}
                  onChange={handleChange2}
                  min={25}
                  max={250} 
                  valueLabelDisplay="auto"
                />
                <h2>{value2} hours for ${value2*50} ($50.00 per hour)†</h2>
                <p>† All rates are shown as monthly rates inclusive of all applicable fees. A minimum 
                  of 25 hours will be billed if any modeling work is assigned and delivered during the pay period. 
                  We know some hours are worth more than others, that's why we'll always be honest with you about 
                  how long our work took, and how long we think our work should have taken. 
                  We'll never charge you for unproductive time.</p>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    )
  }
  
