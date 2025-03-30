import React from 'react'
import Product from './Product'
import About from './About'
import Productlist from './Productlist'
import { useNavigate } from 'react-router-dom';
import { items } from './Data';




function Crousel() {
  return (
    <>
     <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src="./lap1.jpg" height="200px" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src="./lap2ff.png" height="200px" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./lap3.jpg" height="200px" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" id='height'>
      <img src="./lap4.jpg" height="200px" className="d-block w-100" alt="..." />
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
    </div>




    
    


    

      {/* <div className='discount'>
        <marquee> <a href="https://play.google.com/store/search?q=shopsy&c=apps"><h2 style={{margin:"5px" , color:"black"}}>Get it on Play Store <img src="https://cdn-icons-png.flaticon.com/128/3128/3128279.png" height="40px" style={{marginBottom:"10px"}} alt="" /></h2></a></marquee>
        <img src="./bigsale.png" height="500px" width="100%" alt=""  />
        
        </div> */}
 
      <div className='video'>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/imWi3v9I0kI?si=nlE4llVA7c8xeEBL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
 
    <div className="logo">
      <div className='icon d-flex gap-5 align-items-center'>
      <img src="https://cdn-icons-png.flaticon.com/128/731/731985.png" style={{height:"50px"}} alt="" />
      <img src="https://cdn-icons-png.flaticon.com/128/1724/1724620.png" style={{height:"50px"}} alt="" /> 
      <img src="https://cdn-icons-png.flaticon.com/128/882/882828.png" style={{height:"50px"}} alt="" />
      <img src="https://cdn-icons-png.flaticon.com/128/5969/5969002.png" style={{height:"70px"}}  alt="" />   
      <img src="https://cdn-icons-png.flaticon.com/128/882/882819.png"  style={{height:"70px"}} alt="" />
      <img src="https://cdn-icons-png.flaticon.com/128/882/882850.png"  style={{height:"70px"}} alt="" />
    </div>
    </div>
</div>





    </>
  )
}

export default Crousel