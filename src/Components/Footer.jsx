import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        
        <div>
            <h3><b>CONTACT INFORMATION</b></h3>
            <li>Call Us 24/7 Free</li>
            <li>Contact us:<h2>1 001 234 5678</h2></li>
            <li>5hopshow13@gmail.com</li>
            <li>60, 29th Street, San Francisco, CA 94110, United States</li>
        </div>

        <div>
          <ul >
            <h3><b>EXPLORE</b></h3>
           <Link to={"/home"} style={{color:'white'}}>Gift a Smile</Link><br />
           <a href="" style={{color:'white'}}>Creybit Cares</a><br />
           <Link to={"/privacy"} style={{color:'white'}}>Privacy Policy</Link><br />
           <Link to={"/refund"} style={{color:'white'}}>Refund Policy</Link>
           </ul>  
        </div>
       
        <div>
        <h3><b>OUR LOCATION</b></h3>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1906235.6648479723!2d81.63192393125!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fe2d9b969475a55%3A0x9ce00e13e7af2c5!2sShopsy!5e0!3m2!1sen!2sin!4v1721462616566!5m2!1sen!2sin" width={350} height={200} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>



        </div>
    
  )
}

export default Footer