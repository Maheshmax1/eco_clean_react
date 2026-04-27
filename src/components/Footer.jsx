import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-[#32965e]  text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3 rounded-3xl bg-emerald-600/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              <span>🌿</span>
              EcoClean
            </div>
            <p className="max-w-md text-sm leading-7 text-[#ffffff]">
              EcoClean brings volunteers together for meaningful cleanup events, awareness campaigns, and sustainable community action.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#ffffff] mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm text-[#ffffff] ">
              <li>
                <Link className="hover:text-[#ffd700] transition" to="/"><b>Home</b></Link>
              </li>
              <li>
                <Link className="hover:text-[#ffd700] transition" to="/about"><b>About</b></Link>
              </li>
              <li>
                <Link className="hover:text-[#ffd700] transition" to="/events"><b>Events</b></Link>
              </li>
              <li>
                <Link className="hover:text-[#ffd700] transition" to="/contact"><b>Contact</b></Link>
              </li>
              <li>
                <Link className="hover:text-[#ffd700] transition" to="/profile"><b>Profile</b></Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#ffffff] mb-5">Programs</h3>
            <ul className="space-y-3 text-sm text-[#ffffff] ">
              <li>
                <a
                  className="hover:text-[#ffd700] transition"
                  href="https://youtube.com/watch?v=uRhv5kIi7Is"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Clean-up Drives</b>
                  
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ffd700] transition"
                  href="https://nskfdc.nic.in/en/content/home/workshops"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Workshops</b>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#ffd700] transition"
                  href="https://www.quantcast.com/wiki/term/awareness-campaign/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>Awareness Campaigns</b>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#ffffff] mb-5">Contact</h3>
            <div className="space-y-4 text-sm text-[#ffffff]"> 
              <p>
                <a className="hover:text-[#ffd700] transition" href="mailto:info@cleanawareness.com">
                 <b>info@cleanawareness.com</b> 
                </a>
              </p>
              <p>
                <a className="hover:text-[#ffd700] transition" href="tel:+919876543210">
                  <b>+91 98765 43210</b>
                </a>
              </p>
              <p className='hover:text-[#ffd700] transition'><b>Chennai, India</b></p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-6 text-center text-sm text-[#ffffff]">
          <b>© 2025{' '}</b>
          <a
            className="text-[#ffd700] "
            href="https://copyright.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>EcoClean Awareness</b>
              
          </a>
          <b>{' '}| All Rights Reserved</b>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
