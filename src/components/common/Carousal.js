import React from 'react'

export default function Carousal() {
  return (
    <div class="container mb-5 h-sm-50">
        <div id="carouselExampleCaptions" class="carousel slide ">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-caption text-center my-5 " style={{zIndex:"2"}}>
                    <h1 style={{WebkitTextFillColor: 'white',WebkitTextStrokeWidth: "0.5px",WebkitTextStrokeColor: 'black',fontSize:'2rem'}}>Homecooked Heaven</h1>
                    <p>Nourish your body, Nurture your soul.</p>
                </div>
                <div class="carousel-item active c-item">
                    <img src="./images/pexels-dana-tentis-750073.jpg" class="b-block w-100 c-img" alt="..."/>                  
                </div>
                <div class="carousel-item c-item">
                    <img src="./images/main poster.jpg" class="d-block w-100 c-img" alt="..."/>
                    
                </div>
                <div class="carousel-item c-item">
                    <img src="./images/pexels-lisa-fotios-1161547.jpg" class="d-block w-100 c-img" alt="..."/>
                    
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
