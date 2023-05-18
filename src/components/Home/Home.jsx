import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>           
            
        </div>
    );
};

export default Home;