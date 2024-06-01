"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {
    
    const {ref , inView} = useInView({
        threshold:0.5
    });
    const {setActiveSection} = useActiveSectionContext();
  
    useEffect(() => {
      if(inView){
        setActiveSection('Home')
      }
  
    } , [inView , setActiveSection])

  return (
     <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0  scroll-mt-[100rem]' id="home">
        <div className='flex items-center justify-center'>
            <div className='relative'>

                <motion.div
                 initial={{opacity:0, scale:0}}
                 animate={{opacity:1 , scale:1}}
                 transition={{
                    type:'tween',
                    duration:0.2,


                 }}
                >
                    <Image 
                        src="https://irs02.wisgoon.com/irs02/cf/8d/06/7e/irs02_1080x1080_YR0W1nVV_4624490_1717047501409629687.jpeg"
                        alt="avatar" 
                        width={192}
                        height={192}
                        quality={95}
                        priority={true}
                        className='w-24 h-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
                    
                    />
                </motion.div>

                <motion.span 
                className='text-4xl absolute bottom-0 right-0'
                initial={{opacity:0 , scale:0}}
                animate={{opacity:1 , scale:1}}
                transition={{
                    type:'spring',
                    stiffness:325,
                    delay:0.1,
                    duration:0.7
                }}
                
                >👋</motion.span>

            </div>
        </div>

        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Saeid4x.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div 
            className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{opacity:0 , y:100}}
            animate={{opacity:1 , y:0}} 
            transition={{
                delay:0.2
            }}
        >
            <Link href="#contact"
                  className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group'
             >
                {/**
                 * active:scale-105 ==> when we click on this link, element scale to 105
                 */                
              }
                Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /> 
            </Link>
            <a href="/CV.pdf" download className='bg-white   px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition group cursor-pointer border border-black/10' > Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition '/> </a>


            <a className='bg-white  p-4 flex items-center gap-2 rounded-full text-gray-700 focus:scale-110 hover:scale-110  active:scale-105 transition group cursor-pointer border border-black/10 ' href='https://linkedin.com/in/saeid-imani' target='_blank'> <BsLinkedin /> </a>

            <a className='bg-white  p-4 flex items-center gap-2 rounded-full text-gray-700 text-[1.35rem] focus:scale-110 hover:scale-110  active:scale-105 transition group cursor-pointer border border-black/10'
             href='https://github.com/saeid4x'
            > <FaGithubSquare  /> </a>
        </motion.div>






     </section>
  )
}
