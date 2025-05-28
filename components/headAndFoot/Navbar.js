"use client";

// local // 
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
import { Menu } from 'lucide-react';




function Navbar() {
    const sections = ['Home', 'About', 'Projects', 'Skills', 'Services', 'Contact'];
    return (
        <header className="w-full h-19 sticky top-0 left-0 z-[10]">
            <nav className="w-full h-full flex justify-between items-center px-4 lg:px-14 border-0 bg-surface-alpha backdrop-blur-md ">
                <div className="flex items-center gap-x-2"><CodeXml className="text-[var(--brand-color)] text-2xl" /> <span className="text-lg font-medium">Tejas Dhamale</span> </div>
                <div className="hidden lg:flex items-center gap-x-10">
                    <ul className="flex items-center gap-x-6 transition-all ease-in delay-500">

                        {
                            sections.map((ele) => <li key={ele}><ScrollLink to={ele[0].toLowerCase() + ele.slice(1)} spy={true} smooth={true} duration={600} activeClass="rounded-full bg-white text-blue-400" className="text-base font-normal cursor-pointer hover:text-blue-400 px-4 py-2">{ele}</ScrollLink></li>)
                        }

                        <li className='text-white'> | </li>

                        <li><Link href="/notes" className="text-base font-normal cursor-pointer text-white hover:text-blue-400 px-4 py-2">Notes</Link></li>

                    </ul>
                </div>

                {/* side nav for mobile devices */}
                <div className="flex gap-x-4 lg:hidden">
                    <Drawer>
                        <DrawerTrigger asChild>
                            {/* <Button variant="outline" size="icon"> <Menu />  </Button> */}
                            {/* trigger button */}
                            <div className='flex flex-col justify-center gap-y-2 w-[25px] h-[34px] mr-5'>
                                <div className='border-1 border-white '/>
                                <div className='border-1 border-blue-500 w-1/2 rounded'/>
                                <div className='border-1 border-white '/>
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