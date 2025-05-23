"use client";
import { useState } from "react";
import ConHeading from "../common-con/con-heading";
//import CTA from "../common-con/cta-button";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function About() {

    const [btnText, setbtnText] = useState({ disable: false, text: 'Downlaod CV' });
    const router = useRouter();
    const downloadCv = async () => {

        setbtnText(() => ({ disable: true, text: 'await...' }));
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setbtnText(() => ({disable:false,text:'Resolved'}));
        router.push('https://drive.google.com/file/d/1BA2uB3htChmBFvwgYfEWgFK9rU7BBAe6/view?usp=sharing');
    }
    return (
        <motion.section id="about" initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8}}>
            <div className="w-full"> 
                <ConHeading text={'ABOUT ME'} />
                <div className="mt-6 min-h-[80vh] w-full grid grid-cols-1 xl:grid-cols-2 gap-y-10 px-4 sm:px-10">
                    <div className="flex justify-center items-center ">
                        <div className="w-full min-[430px]:w-4/5 md:w-1/2 h-[500px] xl:h-4/5 relative">
                            <Image width={570} height={514} src={'/user/user.jpg'} alt="this is an image" className="w-full h-full rounded-3xl object-cover drop-shadow-[0_6px_10px_#449c7f1f]" />
                            <Image width={100} height={100} className="dark:hidden max-[768px]:hidden absolute top-0 -left-30" src={'/background/star.png'} alt="this is an image"/>
                            <Image width={100} height={100} className="dark:hidden max-[768px]:hidden absolute bottom-0 -right-30" src={'/background/star.png'} alt="this is an image"/>
                        </div>
                    </div>


                    <div className="flex justify-center items-center">
                        <div className="w-full md:w-[90%] h-auto xl:h-4/5 text-gray-800 dark:text-white flex flex-col gap-y-3">
                            <h2 className="font-semibold text-2xl sm:text-3xl"> Hi There! I&apos;m <span className="text-[#4ea88a]">Tejas Dhamale </span> </h2>
                            <h2 className="font-medium text-xl sm:text-2xl text-[#4ea88a]">FULL STACK WEB-DEVELOPER</h2>
                            <div className="flex flex-col gap-y-5 font-medium opacity-70">
                                <p>Hi, I’m a passionate full-stack web developer with a deep interest in building scalable, real-time, and interactive web applications. I specialize in modern JavaScript frameworks like <b>React.js</b> and <b>Next.js</b>, and I’m constantly exploring new technologies to deliver fast, user-friendly digital experiences.</p>

                                <p>I’ve developed and deployed projects ranging from travel booking platforms and Spotify clones to peer-to-peer file sharing and video calling apps. My focus is not just on building functional products but on creating thoughtful UI/UX, integrating CI/CD pipelines, and ensuring performance and accessibility.</p>

                                <p>I hold a <b>Bachelor of Technology (B.Tech)</b> degree from <b>Sant Gadge Baba Amravati University specialized in Computer Science and Engineering</b>, and I’m always looking forward to learning, collaborating, and solving real-world problems through code.</p>
                            </div>
                            <div className="mt-2">
                                {/* CTA  */}
                                <button disabled={btnText.disable} onClick={downloadCv} className="cursor-pointer flex items-center justify-between px-2 rounded-full py-2 bg-[#003631] dark:bg-[#0e151b] dark:border-2  w-[190px]">
                                    <span className="font-medium text-lg text-[#a8fc00] ps-3">{btnText.text}</span>
                                    {!btnText.disable ? <div className="size-11 rounded-full bg-[#a8fc00] flex justify-center items-center"><GoArrowUpRight className="text-xl text-[#003732]" /></div> : 
                                    <div className="size-11 flex items-center justify-center">
                                        <div className="w-full h-full border-4 border-[#a8fc00] border-t-transparent rounded-full animate-spin"></div>
                                    </div>}
                                </button>
                                {/* <CTA text='Download CV' /> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.section>
    );
}

export default About;