import React from 'react'
import Local from "../assets/bh.jpg"
import { FaLinkedin , FaTwitter , FaInstagram , FaFacebook } from 'react-icons/fa'
const Hero = () => {
    const socialMediaLink = [
        {socialLink:"https://www.linkedin.com/in/sheriff-adekoya-arpa-34084939/?originalSubdomain=ng" , socailMediaName:"linkedIn" , socialmediaIcon:<FaLinkedin/>},
        {socialLink:"https://x.com/sheriffadekoya?lang=bn" , socailMediaName:"linkedIn" , socialmediaIcon:<FaTwitter/>},
        {socialLink:"https://x.com/sheriffadekoya?lang=bn" , socailMediaName:"linkedIn" , socialmediaIcon:<FaFacebook/>},
        {socialLink:"https://x.com/sheriffadekoya?lang=bn" , socailMediaName:"linkedIn" , socialmediaIcon:<FaInstagram/>},
    ]
  return (
    <div className=' block  md:flex md:justify-between m-0 p-5 hero' id='hero'>
     <div className=" p-5 mt-[10px] md:mt-[200px]">
     <h3 className="text-center md:text-left text-3xl font-normal text-white capitalize ">hello i'm</h3>
       <h2 className="text-[5rem] font-bold capitalize text-white text-center md:text-left">
        sheriff 
        {/* <span className="block">
        adekoya
         <span className="uppercase text-white text-sm font-semibold">(tsa).</span>
        </span> */}
       </h2>
       <p className='uppercase text-white text:text-lg md:text-2xl font-normal md:font-semibold mt-[10px] text-center md:text-left'>Bachelor of Science - BS, Psychology.</p> 
       <p className='uppercase text-white  text:text-lg md:text-2xl font-semibold mt-[10px] text-center md:text-left'>Group Head, Strategy Ogilvy Africa | Nigeria.</p> 
       <div className="flex justify-center md:justify-start mt-[10px]">
        {
            socialMediaLink.map(({socialLink,socailMediaName,socialmediaIcon},index)=>(
                <a href={socialLink}  index={index}className='text-white text-2xl font-semibold m-1  transition-all hover:text-[#704ff2cf] text-center md:text-left'>{socialmediaIcon}</a>
            ))
        }
       </div>
     </div>
      <div className="flex justify-center items-center md:block">
      <img src={Local} alt="" className="w-full" />
      </div>
    </div>
  )
}

export default Hero