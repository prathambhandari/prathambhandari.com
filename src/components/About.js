import React from "react";
import { SocialIcon } from 'react-social-icons';


function About (){
    return(
        <div className="flex flex-col justify-around items-center  bg-black py-6 w-full ">
        {/* <h1 className="text-4xl font-bold text-slate-900 p-10 z-20">About</h1> */}
        <div className="bg-black w-full  justify-center flex flex-col items-center sm:flex-col md:flex-col lg:flex-row 2xl:flex-row p-10  rounded-sm z-20 ">
            <img src="https://avatars.githubusercontent.com/u/62651866?v=4" className="z-20 img-fluid rounded-top object-cover rounded-full w-40 h-40 max-h-40 max-w-40 border-solid border-stone-300 border-8" alt=""></img>
            <div className=" p-10 text-lg ">
                <p className="text-justify font-normal text-white">Born in Mangalore, India. Love to code,
                   Well I like to travel,read books as well, I run a channel on Youtube as well all Social Links on the bottom 👇. 
                </p>
            </div>
        </div>

        <div className="flex justify-center items-center bg-black w-full p-2">
            <SocialIcon url="https://x.com/prathbhandari" network="twitter" target="_blank"  fgColor="white" bgColor="transparent" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://www.instagram.com/prathamkrishnabhandari" network="instagram" target="_blank" fgColor="white" bgColor="transparent" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://www.youtube.com/@prathambhandari" network="youtube"  target="_blank" fgColor="white" bgColor="transparent" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://github.com/prathambhandari" network="github" target="_blank"  fgColor="white" bgColor="transparent" style={{ height: 60, width: 60 }}/>
        </div>
        </div>
    )
}

export default About;
