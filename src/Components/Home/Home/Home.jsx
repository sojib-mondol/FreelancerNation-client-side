import React, { useState } from 'react';
import Banner from '../../Banner/Banner';
import BusinessSection from '../../buisnessSection/BuisnessSection';
import Explore from '../../Explore/Explore';
import FeatureBanner from '../../FeatuteBanner/FeatureBanner';
import ProfessionalServices from '../../ProfessionalServices/ProfessionalServices';
import Guideline from '../../Guideline/Guideline';
import ReviewSlider from '../../ReviewSlider/ReviewSlider';
import TalentBanner from '../../TalentBanner/TalentBanner';
import Skeleton from '../../Shared/Skeleton/Skeleton';
import ShowGigs from '../../showGigs/ShowGigs';
import ShortsGigs from '../../showGigs/ShortsGigs';



const Home = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2000)

    return (
        <>
            {loading ?
                <Skeleton></Skeleton>
             

                :
                <div>
                    <Banner />
                    <ProfessionalServices />
                    <FeatureBanner />
                    <Explore />
                    <ShortsGigs></ShortsGigs>
                    <ReviewSlider />
                    <BusinessSection />
                    <Guideline />
                    <TalentBanner />
                </div>
            }
        </>
    );
};
export default Home;