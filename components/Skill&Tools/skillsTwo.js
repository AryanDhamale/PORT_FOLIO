"use client"
import ConHeading from "../common-con/con-heading";
import { motion  } from "framer-motion";

function SkillsNew() {
    const skills = [
        {
            heading: 'Development Skills',
            skills: [
                { title: 'Front End', list: 'React.js , Next.js,Redux Toolkit ' },
                { title: 'Back End', list: 'Node.js, Express.js , MongoDB , FireBase' },
                { title: 'APIs & Integration', list: 'NextAuth , Razorpay , REST , Socket.io, WebRTC' }
                
            ]
        },
        {
            heading: 'UI/UX && Dev-Tools',
            skills: [
                { title: 'User-Centric Design', list: ' Shadcn.ui , Material.ui , TailwindCSS , Bootstrap' },
                { title: 'Interaction & Animation', list: 'Lottie , Framer Motion' },
                { title: 'CI/CD & Deployment', list: 'Netlify , Vercel , GitHub Actions' }
            ]
        },
        {
            heading: ' Web && Soft Skills',
            skills: [
                { title : 'Web Technology' ,list: 'HTML,CSS,JS,TS,Accessiblity'},
                { title : 'Soft skills' ,list: 'Project Architecture & Planning,Problem Solving & Debugging ,Team Collaboration' },
                { title: 'Other Skills', list: 'SEO & Accessibility,Responsive Design,DSA' }
            ]
        }
    ];
    return (
        <motion.section id="skills" initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8}}>
            <div className="w-full flex flex-col gap-y-10">

                <ConHeading text='SKILLS' />
                
                {/* container  */}
                <div className=" mt-5 w-full min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:grid-cols-3">
                    {/* cards */}
                    {
                        skills.map((el,idx)=><div key={idx} className="select-none flex items-center justify-center">
                            {/* child */}
                            <div key={idx} className="bg-[var(--brand-color)]/25 backdrop-blur-md rounded-3xl w-9/10 h-full min-[1200px]:h-4/5 py-8">
                            {/* heading */}
                            <div className="flex flex-col items-center gap-y-3">
                                <h1 className="text-xl font-base text-[var(--brand-color)]">{el.heading}</h1>
                                <div className="flex w-1/2">
                                    <div className="border-1 border-white flex-1 opacity-80" />
                                    <div className="border-1 border-blue-500 flex-1" />
                                    <div className="border-1 border-white flex-1 opacity-80" />
                                </div>
                            </div>

                            {/* information */}
                            <div className="py-5 px-3 flex flex-col gap-y-5">
                                {
                                    el.skills.map((each,idx)=><div key={idx}>
                                    <h1 className="font-medium text-[var(--brand-color)] mb-2"> {each.title} </h1>
                                    <div className="flex flex-wrap gap-x-4 gap-y-4 text-sm font-light">
                                        {
                                            each.list.split(',').map((nafskill,idx)=><button key={idx} className="px-3 py-2 bg-[#4361ee] text-white rounded-full">{nafskill}</button>)
                                        }
                                              
                                    </div>
                                </div>)
                                }
                                
                            </div>

                        </div>
                    </div>)
                    }
                </div>
            </div>
        </motion.section>
    );
}

export default SkillsNew;