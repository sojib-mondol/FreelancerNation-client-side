import React from 'react';
import BusinessSection from '../../buisnessSection/BuisnessSection';
import Explore from '../../Explore/Explore';
import FeatureBanner from '../../FeatuteBanner/FeatureBanner';
import ReviewSlider from '../../ReviewSlider/ReviewSlider';
import Guideline from '../Guideline/Guideline';
import TalentBanner from '../TalentBanner/TalentBanner';

const Home = () => {
    return (
        <div>
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