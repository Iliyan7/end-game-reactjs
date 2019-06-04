import * as React from 'react';

class IntroVideoSection extends React.Component {

    componentDidMount()
    {
    }

    render() {
        return (
            <React.Fragment>
                <section className="intro-video-section set-bg d-flex align-items-end" style={{ backgroundImage: 'url("./img/promo-bg.jpg")' }}>
                    <a href="https://www.youtube.com/watch?v=uFsGy5x_fyQ" className="video-play-btn video-popup"><img src="/img/icons/solid-right-arrow.png" alt="#" /></a>
                    <div className="container">
                        <div className="video-text">
                            <h2>Promo video of the game</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default IntroVideoSection;