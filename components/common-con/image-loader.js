"use client"

import { useState, useEffect } from "react";
import Image from "next/image";


// react icons // 
import { FaMountainSun } from "react-icons/fa6";

function ImageLoader({ url, loadingStyle, style, dimension, alt = "This is an Image", signed = false }) {
    const [isloading, setIsloading] = useState(true);
    const [signedUrl, setsignedUrl] = useState(null);

    useEffect(()=>{
        if(signed) {
            getSignedUrl();
        }
    },[]);

    async function getSignedUrl() {
        // url will be publicId // 
        const fetchSignURL = '/api/get-single-url';
        const fetchOptions = {
            method: 'POST',
            body: JSON.stringify({ publicId: url, timeLimit: 300 }),
            header: {
                'content-type': 'application/json'
            }
        }
        try {
            const responce = await fetch(fetchSignURL, fetchOptions);
            const responceData = await responce.json();
            setsignedUrl(responceData.signedUrl);
        }
        catch (err) {
            // handle error // 
            console.log(err.message);
        }
    }

    if (signed) {
        // total time = api call + loading time O(1) // 
        return (
            <>
                {
                    !signedUrl && <div className={`${loadingStyle} rounded-3xl bg-[var(--brand-color)]/25 backdrop-blur-md flex items-center justify-center`}>
                        <div className="relative flex items-center justify-center w-15 h-15">
                            <div className="absolute w-full h-full rounded-full border-4 border-t-transparent border-blue-500 animate-spin" />
                            <span className="text-xl  text-blue-600 z-10"> <FaMountainSun /> </span>
                        </div>
                    </div>
                }
                {
                    signedUrl && <Image width={dimension.width} height={dimension.height} src={signedUrl} alt={alt} className={style}/>
                }
            </>
        );
    }
    else {
        // total time = loading time // 
        return (
            <>
                {isloading && <div className={`${loadingStyle} rounded-3xl bg-[var(--brand-color)]/25 backdrop-blur-md flex items-center justify-center`}>
                    <div className="relative flex items-center justify-center w-15 h-15">
                        <div className="absolute w-full h-full rounded-full border-4 border-t-transparent border-blue-500 animate-spin" />
                        <span className="text-xl  text-blue-600 z-10"> <FaMountainSun /> </span>
                    </div>
                </div>}

                <Image width={dimension.width} height={dimension.height} src={url} alt={alt} className={`${isloading ? 'w-0 h-0' : style}`} onLoad={() => setIsloading(false)} />

            </>
        );
    }
}

export default ImageLoader;