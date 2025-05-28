"use client";
import Link from "next/link";
import ConHeading from "../common-con/con-heading";
import { motion } from "framer-motion";

// react-icon // 
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";


function Contact() {

    // Whether you have a question, want to collaborate, or just want to say hi — I'd love to hear from you!
    //I'm always open to meaningful conversations and creative ideas. Feel free to reach out anytime!
    return (
        <motion.section id="contact" initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="w-full flex flex-col items-center justify-center gap-y-10 px-4">
                <ConHeading text='CONTACT ME' />
                <div className="mt-6 w-full min-h-[70vh] flex flex-col gap-y-3">
                    <h1 className="text-center font-light text-2xl opacity-80">Whether you have a question, want to collaborate, or just want to say hi — I&apos;d love to hear from you!</h1>
                    
                    <div className="w-full flex-1 flex items-center justify-center">
                        <div className="w-[95%] md:w-4/5 flex flex-col gap-y-3 items-center justify-center">
                            <h1 className="text-lg font-light opacity-90">I&apos;m always open to meaningful conversations and creative ideas. Feel free to reach out anytime!</h1>
                            <h2 className="text-lg font-light">The best way to get in touch with me is to email <Link href={'mailto:'}> <span className="text-[var(--brand-color)] font-medium">aryandhamale07[at]gmail.com</span> </Link></h2>
                            {/* cards */}
                            
                            <div className="mt-4 flex items-center justify-center flex-wrap gap-x-5 gap-y-5">
                                <Link href={'mailto:'}>
                                <div className="bg-[var(--brand-color)]/30 backdrop-blur-md size-[60px] flex items-center justify-center rounded-xl"> <MdEmail className="text-3xl text-[var(--brand-color)]"/> </div>
                                </Link>

                                <Link href={'https://www.linkedin.com/in/tejasdhamale/'}>
                                <div className="bg-[var(--brand-color)]/30 backdrop-blur-md size-[60px] flex items-center justify-center rounded-xl"> <FaLinkedin className="text-3xl text-[var(--brand-color)]"/> </div>
                                </Link>
                                
                                <Link href={'https://github.com/AryanDhamale'}>
                                <div className="bg-[var(--brand-color)]/30 backdrop-blur-md size-[60px] flex items-center justify-center rounded-xl"> <ImGithub className="text-3xl text-[var(--brand-color)]"/> </div>
                                </Link>                           
                                
                                <Link href={'https://x.com/aryandhamale07'}>
                                <div className="bg-[var(--brand-color)]/30 backdrop-blur-md size-[60px] flex items-center justify-center rounded-xl"> <FaXTwitter className="text-3xl text-[var(--brand-color)]"/> </div>
                                </Link>
                                
                                <Link href={'/'}>
                                <div className="bg-[var(--brand-color)]/30 backdrop-blur-md size-[60px] flex items-center justify-center rounded-xl"> <FaDiscord className="text-3xl text-[var(--brand-color)]"/> </div>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Contact;