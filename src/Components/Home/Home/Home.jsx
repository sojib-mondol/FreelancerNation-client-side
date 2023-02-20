import React from 'react';
import Banner from '../../Banner/Banner'
import ProfessionalServices from '../../ProfessionalServices/ProfessionalServices'
import FeatureBanner from '../../FeatuteBanner/FeatureBanner'
import Explore from '../../Explore/Explore'
import ReviewSlider from '../../ReviewSlider/ReviewSlider'
import BusinessSection from '../../buisnessSection/BuisnessSection'
import Guideline from '../../Guideline/Guideline'
import TalentBanner from '../../TalentBanner/TalentBanner'



const Home = () => {
    return (
        <div>
            <Banner/>
            <ProfessionalServices />
            <FeatureBanner></FeatureBanner>
            <Explore></Explore>
            <ReviewSlider></ReviewSlider>
            <BusinessSection></BusinessSection>
            <Guideline />
            <TalentBanner />
            <Guideline/>
            <TalentBanner />
        </div>
    );
};

export default Home;