import React from 'react'
import { HomeObjOne, HomeObjTwo, PricingObj, SecondPricingObj } from './Data';

import { InfoSection, BenefitSection, PricingPage, Footer } from '../../components';

const Home = () => {
    return (
        <>
        <InfoSection {...HomeObjOne} />
        <BenefitSection {...HomeObjTwo} />
        <PricingPage {...PricingObj} {...SecondPricingObj}/>
        <Footer />
        
        
        </>
    )
}

export default Home;
