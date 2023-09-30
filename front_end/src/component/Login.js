import React from 'react'
import './login.css'
import { NavLink } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className='container-login'>


                <h2>Login Here</h2>
                <div className="form">
                    <div class="row">
                        <div class="col-25">
                            <label for="email">Email:</label>
                        </div>
                        <div class="col-75">
                            <input type="email" id="email" name="email" placeholder="Your Email.."/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="password">Password:</label>
                        </div>
                        <div class="col-75">
                            <input type="password" id="password" name="password" placeholder="Password.."/>
                        </div>
                    </div>

                </div>
                <div className="loginbutton">
                    <input type="submit" name="login" id='login' className='form-submit' value='Login' />
                </div>
                <div className="create-account-link">
                <NavLink className="register" to="/signup">Don't have account register here</NavLink>
                </div>
            </div>

        </>
    )
}
export default Login;