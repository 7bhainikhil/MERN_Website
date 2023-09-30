import React from 'react'
import { NavLink } from 'react-router-dom';
//import invictuslogo from '../images/invictuslogo.jpg'
import './signup.css'
 const Signup=()=>{
    return(
        <>
            <div className='container-signup'>
                <h2>Create Account</h2>
                <div className="form">
                    <div class="row">
                        <div class="col-25">
                            <label for="name">Full Name:</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="name" name="name" placeholder="Your Name.." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="email">Email:</label>
                        </div>
                        <div class="col-75">
                            <input type="email" id="email" name="email" placeholder="Your Email.." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="number">Phone Number:</label>
                        </div>
                        <div class="col-75">
                            <input type="number" id="number" name="number" placeholder="Enter Number.." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="password">Password:</label>
                        </div>
                        <div class="col-75">
                            <input type="password" id="password" name="password" placeholder="Password.." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="cpassword"> Confirm Password:</label>
                        </div>
                        <div class="col-75">
                            <input type="cpassword" id="cpassword" name="cpassword" placeholder="Confirm Password.." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="profession">Profession:</label>
                        </div>
                        <div class="col-75">
                            <select type="text" id="profession" name="profession" placeholder="Your Profession..">
                            <option value="None">None</option>
                                <option value="Faculty">Faculty</option>
                                <option value="Student">Student</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="registerbutton">
                    <input type="submit" name="signup" id='signup' className='form-submit' value='Register' />
                </div>
                <div className="login-account-link">
                    <NavLink className="login" to="/login">Have Account? Login here</NavLink>
                </div>
            </div>
           

        </>
    )
 }
export default Signup;