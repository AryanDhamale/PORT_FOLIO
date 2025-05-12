import Image from "next/image";
import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import ImageLoader from "../common-con/image-loader";

function ImageSlider({imgNo,control})
{
    const imageArray=['dribbble.png','fileSharing.png','blackBird.png','peerTopeer.png','wonderlust.png','Spotify.png'];
    const [currentImage,setcurrImage]=useState(imgNo);

    const nextSlide=()=>{
        let index=(currentImage+1) % imageArray.length ;
        setcurrImage(index);
    }
    
    const prevSlide=()=>{
        let index=currentImage-1>=0 ? currentImage-1 : imageArray.length-1;
        setcurrImage(index);
    }
    return (
        <div className="flex items-center justify-center gap-x-30 w-full h-[100vh] z-[20] fixed top-0 left-0 bg-[#000000b3]">

            <div className="absolute left-11 top-10"> <span onClick={()=>control((oldVal)=>({...oldVal,visible:false}))} className="text-white font-medium cursor-pointer">Close</span> </div>

            {/* left */}
            <div onClick={prevSlide} className="size-12 rounded-full flex justify-center items-center bg-white cursor-pointer"> <FaAngleLeft className="text-xl text-black"/> </div>

            <AnimatePresence>
            <motion.div initial={{x:-10,opacity:0}} animate={{x:0,opacity:1}} exit={{x:10,opacity:0}} transition={{type:'spring',duration:0.5}} className='w-7/10'>

             {/* image loader will here */}
             <Image className="w-full rounded-md" width={1912} height={908} src={'/projects/'+imageArray[currentImage]} alt="This is an image"/>


            </motion.div>
            </AnimatePresence>

            {/* right */}
            <div onClick={nextSlide} className="size-12 rounded-full flex justify-center items-center bg-white cursor-pointer"> <FaAngleRight className="text-xl text-black"/> </div>
        </div>
    );

}

export default ImageSlider;