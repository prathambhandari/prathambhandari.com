import React, { Component } from "react";
import Courses from "./Courses";

class Home extends Component{
    constructor(){
        super();
        this.state = {
            title: ''
        }
    }
    myArray=['Hello','Hola','مرحبًا','ನಮಸ್ಕಾರ','नमस्ते','Bonjour','привет',];

    componentDidMount(){
        setInterval(()=>{
            this.setState({title:this.myArray[Math.floor(Math.random()*this.myArray.length)]})
        },1500);
    }
    render(){
        return(
            <div>
            <div className="flex flex-col justify-center items-center bg-slate-100  h-screen p-36">
            <li className=" h-72 w-72 bg-rose-200 blur-3xl rounded-3xl self-start animate-spin-slow list-none z-0"></li>
            <h1 className=" w-auto font-bold p-10 z-20 text-5xl sm:text-5xl md:text-7xl lg:text-7xl 2xl:text-7xl">{this.state.title}</h1> 
            <h2 className="flex justify-center py-3 font-sans z-20 w-96 text-lg sm:text-lg md:text-xl lg:text-xl 2xl:text-xl">Im Developer,</h2>
            <h1 className="flex justify-center py-3 font-bold z-20 w-96 text-2xl  sm:text-lg md:text-xl lg:text-xl 2xl:text-xl ">Courses ⬇️</h1>
            {/* <button className="bg-black px-6 py-3  text-slate-200 rounded-md hover:text-rose-100 ">Courses</button> */}
             <li className=" h-72 w-72 bg-teal-200 blur-3xl rounded-3xl self-end animate-spin-slow list-none z-0"></li>
            </div>
      
            </div>
        )
    }

}




export default Home;