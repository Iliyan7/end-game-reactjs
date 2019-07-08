import React from 'react'
import BlogSection from './sections/blog-section'
import FeaturedSection from './sections/featured-section'
import HeroSection from './sections/hero-section'
import IntroSection from './sections/intro-section'
import IntroVideoSection from './sections/intro-video-section'

const Home = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <IntroSection />
            <BlogSection />
            <IntroVideoSection />
            <FeaturedSection />
        </React.Fragment>
    )
}

export default Home
