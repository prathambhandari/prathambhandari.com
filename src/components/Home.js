import React, { Component } from "react";
import Courses from "./Courses";
import PortfolioTimeline from "./Timeline";

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
           
            <div className="flex flex-col justify-center items-center bg-black  h-screen p-8 overflow-hidden">
                <li className=" h-72 w-72 bg-rose-200 blur-3xl rounded-3xl self-start animate-spin-slow list-none z-0"></li>
                <h1 className="text-white w-auto font-bold p-10  z-20 text-5xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl">{this.state.title}</h1> 
                <h2 className=" text-white flex justify-center py-3 pt-10 font-sans z-20 w-96 text-lg sm:text-lg md:text-xl lg:text-2xl 2xl:text-2xl">Im Developer,</h2>
                <PortfolioTimeline />
                <li className=" h-72 w-72 bg-teal-200 blur-3xl rounded-3xl self-end animate-spin-slow list-none z-0"></li>
            </div>
  
        )
    }

}


export default Home;