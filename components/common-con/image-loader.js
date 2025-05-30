"use client"
import { useState } from "react";
import Image from "next/image";
// react icons // 
import { FaMountainSun } from "react-icons/fa6";

function ImageLoader({ url, loadingStyle, style, dimension }) {
    const [isloading, setIsloading] = useState(true);
    
    return (
        <>
            {isloading && <div className={`${loadingStyle} rounded-3xl bg-[var(--brand-color)]/25 backdrop-blur-md flex items-center justify-center`}>
                <div className="relative flex items-center justify-center w-15 h-15">
                    <div className="absolute w-full h-full rounded-full border-4 border-t-transparent border-blue-500 animate-spin" />
                    <span className="text-xl  text-blue-600 z-10"> <FaMountainSun/> </span>
                </div>
            </div>}

            <Image width={dimension.width} height={dimension.height} src={url} alt="this is an image" className={`${isloading ? 'w-0 h-0' : style }`} onLoad={() => setIsloading(false)} />

        </>
    );
}

export default ImageLoader;