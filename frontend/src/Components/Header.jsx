import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="app-header">
      
      <ul className='headerNav'>
        <li> <Link to="/">Appointment</Link> </li>
        <li> <Link to="/doctor"> Doctors</Link> </li>
        <li><Link to="/patient"> Patients</Link>  </li>
      </ul>

    </div>
  )
}

export default Header