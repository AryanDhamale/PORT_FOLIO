

import { Button } from "../ui/button";
import Link from "next/link";

function Navbar({notes,control})
{

    return (
        <nav className="w-full h-19 border-b flex items-center justify-between px-5 bg-surface-alpha backdrop-blur-md ">

            {/* first  */}
            <div>
                <ul className="flex items-center gap-x-5">
                   {notes?.length>0 && notes.map((el,idx)=> <li onClick={()=>control.setcurrentPdf(el)} key={idx} className={`text-base font-normal cursor-pointer text-blue-400 w-[90px] py-2 rounded-full text-center ${control.currentPdf==el && "bg-white"}`}>{el}</li>)}
                </ul>
            </div>

            {/* second */}
            <div>
                <Link href={'/'}> <Button className={'rounded-full'}>Home</Button> </Link>
            </div>

        </nav>
    );
}

export default Navbar;