import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
function Navbar() {

  return (

    <div className="nav-bar h4">
    
    <img class="mk-sticky-logo " style={{height:50}} title="" alt=" aksh" src="https://agnitotechnologies.com/wp-content/uploads/2022/11/agnitotechnologies-logo.png"/>
    <ul>
      
      <li className='active'><Link > Industries </Link>
        <div className='sub-nav-1'>
      <ul>
          <li className='hover-me'>iGaming <i className='fas fa-caret-right'></i>
          <div className='sub-nav-2'>
          <ul>
          <li>fantasy sport software <i className='fas fa-caret-right'></i>
           <div className='sub-nav-3'>
            <ul>
              <li > <Link to = "/cricket">Fantasy cricket software</Link></li>
              <li> <Link to = "/football">Fantasy Football App development</Link></li>
              <li>Fantasy Soccer App deveopment</li>
            </ul>
           </div>
          </li>
          <li>Esport Tournament</li>
          <li>Board Games </li>
          </ul>
          </div>
          </li>
          <li>Blockchain</li>
          <li>web Designing</li>
          <li>Health Care</li>
          <li>Social Media</li>
          <li> Food Delivery</li>
          <li> eCommerce</li>
          <li>Dating App </li>
          <li> Appointment Booking</li>
          <li> Unity 3D Game</li>
          <li> eLearnig</li>
          <li> Real Estae</li>
          <li>Logistics</li>
          <li> Finance</li>
          <li> Travel</li>
          </ul>
          </div>
      </li>
      
      
      <li>
        <Link to="/discover"> Discover Agnito </Link>
      </li>
    
        <li>
          <Link to="/"> Portfolio</Link>
        </li>
      
        <li>
          <Link to="/careers"> Careers</Link>
        </li>
      
        <li>
          <Link to="/blogs"> Blogs</Link>
        </li>
      
        <li>
          <Link to="/videos"> Videos</Link>
        </li>
      
        <li>
          <Link to="/contact"> Contact Us</Link>
        </li>
      
        <li>
          <Link to="/contact"><div className="styl">Start A project</div> </Link>
        </li>
      
        
    
    </ul>
  </div>

    
  )
}

export default Navbar