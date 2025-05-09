"use client";

function Footer()
{
    let year=(new Date()).getFullYear();
    return (
        <footer className="mt-10 border-t-2 border-slate-200  dark:border-slate-800 w-[85%] mx-auto h-19 flex flex-col justify-center">
            <div className="text-base opacity-50 font-normal flex items-center justify-between">   <span>© {year}. All right reserved.</span>  <span>Designed by Tejas Dhamale.</span> </div>
        </footer>
    );
}

export default Footer;