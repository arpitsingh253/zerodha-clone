import React from 'react';
import Hero from './Hero';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import Awards from './Awards';

import OpenAccount from '../OpenAccount';
import TopNav from '../TopNav';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
         <TopNav />
        <Hero />
        {/* <Awards /> */}
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
        </>
     );
    
}

export default HomePage;
