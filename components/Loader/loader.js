"use client";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import loader from "@/LottieJSON/Loader.json";

function Loader()
{
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Lottie className='size-[25rem]' animationData={loader}/>
        </div>
    );
}

export default Loader;