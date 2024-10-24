import React from "react";

function Header(){
    return(
        <div className="fixed z-40 bg-opacity-90 font-medium bg-slate-100  text-slate-900 p-4 w-screen flex justify-start items-center">
            <h1 className="bg-gray-900 text-white text-xs font-medium border-2  px-4 py-2 rounded-full cursor-pointer hover:animate-pulse">Pratham Bhandari</h1>
            {/* <ul className="flex w-80 justify-around">
                <li className=" cursor-pointer hover:text-slate-300">Home</li>
                <li className="cursor-pointer hover:text-slate-300">About</li>
                <li className="cursor-pointer hover:text-slate-300">Gallery</li>
               <li className="cursor-pointer hover:text-slate-300">Contact</li>    
            </ul> */}
            
        </div>
    )
}
export default Header;