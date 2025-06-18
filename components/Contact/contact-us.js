"use client";
import Link from "next/link";
import ConHeading from "../common-con/con-heading";
import { motion } from "framer-motion";

// react-icon // 
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { CiMail } from "react-icons/ci";


function Contact() {
    return (
        <motion.section id="contact" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="w-full flex flex-col items-center justify-center gap-y-10 md:px-4">
                <ConHeading text='CONTACT ME' />
                {/* from-[#d4eaf7] to-[#f9f9f9] */}
                {/* from-[#605dff] via-[#343773] to-[#34377379] */}
                <div className="max-md:px-2 max-sm:py-20 relative bg-gradient-to-br from-[#605dff] via-[#343773] to-[#34377379] mt-6 w-full min-h-[70vh] flex flex-col justify-center items-center gap-y-3 text-white">

                    {/* shapes */}
                    <div className="w-35 h-35 md:w-60 md:h-60 rounded-2xl md:rounded-4xl bg-white/10 bg-surface-alpha backdrop-blur-xl absolute top-10 left-8 md:left-14"></div>

                    <div className="w-20 h-20 md:w-45 md:h-45 rounded-2xl md:unded-4xl bg-white/10 bg-surface-alpha backdrop-blur-xl absolute bottom-10 right-8 md:right-14"></div>


                    {/* container */}
                    <h1 className="z-10 text-center font-medium text-2xl opacity-80">Whether you have a question, want to collaborate, or just want to say hi — I&apos;d love to hear from you!</h1>

                    <div className="z-10 w-full h-[35vh] flex flex-col items-center justify-center gap-y-3">
                        <h1 className="text-center text-lg font-light opacity-90">I&apos;m always open to meaningful conversations and creative ideas. Feel free to reach out anytime !</h1>
                        <h2 className="text-center text-lg font-light">The best way to get in touch with me is to email - </h2>
                        <Link href={'mailto:'}>
                            <div className="select-none cursor-pointer drop-shadow-lg bg-surface-alpha backdrop-blur-xl bg-slate-900 py-3 px-5 rounded-full flex items-center gap-x-3"> <CiMail className="text-xl" /> <span>aryandhamale07@gmail.com</span> </div>
                        </Link>

                    </div>

                    <div className="w-3/5 z-[10] flex items-center justify-center flex-wrap gap-y-5 gap-x-10">

                        <Link href={'https://www.linkedin.com/in/tejasdhamale/'}>
                         <div className="select-none w-[150px] cursor-pointer drop-shadow-lg bg-surface-alpha backdrop-blur-xl bg-slate-900 py-3 rounded-full flex items-center justify-center gap-x-3 text-sm"> <FaLinkedin className="text-lg" /> <span>Linkedin</span> </div>
                        </Link>
                       
                        <Link href={'https://github.com/AryanDhamale'}>
                        <div className="select-none w-[150px] cursor-pointer drop-shadow-lg bg-surface-alpha backdrop-blur-xl bg-slate-900 py-3 px-4 rounded-full flex items-center justify-center gap-x-3 text-sm"> <ImGithub className="text-lg" /> <span>GitHub</span> </div>
                        </Link>
                        
                        <Link href={'https://leetcode.com/u/Aryan_4386/'}><div className="select-none w-[150px] cursor-pointer drop-shadow-lg bg-surface-alpha backdrop-blur-xl bg-slate-900 py-3 px-4 rounded-full flex items-center justify-center gap-x-3 text-sm"> <SiLeetcode className="text-lg" /> <span>Leetcode</span> </div></Link>
                        

                    </div>

                </div>
            </div>
        </motion.section>
    );
}

export default Contact;