"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { useScroll,motion, useTransform } from 'framer-motion'
import { projectsData } from '@/libs/data'


// type ProejctProps = {
//     title:string,
//     description:string,
//     imageUrl:React.ReactNode,
//     tags:string[]
// }

type ProjectsProps = typeof projectsData[0]

export default function Project({title,description,imageUrl,tags}:ProjectsProps){
    const ref = useRef<HTMLElement>(null);
   const {scrollYProgress} = useScroll({
        target:ref,
        offset:['0 1' , '1.33 1']
    })

    const scaleProgress = useTransform(scrollYProgress, [0,1] , [0.5,1]);
    return (
         <motion.section ref={ref} className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] relative mb-3 sm:mb-8 last:mb-0 group even:pl-8 hover:bg-gray-200 transition'
          style={{
            scale:scaleProgress,
            opacity:scrollYProgress
          }}
         >

            <div className='pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-[50%] flex flex-col h-full group-even:ml-[18rem]'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700 '>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag,index) => (
                        <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] text-white uppercase tracking-wider rounded-full'>{tag}</li>
                    
                    ))}
                </ul>

            </div>

            <Image src={imageUrl} alt="my project" quality={95} className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105  group-even:group-hover:translate-x-3 
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            
            '/>
         </motion.section>
    )
}