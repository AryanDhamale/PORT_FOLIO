"use client"
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Hero() {

  return (

    // from-[#4361ee] via-[#5a189a] to-[#7209b7]
    <motion.section className="relative" id="home" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: 'spring', duration: 0.8 }}>
      {/* w-[95%] drop-shadow-lg rounded-3xl mx-auto  shadow-[0_0_12px_#3A86FF33]*/}
      {/* apple - background - from-[#d4eaf7] to-[#f9f9f9] */}

      {/* for background - color  bg-[linear-gradient(135deg,_#0090f7,_#ba62fc,_#f2416b,_#f55600)] bg-clip-text text-transparent */}
      <div className="absolute top-0 left-0 w-full min-h-[80vh] bg-gradient-to-br from-[#0090f7] via-[#0090f75a] to-[#131313] blur-[400px]"></div>

      <div className="relative z-[10] w-full md:drop-shadow-lg min-h-[80vh] flex justify-center items-center">

        {/* circle-designs */}
        {/* <div className="w-40 h-40 min-[500px]:w-60 min-[500px]:h-60 rounded-full bg-[#acdbed]/30 bg-surface-alpha backdrop-blur-xl absolute bottom-10 right-15"></div> */}

        <div className="z-[10] w-[90%] flex flex-col gap-y-10">
          <h1 className="text-3xl/10 md:text-6xl/20 leading-snug  text-[#ffffff] ">
            <span className="font-semibold">Hi, I&apos;m Tejas</span>. <span className="font-light" >I build real-time, full-stack web apps with solid UI/UX and scalable backend tech. Let&apos;s build something awesome.</span>
          </h1>
          <h2 className="text-[#bababa] text-xl md:text-3xl opacity-80 font-light">Full-stack developer. UI enthusiast. Builder of modern web apps using React, Next.js & Node. Currently geeking out over real-time features & CI/CD workflows.</h2>
          <Link to="contact" smooth={true} duration={600}> <button className="mt-2 px-5 py-3 rounded-full text-white bg-blue-500 active:bg-blue-600 cursor-pointer"> <span className="font-light">Let&apos;s Connect</span> </button> </Link>

        </div>
      </div>
    </motion.section>
  );
}

export default Hero;