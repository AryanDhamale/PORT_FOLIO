
import { GoArrowUpRight } from "react-icons/go";

function CTA({text}) {
    return (
        <div className="cursor-pointer flex items-center justify-between px-2 rounded-full py-2 bg-[#003631] w-[180px]">
            <span className="font-medium text-lg text-[#a8fc00] ps-3">{text}</span>
            <div className="size-11 rounded-full bg-[#a8fc00] flex justify-center items-center"><GoArrowUpRight className="text-xl text-[#003732]" /></div>
        </div>
    );
}

export default CTA;