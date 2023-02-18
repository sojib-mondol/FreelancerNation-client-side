import React from 'react';
import Banner from '../../Banner/Banner';
import Explore from '../../Explore/Explore';
import FeatureBanner from '../../FeatuteBanner/FeatureBanner';
import ProfessionalServices from '../../ProfessionalServices/ProfessionalServices';
import ReviewSlider from '../../ReviewSlider/ReviewSlider';

const Home = () => {
    return (
        <div>
            <Banner />
            <ProfessionalServices />
            <FeatureBanner></FeatureBanner>
            <Explore></Explore>
            <ReviewSlider></ReviewSlider>
        </div>
    );
};

export default Home;