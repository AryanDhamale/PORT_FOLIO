"use client"
// import { useState } from "react";
// import { useRouter } from "next/navigation";
import ConHeading from "../common-con/con-heading";
//import CTA from "../common-con/cta-button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function About() {

    // const [btnText, setbtnText] = useState({ disable: false, text: 'Downlaod CV' });
    // const router = useRouter();
    //router.push('https://drive.google.com/file/d/1BA2uB3htChmBFvwgYfEWgFK9rU7BBAe6/view?usp=sharing');
    // cv url // 
    const url='https://drive.google.com/file/d/1BA2uB3htChmBFvwgYfEWgFK9rU7BBAe6/view?usp=sharing';
    
    return (
        <motion.section id="about" initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8}}>
            <div className="w-full"> 
                <ConHeading text={'ABOUT ME'} />
                <div className="mt-6 min-h-[80vh] w-full grid grid-cols-1 xl:grid-cols-2 gap-y-10 px-4 sm:px-10">
                    <div className="flex justify-center items-center ">
                        <div className="w-full min-[430px]:w-4/5 md:w-1/2 h-[500px] xl:h-4/5 relative">
                            <Image width={570} height={514} src={'/user/user.jpg'} alt="this is an image" className="w-full h-full rounded-3xl object-cover" />
                        </div>
                    </div>


                    <div className="flex justify-center items-center">
                        <div className="w-full md:w-[90%] h-auto xl:h-4/5 text-white flex flex-col gap-y-3">
                            <h2 className="font-semibold text-2xl sm:text-3xl"> Hi There! I&apos;m <span className="text-[var(--brand-color)]">Tejas Dhamale </span> </h2>
                            <h2 className="font-medium text-xl sm:text-2xl text-[var(--brand-color)]">FULL STACK WEB-DEVELOPER</h2>
                            <div className="flex flex-col gap-y-5 font-medium opacity-70">
                                <p>Hi, I’m a passionate full-stack web developer with a deep interest in building scalable, real-time, and interactive web applications. I specialize in modern JavaScript frameworks like <b>React.js</b> and <b>Next.js</b>, and I’m constantly exploring new technologies to deliver fast, user-friendly digital experiences.</p>

                                <p>I’ve developed and deployed projects ranging from travel booking platforms and Spotify clones to peer-to-peer file sharing and video calling apps. My focus is not just on building functional products but on creating thoughtful UI/UX, integrating CI/CD pipelines, and ensuring performance and accessibility.</p>

                                <p>I hold a <b>Bachelor of Technology (B.Tech)</b> degree from <b>Sant Gadge Baba Amravati University specialized in Computer Science and Engineering</b>, and I’m always looking forward to learning, collaborating, and solving real-world problems through code.</p>
                            </div>
                            <div className="mt-2">
                                {/* CTA  */}
                                <Link href={url}>
                                <button className="mt-2 px-5 py-3 rounded-full bg-blue-500"> <span>Download CV</span> </button>
                                </Link>
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