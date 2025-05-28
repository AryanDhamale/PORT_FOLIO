
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
            {title:'Features',shortIntro:'Auth with Supabase, song upload via drag & drop, playlist handling, Stripe billing and responsive UI'},
            {title:'Learned',shortIntro:'Handling audio streaming logic, real-time UI sync with Zustand, subscription flows with Stripe + Supabase RBAC.'}
            ],
            techStack : ['Next.js', 'Tailwind CSS', 'Supabase', 'Stripe', 'PostgreSQL', 'Zustand']
        },
      link : '/',
      color : 'bg-gradient-to-r from-[#ffd641] to-gray-100',
      image : '/projects/Spotify.png'
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

    const a=['Next.js', 'Tailwind CSS', 'MongoDB', 'NextAuth', 'Razorpay', 'Google Maps', 'Shadcn UI', 'Material UI'];

    return (
        <div className="mt-6 max-[929px]:flex flex-col gap-y-5 hidden">

            {/* cards */}
            <div>
                <AnimatePresence key={currentIDX}>
                <motion.div id={currentIDX} initial={{x:20,opacity:0}} animate={{x:0,opacity:1}} exit={{x:-20,opacity:0}} transition={{duration:1,type:'spring'}} className={`bg-[var(--brand-color)]/25 backdrop-blur-md drop-shadow-lg mx-auto w-[90%] rounded-xl  h-[580px] max-[630px]:py-3 min-[630px]:h-[380px] min-[630px]:items-center max-[630px]:flex-col-reverse gap-y-5 flex px-4`}>
                    {/* informatio box - parent*/}
                    <div className="w-full min-[630px]:w-[55%] flex items-center justify-center">
                        {/* information box - child */}
                        <div className="w-full flex flex-col gap-y-4 ">
                            {/* information here */}
                            <div className="max-[630px]:h-[230px]">
                                <h1 className="text-xl text-blue-500 font-medium italic mb-2">{allProjects[currentIDX].name}</h1>
                                <ul className="text-sm font-light flex flex-col gap-y-2 tracking-wider">
                                    {
                                        allProjects[currentIDX].info.keypoints.map((el,idx)=> <li key={idx}>{el.shortIntro}</li> )
                                    }
                                </ul>
                            </div>
                            {/* live here */}
                            <Link href={allProjects[currentIDX].link}>
                                <button className="t px-6 py-2 text-blue-500 bg-white rounded-full cursor-pointer">Live here</button>
                            </Link>
                        </div>

                    </div>
                    <div className="flex-1 flex items-center justify-center rounded-md">
                        <Image onClick={()=>sliderControl({visible:true,imgNo:currentIDX})} width={1895} height={910} className="w-full h-[230px] object-cover rounded-md cursor-pointer" src={allProjects[currentIDX].image} alt="This is an image" />
                    </div>
                </motion.div>
                </AnimatePresence>
            </div>

            {/* buttons */}
            <div className="flex items-center justify-center gap-x-5">
                <div onClick={leftSlide} className="size-10 bg-transparent border-2 border-blue-500  text-blue-500 rounded-full flex items-center justify-center "> <FaAngleLeft className="text-lg" />  </div>
                
                <div onClick={rightSlide} className="size-10 bg-transparent border-2 border-blue-500 text-blue-500 rounded-full flex items-center justify-center "> <FaAngleRight className="text-lg" />  </div>
            </div>
        </div>
    );
}

export default ProjectSlider;