import React from "react";
import { SocialIcon } from 'react-social-icons';

function About (){
    return(
        <div className="flex  flex-col justify-around items-center  bg-slate-100 h-screen ">
        {/* <h1 className="text-4xl font-bold text-slate-900 p-10 z-20">About</h1> */}
        <div className="bg-slate-200 sm:w-12/12 md:8/12 lg:w-8/12 2xl:w-6/12  justify-center flex flex-col items-center sm:flex-col md:flex-col lg:flex-row 2xl:flex-row p-10  rounded-sm z-20 ">
            <img src="https://pbs.twimg.com/profile_images/1739459247190990848/qviuflVO_400x400.jpg" className="z-20 img-fluid rounded-top object-cover rounded-full w-40 h-40 max-h-40 max-w-40 border-solid border-stone-700 border-2" alt=""></img>
            <div className=" p-10  text-lg ">
                <p className="text-justify">Born in Mangalore, India. Love to code,
                   Well I like to travel,read books as well, I run a channel on Youtube as well all Social Links on the bottom 👇. 
                </p>
            </div>
            
        </div>
        <div className="flex justify-start bg-slate-200 p-2 rounded-lg">
            <SocialIcon url="https://twitter.com/iampratham24" network="twitter" target="_blank"  fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://www.linkedin.com/in/prathambhandari/" network="linkedin" target="_blank" fgColor="#000" bgColor="transparent"  style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://www.instagram.com/prathamkbhandari/" network="instagram" target="_blank" fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://www.youtube.com/channel/UCeVe4cXVtvN0p4Rcw8sQNBw" network="youtube"  target="_blank" fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://github.com/prathambhandari" network="github" target="_blank"  fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/>
        </div>
        </div>
    )
}

export default About;
