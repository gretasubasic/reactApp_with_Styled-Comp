import React from 'react'
import { HomeObjTwo } from './Data';
import { PricingObj } from '../HomePage/Data';
import { SecondPricingObj } from '../HomePage/Data';
import { InfoSection, BenefitSection, PricingPage, Footer } from '../../components';

const Home = () => {
    return (
        <>
       
        <BenefitSection {...HomeObjTwo} />
        <PricingPage {...PricingObj} {...SecondPricingObj} />
        <Footer />
        
        
        </>
    )
}

export default Home;
