
function ConHeading({text}) {
    return (
            <div>
                <h4 className="select-none text-[#4361ee] text-xl text-center font-semibold mb-1 md:mb-3">{text}</h4>
                {/* underline */}
                <div className="w-[200px] mx-auto grid grid-cols-3">
                    <div className="border-1 border-slate-300" />
                    <div className="border-1 border-[#4361ee]" />
                    <div className="border-1 border-slate-300" />
                </div>
            </div>
    );
}

export default ConHeading;