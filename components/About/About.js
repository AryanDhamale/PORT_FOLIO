"use client";
import { useState } from "react";
import ConHeading from "../common-con/con-heading";
//import CTA from "../common-con/cta-button";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";

function About() {

    const [btnText, setbtnText] = useState({ disable: false, text: 'Downlaod CV' });
    const router = useRouter();
    const downloadCv = async () => {

        setbtnText(() => ({ disable: true, text: 'await...' }));
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setbtnText(() => ({disable:true,text:'Resolved'}));
        router.push('https://drive.google.com/file/d/1BA2uB3htChmBFvwgYfEWgFK9rU7BBAe6/view?usp=sharing');
    }
    return (
        <section id="about">
            <div className="w-full">
                <ConHeading text={'ABOUT ME'} />
                <div className="mt-6 min-h-[80vh] w-full grid grid-cols-2 px-10">
                    <div className="flex justify-center items-center ">
                        <div className="w-1/2 h-4/5 ">
                            <Image unoptimized width={100} height={100} src={'https://devis-react.vercel.app/images/section/about.jpg'} alt="this is an image" className="w-full h-full rounded-3xl object-cover drop-shadow-[0_6px_10px_#449c7f1f]" />
                        </div>
                    </div>


                    <div className="flex justify-center items-center">
                        <div className="w-[90%] h-4/5 text-gray-800 dark:text-white flex flex-col gap-y-3">
                            <h2 className="font-semibold text-3xl"> Hi There! I&apos;m <span className="text-[#4ea88a]">Tejas Dhamale </span> </h2>
                            <h2 className="font-medium text-2xl text-[#4ea88a]">FULL STACK WEB-DEVELOPER</h2>
                            <div className="flex flex-col gap-y-5 font-medium opacity-70">
                                <p>Hi, I’m a passionate full-stack web developer with a deep interest in building scalable, real-time, and interactive web applications. I specialize in modern JavaScript frameworks like <b>React.js</b> and <b>Next.js</b>, and I’m constantly exploring new technologies to deliver fast, user-friendly digital experiences.</p>
                                <p>I’ve developed and deployed projects ranging from travel booking platforms and Spotify clones to peer-to-peer file sharing and video calling apps. My focus is not just on building functional products but on creating thoughtful UI/UX, integrating CI/CD pipelines, and ensuring performance and accessibility.</p>
                                <p>I hold a <b>Bachelor of Technology (B.Tech)</b> degree from <b>Sant Gadge Baba Amravati University specialized in Computer Science and Engineering</b>, and I’m always looking forward to learning, collaborating, and solving real-world problems through code.</p>
                            </div>
                            <div className="mt-2">
                                {/* CTA  */}
                                <button disabled={btnText.disable} onClick={downloadCv} className="cursor-pointer flex items-center justify-between px-2 rounded-full py-2 bg-[#003631] w-[200px]">
                                    <span className="font-medium text-lg text-[#a8fc00] ps-5">{btnText.text}</span>
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
        </section>
    );
}

export default About;