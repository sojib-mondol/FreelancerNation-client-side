import React from 'react';
import Banner from '../../Banner/Banner';
import BusinessSection from '../../buisnessSection/BuisnessSection';
import Explore from '../../Explore/Explore';
import FeatureBanner from '../../FeatuteBanner/FeatureBanner';
import FreelancerNationGuid from '../../freelancerNationGuide/FreelancerNationGuid';
import ProfessionalServices from '../../ProfessionalServices/ProfessionalServices';
import ReviewSlider from '../../ReviewSlider/ReviewSlider';
import Guideline from '../Guideline/Guideline';
import TalentBanner from '../TalentBanner/TalentBanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProfessionalServices />
            <FeatureBanner></FeatureBanner>
            <Explore></Explore>
            <ReviewSlider></ReviewSlider>
            <BusinessSection></BusinessSection>
            <FreelancerNationGuid></FreelancerNationGuid>


            <Guideline />
            <TalentBanner />

        </div>
    );
};

export default Home;