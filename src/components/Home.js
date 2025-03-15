import React, { Component } from "react";
import Courses from "./Courses";
import PortfolioTimeline from "./Timeline";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

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
                <h1 className="text-white w-auto font-bold p-10 pt-12  z-20 text-5xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl">{this.state.title}</h1> 
                <h2 className=" text-white flex justify-center py-3 pt-1 font-sans z-20 w-96 text-lg sm:text-lg md:text-xl lg:text-2xl 2xl:text-2xl">Im Software Developer, Video Editor</h2>
                <PortfolioTimeline />
                <motion.div 
                     className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400"
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 10 }}
                     transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                 >
                <FaArrowDown size={30} />
               </motion.div>
                <li className=" h-72 w-72 bg-teal-200 blur-3xl rounded-3xl self-end animate-spin-slow list-none z-0"></li>
            </div>
  
        )
    }

}


export default Home;