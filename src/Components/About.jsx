import React, { use } from 'react'
import Local from "../assets/bh.jpg"
// import 'lenis/dist/lenis.css'
import useLenis from '../Hooks/UseLenis'
const About = () => {
    useLenis()
  return (
    <div className=' p-[10px] md:p-[30px]  max-w-[1200px] mx-auto' id='about'>
           <h3 className="text-2xl font-bold uppercase p-4 text-center">about me</h3>
        <div className=" block md:flex md:justify-between mt-9">
         
         <img src={Local} alt="" className='w-full' />
         
        <div className="">
            <div className=" p-[10px] md:p-[60px] ">
              <div>
              <p className="break-words leading-loose">
              <span className='text-4xl font-bold '> S</span>heriff Adekoya is a seasoned professional with extensive experience in the fields of brand development, marketing, and communications strategy. Over the years, he has honed his expertise in leveraging data-driven insights to craft innovative, customer-centric solutions that drive engagement, enhance brand visibility, and boost overall productivity across an organization’s entire ecosystem. His deep understanding of consumer behavior, market trends, and strategic positioning allows him to develop and implement comprehensive marketing plans that yield measurable results.

                Beyond his technical expertise, Sheriff possesses an analytical and logical mindset that enables him to assess complex challenges, identify opportunities for growth, and develop strategies that align with business objectives. His ability to build and nurture strong relationships with stakeholders, clients, and team members sets him apart as an exceptional relationship manager. He is highly skilled in fostering collaboration, resolving conflicts, and ensuring seamless communication across various levels of an organization.

                With a passion for continuous learning and innovation, Sheriff remains committed to staying ahead of industry trends and adopting emerging technologies to enhance marketing efficiency. His strategic approach, combined with his results-driven mindset, makes him a valuable asset to any organization looking to elevate its brand presence and achieve sustainable success. </p>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About