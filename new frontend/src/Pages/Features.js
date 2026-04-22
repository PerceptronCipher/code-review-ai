// import star from "../images/Star 1.png";
 
// function Features() {
//   const featuresList = [
//     "Paste code directly into the editor for instant review",
//     "Upload code files for automated analysis",
//     "AI-powered feedback using OpenAI GPT-4o",
//     "Review history — track past submissions in session",
//     "Rate limiting — 10 requests/minute to prevent abuse",
//     "CORS-enabled for seamless frontend-backend communication",
//   ];

//   return (
//     <div className="how" id="how-it-works">
//       <div className="howHeading">Features</div>

//       <ul className="howList">
//         {featuresList.map((feature, index) => (
//           <li key={index} className="hl">
//             <img src={star} alt="star" />
//             <span>{feature}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Features;

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  UploadCloud,
  Cpu,
  History,
  ShieldCheck,
  Zap,
} from 'lucide-react' // npm install lucide-react
import './Features.css'

function Features() {
  const features = [
    {
      text: 'Paste code directly into the editor for instant review',
      icon: <Code2 size={20} />,
    },
    {
      text: 'Upload code files for automated analysis',
      icon: <UploadCloud size={20} />,
    },
    {
      text: 'AI-powered feedback using OpenAI GPT-4o',
      icon: <Cpu size={20} />,
    },
    {
      text: 'Review history — track past submissions in session',
      icon: <History size={20} />,
    },
    {
      text: 'Rate limiting — 10 requests/minute to prevent abuse',
      icon: <ShieldCheck size={20} />,
    },
    {
      text: 'CORS-enabled for seamless communication',
      icon: <Zap size={20} />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section className='features-section' id='how-it-works'>
      <div className='features-wrapper'>
        <motion.div
          className='features-header'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className='badge'>Capabilities</span>
          <h2>Platform Features</h2>
          <p className='header-subtitle'>
            Everything you need to ship cleaner, safer code faster.
          </p>
        </motion.div>

        <motion.div
          className='features-grid'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='feature-card'
              variants={itemVariants}
            >
              <div className='icon-box'>{feature.icon}</div>
              <p className='feature-text'>{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features