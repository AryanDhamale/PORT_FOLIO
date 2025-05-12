"use client";

// local // 
import ModeToggle from "../Them/ModeToggle";
import { CodeXml } from 'lucide-react';
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";


// shadcn.ui // 
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button"

// lucide icons // 
import { Hamburger } from 'lucide-react';
import { Menu } from 'lucide-react';

// react - icons // 
import { PiHamburgerFill } from "react-icons/pi";




function Navbar() {
    const sections = ['Home', 'About', 'Projects', 'Skills', 'Services', 'Contact'];
    return (
        <header className="w-full h-19 sticky top-0 left-0 z-[10]">
            <nav className="w-full h-full flex justify-between items-center px-4 lg:px-14 dark:border-0 bg-surface-alpha backdrop-blur-md ">
                <div className="flex items-center gap-x-2"><CodeXml className="text-[#4ea88a] text-2xl" /> <span className="text-lg font-medium">Tejas Dhamale</span> </div>
                <div className="hidden lg:flex items-center gap-x-10">
                    <ul className="flex items-center gap-x-6 transition-all ease-in delay-500">

                        {
                            sections.map((ele, idx) => <li key={ele}><ScrollLink to={ele[0].toLowerCase() + ele.slice(1)} spy={true} smooth={true} duration={600} activeClass="rounded-full text-white bg-[#202020] dark:bg-white dark:text-black hover:text-white" className="text-base font-normal cursor-pointer hover:text-[#4ea88a] px-4 py-2">{ele}</ScrollLink></li>)
                        }

                        <li> | </li>

                        <li><Link href="/notes" className="text-base font-normal cursor-pointer hover:text-[#4ea88a] px-4 py-2">Notes</Link></li>

                    </ul>
                    <ModeToggle />
                </div>

                {/* side nav for mobile devices */}
                <div className="flex gap-x-4 lg:hidden">
                    <ModeToggle  />
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="outline" size="icon"> <Menu /> </Button>
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