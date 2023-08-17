import React from 'react'
import Colom11 from '../Component/Colom/Colom11'
import Swiper1 from '../Component/Silde/Swiper'
import Slider1 from '../Component/Silde/Slider1'
//import Card7 from '../Component/Cards/Card7'
import Card5 from '../Component/Cards/Card5'
import Card2 from '../Component/Cards/Card2'
import Counter from '../Component/Counter'
import Footer from '../Component/Footer'



function Webdesign() {
  return (
    <div>
    <Colom11/>
    <div className='box-swiper'><Swiper1/></div>
    <div className='box-inner10'><h1 className="head1" style={{padding:50}}>Have A Softwae idea in your Mind</h1></div>
    <div className='box-inner11'><h4 className='head' style={{padding:20}}>Get In Touch</h4><p className="head">Let's discuss your project and build something Extraordinary</p></div>
    <div className='box-inner12'>
    <h1 className='head1' style={{color:"black"}}>Fantasy Football App Development Expertise</h1>
     <div className='d-flex'>
    <div className='box-inner13'>
    <img src =""/>
     <h1>Fantasy Sports Web App</h1>
     <p>
     Our proficient fantasy football app developers possess immense experience and can create feature-rich fantasy sports web applications.					</p>
    </div>
    <div className='box-inner14'>
    <img src =""/>
    <h1>Fantasy Sports Mobile App</h1>
    <p>
    
    Being a leading Fantasy Football App Development Company in India, we have expertise in creating and serving target-based fantasy sports mobile apps.					</p>
   
    </div>
    <div className='box-inner15'>
    <img src =""/>
    <h1>Fantasy Scoring System</h1>
    <p>
    Our proficient fantasy football app developers possess immense experience and can create feature-rich fantasy sports web applications.					</p>
   
    </div>
    <div className='box-inner16'>
    <img src =""/>
    <h1>Fantasy Analytics Software</h1>
    <p>
    Our proficient fantasy football app developers possess immense experience and can create feature-rich fantasy sports web applications.					</p>
   
    </div>
    </div>
    </div>
     <Card5/>
     
     <div className='box-inner17'>
     <h2 className='head1'>Want A free Expert Consultancy? Call us Today</h2><br/>
     <div className='box-radius'><p className='head1'>Request A Quote</p></div><br/>
     <div className='box-radius1'><p className='head1'>Demo</p></div>
     </div>
     <Card2/>
     <Counter/>
     <div className='cricket-box'> <Swiper1/></div>
    
     <div className='cricket-img'><div style={{height:30,width:550,paddingTop:50,marginLeft:450}}><Slider1/></div></div> 
    
    <Footer/>
    
    </div>

  )
}

export default Webdesign