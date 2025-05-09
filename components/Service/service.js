import ConHeading from "../common-con/con-heading";


function Services() {
    const cards=[
        {
            title : 'Web development',
            info : 'End-to-end development of fast, scalable web applications using React, Next.js, Node.js, and MongoDB.'
        },
        {
            title : 'UI/UX',
            info : 'Intuitive and visually engaging interfaces using Figma, Adobe XD, and modern design systems.'
        },
        {
            title : 'API Integration & Backend Services',
            info : 'Secure and efficient API creation and third-party service integration using REST and Node.js.' 
        },
        {
            title : 'Real-time Features',
            info : 'Implementing real-time data features using WebSockets or tools like Socket.IO, ideal for chat apps or live updates.'
        },
        {
            title : ' CI/CD Setup & Deployment',
            info : 'Automating build and deployment workflows with GitHub Actions, Vercel, or Netlify.'
        }
    ];
    return (
        <section id="services">
        <div className="w-full flex flex-col gap-y-10">
            <ConHeading text='SERVICES' />
            <div className="mt-8 w-full min-h-[80vh] grid grid-cols-3 gap-y-4 px-6">
                {/* card-box */}
                {cards.length>0 && cards.map((el,idx)=> <div key={el.title} className='flex items-center justify-center'>
                    {/* actual card */}
                    <div className="bg-white border border-green-500 rounded-3xl ps-5 pe-4 w-4/5 h-[270px] flex flex-col justify-center gap-y-4">

                    {/* heading */}
                    <h2 className="text-2xl text-[#4ea88a] font-semibold">{el.title}</h2>

                    {/* info */}
                    <p className="text-md font-normal opacity-70">{el.info}</p>

                    </div>

                </div> ) }
            </div>
        </div>
        </section>
    );
}

export default Services;