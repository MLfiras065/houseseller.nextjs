
import React from 'react'
const Footer=()=>{
  return (
    <footer>
<div className="first">
        <div className='div'>
          <p className='p'>Evolution Learning</p>
          <h4 className='h4'><i className="fa-solid fa-location-dot"></i> Our Company Location</h4>
          <p>177A Bleecker Street,NYC</p>
        </div>
        <div className='div'>
          <h3 className='h3'>Top Categories</h3>
          <ul>
            <li className='li'>Appartment </li>
            <li className='li'> sea view homes  </li>
            <li className='li'> city houses </li>
            <li className='li'>Countryside Houses</li>
            
          </ul>
        </div>
        <div>
          <h3>Import Links</h3>
          <ul className='ul'>
            <li className='li'>About US</li>
            <li className='li'>Contact Us</li>
            <li className='li'>FAQs</li>
            <li className='li'>Latest Posts</li>
            <li className='li'>Order Track</li>
          </ul>
        </div>
        <div className='div'>
          <h3 className='h3'>NewsLetter</h3>
          <h5 className='h5'>
            Enter your email to receive our latest updates about our products
          </h5>
          <form className='form'>
            <input className='input' type="text" placeholder="Email Address" />
            <input className='input' type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer