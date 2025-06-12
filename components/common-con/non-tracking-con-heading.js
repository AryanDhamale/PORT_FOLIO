
function ConHeading({firstHalf,secondHalf}) {
    return (
            <div>
                <h4 className="select-none text-3xl tracking-wider text-center font-semibold mb-1 md:mb-3"> <span className="text-[#4361ee]">{firstHalf}</span><span className="text-white/90">{secondHalf}</span> </h4>
            </div>
    );
}

export default ConHeading;