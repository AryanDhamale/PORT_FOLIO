"use client";
import ConHeading from "../common-con/con-heading";
import CircularProgress from "../common-con/circular-progress";
import { motion } from "framer-motion";
import Image from "next/image";

function Skills() {
    const skills = [
        {
            heading : 'Development Skills',
            skills : [
                {percent:90,title:'Front End', list: 'React.js , Next.js' } ,
                {percent:85,title:'Back End',list:'Node.js, Express.js , MongoDB , FireBase'},
                {percent:80,title:'APIs & Integration',list:'NextAuth , Razorpay , REST'},
                {percent:75,title:'CI/CD & Deployment',list:'Netlify , Vercel , GitHub Actions'}
            ]
        },
        {
            heading : 'UI/UX',
            skills : [
                {percent:80,title:'User-Centric Design',list:'TailwindCSS , Bootstrap  , Shadcn.ui , Material.ui'},
                {percent:80,title:'Interaction & Animation',list:'Lottie , Framer Motion'}
            ]
        },
        {
            heading : ' Web Technologies',
            skills : [
                {percent:90,title:'HTML/CSS/JS'},
                {percent:85,title:'Responsive Design'},
                {percent:75,title:'SEO & Accessibility'}
            ]
        },
        {
            heading : 'Soft & Professional Skills',
            skills : [
                {percent:80,title:'Project Architecture & Planning'},
                {percent:85,title:'Problem Solving & Debugging'},
                {percent:80,title:'Team Collaboration & Git'}
            ]
        }
    ];
    return (
        <motion.section id="skills" initial={{y:40,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8}}>
        <div className="w-full flex flex-col gap-y-10">
            <ConHeading text='SKILLS' />
            <div className="mt-8 w-full min-h-[80vh] grid grid-cols-1 min-[930px]:grid-cols-2 gap-y-5  sm:ps-10 sm:pe-9">
                

                    {skills.length > 0 && skills.map((el,idx)=> 
                    <div key={el.heading} className="flex items-start justify-center">
                    <motion.div whileHover={{borderRadius:'35px'}} transition={{duration:0.3}} className=" bg-white border-2 border-green-200 bg-surface-alpha backdrop-blur-md w-full min-[500px]:w-4/5 h-[320px] px-5 rounded-xl dark:bg-transparent flex flex-col justify-center gap-y-4">
                        {/* heading */}
                        <div>
                            <h2 className="text-lg font-medium text-[#4ea88a]">{el.heading}</h2>
                            <div className="flex w-3/10 mt-2">
                                <div className="w-3/5 border-2 border-[#4ea88a]" />
                                <div className="flex-1 border-2 border-slate-200 " />
                            </div>
                        </div>
                        {/* skills  */}
                        <div className="">
                            <ul className="flex flex-col gap-y-4">
                                {
                                    el.skills.map((ele,idx)=><li key={idx} className="flex items-center gap-x-3"> <div className=""><CircularProgress percentage={ele.percent}/></div> <div className="text-base font-medium"><span className="text-[#4ea88a]">{ele.title}</span> <span className="opacity-40"> {ele.list && `= [ ${ele.list} ]`} </span></div> </li>)
                                }       

                            </ul>
                        </div>
                    </motion.div>
                    </div>
                    ) }
            </div>
        </div>
        </motion.section>
    );
}

export default Skills;