import React, { useContext } from 'react'
import Communication from "../assets/communication.png"
import Analytics from "../assets/analytics.png"
import Analysis from "../assets/analysis.png"
import Group from "../assets/Group1.png"
import Market from "../assets/Market.png"
import Target from  "../assets/Target.png"
import Brand from "../assets/Branding.png"
import Research from "../assets/research.png"
import Public from "../assets/Public.png"
import { ThemeContext } from '../Contexts/ThemeContext'
const Skills = () => {
  const {darkMode} = useContext(ThemeContext)
    const SKilsArray=[
        {skillsImg:Market, skillName:"business strategy"},
        {skillsImg:Group, skillName:"corporate communications"},
        {skillsImg:Target, skillName:"strategic planning"},
        {skillsImg:Research, skillName:"research"},
        {skillsImg:Analytics, skillName:"business analysis"},
        {skillsImg:Brand, skillName:"Brand strategy"},
        {skillsImg:Public, skillName:"public speaker"},
        {skillsImg:Analysis, skillName:"market research"}
    ]
  return (
    <div className='mt-12  max-w-[1200px] mx-auto' id='skills'>
         <h3 className="text-4xl font-bold uppercase p-4 text-center">Skills</h3>
        <div className="grid  grid-cols-1 md:grid-cols-2">
        {
          SKilsArray.map(({skillName, skillsImg},index)=>(
            <div className={`shadow-lg p-3 m-3 rounded-md border-2 border-black ${darkMode ? "bg-slate-800 shadow-lg" : "" }`} key={index}>
             <div className="flex justify-center items-center">
             <img src={skillsImg} alt="" className='size-[50px] md:size-[100px]' />
             </div>
              <p className="text-center font-semibold text-xl uppercase m-2">{skillName}</p>
            </div>
          ))
         }
        </div>
    </div>
  )
}

export default Skills