import * as React from 'react'
import Header from '../shared/Header';
import HeroSection from './sections/HeroSection';
import IntroSection from './sections/IntroSection';
import BlogSection from './sections/BlogSection';
import IntroVideoSection from './sections/IntroVideoSection';
import FeaturedSection from './sections/FeaturedSection';
import Newsletter from '../shared/Newsletter';
import Footer from '../shared/Footer';

export default () => {
    return (
        <React.Fragment>
            {/* <div id="preloder">
                <div className="loader" />
            </div> */}

            <Header />
            <HeroSection />
            <IntroSection />
            <BlogSection />
            <IntroVideoSection />
            <FeaturedSection />
            <Newsletter />
            <Footer />
        </ React.Fragment>
    )
}