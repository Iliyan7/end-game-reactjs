import * as React from 'react'

export const Header = () => {
    return (
        <header className="header-section">
            <div className="header-warp">
                <div className="header-social d-flex justify-content-end">
                    <p>Follow us:</p>
                    <a href="#"><i className="fa fa-pinterest" /></a>
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-dribbble" /></a>
                    <a href="#"><i className="fa fa-behance" /></a>
                </div>
                <div className="header-bar-warp d-flex">
                    <a className="site-logo">
                        <img src="./img/logo.png" />
                    </a>
                    <nav className="top-nav-area w-100">
                        <div className="user-panel">
                            <a >Login</a> / <a >Register</a>
                        </div>
                        <ul className="main-menu primary-menu">
                            <li><a href="home.html">Home</a></li>
                            <li><a href="games.html">Games</a>
                                <ul className="sub-menu">
                                    <li><a href="game-single.html">Game Singel</a></li>
                                </ul>
                            </li>
                            <li><a href="review.html">Reviews</a></li>
                            <li><a href="blog.html">News</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}