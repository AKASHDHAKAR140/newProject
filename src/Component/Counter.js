import React from 'react'
import "./All.css"
import { useState } from 'react'
function Counter() {

const [count,setCount] = useState(8)

  return (
    <div className='back-img2'>
     <h1 className='head1'> why Agnito</h1>
     <div className='card2'></div>
     <div className='d-flex'>
     <div className='card-m3  '>
          <span className='count-1'> {count }+</span> 
          <h5 className='head1'>years of Exeperience</h5>
    
          </div>
     <div className='card-m4'>
     <span className='count-1'> {count }+</span> 
     <h5 className='head1'>years of Exeperience</h5>
</div>
     <div className='card-m4'>
     <span className='count-1'> {count }+</span> 
     <h5 className='head1'>years of Exeperience</h5>
 </div>
     <div className='card-m4'>
    
     <span className='count-1'> {count }+</span> 
          <h5 className='head1'>years of Exeperience</h5>
     </div>
     </div>
    </div>
  )
}

export default Counter