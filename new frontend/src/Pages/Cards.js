// function Cards() {
//   return (
//     <div className="cards" id="features">
//       <div className="card">
//         <h2>Issues Detected</h2>
//         <li>Unused Variable</li>
//         <p> Variable declared but never used in the code.</p>
//         <li>Possible Null Reference</li>
//         <p> Object may be null before being accessed.</p>
//         <li>Infinite Loop Risk</li>
//         <p> Loop condition may never resolve to false.</p>
//         <li>Missing Error Handling</li>
//         <p> No try-catch or fallback for potential failures.</p>
//         <li>Incorrect Data Type Usage</li>
//         <p> Variable used with inconsistent or incompatible types.</p>
//       </div>
//       <div className="card">
//         <h2>Performances</h2>
//         <li>unused Variable</li>
//         <p> Variable declared but never used in the code.</p>
//         <li>Possible Null Reference</li>
//         <p> Object may be null before being accessed.</p>
//         <li>Infinite Loop Risk</li>
//         <p> Loop condition may never resolve to false.</p>
//         <li>Missing Error Handling</li>
//         <p> No try-catch or fallback for potential failures.</p>
//         <li>Incorrect Data Type Usage</li>
//         <p> Variable used with inconsistent or incompatible types.</p>
//       </div>
//       <div className="card">
//         <h2>Improvement</h2>
//         <li>unused Variable</li>
//         <p> Variable declared but never used in the code.</p>
//         <li>Possible Null Reference</li>
//         <p> Object may be null before being accessed.</p>
//         <li>Infinite Loop Risk</li>
//         <p> Loop condition may never resolve to false.</p>
//         <li>Missing Error Handling</li>
//         <p> No try-catch or fallback for potential failures.</p>
//         <li>Incorrect Data Type Usage</li>
//         <p> Variable used with inconsistent or incompatible types.</p>
//       </div>
//     </div>
//   );
// }

// export default Cards;

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import './Cards.css'

const cardData = [
  {
    title: 'Issues Detected',
    class: 'issues',
    items: [
      {
        label: 'unused variable',
        desc: 'variable declared but never used in the code.',
      },
      {
        label: 'possible null reference',
        desc: 'object may be null before being accessed.',
      },
      {
        label: 'infinite loop risk',
        desc: 'loop condition may never resolve to false.',
      },
      {
        label: 'missing error handling',
        desc: 'no try-catch or fallback for potential failures.',
      },
      {
        label: 'incorrect data type usage',
        desc: 'variable used with inconsistent or incompatible types.',
      },
    ],
  },
  {
    title: 'Performances',
    class: 'performance',
    items: [
      {
        label: 'inefficient looping',
        desc: 'nested loops could be optimized to reduce time complexity.',
      },
      {
        label: 'redundant calculations',
        desc: 'same computation repeated multiple times unnecessarily.',
      },
      {
        label: 'large memory usage',
        desc: 'data structures may consume more memory than needed.',
      },
      {
        label: 'blocking operations',
        desc: 'synchronous tasks slowing down execution.',
      },
      {
        label: 'unoptimized api calls',
        desc: 'multiple calls could be batched or cached.',
      },
    ],
  },
  {
    title: 'Improvements',
    class: 'improvements',
    items: [
      {
        label: 'refactor repeated code',
        desc: 'extract duplicate logic into reusable functions.',
      },
      {
        label: 'improve naming clarity',
        desc: 'variable and function names can be more descriptive.',
      },
      {
        label: 'simplify conditional logic',
        desc: 'complex if-else statements can be cleaner.',
      },
      {
        label: 'add code comments',
        desc: 'improve readability with brief explanations.',
      },
      {
        label: 'use modern syntax',
        desc: 'replace outdated patterns with newer language features.',
      },
    ],
  },
]

function Cards() {
  return (
    <section className='cards-section' id='features'>
      <div className='cards-container'>
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className={`card ${card.class}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{card.title}</h3>
            <ul className='card-list'>
              {card.items.map((item, i) => (
                <li key={i}>
                  <span className='item-label'>{item.label}</span>
                  <span className='item-desc'>{item.desc}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Cards