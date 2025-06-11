"use client"
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Hero() {

  return (
    // #a4fcac #a4fcac bg-gradient-to-r from- to-slate-100
    // from-[#4361ee] via-[#5a189a] to-[#7209b7]
    <motion.section id="home" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'spring', duration: 0.8 }}>
      {/* w-[95%] drop-shadow-lg rounded-3xl mx-auto  shadow-[0_0_12px_#3A86FF33]*/}
      <div className="relative w-full  md:drop-shadow-lg min-h-[80vh] flex justify-center items-center">

       {/* circle-designs */}
       <div className="w-40 h-40 min-[500px]:w-60 min-[500px]:h-60 rounded-full bg-[#3f37c9]/20 bg-surface-alpha backdrop-blur-xl absolute bottom-10 right-15"></div>

        <div className="z-[10] w-[90%] flex flex-col gap-y-10">
          <h1 className="text-3xl/10 md:text-6xl/20 leading-snug font-medium bg-gradient-to-br from-[#4361ee] to-[#7209b7] bg-clip-text text-transparent">
            Hi, I&apos;m Tejas. I build real-time, full-stack web apps with solid UI/UX and scalable backend tech. Let&apos;s build something awesome.
          </h1>
          <h2 className="text-white text-xl md:text-3xl opacity-80 font-light">Full-stack developer. UI enthusiast. Builder of modern web apps using React, Next.js & Node. Currently geeking out over real-time features & CI/CD workflows.</h2>
          <Link to="contact" smooth={true} duration={600}> <button className="mt-2 px-5 py-3 rounded-full text-white bg-blue-500 active:bg-blue-600 cursor-pointer"> <span className="font-light">Let&apos;s Connect</span> </button> </Link>

        </div>
      </div>
    </motion.section>
  );
}

export default Hero;