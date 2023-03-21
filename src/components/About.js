import React from "react";


function About (){
    return(
        <div className="flex  flex-col justify-around items-center bg-slate-100   h-screen">
    
        <h1 className="text-4xl font-bold text-slate-900">About</h1>
        <div className="bg-slate-200 flex  w-6/12 h-3/6 p-20 rounded-lg">
            <img src="https://pbs.twimg.com/profile_images/1269046768546672640/orvrer_K_400x400.jpg" className="img-fluid rounded-top h-80 w-80 rounded-2xl	" alt=""></img>
            <div className=" p-10 tracking-wide text-lg">
                <p>Born in Mangalore, India. Love to code and design Websites,
                   Welll I like to travel,read books,Singing and Guitar,Tbh in singing and guitar im just jack of two trades and master at none.So what else 🤔 ,Well i like the book "Atomic Habits",🫢 I run a channel on Youtube as well all Social Links on the bottom 👇. 
                </p>
            </div>
        </div>
        </div>
    )
}

export default About;