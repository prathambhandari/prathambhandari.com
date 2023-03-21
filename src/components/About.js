import React from "react";


function About (){
    return(
        <div className="flex  flex-col justify-around items-center bg-slate-100 h-screen ">
        <h1 className="text-4xl font-bold text-slate-900 p-10 z-20">About</h1>
        <div className="bg-slate-200 flex flex-col items-center sm:flex-col md:flex-col lg:flex-row 2xl:flex-row p-10  rounded-sm z-20 border-solid border-stone-500 border-2">
            <img src="https://pbs.twimg.com/profile_images/1269046768546672640/orvrer_K_400x400.jpg" className="z-20 img-fluid rounded-top object-cover rounded-full w-40 h-40 max-h-40 max-w-40 border-solid border-stone-500 border-4" alt=""></img>
            <div className=" p-10 tracking-wide text-lg ">
                <p className="text-ellipsis w-96">Born in Mangalore, India. Love to code and design Websites,
                   Welll I like to travel,read books,Singing and Guitar,Tbh in singing and guitar im just jack of two trades and master at none.So what else 🤔 ,Well i like the book "Atomic Habits",🫢 I run a channel on Youtube as well all Social Links on the bottom 👇. 
                </p>
            </div>
        </div>
        </div>
    )
}

export default About;