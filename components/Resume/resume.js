import ConHeading from "../common-con/con-heading";
import Image from "next/image";

function Resume() {
    return (
        <section>
            <div className="w-full">
                <ConHeading text={'Resume'} />
                <div className="min-h-[80vh] grid grid-cols-2 px-10 py-15">
                    {/* left*/}
                    <div className="">

                        <div className="relative w-4/5 mx-auto flex flex-col gap-y-16">

                            {/* line */}
                            <div className="w-[1px] rounde-full h-full bg-blue-500 absolute -left-6.5 top-0"/>

                            <div className="">
                                <h1 className="relative text-2xl font-light opacity-90 mb-2">Introduction
                                    {/* dot */}
                                    <div className="size-5 top-1 -left-9 rounded-full  border-2 border-blue-500 absolute flex items-center justify-center"> <div className="bg-blue-400 rounded-full size-4/5"></div> </div>
                                </h1>
                                <p className="font-light text-sm tracking-wider ">As a passionate Full-Stack Developer with 5+ years of experience, I specialize in building scalable web applications using React and Node.js. My focus is on creating intuitive user experiences and robust backend solutions that drive real-world impact.</p>
                            </div>

                            <div className="">
                                <h1 className="relative text-2xl font-light opacity-90 mb-2">Education
                                    {/* dot */}
                                    <div className="size-5 top-1 -left-9 rounded-full  border-2 border-blue-500 absolute flex items-center justify-center"> <div className="bg-blue-400 rounded-full size-4/5"></div> </div>
                                </h1>
                                <ul className="ps-2 flex flex-col gap-y-2">
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[90px]">Degree</div> : <div className="italic">Bachelor of Technology in Computer Science</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[90px]">University</div> : <div className="italic">Sant Gadage Baba Amravati univercity</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[90px]">Graduation</div> : <div className="italic">2021 - 2024</div> </li>
                                </ul>
                            </div>

                            <div className="">
                                <h1 className="relative text-2xl font-light opacity-90 mb-2">Skills
                                    {/* dot */}
                                    <div className="size-5 top-1 -left-9 rounded-full  border-2 border-blue-500 absolute flex items-center justify-center"> <div className="bg-blue-400 rounded-full size-4/5"></div> </div>
                                </h1>
                                <ul className="ps-2 flex flex-col gap-y-2">
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px]">Programming Languages</div> : <div className="italic">Python, JavaScript, Java, C++, etc.</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px]">Frameworks/Libraries</div> : <div className="italic">React, Angular, Node.js, Django, Spring Boot, etc.</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px]">Databases</div> : <div className="italic">SQL, MongoDB, PostgreSQL, etc.</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px]">Tools/Platforms</div> : <div className="italic">Git, Docker, AWS, Azure, Jira, Figma, etc.</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px]">Methodologies</div> : <div className="italic">Agile, Scrum, Waterfall, etc.</div> </li>
                                    <li className="font-light text-sm tracking-wider flex items-center gap-x-2"> <div className="font-medium w-[190px]">Soft skills</div> : <div className="italic">Problem-solving, Teamwork, Communication etc.</div> </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    {/* right */}
                    <div className="">
                        <div className="relative w-4/5 mx-auto flex flex-col gap-y-16">

                            {/* line */}
                            <div className="w-[1px] rounde-full h-full bg-blue-500 absolute -left-6.5"></div>

                            {/* for certification */}
                            <div className="">

                                <h1 className="relative text-2xl font-light opacity-90 mb-3"> Awards & Certifications
                                    {/* dot */}
                                    <div className="size-5 top-1 -left-9 rounded-full  border-2 border-blue-500 absolute flex items-center justify-center"> <div className="bg-blue-400 rounded-full size-4/5"></div> </div>
                                </h1>
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
                                            <h1 className="text-sm italic ">C++ DSA course</h1>
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
                                            <Image width={1234} height={866} className="w-[140px] h-[70px] object-cover rounded" src={'/apna_college/c++ dsa.png'} alt="this is an image" />
                                            <h1 className="text-sm italic ">MERN STACK course</h1>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* for CTA */}
                            <div>
                                <h1 className="relative text-2xl font-light opacity-90 mb-2"> Interested in learning more about my experience ?
                                {/* dot */}
                                <div className="size-5 top-1 -left-9 rounded-full  border-2 border-blue-500 absolute flex items-center justify-center"> <div className="bg-blue-400 rounded-full size-4/5"></div> </div>
                                </h1>

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
        </section>
    );
}

export default Resume;