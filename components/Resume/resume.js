"use client";
import ConHeading from "../common-con/non-tracking-con-heading";
import Image from "next/image";
import { motion } from "framer-motion";

function Resume() {
    return (
        <motion.section initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8}}>
            <div className="w-full select-none">

                <ConHeading firstHalf={'Res'} secondHalf={'ume'} />

                <div className="relative min-h-[80vh] grid grid-cols-1 md:grid-cols-2 max-md:gap-y-10 px-10 py-15">
                <div className="absolute top-0 left-0 w-full min-h-[80vh] bg-gradient-to-br from-[#0090f7] via-[#131313] to-[#0090f7] blur-[400px]"></div>
                    {/* left*/}
                    <div className="">

                        <div className="relative w-[97%] sm:w-4/5 mx-auto flex flex-col gap-y-16">

                            {/* line */}
                            <div className="w-[1px] rounde-full h-full bg-blue-400 absolute -left-6.5 top-0" />

                            <div className="relative">
                                {/* dot */}
                                <div className="size-5 top-1 -left-9 rounded-full bg-black border-2 border-blue-500 absolute flex items-center justify-center"> <div className="bg-blue-500 rounded-full size-4/5"></div> </div>
                                <h1 className="text-2xl font-light opacity-90 mb-2 text-blue-400">Introduction</h1>
                                <p className="font-light text-sm tracking-wider ">I`&apos;m a passionate Full-stack (MERN) with expertise in building scalable apps, optimized UIs with React, secure REST APIs using Node.js, and robust database integration with MongoDB. I focus on performance, real-time features, and end-to-end delivery.</p>
                            </div>

                            <div className="relative">
                                {/* dot */}
                                <div className="size-5 top-1 -left-9 rounded-full bg-black border-2 border-blue-500 absolute flex items-center justify-center"> <div className="bg-blue-500 rounded-full size-4/5"></div> </div>
                                <h1 className="text-2xl font-light opacity-90 mb-2 text-blue-400">Education</h1>
                                <ul className="ps-2 flex flex-col gap-y-2">
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[90px] opacity-90">Degree</div> : <div className="italic">Bachelor of Technology in Computer Science</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[90px] opacity-90">University</div> : <div className="italic"><span>Sant Gadge Baba Amravati University</span> </div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[90px] opacity-90">Graduation</div> : <div className="italic">2021 - 2025</div> </li>
                                </ul>
                            </div>

                            <div className="relative">
                                {/* dot */}
                                <div className="size-5 top-1 -left-9 rounded-full bg-black border-2 border-blue-500 absolute flex items-center justify-center"> <div className="bg-blue-400 rounded-full size-4/5"></div> </div>
                                <h1 className="text-2xl font-light opacity-90 mb-2 text-blue-400">Skills</h1>
                                <ul className="ps-2 flex flex-col gap-y-2">
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px] opacity-90">Programming Languages</div> : <div className="italic"> C, C++, JavaScript (ES6+), TypeScript(basic)</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px] opacity-90">Web Development</div> : <div className="italic">ReactJS, NextJS, NodeJS, ExpressJS,Redux</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px] opacity-90">UI/UX</div> : <div className="italic">Tailwind CSS, Bootstrap, Shadcn UI, Material UI</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px] opacity-90">Databases</div> : <div className="italic">SQL, MongoDB, PostgreSQL, Firebase</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px] opacity-90">Tools & Platforms</div> : <div className="italic"> Git, GitHub, GitHub Actions (CI/CD), Docker</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px] opacity-90">CS Fundamentals</div> : <div className="italic">DBMS, Operating Systems (OS), OOP, DSA</div> </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    {/* right */}
                    <div className="">
                        <div className="relative w-[97%] sm:w-4/5 mx-auto flex flex-col gap-y-16">

                            {/* line */}
                            <div className="w-[1px] rounde-full h-full bg-blue-400 absolute -left-6.5"></div>

                            {/* for certification */}
                            <div className="relative">
                                {/* dot */}
                                <div className="size-5 top-1 -left-9 rounded-full  bg-black border-2 border-blue-500 absolute flex items-center justify-center"> <div className="bg-blue-400 rounded-full w-4/5 h-4/5"></div> </div>

                                <h1 className="text-2xl font-light opacity-90 mb-3 text-blue-400"> Awards & Certifications</h1>
                                {/* certificate of completetion */}
                                <div className="flex flex-col gap-y-10">
                                    {/* c++ dsa */}
                                    <div className="flex flex-col gap-y-3">
                                        <div className="flex gap-x-2 items-center">
                                            <Image width={200} height={188} className="w-8 h-8 rounded" src={'/apna_college/apna_college_logo.jpg'} alt="this is an image" />
                                            <div className="text-sm font-light italic">
                                                <h1 className="">Certificate of Completion from <span className="text-blue-400 font-medium">Apna college</span> </h1>
                                                <h2 className="">Issued Sep 2024</h2>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <Image width={1234} height={866} className="w-[140px] h-[70px] object-cover rounded" src={'/apna_college/c++ dsa.png'} alt="this is an image" />
                                            <h1 className="text-sm italic ">C++ DSA Certification</h1>
                                        </div>
                                    </div>

                                    {/* mern-stack */}
                                    <div className="flex flex-col gap-y-3">
                                        <div className="flex gap-x-2 items-center">
                                            <Image width={200} height={188} className="w-8 h-8 rounded" src={'/apna_college/apna_college_logo.jpg'} alt="this is an image" />
                                            <div className="text-sm font-light italic">
                                                <h1 className="">Certificate of Completion from <span className="text-blue-400 font-medium">Apna college</span> </h1>
                                                <h2 className="">Issued Mar 2024</h2>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-3">
                                            <Image width={1234} height={866} className="w-[140px] h-[70px] object-cover rounded" src={'/apna_college/mern stack.png'} alt="this is an image" />
                                            <h1 className="text-sm italic ">MERN STACK Certification</h1>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* for CTA */}
                            <div className="relative">
                                {/* dot */}
                                <div className="size-5 top-1 -left-9 rounded-full bg-black border-2 border-blue-500 absolute flex items-center justify-center"> <div className="bg-blue-400 rounded-full size-4/5"></div> </div>
                                <h1 className="text-2xl font-light opacity-90 mb-2 text-blue-400"> Interested in learning more about my experience ?</h1>

                                <p className="text-sm font-light italic tracking-wider mb-3">
                                    Connect with me on <span className="text-blue-400 font-medium">LinkedIn</span> for a comprehensive view of my professional journey. This is the best alternative to a direct download as it provides a similar level of detail
                                </p>
                                <p className="text-sm font-light italic tracking-wider">
                                    For a detailed resume, please feel free to reach out to me directly at <span className="text-blue-400 font-medium">aryandhamale07@gmail.com</span>
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </motion.section>
    );
}

export default Resume;