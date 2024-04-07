import React from 'react';
import footer from '../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background:`url(${footer})`,
            backgroundSize:'cover'
        }} className='p-10 ' >
  <section class="footer p-7 bg-neutral text-neutral-content">
  <nav>
    <h6 class="footer-title">Services</h6> 
    <a class="link link-hover">Emergency Checkup</a>
    <a class="link link-hover">Monthly Checkup</a>
    <a class="link link-hover">Weekly Checkup</a>
    <a class="link link-hover">Deep Checkup</a>
  </nav> 
  <nav>
    <h6 class="footer-title">ORAL HEALTH</h6> 
    <a class="link link-hover">Fluoride Treatment</a>
    <a class="link link-hover">Cavity Filling</a>
    <a class="link link-hover">Teath Whitening</a>
  </nav> 
  <nav>
    <h6 class="footer-title">OUR ADDRESS</h6> 
    <a class="link link-hover">New York - 101010 Hudson</a>
  </nav>
  </section>
  <aside className='text-center'>
    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    );
};

export default Footer;