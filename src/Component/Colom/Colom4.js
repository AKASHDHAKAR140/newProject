import React from 'react'
import "../All.css"
import Slider1 from '../Silde/Slider1'
import Form1 from '../Form/Form1'

function Colom4() {
  
  return (
    <div>
    <div className='image-3'>
    <div className="container "> 
  <div className="row">
    <div className="col-lg-6 col-sm-4">
    <h1 className='head1'>Lets Talk To Start A project</h1>
    <p className='head1'> Have a project that we could work together on? WE would love to talk! </p>
     <Form1/>
    </div>
    <div className="col-lg-6 col-sm-4"> 
    
    <div className='slider-1'>
    <Slider1 /> 
    </div>
    
    
    </div>
    </div>
    </div>
    </div>
    
    </div>
    )
}

export default Colom4