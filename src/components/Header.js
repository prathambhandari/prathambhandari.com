import React from "react";

function Header(){
    return(
        <div className="fixed bg-stone-800 text-slate-50 p-5 w-screen flex justify-around items-center">
            <h1 className="text-3xl">Pratham</h1>
            <ul className="flex w-80 justify-around">
                <li className=" cursor-pointer hover:text-slate-300">Home</li>
                <li className="cursor-pointer hover:text-slate-300">About</li>
                <li className="cursor-pointer hover:text-slate-300">Gallery</li>
               <li className="cursor-pointer hover:text-slate-300">Contact</li>
                
            
            </ul>
            
        </div>
    )
}
export default Header;