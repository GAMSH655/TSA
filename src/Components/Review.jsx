import React from 'react'
import Tobi from "../assets/Tobi.jpg"
import Ogun from "../assets/Ogun.jpg"
import Mary from "../assets/Mary.jpg"
import Idris from "../assets/Idris.jpg"
import Charles from "../assets/Charles.jpg"
import Brook from "../assets/Brooke.jpg"
const Comments = () => {
    const TestimonalArray = [
        {
        img:Mary,
        name:"mary akinloye" ,
        role:"Social Media Manager / Content Strategist/ Brand Management",
        year:"November 5, 2024, Mary worked with Sheriff on the same team",
        description:"I had the privilege of working with Mr Sherrif, and his leadership and guidance is truly inspiring. He is a visionary leader who supports his team, encourages growth, and always leads by example. I’m grateful for the opportunity to have learned from him"
        },
        {
        img:Brook,
        name:"Brooke Ukaegbu" ,
        role:"Brand Strategist || Product Manager",
        year:"November 5, 2024, Brooke reported directly to Sheriff",
        description:"Fortunately, I’ve had the opportunity to work with Sheriff, and I’ve seen up close the effort he puts into developing excellent strategies. Even with his thorough approach, he consistently maintains a positive and enthusiastic attitude. Sheriff is always ready to welcome others and lend a helping hand to his colleagues."
        },
        {
        img:Tobi,
        name:" Tobi Beckley" ,
        role:"Strategy & Creative Director. Garnered Experience in Marketing Communications/Brand Building/ Creative Strategy/Corporate Communications",
        year:"October 21, 2023, Tobi worked with Sheriff on the same team",
        description:"Sheriff has a brilliant mind, he has the midas touch when it comes to paving strategic pathways for brands. When Sheriff sets his mind to strategize it's absolutely awesome to experience.."
        },
        {
        img:Ogun,
        name:" Ogundele Isaac" ,
        role:"Analytics | CRM | Strategic Communications | Story-selling | Product Management",
        year:"August 18, 2022, Ogundele reported directly to Sheriff",
        description:"The Sheriff Adekoya (TSA) as he prefers to be addressed is a great, accommodating, and innovative individual with a mindset of growth, progress, and excellence. He has strong strategic, analytical, psychological, and interpersonal skills. He is a leading light in the marketing and communications industry not just in Nigeria but in Sub-saharan west Africa as his great works speak for him. He is an great asset to any team or endeavor he partakes in.."
        },
        {
        img:Charles,
        name:"Charles Emmanuel" ,
        role:"Technology Innovation | Management Consulting | Marketing Communications",
        year:"August 24, 2020, Charles worked with Sheriff on the same team",
        description:"I have worked with Sheriff in many teams, both while I was Project Manager at Insight Publicis and the MD’s TA, and after that. He is a seasoned Brand Strategist who stands out in any team. His unique contribution always wins the clients interests, gets the job done and exceeds expectations.His attitude is remarkable and that is particularly the secret that differentiates him, he always immerses himself in any work and produces the insights that most people don’t.He is not just good at the job but he is also great with people, and that is how I know he will go very far. I recommend him any day!"
        },
        {
        img:Idri,
        name:"Idris Imran" ,
        role:"Former Country Partner in Nigeria — JungleworksFormer",
        year:"March 20, 2018, Idris was Sheriff’s mentor",
        description:"Sheriff was an energetic and highly motivated student who possessed a keen sense of judgment, allowing him to assess situations and people with wisdom and fairness. He had a natural ability to understand the struggles of others and was deeply committed to advocating for justice and equality. With an unwavering passion for liberation, he consistently stood up for those who were oppressed or marginalized, ensuring that their voices were heard and their rights defended. His strong sense of responsibility and determination made him a reliable leader, someone who could be counted on to take initiative and inspire change"
        },
    ]
  return (
    <div id='review' className=' max-w-[1200px] mx-auto'> 
        <h3 className="text-4xl font-bold uppercase p-4 text-center">Reviews</h3>
        <div className="  block md:grid md:grid-cols-2">
            {
                TestimonalArray.map(({img , name , role , year , description} , index)=>{
                    return <div className=" shadow-lg block md:flex rounded-md p-4 m-4" key={index}>
                    <img src={img} alt="" className="size-[100px] rounded-full m-3" />
                      <div className="">
                          <h3 className="font-semibold text-lg capitalize m-1 ">{name}</h3>
                           <p className="m-1 ">{role}</p>
                           <small  className='m-1 '>{year}</small>
                           <p className="m-1 ">{description}</p>
                      </div>
                    </div>
                })
            }
        </div>
    </div>


  )
}

export default Comments