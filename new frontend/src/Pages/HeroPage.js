// function HeroPage() {
//   return (
//     <div className="hero" id="hero">
//       <h1>Review Your Code Smarter Not Harder</h1>
//       <p>
//         AI-powered code analysis for bugs, performance issues, and optimization
//         across your entire project.
//       </p>
//       <div className="hero-btn">
//         <button className="upload-docs">
//           <a href="#upload">Upload Docs</a>
//         </button>
//         <button className="try-demo">Start review</button>
//       </div>
//     </div>
//   );
// }
// export default HeroPage;

import React from 'react'
import { motion } from 'framer-motion'
import './HeroPage.css'

function HeroPage() {
  return (
    <section className='hero' id='hero'>
      <div className='hero-content'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Review Your Code <br />
          <span className='text-accent'>Smarter</span> <br />
          Not Harder
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          AI-Powered Code Analysis For Bugs, Performance Issues,{' '}
          <br className='desktop-br' />
          And Optimization Across Your Entire Project.
        </motion.p>

        <motion.div
          className='hero-btn-group'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <motion.button
            className='btn-primary'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href='#upload'>Upload Docs</a>
          </motion.button>

          <motion.button
            className='btn-secondary'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Review
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroPage