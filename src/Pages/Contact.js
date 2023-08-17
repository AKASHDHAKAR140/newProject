import React from 'react'
import "../Component/All.css"
import Form1 from '../Component/Form/Form1'
import Footer from '../Component/Footer'
function Contact() {
  return (
    <div>
   
    <div className='box-v2 py-3'> 
    
    <h1 className="head">Want to discuss your idea?</h1>
    <h4 className='head'>We're Always Ready to help</h4>
    </div>
    <div className='box-v3'>
    <div className='box-inner1'>
    <p className='head1'>Get In Touch</p>
    <p className='head1 py-5'>If you are considering one <br/>of our products, fill in the <br/>form. If you need to get in <br/> touch with a sales person <br/> right now, call us at</p>
    <p className='head1 py-0'> <i aria-hidden="true" class="fab fa-whatsapp"></i> +91-940683888</p>
    </div>
    <div className='box-inner2'>
    <h3  style={{marginTop:30,marginLeft:60 }}>Contact Us</h3>
     <Form1/>
    </div>
    </div>
    <div className='box-inner3'>
     <div className='box-inner4'>
      <img style={{height:80,width:80,marginTop:100,marginLeft:190}}  src ="https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_1280.jpg"/>
      <h3 className='head'> India</h3>
      <div>
      <i aria-hidden="true" class="fas fa-map-marker-alt"></i>				      <span class="elementor-icon-list-text">E-2/59 Arera Colony, Bhopal 462016, Madhya Pradesh, India</span>
      <div><i aria-hidden="true" class="fas fa-headset"></i> <span>+91-7554927642</span></div>
      <div><i aria-hidden="true" class="fas fa-envelope"></i><span>contact@agnitotechnologies.com</span></div>
      <i aria-hidden="true" class="fab fa-skype"></i><span>agnitotechnologies</span>
     </div>
      </div>
     <div className='box-inner5'>
     <img style={{height:80,width:80,marginTop:100,marginLeft:190}}  src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhtQEJu6sJZJmZ9v6AnJDs2ihU8fF2rhMopYsDLcu7lafRA4BbhON5P6Jmp_RGDw44J8&usqp=CAU"/>
      <h3 className='head'> USD</h3>
      <i aria-hidden="true" class="fas fa-map-marker-alt" ></i>
      <span  class="elementor-icon-list-text px-">Agnito LLC<br/>2055 limestone rd STE 200-c<br/> Wilmington DE 19808 <br/> New Castle- Delaware</span>
      <div><i aria-hidden="true" class="fas fa-headset"></i> <span>+12027736268</span></div>
     </div>
     <div className='box-inner6'>
     <img style={{height:80,width:80,marginTop:100,marginLeft:190}}  src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGp5FpM1cZUA3E7Ew6nz8d_Do6PmeZeOTWpQ&usqp=CAU"/>
     <h3 className='head'>UK</h3>
     <i aria-hidden="true" class="fas fa-map-marker-alt" ></i>
     <span class="elementor-icon-list-text">Kemp House<br/>152 – 160 City Road London, <br/>Old Street EC1V2NX, <br/>London UK</span>
 </div>
       </div>
       <div className='box-inner7'>
       <div className='box-inner8'> <iframe loading="lazy" style={{height:280,width:370}} src="https://maps.google.com/maps?q=Agnito%20Technologies%20Pvt%20LTD&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="Agnito Technologies Pvt LTD" aria-label="Agnito Technologies Pvt LTD"></iframe>
       </div>
       <div className='box-inner9'>
        <h1>Call Us At</h1>
        <h4>USA :+12027736368</h4>
        <h4>IND:+91-75544927642</h4><br/>
        <h1>WhatsApp</h1>
        <p>+91-9406883888</p>



       </div>
          </div>
    <Footer/>
    </div>
  )
}

export default Contact