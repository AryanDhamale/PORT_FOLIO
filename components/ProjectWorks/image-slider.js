// import Image from "next/image";
import { useState } from "react";
import { FaAngleLeft , FaAngleRight } from "react-icons/fa6";
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-30 w-full min-h-screen z-[20] fixed top-0 left-0 bottom-0 bg-[#2b323e82]">

            <div className="absolute left-11 top-10"> <span onClick={()=>control((oldVal)=>({...oldVal,visible:false}))} className="text-blue-500 px-3 py-1 rounded-full bg-white text-sm font-medium cursor-pointer">Close</span> </div>

            {/* left */}
            <div onClick={prevSlide} className="size-12 rounded-full hidden md:flex  justify-center items-center bg-white cursor-pointer"> <FaAngleLeft className="text-xl text-blue-500"/> </div>

            <AnimatePresence key={currentImage}>
            <motion.div initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} exit={{x:20,opacity:0}} transition={{type:'spring',duration:0.5}} className='w-9/10 md:w-7/10'>

             {/* image loader will here */}
             <ImageLoader url={'/projects/'+imageArray[currentImage]} loadingStyle={'w-full h-[500px]'} style={'w-full rounded-md'} dimension={{width:1912,height:908}}/>
             {/* <Image className="w-full rounded-md" width={1912} height={908} src={'/projects/'+imageArray[currentImage]} alt="This is an image"/> */}


            </motion.div>
            </AnimatePresence>

            {/* right */}
            <div onClick={nextSlide} className="size-12 rounded-full hidden md:flex justify-center items-center bg-white cursor-pointer"> <FaAngleRight className="text-xl text-blue-500"/> </div>

            {/* for less than < md */}
            <div className="flex items-center gap-x-4 md:hidden mt-6">
                <div onClick={prevSlide} className="size-10 rounded-full flex  justify-center items-center active:bg-blue-500/90 bg-blue-500 cursor-pointer"> <FaAngleLeft className="text-lg text-white"/> </div>
                <div onClick={nextSlide} className="size-10 rounded-full flex  justify-center items-center active:bg-blue-500/90 bg-blue-500 cursor-pointer"> <FaAngleRight className="text-lg text-white"/> </div>
            </div>
        </div>
    );

}

export default ImageSlider;