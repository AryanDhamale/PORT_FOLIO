"use client";
import ConHeading from "../common-con/con-heading";
import { motion } from "framer-motion";

function Services() {
    const cards=[
        {
            title : 'Web development',
            info : 'End-to-end development of fast, scalable web applications using React, Next.js, Node.js, and MongoDB.'
        },
        {
            title : 'UI/UX',
            info : 'Intuitive and visually engaging interfaces using Shadcn.ui, Material.ui and TailwindCSS.'
        },
        {
            title : 'API Integration & Backend Services',
            info : 'Secure and efficient API creation and third-party service integration using REST and Node.js.' 
        },
        {
            title : 'Real-time Features',
            info : 'Implementing real-time data features using WebSockets or tools like Socket.IO, ideal for chat apps or live updates.'
        },
        {
            title : ' CI/CD Setup & Deployment',
            info : 'Automating build and deployment workflows with GitHub Actions, Vercel, or Netlify.'
        }
    ];
    return (
        <motion.section id="services" initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8}}>
        {/* bg-[#191e2482] */}
        <div className="w-full flex flex-col gap-y-10">
            <ConHeading text='SERVICES' />
            <div className="mt-8 w-full min-h-[80vh] grid grid-cols-1 min-[640px]:grid-cols-2 min-[930px]:grid-cols-3 gap-y-4 px-6">
                {/* card-box */}
                {cards.length>0 && cards.map((el,idx)=> <div key={el.title} className='flex items-center justify-center'>
                    {/* actual car  bg-[#1d1e26]*/}
                    <motion.div whileHover={{y:-10}} transition={{type:'spring',duration:0.5}} className="relative  select-none bg-[#12121c] border-1 rounded-2xl ps-5 pe-4 w-full sm:w-4/5 h-[270px] flex flex-col justify-center gap-y-4">

                    {/* heading */}
                    <h2 className="absolute top-5 right-5 py-1 px-3 text-sm tracking-wide text-[#c9d3ee] font-light border border-[#939db8]/20 bg-[#171926] hover:bg-[#222330] rounded-full">{el.title}</h2>

                    {/* info */}
                    <p className="text-13 text-white tracking-wider font-light ">{el.info}</p>

                    </motion.div>

                </div> ) }
            </div>
        </div>
        </motion.section>
    );
}

export default Services;