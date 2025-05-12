"use client";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import loader from "@/LottieJSON/Loader.json";
import Image from "next/image";


function ImageLoader({ conWidth, conHeight , width, height, className, src }) {
    const [isLoading, setisLoading] = useState(true);
    return (
        <>
            { isLoading ? <div className="relative">
            <Skeleton className={`border border-red-500 w-${conWidth} h-${conHeight} rounded-md`}/>
            <Lottie className="absolute top-1/2 left-1/2  -transform -translate-1/2 size-[150px]" animationData={loader} />
            </div> :
            <Image className={className} width={width} height={height} src={src} alt="This is an image" />
          }
        </>
    );
}

export default ImageLoader;