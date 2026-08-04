import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import Services from './Services'
import FeaturedCategories from './FeaturedCategories'
import PromoBanner from './PromoBanner'

const Home = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <FeaturedCategories />
            <PromoBanner />
        </>
    )
}

export default Home