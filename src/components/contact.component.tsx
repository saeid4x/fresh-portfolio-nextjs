"use client"


import React, { useEffect } from 'react'
import SectionHeading from './section-heading.component'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import sendEmail from '@/actions/sendEmail'

export default function Contact() {

  
    
    /**
     * threshold:0.75 == if 75% of <About /> component
     *  is in view , then value of inView is true
     */

  const {ref , inView} = useInView({
    threshold:0.75
  });
  const {setActiveSection} = useActiveSectionContext();

  useEffect(() => {
    if(inView){
      setActiveSection('Contact')
    }

  } , [inView , setActiveSection])


  return (
     <motion.section ref={ref} id="contact" className=' scroll-mt-28 mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{
            duration:1
        }}
        viewport={{
            once:true
        }}
     >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 -mt-5'>
            Please contact me directly at {" "}
            <a href="mailto:example@gmail.com" className='underline'>example@gmail.com</a>{" "}
            or throgh this form
        </p>

        <form action={async (formData) =>{
            await sendEmail(formData)
        }} className='mt-10 flex flex-col'>
            <input type="email" name="senderEmail" className='px-4 h-14 rounded-lg border border-black/10 focus:border-black/10' placeholder='Your Email'/>
            <textarea name="message" className='h-52 my-3 rounded-lg border border-black p-4 ' placeholder='Your Message' />
            <button type='submit' className='group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none flex transition-all items-center justify-center gap-2'>Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ' /></button>

        </form>

     </motion.section>
  )
}
