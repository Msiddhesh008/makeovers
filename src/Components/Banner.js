import React from 'react'
import pooja1 from '../images/pooja1.jpg'
import pooja2 from '../images/pooja2.jpg'
import pooja3 from '../images/pooja3.jpg'
import pooja4 from '../images/pooja7.jpg'
import pooja5 from '../images/pooja8.jpg'
import pooja6 from '../images/pooja9.jpg'

const Banner = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pooja3} className="d-lg-block d-none w-100  object-fit-cover" alt="..." />
      <img src={pooja6} className="d-lg-none d-block w-100  object-fit-cover" alt="..." />
      <div className="carousel-caption d-block d-md-block">
        <p className='bannerCaption'>Classic, Soft, Natural yet Glam Airbrush Makeup Servicing Lancaster County, PA and Beyond</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={pooja1} className="d-lg-block d-none w-100  object-fit-cover" alt="..." />
      <img src={pooja4} className="d-lg-none d-block w-100  object-fit-cover" alt="..." />
      <div className="carousel-caption d-block d-md-block">
        <p className='bannerCaption'>Classic, Soft, Natural yet Glam Airbrush Makeup Servicing Lancaster County, PA and Beyond</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={pooja2} className="d-lg-block d-none w-100  object-fit-cover" alt="..." />
      <img src={pooja5} className="d-lg-none d-block w-100  object-fit-cover" alt="..." />
      <div className="carousel-caption d-block d-md-block">
        <p className='bannerCaption'>Classic, Soft, Natural yet Glam Airbrush Makeup Servicing Lancaster County, PA and Beyond</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon d-none" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon d-none" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Banner
