
function ConHeading({text}) {
    return (
        <div className="relative">
            <h2 className="text-center font-extrabold text-6xl md:text-8xl opacity-5 dark:opacity-10">{text}</h2>
            <div className="absolute top-2/5 left-1/2 -transform -translate-1/2">
                <h4 className="text-[#4ea88a] text-xl text-center font-semibold  mb-1 md:mb-3">{text}</h4>
                {/* underline */}
                <div className="w-[200px] mx-auto grid grid-cols-3">
                    <div className="border-1 border-slate-300" />
                    <div className="border-1 border-[#4ea88a]" />
                    <div className="border-1 border-slate-300" />
                </div>
            </div>
        </div>
    );
}

export default ConHeading;