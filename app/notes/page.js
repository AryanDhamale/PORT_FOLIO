
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ImageLoader from "@/components/common-con/image-loader";

function Notes()
{
    return (
        <div className="w-full h-screen flex flex-col gap-y-4 items-center justify-center ">
            <h1>The Notes Page will available soon , till then be hungry</h1>
            <Link href={'/'}><Button>Back to Home</Button></Link>  
            <ImageLoader/> 
        </div>
    );
}

export default Notes;