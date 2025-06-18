"use client";
import ConHeading from "../common-con/non-tracking-con-heading";
import ImageLoader from "../common-con/image-loader";
import { motion } from "framer-motion";
import { useRef } from "react";

function Memories() {

    const images_array=['img-1.png','img-2.jpg','img-3.png','img-4.png','img-5.png','img-6.png','img-7.jpg','img-8.jpg','img-9.jpg','img-10.jpg','img-11.jpg','img-12.jpg'];
    const duplicate_images_array=[...images_array,...images_array,...images_array];
    const parentWidth=useRef(null);

    const how_much = "-"+String(400*images_array.length)+"%"; // to try how much % left a card div // 

    const marqueeVariantsLeft = {
    animate: {
      x: ['0%', `${'-300%'}`], // Animate from 0% to -100% of its own width
      transition: {
        x: {
          repeat: Infinity,        // Repeat the animation infinitely
          repeatType: "loop",      // Loop back to the start after each cycle
          duration: 35,            // Duration of one full cycle (adjust for speed)
          ease: "linear",          // Linear easing for consistent speed
        },
      },
    },
  };

    const marqueeVariantsRight = {
    animate: {
      x: [`${'-300%'}`, '0%'], // Animate from -100% to 0% of its own width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35, // Keep duration consistent for matching speed
          ease: "linear",
        },
      },
    },
  };
    return (
        <motion.section initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8}}>
        <div className="w-full">
            <ConHeading firstHalf={'Some'} secondHalf={' Memories'} />
            <div className="py-10 w-full min-h-[70vh] flex flex-col gap-y-3 overflow-hidden whitespace-nowrap">

                {/* left-to-right */}
                <motion.div ref={parentWidth} variants={marqueeVariantsLeft} animate="animate" className="h-65 w-full py-3 flex gap-x-5">
                {
                  duplicate_images_array.reverse().map((el, idx) => <div key={idx} className="select-none flex-shrink-0 w-[400px] h-full"> <ImageLoader url={'/Memories/'+el} loadingStyle={'w-full h-full'} style={'border-2 border-[#3f37c9] rounded-xl object-cover w-full h-full'} dimension={{width:1920,height:1080}} alt={`Failed to load -> ${el}`}/> </div>)
                  
                }
                </motion.div>
                

                {/* right-to-left */}
                <motion.div variants={marqueeVariantsRight} animate="animate" className="h-65 w-full py-3 flex gap-x-5">
                {
                  duplicate_images_array.map((el, idx) => <div key={idx} className="select-none flex-shrink-0 w-[400px] h-full">
                    <ImageLoader url={'/Memories/'+el} loadingStyle={'w-full h-full'} style={'border-2 border-[#3f37c9] rounded-xl object-cover w-full h-full'} dimension={{width:1920,height:1080}} alt={`Failed to load -> ${el}`}/>
                  </div>)
                }
                </motion.div>

            </div>
        </div>
        </motion.section>
    );
}

export default Memories;