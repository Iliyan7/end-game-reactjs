import * as React from 'react'
import HeroSection from './sections/HeroSection';
import IntroSection from './sections/IntroSection';
import BlogSection from './sections/BlogSection';
import IntroVideoSection from './sections/IntroVideoSection';
import FeaturedSection from './sections/FeaturedSection';
import Header from '../shared/Header';

type Props = {
}

const Home: React.FC<any> = (props: Props) => {
    return (
        <React.Fragment>
             <Header />
            {/* <div id="preloder">
                <div className="loader" />
            </div> */}

            <HeroSection />
            <IntroSection />
            <BlogSection />
            <IntroVideoSection />
            <FeaturedSection />
        </ React.Fragment>
    )
}

export default Home;