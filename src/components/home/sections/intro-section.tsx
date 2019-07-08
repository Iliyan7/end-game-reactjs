import React from 'react'

const IntroSection = () => {
    return (
        <section className="intro-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="intro-text-box text-box text-white">
                            <div className="top-meta">11.11.18 / in <a >Games</a></div>
                            <h3>The best online game is out now!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida....</p>
                            <a href="#" className="read-more">Read More  <img src="/img/icons/double-arrow.png" alt="#" /></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="intro-text-box text-box text-white">
                            <div className="top-meta">11.11.18 / in <a >Playstation</a></div>
                            <h3>Top 5 best games in november</h3>
                            <p>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum  labore suspendisse ultrices gravida....</p>
                            <a href="#" className="read-more">Read More  <img src="/img/icons/double-arrow.png" alt="#" /></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="intro-text-box text-box text-white">
                            <div className="top-meta">11.11.18 / in <a >Reviews</a></div>
                            <h3>Get this game at a promo price</h3>
                            <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida ncididunt ut labore ....</p>
                            <a href="#" className="read-more">Read More  <img src="/img/icons/double-arrow.png" alt="#" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroSection
