import React from 'react'
import {useState} from "react"
import "../All.css"
function Card2() {
  const purple="#f0f8ff";
    const [data ,setData]=useState("purple")
    
    
    const handleclick= ()=>{
    
    let date= "#f5f5f5";
    setData(date)
    
  }
  const handleback = ()=>{
    setData(purple);
    
  }

  return (
    <div className='back-img'>
  
    <h1 className='head1' >Industries We Serve
    </h1>
    <div className='card2'></div>
    <div className='d-flex'>
    <div className='card-m1 ' >
    
    <i aria-hidden="true" class="fas fa-graduation-cap topi-1 "></i>
     <h5 className='head pb-0'>Education</h5>
     
    </div>
    <div className='card-m2' >
    <i aria-hidden="true" className="fas fa-stethoscope topi-1"></i>
    <h5 className='head'>Health Care</h5>
    </div>
    <div className='card-m2' >
    <i aria-hidden="true" class="fas fa-music topi-1"></i>
    <h5 className='head' >Entertainment</h5>
    </div>
    <div className='card-m2' >
   
    <i aria-hidden="true" class="fas fa-landmark topi-1"></i>
   <h5 className='head'>Banking</h5>
    </div>
    <div className='card-m2' >
    <i aria-hidden="true" class="fas fa-suitcase topi-1"></i>
    <h5 className='head'>Business</h5>
    </div>
    <div className='card-m2'  >
    <i aria-hidden="true" class="fas fa-user-injured topi-1"></i>
    <h5 className='head'>Job/Career</h5>
    </div>
    
    </div>
    <div className='d-flex'>
    <div className='card-m1'>
    <i aria-hidden="true" class="fas fa-plane-departure topi-1"></i>
    <h5 className='head'> Travel</h5>
    </div>
    <div className='card-m2'>
    <i aria-hidden="true" class="fas fa-ambulance topi-1"></i>
    <h5 className='head'> Travel</h5>
    </div>
    <div className='card-m2'>
    <i aria-hidden="true" class="fas fa-home topi-1"></i>
    <h5 className='head'> Transport</h5>
    </div>
    <div className='card-m2'>
    <i aria-hidden="true" class="fas fa-home topi-1"></i>
    <h5 className='head'> Real State</h5>
    </div>
    <div className='card-m2'>
    <i aria-hidden="true" class="fas fa-running topi-1"></i>
    <h5 className='head'> Sports</h5>
    </div>
    <div className='card-m2'>
    <i aria-hidden="true" class="fas fa-heart topi-1"></i>
    <h5 className='head'> Dating</h5>
    </div>
    
    </div>

    </div>
  )
}

export default Card2