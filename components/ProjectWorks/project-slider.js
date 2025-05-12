
// local // 
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


// react-icons // 
import { GoArrowUpRight } from "react-icons/go";

function ProjectSlider({sliderControl}) {
    const allProjects = [
        {
            name: 'Dribbble',
            info: 'A responsive travel and tour booking app with real-time search, Razorpay payments, and interactive maps — built using Next.js, MongoDB, and Mapbox.',
            link: 'https://snadbox-dribbble.netlify.app/',
            color: 'bg-gradient-to-r from-pink-400 to-red-100',
            image: '/projects/dribbble.png'
        },
        {
            name: 'Real time file sharing',
            info: 'A fast and secure web app for instant file sharing between users in real time. Built with WebSockets, Node.js, and React, it supports drag-and-drop uploads, live transfer status, and a clean, responsive UI.',
            link: 'https://real-time-file-sharing-web-app.vercel.app/',
            color: 'bg-gradient-to-r from-[#a6d176] to-slate-100',
            image: '/projects/fileSharing.png',
        },
        {
            name: 'Payment croundfuncding',
            info: 'A peer-to-peer crowdfunding app where clients can support users by sending payments with personalized messages,Built with Razorpay, Next.js, and MongoDB, it features real-time dashboards, secure login, and user registration for receiving funds',
            link: 'https://sandbox-blackbird.netlify.app/',
            color: 'bg-gradient-to-r from-blue-400 to-slate-100',
            image: '/projects/blackBird.png'
        },
        {
            name: 'Peer to Peer video calling',
            info: 'A real-time video calling platform using WebRTC for direct peer-to-peer connections. Features include one-click call links, high-quality video/audio, and a clean React-based interface',
            link: 'https://vide-call-app-prototype.vercel.app/',
            color: 'bg-gradient-to-r from-[#fdb030] to-red-100',
            image: '/projects/peerTopeer.png'
        },
        {
            name: 'Wondurlust',
            info: 'A full-stack vacation rental platform where users can list, search, and book stays. Inspired by Airbnb, it features real-time availability, secure payments, and a responsive UI built with Next.js, MongoDB, and Tailwind CSS.',
            link: 'https://my-wonderlust.onrender.com/listings',
            color: 'bg-gradient-to-r from-[#55bfb4] to-gray-100',
            image: '/projects/wonderlust.png'
        },
        {
            name: 'Spotify',
            info: 'A fully responsive music streaming web app inspired by Spotify, built with modern web technologies. It features user authentication, real-time music playback, playlist management, and seamless UI transitions. Integrated with third-party APIs for music data.',
            link: '/',
            color: 'bg-gradient-to-r from-[#ffd641] to-gray-100',
            image: '/projects/Spotify.png'
        }
    ];

    const [currentIDX, setcurrIDX] = useState(0);

    const leftSlide=()=>{
        let idx = (currentIDX-1)>=0 ? currentIDX-1 : allProjects.length-1;
        setcurrIDX(idx)
    }

    const rightSlide=()=>{
        let idx= (currentIDX+1) % allProjects.length; 
        setcurrIDX(idx)
    }

    return (
        <div className="mt-6 max-[929px]:flex flex-col gap-y-5 hidden">

            {/* cards */}
            <div>
                <AnimatePresence key={currentIDX}>
                <motion.div id={currentIDX} initial={{x:20,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-20,opacity:0}} transition={{duration:1,type:'spring'}} className={`${allProjects[currentIDX].color} drop-shadow-lg mx-auto w-[90%] rounded-xl max-[630px]:py-5 h-[580px] min-[630px]:h-[380px] max-[630px]:flex-col-reverse gap-y-5 flex px-4`}>
                    <div className="w-full min-[630px]:w-[55%] flex items-center justify-center">
                        <div className="w-full flex flex-col gap-y-4 text-gray-800">
                            <h2 className="font-semibold text-2xl">{allProjects[currentIDX].name}</h2>
                            <p className='font-base text-md'>{allProjects[currentIDX].info}</p>
                            <h3 className="text-lg font-medium">Website</h3>
                            {/* live here */}
                            <Link href={allProjects[currentIDX].link}>
                                <button className="cursor-pointer mt-4 bg-white w-[150px] flex items-center justify-between px-2 py-2 rounded-full">  <span className="font-medium ps-3 text-[#003631]">Live Here </span> <div className="bg-[#a8fc00] size-10 rounded-full flex items-center justify-center"><GoArrowUpRight className="text-xl" /> </div></button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center">
                        <Image onClick={()=>sliderControl({visible:true,imgNo:currentIDX})} width={1895} height={910} className="w-full rounded-md cursor-pointer" src={allProjects[currentIDX].image} alt="This is an image" />
                    </div>
                </motion.div>
                </AnimatePresence>
            </div>

            {/* buttons */}
            <div className="flex items-center justify-center gap-x-5">
                <div onClick={leftSlide} className="size-10 bg-green-200 dark:bg-transparent dark:border-2 dark:border-[#4ea88a] dark:text-[#4ea88a] rounded-full flex items-center justify-center "> <FaAngleLeft className="text-lg" />  </div>
                
                <div onClick={rightSlide} className="size-10 bg-green-200 dark:bg-transparent dark:border-2 dark:border-[#4ea88a] dark:text-[#4ea88a] rounded-full flex items-center justify-center "> <FaAngleRight className="text-lg" />  </div>
            </div>
        </div>
    );
}

export default ProjectSlider;