import React from "react";
import { SocialIcon } from 'react-social-icons';


function About (){
    return(
        <div className="flex flex-col justify-around items-center  bg-slate-100 py-6 w-full ">
        {/* <h1 className="text-4xl font-bold text-slate-900 p-10 z-20">About</h1> */}
        <div className="bg-slate-200 w-full  justify-center flex flex-col items-center sm:flex-col md:flex-col lg:flex-row 2xl:flex-row p-10  rounded-sm z-20 ">
            <img src="https://media.licdn.com/dms/image/v2/D5603AQGD8sqZzN7WCw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729193014589?e=1735171200&v=beta&t=T-o5DVIsh2nJeTgTN9xGBWqjg3UQU8SPJEyYq7dgdbQ" className="z-20 img-fluid rounded-top object-cover rounded-full w-40 h-40 max-h-40 max-w-40 border-solid border-stone-300 border-8" alt=""></img>
            <div className=" p-10 text-lg ">
                <p className="text-justify font-normal">Born in Mangalore, India. Love to code,
                   Well I like to travel,read books as well, I run a channel on Youtube as well all Social Links on the bottom 👇. 
                </p>
            </div>
        </div>

        <div className="flex justify-center items-center bg-slate-200 w-full p-2">
            <SocialIcon url="https://twitter.com/iampratham24" network="twitter" target="_blank"  fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://www.instagram.com/_prathambhandari/" network="instagram" target="_blank" fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://www.youtube.com/channel/UCeVe4cXVtvN0p4Rcw8sQNBw" network="youtube"  target="_blank" fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/>
            <SocialIcon url="https://github.com/prathambhandari" network="github" target="_blank"  fgColor="#000" bgColor="transparent" style={{ height: 60, width: 60 }}/>
        </div>
        </div>
    )
}

export default About;
