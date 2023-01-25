import React from 'react'
import './Footer.scss';

import TextField from '@mui/material/TextField';
export default function Footer() {
  return (
    <div className='footer'>
      <div className='solfooter'>
        <img src='https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png'/>
        <TextField className='inputs'
          id="standard-multiline-flexible"
          label="Your Email"
          multiline
          maxRows={4}
          variant="standard"
        />
        <span>Send</span>
      </div>
      <div className='ortafoot'>
        <p>About</p>
        <div>
          <a>About us</a>
          <a>Our Partners</a>
          <a>Our Services</a>

        </div>
      </div>

      <div className='sagfoot'>
        <p>Contact</p>
        <div>
          <a>Contact us</a>
          <a>FAQ page</a>
          <a>Aout Me</a>

        </div>
      </div>
      <div className='ensag'>About</div>
    </div>
  )
}
