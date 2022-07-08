import * as React from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
}

const frameVariants = {
  hover: { scale: 0.95 },
}

const imageVariants = {
  hover: { scale: 1.1 },
}

export const Thumbnail = ({name, type}) => (
    <>
      <motion.div className="thumbnail" variants={thumbnailVariants}>
        
        <motion.div
          className="frame"
          whileHover="hover"
          variants={frameVariants}
          transition={transition}
          
        > <h2>{name}</h2>
          <Link href={`/${name}`} scroll={false}>
          {/* <Link href="/image/[index]" as={`/image/${i}`} scroll={false}> */}
            <motion.img
              src={`/${name}.${type}`} 
              alt="---------------"
              variants={imageVariants}
              transition={transition}
                                                        
            />
          </Link>
        </motion.div>
      </motion.div>
      <style>
        {`
              h2 {
                color: white;
                text-align: center;
                margin-bottom: 1px;
              }
                .thumbnail {
                  width: 200px;
                  flex: 1;
                  margin: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
              }
  
              .frame {
                  overflow: hidden;
                  width: min-content;;
                  display: flex;
                  flex-flow: column;
                  align-items: center;
              }
  
              .thumbnail img {
                  width: 100px;
                  opacity: 0.8;
                  cursor: pointer;
              }
          `}
      </style>
    </>
  )

export const Picture  = () => (
    <>
        <div className='discription'>
              <h1>
                  ioToad
              </h1>
              <p>
                  Real Assistance for Virtual Construction
              </p>
        </div>
        <div className="gallery">
        <motion.div
            className="thumbnails"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          <Thumbnail name='BIM' type='svg'/>
          <Thumbnail name='Automation' type='svg'/>
          <Thumbnail name='Offshoring' type='svg'/>
          <Thumbnail name='About' type='svg'/>
        </motion.div>
        </div>
        <style>
        {`
            .gallery {
                padding: 40px;
                margin: 0 auto;
                width: 100%;
                max-width: 1200px;
                position: relative;
            }

            .thumbnails {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                justify-content: space-between;
            }

            .discription {
              color: white;
              text-align: center;
              width: 100%;
            }
            .discription h1 {
              font-size: 100px;
              margin: 5px;
            }
            .discription p {
              margin: 1px;
              font-size: 25px;
            }
            @media screen and (min-width: 600px) {
            h1 {
                font-size: 140px;
                bottom: -130px;
            }
            `}
        </style>
    </>
  )