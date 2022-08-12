import {HeaderButton} from '../components/header_button'
import Image from 'next/image';

export const Header = () => (
    <>
        <div style={{ backgroundColor: 'none' , width: '100%'}}>
            <div >
                <div style={{display: 'inline-flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '10px 30px'}}>
                    <Image
                        src="/favicon.ico" 
                        layout="fixed"
                        width={50}
                        height={50}
                    />
                    <HeaderButton name='Login'/>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <HeaderButton name='Home' url=''/>
                <HeaderButton name='ioCAD' url='ioCAD'/>
                <HeaderButton name='BIM' url='BIM'/>
                <HeaderButton name='Automation' url='Automation'/>
                <HeaderButton name='Offshoring' url='Offshoring'/>
                <HeaderButton name='About' url='About'/>
            </div>
            <hr style={{ border: '0', height: '1px', backgroundImage: 'linear-gradient(to right, #000015, #f8f172, #000015)'}}/>
        </div>
    </>
);