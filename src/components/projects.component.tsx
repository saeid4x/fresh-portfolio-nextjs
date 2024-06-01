"use client"

import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading.component'
import { projectsData } from '@/libs/data'
import Project from './project.component'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Projects() {

    const {ref , inView} = useInView({
        threshold:0.5
    });
    const {setActiveSection} = useActiveSectionContext();
  
    useEffect(() => {
      if(inView){
        setActiveSection('Projects')
      }
  
    } , [inView , setActiveSection])
    
  return (
   <section  ref={ref} className='scroll-mt-28 mb-28' id="projects">
        <SectionHeading>My Projects</SectionHeading>

        <div>
            {
                projectsData.map((project,index) =>(
                    <React.Fragment key={index}>
                        <Project {...project} />                    
                    </React.Fragment>
                ))
            }
        </div>
   </section>
  )
}

