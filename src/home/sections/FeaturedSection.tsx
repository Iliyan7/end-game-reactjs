import * as React from 'react'

export const FeaturedSection = () => {
    return (
        <section className="featured-section">
        <div className="featured-bg set-bg" style={{backgroundImage: 'url("img/featured-bg.jpg")'}} />
        <div className="featured-box">
            <div className="text-box">
                <div className="top-meta">11.11.18  /  in <a >Games</a></div>
                <h3>The game you’ve been waiting  for is out now</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum posuere porttitor justo id pellentesque. Proin id lacus feugiat, posuere erat sit amet, commodo ipsum. Donec pellentesque vestibulum metus...</p>
                <a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#" /></a>
            </div>
        </div>
    </section>
    )
}