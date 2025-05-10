"use client";

import ConHeading from "../common-con/con-heading";
import { motion , AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import ImageSlider from "./image-slider";

// react-icons // 
import { GoArrowUpRight } from "react-icons/go";

function ProjectWork() {

  const [currentProject, setcurrentProject] = useState('Dribbble');
  const [slider,setslider]=useState({visible:false,imgNo:0});


  const projectNames = ['Dribbble', 'Real time file sharing', 'Payment croundfuncding', 'Peer to Peer video calling', 'Wondurlust', 'Spotify'];

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
      name : 'Spotify',
      info : 'A fully responsive music streaming web app inspired by Spotify, built with modern web technologies. It features user authentication, real-time music playback, playlist management, and seamless UI transitions. Integrated with third-party APIs for music data.' ,
      link : '/',
      color : 'bg-gradient-to-r from-[#ffd641] to-gray-100',
      image : '/projects/Spotify.png'
    }
  ];


  const filteredProjects = () => {
    let runTimeArr=[]; // idx only // 
    allProjects.forEach((ele,idx)=>{ele.name===currentProject && runTimeArr.push({...ele,idx})})
    //return allProjects.filter((ele, idx) => ele.name == currentProject);
    return runTimeArr;
  }


  return (
    <motion.section id="projects" initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8}}>
    {slider.visible && <ImageSlider control={setslider} imgNo={slider.imgNo}/> } 
    <div className="w-full ">
      <ConHeading text='PROJECT WORK' />
      {/* min-h-80vh */}
      <div className="mt-6 h-[80vh] w-full flex px-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center w-[90%] h-4/5">
            <ul className='w-full px-2 flex flex-col gap-y-8'>
              {
                projectNames.map((ele) => <motion.li initial={{x:0}} whileHover={{x:10}} transition={{type:'spring',duration:0.9}} key={ele} onClick={() => setcurrentProject(ele)} className="cursor-pointer flex items-center gap-x-3"> {currentProject===ele ? <><div className='w-[29px] dark:border-white  border border-black' /> <span className='text-lg font-medium dark:text-white text-black '>{ele}</span> </> 
                : <> <div className='w-[22px] border border-[#4ea88a]' /> <span className='text-lg font-medium text-[#4ea88a]'>{ele}</span> </> }  </motion.li>)
              }
            </ul>
          </div>
        </div>

        <div className="w-7/10 flex items-center justify-center">

          {
            filteredProjects().map((ele) =>
              <AnimatePresence key={ele.name}>
                <motion.div whileHover={{y:-30}} initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-100,opacity:0}} transition={{type:'spring',duration:1}} className={`${ele.color} drop-shadow-lg w-[90%] rounded-xl h-[380px] flex px-4`}>
                  <div className="w-[55%] flex items-center justify-center">
                    <div className="w-[95%] flex flex-col gap-y-4 text-gray-800">
                      <h2 className="font-semibold text-2xl">{ele.name}</h2>
                      <p className='font-light text-lg'>{ele.info}</p>
                      <h3 className="text-lg font-medium">Website</h3>
                      {/* live here */}
                      <Link href={ele.link}>
                      <button className="cursor-pointer mt-4 bg-white w-[150px] flex items-center justify-between px-2 py-2 rounded-full">  <span className="font-medium ps-3 text-[#003631]">Live Here </span> <div className="bg-[#a8fc00] size-10 rounded-full flex items-center justify-center"><GoArrowUpRight className="text-xl"/> </div></button>
                      </Link> 
                    </div>
                  </div>
                  <div className="flex-1 flex items-center">
                    <Image onClick={()=>setslider({visible:true,imgNo:ele.idx})} width={100} height={100} unoptimized className="w-full rounded-md cursor-pointer" src={ele.image} alt="This is an Dribbble image" />
                  </div>
                </motion.div>
              </AnimatePresence>
            )
          }

          {/* <div className="bg-gradient-to-r from-pink-400 to-red-300 drop-shadow-lg w-[90%] rounded-xl h-[380px] flex px-4">
            <div className="w-[55%] flex items-center justify-center">
              <div className="w-[95%] flex flex-col gap-y-4 dark:text-black">
                <h2 className="font-semibold text-2xl">Dribbble</h2>
                <p className='font-light text-lg'>A responsive travel and tour booking app with real-time search, Razorpay payments, and interactive maps — built using Next.js, MongoDB, and Mapbox.
                </p>
                <h3 className="text-lg font-medium">Website</h3>
                <button className="w-[140px] py-3 text-white bg-[#4ea88a] rounded-md">Watch Here</button>
              </div>
            </div>
            <div className="flex-1 flex items-center">
              <Image width={100} height={100} unoptimized className="w-full rounded-md" src={`/projects/dribbble.png`} alt="This is an Dribbble image"/>
            </div>
          </div> */}

          {/* <div className="bg-[#f5fbff] drop-shadow-lg w-[90%] rounded-xl h-[380px] flex px-4">
            <div className="w-[55%] flex items-center justify-center">
              <div className="w-[95%] flex flex-col gap-y-4 dark:text-black">
                <h2 className="font-semibold text-2xl">Dribbble</h2>
                <p className='font-light text-lg'>A responsive travel and tour booking app with real-time search, Razorpay payments, and interactive maps — built using Next.js, MongoDB, and Mapbox.
                </p>
                <h3 className="text-lg font-medium">Website</h3>
                <button className="w-[140px] py-3 text-white bg-[#4ea88a] rounded-md">Watch Here</button>
              </div>
            </div>
            <div className="flex-1 flex items-center">
              <Image width={100} height={100} unoptimized className="w-full" src={`/projects/dribbble.png`} alt="This is an Dribbble image"/>
            </div>
          </div> */}

          {/* <div className="bg-[#f5fbff] drop-shadow-lg w-[90%] rounded-xl h-[380px] flex px-4">
            <div className="w-[55%] flex items-center justify-center">
              <div className="w-[95%] flex flex-col gap-y-4 dark:text-black">
                <h2 className="font-semibold text-2xl">Dribbble</h2>
                <p className='font-light text-lg'>A responsive travel and tour booking app with real-time search, Razorpay payments, and interactive maps — built using Next.js, MongoDB, and Mapbox.
                </p>
                <h3 className="text-lg font-medium">Website</h3>
                <button className="w-[140px] py-3 text-white bg-[#4ea88a] rounded-md">Watch Here</button>
              </div>
            </div>
            <div className="flex-1 flex items-center">
              <Image width={100} height={100} unoptimized className="w-full" src={`/projects/dribbble.png`} alt="This is an Dribbble image"/>
            </div>
          </div> */}

        </div>
      </div>
    </div>
    </motion.section>
  );
}

export default ProjectWork;
