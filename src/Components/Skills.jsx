import React from 'react'
import Communication from "../assets/communication.png"
import Analytics from "../assets/analytics.png"
import Analysis from "../assets/analysis.png"
import Group from "../assets/Group1.png"
import Market from "../assets/Market.png"
import Planning from  "../assets/Planning.png"
import Brand from "../assets/Branding.png"
import Research from "../assets/research.png"
const Skills = () => {
    const SKilsArray=[
        {skillsImg:Market, skillName:"business strategy"},
        {skillsImg:Communication, skillName:"corporate communications"},
        {skillsImg:Planning, skillName:"strategic planning"},
        {skillsImg:Research, skillName:"research"},
        {skillsImg:Analytics, skillName:"business analysis"},
        {skillsImg:Brand, skillName:"Brand strategy"},
    ]
  return (
    <div className='mt-12'>
         <h3 className="text-4xl font-bold uppercase p-4 text-center">Skills</h3>
        <div className="grid  grid-cols-1 md:grid-cols-2">
        {
          SKilsArray.map(({skillName, skillsImg},index)=>(
            <div className="shadow-md p-3 m-3 rounded-md border-2 border-black  " key={index}>
             <div className="flex justify-center items-center">
             <img src={skillsImg} alt="" className='size-[100px]' />
             </div>
              <p className="text-center font-semibold text-xl uppercase">{skillName}</p>
            </div>
          ))
         }
        </div>
    </div>
  )
}

export default Skills