import './index.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
        <nav className="navbar" style={{position : "fixed"}}>
            <div className="navbar-center">
                <div className="navbar-brand">
                    <Link to ="/" className="brand-logo">Mentog</Link>
                </div>
                <div className='navbar-links'>
                    <Link  to="/" className="nav-link">Home</Link>
                    {/* <Link  to="#" className="nav-link">Feed</Link> */}
                    <Link  to="/mentors" className="nav-link">Mentorship</Link>
                    <Link  to="/chatapp" className="nav-link">Peer to Peer Chat</Link>
                    {/* <Link  to="#" className="nav-link">How it works</Link> */}
                    {/* <Link  to="/signup" className="nav-link">Signup</Link> */}
                    <Link  to="/contact" className="nav-link">Contact</Link>
                    <Link  to="/about" className="nav-link">About us</Link>
                </div>
                    <div className="navbar-login">
                        <Link to= "/login"><button className="login-btn">Login</button></Link>
                    
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;
