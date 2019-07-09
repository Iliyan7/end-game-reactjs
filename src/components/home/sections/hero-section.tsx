import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import React from 'react'
import OwlCarousel from 'react-owl-carousel'

class HeroSection extends React.Component {

    componentDidMount(): void {
        const dots = document.querySelectorAll('.hero-slider .owl-dot')

        dots.forEach((dot, i) => {
            const index = i + 1

            if (index < 10) {
                dot.innerHTML = `0${index}.`
            } else {
                dot.innerHTML = `${index}.`
            }
        })
    }

    render(): React.ReactNode {
        return (
            <section className="hero-section overflow-hidden">
                <OwlCarousel
                    className="hero-slider owl-carousel"
                    items={1}
                    loop={true}
                    nav={true}
                    navText={['', '<img src="/img/icons/solid-right-arrow.png">']}
                    dotData={true}
                    autoplayTimeout={1000}
                    animateOut={'fadeOut'}
                    animateIn={'fadeIn'}
                    >
                    <div
                        className="hero-item set-bg d-flex align-items-center justify-content-center text-center"
                        style={{ backgroundImage: 'url("/img/slider-bg-1.jpg")' }}
                    >
                        <div className="container">
                            <h2>Game on!</h2>
                            <p>Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor,<br />sit amet elementum lorem. Ut cursus tempor turpis.</p>
                            <a href="#" className="site-btn">Read More <img src="/img/icons/double-arrow.png" alt="#" /></a>
                        </div>
                    </div>
                    <div
                        className="hero-item set-bg d-flex align-items-center justify-content-center text-center"
                        style={{ backgroundImage: 'url("/img/slider-bg-2.jpg")' }}
                    >
                        <div className="container">
                            <h2>Game on!</h2>
                            <p>Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor,<br />sit amet elementum lorem. Ut cursus tempor turpis.</p>
                            <a href="#" className="site-btn">Read More <img src="/img/icons/double-arrow.png" alt="#" /></a>
                        </div>
                    </div>
                </OwlCarousel>
            </section>
        )
    }
}

export default HeroSection
