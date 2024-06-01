"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading.component'
import { skillsData } from '@/libs/data'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import {animate, motion} from 'framer-motion'


const fadeInAnimationVariants = {
    initial:{
        opacity:0,
        y:100
    },
    animate:(index:number) => ({
        opacity:1,
        y:0,
        transition:{
            delay:0.05 * index
        }
    })
}
export default function Skills() {

    
    const {ref , inView} = useInView({
        threshold:0.5
    });
    const {setActiveSection} = useActiveSectionContext();
  
    useEffect(() => {
      if(inView){
        setActiveSection('Skills')
      }
  
    } , [inView , setActiveSection])


  return (
    <section ref={ref} id="skills" className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading >My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg  text-gray-800 '>
            {
                skillsData.map((skill,index) => (
                    <motion.li 
                        key={index} 
                        className='bg-white border border-black/[0.1] rounded-xl px-5  py-3'
                        variants={fadeInAnimationVariants}
                        whileInView="animate"
                        initial="initial"
                        viewport={{
                            once:true
                        }}
                        custom={index}
                        >{skill}</motion.li>
                ))
            }
        </ul>
    </section>
  )
}
