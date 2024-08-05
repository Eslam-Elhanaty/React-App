import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  return (
        
    <nav id='bgNav' className='    position-fixed top-0 right-0  w-100 z-3    '>


      
<div className=' pt-4 '>
  <ul className='text-white d-flex justify-content-between '>
    <Link className='text-white no-underline fs-3 text-bold text-decoration-none h1 ' to=''><h2>Start Framework</h2>

    </Link>
    <li>
    <NavLink className='text-white no-underline fs-4  text-decoration-none' to="About">About</NavLink>
    </li>

    <li>
      <NavLink  className='text-white no-underline fs-4 text-decoration-none' to="gallery">PORTFOLIO</NavLink>
    </li>
    <li>
    <NavLink className='text-white no-underline fs-4 text-decoration-none me-5'  to="Contact">Contact</NavLink>
    </li>
  </ul>
</div>

</nav>

 )
}
