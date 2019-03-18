import * as React from 'react'

export const Footer = () => {
    return (
    <footer className="footer-section">
        <div className="container">
            <div className="footer-left-pic">
                <img src="/img/footer-left-pic.png" />
            </div>
            <div className="footer-right-pic">
                <img src="/img/footer-right-pic.png" />
            </div>
            <a href="#" className="footer-logo">
                <img src="/img/logo.png" />
            </a>
            <ul className="main-menu footer-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="footer-social d-flex justify-content-center">
                <a href="#"><i className="fa fa-pinterest" /></a>
                <a href="#"><i className="fa fa-facebook" /></a>
                <a href="#"><i className="fa fa-twitter" /></a>
                <a href="#"><i className="fa fa-dribbble" /></a>
                <a href="#"><i className="fa fa-behance" /></a>
            </div>
            <div className="copyright"><a >Colorlib</a> 2018 @ All rights reserved</div>
        </div>
    </footer>
    )
}