import React from 'react'
import '../App.css';

const WelcomePage = () => {
    return (
    <>
        <div>
            <h1 className="welcome-header display-4">Hello, please Log In or Sign Up</h1>
            <div className="buttons">
                <button type="button" className="btn btn-outline-secondary btn-lg log-in">Log In</button>
                <button type="button" className="btn btn-outline-secondary btn-lg sign-up">Sign Up</button>
            </div>
        </div>
    </>
    )
}

export default WelcomePage
