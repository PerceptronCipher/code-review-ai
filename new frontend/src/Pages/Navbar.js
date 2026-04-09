// import q from "../images/Q&A Ss.png";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <div className="logo">
//         <img src={q} />
//       </div>
//       <div className="nav-links">
//         <a href="#how-it-works">Features</a>

//         <a href="#hero">Docs</a>
//         <a href="#contact">Privacy</a>
//       </div>
//       <div className="nav-btn">
//         <button>
//           <a href="#review">Upload Docs</a>
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Navbar;

'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: {
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    opened: {
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    opened: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  }

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        {/* Left: Logo */}
        <div className='logo'>
          Q&A <span className='logo-accent'>S</span>
        </div>

        {/* Center: Desktop Links */}
        <ul className='nav-links desktop-only'>
          <li>
            <a href='#features'>Features</a>
          </li>
          <li>
            <a href='#docs'>Docs</a>
          </li>
          <li>
            <a href='#api'>Api</a>
          </li>
          <li>
            <a href='#privacy'>Privacy</a>
          </li>
        </ul>

        {/* Right: Desktop Action Button */}
        <div className='nav-action desktop-only'>
          <button className='upload-btn'>
            <a href='#upload'>Upload Docs</a>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className='nav-menu-mobile'
              initial='closed'
              animate='opened'
              exit='closed'
              variants={menuVariants}
            >
              <ul className='nav-links-mobile'>
                {['Features', 'Docs', 'Api', 'Privacy'].map((item, i) => (
                  <motion.li key={item} custom={i} variants={linkVariants}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                variants={linkVariants}
                custom={4}
                className='mobile-btn-container'
              >
                <button className='upload-btn'>
                  <a href='#upload' onClick={() => setIsOpen(false)}>
                    Upload Docs
                  </a>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar