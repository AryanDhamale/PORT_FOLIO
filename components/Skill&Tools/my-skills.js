"use client"
import ConHeading from "../common-con/con-heading";
import { motion  } from "framer-motion";

function SkillsNew() {
    const skills = [
        {
            heading: 'Development Skills',
            skills: [
                { title: 'Front End', list: 'React.js , Next.js , Redux Toolkit ' },
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
                { title : 'Web Technology' ,list: 'HTML , CSS , JS, TS, Accessiblity '},
                { title : 'Soft skills' ,list: 'Project Architecture & Planning, Problem Solving & Debugging , Team Collaboration' },
                { title: 'Other Skills', list: 'SEO & Accessibility, Responsive Design,DSA' }
            ]
        }
    ];
    return (
        <motion.section id="skills" initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8}}>
            <div className="w-full flex flex-col gap-y-10">

                <ConHeading text='SKILLS' />
                
                {/* container  */}
                <div className="mt-5 w-full min-h-[60vh] grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:grid-cols-3">
                    {/* cards */}
                    {
                        skills.map((el,idx)=><div key={idx} className="select-none flex items-center justify-center">
                            {/* child */}
                            <div key={idx} className="bg-[#0b0c14] border-1 backdrop-blur-md rounded-2xl w-9/10 min-h-9/10 py-8">
                            {/* heading */}
                            <div className="flex items-center justify-end px-8">
                                <h1 className="text-13 py-2 px-3 rounded-full border border-[#7c87f7]/20 text-[#7c87f7] bg-[#7c87f7]/10 leading-[100%] ">{el.heading}</h1>
                            </div>

                            {/* information */}
                            <div className="py-5 px-3 flex flex-col gap-y-10">
                                {
                                    el.skills.map((each,idx)=><div key={idx}>
                                    <h1 className="font-medium text-white mb-2"> {each.title} </h1>
                                    <div className="text-sm font-light text-white/50 tracking-wider">{each.list}</div>
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