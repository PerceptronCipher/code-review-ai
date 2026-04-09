// import Frame from "../images/Frame19.png";
// import Frame1 from "../images/Frame20.png";
// import Frame2 from "../images/Frame21.png";

// function Footer() {
//   return (
//     <div className="footer" id="contact">
//       <div className="footer1">
//         <div>
//           <div className="ffree">FreelancerAI</div>
//           <div className="ffree1">the working AI proposal</div>
//           <div className="ffree2">
//             <div>
//               <img src={Frame} alt="Frame" />
//             </div>
//             <div>
//               <img src={Frame1} alt="Frame" />
//             </div>
//             <div>
//               <img src={Frame2} alt="Frame" />
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="fquick">Quicklinks</div>
//           <div className="flinks1">
//             <a href="#">
//               <li>Home</li>
//             </a>
//             <a href="#how-it-works">
//               <li>Features</li>
//             </a>
//             <a href="#how-it-works">
//               <li>how it works</li>
//             </a>
//             <a href="#how-it-works">
//               <li>Use Case</li>
//             </a>
//           </div>
//         </div>

//         <div>
//           <div className="fquick">Support</div>
//           <div className="flinks1">
//             <a href="#how-it-works">
//               <li>Contact</li>
//             </a>
//             <a href="#how-it-works">
//               <li>Help Center</li>
//             </a>
//             <a href="#how-it-works">
//               <li>Email</li>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="footer2">
//         <p>@ BuildON Inc. All rights reserved.</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;

'use client'
import React from 'react'
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
} from 'react-icons/fa6' // Using Fa6 for the latest X (Twitter) icon
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer-section' id='contact'>
      <div className='footer-container'>
        {/* Brand Section */}
        <div className='footer-brand'>
          <h2 className='brand-logo'>FreelancerAI</h2>
          <p className='brand-tagline'>The Working AI Proposal</p>
          <div className='social-links'>
            <a href='#' aria-label='Instagram' className='social-icon'>
              <FaInstagram size={18} />
            </a>
            <a href='#' aria-label='X (Twitter)' className='social-icon'>
              <FaXTwitter size={18} />
            </a>
            <a href='#' aria-label='LinkedIn' className='social-icon'>
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='footer-links-group'>
          <h3 className='links-title'>Quick Links</h3>
          <ul className='footer-links'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#features'>Features</a>
            </li>
            <li>
              <a href='#how-it-works'>How it Works</a>
            </li>
            <li>
              <a href='#use-cases'>Use Case</a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className='footer-links-group'>
          <h3 className='links-title'>Support</h3>
          <ul className='footer-links'>
            <li>
              <a href='#contact'>Contact</a>
            </li>
            <li>
              <a href='#help'>Help Center</a>
            </li>
            <li className='email-link'>
              <a href='mailto:support@buildon.org'>
                <FaEnvelope size={14} />
                <span>support@buildon.org</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© {currentYear} BuildON Inc. All Rights Reserved.</p>
        <div className='footer-legal'>
          <a href='/privacy'>Privacy Policy</a>
          <span className='separator'>•</span>
          <a href='/terms'>Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer