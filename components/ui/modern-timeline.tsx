'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'

export type TimelineItem = {
  year: string
  content: string
}

interface ModernTimelineProps {
  items: TimelineItem[]
}

export default function ModernTimeline({ items }: ModernTimelineProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <div ref={containerRef} className="relative w-full pb-8">
      {/* Timeline Track with Arrows - Full Width */}
      <div className="relative flex items-start w-full" style={{ marginLeft: '0' }}>
        {items.map((item, idx) => {
          const isFirst = idx === 0
          const isLast = idx === items.length - 1
          
          return (
            <React.Fragment key={idx}>
              {/* Timeline Item */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center"
                style={{ 
                  flex: 1,
                  marginLeft: isFirst ? '0' : '-30px',
                  zIndex: items.length - idx
                }}
              >
                {/* Arrow Shape Container */}
                <div className="relative mb-6 w-full">
                  {/* Main Arrow Body */}
                  <div
                    className="relative bg-primary hover:bg-primary/90 transition-colors shadow-lg w-full"
                    style={{
                      height: '100px',
                      clipPath: isFirst
                        ? 'polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%)'
                        : 'polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%, 30px 50%)',
                    }}
                  >
                    {/* Year inside arrow */}
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white"
                      style={{
                        paddingLeft: isFirst ? '1rem' : '2rem',
                        paddingRight: '2rem',
                      }}
                    >
                      <div className="text-2xl md:text-3xl font-bold">{item.year}</div>
                    </div>
                  </div>
                </div>

                {/* Content Card Below */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.15 + 0.2, duration: 0.5 }}
                  className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                  style={{
                    minHeight: '120px',
                    width: 'calc(100% - 40px)',
                    marginLeft: isFirst ? '15px' : '22.5px',
                    marginRight: '2.5px',
                  }}
                >
                  <p className="text-sm text-gray-700 leading-relaxed text-center">
                    {item.content}
                  </p>
                </motion.div>
              </motion.div>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}
