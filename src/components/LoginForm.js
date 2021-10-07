import React, { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import validation from '../validation/validation';


const LoginForm = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    
    const [errors, setErrors] = useState({});

    const formValidation = () => {
        return user.email.length > 0 && user.password.length > 0;
    }

    const handleInputChange = (e) => {
        setUser({
            ...user,
           [user.email] : e.target.value
        })
   }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(user));
    }

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
                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <MdOutlineAlternateEmail className="email"/>
                                    </span>
                                </div>
                                <input type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={user.email}
                                        onChange={handleInputChange}
                                        autoFocus
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <RiLockPasswordLine className="password"/>
                                    </span>
                                </div>
                                <input type="password" 
                                        className="form-control" 
                                        placeholder="Password"
                                        value={user.password} 
                                        onChange={handleInputChange}   
                                        />
                                        {errors.password && <p className="error">{errors.password}</p>}
                            </div> 
                            <button type="submit" 
                                    className="btn btn-secondary login-sub"
                                    disabled={!formValidation()}>LOGIN</button>
                            <div className="message">
                                <div className="remember-me">
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
