import React from "react";

function Courses() {
    return (
        <div className="flex flex-col justify-around h-auto items-center py-12 bg-black">
            <h1 className="text-4xl font-semibold mb-10 text-white">Courses</h1>
            
            <div className="flex flex-wrap justify-center gap-8 p-6 sm:p-8 bg-black">
                
                {/* Github Course Card with Dark Design */}
                <div className="bg-slate-900 w-80 h-auto p-6 flex flex-col justify-between rounded-lg border-2 border-slate-700 shadow-xl cursor-pointer hover:scale-105 hover:bg-slate-800 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-white text-2xl font-semibold">Version Control with GitHub: The Complete Course</h1>
                        <p className="text-slate-200 text-base">A Comprehensive Course on Code Management and Collaboration. Learn how to effectively manage your code and collaborate with others using Git and GitHub.</p>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <a href="https://www.udemy.com/share/10a5DG/" className="text-decoration-none">
                            <button className="bg-black px-8 py-3 text-slate-200 rounded-md hover:bg-orange-900 transition-colors duration-200">Start Learning</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Courses;




