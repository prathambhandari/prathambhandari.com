import React from "react";
import './animation.css';

function Courses(){

    return(
        <div className="flex flex-col justify-around h-auto items-center py-12 bg-black">
            <h1 className="text-4xl font-semibold  mb-5">Courses</h1>
         
           <div className="flex flex-wrap justify-around h-auto items-center p-4 bg-black gap-5">


            {/* Github */}

            <div className=" rounded-lg  bg-gradient-to-r from-slate-500 to-slate-600 w-72 h-72 p-6  flex flex-col justify-between cursor-pointer hover:from-slate-400 hover:to-slate-400 transition-transform">     
                <div>
                    <h1 className="text-black text-2xl mb-3 font-semibold">Version Control with GitHub: The Complete Course</h1>
                    <p className="mb-5 text-medium">A Comprehensive Course on Code Management and Collaboration</p>
                </div>
                <div>
                    <a href="https://www.udemy.com/share/10a5DG/" className="text-decoration-none">
                        <button className="bg-black px-6 py-3 text-slate-200 rounded-md hover:text-rose-100">Start Learning</button>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Courses;




