"use client";
// local dependencies // 
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// shadcn dependencies // 
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

function Navbar() {
    // bg-[#f2f2f229] 
    const sections = ['Home', 'About', 'Projects', 'Skills', 'Services', 'Contact'];
    const [activetab, setActivetab] = useState('Home');
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0 });
    const tabsRef = useRef({});



    useEffect(() => {
        const tab = tabsRef.current[activetab];
        if(tab)
        {
            const that_tab=tab.getBoundingClientRect();
            const parent_of_that_tab=tab.parentNode.getBoundingClientRect();
            setIndicatorStyle({left:that_tab.left-parent_of_that_tab.left});
        }
    }, [activetab])


    return (
        <header className="w-full h-28 flex items-center justify-center sticky top-0 left-0 z-[30]">
            <nav className="w-9/10 bg-gradient-to-br from-[#4361ee]/20 to-[#7209b7]/20 border-1 h-13 rounded-full backdrop-blur-md bg-surface-alpha flex items-center justify-between px-2.5">

                {/* logo */}
                <div className="flex items-center gap-x-2">
                    <div className="size-9 text-sm bg-[#3f37c9] rounded-full flex items-center justify-center font-light">TD</div>
                    <div className="tracking-wide font-medium"> <span className="">Tejas </span><span className="text-blue-500">Dhamale</span> </div>
                </div>

                {/* min-[1020px]:links */}
                <div className="h-full hidden min-[1110px]:block">
                    <ul className="relative h-full flex items-center gap-x-3">
                        <motion.div animate={indicatorStyle} transition={{ stiffness: 500, damping: 30 ,duration: 0.3 }} className="w-[110px] absolute backdrop-blur-lg bg-surface-alpha -z-[10] h-[83%] rounded-full"></motion.div>
                        {/* bg-[#4361ee]/20  */}

                        {
                            sections.map((el) => <li key={el} ref={(tab) => (tabsRef.current[el] = tab)} className="rounded-full cursor-pointer w-[110px] text-center font-light text-base py-2"> <ScrollLink to={el[0].toLowerCase() + el.slice(1)} smooth={true} duration={600} spy={true} offset={-130} onSetActive={() => setActivetab(el)}> <span >{el}</span> </ScrollLink> </li> )
                        }
                        <li> | </li>

                        <Link href={'/notes'}><li className="cursor-pointer text-center font-light text-base px-4 py-1.5">Notes</li> </Link>
                    </ul>
                </div>

                {/* side nav for mobile devices */}
                <div className="flex gap-x-4  min-[1110px]:hidden">
                    <Drawer>
                        <DrawerTrigger asChild>
                            {/* <Button variant="outline" size="icon"> <Menu />  </Button> */}
                            {/* trigger button */}
                            <div className='flex flex-col justify-center gap-y-2 w-[25px] h-[34px] mr-5'>
                                <div className='border-1 border-white ' />
                                <div className='border-1 border-blue-500 w-1/2 rounded' />
                                <div className='border-1 border-white ' />
                            </div>
                        </DrawerTrigger>

                        <DrawerContent className={'bg-surface-alpha backdrop-blur-md'}>

                            <DrawerFooter>

                                <DrawerClose>
                                    <div>close</div>
                                    {/* <Button variant="outline">Cancel</Button> */}
                                </DrawerClose>
                            </DrawerFooter>

                            <DrawerHeader className={'border-t-0'}>
                                <DrawerTitle> </DrawerTitle>
                                {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
                                <div className="w-full flex items-center gap-x-10">
                                    <ul className="w-full gap-y-4 flex flex-col items-center transition-all ease-in delay-500">

                                        {
                                            sections.map((ele, idx) => <li key={ele}><ScrollLink to={ele[0].toLowerCase() + ele.slice(1)} smooth={true} duration={600} className="text-white text-base font-normal ">{ele}</ScrollLink></li>)
                                        }

                                        <li><Link href="/notes" className="text-white text-base font-normal px-4 py-2">Notes</Link></li>

                                    </ul>

                                </div>
                            </DrawerHeader>

                        </DrawerContent>
                    </Drawer>

                </div>



            </nav>
        </header>
    );
}

export default Navbar;