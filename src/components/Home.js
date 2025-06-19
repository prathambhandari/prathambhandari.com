import React, { Component } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import PortfolioTimeline from "./Timeline";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      title: "Hello",
    };
  }

  myArray = [
    "Hello",
    "Hola",
    "مرحبًا",
    "ನಮಸ್ಕಾರ",
    "नमस्ते",
    "Bonjour",
    "привет",
    "你好",
    "こんにちは",
  ];

  componentDidMount() {
    setInterval(() => {
      this.setState({
        title: this.myArray[Math.floor(Math.random() * this.myArray.length)],
      });
    }, 1000);
  }

  render() {
    return (
      <div className="flex flex-col justify-evenly items-center bg-black min-h-screen p-8 overflow-hidden relative">
        {/* Smooth gradient with blur and no moving lines */}
        {/* <div className="absolute inset-0 bg-gradient bg-opacity-90 filter blur-15 z-0"></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-lg z-0"></div> */}

        <h2 className="text-white flex justify-center font-sans z-20 w-96 text-lg sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          I'm a Pratham Bhandari
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          <PortfolioTimeline />
        </div>
      </div>
    );
  }
}

export default Home;
