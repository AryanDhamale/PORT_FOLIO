import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";


// should be protected // 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

function getSignUrl(publicId, timeLimit) {
    const signedUrl = cloudinary.url(publicId, {
        type: 'authenticate',
        secure: true,
        sign_url: true,
        expires_at: (Date.now() / 1000) + timeLimit , 
    })

    return signedUrl;
}

async function POST(req, _) {

    try {
        let { publicIds, timeLimit } = await req.json();

        // also check who is sending request // don't sink pull up // 

        if (!Array.isArray(publicIds)) {
            return NextResponse.json({ flap: false, msg: 'publicIDs should be an array' }, { status: 400 })
        }

        else {
            signedUrls = publicIds.map((publicId,_)=>getSignUrl(publicId,timeLimit));   
            return NextResponse.json({flap:true,signedUrls},{status:200});
        }

    } catch (err) {
        return NextResponse.json({ flap:false, msg: err.message }, { status: 500 });
    }
}

export { POST };