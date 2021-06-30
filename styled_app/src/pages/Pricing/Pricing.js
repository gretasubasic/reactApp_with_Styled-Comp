import React from 'react'
import { PricingObj } from './Data';
import { SecondPricingObj } from '../HomePage/Data';
import { InfoSection, BenefitSection, PricingPage, Footer } from '../../components';

const Home = () => {
    return (
        <>
        
       
       <PricingPage {...PricingObj} {...SecondPricingObj} />
       <Footer />
       
       
        
        
        </>
    )
}

export default Home;
