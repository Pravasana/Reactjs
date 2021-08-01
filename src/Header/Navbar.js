import React from 'react'
import {Link} from 'react-router-dom'
const Navbar=()=> {
    return (
        <>
<div className="container-fluid">
   <div className="row align-items-center " style={{backgroundColor:'#2874f0' }}>
        <div className="col-3 pb-2">
           <div className="pt-3" style={{position:"absolute", top:0,left:"18%"}} >
          <img src="images/flipkart.png" className="float-end" style={{height:"20px"}}/>
          </div><br></br>
          <div className=" float-end " style={{position:"absolute", top:28,left:"18%"}}>
          <Link ><em style={{fontSize:'12px', color:"white"}}>Explore</em> <span className="text-warning" style={{fontSize:'12px' }}> <em>plus</em></span></Link> <span style={{fontSize:'10px' }} ><i className="fas fa-plus text-warning"></i></span>
           </div>
        </div>

        <div className="col-md-4">
          <form className="d-flex p-2 justify-content-between">
             <input className="form-control me-2" type="search" placeholder="search for products, brands and more" aria-label="Search"/>
             <div className=" text-primary fw-bolder" style={{position:"absolute", top:15,left:"54.5%"}}>
             <i class="fas fa-search"></i>
             </div>
  
           </form>
        </div>
        <div className="col-md-2">
   
                    <li  className="nav-item dropdown list-unstyled bg-white float-end text-center pb-3" style={{width:"60%", height:"30px"}}>
                    <Link className="nav-link  text-primary fw-bold " to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Login
                    </Link>
                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                    <li className="px-3 bg-white"><Link className="dropdown-item p-2 fw-bold" to="#">New Custumer  &ensp; &ensp; &ensp;<Link className="fw-bold text-decoration-none" to="/signup" >Sign UP</Link></Link></li>

                        <li><Link className="dropdown-item p-2 px-3" to="#"> <i class="fas fa-user text-primary"></i> &ensp;My Profile</Link></li>
                            <li><hr className="dropdown-divider text-light"/></li>
                        <li><Link className="dropdown-item p-2 px-3" to="#"><i className="fas fa-plus text-primary fw-bold"></i>&ensp;Flipkart Plus Zone</Link></li>
                        <li><hr className="dropdown-divider text-light"/></li>
                        <li><Link className="dropdown-item p-2 px-3" to="#"><i class="far fa-file-archive text-primary"></i> &ensp;Order</Link></li>
                        <li><hr className="dropdown-divider text-light"/></li>
                        <li><Link className="dropdown-item p-2 px-3" to="#"><i class="fas fa-heart text-primary"></i>&ensp;Wishlist </Link></li>
                        <li><hr className="dropdown-divider text-light"/></li>
                        <li><Link className="dropdown-item p-2 px-3" to="#"><i class="fab fa-squarespace text-primary"></i> &ensp;Rewards</Link></li>
                        <li><Link className="dropdown-item p-2 px-3" to="#"><i class="fas fa-hand-holding-heart text-primary"></i> &ensp;Gift Cards</Link></li>

                    </ul>
                    </li>
        </div>

        <div className="col-md-1">
        <li className="nav-item dropdown text-decoration-none list-unstyled">
                    <Link className="nav-link dropdown-toggle text-white " to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More 
                    </Link>
                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item p-2 px-3" to="#"> <i className="fas fa-bell text-primary"></i> &ensp; Notification Preference</Link></li>
                            <li><hr className="dropdown-divider text-light"/></li>
                        <li><Link className="dropdown-item p-2 px-3" to="#"><i className="fas fa-cart-plus text-primary"></i> &ensp;Sell on Flipkart</Link></li>
                        <li><hr className="dropdown-divider text-light"/></li>
                        <li><Link className="dropdown-item p-2 px-3" to="#"><i className="far fa-question-circle text-primary"> &ensp;</i>24/7 custumer care </Link></li>
                        <li><hr className="dropdown-divider text-light"/></li>
                        <li><Link className="dropdown-item p-2 px-3" to="#"><i className="fas fa-chart-line text-primary &ensp;"></i> &ensp;Advertise </Link></li>
                        <li><hr className="dropdown-divider text-light"/></li>
                        <li><Link className="dropdown-item p-2 px-3" to="#"><i className="fas fa-download text-primary"> &ensp;</i>Download App</Link></li>
                    </ul>
                    </li>
         </div> 

         <div className="col-md-2">  
            <div className="d-flex justify-content-center align-items-center float-start">
            
            <li className="list-unstyled"><Link to="" className="text-decoration-none px-2"><i class="bi bi-cart-fill fs-5 text-light" ></i></Link></li>
            <li className="list-unstyled"><Link to="/cart" className="text-decoration-none text-white px-2 fw-bold">Cart</Link></li>
            </div> 
        </div>
    </div>
</div>  
          
          

        </>
    )
}

export default Navbar
