
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

function Footer()
{
    const url='https://youtu.be/AX1zRInC_TA?si=ax0hTm_UAoIHW-0i';
    return (
        <footer className="mt-10 border-t-1 border-slate-800 w-full h-25 flex items-center justify-center min-[734px]:justify-between px-13">

            <div> 
                <h1>© {new Date().getFullYear()} Tejas Dhamale. All Rights Reserved.</h1>
                <h3 className="text-sm font-light tracking-wide flex items-center gap-x-1"> <span className="opacity-50">Made with love and</span> <Link href={url}> <div className="opacity-80 flex items-center gap-x-1"> <span>song</span> <FiArrowUpRight/> </div> </Link> </h3>
            </div>

            {/* must update with real-time-update PUSH  */}
            <div className="hidden min-[734px]:block text-sm font-light opacity-50 tracking-wide"> Last updated on June 06, 2025 at 9:17 PM IST </div>

        </footer>
    );
}

export default Footer;