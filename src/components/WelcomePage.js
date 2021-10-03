import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
    <>
        <div className="main">
            <h1 className="welcome-header display-4">Hello, please Log In or Sign Up</h1>
            <div className="buttons">
                        <button type="button" className="btn btn-outline-secondary btn-lg log-in">
                            <Link to="/login">Log In</Link>
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-lg sign-up">
                            <Link to="/signup">Sign Up</Link>
                        </button>
            </div>
        </div>

    </>
    )
}

export default WelcomePage
