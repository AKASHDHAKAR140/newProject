import React from 'react'
import Footer from '../Component/Footer'

function Videos() {
  return (
    <div>
    <div className='box-v1'>
    <h5 style={{marginLeft:270,paddingTop:40}}>VIDEOS</h5>
    <h6 style={{marginLeft:270,paddingTop:20}}>HOME VIDEOS</h6>
    </div>
    <div><h3 className='head' style={{color:'#0073AA'}}>VIDEOS</h3>
    <video width="300" height="240" controls style={{marginLeft:100}}>
    <source src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"   autoPlay loop muted type="video/mp4"/>
    <source src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"   autoPlay loop muted type="video/ogg"/>
   
  </video>
  
    <video width="300" height="240" controls style={{marginLeft:30}}>
    <source src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"   autoPlay loop muted type="video/mp4"/>
    <source src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"   autoPlay loop muted type="video/ogg"/>
   
  </video>
  
    <video width="300" height="240" controls style={{marginLeft:30}}>
    <source src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"   autoPlay loop muted type="video/mp4"/>
    <source src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"   autoPlay loop muted type="video/ogg"/>
   
  </video>
  
    <video width="300" height="240" controls style={{marginLeft:30}}>
    <source src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"   autoPlay loop muted type="video/mp4"/>
    <source src="https://www.netlink.com/wp-content/uploads/2022/09/Hi-Tech.mp4"   autoPlay loop muted type="video/ogg"/>
   
  </video>
  </div>
  <div  style={{marginTop:30}}>    <Footer/>
  </div>

    </div>
  )
}

export default Videos