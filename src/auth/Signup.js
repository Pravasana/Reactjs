import React from 'react'
import { Link } from 'react-router-dom'
import Footer2 from '../footer/Footer2'
import Navbar from '../Header/Navbar'
import './Signup.css'


const Signup = () => {
    return (
        
        <div>
            <Navbar/>
            <form id="sign" action="action_page.php" style={{border:"1px solid #ccc"}}>
                <div ClassName="container">
                        <h2> Sign Up</h2>
                        <p>Please fill in this form to create an account.</p>
                        <hr/>

                        <label for="email"><b>Email</b></label><br/>
                        <input type="text" placeholder="Enter Email" name="email" required/><br/>

                        <label for="psw"><b>Password</b></label><br/>
                        <input type="password" placeholder="Enter Password" name="psw" required/><br/>

                        <label for="psw-repeat"><b>Repeat Password</b></label><br/>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required/><br/>

                        <label>
                        <input type="checkbox" checked="checked" name="remember" style={{marginBottom: "15px"}}/> Remember me
                        </label><br/>

                        <p>By creating an account you agree to our <Link to="#" style={{color: "dodgerblue"}}>Terms & Privacy</Link>.</p>

                            <div ClassName="clearfix">
                                    <button type="button" id="cancelbtn">Cancel</button> &ensp;
                                    <button type="submit" id="signbtn">Sign Up</button>
                            </div>
                </div>
            </form>
            <Footer2/>
        </div>
             
            
    )
}

export default Signup
