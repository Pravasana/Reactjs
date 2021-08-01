import React, { Component } from "react";
import Slider from "react-slick";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        

	



        <div className="row ">
          <div className="col-md-10 border border-light mt-3">
          <h5 style={{marginTop:'20px'}}> Deals of the Day </h5>
       
          <div  onmouseover="stops()" onmouseout="starts()" >

              <button className="left " onclick="next()" style={{ height:"100px", width:"45px", zIndex:"1", backgroundColor:"hsla(0,0%,100%,.98)",boxShadow: "1px 2px 10px -1px rgb(0 0 0 / 70%)", border:"white", position:"absolute", top:600,left:0}}>&lt;</button>
              <button className="right" onclick="prev()" style={{height:"100px", width:"45px", zIndex:"1" , backgroundColor:"hsla(0,0%,100%,.98)",boxShadow: "1px 2px 10px -1px rgb(0 0 0 / 30%)",border:"white", position:"absolute", top:600, right:"16%"}}>&gt;</button>
         
        <Slider {...settings}>
        
          <div>
          
              <img src="images/card1.jpg" className="img-fluid" style={{height:'200px'}}/>
              <h6>Dresses, Tops and more...</h6>
              <p style={{color:"darkblue"}}>Upto 70% Off</p>
              <p>Vero Moda, Pretty cat....</p>                 
          </div>
          <div>
          <img src="images/card2.jpg" className="img-fluid" style={{height:'200px'}}/>
              <h6>Dresses, Tops and more...</h6>
              <p style={{color:"darkblue"}}>Upto 70% Off</p>
              <p>Vero Moda, Pretty cat....</p>  
          </div>
          <div>
          <img src="images/card3.jpg" className="img-fluid" style={{height:'200px'}}/>
              <h6>Dresses, Tops and more...</h6>
              <p style={{color:"darkblue"}}>Upto 70% Off</p>
              <p>Vero Moda, Pretty cat....</p>  
          </div>
          <div>
          <img src="images/card4.jpg" className="img-fluid" style={{height:'200px'}}/>
              <h6>Dresses, Tops and more...</h6>
              <p style={{color:"darkblue"}}>Upto 70% Off</p>
              <p>Vero Moda, Pretty cat....</p>  
          </div>
          <div>
          <img src="images/card5.jpg" className="img-fluid" style={{height:'200px'}}/>
              <h6>Dresses, Tops and more...</h6>
              <p style={{color:"darkblue"}}>Upto 70% Off</p>
              <p>Vero Moda, Pretty cat....</p>  
          </div>
          <div>
          <img src="images/card6.jpg" className="img-fluid" style={{height:'200px'}}/>
              <h6>Dresses, Tops and more...</h6>
              <p style={{color:"darkblue"}}>Upto 70% Off</p>
              <p>Vero Moda, Pretty cat....</p>  
          </div>
          <div>
          <img src="images/card7.jpg" className="img-fluid" style={{height:'200px'}}/>
              <h6>Dresses, Tops and more...</h6>
              <p style={{color:"darkblue"}}>Upto 70% Off</p>
              <p>Vero Moda, Pretty cat....</p>  
          </div>
          
        
        </Slider>
        </div>
</div>

      <div className="col-md-2 mt-3 border border-light pt-3">
        <img src="images/card8.jpg"  style={{height:'350px', width:"98%"}}/>
      </div></div>
      </div>
    );
  }
}