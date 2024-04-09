import React from 'react';
import footer from '../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background:`url(${footer})`,
            backgroundSize:'cover'
        }} className='p-10 ' >
  <section className="footer p-7 bg-neutral text-neutral-content">
    
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Emergency Checkup</a>
    <a className="link link-hover">Monthly Checkup</a>
    <a className="link link-hover">Weekly Checkup</a>
    <a className="link link-hover">Deep Checkup</a>
  </nav> 
  <nav>
    <h6 className="footer-title">ORAL HEALTH</h6> 
    <a className="link link-hover">Fluoride Treatment</a>
    <a className="link link-hover">Cavity Filling</a>
    <a className="link link-hover">Teath Whitening</a>
  </nav> 
  <nav>
    <h6 className="footer-title">OUR ADDRESS</h6> 
    <a className="link link-hover">New York - 101010 Hudson</a>
  </nav>
  </section>
  <aside className='text-center'>
    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    );
};

export default Footer;