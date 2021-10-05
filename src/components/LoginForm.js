import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';


const LoginForm = () => {
    return (
    <>
        <div className="main">
            <div className="login-header">
                <h1 className="display-4">Log In</h1>
            </div>
            <div className="container">
                <div className="form-box">
                    <div className="user-box">
                        <h4 className="text-primary text-center">
                            <BiUserCircle className="user"/>
                        </h4>
                    </div> 
                    <div className="form">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <MdOutlineAlternateEmail className="email"/>
                                    </span>
                                </div>
                                <input type="text"
                                        className="form-control"
                                        placeholder="Email"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <RiLockPasswordLine className="password"/>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Password" />
                            </div>
                            <button type="button" className="btn btn-secondary btn-block login-sub">LOGIN</button>
                            <div className="message">
                                <div>
                                    <input type="checkbox" /> Remember ME
                                </div>
                                <div>
                                    <a href="/">Forgot your password</a>
                                </div>
                            </div>
                        </form>
                    </div>  
                </div>  
            </div>
               
        </div>
    </>
    )
}

export default LoginForm;
