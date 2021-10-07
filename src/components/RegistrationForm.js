import React, { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineAlternateEmail, MdDriveFileRenameOutline } from 'react-icons/md';
import { CgKey } from 'react-icons/cg';

const RegistrationForm = () => {
  const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
  });
  

  const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        setUser({
            ...user,
           [e.target.email] : e.target.value
        })
   }



  return (
    <div>
        <div className="main">
            <div className="signup-header">
                <h1 className="display-4">Sign Up</h1>
            </div>
            <div className="container">
                <div className="reg-box">
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
                                      <MdDriveFileRenameOutline className="email"/>
                                  </span>
                                  </div>
                                  <input type="name"
                                          className="form-control"
                                          placeholder="Username"
                                          value={user.username}
                                          onChange={handleInputChange}
                                          autoFocus
                                  />
                              </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <MdOutlineAlternateEmail className="email"/>
                                    </span>
                                </div>
                                <input type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={user.mail}
                                        onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <CgKey className="password"/>
                                    </span>
                                </div>
                                <input type="password" 
                                        className="form-control" 
                                        placeholder="Password"
                                        value={user.password}
                                        onChange={handleInputChange}
                                        required
                                />
                            </div> 
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <CgKey className="password"/>
                                    </span>
                                </div>
                                <input type="password" 
                                        className="form-control" 
                                        placeholder="Re-enter Password"
                                        value={user.password}
                                        onChange={handleInputChange}
                                        required
                                />
                            </div>
                            <button type="submit" 
                                    className="btn btn-secondary login-sub">
                                    SIGN UP
                            </button>
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
    </div>
  )
}

export default RegistrationForm;
