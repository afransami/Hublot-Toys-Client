import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SubCategory from '../SubCategory/SubCategory';
import UpcomingToys from '../UpcomingToys/UpcomingToys';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory> 
            <UpcomingToys></UpcomingToys>      
            
        </div>
    );
};

export default Home;