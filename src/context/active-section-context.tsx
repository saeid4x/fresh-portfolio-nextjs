
"use client"

import { links } from '@/libs/data'
import React, { useState ,createContext, useContext} from 'react'

type ActiveSectionContextProviderProps = {children:React.ReactNode}

type ActiveSectionContextType = {
    activeSection:typeof links[number]['name'],
    setActiveSection:React.Dispatch<React.SetStateAction<typeof links[number]['name']>>
}


const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)
export default function ActiveSectionContextProvider({children}:ActiveSectionContextProviderProps) {
    const [activeSection , setActiveSection] = useState<typeof links[number]['name']>('Home')
  return  <ActiveSectionContext.Provider value={{
    activeSection,setActiveSection
  }}>{children}</ActiveSectionContext.Provider>
}


export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);

    if(context === null){
        throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider")
    }

    return context
}
