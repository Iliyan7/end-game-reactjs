import * as React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-section">
            <div className="header-warp">
                <div className="header-social d-flex justify-content-end">
                    <p>Follow us:</p>
                    <a href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a>
                    <a href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                    <a href="https://www.instagram.com/"><i className="fa fa-instagram" /></a>
                    <a href="https://twitter.com"><i className="fa fa-twitter" /></a>
                </div>
                <div className="header-bar-warp d-flex">
                    <a className="site-logo">
                        <img src="./img/logo.png" />
                    </a>
                    <nav className="top-nav-area w-100">
                        <div className="user-panel">
                            <Link to="/login">Login</Link> /
                            <Link to="/register">Register</Link>
                        </div>
                        <ul className="main-menu primary-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/games">Games</Link>
                                <ul className="sub-menu">
                                    <li><a href="game-single.html">Game Singel</a></li>
                                </ul>
                            </li>
                            <li><Link to="/reviews">Reviews</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;