

import { motion } from "motion/react";
import Link from "next/link";



// react icons // 
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";


function SocialLinks()
{
    const Links=[
        {
            name : 'GitHub',
            logo : <ImGithub className="text-teal-600  text-2xl"/>,
            link : 'https://github.com/AryanDhamale'
        },
        {
            name : 'Linkedin',
            logo : <FaLinkedin className="text-teal-600 text-2xl"/>,
            link : 'https://www.linkedin.com/in/tejasdhamale/'
        },
        {
            name : 'Twitter',
            logo : <FaXTwitter className="text-teal-600 text-2xl"/>,
            link : 'https://x.com/aryandhamale07'
        },
        {
            name :  'Discord',
            logo :  <FaDiscord className="text-teal-600 text-2xl"/>,
            link : '/'
        }
    ]
    return (
        <div className="flex gap-x-5">

            {/* {
                Links.map((ele,idx)=><div key={ele.name} className="bg-[#202020] text-white rounded-full w-[150px] py-3 gap-x-2 flex items-center justify-center"> {ele.logo} <span className="text-lg">{ele.name}</span> </div>)
            } */}

            
            {Links.map((el,idx)=> <Link key={el.name} href={el.link}> <div key={el.name} className="drop-shadow-2xl size-13 rounded-full bg-white flex justify-center items-center cursor-pointer"> {el.logo} </div> </Link>)}

            {/* <div className="drop-shadow-lg bg-white dark:bg-transparent opacity-50 dark:border dark:border-slate-100 rounded-full w-[170px] py-2 gap-x-2 flex items-center justify-center"> <FaLinkedin className="text-3xl"/> <span className="text-xl">Linkedin</span> </div>

            <div className="drop-shadow-lg bg-white dark:bg-transparent opacity-50 dark:border dark:border-slate-100 rounded-full w-[170px] py-2 gap-x-2 flex items-center justify-center"> <FaXTwitter className="text-3xl"/> <span className="text-xl">Twitter</span> </div>

            <div className="drop-shadow-lg bg-white dark:bg-transparent opacity-50 dark:border dark:border-slate-100 rounded-full w-[170px] py-2 gap-x-2 flex items-center justify-center"> <FaDiscord className="text-3xl"/> <span className="text-xl">Discord</span> </div> */}
        </div>
    );
}

export default SocialLinks;