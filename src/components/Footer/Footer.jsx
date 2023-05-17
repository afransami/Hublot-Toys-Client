import React from "react";
import { FaFacebookSquare, FaLinkedinIn, FaTwitterSquare } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 rounded-xl bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% text-base-content">
      <div>
        <Link to= "/"><img
          className="w-24 h-24 rounded-lg"
          src="https://i.ibb.co/TbfssYY/Outstanding-Illustrations-by-UK-Artist-Petros-Afshar-Inspirationfeed.png"
          alt=""
        /></Link>
        <p>
         <strong> Hublot Toys Industries Ltd.</strong>
          <br />
          Entertaining kids since 1886 <br />
          Copyright © 2023 - All right reserved by Hublot Toys Industries Ltd
        </p>        
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <a className="link link-hover">Tel: + 00 123456</a>
        <a className="link link-hover">Cell: + 00 123456</a>
        <a className="link link-hover">Email: info@hublot.com</a>
      </div>
      <div>
        <span className="footer-title">Address</span>
        <p>Address: H23G+98J, <br /> Ayala Ave, Legazpi Village, <br /> Makati, 1229 Metro Manila, <br /> Philippines</p>     
      </div>
      <div>
        <div className="footer-title">Social Media</div>
        <div className="flex gap-4">
        <Link to= "https://www.facebook.com/" className="text-3xl"><FaFacebookSquare></FaFacebookSquare></Link>        
        <Link to="https://www.twiter.com/" className="text-3xl"><FaTwitterSquare></FaTwitterSquare></Link>        
        <Link to="https://www.linkedin.com/" className="text-3xl"><FaLinkedinIn></FaLinkedinIn></Link>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
