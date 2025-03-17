import React, { Component } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import PortfolioTimeline from "./Timeline";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Hello'
        }
    }

    myArray = ['Hello', 'Hola', 'مرحبًا', 'ನಮಸ್ಕಾರ', 'नमस्ते', 'Bonjour', 'привет', '你好', 'こんにちは'];

    componentDidMount() {
        setInterval(() => {
            this.setState({ title: this.myArray[Math.floor(Math.random() * this.myArray.length)] })
        }, 1000);
    }

    render() {
        return (
            <div className="flex flex-col justify-evenly items-center bg-black min-h-screen p-8 overflow-hidden relative">
                {/* Smooth gradient with blur and no moving lines */}
                <div className="absolute inset-0 bg-gradient bg-opacity-90 filter blur-15 z-0"></div>
                <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-lg z-0"></div>

                <motion.h1
                    className="text-white font-bold p-10 pt-20 z-20 text-5xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl"
                    key={this.state.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {this.state.title}
                </motion.h1>

                <h2 className="text-white flex justify-center font-sans z-20 w-96 text-lg sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                    I'm a Pratham Bhandari
                </h2>

                <div className="flex flex-col lg:flex-row gap-6">
                    <PortfolioTimeline />
                </div>

                <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 10 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <FaArrowDown size={30} />
                </motion.div>
            </div>
        )
    }
}

export default Home;
