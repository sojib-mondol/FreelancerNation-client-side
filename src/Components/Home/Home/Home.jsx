import React from 'react';
import Banner from '../../Banner/Banner';
import Explore from '../../Explore/Explore';
import FeatureBanner from '../../FeatuteBanner/FeatureBanner';
import ReviewSlider from '../../ReviewSlider/ReviewSlider';

const Home = () => {
    return (
        <div>
            <Banner />
            <FeatureBanner></FeatureBanner>
            <Explore></Explore>
            <ReviewSlider></ReviewSlider>
        </div>
    );
};

export default Home;