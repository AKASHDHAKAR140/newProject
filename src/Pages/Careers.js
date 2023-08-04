import React from 'react'
import Colom6 from '../Component/Colom/Colom6'
import Colom7 from '../Component/Colom/Colom7'

import "../Component/All.css"
import Footer from '../Component/Footer'
function Careers() {
  return (
    <div>
    
    <Colom6/>
    <Colom7/>
    <div>
    <h1 className='head'> We Are Hiring</h1>
    <div className='d-flex'>
    <div className='card-mig4'>
    <img style = {{height:150,width:150}} src="https://agnitotechnologies.com/wp-content/uploads/2020/06/artboard-5-150x150.png"/>
    <h5 className='head'>Software Development</h5>
    </div>
    <div className='card-mig5'>
    <img style = {{height:150,width:150}} src="https://agnitotechnologies.com/wp-content/uploads/2020/06/artboard-6-150x150.png"/>
    <h5 className='head'>Design</h5>
    </div>
    <div className='card-mig5'>
    <img style = {{height:150,width:150}} src="https://agnitotechnologies.com/wp-content/uploads/2020/06/artboard-1-150x150.png"/>
    <h5 className='head'>operations</h5>
    </div>
      
    </div>
    <div className='d-flex'>
    <div className='card-mig4'>
    <img style = {{height:150,width:150}} src="https://agnitotechnologies.com/wp-content/uploads/2020/06/artboard-4-150x150.png"/>
     <h5 className='head'>Media & entertainment</h5>
    </div>
    <div className='card-mig5'>
    <img style = {{height:150,width:150}} src="https://agnitotechnologies.com/wp-content/uploads/2020/06/artboard-3-150x150.png"/>
    <h5 className='head'>Digital Marketing</h5>
    </div>
    
    <div className='card-mig5'>
    
    <img style = {{height:150,width:150}} src="https://agnitotechnologies.com/wp-content/uploads/2020/06/artboard-2-150x150.png"/>
    <h5 className='head'>Editorial</h5>
    </div>
      
    </div>
    </div>
    <div className='box-careers'><p className='head1 py-3'>interested in being a part for an exciting culture? Send your resume at <span style={{color:'black'}}> hr@agnitotechnologies.com</span></p></div>
    <div> <h3 className='head'>You're In A Good Company</h3>
     <p className='head'>Agnito  celebrates diversity in people, backgrounds, and life experiences. For instance, our founders are associated with more than 2 lines of <br/> business and they take good care of them, which puts the teams in good hands. Our head of operations brings a rich experience of 25 years <br/> across international IT and telecom majors. One of our designers can talk for an hour about the finer points of Polish typography. We also have <br/> quite a few outdoor explorers, vloggers, amateur chefs, and inspiring mothers and fathers who balance leadership with parenthood.

     </p>
    </div>
   <div>
   <h3 className='head'>A Mindful Place To Work
   </h3>
   <p className='head'>We’re building a company, not just a product. That means we put a ton of thought into how we structure, how we interact, and how we build.<br/> Experimentation is encouraged at Agnito, and we do it a lot. Sometimes we don’t get things right, and that’s okay too. Failure is seen as an <br/> opportunity for growth.

   </p>
   </div>
   <div>
   <h3 className='head'>Have An Impact
   </h3>
   <p className='head'>At Agnito, you aren’t constrained by your job description. There’s room for you, and your ideas, to breathe. We empower people to draw on their <br/>own experience and knowledge to make decisions for themselves.<br/>
   With a strong focus on growth and personal development, Agnito is the ideal place to develop your skills in an environment that is built on mutual<br/> trust and respect. Team members work with their managers (“Group Leads” in Agnito speak) to get personalized 1:1 coaching and mentorship to <br/> help them grow and achieve their career goals.
   
   </p>
   </div>
   <div><h3 className='head'>Benefits</h3>
   <p className='head'>We care about our employees and their lives both inside and outside of Agnito. Beyond the benefits, we provide you the atmosphere to unleash <br/> your creativity and foster your growth.

   </p>
   </div>
   <Footer/>
    </div>
  )
}

export default Careers