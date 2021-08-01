import React from 'react'

const Slider1 = () => {
    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner mt-1">
                    <div class="carousel-item active">
                        <img src="images/c1.png" class="d-block w-100" style={{height:"300px"}} alt="..."/>
                    </div>
                    <div class="carousel-item">
                         <img src="images\best_phones_under_25000_december_cover_1608286980147.webp" class="d-block w-100" alt="..." style={{height:"300px"}}s/>
                    </div>
                    <div class="carousel-item">
                         <img src="images/pic1.png" class="d-block w-100" alt="..." style={{height:"300px"}} />
                    </div>
                    <div class="carousel-item">
                         <img src="images\Flipkart-upcoming-sales-1024x576.png" class="d-block w-100" alt="..."  style={{height:"300px"}}/>
                    </div>
                    <div class="carousel-item">
                         <img src="images/c5.jpg" class="d-block w-100" alt="..." style={{height:"300px"}}/>
                    </div>
                </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}

export default Slider1
