import React from "react";
import './animation.css';

function Project (){
    return(
        <div className="flex flex-col justify-around h-auto items-center p-8 bg-slate-100  ">
            <h1 className="text-4xl font-bold  mb-10">Projects</h1>
            
            <div className="bg-slate-100 w-screen sm:w-screen md:w-screen lg:w-auto 2xl:w-auto p-5  grid grid-cols-1 grid-rows-2 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 rounded-lg"> 
                <div className="">
                <img src="https://i.ibb.co/mbwzbDW/work2.png" alt="work2"  className="object-cover h-60 w-96 transscle rounded-lg"></img>
                </div>
                <div className="">
                <img src="https://i.ibb.co/B3XKVPC/work5.jpg" alt="work2"  className="object-cover h-60 w-96 transscle  rounded-lg"></img>
                </div>
                <div className="">
                <img src="https://i.ibb.co/bFQ5mqK/work3.jpg" alt="work2"  className="object-cover h-60 w-96 transscle  rounded-lg"></img>
                </div>
                <div className="">
                <img src="https://i.ibb.co/2Z87w4C/work4.png" alt="work2"  className="object-cover h-60 w-96 transscle  rounded-lg"></img>
                </div>
                <div className="">
                <img src="https://i.ibb.co/xM8m2LG/work1.jpg" alt="work2"  className="object-cover h-60 w-96 transscle  rounded-lg"></img>
                </div>  
                <div className="">
                <img src="https://user-images.githubusercontent.com/62651866/221272922-d98ffc5d-ecbb-4e0c-b6f0-579f36adb73f.png" alt="work2"  className="object-cover transscle  h-60 w-96 "></img>
                </div>  
            </div>
         
        </div>
    )
}

export default Project;