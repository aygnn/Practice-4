import React, { useEffect, useState } from 'react'
import './Section3.scss';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Section3() {
  const[flowers,setFlowers]=useState([])
  const[search,setSearch]=useState('')

  const getflowers=()=>{
    axios.get('http://localhost:2000/flowers')
    .then(res=>setFlowers(res.data))
  }

  useEffect(()=>{
    getflowers()
  },[])
  console.log(flowers);
  return (
    <div className='section3'>
   <Container>
    <div className='main'>
      <h3 className='devoted'>Devoted to wonderful beauty</h3>
      <h3 className='flower'>Flowers Pricing</h3>
    </div>

    <div className='cards'>
      {
        flowers.map((item)=>(
      <div className='cardd' key={item._id}>
        <div><img src={item.image}/>
        </div>
        <div className='price'>
          <p className='namee'>{item.name}</p>
          <p className='dollar'>{item.price}</p>
          <button className='button-30'>Delete</button>

        </div>

      </div>

        ))
      }

    </div>

    <div className='main'>
      <h3 className='devoted'>Devoted to wonderful beauty</h3>
      <h3 className='flower'>Events Pricing</h3>
    </div>

    <div className='eventcards'>
      <div className='eventcard'>
        <div className='cardtext'>
          <h6><h2>16$</h2>per table</h6>
          <p className='birthday'>Birthday Events</p>
          <p className='lorem'>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
          <span>Shop now</span>
        </div>
      </div>

      <div className='eventcard'>
        <div className='cardtext'>
          <h6><h2>16$</h2>per table</h6>
          <p className='birthday'>Birthday Events</p>
          <p className='lorem'>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
          <span>Shop now</span>
        </div>
      </div>


      <div className='eventcard'>
        <div className='cardtext'>
          <h6><h2>16$</h2>per table</h6>
          <p className='birthday'>Birthday Events</p>
          <p className='lorem'>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
          <span>Shop now</span>
        </div>
      </div>

    </div>

   </Container>

    </div>
  )
}
