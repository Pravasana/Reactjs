import React from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css';
const Topbar = () => {
    return (
        <>
               <div className="container-fluid  d-inline-flex justify-content-around p-3">
                    <div classname="p-2 item">
                        <img src="images/f1.png"/>
                        <li className="list-unstyled"> <Link to="#" className="text-decoration-none text-dark fw-bold ">Top Offers</Link></li>
                    </div>
                    <div classname="p-2" >
                        <img src="images/f2.png"/>
                        <li className="list-unstyled"> <Link to="#" className="text-decoration-none text-dark fw-bold">Glosary</Link></li>
                    </div>
                     <div classname="p-2" >
                        <img src="images/f3.png"/>
                        <li className="list-unstyled"> <Link to="#" className="text-decoration-none text-dark fw-bold">Mobiles</Link></li>
                    </div> 
                    <div classname="p-2" >
                        <img src="images/f4.png"/>
                        <li className="list-unstyled"> <Link to="#" className="text-decoration-none text-dark fw-bold">Fashion</Link></li>
                    </div> 
                    <div classname="p-2" >
                        <img src="images/f5.png"/>
                        <li className="list-unstyled"> <Link to="#" className="text-decoration-none text-dark fw-bold">Electronics</Link></li>
                    </div>
                     <div classname="p-2" >
                        <img src="images/f6.png"/>
                        <li className="list-unstyled"> <Link to="#" className="text-decoration-none text-dark fw-bold">Home</Link></li>
                    </div>
                     <div classname="p-2" >
                        <img src="images/f7.png"/>
                        <li className="list-unstyled"> <Link to="#" className="text-decoration-none text-dark fw-bold">Appliance</Link></li>
                    </div>
                     <div classname="p-2" >
                        <img src="images/f8.png"/>
                        <li className="list-unstyled"> <Link to="#" className="text-decoration-none text-dark fw-bold">Travel</Link></li>
                    </div>
                     <div classname=" p-2" >
                        <img src="images/f9.png"/>
                        <li className="list-unstyled"> <Link to="#" className="text-decoration-none text-dark fw-bold">Beauty, Toys and More</Link></li>
                    </div>
               
</div>
               
           
        </>
    )
}

export default Topbar