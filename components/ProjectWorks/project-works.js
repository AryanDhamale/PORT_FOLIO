"use client";

import ConHeading from "../common-con/con-heading";
import { motion , AnimatePresence } from "framer-motion";
// import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import ImageSlider from "./image-slider";
import ProjectSlider from "./project-slider";
import { useEffect } from "react";
import ImageLoader from "../common-con/image-loader";


function ProjectWork() {

  const [currentProject, setcurrentProject] = useState('Dribbble');
  const [slider,setslider]=useState({visible:false,imgNo:0});

  useEffect(()=>{
    if(slider.visible) {
      document.body.style.overflow='hidden';
    }else {
      document.body.style.overflow='auto';
    }

    return ()=>{document.body.style.overflow='auto'}; // clean up function // 

  })


  const projectNames = ['Dribbble', 'Real time file sharing', 'Payment croundfuncding', 'Peer to Peer video calling', 'Wondurlust', 'Spotify'];

  const allProjects = [
    {
      name: 'Dribbble',
      info: {heading:'A sponsored platform for booking tours with secure payments and admin/user dashboards.',keypoints:[
            {title:'Solves',shortIntro:'Users can search/book 10+ dynamic tours, make secure payments, and track bookings in real-time.'},
            {title:'Features',shortIntro:'Google Maps, Razorpay integration, role-based dashboard, wishlist/review system.'},
            {title:'Learned',shortIntro:'Building a scalable full-stack system with secure auth, payments, and UI state management'}
            ],
            techStack : ['Next.js', 'Tailwind CSS', 'MongoDB', 'NextAuth', 'Razorpay', 'Google Maps', 'Shadcn UI', 'Material UI']
          },
      link: 'https://snadbox-dribbble.netlify.app/',
      color: 'bg-gradient-to-r from-pink-400 to-red-100',
      image: '/projects/dribbble.png'
    },
    {
      name: 'Real time file sharing',
      info: {heading:'A fast and secure file sharing tool with OTP validation and real-time upload/download.',keypoints:[
            {title:'Solves',shortIntro:'Allows users to share files instantly across devices with validation.'},
            {title:'Features',shortIntro:'Real-time Firebase sync, Multer optimization, OTP-based security.'},
            {title:'Learned',shortIntro:'Managing file streams, Firebase integration, and improving UX performance.'},
            ],
            techStack : ['React', 'Firebase', 'Express.js', 'Multer', 'Bootstrap']
          },
      link: 'https://real-time-file-sharing-web-app.vercel.app/',
      color: 'bg-gradient-to-r from-[#a6d176] to-slate-100',
      image: '/projects/fileSharing.png',
    },
    {
      name: 'Payment croundfuncding',
      info: {heading:'A donation-based crowdfunding app for creators with real-time payment tracking.',keypoints:[
            {title:'Solves',shortIntro:'Enables creators to receive secure payments and track them via dashboards.'},
            {title:'Features',shortIntro:'Multi-provider login (Google, GitHub, LinkedIn), live Razorpay transactions.'},
            {title:'Learned',shortIntro:'Implementing secure payments + multi-auth with real-time user state updates.'}
            ],
          techStack : ['Next.js', 'MongoDB', 'Razorpay', 'NextAuth']
          },
      link: 'https://sandbox-blackbird.netlify.app/',
      color: 'bg-gradient-to-r from-blue-400 to-slate-100',
      image: '/projects/blackBird.png'
    },
    {
      name: 'Peer to Peer video calling',
      info: {heading:'A prototype for real-time video calls using peer-to-peer connections.',keypoints:[
            {title:'Solves',shortIntro:'Enables live video chat across devices using low-latency P2P architecture.'},
            {title:'Features',shortIntro:'WebRTC-based call setup, Socket.io signaling, minimal UI.'},
            {title:'Learned',shortIntro:'Building peer-to-peer media transmission and handling signaling logic.'}          
            ],
            techStack : ['React', 'WebRTC', 'Socket.io', 'Express.js'],
          },
      link: 'https://vide-call-app-prototype.vercel.app/',
      color: 'bg-gradient-to-r from-[#fdb030] to-red-100',
      image: '/projects/peerTopeer.png'
    },
    {
      name: 'Wondurlust',
      info: {heading:'A full-featured Airbnb-style platform with location search and user authentication.',keypoints:[
            {title:'Solves',shortIntro:'Lets users browse, list, and book properties with location filtering.'},
            {title:'Features',shortIntro:'Mapbox location search, reviews/comments, user auth with Passport.js.'},
            {title:'Learned',shortIntro:'Building REST APIs, session auth, and interactive map-based listings.'}
            ],
            techStack : ['MongoDB', 'Express', 'EJS', 'Node.js', 'Passport.js', 'Mapbox']
        },
      link: 'https://my-wonderlust.onrender.com/listings',
      color: 'bg-gradient-to-r from-[#55bfb4] to-gray-100',
      image: '/projects/wonderlust.png'
    },
    {
      name : 'Spotify',
      info : {heading:'A fully functional Spotify-like music streaming platform with subscription-based access and real-time UI.',keypoints:[
            {title:'Solves',shortIntro:' Allows users to browse, play, and manage music with premium access via Stripe payments.'},
            {title:'Features',shortIntro:'Auth with Supabase, song upload via drag & drop, playlist handling, Stripe billing, and responsive player UI.'},
            {title:'Learned',shortIntro:'Handling audio streaming logic, real-time UI sync with Zustand, subscription flows with Stripe + Supabase RBAC.'}
            ],
            techStack : ['Next.js', 'Tailwind CSS', 'Supabase', 'Stripe', 'PostgreSQL', 'Zustand']
        },
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
    <div className="w-full">
      <ConHeading text='PROJECT WORK' />
      {/* min-h-80vh */}
      
      {/* for responsive ness */}
      <ProjectSlider sliderControl={setslider}/>  
     
      <div className="mt-6 min-h-[80vh] w-full hidden min-[930px]:flex px-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center w-[90%] h-4/5">
            <ul className='w-full px-2 flex flex-col gap-y-8'>
              {
                projectNames.map((ele) => <motion.li initial={{x:0}} whileHover={{x:10}} transition={{type:'spring',duration:0.9}} key={ele} onClick={() => setcurrentProject(ele)} className="cursor-pointer flex items-center gap-x-3"> {currentProject===ele ? <><div className='w-[29px] border-white opacity-90  border' /> <span className='text-lg font-light text-white opacity-90  '>{ele}</span> </> 
                : <> <div className='w-[22px] border border-[var(--brand-color)]' /> <span className='text-lg font-medium text-[var(--brand-color)]'>{ele}</span> </> }  </motion.li>)
              }
            </ul>
          </div>
        </div>

        <div className="w-7/10 flex items-center justify-center">

          {
            filteredProjects().map((ele) =>
              <AnimatePresence key={ele.name}>
                {/* parent */}
                <motion.div whileHover={{y:-20}} initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-30,opacity:0}} transition={{duration:0.2}} className={`bg-[var(--brand-color)]/25 backdrop-blur-md drop-shadow-lg w-[90%] rounded-xl h-[390px] flex px-4`}>
                  {/* child-one */}
                  <div className="w-[55%] flex items-center justify-center">
                    <div className="w-full flex flex-col gap-y-4">
                      {/* heading section */}
                        <h2 className="font-semibold text-2xl text-blue-500">{ele.name}</h2>

                      {/* information section */}
                      <div className="w-full h-[240px]">


                        <div className="h-full px-2">
                          <ul className="h-full text-sm text-white opacity-90 flex flex-col justify-center gap-y-2">
                            <li className="font-medium">{ele.info.heading}</li>
                            {
                              ele.info.keypoints.map((el,idx)=>
                                {
                                  return <li key={idx}> <span className="font-medium">{el.title}: </span> <span>{el.shortIntro}</span> </li>
                                }
                              )
                            }
                            {/* .. tech Stack .. */}
                            <li >
                            {
                              ele.info.techStack.map((name,idx)=><button key={idx} className="rounded-full text-blue-400 bg-white font-medium text-xs mx-1 my-1 px-3 py-1">{name}</button>)
                            }
                            </li>

                          </ul>
                        </div>

                      </div>
                      
                      {/* live here */}
                      <Link href={ele.link}>
                      <button className="px-6 py-2 bg-blue-500 text-white font-light rounded-full cursor-pointer">Live here</button>
                      </Link> 
                    </div>
                  </div>
                  {/* child-two */}
                  <div className="flex-1 flex items-center">
                    <span className="w-full" onClick={()=>setslider({visible:true,imgNo:ele.idx})}><ImageLoader url={ele.image} loadingStyle={' w-full h-[230px] '} dimension={{width:1895,height:910}} style={'w-full rounded-md cursor-pointer'} /></span>
                    {/* <Image onClick={()=>setslider({visible:true,imgNo:ele.idx})} width={1895} height={910} className="w-full rounded-md cursor-pointer" src={ele.image} alt="This is an Dribbble image" /> */}
                  </div>
                </motion.div>
              </AnimatePresence>
            )
          }

        </div>
      </div>
      
      {/* see more projects */}
      <div className="mt-5 flex items-center justify-center gap-x-6"> 
        <h1 className="text-lg text-white font-light opacity-80">Want to see more project</h1>
        <Link href={'/more-projects'}><button className="px-5 py-2 rounded-full text-white bg-blue-500 font-light hover:bg-blue-500/90 cursor-pointer">See More</button></Link> 
      </div>

    </div>
    </motion.section>
  );
}

export default ProjectWork;
