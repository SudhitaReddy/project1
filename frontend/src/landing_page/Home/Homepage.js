import React from 'react';
import Hero from './Hero';
import Awards from './Award'
import Stacts from './Stact';
import Prising from './price';
import Education from './Education';

import OpenAccount from '../OpenAccount';

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stacts/>
        <Prising/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;