
// local 
import Link from "next/link";

// react icons dep // 
import { FaHeart } from "react-icons/fa";


function MoreProjects()
{
  return (
    <div className="relative w-full h-screen flex flex-col gap-y-3 items-center justify-center">
       
        <h1 className="max-md:text-center">More Projects will be Coming soon , we are currently working on this section.</h1>
        <h1 className=""> Till then keep learning and keep exploring </h1>
        <Link href={'/'}><button className="px-8 py-2 bg-blue-500 active:bg-blue-500/90 hover:bg-blue-500/90 rounded-full text-white font-light">Back</button></Link>
        
        {/* for bottom logo */}
        <div className="absolute bottom-10">
            <h1 className="opacity-90 font-light max-md:text-center">This website is controlled and maintained by<span className="text-blue-500 font-medium opacity-100"> Tejas Dhamale </span>under the<span className="text-blue-500 font-medium opacity-100"> SANDBOX </span> community </h1>
        </div>
    </div>
  );
}

export default MoreProjects;