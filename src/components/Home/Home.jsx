import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SubCategory from '../SubCategory/SubCategory';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Gallery></Gallery>
            <SubCategory></SubCategory>           
            
        </div>
    );
};

export default Home;