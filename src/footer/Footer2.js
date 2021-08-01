import { logRoles } from '@testing-library/dom'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer2 = () => {
    return (
        <div >
            <div className="container-fluid" style={{backgroundColor:"#170f23"}}>
                <div className="row px-3 mx-3 mt-2 pt-3 pb-3" >
                    <div className="col-md-2" >
                        <p className="text-secondary" >ABOUT</p>
                        <Link to="#" className="text-white text-decoration-none">Contact Us</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">About Us</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Careers</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Flipkart Stories</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Press</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Flipkart</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Wholesale</Link><br/>
                    </div>

                    <div className="col-md-2">

                    <p className="text-secondary">HELP</p>
                    <Link to="#" className="text-white text-decoration-none">Payments</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Shipping</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Cancellation &</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Return</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">FAQ</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Report</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Infrigement</Link><br/>
                    </div>

                    <div className="col-md-2">
                    <p className="text-secondary">POLICY</p>
                    <Link to="#" className="text-white text-decoration-none">Return Policy </Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Term Of Use</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Security</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Privacy</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Press</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Sitemap</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">EPR Compliance</Link><br/>
                        
                    </div>

                    <div className="col-md-2 ">
                    <p className="text-secondary">SOCIAL</p>
                    <Link to="#" className="text-white text-decoration-none">Facebook</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Twitter</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Youtube</Link><br/>

                                            
                    </div>

                    <div className="col-md-2 ">
                    <p className="text-secondary">Mail Us:</p>
                    <Link to="#" className="text-white text-decoration-none">Flipkart Internet Private Limited,</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Flipkart Internet Private Limited,</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Clove Embassy Tech Village,</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Outer Ring Road, Devarabeesanahalli Village,</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Bengaluru, 560103,</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Karnataka, India</Link><br/>
                 
                                            
                    </div>

                    <div className="col-md-2" >
                    <p className="text-secondary">Registered Office Address:</p>
                    <Link to="#" className="text-white text-decoration-none">Flipkart Internet Private Limited,</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Buildings Alyssa, Begonia &</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Clove Embassy Tech Village,</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Outer Ring Road, Devarabeesanahalli Village,</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Bengaluru, 560103,</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">Karnataka, India</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">CIN : U51109KA2012PTC066107</Link><br/>
                        <Link to="#" className="text-white text-decoration-none">    Telephone: 1800 202 9898</Link><br/>
                                         
                    </div></div>
                    <p className="text-secondary">________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
                    
                    <div className="  row text-white px-5">
                        <div className="col-md-2">
                                <p><i className="fas fa-shopping-bag text-warning"></i>&ensp;Sell On Flipkart</p>
                        </div>
                        <div className="col-md-1">
                        <p> <i class="fas fa-plus-circle text-warning"></i> &ensp;Advertise</p>
                        </div>
                        <div className="col-md-2">
                        <p><i className="fas fa-gift text-warning"></i> &ensp;Gift Cards</p>
                        </div>
                        <div className="col-md-2">
                        <p><i class="fas fa-question-circle text-warning"></i> &ensp;Help Center</p>
                        </div>
                        <div className="col-md-2">
                        <p>© 2007-2021 Flipkart.com 
</p>
                        </div>
                        <div className="col-md-3">
                            <img  src="images/logo.png"  style={{width:"80%",height:"25px"}}/>
                        </div>
                        
                    </div>

                </div>
            </div>
      
    )
}

export default Footer2
