import React from 'react';

import Banner from '../../Banner/Banner';
import BusinessSection from '../../buisnessSection/BuisnessSection';
import Explore from '../../Explore/Explore';
import FeatureBanner from '../../FeatuteBanner/FeatureBanner';
import FreelancerNationGuid from '../../freelancerNationGuide/FreelancerNationGuid';
import ProfessionalServices from '../../ProfessionalServices/ProfessionalServices';


import Banner from '../../Banner/Banner';
import Explore from '../../Explore/Explore';
import FeatureBanner from '../../FeatuteBanner/FeatureBanner';
import ProfessionalServices from '../../ProfessionalServices/ProfessionalServices';

import BusinessSection from '../../buisnessSection/BuisnessSection';
import Explore from '../../Explore/Explore';
import FeatureBanner from '../../FeatuteBanner/FeatureBanner';
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

<<<<<<< HEAD


            {/* <FreelancerNationGuid></FreelancerNationGuid> */}


            <Guideline/> 
            <TalentBanner/>
=======
            <FreelancerNationGuid></FreelancerNationGuid>


            <Guideline />
            <TalentBanner />


>>>>>>> 719a264e7f6e1964ba27d0058039f4d29ab7b333

            <Guideline/>
            <TalentBanner />
            


        </div>
    );
};

export default Home;