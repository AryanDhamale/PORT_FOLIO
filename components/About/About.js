"use client"

import ConHeading from "../common-con/con-heading";
import { motion } from "framer-motion";
import ImageLoader from "../common-con/image-loader";

function About() {

    const url='https://drive.google.com/file/d/1BA2uB3htChmBFvwgYfEWgFK9rU7BBAe6/view?usp=sharing';
    
    return (
        <motion.section id="about" initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8}}>
            <div className="w-full"> 
                <ConHeading text={'ABOUT ME'} />
                <div className="mt-15 xl:mt-6 min-h-[80vh] w-full grid grid-cols-1 xl:grid-cols-2 gap-y-10 px-4 sm:px-10">
                    <div className="flex justify-center items-center ">
                        <div className="relative border-1 bg-zinc-700/50 border-[#f2f2f226] rounded-3xl p-2 w-full min-[430px]:w-4/5 md:w-1/2 h-[500px] xl:h-4/5">
                            {/* for line */}
                            <div className="absolute -top-[0.9px] rounded-full left-1/2 -transform -translate-x-1/2 bg-white/90 h-[0.6px] w-1/2 "></div>
                            <ImageLoader loadingStyle={'w-full h-full'} url='/user/tejas.jpg' style={'w-full h-full rounded-2xl border-1 border-[#f2f2f226] select-none object-cover'} dimension={{width:1813,height:3223}}/>
                        </div>
                    </div>


                    <div className="flex justify-center items-center">
                        <div className="w-full md:w-[90%] h-auto xl:h-4/5 text-white flex flex-col gap-y-3">
                            <h2 className="font-semibold text-2xl sm:text-3xl"> Hi There! I&apos;m <span className="text-[var(--brand-color)]">Tejas Dhamale </span> </h2>
                            <h2 className="font-medium text-xl sm:text-2xl text-[var(--brand-color)]">FULL STACK WEB-DEVELOPER</h2>
                            <div className="flex flex-col gap-y-5 font-light opacity-90 tracking-wide">
                                <p>Hi, I&apos;m a passionate full-stack web developer with a deep interest in building scalable, real-time, and interactive web applications. I specialize in modern JavaScript frameworks like <b className="text-blue-400 opacity-100">React.js</b> and <b className="text-blue-400 opacity-100">Next.js</b>, and I&apos;m constantly exploring new technologies to deliver fast, user-friendly digital experiences.</p>

                                <p>I&apos;ve developed and deployed projects ranging from travel booking platforms and Spotify clones to peer-to-peer file sharing and video calling apps. My focus is not just on building functional products but on creating thoughtful UI/UX, integrating CI/CD pipelines, and ensuring performance and accessibility.</p>

                                <p>I hold a <b className="text-blue-400 opacity-100">Bachelor of Technology (B.Tech)</b> degree from <b className="text-blue-400 opacity-100">Sant Gadge Baba Amravati University specialized in Computer Science and Engineering</b>, and I&apos;m always looking forward to learning, collaborating, and solving real-world problems through code.</p>
                            </div>

                            <div>If you want to any query for me you can directly mail to will, we hope probabiliy it will be solved</div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </motion.section>
    );
}

export default About;