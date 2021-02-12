import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
    <main>
        <center>
        <div className="section"></div>

        <h5 className="indigo-text">Please, create your account</h5>
        <div className="section"></div>

        <div className="container">
            <div className="z-depth-1 grey lighten-4 row" style={{display: "inline-block", padding: "32px 48px 0px 48px", border: "1px solid #EEE"}}>

            <form className="col s12" method="post">

                <div className='row'>
                <div class="input-field col s6">
                    <input id="first_name" type="text" class="validate" />
                    <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                    <input id="last_name" type="text" class="validate" />
                    <label for="last_name">Last Name</label>
                </div>
                </div>

                <div className='row'>
                <div className='input-field col s12'>
                    <input className='validate' type='email' name='email' id='email' />
                    <label for='email'>Enter your email</label>
                </div>
                </div>

                <div className='row'>
                <div className='input-field col s12'>
                    <input className='validate' type='password' name='password' id='password' />
                    <label for='password'>Enter your password</label>
                </div>
                </div>

                <br />
                <center>
                <div className='row'>
                    <button type='submit' name='btn_signup' className='col s12 btn btn-large waves-effect indigo'>SIGNUP</button>
                </div>
                </center>
            </form>
            <p>Already have an account? <a href="#!">Login</a></p>
            <div className="gap"></div>
            </div>
        </div>
        </center>

        <div className="section"></div>
        <div className="section"></div>
    </main>       

    )
}

export default SignUp;