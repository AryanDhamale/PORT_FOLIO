"use client";
import Link from "next/link";
import ConHeading from "../common-con/con-heading";
import SocialLinks from "../common-con/social-links";
import { motion } from "framer-motion";

// react-icon // 
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";


function Contact() {
    
    // Whether you have a question, want to collaborate, or just want to say hi — I'd love to hear from you!
    //I'm always open to meaningful conversations and creative ideas. Feel free to reach out anytime!
    return (
        <motion.section id="contact" initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8}}>
        <div className="w-full flex flex-col items-center justify-center gap-y-10 px-4">
            <ConHeading text='CONTACT ME' />
            <div className="mt-6 w-full ">
                <h1 className="mb-10 xl:mb-0 text-center font-medium text-xl text-gray-700">Whether you have a question, want to collaborate, or just want to say hi — I&apos;d love to hear from you!</h1>
                <div className="w-full min-h-[80vh] grid grid-cols-1 xl:grid-cols-2 gap-y-10">
                    <div className="flex items-center justify-center">
                        {/* bg-[#ffb800] */}
                        <div className="w-full sm:w-4/5 md:w-[65%] flex flex-col gap-y-6 border-2  border-slate-300 dark:border-slate-800 rounded-3xl px-6 py-8">
                            <h2 className='font-medium text-sm'> <span className=" text-black dark:text-white">Say, Hello</span>  <span className="text-red-500 font-medium">[ the form it&apos;s not working yet ]</span> </h2>
                            <div>
                            <input className='border px-5 py-3 rounded-md outline-0 bg-white dark:bg-transparent w-full' type="text" placeholder="Enter your name" />
                            </div>

                            <div>
                            <input className='border px-5 py-3 rounded-md outline-0 bg-white dark:bg-transparent w-full' type="email" placeholder="Enter your email" />
                            </div>

                            <div>
                            <textarea className="border px-5 py-3 outline-0 w-full bg-white h-40 rounded-md dark:bg-transparent" placeholder="write your message"></textarea>
                            </div>

                            <div>
                                <button className="cursor-pointer bg-[#202020] text-white w-[130px] flex items-center justify-between py-2 px-2 rounded-full"> <span className="ps-3 font-medium">Send</span>  <div className="size-10 bg-white rounded-full flex items-center justify-center"> <GoArrowUpRight className="text-xl text-black"/> </div> </button>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-center">
                        <div className="w-full sm:w-4/5 md:w-[70%] xl:w-[95%] flex flex-col gap-y-6">
                            <h1 className="text-4xl xl:text-6xl font-medium">I&apos;d love to hear from you</h1>
                            <h2 className="mb-4 font-light text-xl opacity-60">I&apos;m always open to meaningful conversations and creative ideas. Feel free to reach out anytime!</h2>
                            {/* contact - info */}
                            <div className="grid grid-cols-1 min-[740px]:grid-cols-2 gap-y-4 min-[740px]:gap-x-8 mb-4">

                            {/* bg-[#a8fc00] */}
                            <div className='flex items-center gap-x-3'> <div className="bg-slate-300 size-12 rounded-full flex items-center justify-center"><MdEmail className="text-2xl text-white" /></div> <span className="text-[#003631] dark:text-white font-medium"> Email <br /> <Link href={'mailto:'}>aryandhamale072gmail.com</Link> </span> </div>
                            
                            <div className='flex items-center gap-x-3'> <div className="bg-slate-300 size-12 rounded-full flex items-center justify-center"><FaPhoneAlt className="text-2xl text-white" /></div> <span className="text-[#003631] dark:text-white font-medium"> Phone <br /> +91 8446162375</span> </div>

                            </div>

                           <div>
                           <h2 className="mb-6 font-light text-xl opacity-60">You can find me Here !</h2>
                           <SocialLinks/>
                           </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </motion.section>
    );
}

export default Contact;


// {/* <div className="w-3/5 mx-auto flex flex-col gap-y-6">
//     <h2 className="text-center text-xl">Whether you have a question, want to collaborate, or just want to say hi — I'd love to hear from you!</h2>
//     <h2 className="text-center text-lg opacity-50">I'm always open to meaningful conversations and creative ideas. Feel free to reach out anytime!</h2>
//     {/* social media links  */}
//     <div className="mt-3 grid grid-cols-2">
//         <div className="flex justify-center items-center gap-x-3">
//             <div className="size-12 border border-slate-200 rounded-full flex justify-center items-center hover:border-[#4ea88a]"> <MdEmail className="text-2xl text-slate-400" /> </div>
//             <span className="text-base opacity-50 hover:opacity-100 hover:text-[#4ea88a]"> <Link href={'mailto:'}>aryandhamale07@gmail.com</Link> </span>
//         </div>

//         <div className="flex justify-center items-center gap-x-3">
//             <div className="size-12 border border-slate-200 rounded-full flex justify-center items-center hover:border-[#4ea88a]"> <FaPhoneAlt className="text-2xl text-slate-400" /> </div>
//             <span className="text-base opacity-50 hover:opacity-100 hover:text-[#4ea88a]">+91 8446162375</span>
//         </div>
//     </div>
//     <div className="mt-5"><SocialLinks /></div>
// </div> */}