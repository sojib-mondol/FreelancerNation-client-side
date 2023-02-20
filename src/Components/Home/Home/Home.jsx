import React from 'react';

import Banner from '../../Banner/Banner';
import BusinessSection from '../../buisnessSection/BuisnessSection';
import Explore from '../../Explore/Explore';
import FeatureBanner from '../../FeatuteBanner/FeatureBanner';

import ProfessionalServices from '../../ProfessionalServices/ProfessionalServices';










import Guideline from '../../Guideline/Guideline';


import ReviewSlider from '../../ReviewSlider/ReviewSlider';
import TalentBanner from '../../TalentBanner/TalentBanner';


const Home = () => {
    return (
        <div>
            <Banner />
            <ProfessionalServices />
            <FeatureBanner></FeatureBanner>
            <Explore></Explore>
            <ReviewSlider></ReviewSlider>
            <BusinessSection></BusinessSection>
            <Guideline/> 
            <TalentBanner/>
        </div>
    );
};

export default Home;