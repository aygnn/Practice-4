import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss';

export default function Navbarr() {
  return (
    <div>
        <div className='logo'>
            <div><a>Floral Studio</a></div>

        <div className='homes'>
        <Link to={'/'}>Home</Link>
        <Link to={'add'}>Add new Flower</Link>
            <a href='#'>Portfolio</a>
            <a href='#'>Pricing</a>
            <a href='#'>Contacts</a>



        </div>
        </div>

    </div>
  )
}
