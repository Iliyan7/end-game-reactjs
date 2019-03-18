import * as React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';

export const Carousel = () => {
    return (
        <OwlCarousel
            className="hero-slider owl-carousel"
            nav={true}
            loop={true}
            dots={true}
            dotData={true}
            navText={['', '<img src="/img/icons/solid-right-arrow.png">']}
            animateOut={'fadeOut'}
            animateIn={'fadeIn'}
            items={1}
            autoplayTimeout={1000}
        >
            <div className="hero-item set-bg d-flex align-items-center justify-content-center text-center" style={{ backgroundImage: 'url("img/slider-bg-1.jpg")' }}>
                <div className="container">
                    <h2>Game on!</h2>
                    <p>Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor,<br />sit amet elementum lorem. Ut cursus tempor turpis.</p>
                    <a href="#" className="site-btn">Read More <img src="img/icons/double-arrow.png" alt="#" /></a>
                </div>
            </div>
            <div className="hero-item set-bg d-flex align-items-center justify-content-center text-center" style={{ backgroundImage: 'url("img/slider-bg-2.jpg")' }}>
                <div className="container">
                    <h2>Game on!</h2>
                    <p>Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor,<br />sit amet elementum lorem. Ut cursus tempor turpis.</p>
                    <a href="#" className="site-btn">Read More <img src="img/icons/double-arrow.png" alt="#" /></a>
                </div>
            </div>
        </OwlCarousel>
    )
}