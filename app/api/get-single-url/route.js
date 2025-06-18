import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// should be protected // 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET,
});

function getSignUrl(publicId,timeLimit)
{
    const signedUrl = cloudinary.url(publicId,{
        type : 'authenticated',
        secure : true , 
        sign_url : true , 
        expires_at : Math.floor(Date.now()/1000)+ timeLimit , 
    })

    return signedUrl; 
}

async function GET() {
    console.log(process.env.CLOUD_API_SECRET);
    return NextResponse.json({msg:'coldMon'});
}

async function POST(request,_)
{
    try {
        const {publicId,timeLimit} = await request.json();
        if(!publicId || !timeLimit) {
            return NextResponse.json({msg:"publicId && timeLimit are required !"},{status:400});
        }
        else {
            const signedUrl = getSignUrl(publicId,timeLimit);
            return NextResponse.json({signedUrl},{status:200});
        }
    }
    catch(err){
        console.log(err.message);
        return NextResponse.json({msg:err.message},{status:503});
    }
}

export {POST,GET};