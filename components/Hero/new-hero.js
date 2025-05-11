"use client"
import CTA from "../common-con/cta-button";
import { Link } from "react-scroll"; 
import { motion } from "framer-motion";

function Hero()
{
  return (
    // #a4fcac #a4fcac bg-gradient-to-r from- to-slate-100
    <motion.section id="home" initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{type:'spring',duration:0.8}}>
      {/* w-[95%] drop-shadow-lg rounded-3xl mx-auto */}
    <div className="w-full min-h-[80vh]  bg-[#a4fcac] flex justify-center items-center"> 
        <div className="w-[90%] text-[#003732] flex flex-col gap-y-10">
          <h1 className="text-4xl/10 md:text-6xl/20 font-medium">Hey, I&apos;m Tejas Dhamale, Turning coffee into code | Building the modern web</h1>
          <h2 className="text-2xl md:text-3xl opacity-50 font-light">Full-stack developer. UI enthusiast. Builder of modern web apps using React, Next.js & Node. Currently geeking out over real-time features & CI/CD workflows.</h2>
          <Link to="contact" smooth={true} duration={600}> <CTA text='Contact me'/> </Link>
          
        </div>
    </div>
    </motion.section>
  );   
}

export default Hero;