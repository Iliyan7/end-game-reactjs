import React from 'react'
import { Link } from 'react-router-dom';
import FollowUs from './follow-us';

const Header = () => {
    return (
        <header className="header-section">
            <div className="header-warp">
                <div className="header-social d-flex justify-content-end">
                    <p>Follow us:</p>
                    <FollowUs />
                </div>
                <div className="header-bar-warp d-flex">
                    <a className="site-logo">
                        <img src="/img/logo.png" />
                    </a>
                    <nav className="top-nav-area w-100">
                        <div className="user-panel">
                            <Link to="/v1/login">Login</Link> / <Link to="/v1/register">Register</Link>
                        </div>
                        <ul className="main-menu primary-menu">
                            <li><Link to="/v1/">Home</Link></li>
                            <li><Link to="/v1/games">Games</Link>
                                <ul className="sub-menu">
                                    <li><Link to="/v1/games/1/details">Game Singel</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/v1/reviews">Reviews</Link></li>
                            <li><Link to="/v1/news">News</Link></li>
                            <li><Link to="/v1/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;