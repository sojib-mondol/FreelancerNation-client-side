import React from 'react';
import BusinessSection from '../../buisnessSection/BuisnessSection';
import Explore from '../../Explore/Explore';
import FeatureBanner from '../../FeatuteBanner/FeatureBanner';
import Guideline from '../../Guideline/Guideline';
import ReviewSlider from '../../ReviewSlider/ReviewSlider';
import TalentBanner from '../../TalentBanner/TalentBanner';


const Home = () => {
    return (
        <div>
            <FeatureBanner></FeatureBanner>
            <Explore></Explore>
            <ReviewSlider></ReviewSlider>
            <BusinessSection></BusinessSection>


<<<<<<< HEAD
            <FreelancerNationGuid></FreelancerNationGuid>


            <Guideline/> 
            <TalentBanner/>
=======
            <Guideline/>
            <TalentBanner />
            
>>>>>>> deebddce163d6406710eccaa04c94c1bf8156a73

        </div>
    );
};

export default Home;