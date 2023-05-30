import React from 'react'

const Slider = () => {
  return (
    <div className='container '>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={require('../img/61anssiteweb.png')}  style={{height:"500px"}} class="d-block w-100 img" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img src={require('../img/expl_fact.jpg')}  style={{height:"500px"}} class="d-block w-100 img" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={require('../img/autoreleve.png')} style={{height:"500px"}} class="d-block w-100 img" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require('../img/ussd.png')} style={{height:"500px"}} class="d-block w-100 img" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></div>

  )
}

export default Slider